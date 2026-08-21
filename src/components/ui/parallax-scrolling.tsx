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
  { value: 990, suffix: "+", labelEn: "Schools Accredited", labelAr: "مدرسة معتمدة" },
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-5 shadow-[0_0_20px_rgba(223,203,169,0.12)]">
          <IconSparkles className="size-3.5 text-[#dfcba9]" />
          <span className="text-[11px] sm:text-xs font-mono font-medium text-[#dfcba9] uppercase tracking-widest">
            {isAr ? "استوديو هندسة الأنظمة المؤسسية" : "Enterprise Systems Studio"}
          </span>
        </div>

        {/* 2. Iconic Bilingual Brand Headline */}
        <h1
          dir="ltr"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-4 sm:mb-5 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          <span>TAM SYSTEMS</span>
          <span className="text-[#dfcba9] font-light mx-2.5 sm:mx-4 opacity-80">|</span>
          <span className="font-tajawal font-black">تَـمّ</span>
        </h1>

        {/* 3. Slogan */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-base sm:text-lg md:text-xl font-light italic text-[#dfcba9] mb-5 sm:mb-6"
        >
          {isAr
            ? "أنظمة تُنجز.. ورؤى تكتمل."
            : "Systems Delivered. Vision Realized."}
        </p>

        {/* 4. Pure Clean Subtitle (No background boxes) */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal max-w-lg sm:max-w-2xl leading-[1.85] mb-7 sm:mb-8 px-2"
        >
          {isAr ? (
            <>
              تقنية حكومية. سياحة ومحركات OTA. سجلات طبية إلكترونية. ذكاء اصطناعي.
              <br />
              <span className="text-zinc-400">منظومات مؤسسية مُشغّلة الآن في الخليج وأوروبا الشمالية.</span>
            </>
          ) : (
            <>
              GovTech. Travel OTA. Clinical EMR. AI Automation.
              <br />
              <span className="text-zinc-400">Enterprise-grade systems live across the Gulf and Northern Europe.</span>
            </>
          )}
        </p>

        {/* 5. Minimal Social Proof Strip with Counting Numbers */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="flex items-center gap-3 sm:gap-5 mb-9 sm:mb-10"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.labelEn}>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-widest whitespace-nowrap font-medium flex items-center gap-1">
                <span className="text-white font-bold">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.6} />
                </span>
                <span>{isAr ? stat.labelAr : stat.labelEn}</span>
              </span>
              {i < stats.length - 1 && (
                <span className="text-[#dfcba9]/50 text-xs select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 6. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary */}
          <ShimmerButton
            onClick={scrollToCaseStudies}
            className="w-52 h-11 shadow-[0_0_24px_rgba(223,203,169,0.25)] text-[13px] font-semibold cursor-pointer px-0 shrink-0"
          >
            <span className="flex items-center justify-center gap-1.5 text-white">
              <span>{isAr ? "استكشف المنظومات" : "Explore Systems"}</span>
              <IconArrowDown className="size-3.5 animate-bounce" />
            </span>
          </ShimmerButton>

          {/* Secondary */}
          <button
            onClick={scrollToContact}
            className="w-52 h-11 shrink-0 flex items-center justify-center gap-2 text-[12px] font-semibold rounded-full border border-[#dfcba9]/40 bg-white/[0.06] hover:bg-white/[0.12] hover:border-[#dfcba9]/80 text-zinc-100 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg"
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
