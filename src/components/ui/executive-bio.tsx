"use client";

import React from "react";
import { useLocale } from "next-intl";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function ExecutiveBio() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const metrics = [
    {
      value: 30,
      suffix: "+",
      labelAr: "منظومة ومشروع مُشغّل",
      labelEn: "Production Systems",
    },
    {
      value: 10,
      suffix: "+",
      labelAr: "أسواق ودول عملنا بها",
      labelEn: "Operational Markets",
    },
    {
      value: 5,
      suffix: "+",
      labelAr: "سنوات خبرة تراكمية",
      labelEn: "Years Experience",
    },
  ];

  return (
    <section className="relative z-20 w-full bg-[#09090b] py-16 sm:py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Lighting Studio Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#dfcba9]/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 justify-between">
          
          {/* 1. 3D Glassmorphic TAM Systems Brand Core Emblem */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            {/* Ambient Golden Aura Glow */}
            <div className="absolute -inset-6 sm:-inset-12 rounded-full bg-gradient-to-br from-[#dfcba9]/25 via-[#c5a028]/15 to-transparent blur-3xl opacity-40 pointer-events-none" />
            
            {/* Concentric Brand Artifact Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-white/[0.06] via-[#121216]/90 to-[#070709] border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden group">
              
              {/* Subtle background circuit pattern / radial grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,203,169,0.12)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Inner Circular Bezel */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#dfcba9]/30 bg-black/60 shadow-[0_0_50px_rgba(223,203,169,0.15)] flex flex-col items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-[#dfcba9]">
                  {isAr ? "تَـمّ" : "TAM"}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#dfcba9]/80 mt-1 font-semibold">
                  SYSTEMS
                </span>
              </div>

              {/* Verified Enterprise Core Badge */}
              <div className="mt-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.04] text-xs font-semibold text-zinc-200 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isAr ? "منظومة هندسية معتمدة • Enterprise Core" : "Enterprise Core • Zero-Downtime"}</span>
              </div>

              {/* Floating Feature Satellites (Desktop) */}
              <div className="hidden sm:flex absolute top-4 right-4 items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-[#dfcba9]/25 text-[11px] font-semibold text-[#dfcba9]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GovTech Ready</span>
              </div>
              <div className="hidden sm:flex absolute bottom-4 left-4 items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/12 text-[11px] font-semibold text-zinc-300">
                <Cpu className="w-3.5 h-3.5 text-[#dfcba9]" />
                <span>High-Load Architecture</span>
              </div>
            </div>
          </div>

          {/* 2. Text & Identity Content */}
          <div className={`flex-1 w-full text-center ${isAr ? "lg:text-right" : "lg:text-left"}`} dir={isAr ? "rtl" : "ltr"}>
            
            {/* Eyebrow Badges */}
            <div className={`flex flex-wrap items-center justify-center ${isAr ? "lg:justify-start" : "lg:justify-start"} gap-2.5 mb-5 sm:mb-6`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 shadow-[0_0_15px_rgba(223,203,169,0.08)]">
                <Sparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
                <span className="text-xs font-bold text-[#dfcba9] tracking-wide">
                  {isAr ? "تَـمّ للأنظمة • TAM Systems" : "TAM Systems • Engineering Standard"}
                </span>
              </div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/12 text-zinc-200">
                <span className="text-xs font-semibold">
                  {isAr ? "معايير الهندسة والتشغيل" : "Architecture & Reliability Standard"}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5">
              {isAr ? (
                <>
                  أنظمة مؤسسية تُبنى <span className="text-[#dfcba9]">لتدوم وتتوسع</span> مع أعمالك
                </>
              ) : (
                <>
                  Enterprise Systems Built for <span className="text-[#dfcba9]">Uncompromising Scale</span>
                </>
              )}
            </h2>

            {/* Narrative Business Value */}
            <p className={`text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed sm:leading-[1.85] max-w-2xl mx-auto ${isAr ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"} mb-6 sm:mb-8 font-normal`}>
              {isAr
                ? "في تَـمّ للأنظمة، ندمج بين الدقة المعمارية المتطورة وسرعة التنفيذ. نبني منصات سحابية عالية التحمل، حلول تقنية حكومية، ومحركات أتمتة ذكية للجهات والشركات الرائدة في السعودية والخليج ومصر — بدون بيروقراطية معقدة، وبتركيز مطلق على استقرار النظام وتحقيق عائد تشغيلي ملموس."
                : "At TAM Systems, we combine high-caliber software architecture with rapid execution. We engineer high-load cloud platforms, GovTech systems, and intelligent automation engines for leading enterprises across Saudi Arabia, the Gulf, and Egypt — with zero corporate bloat and uncompromising operational ROI."}
            </p>

            {/* Live Metrics Row */}
            <div className={`grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-6 my-4 sm:my-6 border-y border-white/[0.08] max-w-xl mx-auto ${isAr ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"}`}>
              {metrics.map((m, idx) => (
                <div key={idx} className={`text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                  <div dir="ltr" className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#dfcba9] font-sans tracking-tight">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-sm text-zinc-300 font-medium mt-1 sm:mt-1.5 leading-tight">
                    {isAr ? m.labelAr : m.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* High-Converting CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center ${isAr ? "lg:justify-start" : "lg:justify-start"} gap-3 sm:gap-4 pt-2`}>
              <Link
                href={`https://wa.me/201108745372?text=${encodeURIComponent(
                  isAr
                    ? "مرحباً، أود حجز استشارة تقنية معمارية لمشروعنا مع فريق تَـمّ للأنظمة."
                    : "Hello, I'd like to schedule an architecture consultation for our system with TAM Systems."
                )}`}
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#dfcba9] hover:bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(223,203,169,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>{isAr ? "احجز استشارة تقنية لمشروعك" : "Schedule System Consultation"}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>

              <Link
                href="https://wa.me/201108745372"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#dfcba9]/40 transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#dfcba9]" />
                <span>{isAr ? "محادثة واتساب مباشرة" : "WhatsApp Direct"}</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

