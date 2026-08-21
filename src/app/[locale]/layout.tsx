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
      title: "تَـمّ | TAM Systems — هندسة الأنظمة السحابية والمنظومات المؤسسية",
      description:
        "تَـمّ (TAM Systems) — استوديو هندسي متخصص في بناء الأنظمة السحابية المعقدة، منصات الأعمال المؤسسية، والتطبيقات الذكية للشركات والمؤسسات في السعودية والخليج.",
      openGraph: {
        title: "تَـمّ | TAM Systems — أنظمة تُنجز.. ورؤى تكتمل",
        description:
          "استوديو هندسي متخصص في بناء الأنظمة السحابية المعقدة، منصات الأعمال المؤسسية، والتطبيقات الذكية للشركات والمؤسسات.",
        locale: "ar_SA",
        type: "website",
        images: [{ url: "/tam-logo.jpg", width: 1200, height: 630, alt: "TAM Systems — تَـمّ للأنظمة البرمجية" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "تَـمّ | TAM Systems",
        description: "أنظمة تُنجز.. ورؤى تكتمل",
        images: ["/tam-logo.jpg"],
      },
    };
  }

  return {
    title: "TAM Systems | تَـمّ — Enterprise Software Engineering Studio",
    description:
      "TAM Systems is an enterprise software engineering studio architecting mission-critical platforms, SaaS infrastructure, and bespoke cloud ecosystems for organizations across Saudi Arabia and the Gulf.",
    openGraph: {
      title: "TAM Systems | تَـمّ — Systems Delivered. Vision Realized.",
      description:
        "Enterprise software engineering studio architecting mission-critical platforms, SaaS infrastructure, and cloud ecosystems for Saudi Arabia and the Gulf.",
      locale: "en_US",
      type: "website",
      images: [{ url: "/tam-logo.jpg", width: 1200, height: 630, alt: "TAM Systems — Enterprise Software Engineering" }],
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
    alternateName: "تَـمّ للأنظمة البرمجية",
    url: "https://tam-systems.com",
    logo: "https://tam-systems.com/tam-logo.jpg",
    founder: {
      "@type": "Person",
      name: "Mahmoud Talaat",
      alternateName: "محمود طلعت",
      jobTitle: isRtl
        ? "مؤسس ومهندس معمارية الأنظمة"
        : "Founder & Lead Systems Architect",
    },
    description: isRtl
      ? "تَـمّ (TAM Systems) — استوديو هندسي متخصص في بناء الأنظمة السحابية المعقدة، منصات الأعمال المؤسسية، والتطبيقات الذكية."
      : "TAM Systems is an enterprise software engineering studio architecting mission-critical platforms, SaaS infrastructure, and cloud ecosystems.",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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
