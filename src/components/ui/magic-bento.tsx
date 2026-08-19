"use client";

import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconArrowLeft,
  IconCpu,
  IconBrain,
  IconFileCertificate,
  IconBrandWhatsapp,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import { SystemArchitectureFlow } from "@/components/ui/system-architecture-beam";
import Image from "next/image";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  isAr?: boolean;
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  isAr = true,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-zinc-950/80 border border-white/10 [box-shadow:0_-20px_80px_-20px_#ffffff0d_inset] transition-all duration-300 hover:border-white/20",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
      {background}
    </div>

    <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black via-black/80 to-transparent">
      <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:-translate-y-2">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-2">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
        <h3 className="text-xl font-bold text-white tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-md font-normal">
          {description}
        </p>
      </div>

      {href && cta && (
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white group-hover:text-zinc-200 transition-colors">
          <span>{cta}</span>
          {isAr ? (
            <IconArrowLeft className="w-3.5 h-3.5" />
          ) : (
            <IconArrowRight className="w-3.5 h-3.5" />
          )}
        </div>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-white/[0.02]" />
  </div>
);

export function ProjectBentoFeatures({
  slug,
  isAr = true,
}: {
  slug: string;
  isAr?: boolean;
}) {
  if (slug === "almulhim-travel") {
    return (
      <BentoGrid className="lg:grid-rows-3">
        {/* Card 1: Interactive System Architecture Beam (Spans 2 cols, 2 rows) */}
        <BentoCard
          name={isAr ? "المعمارية المركزية وربط الـ GDS" : "Central Architecture & GDS Flow"}
          description={
            isAr
              ? "ربط لحظي بين .NET 8 Clean Architecture وبوت الواتساب و In-Memory Vector DB ومزودي الطيران والفنادق العالمية."
              : "Real-time orchestration between .NET 8 core, WhatsApp AI, in-memory vector DB, and global GDS providers."
          }
          className="lg:col-span-2 lg:row-span-2"
          Icon={IconCpu}
          background={
            <div className="absolute inset-0 -top-6 scale-95 opacity-70 group-hover:opacity-100 transition-opacity">
              <SystemArchitectureFlow isAr={isAr} />
            </div>
          }
          isAr={isAr}
        />

        {/* Card 2: Vector DB Semantic Search */}
        <BentoCard
          name={isAr ? "البحث الدلالي السريع (Vector DB)" : "In-Memory Vector Search"}
          description={
            isAr
              ? "استرجاع فوري لباقات السفر في أقل من 50ms لمنع هلوسة الذكاء الاصطناعي."
              : "Ultra-fast semantic search for 80+ packages with sub-50ms latency."
          }
          className="lg:col-span-1 lg:row-span-1"
          Icon={IconBrain}
          background={
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
          }
          isAr={isAr}
        />

        {/* Card 3: Voucher Pro PDF Engine */}
        <BentoCard
          name={isAr ? "إصدار الفاوتشر المشفر (QuestPDF)" : "Encrypted Voucher Engine"}
          description={
            isAr
              ? "توليد فواتشر سفر رسمية مع رمز QR مشفر في 10 ثوانٍ لمنع التلاعب وتوفير 70% من وقت الموظفين."
              : "Automated tamper-proof QR travel vouchers generated in 10s via QuestPDF."
          }
          className="lg:col-span-1 lg:row-span-1"
          Icon={IconFileCertificate}
          background={
            <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/projects/almulhim-travel/voucher hero page.png')` }}
            />
          }
          isAr={isAr}
        />

        {/* Card 4: WhatsApp Bot Intelligence */}
        <BentoCard
          name={isAr ? "بوت مبيعات الواتساب والتحليلات" : "AI WhatsApp & Conversation Telemetry"}
          description={
            isAr
              ? "تحليل 4,000+ محادثة واكتشاف نية العميل آلياً مع التبديل بين مزودي الذكاء الاصطناعي (Gemini, Groq, OpenAI)."
              : "Processed 4,000+ chats with automated intent matching and multi-LLM failover."
          }
          className="lg:col-span-2 lg:row-span-1"
          Icon={IconBrandWhatsapp}
          background={
            <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/projects/almulhim-travel/Screenshot 2026-04-23 144938.png')` }}
            />
          }
          isAr={isAr}
        />

        {/* Card 5: Real-Time Admin Telemetry */}
        <BentoCard
          name={isAr ? "لوحة الإدارة والمراقبة الحية" : "Real-time Operations Console"}
          description={
            isAr
              ? "متابعة الحجوزات والمبيعات لحظياً عبر SignalR مع سجل تدقيق أمني (Audit Trail) كامل."
              : "Live sales telemetry via SignalR with comprehensive enterprise audit trails."
          }
          className="lg:col-span-1 lg:row-span-1"
          Icon={IconDeviceAnalytics}
          background={
            <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/projects/almulhim-travel/admin dashboard.png')` }}
            />
          }
          isAr={isAr}
        />
      </BentoGrid>
    );
  }

  // Fallback / Admin.sa Bento
  return (
    <BentoGrid className="lg:grid-rows-2">
      <BentoCard
        name={isAr ? "كشط وفهرسة المناقصات الحكومية" : "GovTech Scraping Pipeline"}
        description={
          isAr
            ? "كشط آلي لآلاف المناقصات اليومية من منصة اعتماد وفهرستها بدقة لحظية."
            : "Automated daily scraping and indexing of thousands of tenders from Etimad."
        }
        className="lg:col-span-2 lg:row-span-1"
        Icon={IconCpu}
        background={
          <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url('/projects/admin.sa/main website hero slide.png')` }}
          />
        }
        isAr={isAr}
      />
      <BentoCard
        name={isAr ? "توليد العروض الفنية (Gemini Batch)" : "AI Proposal Generator"}
        description={
          isAr
            ? "معالجة كراسات الشروط الضخمة في الخلفية وتوليد مستندات Word رسمية مطابقة للمواصفات الحكومية."
            : "Processing 300+ page tender PDFs asynchronously to draft complete Word proposals."
        }
        className="lg:col-span-1 lg:row-span-1"
        Icon={IconBrain}
        background={
          <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url('/projects/admin.sa/admin dashboard (2).png')` }}
          />
        }
        isAr={isAr}
      />
      <BentoCard
        name={isAr ? "نموذج LightGBM للتنبؤ بالفوز" : "ML Bid Win Predictor"}
        description={
          isAr
            ? "تحليل أسعار المنافسين التاريخية للتنبؤ بنسبة الفوز وتقديم تسعير مثالي."
            : "Predictive ML model calculating win probability from historical bidding data."
        }
        className="lg:col-span-1 lg:row-span-1"
        Icon={IconDeviceAnalytics}
        background={
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
        }
        isAr={isAr}
      />
      <BentoCard
        name={isAr ? "إدارة الاشتراكات والفوترة الفورية" : "Subscription & Invoicing"}
        description={
          isAr
            ? "إدارة الاشتراكات المتكررة والربط مع بوابات الدفع (MyFatoorah) وإشعارات الواتساب."
            : "Automated recurring billing, seat management, and real-time WhatsApp alerts."
        }
        className="lg:col-span-2 lg:row-span-1"
        Icon={IconFileCertificate}
        background={
          <div className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url('/projects/admin.sa/admin dashboard.png')` }}
          />
        }
        isAr={isAr}
      />
    </BentoGrid>
  );
}
