# Prism — Launch Landing Page

> **Deployment mirror.** The source of truth is
> [`Tradestreaks-LLC/Prism/apps/landing`](https://github.com/Tradestreaks-LLC/Prism/tree/main/apps/landing).
> Make product changes in the monorepo and publish them here for Vercel until
> the production project is connected directly to the private monorepo.

A premium, high-converting pre-launch page for **prismpro.ai** (product name
**Prism**, by **Tradestreaks LLC**). Dark-mode-first, built to feel like the app
itself — calm, editorial, synthesis-first.

Copyright © 2026 Tradestreaks LLC. All rights reserved. Prism™ is a trademark
of Tradestreaks LLC.

This is proprietary software, not an open-source project. The repository is
publicly viewable because the landing page deploys through Vercel's free Hobby
plan. Public availability does not grant permission to copy, modify,
distribute, or reuse its source, designs, copy, or brand assets. See `LICENSE`
and `CONTRIBUTING.md`.

Aesthetic blend of Apple / OpenAI / Anthropic / Linear / Arc / Vercel, tuned to
the **Prism app theme**: the ensō + coral-prism mark, the refraction spectrum
(coral → tan → lavender → sage → slate), warm dark surfaces, and editorial-serif
headlines.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with Prism design tokens mirrored from the iOS app
- **Framer Motion** for scroll reveals, parallax, and micro-interactions
- SEO metadata, Open Graph (dynamic image), JSON-LD, sitemap & robots
- Backend-ready **waitlist API** (`/api/waitlist`)

## Run

```bash
cd apps/landing
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Note: building inside the synced workspace mount can hit filesystem
> permission quirks (the mount blocks some deletes). If `rm -rf .next` errors,
> just run `npm run build` — Next overwrites in place. For the fastest local
> loop, copy `apps/landing` to a native path and build there.

## Page structure

Final copy per `reference/Prism-Landing-final-copy.html`. Order:

1. **Nav** — glass, scroll-aware, mobile hamburger menu. Links: How it works ·
   The verdict · Pricing · Roadmap · Join the waitlist.
2. **Hero** (`#top`) — "Ask once. Compare the best AI models. **Get a clearer
   answer.**", blind-comparison subhead, waitlist form, floating UI chips, and
   the real Verdict screenshot in the phone.
3. **The verdict** (`#verdict`) — statement band: "The smartest answer isn't
   from one AI — it's from all of them." + proof chips.
4. **See it work** (`#how`) — three phones: Ask once → Prism compares → Get the
   verdict.
5. **Pricing** (`#pricing`) — Free / Pro / Max with a Monthly⇄Annual toggle.
6. **Roadmap** (`#roadmap`) — "On the way", timeline with v1.0 / Next / Later.
7. **Final CTA** (`#join`) — "Be first in when the private beta opens." + form.
8. **Footer** — © Tradestreaks LLC · Prism, Privacy / Terms / Support.

Plus routes: `/privacy`, `/terms`, `/opengraph-image`, `/sitemap.xml`,
`/robots.txt`, `POST /api/waitlist`.

## Phone mockups — real screenshots + coded chrome

The three "See it work" phones and the hero use **real captures from the Prism
app**, cropped to the app body and rendered under a single coded status bar +
nav (`StatusBar`, `HomeNav`, `TitleNav`) so the Dynamic Island never doubles up.

- `public/shots/comparing_body.png` — the Comparing loader.
- `public/shots/verdict_body.png` — the Verdict screen.
- Full uncropped originals: `public/shots/comparing.png`, `verdict.png`.
- **Step 1 "Ask once"** is a coded screen (`CompareScreen` in
  `src/components/device/screens.tsx`) — the home constellation + the shared
  `PromptCard` chat box — because the recording had no compose frame. Drop a
  `public/shots/home.png` capture and swap it in the same way if desired.

To refresh a screenshot: capture the app, crop off the OS status bar + app nav
(the coded chrome replaces them), and save the body over the file above. The
`ComparingShot` / `VerdictShot` components in `screens.tsx` render them.

Other coded screens (Chat, History, Voice, Research, Images, Settings, and the
coded Verdict/Compare fallbacks) still live in `screens.tsx` for reuse.

## Brand mark

`src/components/brand/PrismMark.tsx` tints the real ensō artwork
(`public/enso.png`, from the iOS `PrismEnso` asset) via CSS mask and overlays the
coral core + spectrum beams. `public/prism-mark.png` is the baked full mark used
by the favicon and OG image.

## Waitlist integration

`src/app/api/waitlist/route.ts` validates the email and records the signup. Out
of the box it appends to a gitignored `.data/waitlist.jsonl`. To go to
production, replace the `persist()` body with your provider (Resend, Airtable,
Supabase, Loops, ConvertKit…) — the TODO block has drop-in snippets. Client
contract: `{ ok, message }` / `{ error }`.

## Deploy

Zero-config on Vercel (or any Node host). Set `site.url` / brand strings in
`src/lib/site.ts` if the domain changes. The OG image renders at
`/opengraph-image`.

## Design tokens

Colors live in `tailwind.config.ts`, mirrored from
`apps/ios/Prism/Assets.xcassets`:

| Token | Value |
|---|---|
| Canvas / Card / Inset | `#0C0E12` · `#1A1D24` · `#232733` |
| Ink | `#F5F1E8` |
| Prism core / glow | `#C97B57` → `#E0956F` |
| Spectrum | `#DC9A7E` `#E3C3A4` `#B8B1C2` `#9CAEA1` `#808D9B` |
| Models | GPT `#B8C7B1` · Claude `#F2A7A0` · Gemini `#8EA4D2` · Perplexity `#A3CEC9` |

## Reference

`reference/Prism-Landing-final-copy.html` — the approved copy/design source
(`.decoded.html` is the readable extraction). Fonts: Inter (UI) + Newsreader
(editorial serif), loaded via Google Fonts.
