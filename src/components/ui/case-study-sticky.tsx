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
  steps: CaseStep[];
}

const caseStudies: ProjectCase[] = [
  {
    id: "almulhim-travel",
    projectNameAr: "مجموعة الملحم للسياحة والسفر",
    projectNameEn: "Almulhim Travel Group",
    clientAr: "منصة حجوزات ونظام ERP لشركات السياحة",
    clientEn: "Global OTA & VoucherPro ERP",
    steps: [
      {
        titleAr: "فقدان آلاف العملاء وتأخر عروض الأسعار",
        titleEn: "4,000 Customers Lost to WhatsApp Chaos",
        descriptionAr:
          "أدى الاعتماد على الواتساب وجداول البيانات إلى فقدان آلاف العملاء وتأخر عروض الأسعار لأكثر من 45 دقيقة للحجز الواحد، مع حدوث أخطاء مستمرة في مزامنة أسعار الطيران والفنادق عبر منصات GDS.",
        descriptionEn:
          "Manual booking processes across WhatsApp and spreadsheets caused over 4,000 unhandled customer drop-offs and 45-minute quote preparation delays with frequent GDS rate sync failures.",
        imageSrc: "/projects/almulhim-travel/main website.png",
        imageAlt: "Almulhim Travel B2C Platform",
      },
      {
        titleAr: "معمارية .NET 8 وبوت مبيعات ذكي",
        titleEn: "Unified .NET 8 Core & RAG Sales Bot",
        descriptionAr:
          "بناء معمارية نظيفة متكاملة بـ .NET 8 وفق نمط MediatR CQRS، مدعومة بقاعدة بيانات شعاعية للبحث الدلالي RAG، والربط المباشر مع مزودي الطيران والفنادق (Amadeus و Duffel)، مع روبوت مبيعات ذكي عبر واتساب.",
        descriptionEn:
          "Engineered a unified .NET 8 Clean Architecture with MediatR CQRS, In-Memory Vector DB for RAG semantic search, Duffel/Amadeus flight APIs, and an intelligent WhatsApp sales bot.",
        imageSrc: "/projects/almulhim-travel/admin dashboard.png",
        imageAlt: "Almulhim Central Admin Dashboard",
      },
      {
        titleAr: "توفير 70% وقت تشغيل لـ 40 موظفاً و 1,200 حجز شهرياً",
        titleEn: "70% Less Operational Work & 1,200 Monthly Bookings",
        descriptionAr:
          "أتمتة توليد قسائم السفر المشفرة بصيغة PDF مع رموز QR لمنع التزوير، مما وفر 70% من وقت التشغيل لأكثر من 40 موظفاً ومعالجة ما يزيد عن 1,200 حجز شهرياً بأمان تام.",
        descriptionEn:
          "Automated encrypted PDF vouchers with tamper-proof QR verification, saving 70% of operational time for 40+ agency staff handling 1,200+ monthly bookings across 50+ countries.",
        imageSrc: "/projects/almulhim-travel/voucher dashboard.png",
        imageAlt: "Voucher Pro B2B Issuance System",
      },
    ],
  },
  {
    id: "admin-sa",
    projectNameAr: "منصة Admin.sa لمناقصات اعتماد",
    projectNameEn: "Admin.sa (Etimad Procurement)",
    clientAr: "منصة SaaS للسوق السعودي",
    clientEn: "Saudi B2B GovTech SaaS",
    steps: [
      {
        titleAr: "تفويت 60% من المناقصات وتأخر إعداد العروض 14 يوماً",
        titleEn: "60% Tenders Missed & 14-Day Drafting Delays",
        descriptionAr:
          "كانت شركات المقاولات تفقد أكثر من 60% من المناقصات الحكومية المناسبة بسبب صعوبة البحث اليدوي اليومي واستغراق ما يصل إلى 14 يوماً لتجهيز كراسات الشروط والعروض الفنية المعقدة.",
        descriptionEn:
          "Contractors missed 60%+ of relevant government tenders due to tedious manual searches and 14-day delays in drafting complex technical proposals.",
        imageSrc: "/projects/admin.sa/curated/01-etimad-discovery-portal.png",
        imageAlt: "Admin.sa Tender Discovery Landing",
      },
      {
        titleAr: "أتمتة الكشط وتوليد العروض بالذكاء الاصطناعي",
        titleEn: "Automated Scraping & Batch AI Proposals",
        descriptionAr:
          "تطوير مسار كشط متقدم باستخدام curl-cffi وطوابير Celery/Redis، مع دمج Gemini Batch API لتوليد عروض فنية تفصيلية بصيغة Word في أقل من 90 ثانية وبدقة تتجاوز 95%.",
        descriptionEn:
          "Designed a resilient scraping pipeline with curl-cffi and Celery/Redis queue, integrating Gemini Batch API to auto-generate formatted technical Word proposals in under 90 seconds.",
        imageSrc: "/projects/admin.sa/curated/02-tenders-scraping-queue.png",
        imageAlt: "Admin.sa AI Tender Automation Dashboard",
      },
      {
        titleAr: "توليد العرض الفني في 90 ثانية ونموذج تنبؤ بنسبة 85%",
        titleEn: "AI Proposals in 90s & 85% Win Probability",
        descriptionAr:
          "تدريب نموذج تعلم آلي LightGBM لتقدير احتمالية الفوز بالمناقصة بدقة 85%، مع ربط نظام تنبيهات واتساب فوري وبوابة دفع MyFatoorah لإدارة وتجديد الاشتراكات الدورية.",
        descriptionEn:
          "Trained a LightGBM classification model for bid win probability scoring, integrated Evolution WhatsApp alerts, and MyFatoorah payment gateway for recurring subscriptions.",
        imageSrc: "/projects/admin.sa/curated/04-ai-proposal-word-generator.png",
        imageAlt: "Admin.sa Analytics Overview",
      },
    ],
  },
  {
    id: "alryadh-therapy",
    projectNameAr: "مركز الرياض للعلاج النفسي والـ EMR",
    projectNameEn: "Al-Riyadh Psychiatric EMR & Telehealth",
    clientAr: "سجلات طبية وعيادة افتراضية مشفرة",
    clientEn: "Clinical EMR & HIPAA Telemedicine",
    steps: [
      {
        titleAr: "بطء السجلات الورقية وغياب العيادة الافتراضية",
        titleEn: "Paper Record Bottlenecks & No Telehealth",
        descriptionAr:
          "تسبب الاعتماد على الملفات الورقية في بطء شديد في متابعة المرضى، مع غياب عيادة افتراضية مشفرة ومتوافقة مع المعايير الصحية تغني عن التطبيقات الخارجية غير الآمنة.",
        descriptionEn:
          "Managing physical paper records created massive bottlenecks in patient tracking and lacked a HIPAA-compliant encrypted telemedicine suite.",
        imageSrc: "/projects/alryadh-therapy/curated/01-clinical-emr-gateway.png",
        imageAlt: "Al-Riyadh EMR Clinical Portal",
      },
      {
        titleAr: "معمارية CQRS و 7 بوابات مستقلة",
        titleEn: ".NET 9 CQRS & 7 Isolated Workspaces",
        descriptionAr:
          "تصميم بنية تحتية بـ .NET 9 ونمط MediatR CQRS تفصل بين القراءة والكتابة، مع عزل كامل للصلاحيات عبر 7 بوابات مخصصة لضمان استرجاع السجلات الطبية في أقل من 200 ملي ثانية.",
        descriptionEn:
          "Architected on .NET 9 utilizing MediatR CQRS, segregating workflows across 7 isolated portals for sub-200ms medical chart queries.",
        imageSrc: "/projects/alryadh-therapy/curated/03-encrypted-webrtc-telehealth.png",
        imageAlt: "Al-Riyadh Telehealth Suite",
      },
      {
        titleAr: "عيادة رقمية 100% بدون أوراق واستدعاء في أقل من 200ms",
        titleEn: "100% Paperless Clinic & Sub-200ms EMR Lookups",
        descriptionAr:
          "دمج غرف فيديو مشفرة تعمل مباشرة عبر المتصفح عبر WebRTC دون الحاجة لتثبيت برامج، مع نظام إشعارات طوارئ لحظية بـ SignalR لتحويل المركز إلى بيئة رقمية بنسبة 100%.",
        descriptionEn:
          "Embedded browser-native encrypted video rooms via Daily.co WebRTC paired with SignalR triage alerts, achieving 100% paperless workflows.",
        imageSrc: "/projects/alryadh-therapy/curated/04-patient-booking-portal.png",
        imageAlt: "Al-Riyadh Patient Booking Hub",
      },
    ],
  },
  {
    id: "ok-cloud",
    projectNameAr: "سحابة Ok.Cloud وتطبيق المزامنة المكتبي",
    projectNameEn: "Ok.Cloud Enterprise Storage & Desktop Sync",
    clientAr: "تخزين سحابي خاص ومزامنة ملفات ضخمة",
    clientEn: "Private Multi-Cloud & Native Desktop Sync",
    steps: [
      {
        titleAr: "تكاليف التخزين السحابي التجاري الباهظة",
        titleEn: "Prohibitive Commercial Cloud Storage Bills",
        descriptionAr:
          "واجهت الشركات تكاليف اشتراك باهظة في خدمات التخزين السحابي التجارية عند إدارة ومشاركة ملفات الوسائط الضخمة التي تتجاوز 10GB، مع فقدان السيطرة الكاملة على البيانات.",
        descriptionEn:
          "Media enterprises faced massive monthly bills on commercial cloud drives when handling large 10GB+ video archives without storage freedom.",
        imageSrc: "/projects/ok.cloud/Screenshot 2025-12-15 221828.png",
        imageAlt: "Ok.Cloud Storage Web Hub",
      },
      {
        titleAr: "تخزين سحابي مرن ورفع مجزأ لملفات 10GB+",
        titleEn: "Multi-Cloud Storage & 10GB+ Chunked Stream",
        descriptionAr:
          "تطوير طبقة تخزين سحابية مرنة تدعم بروتوكولات S3 و SFTP و WebDAV بحرية تامة، مع محرك رفع مجزأ فائق السرعة للتعامل مع الملفات الضخمة دون انقطاع.",
        descriptionEn:
          "Engineered a multi-cloud storage driver layer supporting S3, SFTP, and WebDAV with resilient chunked upload streams.",
        imageSrc: "/projects/ok.cloud/Screenshot 2025-12-15 222158.png",
        imageAlt: "Ok.Cloud File Browser",
      },
      {
        titleAr: "تطبيق مزامنة مكتبي بـ SQLite محلي وتوفير 75% تكاليف",
        titleEn: "Native Sync Daemon & 75% Cloud Cost Savings",
        descriptionAr:
          "بناء تطبيق مكتبي أصلي بنظام .NET 8 MAUI يعمل في الخلفية باستهلاك ذاكرة أقل من 40MB، مزود بفهرسة SQLite محلية تتيح تصفح الملفات والبحث فيها دون اتصال بالإنترنت.",
        descriptionEn:
          "Built a native .NET 8 MAUI Windows background sync daemon consuming <40MB RAM with local SQLite offline indexing.",
        imageSrc: "/projects/ok.cloud/Screenshot 2025-12-15 232447.png",
        imageAlt: "Ok.Cloud Desktop Sync Daemon",
      },
    ],
  },
  {
    id: "injaz",
    projectNameAr: "منصة إنجاز الوطنية لاعتماد المدارس",
    projectNameEn: "Injaz National School Accreditation",
    clientAr: "مديرية التعليم — اعتماد 990+ مدرسة حكومية",
    clientEn: "Ministry of Education — 990+ Schools Quality QA",
    steps: [
      {
        titleAr: "استغراق 6 أشهر لفحص وثائق 990 مدرسة يدوياً",
        titleEn: "6-Month Manual Audits for 990 Schools",
        descriptionAr:
          "استغرقت لجان التحكيم أكثر من 6 أشهر لفحص وتدقيق الوثائق الورقية لـ 990 مدرسة، مع تكرار انهيار خوادم الاستلام التقليدية تحت وطأة أحجام الملفات الكبيرة.",
        descriptionEn:
          "Arbitrators spent 6 months manually evaluating paper dossiers for 990 schools, suffering severe upload server crashes.",
        imageSrc: "/projects/injaz/school-portal.png",
        imageAlt: "Injaz School Upload Portal",
      },
      {
        titleAr: "رفع سحابي مباشر بـ SAS Tokens دون إجهاد السيرفر",
        titleEn: "Serverless Direct-to-Cloud SAS Tokens",
        descriptionAr:
          "تصميم بنية سحابية قائمة على Azure Functions وآلية رفع مباشر إلى مساحة التخزين عبر SAS Tokens دون إجهاد السيرفر، لاستيعاب أكثر من 25,000 وثيقة بنسبة استقرار 100%.",
        descriptionEn:
          "Architected Azure Functions with SAS Token direct-to-blob uploads, effortlessly ingesting 25,000+ documents with zero downtime.",
        imageSrc: "/projects/injaz/audit-panel.png",
        imageAlt: "Injaz Arbitrator Evaluation Panel",
      },
      {
        titleAr: "تدقيق آلي لـ 25,000 وثيقة واستقرار 100% بدون توقف",
        titleEn: "Automated 25,000 File Audit with Zero Downtime",
        descriptionAr:
          "أتمتة حساب درجات المطابقة لـ 8 معايير وطنية بدقة خالية من الأخطاء البشرية، مع توليد فوري للشهادات وبطاقات الاعتماد الرسمية الموثقة برمز QR.",
        descriptionEn:
          "Instant algorithmic scoring across 8 national standards with automated certified PDF scorecards.",
        imageSrc: "/projects/injaz/reports-engine.png",
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
    steps: [
      {
        titleAr: "تشتت قوائم 15 فرعاً وعمولات التوصيل الباهظة",
        titleEn: "15-Branch Menu Chaos & 30% Platform Fees",
        descriptionAr:
          "واجهت سلاسل المطاعم صعوبة في توحيد قوائم الطعام ومزامنة الأسعار عبر 15 فرعاً، وتكبدت عمولات باهظة لتطبيقات التوصيل الخارجية مع غياب شاشات عرض ذكية متزامنة.",
        descriptionEn:
          "Managing fragmented POS menus, kitchen order queues, and third-party delivery commissions across 15+ Swedish restaurant locations caused significant margin loss.",
        imageSrc: "/projects/snabbfood/snabbfood website.png",
        imageAlt: "Snabbfood Sweden Platform",
      },
      {
        titleAr: "نواة متعددة المستأجرين وشاشات تلفزيون ذكية",
        titleEn: "Multi-Tenant Core & Smart TV Menu PWA",
        descriptionAr:
          "بناء نواة متعددة المستأجرين بـ Laravel 12 مع تطبيق ويب سريع للطلبات، وتطوير تطبيق PWA مخصص للشاشات الذكية لعرض القوائم وتحديث أسعارها لحظياً من لوحة التحكم.",
        descriptionEn:
          "Built a multi-tenant Laravel 12 backend with clean separation, real-time PWA customer ordering, and automated digital Smart TV menu boards updated instantly from merchant dashboards.",
        imageSrc: "/projects/snabbfood/tv-app.png",
        imageAlt: "Snabbfood Smart TV Menu App",
      },
      {
        titleAr: "دفع نورديك (Klarna & Swish) ومعالجة 50,000 طلب شهرياً",
        titleEn: "Nordic Payments & 50,000 Monthly Orders",
        descriptionAr:
          "الربط مع بوابات الدفع النوردية المعتمدة (Klarna, Swish, Stripe) مع بناء نظام تتبع جغرافي حي للسائقين عبر الخرائط لمعالجة أكثر من 50,000 طلب شهرياً.",
        descriptionEn:
          "Integrated Klarna, Swish, and Stripe payment gateways with real-time driver tracking, processing over 50,000 monthly orders across Swedish restaurant chains.",
        imageSrc: "/projects/snabbfood/pronto website.png",
        imageAlt: "Pronto Restaurant Platform",
      },
    ],
  },
  {
    id: "dietbox",
    projectNameAr: "منظومة دايت بوكس (DietBox) الغذائية",
    projectNameEn: "DietBox Clinical Nutrition Operations",
    clientAr: "اشتراكات صحية وتوليد جداول الـ PDF",
    clientEn: "Meal Subscriptions & Dynamic PDF Generation",
    steps: [
      {
        titleAr: "هدر 3 ساعات يومياً في حساب السعرات والملصقات",
        titleEn: "3+ Hours Daily on Manual Nutrition Slips",
        descriptionAr:
          "استغرق حساب السعرات والماكروز وتجهيز ملصقات الوجبات المخصصة لأكثر من 1,000 مشترك أكثر من 3 ساعات يومياً من طاقم العمل، مع تكرار أخطاء التوزيع بالمطبخ.",
        descriptionEn:
          "Calculating calories and preparing custom meal box labels took 3+ hours daily with recurring kitchen mix-ups.",
        imageSrc: "/projects/DietBox/Screenshot 2026-05-02 215152.png",
        imageAlt: "DietBox Subscription Dashboard",
      },
      {
        titleAr: "توليد ملصقات QuestPDF فائقة السرعة في 100ms",
        titleEn: "Sub-100ms QuestPDF Label Generation",
        descriptionAr:
          "تطوير محرك فائق السرعة عبر QuestPDF لتوليد مئات الملصقات الحرارية وجداول التغذية التفصيلية بصيغة PDF في أقل من 100 ملي ثانية لكل دفعة.",
        descriptionEn:
          "Engineered a high-speed QuestPDF vector engine rendering hundreds of meal labels and diet plans in sub-100ms.",
        imageSrc: "/projects/DietBox/Screenshot 2026-05-02 215207.png",
        imageAlt: "DietBox PDF Generation",
      },
      {
        titleAr: "أتمتة اشتراكات 1,000+ عميل وصفر أخطاء في المطبخ",
        titleEn: "1,000+ Automated Subscribers & Zero Errors",
        descriptionAr:
          "هيكلة المنظومة وفق المعمارية النظيفة بـ .NET 8 لإدارة الاشتراكات الشهرية وجدولة التوصيل اليومي للمطابخ بدقة متناهية ونسبة خطأ 0%.",
        descriptionEn:
          "Architected on .NET 8 Clean Architecture, handling recurring renewals and automated daily kitchen fulfillment with 0% error rate.",
        imageSrc: "/projects/DietBox/Screenshot 2026-05-02 215222.png",
        imageAlt: "DietBox Meal Labels",
      },
    ],
  },
  {
    id: "nexgo",
    projectNameAr: "سوق نكست جو (NexGo) — الـ Super App",
    projectNameEn: "NexGo Super App & Multi-Vendor Marketplace",
    clientAr: "تطبيق شامل لـ 6 قطاعات مع تتبع لحظي",
    clientEn: "6-Sector Quick-Commerce & Live GPS Logistics",
    steps: [
      {
        titleAr: "تشتت 6 قطاعات تجارية في تطبيقات منفصلة",
        titleEn: "6 Disconnected Vertical Systems",
        descriptionAr:
          "الحاجة لبناء تطبيق فائق (Super App) يدمج 6 قطاعات تجارية وخدمية متفرقة (مطاعم، بقالة، صيدلية، طرود، تأجير، رحلات) في تجربة مستخدم واحدة سلسة وسريعة.",
        descriptionEn:
          "Need for a unified Super App unifying 6 commercial verticals (Food, Grocery, Pharmacy, Parcels, Rentals, Rides) seamlessly.",
        imageSrc: "/projects/nexgo/superapp-storefront.png",
        imageAlt: "NexGo SuperApp Storefront",
      },
      {
        titleAr: "سوبر آب موحد و 3 تطبيقات فلاتر بتتبع لحظي",
        titleEn: "Unified Super App & 1-Sec Driver Telemetry",
        descriptionAr:
          "تطوير 3 تطبيقات هاتف هجينة بـ Flutter مدعومة ببث لحظي لموقع السائق عبر WebSockets كل ثانية واحدة، مع خريطة تفاعلية للعميل وإدارة شاملة للأسطول.",
        descriptionEn:
          "Built 3 dedicated Flutter apps (Customer, Driver, Vendor) with sub-second driver GPS telemetry over WebSockets.",
        imageSrc: "/projects/nexgo/flutter-driver.jpeg",
        imageAlt: "NexGo Driver Flutter Telemetry",
      },
      {
        titleAr: "طباعة بلوتوث حرارية بالمطبخ وتسريع التوصيل 85%",
        titleEn: "Instant Bluetooth POS Tickets & 0% Fees",
        descriptionAr:
          "ربط مباشر بين تطبيق التاجر وطابعات الفواتير الحرارية عبر البلوتوث لطباعة إيصالات وتذاكر الطلبات فور ورودها تلقائياً بدون تدخل يدوي.",
        descriptionEn:
          "Integrated Bluetooth ESC/POS thermal printing for zero-latency kitchen ticket dispatch upon customer checkout.",
        imageSrc: "/projects/nexgo/pos-bluetooth.jpeg",
        imageAlt: "NexGo Vendor POS Printing",
      },
    ],
  },
];

export function CaseStudySticky() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="case-studies" className="relative z-20 bg-[#000000] text-white pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto">
      
      {/* Global Section Title */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {isAr ? "دراسات الحالة المعمارية" : "Architectural Case Studies"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "ثمانية أنظمة. مشاكل حقيقية. نتائج قابلة للقياس."
            : "Eight platforms. Real problems solved. Measurable outcomes."}
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-36">
        {caseStudies.map((project) => (
          <ProjectStickySection key={project.id} project={project} isAr={isAr} />
        ))}
      </div>
    </section>
  );
}

function ProjectStickySection({ project, isAr }: { project: ProjectCase; isAr: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const locale = useLocale();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const stepCount = project.steps.length;
      const index = Math.min(
        Math.max(0, Math.floor(latest * stepCount)),
        stepCount - 1
      );
      setActiveStep(index);
    });
  }, [scrollYProgress, project.steps.length]);

  return (
    <div ref={containerRef} className="relative">
      
      {/* Project Label Header */}
      <div className="mb-8 border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {isAr ? project.projectNameAr : project.projectNameEn}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1.5">
            {isAr ? project.clientAr : project.clientEn}
          </p>
        </div>

        <Link
          href={`/${locale}/projects/${project.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.04] hover:bg-white text-zinc-300 hover:text-black text-xs font-mono transition-all duration-300 w-fit shrink-0 cursor-pointer"
        >
          <span>{isAr ? "عرض الملف المعماري الكامل" : "View Architectural Dossier"}</span>
          <span className="font-bold">{isAr ? "←" : "→"}</span>
        </Link>
      </div>

      {/* Main Grid: Left Steps + Right Pinned Image (Adaptive for Desktop & Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
        
        {/* Sticky Image Column (Pinned at top on mobile, sticky in center on desktop) */}
        <div className="lg:order-2 lg:col-span-7 w-full sticky top-20 lg:top-[20vh] z-30 lg:z-10 mb-6 lg:mb-0">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-md">
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
                  unoptimized={step.imageSrc.endsWith('.svg')}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={idx === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Steps Column (Flows on left on desktop, scrolls underneath pinned image on mobile) */}
        <div className="lg:order-1 lg:col-span-5 space-y-6 lg:space-y-4">
          {project.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.titleEn}
                className={`min-h-[45vh] sm:min-h-[50vh] flex flex-col justify-center transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-25 lg:opacity-20"
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
                        ? "02. بناء المنظومة والمعمارية"
                        : "02. The Architecture"
                      : isAr
                      ? "03. الأثر والنتائج بالأرقام"
                      : "03. The Business Outcome"}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3">
                  {isAr ? step.titleAr : step.titleEn}
                </h4>
                <p dir="auto" className="text-sm sm:text-base text-zinc-300 leading-[1.8] font-normal max-w-xl">
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
