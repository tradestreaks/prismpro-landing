import PrismMark from "./PrismMark";

export default function Wordmark({
  className = "",
  markSize = 30,
  showPro = false,
}: {
  className?: string;
  markSize?: number;
  showPro?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <PrismMark size={markSize} tone="cream" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-[17px] font-semibold tracking-[0.16em] text-ink">
          PRISM
        </span>
        {showPro && (
          <span className="rounded-md bg-prism/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-prism-glow ring-1 ring-prism/25">
            Pro
          </span>
        )}
      </span>
    </span>
  );
}
