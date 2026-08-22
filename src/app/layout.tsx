import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tam-systems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAM Systems | تَـمّ — Enterprise Software & Cloud Engineering",
    template: "%s | TAM Systems",
  },
  description:
    "TAM Systems (تَـمّ) — Enterprise engineering partner architecting mission-critical platforms, SaaS infrastructure, cloud ecosystems, and AI systems for organizations in Saudi Arabia and the Gulf.",
  keywords: [
    "TAM Systems",
    "تَـمّ للأنظمة",
    "Mahmoud Talaat",
    "محمود طلعت",
    "Enterprise Systems",
    "Software Architecture",
    "Cloud Systems",
    "SaaS",
    "AI Engineer",
    "RAG",
    "GDS Travel Systems",
    "Saudi Arabia Tech",
    "Gulf Tech",
    "هندسة برمجيات",
    "أنظمة سحابية",
  ],
  authors: [{ name: "Mahmoud Talaat — TAM Systems", url: siteUrl }],
  creator: "TAM Systems",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: siteUrl,
    title: "TAM Systems | تَـمّ — Systems Delivered. Vision Realized.",
    description:
      "Enterprise engineering partner architecting mission-critical platforms, SaaS infrastructure, and cloud ecosystems for Saudi Arabia and the Gulf.",
    siteName: "TAM Systems",
    images: [{ url: "/tam-logo.jpg", width: 1200, height: 630, alt: "TAM Systems — تَـمّ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAM Systems | تَـمّ",
    description: "أنظمة تُنجز.. ورؤى تكتمل | Systems Delivered. Vision Realized.",
    creator: "@TAMSystems",
    images: ["/tam-logo.jpg"],
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
