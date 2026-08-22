import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Tajawal, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isRtl = locale === "ar";

  if (isRtl) {
    return {
      title: "تَـمّ للأنظمة | TAM Systems — هندسة البرمجيات والمنظومات المؤسسية",
      description:
        "تَـمّ للأنظمة (TAM Systems) — بيت خبرة وكيان هندسي متخصص في بناء وتطوير المنظومات المؤسسية المتقدمة، منصات الأعمال، وحلول الذكاء الاصطناعي في السعودية والخليج.",
      openGraph: {
        title: "تَـمّ للأنظمة | TAM Systems — أنظمة تُنجز.. ورؤى تكتمل",
        description:
          "بيت خبرة وكيان هندسي متخصص في بناء وتطوير المنظومات المؤسسية المتقدمة، منصات الأعمال، وحلول الذكاء الاصطناعي في السعودية والخليج.",
        locale: "ar_SA",
        type: "website",
        images: [{ url: "/tam-logo.jpg", width: 1200, height: 630, alt: "تَـمّ للأنظمة | TAM Systems" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "تَـمّ للأنظمة | TAM Systems",
        description: "أنظمة تُنجز.. ورؤى تكتمل",
        images: ["/tam-logo.jpg"],
      },
    };
  }

  return {
    title: "TAM Systems | تَـمّ — Enterprise Software & Systems Engineering",
    description:
      "TAM Systems is an enterprise engineering partner architecting mission-critical platforms, SaaS infrastructure, and bespoke digital ecosystems for organizations across Saudi Arabia and the Gulf.",
    openGraph: {
      title: "TAM Systems | تَـمّ — Systems Delivered. Vision Realized.",
      description:
        "Enterprise engineering partner architecting mission-critical platforms, SaaS infrastructure, and digital ecosystems for Saudi Arabia and the Gulf.",
      locale: "en_US",
      type: "website",
      images: [{ url: "/tam-logo.jpg", width: 1200, height: 630, alt: "TAM Systems — Enterprise Software & Systems Engineering" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TAM Systems | تَـمّ",
      description: "Systems Delivered. Vision Realized.",
      images: ["/tam-logo.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TAM Systems",
    alternateName: "تَـمّ للأنظمة",
    url: "https://tam-systems.com",
    logo: "https://tam-systems.com/tam-logo.jpg",
    founder: {
      "@type": "Person",
      name: "Mahmoud Talaat",
      alternateName: "محمود طلعت",
      jobTitle: isRtl
        ? "مؤسس وقائد معمارية الأنظمة"
        : "Founder & Lead Systems Architect",
    },
    description: isRtl
      ? "تَـمّ (TAM Systems) — بيت خبرة هندسي متخصص في بناء وتطوير المنظومات السحابية المعقدة، منصات الأعمال المؤسسية، والحلول الذكية."
      : "TAM Systems is an enterprise engineering partner architecting mission-critical platforms, SaaS infrastructure, and cloud ecosystems.",
    areaServed: ["SA", "AE", "KW", "QA", "BH", "EG", "SE"],
    knowsAbout: [
      "Enterprise Software Architecture",
      "Cloud Systems",
      "GDS Travel Systems",
      "SaaS Platforms",
      "AI & RAG Systems",
      ".NET 8",
      "React 19",
      "Next.js",
      "Python",
      "Flutter",
    ],
    sameAs: [
      "https://github.com/MahmoudTalaat4",
      "https://www.linkedin.com/in/mahmoud-talaat-dev/",
    ],
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${tajawal.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: isRtl
          ? "var(--font-tajawal), system-ui, -apple-system, sans-serif"
          : "var(--font-sans), system-ui, -apple-system, sans-serif",
      }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#dfcba9] selection:text-black overflow-x-hidden ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
