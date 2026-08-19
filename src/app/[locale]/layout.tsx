import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Rubik, Fredoka, JetBrains_Mono } from "next/font/google";

const rubik = Rubik({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
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
      ? "معماري برمجيات ومطور أنظمة أول"
      : "Systems Architect & Lead Software Engineer",
    description: isRtl
      ? "مهندس معماري برمجيات متخصص في بناء المنظومات المؤسسية، ربط أنظمة السفر GDS، وتطوير محركات الذكاء الاصطناعي RAG."
      : "Systems Architect & Senior Software Engineer specializing in enterprise platforms, GDS travel systems, and AI RAG ecosystems.",
    knowsAbout: [
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
      className={`${rubik.variable} ${fredoka.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: isRtl
          ? "var(--font-rubik), system-ui, sans-serif"
          : "var(--font-fredoka), system-ui, sans-serif",
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#000000] text-[#f4f4f5] antialiased selection:bg-[#dfcba9] selection:text-black overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
