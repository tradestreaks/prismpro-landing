import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/lib/site";

// Self-hosted at build time — no render-blocking request to Google's servers.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  // Newsreader has no preset fallback metrics in next/font; skip the
  // auto-generated fallback (it's a decorative serif — negligible CLS).
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.ogTitle,
    template: "%s — Prism",
  },
  description: site.description,
  keywords: [
    "Prism Pro",
    "AI comparison",
    "compare AI models",
    "GPT vs Claude vs Gemini",
    "AI workspace",
    "multi-model AI",
    "AI productivity",
    "frontier models",
  ],
  authors: [{ name: "Tradestreaks LLC" }],
  creator: "Tradestreaks LLC",
  publisher: "Tradestreaks LLC",
  applicationName: "Prism",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.ogTitle,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.description,
    creator: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0E12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${newsreader.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Prism",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "iOS",
              description: site.description,
              url: site.url,
              author: { "@type": "Organization", name: site.company },
              publisher: { "@type": "Organization", name: site.company },
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
