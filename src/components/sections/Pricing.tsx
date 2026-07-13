"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

type Tier = {
  name: string;
  blurb: string;
  price: (annual: boolean) => string;
  unit: (annual: boolean) => string;
  sub: (annual: boolean) => string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    blurb: "Everyday answers from fast models",
    price: () => "$0",
    unit: () => "",
    sub: () => "Always free",
    features: [
      "10 asks a month",
      "GPT, Claude, Gemini & Perplexity",
      "Full honest verdict & history",
    ],
    cta: "Join the waitlist",
  },
  {
    name: "Pro",
    blurb: "The frontier roster + a stronger judge",
    price: (a) => (a ? "$79.99" : "$9.99"),
    unit: (a) => (a ? "/yr" : "/mo"),
    sub: (a) => (a ? "billed yearly · 2 months free" : "or $79.99 / year"),
    features: [
      "Frontier models from OpenAI, Anthropic, Google & Perplexity",
      "A stronger judge for deeper verdicts",
      "Chat, attachments & synced history",
    ],
    cta: "Join the waitlist",
    badge: "Most popular",
    featured: true,
  },
  {
    name: "Max",
    blurb: "Everything, deeper verdicts, headroom",
    price: (a) => (a ? "$199.99" : "$24.99"),
    unit: (a) => (a ? "/yr" : "/mo"),
    sub: (a) => `at v1.0 · ${a ? "billed yearly" : "$199.99 / year"}`,
    features: [
      "Deep synthesis — the strongest judge",
      "Extended verdicts & more frontier headroom",
      "Everything in Pro",
    ],
    cta: "Notify me",
    badge: "Coming soon",
  },
];

function Check({ featured }: { featured?: boolean }) {
  return (
    <span
      className={`mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
        featured ? "bg-prism/20 ring-1 ring-prism/30" : "bg-sage/15 ring-1 ring-sage/25"
      }`}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5L20 6"
          stroke={featured ? "#E0956F" : "#B8C7B1"}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="container-prism">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-tight tracking-tighter text-ink sm:text-[42px]">
            Start free. Upgrade for the frontier models.
          </h2>

          {/* toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-hairline bg-card/50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                !annual ? "bg-inset text-ink shadow-sm" : "text-ink-muted"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                annual ? "bg-inset text-ink shadow-sm" : "text-ink-muted"
              }`}
            >
              Annual
              <span className="rounded-full bg-sage/15 px-1.5 py-0.5 text-[10px] font-semibold text-sage">
                save 33%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-6 sm:p-7 ${
                t.featured
                  ? "border-prism/30 bg-card shadow-glow lg:-my-2 lg:py-9"
                  : "border-hairline bg-card/50"
              }`}
            >
              {t.badge && (
                <span
                  className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-semibold ${
                    t.featured
                      ? "bg-gradient-to-r from-prism-glow to-prism text-canvas"
                      : "glass-strong text-ink-soft"
                  }`}
                >
                  {t.badge}
                </span>
              )}

              <h3 className="text-[19px] font-semibold text-ink">{t.name}</h3>
              <p className="mt-1 text-[13px] leading-snug text-ink-soft">
                {t.blurb}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-[38px] font-semibold tracking-tight text-ink">
                  {t.price(annual)}
                </span>
                <span className="text-[14px] text-ink-muted">
                  {t.unit(annual)}
                </span>
              </div>
              <p className="mt-1 text-[12px] text-ink-muted">{t.sub(annual)}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check featured={t.featured} />
                    <span className="text-[14px] leading-snug text-ink-soft">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className={`mt-7 w-full text-center ${
                  t.featured ? "btn-primary" : "btn-ghost"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-ink-muted">
            Every plan gets Prism&apos;s honest verdict — blinding and &ldquo;no
            clear winner&rdquo; are never paid features. Beta sells Free &amp;
            Pro; Max opens at v1.0.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
