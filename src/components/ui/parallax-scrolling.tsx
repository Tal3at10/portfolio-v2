"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocale } from "next-intl";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconArrowDown, IconCalendarEvent, IconSparkles } from "@tabler/icons-react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// ─── Social Proof Data ────────────────────────────────────────────────────────
const stats = [
  { value: 30, suffix: "+", labelEn: "Systems Built", labelAr: "منظومة مُشغّلة" },
  { value: 6, suffix: "+", labelEn: "Global Markets", labelAr: "أسواق ودول" },
  { value: 5, suffix: "+", labelEn: "Years Exp", labelAr: "سنوات خبرة" },
];

export function ParallaxComponent() {
  const locale = useLocale();
  const isAr = locale === "ar";

  // ── Smooth Scroll (Lenis) ───────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // ── Scroll Helpers ──────────────────────────────────────────────────────
  const scrollToCaseStudies = () => {
    window.scrollTo({ top: window.innerHeight * 0.95, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact") || document.querySelector("footer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#09090b] overflow-hidden">

      {/* ── Layer 1: GLSL Hills WebGL Background ── */}
      <div className="absolute inset-0 z-0">
        <GLSLHills width="100%" height="100%" speed={0.38} cameraZ={100} cameraY={5} lookAtY={8} />
      </div>

      {/* ── Layer 2: Subtle Ambient Warm Glow behind name & anchor ── */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[320px] sm:h-[480px] rounded-full z-[1] pointer-events-none blur-[100px] sm:blur-[140px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(223, 203, 169, 0.15) 0%, rgba(223, 203, 169, 0.03) 45%, rgba(9, 9, 11, 0) 75%)",
        }}
      />

      {/* ── Layer 3: Minimal legibility gradient — center clear, edges soft ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 0%, rgba(9,9,11,0.45) 100%)",
        }}
      />

      {/* ── Layer 4: Hero Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10">

        {/* 1. Category Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-4 sm:mb-5 shadow-[0_0_20px_rgba(223,203,169,0.08)]">
          <IconSparkles className="size-3.5 text-[#dfcba9]" />
          <span className="text-[11px] sm:text-xs font-mono font-medium text-[#dfcba9] uppercase tracking-widest">
            {isAr ? "استوديو هندسة الأنظمة المؤسسية" : "Enterprise Systems Studio"}
          </span>
        </div>

        {/* 2. Main Brand Headline */}
        <h1
          dir={isAr ? "rtl" : "ltr"}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight text-white leading-tight mb-3 sm:mb-4 drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]"
        >
          {isAr ? "تَـمّ للأنظمة" : "TAM Systems"}
        </h1>

        {/* 3. Emotional Slogan Subtitle */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-base sm:text-lg md:text-xl font-light italic text-[#dfcba9] mb-4 sm:mb-5 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          {isAr
            ? "أنظمة تُنجز.. ورؤى تكتمل."
            : "Systems Delivered. Vision Realized."}
        </p>

        {/* 4. Single Unified Description (Crisp, High-Contrast & Clear) */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-xs sm:text-sm md:text-[15px] text-zinc-100 font-medium max-w-lg sm:max-w-xl leading-[1.85] mb-7 sm:mb-8 px-2 drop-shadow-sm"
        >
          {isAr
            ? "نبني المنظومات السحابية المعقدة، منصات التقنية الحكومية، ومحركات الذكاء الاصطناعي للشركات في السعودية وأوروبا الشمالية."
            : "Architecting mission-critical platforms, GovTech SaaS, and custom AI ecosystems across Saudi Arabia and Northern Europe."}
        </p>

        {/* 5. Minimal Social Proof Strip */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="flex items-center justify-center gap-3.5 sm:gap-6 mb-8 sm:mb-10 text-xs font-mono"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.labelEn}>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#dfcba9] font-black text-sm sm:text-base">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.6} />
                </span>
                <span className="text-zinc-200 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                  {isAr ? stat.labelAr : stat.labelEn}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span className="text-zinc-600 font-mono text-xs select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 6. High-Contrast Primary vs Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Solid Gold Button */}
          <button
            onClick={scrollToCaseStudies}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#dfcba9] hover:bg-white text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(223,203,169,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] cursor-pointer w-full sm:w-auto"
          >
            <span>{isAr ? "استكشف المنظومات" : "Explore Systems"}</span>
            <IconArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          {/* Secondary Ghost Button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.04] hover:bg-white/[0.09] text-zinc-200 hover:text-white backdrop-blur-md transition-all duration-300 cursor-pointer font-medium text-xs sm:text-sm w-full sm:w-auto"
          >
            <IconCalendarEvent className="size-4 text-[#dfcba9]" />
            <span>{isAr ? "طلب استشارة منظومة" : "Request Consultation"}</span>
          </button>
        </div>

      </div>

      {/* ── Layer 4: Bottom Fade into page bg ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #09090b 100%)",
        }}
      />

    </div>
  );
}
