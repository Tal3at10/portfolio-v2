import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mahmoudtalaat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahmoud Talaat — Systems Architect & Lead Software Engineer",
    template: "%s | Mahmoud Talaat",
  },
  description:
    "Systems Architect & Senior Software Engineer. Architecting mission-critical platforms, high-concurrency engines, GDS travel suites, and custom AI RAG ecosystems.",
  keywords: [
    "Mahmoud Talaat",
    "محمود طلعت",
    "Systems Architect",
    "Software Architect",
    "Full-Stack Engineer",
    "Next.js",
    ".NET 8",
    "Clean Architecture",
    "AI Engineer",
    "RAG",
    "Vector Database",
    "Saudi Arabia Tech",
    "Egypt Tech",
  ],
  authors: [{ name: "Mahmoud Talaat", url: siteUrl }],
  creator: "Mahmoud Talaat",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: siteUrl,
    title: "Mahmoud Talaat — Systems Architect & Lead Software Engineer",
    description:
      "Enterprise Systems Architect & Senior Software Engineer. Mission-critical platforms, GDS travel systems, and custom AI ecosystems.",
    siteName: "Mahmoud Talaat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Talaat — Systems Architect",
    description:
      "Architecting enterprise platforms, GDS travel integrations, and AI RAG ecosystems.",
    creator: "@mahmoudtalaat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
