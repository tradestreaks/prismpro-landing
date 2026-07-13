/**
 * Soft, animated gradient "aurora" that sits behind the page. Uses the Prism
 * spectrum hues at very low opacity over the deep canvas, plus a grain overlay
 * for a premium, non-banded finish. Pure CSS — no JS, no layout cost.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* coral / prism warmth, top */}
      <div className="absolute -top-[24%] left-[-10%] h-[62vh] w-[62vh] rounded-full bg-prism/25 blur-[120px] animate-aurora" />
      {/* lavender, right */}
      <div
        className="absolute top-[8%] right-[-14%] h-[54vh] w-[54vh] rounded-full bg-spectrum-lavender/20 blur-[130px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      {/* sage, lower left */}
      <div
        className="absolute bottom-[-18%] left-[6%] h-[50vh] w-[50vh] rounded-full bg-spectrum-sage/15 blur-[130px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      {/* indigo depth, center */}
      <div
        className="absolute top-[38%] left-[38%] h-[46vh] w-[46vh] rounded-full bg-indigo/10 blur-[140px] animate-aurora"
        style={{ animationDelay: "-9s" }}
      />
      {/* vignette to keep edges deep */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,rgba(12,14,18,0.85)_100%)]" />
      {/* fine grain */}
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
