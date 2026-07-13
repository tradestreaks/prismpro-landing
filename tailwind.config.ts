import type { Config } from "tailwindcss";

/**
 * Prism Pro design tokens — mirrored from the iOS app's PrismColors.swift and
 * the implementation handoff. Dark-mode-first: the values below are the dark
 * appearance surfaces, with the warm cream light surfaces kept for accents.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        // Dark surfaces (dark-mode-first)
        canvas: "#0C0E12", // a touch deeper than the app's #111318 for a premium launch feel
        "canvas-2": "#111318",
        card: "#1A1D24",
        inset: "#232733",
        hairline: "rgba(245,241,232,0.09)",

        // Ink
        ink: "#F5F1E8",
        "ink-soft": "#B7BBC6",
        "ink-muted": "#8A909E",

        // Brand
        prism: "#C97B57", // coral prism core
        "prism-glow": "#E0956F",
        indigo: "#8EA4D2", // accent.primary (dark)

        // Refraction spectrum (light, not surfaces — constant across appearance)
        spectrum: {
          coral: "#DC9A7E",
          tan: "#E3C3A4",
          lavender: "#B8B1C2",
          sage: "#9CAEA1",
          slate: "#808D9B",
        },

        // Model identities
        model: {
          gpt: "#B8C7B1",
          claude: "#F2A7A0",
          gemini: "#8EA4D2",
          perplexity: "#A3CEC9",
          grok: "#C7B8D6",
        },

        // Status
        gold: "#E1BE75", // accent.best (winner)
        sage: "#B8C7B1",
        coral: "#F2A7A0",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Newsreader",
          "New York",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(201,123,87,0.45)",
        card: "0 24px 60px -24px rgba(0,0,0,0.6)",
        device: "0 60px 120px -40px rgba(0,0,0,0.75)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        auroraDrift: {
          "0%": { transform: "translate3d(-4%, -2%, 0) rotate(0deg) scale(1.1)" },
          "50%": { transform: "translate3d(4%, 3%, 0) rotate(8deg) scale(1.25)" },
          "100%": { transform: "translate3d(-4%, -2%, 0) rotate(0deg) scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        breathe: "breathe 3.4s ease-in-out infinite",
        aurora: "auroraDrift 22s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
