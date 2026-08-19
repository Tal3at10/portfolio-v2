"use client";

import React from "react";
import { motion } from "framer-motion";

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface Stats18Props {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
}

const defaultStats: StatItem[] = [
  {
    value: "1,200+",
    label: "حجز شهري مؤكد",
    description: "معالجة آلية متزامنة بدون تدخل يدوي.",
  },
  {
    value: "< 10s",
    label: "زمن إصدار الفاوتشر",
    description: "بدلاً من 45 دقيقة بالأنظمة اليدوية القديمة.",
  },
  {
    value: "4k+",
    label: "محادثة مفهرسة",
    description: "تم تحليلها لتدريب محرك الذكاء الاصطناعي.",
  },
  {
    value: "99.4%",
    label: "ثبات واستقرار",
    description: "جاهزية كاملة في مواسم الذروة السياحية.",
  },
];

export function Stats18({ stats = defaultStats, title, subtitle }: Stats18Props) {
  return (
    <section className="relative w-full bg-[#000000] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <span
                  dir="ltr"
                  className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white block mb-2 font-mono whitespace-nowrap"
                >
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-zinc-200 block mb-1">
                  {stat.label}
                </span>
              </div>
              {stat.description && (
                <p className="text-xs text-zinc-400 leading-relaxed mt-2 border-t border-white/5 pt-2">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats18;
