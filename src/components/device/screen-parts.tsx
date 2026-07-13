import type { ReactNode } from "react";
import PrismMark from "../brand/PrismMark";

/** iOS status bar (time, signal, battery) tuned for the app's dark theme. */
export function StatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-ink">
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M8 2.2c2 0 3.9.8 5.3 2.1l1-1.1A9 9 0 0 0 8 .8 9 9 0 0 0 1.7 3.2l1 1.1A7.4 7.4 0 0 1 8 2.2Zm0 3c1.2 0 2.3.5 3.1 1.3l1-1.1A6 6 0 0 0 8 3.7 6 6 0 0 0 3.9 5.4l1 1.1A4.4 4.4 0 0 1 8 5.2Zm0 3c.6 0 1.2.3 1.6.7L8 10.6 6.4 8.9c.4-.4 1-.7 1.6-.7Z" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3"
            stroke="currentColor"
            opacity="0.4"
          />
          <rect x="2" y="2" width="17" height="8" rx="1.6" fill="currentColor" />
          <rect
            x="23"
            y="4"
            width="1.5"
            height="4"
            rx="0.75"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

/** The 5 refraction spectrum dots — Prism's verdict signature. */
export function SpectrumDots({ size = 6 }: { size?: number }) {
  const colors = ["#DC9A7E", "#E3C3A4", "#B8B1C2", "#9CAEA1", "#808D9B"];
  return (
    <div className="flex items-center gap-[3px]">
      {colors.map((c) => (
        <span
          key={c}
          className="rounded-full"
          style={{ width: size, height: size, background: c }}
        />
      ))}
    </div>
  );
}

export function ModelDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-[7px] w-[7px] shrink-0 rounded-full"
      style={{ background: color }}
    />
  );
}

/** App top bar: PRISM wordmark + optional trailing text. */
export function AppNav({
  trailing,
  leading,
}: {
  trailing?: ReactNode;
  leading?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-1">
      <div className="flex items-center gap-2">
        {leading}
        {!leading && (
          <>
            <PrismMark size={17} tone="cream" />
            <span className="text-[13px] font-semibold tracking-[0.14em] text-ink">
              PRISM
            </span>
          </>
        )}
      </div>
      <div className="text-[10px] text-ink-muted">{trailing}</div>
    </div>
  );
}

/** Home/compare bar: hamburger · PRISM · asks-remaining pill (matches app). */
export function HomeNav({ trailing = "0 of 10 asks" }: { trailing?: string }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-ink">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="flex items-center gap-1.5">
        <PrismMark size={16} tone="cream" />
        <span className="text-[12.5px] font-semibold tracking-[0.14em] text-ink">
          PRISM
        </span>
      </div>
      <span className="rounded-full border border-hairline px-2 py-0.5 text-[8.5px] text-ink-muted">
        {trailing}
      </span>
    </div>
  );
}

/** Detail bar: back · centered title · share (matches app's Verdict header). */
export function TitleNav({ title = "Verdict" }: { title?: string }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-1">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-ink">
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[12.5px] font-semibold text-ink">{title}</span>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-ink-soft">
        <path d="M12 3v13M12 3L8 7m4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Refraction bloom — varied-length spectrum rays around a coral core, masked
 *  to a ring. Mirrors the app's comparison loader. */
export function RefractionBloom({ size = 130 }: { size?: number }) {
  const rays = 46;
  const cx = 65;
  const cy = 65;
  const inner = 20;
  const palette = ["#DC9A7E", "#E3C3A4", "#B8B1C2", "#9CAEA1", "#808D9B", "#C9997E"];
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 130 130"
        width={size}
        height={size}
        className="absolute inset-0 refraction-spin"
      >
        {Array.from({ length: rays }).map((_, i) => {
          const a = (i / rays) * Math.PI * 2;
          // deterministic length + opacity variation for an organic burst
          const len = 26 + 16 * Math.abs(Math.sin(i * 1.9 + 0.6)) + (i % 4) * 2.2;
          const c = palette[i % palette.length];
          const op = 0.55 + 0.4 * Math.abs(Math.sin(i * 2.3));
          return (
            <line
              key={i}
              x1={cx + Math.cos(a) * inner}
              y1={cy + Math.sin(a) * inner}
              x2={cx + Math.cos(a) * (inner + len)}
              y2={cy + Math.sin(a) * (inner + len)}
              stroke={c}
              strokeWidth={1.1}
              strokeLinecap="round"
              opacity={op}
            />
          );
        })}
      </svg>
      <div
        className="absolute left-1/2 top-1/2 refraction-core"
        style={{
          width: 22,
          height: 22,
          marginTop: -11,
          marginLeft: -11,
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%,#e6a179,#b06442)",
        }}
      />
    </div>
  );
}

/** Screen background wrapper (warm dark app canvas). */
export function ScreenShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-canvas-2 text-ink">{children}</div>
  );
}

/** The bottom-pinned composer chrome shared across Compare/Chat. */
export function Composer({
  chip,
  placeholder = "Ask anything…",
  sending = false,
}: {
  chip: ReactNode;
  placeholder?: string;
  sending?: boolean;
}) {
  return (
    <div className="px-3.5 pb-6 pt-2">
      <div className="rounded-2xl border border-hairline bg-card px-3.5 py-3 shadow-card">
        <p className="text-[12px] text-ink-muted">{placeholder}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-ink-soft">
            {chip}
          </div>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{
              background: sending
                ? "#232733"
                : "linear-gradient(180deg,#E0956F,#C97B57)",
            }}
            aria-hidden
          >
            {sending ? (
              <span className="h-2.5 w-2.5 rounded-[2px] bg-ink" />
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="#0C0E12"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
