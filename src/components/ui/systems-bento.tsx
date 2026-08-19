"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconCloud,
  IconToolsKitchen2,
  IconRobot,
  IconActivity,
  IconBuildingStore,
  IconSchool,
  IconShieldLock,
  IconHeartbeat,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

interface BentoItem {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  techStack: string[];
  icon: any;
  imageSrc: string;
  colSpan: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "ok-cloud",
    nameAr: "البنية التحتية السحابية Ok.Cloud",
    nameEn: "Ok.Cloud Infrastructure",
    categoryAr: "تخزين سحابي ومزامنة",
    categoryEn: "Cloud Storage & Desktop Sync",
    descriptionAr:
      "بنية تحتية للتخزين السحابي الخاص تدعم المزامنة المتعددة مع (S3, SFTP, WebDAV)، مع تطبيق مكتبي أصلي بـ .NET 8 MAUI وفهرسة محلية عبر SQLite.",
    descriptionEn:
      "Private cloud storage infrastructure with multi-cloud (S3, SFTP, WebDAV) sync engine, and native .NET 8 MAUI desktop client with offline SQLite caching.",
    techStack: ["Laravel 12", ".NET 8 MAUI", "Multi-Cloud S3", "SQLite"],
    icon: IconCloud,
    imageSrc: "/projects/ok-cloud/curated/01-web-cloud-explorer.png",
    colSpan: "lg:col-span-2",
  },
  {
    id: "alryadh-therapy",
    nameAr: "سجلات مركز الرياض (EMR)",
    nameEn: "Al-Riyadh Psychiatric EMR",
    categoryAr: "رعاية صحية وتطبيب عن بعد",
    categoryEn: "HealthTech & Telehealth",
    descriptionAr:
      "نظام سجلات طبية إلكترونية EMR بـ 7 بوابات وفصل كامل للصلاحيات، مع عيادة افتراضية مشفرة WebRTC تعمل في المتصفح مباشرة.",
    descriptionEn:
      "Medical grade psychiatric EMR with 7 isolated role portals, MediatR CQRS on .NET 9, and zero-install encrypted Daily.co WebRTC video rooms.",
    techStack: [".NET 9", "CQRS", "WebRTC", "SignalR"],
    icon: IconHeartbeat,
    imageSrc: "/projects/alryadh-therapy/curated/01-clinical-emr-gateway.png",
    colSpan: "lg:col-span-1",
  },
  {
    id: "nexgo",
    nameAr: "سوق نكست جو (NexGo Super App)",
    nameEn: "NexGo Multi-Sector Super App",
    categoryAr: "أسواق وتجارة سريعة",
    categoryEn: "Super App & Quick-Commerce",
    descriptionAr:
      "منظومة متكاملة لـ 6 قطاعات مع تتبع لحظي للسائقين كل ثانية عبر WebSockets، و 3 تطبيقات Flutter وطباعة فواتير حرارية للبائعين.",
    descriptionEn:
      "Unified 6-sector marketplace with 1-sec driver GPS telemetry over WebSockets, 3 native Flutter apps, and Bluetooth POS ticket printing.",
    techStack: ["Flutter 3.x", "Next.js 15", "Laravel 12", "MySQL Spatial"],
    icon: IconBuildingStore,
    imageSrc: "/projects/nexgo/curated/01-superapp-storefront.png",
    colSpan: "lg:col-span-1",
  },
  {
    id: "injaz",
    nameAr: "منصة إنجاز لاعتماد 990+ مدرسة",
    nameEn: "Injaz School Accreditation Platform",
    categoryAr: "تكنولوجيا تعليم وامتثال حكومي",
    categoryEn: "EdTech & Gov QA",
    descriptionAr:
      "بنية Serverless على Azure استوعبت رفع 25,000+ وثيقة وشاهد بدون وسيط عبر SAS Tokens المباشرة وقاعدة Supabase مع تدقيق لحظي للـ 8 معايير.",
    descriptionEn:
      "Azure Serverless architecture ingesting 25,000+ accreditation evidences via direct SAS Tokens, Supabase PostgreSQL, and zero downtime.",
    techStack: ["Azure Functions", ".NET 8", "Supabase", "Vanilla JS"],
    icon: IconSchool,
    imageSrc: "/projects/injaz/curated/01-school-evidence-upload.png",
    colSpan: "lg:col-span-2",
  },
  {
    id: "dietbox",
    nameAr: "نظام DietBox الصحي",
    nameEn: "DietBox Operations",
    categoryAr: "اشتراكات طبية وتغذية",
    categoryEn: "HealthTech & Nutrition",
    descriptionAr:
      "منصة لاشتراكات الوجبات الصحية مبنية بـ .NET 8 مع محرك فوري لتوليد الجداول والملصقات كـ PDF في أقل من 100 ملي ثانية.",
    descriptionEn:
      "Clinical meal subscription platform powered by .NET 8 Clean Architecture with dynamic sub-100ms QuestPDF diet plan generator.",
    techStack: [".NET 8", "CQRS", "QuestPDF", "SQL Server"],
    icon: IconActivity,
    imageSrc: "/projects/DietBox/curated/01-subscription-management.png",
    colSpan: "lg:col-span-1",
  },
  {
    id: "snabbfood",
    nameAr: "نظام مطاعم Snabbfood السويد",
    nameEn: "Snabbfood Sweden",
    categoryAr: "توصيل وشاشات ديجيتال",
    categoryEn: "Food Delivery & Signage",
    descriptionAr:
      "إدارة لسلاسل المطاعم مع تتبع لحظي للتوصيل وتطبيق شاشات لعرض القوائم الرقمية وتحديثها فورياً مع بوابات Klarna و Swish.",
    descriptionEn:
      "Multi-restaurant management, live delivery tracking (Vue 3 / Capacitor 7), real-time digital TV menu displays, and Klarna/Swish integrations.",
    techStack: ["Vue 3", "Capacitor 7", "Klarna", "Swish"],
    icon: IconToolsKitchen2,
    imageSrc: "/projects/snabbfood/curated/01-snabbfood-swedish-portal.png",
    colSpan: "lg:col-span-1",
  },
  {
    id: "keylicense",
    nameAr: "حماية وتراخيص KeyLicense Pro",
    nameEn: "KeyLicense Cryptographic Engine",
    categoryAr: "أمن سيبراني وتشفير",
    categoryEn: "Cybersecurity & Licensing",
    descriptionAr:
      "نظام حماية وتوليد تراخيص مشفرة بـ RSA 4096-bit مرتبطة ببصمة عتاد الجهاز، مع دعم التحقق الأوفلاين السريع (< 50ms).",
    descriptionEn:
      "Asymmetric RSA 4096-bit cryptographic software licensing server with hardware node-locking and sub-50ms offline verification leases.",
    techStack: [".NET 8", "RSA 4096-bit", "Clean Architecture", "SQL Server"],
    icon: IconShieldLock,
    imageSrc: "/projects/keylicense/license-dashboard.png",
    colSpan: "lg:col-span-1",
  },
  {
    id: "ai-bots",
    nameAr: "أدوات الأتمتة الذكية",
    nameEn: "AI Automation Suite",
    categoryAr: "أتمتة ذكية وروبوتات ChatOps",
    categoryEn: "Autonomous RPA & ChatOps",
    descriptionAr:
      "مجموعة روبوتات متخصصة تشمل: بوت سكني لحجز الأراضي عبر المتصفح في < 450ms، وبوت التخليص الجمركي بورتسيليت بـ .NET 9، ومحركات واتساب الذكية.",
    descriptionEn:
      "Specialized autonomous bots including Sakani LandBot (<450ms RPA execution), Bortselite Customs Clearance engine (.NET 9), and WhatsApp sales bots.",
    techStack: ["Python 3", "nodriver", ".NET 9", "Telegram / WhatsApp API"],
    icon: IconRobot,
    imageSrc: "/projects/sakanibot/telegram notifi.png",
    colSpan: "lg:col-span-2",
  },
];

export function SystemsBento() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="systems" className="relative z-20 bg-[#000000] text-white py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Section Header */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {isAr ? "المنصات والأنظمة الأساسية" : "Mission-Critical Platforms"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "معماريات قابلة للتوسع في السحابة، الصحة، والذكاء الاصطناعي."
            : "Scalable architectures engineered across Cloud Storage, GovTech, HealthTech, and Autonomous AI Infrastructure."}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {bentoItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={cn(
                "group relative rounded-2xl bg-[#09090d] border border-white/[0.08] hover:border-white/20 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-2xl",
                item.colSpan
              )}
            >
              {/* Meta Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#dfcba9]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#71717a] tracking-wider block">
                      {isAr ? item.categoryAr : item.categoryEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight whitespace-nowrap">
                      {isAr ? item.nameAr : item.nameEn}
                    </h3>
                  </div>
                </div>

                <p dir="auto" className="text-sm text-zinc-300 leading-[1.8] mb-6 font-normal line-clamp-3">
                  {isAr ? item.descriptionAr : item.descriptionEn}
                </p>

                {/* Clean Muted Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[#a1a1aa] bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dedicated Preview Window */}
              <Link
                href={item.id === "ai-bots" ? `/${locale}/projects/sakani-bot` : `/${locale}/projects/${item.id}`}
                className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.08] bg-black mt-2 group-hover:border-white/20 transition-colors duration-300 block cursor-pointer"
              >
                <Image
                  src={item.imageSrc}
                  alt={isAr ? item.nameAr : item.nameEn}
                  fill
                  unoptimized={item.imageSrc.endsWith('.svg')}
                  className="object-cover object-top filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
