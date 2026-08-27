"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type CategoryGroup = "all" | "govtech" | "enterprise" | "automation";

interface ProjectCard {
  slug: string;
  nameAr: string;
  nameEn: string;
  group: CategoryGroup;
  categoryAr: string;
  categoryEn: string;
  metricAr: string;
  metricEn: string;
  techStack: string[];
  imageSrc: string;
}

const projects: ProjectCard[] = [
  {
    slug: "almulhim-travel",
    nameAr: "مجموعة الملحم للسياحة",
    nameEn: "AlMulhim Travel Group",
    group: "enterprise",
    categoryAr: "منظومة حجوزات · ERP سياحي",
    categoryEn: "Tourism OTA · VoucherPro ERP",
    metricAr: "1,200+ حجز شهرياً · 40+ موظف",
    metricEn: "1,200+ monthly bookings · 40 staff",
    techStack: [".NET 8", "CQRS", "Amadeus API", "WhatsApp AI"],
    imageSrc: "/projects/almulhimtravel/01-b2c-hero-slide-1-baku.png",
  },
  {
    slug: "admin-sa",
    nameAr: "منصة Admin.sa للمناقصات",
    nameEn: "Admin.sa GovTech SaaS",
    group: "govtech",
    categoryAr: "ذكاء اصطناعي · SaaS حكومي",
    categoryEn: "AI Procurement · GovTech SaaS",
    metricAr: "عروض فنية في 90 ثانية · دقة 85%",
    metricEn: "AI proposals in 90s · 85% win rate",
    techStack: ["Python", "Gemini Batch API", "LightGBM", "Celery / Redis"],
    imageSrc: "/projects/admin-sa/admin-sa-landing-hero-live-intelligence.png",
  },
  {
    slug: "alryadh-therapy",
    nameAr: "مركز الرياض للعلاج النفسي",
    nameEn: "Al-Riyadh Psychiatric EMR",
    group: "govtech",
    categoryAr: "سجلات طبية · تطبيب عن بعد",
    categoryEn: "Clinical EMR · WebRTC Telehealth",
    metricAr: "100% رقمي · 7 بوابات · استجابة < 200ms",
    metricEn: "100% paperless · 7 portals · sub-200ms",
    techStack: [".NET 9", "MediatR CQRS", "Daily.co WebRTC", "SignalR"],
    imageSrc: "/projects/alryadhcenter/01_landing_hero_section.png",
  },
  {
    slug: "ok-cloud",
    nameAr: "Ok.Cloud — التخزين السحابي",
    nameEn: "Ok.Cloud Infrastructure",
    group: "enterprise",
    categoryAr: "سحابة خاصة · مزامنة مكتبية",
    categoryEn: "Private Cloud · Native Desktop Sync",
    metricAr: "توفير 75% تكاليف · رفع ملفات +10GB",
    metricEn: "75% cost reduction · 10GB+ streaming",
    techStack: ["Laravel 12", ".NET 8 MAUI", "Multi-Cloud S3", "SQLite"],
    imageSrc: "/projects/ok-cloud/okcloud_web_file_explorer_dark.png",
  },
  {
    slug: "injaz",
    nameAr: "منصة إنجاز لاعتماد المدارس",
    nameEn: "Injaz School Accreditation",
    group: "govtech",
    categoryAr: "تقنية تعليم · امتثال حكومي",
    categoryEn: "EdTech · Government Quality Audit",
    metricAr: "25,000+ وثيقة · 990 مدرسة",
    metricEn: "25,000+ documents · 990 schools",
    techStack: ["Azure Functions", ".NET 8", "Supabase PostgreSQL", "SAS Tokens"],
    imageSrc: "/projects/injaz-edu/01_injaz_automated_report_ranking_header.png",
  },
  {
    slug: "snabbfood",
    nameAr: "شبكة Snabbfood السويد",
    nameEn: "Snabbfood Sweden Network",
    group: "enterprise",
    categoryAr: "توصيل طعام · شاشات رقمية",
    categoryEn: "Food Delivery · Digital Signage PWA",
    metricAr: "50,000+ طلب شهرياً · 15 فرعاً",
    metricEn: "50,000+ monthly orders · 15 branches",
    techStack: ["Vue 3", "Capacitor 7", "Klarna / Swish", "Laravel 12"],
    imageSrc: "/projects/snabbfood/snabbfood-web-hero-landing.png",
  },
  {
    slug: "dietbox",
    nameAr: "منظومة DietBox الغذائية",
    nameEn: "DietBox Nutrition Platform",
    group: "enterprise",
    categoryAr: "اشتراكات صحية · توليد PDF",
    categoryEn: "Meal Subscriptions · PDF Engine",
    metricAr: "1,000+ مشترك · ملصقات في < 100ms",
    metricEn: "1,000+ subscribers · sub-100ms labels",
    techStack: [".NET 8", "Clean Architecture", "QuestPDF", "SQL Server"],
    imageSrc: "/projects/dietbox/dietbox_landing_hero.png",
  },
  {
    slug: "nexgo",
    nameAr: "تطبيق NexGo — الـ Super App",
    nameEn: "NexGo Super App",
    group: "enterprise",
    categoryAr: "سوبر آب · 6 قطاعات تجارية",
    categoryEn: "Super App · 6-Sector Marketplace",
    metricAr: "6 قطاعات · تتبع GPS كل ثانية",
    metricEn: "6 verticals · 1-sec driver GPS telemetry",
    techStack: ["Flutter 3.x", "Next.js 15", "Laravel 12", "WebSockets"],
    imageSrc: "/projects/nexgo/nexgo-web-landing-hero-delivery-search.png",
  },
  {
    slug: "keylicense",
    nameAr: "KeyLicense — نظام التراخيص المشفرة",
    nameEn: "KeyLicense Cryptographic Engine",
    group: "automation",
    categoryAr: "أمن سيبراني · تشفير متقدم",
    categoryEn: "Cybersecurity · Software Licensing",
    metricAr: "RSA 4096-bit · تحقق أوفلاين < 50ms",
    metricEn: "RSA 4096-bit · sub-50ms offline verify",
    techStack: [".NET 8", "RSA 4096-bit", "Clean Architecture", "SQL Server"],
    imageSrc: "/projects/keylicence/keylicense-applications-management-grid.png",
  },
  {
    slug: "bortselite",
    nameAr: "بوت بورتسيليت الجمركي",
    nameEn: "Bortselite Customs Bot",
    group: "automation",
    categoryAr: "أتمتة جمركية · RPA",
    categoryEn: "Customs Clearance Automation · RPA",
    metricAr: "تخليص جمركي آلي · .NET 9 + nodriver",
    metricEn: "Automated customs bot · .NET 9 + nodriver",
    techStack: [".NET 9", "nodriver", "WhatsApp Bot", "PostgreSQL"],
    imageSrc: "/projects/bortselite/bortselite-whatsapp-main-service-menu.jpeg",
  },
  {
    slug: "sakani-bot",
    nameAr: "بوت سكني — حجز الأراضي السكنية",
    nameEn: "Sakani Land Booking Bot",
    group: "automation",
    categoryAr: "أتمتة فائقة السرعة · Bot",
    categoryEn: "High-Speed RPA · Land Allocation",
    metricAr: "حجز في < 450ms · إشعارات فورية",
    metricEn: "Sub-450ms booking · Instant alerts",
    techStack: ["Python", "nodriver", "Telegram API", "AsyncIO"],
    imageSrc: "/projects/sakanibot/sakanibot-desktop-control-gui.png",
  },
  {
    slug: "ai-legal",
    nameAr: "معين — المساعد القانوني الذكي",
    nameEn: "Moeen Legal AI Assistant",
    group: "automation",
    categoryAr: "ذكاء اصطناعي قانوني · RAG",
    categoryEn: "LegalTech AI · RAG System",
    metricAr: "استشارات قانونية فورية · محرك RAG",
    metricEn: "Instant legal Q&A · RAG vector search",
    techStack: ["Python", "RAG", "Gemini API", "FastAPI"],
    imageSrc: "/images/architecture/ai-rag-vector-graph.jpg",
  },
];

const filterTabs = [
  { id: "all" as CategoryGroup, labelEn: "All Systems", labelAr: "كل الأنظمة", count: 12 },
  { id: "govtech" as CategoryGroup, labelEn: "Government & GovTech", labelAr: "المشاريع الحكومية والاعتماد", count: 3 },
  { id: "enterprise" as CategoryGroup, labelEn: "Enterprise Platforms", labelAr: "المنصات المؤسسية والسياحة", count: 5 },
  { id: "automation" as CategoryGroup, labelEn: "Automation & AI", labelAr: "الذكاء الاصطناعي والأتمتة", count: 4 },
];

// ─── Individual Project Card ──────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  isAr,
  locale,
}: {
  project: ProjectCard;
  index: number;
  isAr: boolean;
  locale: string;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const indexLabel = String(index + 1).padStart(2, "0");
  const visibleTags = project.techStack.slice(0, 3);
  const hiddenCount = project.techStack.length - visibleTags.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="block group h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={cardRef}
          className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl bg-[#121216] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#dfcba9]/35 group-hover:shadow-[0_0_40px_rgba(223,203,169,0.08)]"
        >
          {/* ── Top Highlight Sweep ── */}
          <span
            className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-[#dfcba9] via-[#dfcba9]/70 to-transparent z-20 transition-all duration-[600ms] ease-out"
            style={{ width: hovered ? "100%" : "0%" }}
          />

          {/* ── Top Section: Cover Image ── */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
            <Image
              src={project.imageSrc}
              alt={isAr ? project.nameAr : project.nameEn}
              fill
              unoptimized={project.imageSrc.endsWith(".svg")}
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient fade into card bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/15 to-transparent" />

            {/* Ghost index number */}
            <span
              className="absolute bottom-2 right-4 text-[60px] font-black text-white/[0.07] font-mono leading-none select-none pointer-events-none"
              aria-hidden
            >
              {indexLabel}
            </span>

            {/* Category pill */}
            <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-[0.12em] bg-black/65 backdrop-blur-md text-[#dfcba9] px-2.5 py-1 rounded-full border border-[#dfcba9]/25 shadow-sm font-medium">
              {isAr ? project.categoryAr : project.categoryEn}
            </span>
          </div>

          {/* ── Bottom Section: Content ── */}
          <div className="p-5 pt-4 flex flex-col flex-1 justify-between">
            <div>
              {/* Name */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-[#dfcba9] transition-colors duration-300">
                {isAr ? project.nameAr : project.nameEn}
              </h3>

              {/* Metric */}
              <p className="text-xs text-zinc-300 font-mono mb-3.5 flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-[#dfcba9]" />
                <span>{isAr ? project.metricAr : project.metricEn}</span>
              </p>

              {/* Tech tags — responsive & compact */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {visibleTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded font-normal"
                  >
                    {tech}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <span className="text-[9px] font-mono text-[#dfcba9]/70 bg-[#dfcba9]/10 border border-[#dfcba9]/20 px-1.5 py-0.5 rounded">
                    +{hiddenCount}
                  </span>
                )}
              </div>
            </div>

            {/* Action row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs transition-colors duration-300">
              <span className="text-xs sm:text-sm font-bold text-[#dfcba9] group-hover:text-white transition-colors">
                {isAr ? "عرض الملف المعماري" : "View Architecture Dossier"}
              </span>
              <span className="text-sm font-bold text-[#dfcba9] group-hover:text-white transition-transform duration-300 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1">
                {isAr ? "←" : "→"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function SystemsBento() {
  const [activeTab, setActiveTab] = useState<CategoryGroup>("all");
  const locale = useLocale();
  const isAr = locale === "ar";

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.group === activeTab);

  return (
    <section
      id="systems"
      className="relative z-20 w-full bg-[#09090b] text-white py-16 sm:py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-3 font-medium">
              {isAr ? "سجل الأعمال والمشاريع" : "Project Registry & Systems"}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {isAr ? "أعمال ومشاريع تم إنجازها" : "Delivered Projects & Systems"}
            </h2>
          </div>
          <div className="text-left md:text-right shrink-0">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-medium">
              {isAr ? "المشاريع المعروضة" : "Filtered Projects"}
            </p>
            <p className="text-4xl font-black text-[#dfcba9]/40 font-mono mt-0.5">
              {String(filteredProjects.length).padStart(2, "0")}{" "}
              <span className="text-xs text-zinc-500 font-normal">/ {projects.length}</span>
            </p>
          </div>
        </div>

        {/* ── Interactive Category Tab Filter ── */}
        <div className="mb-10 flex flex-wrap items-center gap-2 sm:gap-3">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? "text-white border-[#dfcba9]/60 shadow-[0_0_20px_rgba(223,203,169,0.15)] bg-white/[0.08]"
                    : "text-zinc-400 border-white/[0.07] bg-white/[0.02] hover:text-zinc-200 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="bento-tab-indicator"
                    className="absolute inset-0 rounded-full bg-[#dfcba9]/10 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[#dfcba9] text-black font-bold"
                      : "bg-white/[0.06] text-zinc-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── 2-Column Responsive Project Grid with AnimatePresence ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                isAr={isAr}
                locale={locale}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Footer note ── */}
        <p className="text-center text-[10px] font-mono text-zinc-600 mt-14 tracking-widest uppercase">
          {isAr
            ? "كل منظومة موثقة بملف معماري كامل وتحليل للأثر التشغيلي"
            : "Every system includes an architectural blueprint & benchmark dossier"}
        </p>
      </div>
    </section>
  );
}

