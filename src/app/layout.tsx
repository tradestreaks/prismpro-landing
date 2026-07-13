import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
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
      <body>{children}</body>
    </html>
  );
}
