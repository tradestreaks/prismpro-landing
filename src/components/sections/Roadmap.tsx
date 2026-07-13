"use client";

import { motion } from "framer-motion";
import { Reveal, staggerItem } from "../ui/Reveal";

const items = [
  {
    t: "Frontier roster & Max",
    d: "The strongest model from each provider + deep synthesis.",
    tag: "v1.0",
    tone: "prism",
  },
  {
    t: "Shared web verdicts",
    d: "Send a read-only verdict link — no account needed.",
    tag: "Next",
    tone: "sage",
  },
  {
    t: "Multi-turn compare",
    d: "Follow up without losing the thread — the path to agents.",
    tag: "Later",
    tone: "muted",
  },
  {
    t: "Android & web",
    d: "iPhone and iPad ship today — Android and web come next.",
    tag: "Later",
    tone: "muted",
  },
];

const toneClass: Record<string, string> = {
  prism: "bg-prism/15 text-prism-glow ring-prism/25",
  sage: "bg-sage/15 text-sage ring-sage/25",
  muted: "bg-inset text-ink-muted ring-hairline",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-28">
      <div className="container-prism">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">On the way</span>
            <h2 className="mt-5 text-balance text-[32px] font-semibold leading-tight tracking-tighter text-ink sm:text-[42px]">
              Where Prism goes next.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              A focused roadmap — the verdict engine gets deeper before it gets
              wider.
            </p>
          </Reveal>

          <motion.ol
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            {/* spine */}
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" />
            {items.map((it) => (
              <motion.li
                key={it.t}
                variants={staggerItem}
                className="relative flex items-start gap-5 py-4 pl-8"
              >
                <span className="absolute left-0 top-[22px] h-[15px] w-[15px] rounded-full border-2 border-canvas bg-prism ring-1 ring-prism/40" />
                <div className="flex flex-1 items-start justify-between gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-ink">{it.t}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                      {it.d}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ${toneClass[it.tone]}`}
                  >
                    {it.tag}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
