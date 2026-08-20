import React from "react";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { Stats18, StatItem } from "@/components/ui/stats-18";
import { InteractiveScreenshotShowcase } from "@/components/ui/interactive-screenshot-showcase";
import { projectShowcaseMap } from "@/data/project-showcases";
import { SystemArchitectureFlow } from "@/components/ui/system-architecture-beam";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandWhatsapp,
  IconShieldCheck,
  IconCalendarEvent,
  IconExternalLink,
} from "@tabler/icons-react";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const project of caseStudies) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

const projectMetaDescriptions: Record<string, { ar: string; en: string }> = {
  "almulhim-travel": {
    ar: "منظومة حجوزات وأتمتة سفر متكاملة: بوت مبيعات ذكي، ربط مباشر مع خطوط الطيران والفنادق، وقسائم مشفرة بمعالجة +1,200 حجز شهرياً وتوفير 70% من وقت التشغيل.",
    en: "Enterprise travel booking engine with automated sales bot, global flight/hotel distribution, and tamper-proof vouchers — processing 1,200+ monthly bookings with 70% operational savings.",
  },
  "admin-sa": {
    ar: "منصة ذكاء اصطناعي للمناقصات الحكومية: سحب وتحليل كراسات الشروط وتوليد العروض الفنية المعتمدة في 90 ثانية بنسبة فوز 85%.",
    en: "AI-driven government procurement platform: automated tender intelligence and instant technical proposal generation in under 90 seconds with an 85% win rate.",
  },
  "alryadh-therapy": {
    ar: "سجل طبي إلكتروني وعيادات افتراضية مشفرة: 7 بوابات إدارية وطبية، عيادات فيديو فورية، واستقرار تام بنسبة 100% بدون أي أوراق.",
    en: "Zero-install clinical EMR and encrypted telehealth suite: 7 dedicated medical portals, instant virtual clinic, and 100% paperless clinical workflows.",
  },
  "injaz": {
    ar: "بنية سحابية لاعتماد 990+ مدرسة حكومية: تدقيق وأتمتة 25,000+ وثيقة وشاهد اعتماد لوزارة التعليم دون توقف أو انهيار للخوادم.",
    en: "High-capacity cloud infrastructure for 990+ schools: automated compliance audit and evaluation for 25,000+ educational dossiers with 100% uptime.",
  },
  "snabbfood": {
    ar: "شبكة متكاملة لإدارة سلاسل المطاعم وشاشات العرض الذكية: معالجة أكثر من 50,000 طلب شهرياً عبر 15 فرعاً في السويد مع بوابات دفع معتمدة.",
    en: "Multi-restaurant delivery ecosystem and digital menu signage: processing 50,000+ monthly orders across 15 locations in Sweden with certified Nordic payment flows.",
  },
  "ok-cloud": {
    ar: "منظومة تخزين سحابي ومزامنة مكتبية خاصة: توفير 75% من تكاليف التخزين السحابي مع دعم رفع ومزامنة الملفات الضخمة لحظياً.",
    en: "Private cloud storage infrastructure with native desktop background sync — cutting enterprise storage costs by 75% with multi-gigabyte stream handling.",
  },
  "dietbox": {
    ar: "منصة إدارة اشتراكات الوجبات الصحية وتوليد ملصقات التغذية الفورية لأكثر من 1,000 مشترك بدقة حسابية متكاملة.",
    en: "Meal subscription operations platform with automated nutritional label rendering and kitchen dispatch serving 1,000+ active subscribers.",
  },
  "nexgo": {
    ar: "منصة سوبر آب متعددة القطاعات (مطاعم، بقالة، صيدليات، شحنات، وتوصيل) مع تتبع لحظي للسائقين عبر الخرائط في أجزاء من الثانية.",
    en: "Multi-vertical SuperApp marketplace covering 6 commercial sectors with sub-second driver GPS telemetry and multi-vendor dispatch.",
  },
  "keylicense": {
    ar: "نظام تشفير وإدارة تراخيص البرمجيات المؤسسية: حماية متقدمة بتشفير عالي وتحقق فوري في أقل من 50ms دون اتصال بالإنترنت.",
    en: "Enterprise cryptographic software licensing engine with advanced digital signatures and sub-50ms offline activation verification.",
  },
  "bortselite": {
    ar: "روبوت أتمتة الإجراءات الجمركية: تخليص جمركي آلي فائق السرعة عبر واتساب وتليجرام دون تدخل بشري.",
    en: "Automated customs clearance bot and RPA engine delivering instant manifest processing via automated ChatOps.",
  },
  "sakani-bot": {
    ar: "روبوت أتمتة وحجز الأراضي السكنية في أجزاء من الثانية (Sub-450ms) فور فتح البوابة مع إشعارات تليجرام فورية.",
    en: "Sub-450ms high-speed land reservation RPA bot with instant telemetry and automated booking verification.",
  },
  "ai-legal": {
    ar: "مساعد ذكاء اصطناعي قانوني متخصص: تحليل وفحص مخاطر العقود والإجابة الدقيقة على الاستشارات القانونية بالاسترجاع الدلالي.",
    en: "Legal intelligence assistant and contract risk assessment engine powered by semantic knowledge retrieval.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};

  const isAr = locale === "ar";
  const customMeta = projectMetaDescriptions[slug];
  const description = customMeta
    ? isAr
      ? customMeta.ar
      : customMeta.en
    : isAr
    ? project.solution_ar
    : project.solution_en;

  const title = `${isAr ? project.title_ar : project.title_en} | Mahmoud Talaat`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.hero_image,
          alt: isAr ? project.title_ar : project.title_en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.hero_image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isAr = locale === "ar";

  // Navigation: Next / Prev Projects
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  // Format Metrics into Stats18 shape
  const formattedStats: StatItem[] = project.metrics.map((m) => ({
    value: m.value,
    label: isAr ? m.label_ar : m.label_en,
    description: isAr ? m.description_ar : m.description_en,
  }));

  // Hero image mapping
  const heroImage = project.hero_image || "/projects/almulhim-travel/hero.png";

  // Subsystems & Live interfaces from the showcase map
  const showcaseItems = projectShowcaseMap[slug] || [];

  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-[#dfcba9] selection:text-black">
      {/* Top Header */}
      <nav className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            {isAr ? (
              <>
                <IconArrowRight className="w-4 h-4" />
                العودة للرئيسية
              </>
            ) : (
              <>
                <IconArrowLeft className="w-4 h-4" />
                Back to Systems
              </>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
              {project.complexity}
            </span>
            <Link
              href={isAr ? `/en/projects/${slug}` : `/ar/projects/${slug}`}
              className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all"
            >
              {isAr ? "English" : "العربية"}
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION: 2 COLUMNS (Text + Browser Frame) */}
      <header className="pt-16 pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6">
              <IconShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>{isAr ? project.client_ar : project.client_en}</span>
            </div>

            <h1 className={cn("font-bold tracking-tight text-white leading-[1.25] mb-6", isAr ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-5xl")}>
              {isAr ? project.title_ar : project.title_en}
            </h1>

            <p dir="auto" className="text-sm sm:text-base text-zinc-300 leading-[1.8] font-normal mb-8 max-w-xl">
              {isAr ? project.problem_ar : project.problem_en}
            </p>

            {/* Live Platform Action Buttons */}
            {project.live_url && (
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dfcba9] text-black font-semibold text-xs hover:bg-[#ebd9bd] transition-all shadow-lg hover:shadow-[#dfcba9]/20"
                >
                  <span>{isAr ? "معاينة المنصة الحية" : "Visit Live Platform"}</span>
                  <IconExternalLink className="w-4 h-4" />
                </a>

                {project.additional_links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-mono transition-all"
                  >
                    <span>{isAr ? link.label_ar : link.label_en}</span>
                    <IconExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Showcase Display Frame */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_24px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-black/40">
                <Image
                  src={heroImage}
                  alt={isAr ? project.title_ar : project.title_en}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={true}
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. STATS SECTION (Stats18 Cards) */}
      <div className="border-t border-white/[0.08]">
        <Stats18
          stats={formattedStats}
          title={isAr ? "الأثر التشغيلي والأرقام" : "Operational Benchmarks"}
          subtitle={
            isAr
              ? "مؤشرات أداء رقمية تم تحقيقها بعد تشغيل النظام."
              : "Measurable impact achieved in production."
          }
        />
      </div>

      {/* 3. ARCHITECTURE SECTION (Full Width System Architecture Beam) */}
      <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {isAr ? "تدفق البيانات والربط المركزي" : "Data Flow & Integration Pipeline"}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {isAr
              ? "مخطط يوضح ترابط النواة المركزية مع الذكاء الاصطناعي ومزودي البيانات الخارجية."
              : "Live visual pipeline demonstrating real-time data exchange across services, AI engines, and databases."}
          </p>
        </div>

        <SystemArchitectureFlow isAr={isAr} />
      </section>

      {/* 4. INTERACTIVE SCREENSHOT SHOWCASE */}
      {showcaseItems.length > 0 && (
        <InteractiveScreenshotShowcase
          titleAr={`معرض المنظومات والشاشات: ${project.title_ar}`}
          titleEn={`Interface & Subsystem Showcase: ${project.title_en}`}
          subtitleAr="استعراض كامل للوحات العمليات وبوابات الموظفين وتطبيقات الموبايل بدقة عالية"
          subtitleEn="Detailed inspection of production interfaces, dashboards, and client applications"
          isAr={isAr}
          items={showcaseItems}
        />
      )}

      {/* 5. FOOTER & CTA */}
      <footer className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {prevProject ? (
            <Link
              href={`/${locale}/projects/${prevProject.slug}`}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              {isAr ? `← ${prevProject.title_ar}` : `← ${prevProject.title_en}`}
            </Link>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201108745372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-lg"
            >
              <IconBrandWhatsapp className="w-4 h-4" />
              <span>{isAr ? "ناقش مشروعك مع المعماري" : "Discuss on WhatsApp"}</span>
            </a>
            <a
              href="https://calendly.com/mahmoud-talaat-dev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-zinc-950 text-white hover:bg-white hover:text-black font-semibold text-xs transition-all cursor-pointer"
            >
              <IconCalendarEvent className="w-4 h-4" />
              <span>{isAr ? "حجز استشارة" : "Book Call"}</span>
            </a>
          </div>

          {nextProject ? (
            <Link
              href={`/${locale}/projects/${nextProject.slug}`}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              {isAr ? `${nextProject.title_ar} →` : `${nextProject.title_en} →`}
            </Link>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </main>
  );
}
