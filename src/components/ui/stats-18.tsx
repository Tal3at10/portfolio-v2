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
    <section className="relative w-full bg-[#09090b] px-4 sm:px-8 lg:px-12 py-14 sm:py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#dfcba9]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-14 text-center">
            {title && (
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2.5">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#dfcba9]/35 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle hover highlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(223, 203, 169, 0.08), transparent)",
                }}
              />

              <div>
                {/* Large high-impact metric number */}
                <div
                  dir="auto"
                  className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-[#dfcba9] mb-2.5 font-sans leading-none"
                >
                  {stat.value}
                </div>

                {/* Metric Label — bold, readable */}
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug tracking-tight">
                  {stat.label}
                </h3>
              </div>

              {stat.description && (
                <p className="text-xs text-zinc-400 leading-relaxed mt-4 pt-3 border-t border-white/[0.06]">
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

