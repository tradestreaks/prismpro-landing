"use client";

import { motion } from "framer-motion";
import IPhone from "../device/IPhone";
import { VerdictShot } from "../device/screens";
import { SpectrumDots } from "../device/screen-parts";
import WaitlistForm from "../ui/WaitlistForm";

const ease = [0.21, 0.5, 0.25, 1] as const;

function FloatChip({
  children,
  className,
  delay = 0,
  float = "animate-float",
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  float?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div className={float}>{children}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-36 sm:pt-40 lg:pb-32"
    >
      <div className="container-prism">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.a
              href="#join"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow mx-auto lg:mx-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-prism-glow animate-breathe" />
              Private beta opening soon
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.06 }}
              className="mt-6 text-balance text-[38px] font-semibold leading-[1.05] tracking-tighter text-ink sm:text-[50px] lg:text-[56px]"
            >
              Ask once. Compare the best AI models.{" "}
              <span className="text-spectrum">Get a clearer answer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.14 }}
              className="mx-auto mt-6 max-w-[560px] text-pretty text-[17px] leading-relaxed text-ink-soft lg:mx-0 sm:text-[18px]"
            >
              Prism sends one prompt to leading models from OpenAI, Anthropic,
              Google and Perplexity, compares them{" "}
              <span className="text-ink">blind</span>, and shows the strongest
              response, where they agree, and where they differ. When there
              isn&apos;t a clear winner, Prism says so.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
              className="mx-auto mt-8 max-w-[520px] lg:mx-0"
            >
              <WaitlistForm size="lg" cta="Join the beta waitlist" source="hero" />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-ink-muted lg:justify-start">
                <a
                  href="#how"
                  className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
                >
                  Watch a verdict
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14m0 0-6-6m6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-ink-muted/60" />
                  One email when it opens. No spam.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: phone + floating UI */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-[420px] justify-center"
            style={{ perspective: 1400 }}
          >
            <div className="animate-float-slow">
              <IPhone className="w-[clamp(236px,68vw,294px)]">
                <VerdictShot />
              </IPhone>
            </div>

            {/* floating: model comparison chips */}
            <FloatChip
              className="-left-2 top-16 sm:-left-6"
              delay={0.5}
              float="animate-float"
            >
              <div className="glass-strong flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-card">
                <div className="flex -space-x-1.5">
                  {["#F2A7A0", "#B8C7B1", "#8EA4D2", "#A3CEC9"].map((c) => (
                    <span
                      key={c}
                      className="h-4 w-4 rounded-full ring-2 ring-canvas"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium leading-tight text-ink">
                    All four converged
                  </p>
                  <p className="text-[9px] text-ink-muted">blind, in parallel</p>
                </div>
              </div>
            </FloatChip>

            {/* floating: confidence */}
            <FloatChip
              className="-right-1 top-28 sm:-right-8"
              delay={0.62}
              float="animate-float-slow"
            >
              <div className="glass-strong rounded-2xl px-3 py-2.5 text-left shadow-card">
                <div className="flex items-center gap-1.5">
                  <SpectrumDots size={5} />
                  <span className="text-[8px] font-semibold uppercase tracking-wider text-ink-soft">
                    Verdict
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-medium text-ink">
                  High confidence
                </p>
              </div>
            </FloatChip>

            {/* floating: synthesizing */}
            <FloatChip
              className="-bottom-2 left-6 sm:left-0"
              delay={0.74}
              float="animate-float"
            >
              <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 shadow-card">
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-prism-glow animate-breathe"
                      style={{ animationDelay: `${i * 180}ms` }}
                    />
                  ))}
                </span>
                <span className="text-[10px] text-ink-soft">
                  Synthesizing the best answer…
                </span>
              </div>
            </FloatChip>
          </motion.div>
        </div>

        {/* trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-col items-center gap-4 sm:mt-20"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            Models from OpenAI · Anthropic · Google · Perplexity — availability
            varies by plan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {["GPT", "Claude", "Gemini", "Perplexity"].map((m) => (
              <span
                key={m}
                className="text-[16px] font-medium tracking-tight text-ink-soft/80"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
