import type { ReactNode } from "react";

/**
 * A realistic iPhone 15 Pro-style frame that sizes entirely from its own width
 * using container-query units (cqw), so it stays perfectly proportioned at any
 * width. Set the width with a Tailwind class via `className`
 * (e.g. `w-[clamp(236px,70vw,300px)]`); everything inside scales with it.
 */
export default function IPhone({
  children,
  className = "",
  glow = true,
  island = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  /** Draw the coded Dynamic Island. Turn off when the screen is a full
   *  screenshot that already includes its own status bar. */
  island?: boolean;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ containerType: "inline-size", aspectRatio: "1000 / 2160" }}
    >
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(201,123,87,0.35), transparent 70%)",
          }}
        />
      )}
      {/* Titanium frame */}
      <div
        className="relative h-full w-full"
        style={{
          borderRadius: "15.5cqw",
          padding: "3.2cqw",
          background:
            "linear-gradient(155deg,#3a3d45 0%,#141519 22%,#2b2e35 55%,#0f1013 78%,#33363d 100%)",
          boxShadow:
            "0 6cqw 12cqw -4cqw rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.14), inset 0 0 0 1px rgba(0,0,0,0.5)",
        }}
      >
        {/* Screen */}
        <div
          className="relative h-full w-full overflow-hidden bg-canvas-2"
          style={{ borderRadius: "12.7cqw" }}
        >
          {/* Dynamic Island */}
          {island && (
            <div
              className="absolute left-1/2 z-30 -translate-x-1/2 rounded-full bg-black"
              style={{ width: "30cqw", height: "8.5cqw", top: "3.6cqw" }}
            >
              <div
                className="absolute right-[18%] top-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: "2cqw",
                  height: "2cqw",
                  background: "radial-gradient(circle,#2a3550,#0a0c10)",
                }}
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
