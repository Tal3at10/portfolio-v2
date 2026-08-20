import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Tajawal, Fredoka, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
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
      title: "محمود طلعت — أبني أنظمة السفر والمنظومات المؤسسية للشركات والخليج",
      description:
        "مهندس معمارية نظم برمجية وحلول ذكاء اصطناعي متخصص في قطاع السفر ومنصات الأعمال للشركات الخليجية والعربية.",
      openGraph: {
        title: "محمود طلعت — أبني أنظمة السفر والمنظومات المؤسسية",
        description:
          "مهندس معمارية نظم برمجية وحلول ذكاء اصطناعي متخصص في قطاع السفر ومنصات الأعمال للشركات الخليجية والعربية.",
        locale: "ar_SA",
        type: "website",
      },
    };
  }

  return {
    title: "Mahmoud Talaat — Travel Technology & Enterprise Systems Architect",
    description:
      "Architecting mission-critical travel platforms, GDS booking engines, and enterprise AI ecosystems for the Gulf and Arab markets.",
    openGraph: {
      title: "Mahmoud Talaat — Travel Technology & Enterprise Systems Architect",
      description:
        "Architecting mission-critical travel platforms, GDS booking engines, and enterprise AI ecosystems for the Gulf and Arab markets.",
      locale: "en_US",
      type: "website",
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
    "@type": "Person",
    name: "Mahmoud Talaat",
    alternateName: "محمود طلعت",
    url: "https://mahmoudtalaat.com",
    jobTitle: isRtl
      ? "مهندس معماري برمجيات وأنظمة سفر مؤسسية"
      : "Travel Technology & Enterprise Systems Architect",
    description: isRtl
      ? "مهندس معماري برمجيات متخصص في بناء المنظومات المؤسسية، ربط أنظمة السفر GDS، وتطوير محركات الذكاء الاصطناعي RAG."
      : "Systems Architect specializing in enterprise platforms, GDS travel systems, and AI RAG ecosystems.",
    knowsAbout: [
      "Travel Technology",
      "GDS Systems",
      "Software Architecture",
      "Clean Architecture",
      ".NET 8",
      "React 19",
      "Next.js",
      "Python Django",
      "Artificial Intelligence",
      "Distributed Systems",
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
      className={`${tajawal.variable} ${fredoka.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: isRtl
          ? "var(--font-tajawal), system-ui, sans-serif"
          : "var(--font-fredoka), system-ui, sans-serif",
      }}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-[#000000] text-[#f4f4f5] antialiased selection:bg-[#dfcba9] selection:text-black overflow-x-hidden ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
