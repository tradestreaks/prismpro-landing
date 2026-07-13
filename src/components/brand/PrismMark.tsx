/**
 * PrismMark — the Prism brand mark.
 *
 * Uses the real dry-brush ensō artwork (the exact PNG the iOS app ships, at
 * apps/ios/.../PrismEnso.imageset) as a tintable CSS mask, so the brush texture
 * and taper are pixel-accurate, then overlays the coral prism core and the six
 * refracted beams at the app's mouth coordinates (dot 116.5,98.5 · beams
 * 123.5,98.5 in the 190-unit reference frame).
 */

type Props = {
  size?: number;
  className?: string;
  /** Ink color of the brushstroke. Cream for dark backgrounds. */
  tone?: "ink" | "cream";
  glow?: boolean;
  animated?: boolean;
  title?: string;
};

const SPECTRUM = [
  { angle: -24, len: 73, w: 4.5, color: "#DC9A7E" }, // coral
  { angle: -14.4, len: 69, w: 3.5, color: "#E3C3A4" }, // tan
  { angle: -4.8, len: 67, w: 3.0, color: "#B8B1C2" }, // lavender
  { angle: 4.8, len: 67, w: 3.0, color: "#C4BECE" }, // lavender-2
  { angle: 14.4, len: 69, w: 3.5, color: "#9CAEA1" }, // sage
  { angle: 24, len: 73, w: 4.0, color: "#808D9B" }, // slate
];

export default function PrismMark({
  size = 190,
  className,
  tone = "cream",
  glow = false,
  animated = false,
  title = "Prism",
}: Props) {
  const inkColor = tone === "cream" ? "#F5F1E8" : "#1F2933";
  const dot = { x: 116.5, y: 98.5 };
  const beamOrigin = { x: 123.5, y: 98.5 };

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={title}
    >
      {/* Brushstroke ensō — real artwork, tinted via mask */}
      <span
        className={`absolute inset-0 ${animated ? "pm-enso" : ""}`}
        style={{
          backgroundColor: inkColor,
          WebkitMaskImage: "url(/enso.png)",
          maskImage: "url(/enso.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* Coral core + spectrum beams, aligned to the mouth */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox="0 0 190 190"
        fill="none"
        aria-hidden
      >
        <defs>
          <radialGradient id="pm-core" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#E9B08F" />
            <stop offset="55%" stopColor="#D0855F" />
            <stop offset="100%" stopColor="#B96842" />
          </radialGradient>
        </defs>

        {SPECTRUM.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={beamOrigin.x}
              y1={beamOrigin.y}
              x2={beamOrigin.x + Math.cos(rad) * b.len}
              y2={beamOrigin.y + Math.sin(rad) * b.len}
              stroke={b.color}
              strokeWidth={b.w}
              strokeLinecap="round"
              opacity={0.92}
              className={animated ? "pm-beam" : undefined}
              style={
                animated
                  ? {
                      animationDelay: `${i * 90}ms`,
                      transformOrigin: `${beamOrigin.x}px ${beamOrigin.y}px`,
                    }
                  : undefined
              }
            />
          );
        })}

        {glow && (
          <circle
            cx={dot.x}
            cy={dot.y}
            r={13}
            fill="#C97B57"
            opacity={0.3}
            className={animated ? "pm-core-glow" : undefined}
          />
        )}
        <circle cx={dot.x} cy={dot.y} r={9} fill="url(#pm-core)" />
      </svg>

      <style>{`
        .pm-enso { animation: pmFade 1.1s ease forwards; opacity: 0; }
        .pm-beam { opacity: 0; animation: pmBeam .7s ease forwards; }
        .pm-core-glow { animation: pmPulse 3.2s ease-in-out infinite; }
        @keyframes pmFade { to { opacity: 1; } }
        @keyframes pmBeam { from { opacity: 0; transform: scaleX(.4); } to { opacity: .92; transform: scaleX(1); } }
        @keyframes pmPulse { 0%,100% { opacity:.18; } 50% { opacity:.4; } }
        @media (prefers-reduced-motion: reduce) {
          .pm-enso { animation: none; opacity: 1; }
          .pm-beam { animation: none; opacity: .92; }
        }
      `}</style>
    </span>
  );
}
