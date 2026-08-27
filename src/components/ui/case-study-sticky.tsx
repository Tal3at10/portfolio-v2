"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface CaseStep {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProjectCase {
  id: string;
  projectNameAr: string;
  projectNameEn: string;
  clientAr: string;
  clientEn: string;
  deployedAr: string;
  deployedEn: string;
  steps: CaseStep[];
}

// Featured top 3 — the flagship case studies shown in the deep-dive sticky section
const caseStudies: ProjectCase[] = [
  {
    id: "almulhim-travel",
    projectNameAr: "مجموعة الملحم للسياحة والسفر",
    projectNameEn: "Almulhim Travel Group",
    clientAr: "منصة حجوزات ونظام ERP لشركات السياحة",
    clientEn: "Global OTA & VoucherPro ERP",
    deployedAr: "تشغيل فعلي منذ 2025",
    deployedEn: "Live since 2025",
    steps: [
      {
        titleAr: "فقدان آلاف العملاء وتأخر عروض الأسعار",
        titleEn: "4,000 Customers Lost to WhatsApp Chaos",
        descriptionAr:
          "أدى الاعتماد على الواتساب وجداول البيانات إلى فقدان آلاف العملاء وتأخر عروض الأسعار لأكثر من 45 دقيقة للحجز الواحد، مع حدوث أخطاء مستمرة في مزامنة أسعار الطيران والفنادق عبر منصات GDS.",
        descriptionEn:
          "Manual booking processes across WhatsApp and spreadsheets caused over 4,000 unhandled customer drop-offs and 45-minute quote preparation delays with frequent GDS rate sync failures.",
        imageSrc: "/projects/almulhimtravel/01-b2c-hero-slide-1-baku.png",
        imageAlt: "Almulhim Travel B2C Platform",
      },
      {
        titleAr: "معمارية .NET 8 وبوت مبيعات ذكي",
        titleEn: "Unified .NET 8 Core & RAG Sales Bot",
        descriptionAr:
          "بناء معمارية نظيفة متكاملة بـ .NET 8 وفق نمط MediatR CQRS، مدعومة بقاعدة بيانات شعاعية للبحث الدلالي RAG، والربط المباشر مع مزودي الطيران والفنادق (Amadeus و Duffel)، مع روبوت مبيعات ذكي عبر واتساب.",
        descriptionEn:
          "Engineered a unified .NET 8 Clean Architecture with MediatR CQRS, In-Memory Vector DB for RAG semantic search, Duffel/Amadeus flight APIs, and an intelligent WhatsApp sales bot.",
        imageSrc: "/projects/almulhimtravel/36-admin-ai-agent-whatsapp-analytics.png",
        imageAlt: "Almulhim Central Admin Dashboard & Live Chat",
      },
      {
        titleAr: "توفير 70% وقت تشغيل لـ 40 موظفاً و 1,200 حجز شهرياً",
        titleEn: "70% Less Operational Work & 1,200 Monthly Bookings",
        descriptionAr:
          "أتمتة توليد قسائم السفر المشفرة بصيغة PDF مع رموز QR لمنع التزوير، مما وفر 70% من وقت التشغيل لأكثر من 40 موظفاً ومعالجة ما يزيد عن 1,200 حجز شهرياً بأمان تام.",
        descriptionEn:
          "Automated encrypted PDF vouchers with tamper-proof QR verification, saving 70% of operational time for 40+ agency staff handling 1,200+ monthly bookings across 50+ countries.",
        imageSrc: "/projects/almulhimtravel/39-voucherpro-dashboard-kpis.png",
        imageAlt: "Voucher Pro B2B Issuance System",
      },
    ],
  },
  {
    id: "injaz",
    projectNameAr: "منصة إنجاز الوطنية لاعتماد المدارس",
    projectNameEn: "Injaz National School Accreditation",
    clientAr: "مديرية التعليم — اعتماد 990+ مدرسة حكومية",
    clientEn: "Ministry of Education — 990+ Schools Quality QA",
    deployedAr: "تشغيل فعلي منذ 2026",
    deployedEn: "Live since 2026",
    steps: [
      {
        titleAr: "استغراق 6 أشهر لفحص وثائق 990 مدرسة يدوياً",
        titleEn: "6-Month Manual Audits for 990 Schools",
        descriptionAr:
          "استغرقت لجان التحكيم أكثر من 6 أشهر لفحص وتدقيق الوثائق الورقية لـ 990 مدرسة، مع تكرار انهيار خوادم الاستلام التقليدية تحت وطأة أحجام الملفات الكبيرة.",
        descriptionEn:
          "Arbitrators spent 6 months manually evaluating paper dossiers for 990 schools, suffering severe upload server crashes.",
        imageSrc: "/projects/injaz-edu/03_injaz_school_upload_wizard_header.png",
        imageAlt: "Injaz School Upload Portal",
      },
      {
        titleAr: "بنية سحابية استوعبت 25,000 وثيقة دون توقف أو انهيار",
        titleEn: "Cloud Infrastructure That Handled 25,000 Files Without a Single Crash",
        descriptionAr:
          "تصميم بنية سحابية قائمة على Azure Functions وآلية رفع مباشر إلى مساحة التخزين دون إجهاد السيرفر، لاستيعاب أكثر من 25,000 وثيقة بنسبة استقرار 100%.",
        descriptionEn:
          "Architected a serverless Azure Functions pipeline with direct-to-blob uploads — effortlessly ingesting 25,000+ documents with zero downtime.",
        imageSrc: "/projects/injaz-edu/11_injaz_admin_evidence_registry_and_ai_matching.png",
        imageAlt: "Injaz Arbitrator Evaluation Panel",
      },
      {
        titleAr: "تدقيق آلي لـ 25,000 وثيقة واستقرار تام بدون توقف",
        titleEn: "Automated 25,000 File Audit with Zero Downtime",
        descriptionAr:
          "أتمتة حساب درجات المطابقة لـ 8 معايير وطنية بدقة خالية من الأخطاء البشرية، مع توليد فوري للشهادات وبطاقات الاعتماد الرسمية الموثقة برمز QR.",
        descriptionEn:
          "Instant algorithmic scoring across 8 national standards with automated certified PDF scorecards.",
        imageSrc: "/projects/injaz-edu/15_injaz_school_scorecard_modal_overview.png",
        imageAlt: "Injaz Reports & Scoring Engine",
      },
    ],
  },
  {
    id: "snabbfood",
    projectNameAr: "منظومة Snabbfood السويدية للمطاعم",
    projectNameEn: "Snabbfood Sweden",
    clientAr: "نظام إدارة مطاعم وشاشات ديجيتال",
    clientEn: "Enterprise Restaurant & Delivery Ecosystem",
    deployedAr: "تشغيل فعلي منذ 2023",
    deployedEn: "Live since 2023",
    steps: [
      {
        titleAr: "تشتت قوائم 15 فرعاً وعمولات التوصيل الباهظة",
        titleEn: "15-Branch Menu Chaos & 30% Platform Fees",
        descriptionAr:
          "واجهت سلاسل المطاعم صعوبة في توحيد قوائم الطعام ومزامنة الأسعار عبر 15 فرعاً، وتكبدت عمولات باهظة لتطبيقات التوصيل الخارجية مع غياب شاشات عرض ذكية متزامنة.",
        descriptionEn:
          "Managing fragmented POS menus, kitchen order queues, and third-party delivery commissions across 15+ Swedish restaurant locations caused significant margin loss.",
        imageSrc: "/projects/snabbfood/snabbfood-web-hero-landing.png",
        imageAlt: "Snabbfood Sweden Platform",
      },
      {
        titleAr: "نواة متعددة المستأجرين وشاشات تلفزيون ذكية",
        titleEn: "Multi-Tenant Core & Smart TV Menu PWA",
        descriptionAr:
          "بناء نواة متعددة المستأجرين بـ Laravel 12 مع تطبيق ويب سريع للطلبات، وتطوير تطبيق PWA مخصص للشاشات الذكية لعرض القوائم وتحديث أسعارها لحظياً من لوحة التحكم.",
        descriptionEn:
          "Built a multi-tenant Laravel 12 backend with clean separation, real-time PWA customer ordering, and automated digital Smart TV menu boards updated instantly from merchant dashboards.",
        imageSrc: "/projects/snabbfood/snabbfood-restaurant-tv-digital-signage-menu.png",
        imageAlt: "Snabbfood Smart TV Menu App",
      },
      {
        titleAr: "دفع نورديك (Klarna & Swish) ومعالجة 50,000 طلب شهرياً",
        titleEn: "Nordic Payments & 50,000 Monthly Orders",
        descriptionAr:
          "الربط مع بوابات الدفع النوردية المعتمدة (Klarna, Swish, Stripe) مع بناء نظام تتبع جغرافي حي للسائقين عبر الخرائط لمعالجة أكثر من 50,000 طلب شهرياً.",
        descriptionEn:
          "Integrated Klarna, Swish, and Stripe payment gateways with real-time driver tracking, processing over 50,000 monthly orders across Swedish restaurant chains.",
        imageSrc: "/projects/snabbfood/snabbfood-mobile-pwa-home-overview.png",
        imageAlt: "Pronto Restaurant Platform",
      },
    ],
  },
];

export function CaseStudySticky() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="case-studies" className="relative z-20 w-full bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto pt-20 pb-20 sm:pt-28 sm:pb-28 px-6 sm:px-12">
      
      {/* Global Section Title */}
      <div className="mb-20 text-center">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-4 font-medium">
          {isAr ? "أعمق الحالات المعمارية" : "Deep-Dive Case Studies"}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white px-4 [text-wrap:balance]">
          {isAr ? "دراسات الحالة المعمارية" : "Architectural Case Studies"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "ثلاثة أنظمة. مشاكل حقيقية. نتائج قابلة للقياس."
            : "Three flagship platforms. Real problems solved. Measurable outcomes."}
        </p>
      </div>

      {/* Projects List */}
      {/* Projects List */}
      <div className="space-y-20 sm:space-y-36">
        {caseStudies.map((project) => (
          <ProjectStickySection key={project.id} project={project} isAr={isAr} />
        ))}
      </div>
      </div>
    </section>
  );
}

function ProjectStickySection({ project, isAr }: { project: ProjectCase; isAr: boolean }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const locale = useLocale();

  // Dual-strategy: Immediate scroll tracking + IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;
      // On mobile with sticky image at top, the text active trigger line is around 60% of viewport
      const targetY = isMobile ? window.innerHeight * 0.6 : window.innerHeight * 0.5;

      let closest = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - targetY);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });
      setActiveStep(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [project.steps.length]);

  return (
    <div className="relative">
      
      {/* Project Label Header */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#dfcba9]/10 border border-[#dfcba9]/30 text-[#dfcba9] font-medium">
              <span className="size-1.5 rounded-full bg-[#dfcba9] animate-pulse" />
              {isAr ? project.deployedAr : project.deployedEn}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {isAr ? project.projectNameAr : project.projectNameEn}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1.5">
            {isAr ? project.clientAr : project.clientEn}
          </p>
        </div>

        <Link
          href={`/${locale}/projects/${project.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-[#dfcba9]/50 bg-white/[0.05] hover:bg-[#dfcba9] text-zinc-100 hover:text-black text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(223,203,169,0.3)] w-fit shrink-0 cursor-pointer hover:-translate-y-0.5"
        >
          <span>{isAr ? "عرض الملف المعماري الكامل" : "View Architectural Dossier"}</span>
          <span className="font-bold">{isAr ? "←" : "→"}</span>
        </Link>
      </div>

      {/* Main Sticky Grid (Unified layout with full animation on all screens) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
        
        {/* Sticky Pinned Image Card */}
        <div className="lg:order-2 lg:col-span-7 w-full sticky top-16 sm:top-20 lg:top-[20vh] z-20 mb-6 lg:mb-0">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-md">
            {project.steps.map((step, idx) => (
              <motion.div
                key={step.imageSrc}
                initial={false}
                animate={{
                  opacity: activeStep === idx ? 1 : 0,
                  scale: activeStep === idx ? 1 : 1.02,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  unoptimized={true}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={idx === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Steps Column */}
        <div className="lg:order-1 lg:col-span-5 space-y-8 lg:space-y-4">
          {project.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.titleEn}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`min-h-[55vh] sm:min-h-[50vh] py-8 flex flex-col justify-center transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono mb-2">
                  <span className={`w-2 h-2 rounded-full ${idx === 2 ? "bg-emerald-400 animate-pulse" : "bg-[#dfcba9]"}`} />
                  <span className={idx === 2 ? "text-emerald-400 font-bold" : "text-[#dfcba9] font-medium"}>
                    {idx === 0
                      ? isAr
                        ? "01. المشكلة والتحدي"
                        : "01. The Challenge"
                      : idx === 1
                      ? isAr
                        ? "02. الحل التقني والمعمارية"
                        : "02. The Architecture"
                      : isAr
                      ? "03. الأثر والنتائج بالأرقام"
                      : "03. The Business Outcome"}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3">
                  {isAr ? step.titleAr : step.titleEn}
                </h4>
                <p dir="auto" className="text-xs sm:text-base text-zinc-300 leading-[1.85] font-normal max-w-xl">
                  {isAr ? step.descriptionAr : step.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
