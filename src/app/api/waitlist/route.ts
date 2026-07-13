import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

/**
 * Waitlist capture — backend-ready stub.
 *
 * Validates the email and records the signup. For local/dev it appends to
 * `.data/waitlist.jsonl` (gitignored). To wire a real provider, replace the
 * `persist()` body with your integration — see the TODOs below. The client
 * (`WaitlistForm`) already expects `{ ok, message }` / `{ error }`.
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = { email?: string; source?: string };

async function persist(entry: {
  email: string;
  source: string;
  ts: string;
  ua: string | null;
}) {
  // ── TODO: swap this local capture for your production destination ──
  //
  // Resend audience:
  //   await resend.contacts.create({ email: entry.email, audienceId: process.env.RESEND_AUDIENCE_ID! });
  //
  // Airtable:
  //   await fetch(`https://api.airtable.com/v0/${BASE}/Waitlist`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({ fields: { Email: entry.email, Source: entry.source } }),
  //   });
  //
  // Supabase / Postgres:
  //   await db.from("waitlist").insert({ email: entry.email, source: entry.source });
  //
  // ConvertKit, Loops, Mailchimp, etc. all fit here too.
  //
  // Default: append to a local JSONL file so the form works out of the box.
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "waitlist.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf8"
    );
  } catch {
    // On read-only/serverless filesystems this will fail — that's expected.
    // The signup is still acknowledged; replace persist() before production.
    console.info("[waitlist] signup:", entry.email, `(${entry.source})`);
  }
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

  await persist({
    email,
    source,
    ts: new Date().toISOString(),
    ua: req.headers.get("user-agent"),
  });

  return NextResponse.json({
    ok: true,
    message: "You're on the waitlist.",
  });
}

export function GET() {
  return NextResponse.json({ ok: true, service: "prismpro-waitlist" });
}
