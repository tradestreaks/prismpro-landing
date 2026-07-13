"use client";

import { motion } from "framer-motion";
import PrismMark from "../brand/PrismMark";
import WaitlistForm from "../ui/WaitlistForm";

export default function FinalCTA() {
  return (
    <section id="join" className="relative py-24 sm:py-32">
      <div className="container-prism">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.5, 0.25, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-card/50 px-6 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* animated glow field */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-prism/25 blur-[100px] animate-aurora" />
            <div
              className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-spectrum-lavender/20 blur-[110px] animate-aurora"
              style={{ animationDelay: "-8s" }}
            />
            <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
          </div>

          <div className="mx-auto mb-7 flex justify-center">
            <PrismMark size={72} tone="cream" glow animated />
          </div>

          <h2 className="mx-auto max-w-3xl text-balance text-[34px] font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[50px]">
            Be first in when the{" "}
            <span className="text-spectrum">private beta</span> opens.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            Join the waitlist for a private beta invite. One email when it opens
            — no spam.
          </p>

          <div className="mx-auto mt-9 max-w-[520px]">
            <WaitlistForm size="lg" cta="Join the waitlist" source="final-cta" />
            <p className="mt-4 text-[13px] text-ink-muted">
              Free to join the waitlist · plans start free once the beta opens —
              no card to get in line.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
