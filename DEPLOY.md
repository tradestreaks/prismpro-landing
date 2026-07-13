# Deploying the Prism landing page (Vercel + Namecheap)

The site is a Next.js 14 app at `apps/landing` in the `tradestreaks/Prism`
monorepo. It uses server features (the `/api/waitlist` route and the dynamic
`/opengraph-image`), so host it on a platform that runs Next.js server output.
**Vercel** is the simplest and is recommended below.

## 1. Push the repo (from your Mac)

```bash
git push origin main
```

## 2. Import the project on Vercel

1. Go to <https://vercel.com> and sign in with GitHub.
2. **Add New… → Project**, import **`tradestreaks/Prism`**.
3. In the configure step set **Root Directory = `apps/landing`** (click *Edit*
   next to Root Directory and pick it). This is the one setting that matters for
   the monorepo.
4. Framework Preset auto-detects **Next.js**. Leave Build Command
   (`next build`), Install (`npm install`), and Output as defaults.
5. Click **Deploy**. You'll get a `…vercel.app` URL to preview.

## 3. Add the domain (Vercel side)

1. Project → **Settings → Domains**.
2. Add **`prismpro.ai`** and **`www.prismpro.ai`** (add both; set one to redirect
   to the other — apex `prismpro.ai` as primary is typical).
3. Vercel shows the exact DNS records to create. Use those values as the source
   of truth — as of now they are:
   - Apex `prismpro.ai` → **A** record → `76.76.21.21`
   - `www` → **CNAME** → `cname.vercel-dns.com`

## 4. Point Namecheap DNS at Vercel

In Namecheap: **Domain List → Manage (prismpro.ai) → Advanced DNS → Host
Records**. Delete the default parking/redirect records, then add:

| Type  | Host | Value                   | TTL       |
|-------|------|-------------------------|-----------|
| A     | `@`  | `76.76.21.21`           | Automatic |
| CNAME | `www`| `cname.vercel-dns.com.` | Automatic |

Save. Back in Vercel the domain flips to **Valid Configuration** once DNS
propagates (minutes to ~an hour). SSL is issued automatically.

> Alternative: instead of the records above you can set Namecheap → *Nameservers*
> to **Custom DNS** using Vercel's nameservers (shown in the Vercel domain panel).
> Use records **or** nameservers, not both.

## 5. Waitlist — connect a real destination before launch

The `/api/waitlist` route validates and accepts signups, but on Vercel's
read-only serverless filesystem the local `.data/waitlist.jsonl` fallback can't
persist — signups will only appear in **Vercel function logs**. Before you drive
traffic, wire a provider in `src/app/api/waitlist/route.ts` (the `persist()`
function has drop-in snippets for Resend / Airtable / Supabase / Loops). Add any
API keys under Vercel → Settings → **Environment Variables**, then redeploy.

## 6. Nice-to-haves

- Set the canonical URL: `site.url` in `src/lib/site.ts` is already
  `https://prismpro.ai`.
- Every push to `main` auto-deploys production; PRs get preview URLs.
- Verify the OG card with <https://opengraph.xyz> once live.

That's it — after step 4 propagates, `https://prismpro.ai` serves the site.
