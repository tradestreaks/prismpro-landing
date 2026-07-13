"use client";

import { motion } from "framer-motion";
import { SpectrumDots } from "../device/screen-parts";
import { Reveal } from "../ui/Reveal";

export default function VerdictBand() {
  return (
    <section id="verdict" className="relative py-24 sm:py-32">
      <div className="container-prism">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2.5">
            <SpectrumDots size={7} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              The verdict
            </span>
          </div>
          <h2 className="text-balance font-serif text-[30px] font-medium leading-[1.14] text-ink sm:text-[46px]">
            The smartest answer isn&apos;t from one AI —{" "}
            <span className="text-spectrum">it&apos;s from all of them.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
            Prism reads every model&apos;s answer, scores them against each other,
            and writes one verdict — with the agreements, the disagreements, and
            an honest &ldquo;no clear winner&rdquo; when that&apos;s the truth.
          </p>
        </Reveal>

        {/* proof chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5"
        >
          {[
            "Blind comparison",
            "Scored & sourced",
            "Agreement & divergence",
            "Says when it's a tie",
          ].map((c) => (
            <span
              key={c}
              className="glass rounded-full px-4 py-2 text-[13px] text-ink-soft"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
