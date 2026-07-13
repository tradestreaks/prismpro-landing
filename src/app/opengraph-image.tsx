import { ImageResponse } from "next/og";
import { prismMarkDataUri } from "@/lib/enso";

export const alt = "Prism Pro — Every AI model. One beautiful workspace.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Node runtime + no external font fetch → resilient at build time.
export const runtime = "nodejs";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #17110E 0%, #0C0E12 45%, #0D1018 75%, #12131C 100%)",
          color: "#F5F1E8",
          fontFamily: "sans-serif",
        }}
      >
        {/* glow accents */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 620,
            background:
              "radial-gradient(circle at center, rgba(201,123,87,0.34), rgba(201,123,87,0) 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 640,
            background:
              "radial-gradient(circle at center, rgba(142,164,210,0.26), rgba(142,164,210,0) 60%)",
          }}
        />

        {/* mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={prismMarkDataUri} width={96} height={96} alt="" />
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>
            PRISM
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            <span>Ask once.</span>
            <span>Compare the best AI models.</span>
          </div>
          <div style={{ fontSize: 28, color: "#B7BBC6", maxWidth: 860 }}>
            One clear, sourced answer from GPT, Claude, Gemini & Perplexity — and
            Prism says when there&apos;s no clear winner.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#8A909E",
          }}
        >
          <span>prismpro.ai</span>
          <span style={{ display: "flex", gap: 22, color: "#B7BBC6" }}>
            GPT · Claude · Gemini · Perplexity
          </span>
        </div>
      </div>
    ),
    size
  );
}
