"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import {
  IconCpu,
  IconClockHour4,
  IconWorld,
  IconSchool,
  IconBolt,
  IconShieldCheck,
} from "@tabler/icons-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface MetricItem {
  numValue: number;
  decimals?: number;
  suffix?: string;
  labelAr: string;
  labelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: React.ElementType;
}

const metrics: MetricItem[] = [
  {
    numValue: 30,
    suffix: "+",
    labelAr: "نظام برمجـي متكامل",
    labelEn: "Enterprise Systems Built",
    descriptionAr: "منصات SaaS ومنظومات سحابية وتطبيقات حية في بيئات الإنتاج.",
    descriptionEn: "High-throughput SaaS platforms, cloud engines, and mobile ecosystems.",
    icon: IconCpu,
  },
  {
    numValue: 5,
    suffix: "+",
    labelAr: "سنوات في هندسة النظم والـ AI",
    labelEn: "Years of Systems Engineering",
    descriptionAr: "خبرة متقدمة في الـ Clean Architecture والذكاء الاصطناعي المؤسسي.",
    descriptionEn: "Focused on high-concurrency architecture, .NET, and enterprise AI/RAG.",
    icon: IconClockHour4,
  },
  {
    numValue: 6,
    suffix: "",
    labelAr: "دول تم تنفيذ مشاريع بها",
    labelEn: "Countries with Live Deployments",
    descriptionAr: "السعودية، مصر، قطر، الأردن، السويد، وفلسطين.",
    descriptionEn: "Saudi Arabia, Egypt, Qatar, Jordan, Sweden, and Palestine.",
    icon: IconWorld,
  },
  {
    numValue: 990,
    suffix: "+",
    labelAr: "جهة ومدرسة حكومية",
    labelEn: "Government Entities Served",
    descriptionAr: "تم تدقيق شواهدها وأتمتة تقاريرها دون توقف أو أخطاء حسابية.",
    descriptionEn: "Accredited, audited, and scored with 100% data integrity.",
    icon: IconSchool,
  },
  {
    numValue: 10,
    suffix: "k+",
    labelAr: "عملية مؤتمتة يومياً",
    labelEn: "Daily Automated Transactions",
    descriptionAr: "مناقصات، حجوزات سياحية، واستعلامات لحظية عبر الروبوتات.",
    descriptionEn: "Government tenders, travel GDS bookings, and instant ChatOps.",
    icon: IconBolt,
  },
  {
    numValue: 99.9,
    decimals: 1,
    suffix: "%",
    labelAr: "استقرار وجاهزية الخوادم",
    labelEn: "Production Uptime",
    descriptionAr: "تشغيل آمن ومستمر للأنظمة الحيوية تحت أعلى معدلات الضغط.",
    descriptionEn: "Zero-compromise reliability engineered for mission-critical uptime.",
    icon: IconShieldCheck,
  },
];

export function GlobalArchitectMetrics() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative z-20 w-full bg-[#09090b] text-white border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto py-20 sm:py-28 px-6 sm:px-12">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-3 font-medium">
          {isAr ? "مؤشرات وأرقام الإنجاز" : "Measurable Architecture Metrics"}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          {isAr ? "أثر هندسي ملموس بالأرقام" : "Engineering Impact in Numbers"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "أرقام حقيقية من مشاريع حقيقية."
            : "The numbers behind the work."}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.labelEn + idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              className="group relative rounded-2xl bg-[#121216] border border-white/[0.08] hover:border-[#dfcba9]/40 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl overflow-hidden"
            >
              {/* Top Accent Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#dfcba9]/30 flex items-center justify-center text-[#dfcba9] transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Number Value */}
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#dfcba9] tracking-tight font-mono transition-colors duration-300">
                  <AnimatedCounter
                    value={metric.numValue}
                    decimals={metric.decimals || 0}
                    suffix={metric.suffix || ""}
                    duration={1.8}
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-2 mb-2">
                  {isAr ? metric.labelAr : metric.labelEn}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {isAr ? metric.descriptionAr : metric.descriptionEn}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
