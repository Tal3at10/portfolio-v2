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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};

  const isAr = locale === "ar";
  return {
    title: `${isAr ? project.title_ar : project.title_en} | Mahmoud Talaat`,
    description: isAr ? project.problem_ar : project.problem_en,
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
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#dfcba9] selection:text-black">
      {/* Top Header */}
      <nav className="sticky top-0 z-40 bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-12 py-4">
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
