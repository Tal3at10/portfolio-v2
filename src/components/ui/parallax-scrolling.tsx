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

        {/* 1. Clean Minimal Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-5 shadow-[0_0_20px_rgba(223,203,169,0.12)]">
          <IconSparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
          <span className="text-xs font-mono font-bold text-[#dfcba9] tracking-wider">
            TAM SYSTEMS | تَـمّ
          </span>
        </div>

        {/* 2. Proportionate Studio Headline */}
        <h1
          dir={isAr ? "rtl" : "ltr"}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
        >
          {isAr ? "تَـمّ للأنظمة البرمجية" : "TAM Systems"}
        </h1>

        {/* 3. TAM Slogan */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-base sm:text-lg md:text-xl font-light italic text-[#dfcba9] mb-5 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          {isAr
            ? "أنظمة تُنجز.. ورؤى تكتمل."
            : "Systems Delivered. Vision Realized."}
        </p>

        {/* 4. High-Contrast Subtitle */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="max-w-xl sm:max-w-2xl mb-6 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/[0.06] shadow-xl"
        >
          <p className="text-xs sm:text-sm md:text-[14px] text-zinc-100 font-medium leading-relaxed">
            {isAr ? (
              <>
                <span className="text-[#dfcba9] font-semibold">حلول سحابية ومؤسسية:</span> تقنية حكومية · محركات حجز وسياحة OTA · سجلات طبية إلكترونية · ذكاء اصطناعي
                <br />
                <span className="text-zinc-300 text-[11px] sm:text-xs">منظومات برمجية متكاملة ومُشغّلة الآن في السعودية والخليج وأوروبا الشمالية.</span>
              </>
            ) : (
              <>
                <span className="text-[#dfcba9] font-semibold">Enterprise & Cloud Systems:</span> GovTech · Travel OTA Engines · Clinical EMR · AI Automation
                <br />
                <span className="text-zinc-300 text-[11px] sm:text-xs">Production-grade systems live across Saudi Arabia, the Gulf, and Northern Europe.</span>
              </>
            )}
          </p>
        </div>

        {/* 5. Clean Structured Stats Bar */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.08] mb-8 shadow-lg"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.labelEn}>
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-[#dfcba9] font-black text-sm sm:text-base">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.6} />
                </span>
                <span className="text-zinc-200 font-medium text-[11px] sm:text-xs whitespace-nowrap">
                  {isAr ? stat.labelAr : stat.labelEn}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span className="text-zinc-500 text-xs select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 6. Balanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary */}
          <ShimmerButton
            onClick={scrollToCaseStudies}
            className="w-48 sm:w-52 h-11 shadow-[0_0_24px_rgba(223,203,169,0.25)] text-[13px] font-semibold cursor-pointer px-0 shrink-0"
          >
            <span className="flex items-center justify-center gap-1.5 text-white">
              <span>{isAr ? "استكشف المنظومات" : "Explore Systems"}</span>
              <IconArrowDown className="size-3.5 animate-bounce" />
            </span>
          </ShimmerButton>

          {/* Secondary — Architecture Consultation CTA */}
          <button
            onClick={scrollToContact}
            className="w-48 sm:w-52 h-11 shrink-0 flex items-center justify-center gap-2 text-[12px] font-semibold rounded-full border border-[#dfcba9]/40 bg-white/[0.06] hover:bg-white/[0.12] hover:border-[#dfcba9]/80 text-zinc-100 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg"
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
