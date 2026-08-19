"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconTrendingUp } from "@tabler/icons-react";

export interface ProjectMetricItem {
  value: string;
  labelAr?: string;
  labelEn?: string;
  descriptionAr: string;
  descriptionEn: string;
  linkTextAr?: string;
  linkTextEn?: string;
  linkHref?: string;
}

interface ProjectMetricsProps {
  metrics: ProjectMetricItem[];
  isAr?: boolean;
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
}

const defaultProjectMetrics: ProjectMetricItem[] = [
  {
    value: "4,000+",
    labelAr: "محادثة تم تحليلها",
    labelEn: "Analyzed Conversations",
    descriptionAr: "معالجة فورية للمحادثات واكتشاف فرص البيع الضائعة تلقائياً.",
    descriptionEn: "Real-time chat processing with automated drop-off detection.",
  },
  {
    value: "60%",
    labelAr: "تقليل زمن الحجز",
    labelEn: "Booking Latency Reduction",
    descriptionAr: "تسريع إصدار عروض الأسعار والفاوتشرات من 45 دقيقة لأقل من دقيقتين.",
    descriptionEn: "Accelerated quote generation from 45 min to under 2 min.",
  },
  {
    value: "99.9%",
    labelAr: "جاهزية واستقرار النظام",
    labelEn: "System Uptime",
    descriptionAr: "معمارية موزعة مع Failover آلي لمحركات الذكاء الاصطناعي و GDS APIs.",
    descriptionEn: "High-availability architecture with automated multi-LLM failover.",
  },
  {
    value: "300%",
    labelAr: "زيادة حجم المعاملات",
    labelEn: "Transaction Scalability",
    descriptionAr: "قدرة المنظومة على استيعاب مواسم الذروة بدون أي بطء أو توقف.",
    descriptionEn: "Engineered to effortlessly absorb peak-season travel surges.",
  },
];

function MetricCard({
  metric,
  delay = 0,
  isAr = true,
}: {
  metric: ProjectMetricItem;
  delay?: number;
  isAr?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative flex flex-col items-start p-6 sm:p-8 rounded-2xl bg-[#09090d] border border-white/[0.08] hover:border-[#dfcba9]/40 transition-all duration-300 group shadow-xl"
    >
      {/* Top Label */}
      {(metric.labelAr || metric.labelEn) && (
        <span className="text-xs font-mono uppercase tracking-wider text-[#dfcba9] mb-3 block">
          {isAr ? metric.labelAr : metric.labelEn}
        </span>
      )}

      {/* Primary Metric Number */}
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-[#dfcba9] transition-colors duration-300">
        {metric.value}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
        {isAr ? metric.descriptionAr : metric.descriptionEn}
      </p>

      {/* Optional Link */}
      {(metric.linkTextAr || metric.linkTextEn) && (
        <a
          href={metric.linkHref || "#"}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[#dfcba9] underline underline-offset-4 hover:text-white transition-colors"
        >
          {isAr ? metric.linkTextAr : metric.linkTextEn}
        </a>
      )}
    </motion.div>
  );
}

export function ProjectMetrics({
  metrics = defaultProjectMetrics,
  isAr = true,
  titleAr = "الأثر التشغيلي ومقاييس الأداء",
  titleEn = "Measurable Impact & Architecture Metrics",
  subtitleAr = "أرقام واقعية ونتائج قياسية حققتها المنظومة بعد الإطلاق والتشغيل الفعلي.",
  subtitleEn = "Quantifiable business ROI and performance benchmarks achieved in production.",
}: ProjectMetricsProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#000000] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Subtle Warm Gold Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(223, 203, 169, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IconTrendingUp className="w-4 h-4 text-[#dfcba9]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#dfcba9]">
              {isAr ? "مؤشرات النجاح" : "System Benchmarks"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isAr ? titleAr : titleEn}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {isAr ? subtitleAr : subtitleEn}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              delay={index * 0.08}
              isAr={isAr}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectMetrics;
