import Wordmark from "../brand/Wordmark";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "The verdict", href: "#verdict" },
      { label: "Pricing", href: "#pricing" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    h: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Join the waitlist", href: "#join" },
      { label: "Support", href: site.social.support },
      { label: "GitHub", href: site.social.github },
      { label: "X / Twitter", href: site.social.x },
    ],
  },
  {
    h: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline pb-10 pt-16">
      <div className="container-prism">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              One prompt to the best AI models. One clear, sourced answer — and
              an honest &ldquo;no clear winner&rdquo; when that&apos;s the truth.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.x}
                aria-label="Prism Pro on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:bg-card hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-7 8 8.2 12H16l-5-7.3L5.3 22H2l7.5-8.6L2 2h7.3l4.6 6.6L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
                </svg>
              </a>
              <a
                href={site.social.github}
                aria-label="Prism on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:bg-card hover:text-ink"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a
                href={site.social.contact}
                aria-label="Contact Prism Pro"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:bg-card hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {c.h}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-[13px] text-ink-muted">
            © {new Date().getFullYear()} {site.company} · Prism
          </p>
          <p className="text-[13px] text-ink-muted">prismpro.ai</p>
        </div>
      </div>
    </footer>
  );
}
