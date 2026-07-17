"use client";

import { motion } from "framer-motion";
import IPhone from "../device/IPhone";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    n: "1",
    title: "Ask once",
    body: "Pick models, type once, send.",
    shot: "/shots/home.webp",
    alt: "Prism home — pick models and ask once",
  },
  {
    n: "2",
    title: "Prism compares",
    body: "Four models answer in parallel, blind.",
    shot: "/shots/comparing.webp",
    alt: "Prism comparing four AI models in parallel",
  },
  {
    n: "3",
    title: "Get the verdict",
    body: "One answer, scored and sourced.",
    shot: "/shots/verdict-full.webp",
    alt: "Prism's verdict — each agent scored, all four responses sourced",
    glow: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-28">
      <div className="container-prism">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">See it work</span>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-tight tracking-tighter text-ink sm:text-[42px]">
            Ask, compare, decide — in one calm loop.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.21, 0.5, 0.25, 1],
                delay: i * 0.1,
              }}
              className="flex flex-col items-center text-center"
            >
              <IPhone
                glow={s.glow}
                island={false}
                className="w-[clamp(210px,62vw,236px)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.shot}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </IPhone>

              <div className="mt-7 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-prism/15 text-[13px] font-semibold text-prism-glow ring-1 ring-prism/25">
                  {s.n}
                </span>
                <span className="text-[17px] font-semibold text-ink">
                  {s.title}
                </span>
              </div>
              <p className="mt-2 max-w-[240px] text-[14px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-[12px] text-ink-muted">
          Real screens from the Prism app.
        </p>
      </div>
    </section>
  );
}
