"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ProjectCard {
  slug: string;
  nameAr: string;
  nameEn: string;
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
    categoryAr: "منظومة حجوزات · ERP سياحي",
    categoryEn: "Tourism OTA · VoucherPro ERP",
    metricAr: "1,200+ حجز شهرياً · 40+ موظف",
    metricEn: "1,200+ monthly bookings · 40 staff",
    techStack: [".NET 8", "CQRS", "Amadeus API", "WhatsApp AI"],
    imageSrc: "/projects/almulhim-travel/main website.png",
  },
  {
    slug: "admin-sa",
    nameAr: "منصة Admin.sa للمناقصات",
    nameEn: "Admin.sa GovTech SaaS",
    categoryAr: "ذكاء اصطناعي · SaaS حكومي",
    categoryEn: "AI Procurement · GovTech SaaS",
    metricAr: "عروض فنية في 90 ثانية · دقة 85%",
    metricEn: "AI proposals in 90s · 85% win rate",
    techStack: ["Python", "Gemini Batch API", "LightGBM", "Celery / Redis"],
    imageSrc: "/projects/admin.sa/main website hero slide.png",
  },
  {
    slug: "alryadh-therapy",
    nameAr: "مركز الرياض للعلاج النفسي",
    nameEn: "Al-Riyadh Psychiatric EMR",
    categoryAr: "سجلات طبية · تطبيب عن بعد",
    categoryEn: "Clinical EMR · WebRTC Telehealth",
    metricAr: "100% رقمي · 7 بوابات · استجابة < 200ms",
    metricEn: "100% paperless · 7 portals · sub-200ms",
    techStack: [".NET 9", "MediatR CQRS", "Daily.co WebRTC", "SignalR"],
    imageSrc: "/projects/alryadh-therapy/emr-dashboard.png",
  },
  {
    slug: "ok-cloud",
    nameAr: "Ok.Cloud — التخزين السحابي",
    nameEn: "Ok.Cloud Infrastructure",
    categoryAr: "سحابة خاصة · مزامنة مكتبية",
    categoryEn: "Private Cloud · Native Desktop Sync",
    metricAr: "توفير 75% تكاليف · رفع ملفات +10GB",
    metricEn: "75% cost reduction · 10GB+ streaming",
    techStack: ["Laravel 12", ".NET 8 MAUI", "Multi-Cloud S3", "SQLite"],
    imageSrc: "/projects/ok.cloud/Screenshot 2025-12-15 221828.png",
  },
  {
    slug: "injaz",
    nameAr: "منصة إنجاز لاعتماد المدارس",
    nameEn: "Injaz School Accreditation",
    categoryAr: "تقنية تعليم · امتثال حكومي",
    categoryEn: "EdTech · Government Quality Audit",
    metricAr: "25,000+ وثيقة · 990 مدرسة",
    metricEn: "25,000+ documents · 990 schools",
    techStack: ["Azure Functions", ".NET 8", "Supabase PostgreSQL", "SAS Tokens"],
    imageSrc: "/projects/injaz/school-portal.png",
  },
  {
    slug: "snabbfood",
    nameAr: "شبكة Snabbfood السويد",
    nameEn: "Snabbfood Sweden Network",
    categoryAr: "توصيل طعام · شاشات رقمية",
    categoryEn: "Food Delivery · Digital Signage PWA",
    metricAr: "50,000+ طلب شهرياً · 15 فرعاً",
    metricEn: "50,000+ monthly orders · 15 branches",
    techStack: ["Vue 3", "Capacitor 7", "Klarna / Swish", "Laravel 12"],
    imageSrc: "/projects/snabbfood/snabbfood website.png",
  },
  {
    slug: "dietbox",
    nameAr: "منظومة DietBox الغذائية",
    nameEn: "DietBox Nutrition Platform",
    categoryAr: "اشتراكات صحية · توليد PDF",
    categoryEn: "Meal Subscriptions · PDF Engine",
    metricAr: "1,000+ مشترك · ملصقات في < 100ms",
    metricEn: "1,000+ subscribers · sub-100ms labels",
    techStack: [".NET 8", "Clean Architecture", "QuestPDF", "SQL Server"],
    imageSrc: "/projects/DietBox/Screenshot 2026-05-02 215152.png",
  },
  {
    slug: "nexgo",
    nameAr: "تطبيق NexGo — الـ Super App",
    nameEn: "NexGo Super App",
    categoryAr: "سوبر آب · 6 قطاعات تجارية",
    categoryEn: "Super App · 6-Sector Marketplace",
    metricAr: "6 قطاعات · تتبع GPS كل ثانية",
    metricEn: "6 verticals · 1-sec driver GPS telemetry",
    techStack: ["Flutter 3.x", "Next.js 15", "Laravel 12", "WebSockets"],
    imageSrc: "/projects/nexgo/superapp-storefront.png",
  },
  {
    slug: "keylicense",
    nameAr: "KeyLicense — نظام التراخيص المشفرة",
    nameEn: "KeyLicense Cryptographic Engine",
    categoryAr: "أمن سيبراني · تشفير متقدم",
    categoryEn: "Cybersecurity · Software Licensing",
    metricAr: "RSA 4096-bit · تحقق أوفلاين < 50ms",
    metricEn: "RSA 4096-bit · sub-50ms offline verify",
    techStack: [".NET 8", "RSA 4096-bit", "Clean Architecture", "SQL Server"],
    imageSrc: "/projects/keylicense/license-dashboard.png",
  },
  {
    slug: "bortselite",
    nameAr: "بوت بورتسيليت الجمركي",
    nameEn: "Bortselite Customs Bot",
    categoryAr: "أتمتة جمركية · RPA",
    categoryEn: "Customs Clearance Automation · RPA",
    metricAr: "تخليص جمركي آلي · .NET 9 + nodriver",
    metricEn: "Automated customs clearance · .NET 9",
    techStack: [".NET 9", "nodriver", "Telegram API", "PostgreSQL"],
    imageSrc: "/projects/bortselite/customs-bot.jpeg",
  },
  {
    slug: "sakani-bot",
    nameAr: "بوت سكني لحجز الأراضي",
    nameEn: "Sakani Land Reservation Bot",
    categoryAr: "أتمتة متصفح · RPA فائق السرعة",
    categoryEn: "Browser RPA · Sub-450ms Execution",
    metricAr: "تنفيذ < 450ms · حجز أراضي آلي",
    metricEn: "Sub-450ms RPA · automated land booking",
    techStack: ["Python 3", "nodriver", "Telegram API", "FastAPI"],
    imageSrc: "/projects/sakanibot/Screenshot 2026-05-02 215448.png",
  },
  {
    slug: "ai-legal",
    nameAr: "معين — المساعد القانوني الذكي",
    nameEn: "Moeen Legal AI Assistant",
    categoryAr: "ذكاء اصطناعي قانوني · RAG",
    categoryEn: "LegalTech AI · RAG System",
    metricAr: "استشارات قانونية فورية · محرك RAG",
    metricEn: "Instant legal Q&A · RAG vector search",
    techStack: ["Python", "RAG", "Gemini API", "FastAPI"],
    imageSrc: "/images/architecture/ai-rag-vector-graph.jpg",
  },
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

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl bg-[#0d0d11] border border-white/[0.07] transition-all duration-500 group-hover:border-[#dfcba9]/25 group-hover:shadow-[0_0_40px_rgba(223,203,169,0.05)]"
      >
        {/* ── Gold sweep line on hover ── */}
        <span
          className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-[#dfcba9] via-[#dfcba9]/60 to-transparent z-20 transition-all duration-[600ms] ease-out"
          style={{ width: hovered ? "100%" : "0%" }}
        />

        {/* ── Cover Image ── */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/10 to-transparent" />

          {/* Ghost index number */}
          <span
            className="absolute bottom-3 right-4 text-[64px] font-black text-white/[0.06] font-mono leading-none select-none pointer-events-none"
            aria-hidden
          >
            {indexLabel}
          </span>

          {/* Category pill */}
          <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-[0.12em] bg-black/55 backdrop-blur-sm text-[#dfcba9]/90 px-2.5 py-1 rounded-full border border-[#dfcba9]/15">
            {isAr ? project.categoryAr : project.categoryEn}
          </span>
        </div>

        {/* ── Content ── */}
        <div className="p-5 pt-4">
          {/* Name */}
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-white transition-colors duration-300">
            {isAr ? project.nameAr : project.nameEn}
          </h3>

          {/* Metric */}
          <p className="text-xs text-[#dfcba9] font-mono mb-3">
            {isAr ? project.metricAr : project.metricEn}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-zinc-300 bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-300">
            <span className="uppercase tracking-widest text-[9px] text-[#dfcba9]">
              {isAr ? "عرض المعمارية" : "View Architecture"}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {isAr ? "←" : "→"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function SystemsBento() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      id="systems"
      className="relative z-20 bg-[#09090b] text-white py-28 px-6 sm:px-12 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-3 font-medium">
              {isAr ? "سجل الأعمال الكاملة" : "Complete Architecture Registry"}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {isAr ? "كل الأعمال" : "All Work"}
            </h2>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-medium">
              {isAr ? "إجمالي المشاريع" : "Total Projects"}
            </p>
            <p className="text-4xl font-black text-white/30 font-mono mt-0.5">
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* ── 2-Column Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isAr={isAr}
              locale={locale}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-[10px] font-mono text-zinc-700 mt-14 tracking-widest uppercase">
          {isAr
            ? "كل مشروع يتضمن تحليلاً معمارياً كاملاً"
            : "Every project includes a full architectural dossier"}
        </p>
      </div>
    </section>
  );
}
