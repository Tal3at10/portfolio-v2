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
  IconChevronRight,
  IconTrendingUp,
  IconBrain,
  IconBulb,
  IconScale,
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

  const title = `${isAr ? project.title_ar : project.title_en} | TAM Systems`;

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
      <nav className="sticky top-0 z-40 bg-[#09090b]/90 backdrop-blur-2xl border-b border-white/[0.08] px-4 sm:px-12 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-[#dfcba9]/40 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all"
          >
            {isAr ? (
              <>
                <IconArrowRight className="w-4 h-4 text-[#dfcba9]" />
                <span>العودة للرئيسية</span>
              </>
            ) : (
              <>
                <IconArrowLeft className="w-4 h-4 text-[#dfcba9]" />
                <span>Back to Systems</span>
              </>
            )}
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 text-xs font-semibold text-[#dfcba9] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfcba9] animate-pulse" />
              <span>{project.complexity}</span>
            </span>
            <Link
              href={isAr ? `/en/projects/${slug}` : `/ar/projects/${slug}`}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-[#dfcba9]/40 text-zinc-200 hover:text-white transition-all"
            >
              {isAr ? "English" : "العربية"}
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION: 2 COLUMNS (Text + Browser Frame) */}
      <header className="pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/12 text-xs font-semibold text-zinc-200 mb-4 sm:mb-6">
              <IconShieldCheck className="w-4 h-4 text-[#dfcba9]" />
              <span>{isAr ? project.client_ar : project.client_en}</span>
            </div>

            <h1 className={cn("font-extrabold tracking-tight text-white leading-[1.25] mb-4 sm:mb-6", isAr ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-5xl")}>
              {isAr ? project.title_ar : project.title_en}
            </h1>

            <p dir="auto" className="text-sm sm:text-base text-zinc-300 leading-[1.85] font-normal mb-6 sm:mb-8 max-w-xl">
              {isAr ? project.problem_ar : project.problem_en}
            </p>

            {/* Live Platform Action Buttons */}
            {project.live_url && (
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#dfcba9] hover:bg-white text-black font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(223,203,169,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
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
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-white/25 text-zinc-200 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <span>{isAr ? link.label_ar : link.label_en}</span>
                    <IconExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Showcase Display Frame */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_24px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
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

      {/* 3. CHALLENGE POINTS + BEFORE/AFTER SECTION */}
      {(project.challenge_points_ar?.length > 0 || project.before_after?.length > 0) && (
        <section className="py-14 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-white/[0.08] bg-[#09090b] relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Challenge Points */}
            {project.challenge_points_ar?.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#dfcba9]/10 border border-[#dfcba9]/25 flex items-center justify-center text-[#dfcba9]">
                    <IconScale className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                      {isAr ? "التحديات التشغيلية السابقة" : "Operational Challenges"}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {isAr ? "المشاكل التي كان يعاني منها العميل قبل النظام" : "Critical bottlenecks prior to system deployment"}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {(isAr ? project.challenge_points_ar : project.challenge_points_en).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-[#dfcba9] mt-2 shrink-0" />
                      <span dir="auto" className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Before / After Transformation Cards */}
            {project.before_after?.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#dfcba9]/10 border border-[#dfcba9]/25 flex items-center justify-center text-[#dfcba9]">
                    <IconTrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                      {isAr ? "التحول التشغيلي (قبل وبعد)" : "Operational Transformation"}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {isAr ? "مقارنة مباشرة بين الوضع السابق والنتيجة المحققة" : "Direct before vs after production benchmarks"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {project.before_after.map((row, i) => (
                    <div key={i} className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#dfcba9]/25 transition-all">
                      <p className="text-xs sm:text-sm font-bold text-white mb-3" dir="auto">
                        {isAr ? row.metric_ar : row.metric_en}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Before Pill */}
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-black/40">
                            {isAr ? "السابق" : "Before"}
                          </span>
                          <span className="text-xs sm:text-sm text-zinc-400 line-through decoration-zinc-500/60 truncate" dir="auto">
                            {isAr ? row.before_ar : row.before_en}
                          </span>
                        </div>

                        {/* After Pill — Highlighted Gold */}
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#dfcba9]/10 border border-[#dfcba9]/25">
                          <span className="text-[10px] sm:text-xs font-bold text-[#dfcba9] uppercase px-1.5 py-0.5 rounded bg-[#dfcba9]/20">
                            {isAr ? "الآن" : "Now"}
                          </span>
                          <span className="text-xs sm:text-sm text-white font-bold truncate" dir="auto">
                            {isAr ? row.after_ar : row.after_en}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. ARCHITECTURAL DECISIONS */}
      {project.decisions?.length > 0 && (
        <section className="py-14 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-white/[0.08] bg-[#09090b] relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 sm:mb-12">
              <div className="w-10 h-10 rounded-xl bg-[#dfcba9]/10 border border-[#dfcba9]/25 flex items-center justify-center text-[#dfcba9]">
                <IconBrain className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {isAr ? "القرارات المعمارية والمفاضلات" : "Architectural Decisions & Trade-offs"}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  {isAr ? "لماذا اتخذنا هذه الخيارات الهندسية وما المقابل المحسوب؟" : "Engineered design choices, technical rationale, and evaluated trade-offs"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.decisions.map((d, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-[#dfcba9]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header with index badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold text-[#dfcba9] px-2 py-0.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug" dir="auto">
                        {isAr ? d.decision_ar : d.decision_en}
                      </h3>
                    </div>

                    {/* Rationale */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-[#dfcba9] mb-1">
                        {isAr ? "الدافع المعماري:" : "Architectural Rationale:"}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-[1.8] font-normal" dir="auto">
                        {isAr ? d.reason_ar : d.reason_en}
                      </p>
                    </div>
                  </div>

                  {/* Trade-off Inset */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs sm:text-sm text-zinc-300 leading-relaxed" dir="auto">
                    <span className="text-zinc-500 font-semibold ml-1.5 mr-1.5">
                      {isAr ? "المفاضلة المحسوبة:" : "Calculated Trade-off:"}
                    </span>
                    <span>{isAr ? d.tradeoff_ar : d.tradeoff_en}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. ARCHITECTURE FLOW */}
      {project.architecture_flow?.length > 0 && (
        <section className="py-14 sm:py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
              {isAr ? "تدفق البيانات والربط المركزي" : "Data Flow & Integration Pipeline"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
              {isAr
                ? "مخطط يوضح ترابط النواة المركزية مع الذكاء الاصطناعي ومزودي البيانات الخارجية."
                : "Live visual pipeline demonstrating real-time data exchange across services, AI engines, and databases."}
            </p>
          </div>
          <SystemArchitectureFlow isAr={isAr} />
        </section>
      )}

      {/* 6. INTERACTIVE SCREENSHOT SHOWCASE */}
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

      {/* 7. LESSONS LEARNED */}
      {(project.lessons_ar || project.lessons_en) && (
        <section className="py-14 sm:py-20 px-4 sm:px-12 border-t border-white/[0.08] bg-[#09090b]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-5 shadow-[0_0_20px_rgba(223,203,169,0.06)]">
              <IconBulb className="w-4 h-4 text-[#dfcba9]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#dfcba9] uppercase tracking-widest">
                {isAr ? "الدروس المعمارية المستفادة" : "Architectural Lessons Learned"}
              </span>
            </div>
            <blockquote className="text-sm sm:text-base md:text-lg text-zinc-200 leading-[1.9] italic font-normal" dir="auto">
              {isAr ? `"${project.lessons_ar}"` : `"${project.lessons_en}"`}
            </blockquote>
            <p className="mt-4 text-xs font-mono text-[#dfcba9]">— Mahmoud Talaat, Founder & Lead Systems Architect</p>
          </div>
        </section>
      )}

      {/* 8. FOOTER & CTA */}
      <footer className="py-14 sm:py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {prevProject ? (
            <Link
              href={`/${locale}/projects/${prevProject.slug}`}
              className="text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              {isAr ? `← ${prevProject.title_ar}` : `← ${prevProject.title_en}`}
            </Link>
          ) : (
            <div />
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/201108745372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-lg w-full sm:w-auto hover:-translate-y-0.5"
            >
              <IconBrandWhatsapp className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? "ناقش مشروعك مع المعماري" : "Discuss on WhatsApp"}</span>
            </a>
            <a
              href="https://wa.me/201108745372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-[#dfcba9]/40 bg-zinc-950 hover:bg-white hover:text-black text-white font-bold text-xs sm:text-sm transition-all cursor-pointer w-full sm:w-auto hover:-translate-y-0.5"
            >
              <IconCalendarEvent className="w-4 h-4 text-[#dfcba9]" />
              <span>{isAr ? "حجز استشارة" : "Book Call"}</span>
            </a>
          </div>

          {nextProject ? (
            <Link
              href={`/${locale}/projects/${nextProject.slug}`}
              className="text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
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
