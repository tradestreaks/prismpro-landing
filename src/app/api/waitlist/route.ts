import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

/**
 * Waitlist capture.
 *
 * Persists signups to Upstash Redis (a.k.a. Vercel KV) when its env vars are
 * present, otherwise falls back to a local JSONL file / log so the form always
 * works. Emails are deduped in a Redis SET, and each signup's metadata is kept
 * in a HASH keyed by email.
 *
 * Provision: Vercel → Storage → Upstash Redis (connect to this project). That
 * injects KV_REST_API_URL/KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL/TOKEN);
 * both namings are supported below. No code changes needed after provisioning.
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SET_KEY = "waitlist:emails";

type Payload = { email?: string; source?: string };

function getRedis(): Redis | null {
  const url =
    process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function persist(entry: {
  email: string;
  source: string;
  ts: string;
  ua: string | null;
}): Promise<{ isNew: boolean }> {
  const redis = getRedis();

  if (redis) {
    const added = await redis.sadd(SET_KEY, entry.email); // 1 if new, 0 if dup
    if (added) {
      await redis.hset(`waitlist:${entry.email}`, entry);
    }
    return { isNew: added === 1 };
  }

  // Fallback: local file in dev; log on read-only serverless filesystems.
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "waitlist.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf8"
    );
  } catch {
    console.info("[waitlist] signup:", entry.email, `(${entry.source})`);
  }
  return { isNew: true };
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const source = (body.source ?? "landing").slice(0, 64);

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  try {
    const { isNew } = await persist({
      email,
      source,
      ts: new Date().toISOString(),
      ua: req.headers.get("user-agent"),
    });
    return NextResponse.json({
      ok: true,
      message: isNew ? "You're on the waitlist." : "You're already on the list.",
    });
  } catch (err) {
    console.error("[waitlist] persist failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * GET  /api/waitlist            → health + count
 * GET  /api/waitlist?token=…&list=1 → full list (requires WAITLIST_ADMIN_TOKEN)
 */
export async function GET(req: Request) {
  const redis = getRedis();
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const wantList = url.searchParams.get("list");

  if (!redis) {
    return NextResponse.json({ ok: true, service: "prismpro-waitlist", store: "none" });
  }

  const count = await redis.scard(SET_KEY);

  const adminToken = process.env.WAITLIST_ADMIN_TOKEN;
  if (wantList && adminToken && token === adminToken) {
    const emails = await redis.smembers(SET_KEY);
    return NextResponse.json({ ok: true, count, emails });
  }

  return NextResponse.json({ ok: true, service: "prismpro-waitlist", store: "redis", count });
}
