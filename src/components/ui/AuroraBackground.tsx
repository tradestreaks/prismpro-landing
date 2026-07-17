/**
 * Soft, animated gradient "aurora" that sits behind the page. Uses the Prism
 * spectrum hues at very low opacity over the deep canvas, plus a grain overlay
 * for a premium, non-banded finish. Pure CSS — no JS, no layout cost.
 *
 * Mobile perf: large-radius blurs are expensive to rasterize on phones, so the
 * blur radii are smaller by default and only grow on `sm:`+ (desktop). The two
 * secondary blobs and the grain overlay are desktop-only — mobile keeps just
 * two soft blooms, which is plenty over the dark canvas.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* coral / prism warmth, top */}
      <div className="absolute -top-[24%] left-[-10%] h-[62vh] w-[62vh] rounded-full bg-prism/25 blur-[70px] animate-aurora sm:blur-[120px]" />
      {/* lavender, right */}
      <div
        className="absolute top-[8%] right-[-14%] h-[54vh] w-[54vh] rounded-full bg-spectrum-lavender/20 blur-[80px] animate-aurora sm:blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      {/* sage, lower left — desktop only */}
      <div
        className="absolute bottom-[-18%] left-[6%] hidden h-[50vh] w-[50vh] rounded-full bg-spectrum-sage/15 blur-[130px] animate-aurora sm:block"
        style={{ animationDelay: "-12s" }}
      />
      {/* indigo depth, center — desktop only */}
      <div
        className="absolute top-[38%] left-[38%] hidden h-[46vh] w-[46vh] rounded-full bg-indigo/10 blur-[140px] animate-aurora sm:block"
        style={{ animationDelay: "-9s" }}
      />
      {/* vignette to keep edges deep */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,rgba(12,14,18,0.85)_100%)]" />
      {/* fine grain — desktop only (full-screen feTurbulence is costly on mobile) */}
      <div className="grain absolute inset-0 hidden opacity-[0.05] mix-blend-overlay sm:block" />
    </div>
  );
}
