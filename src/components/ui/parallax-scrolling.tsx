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
  { value: 30, suffix: "+", labelEn: "Projects Delivered", labelAr: "مشروعاً منجزاً" },
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
    <div id="hero" className="relative w-full min-h-[100dvh] h-auto bg-[#09090b] overflow-hidden flex flex-col justify-center">

      {/* ── Layer 1: GLSL Hills WebGL Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GLSLHills width="100%" height="100%" speed={0.38} cameraZ={100} cameraY={5} lookAtY={8} />
      </div>

      {/* ── Layer 2: Subtle Ambient Warm Glow behind name & anchor ── */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[850px] h-[240px] sm:h-[480px] rounded-full z-[1] pointer-events-none blur-[80px] sm:blur-[140px] opacity-35"
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
      <div className="relative z-10 w-full min-h-[100dvh] py-20 sm:py-24 flex flex-col items-center justify-center text-center px-4 sm:px-10 max-w-5xl mx-auto">

        {/* 1. Category Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-4 sm:mb-5 shadow-[0_0_20px_rgba(223,203,169,0.08)]">
          <IconSparkles className="size-3.5 text-[#dfcba9]" />
          <span className="text-[11px] sm:text-xs font-bold text-[#dfcba9] uppercase tracking-wider">
            {isAr ? "حلول برمجية وأنظمة تقنية للمؤسسات" : "Enterprise Software & Systems Engineering"}
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
          className="text-sm sm:text-lg md:text-xl font-light italic text-[#dfcba9] mb-4 sm:mb-5 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] px-2"
        >
          {isAr
            ? "أنظمة تُبنى لتدوم، ورؤية تتحقق بالتنفيذ."
            : "Systems Delivered. Vision Realized."}
        </p>

        {/* 4. Single Unified Description (100% Native, Clean Arabic) */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-xs sm:text-sm md:text-[15px] text-zinc-100 font-medium max-w-lg sm:max-w-xl leading-[1.85] mb-6 sm:mb-8 px-2 drop-shadow-sm"
        >
          {isAr
            ? "نصمم منصات رقمية متكاملة وأنظمة تقنية حكومية، وندمج حلول الذكاء الاصطناعي في أعمال الشركات والمؤسسات بالسعودية والخليج."
            : "Architecting enterprise platforms, GovTech systems, and custom AI ecosystems across Saudi Arabia and the Gulf."}
        </p>

        {/* 5. Minimal Social Proof Strip */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 mb-6 sm:mb-8 text-xs max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.labelEn}>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span dir="ltr" className="text-[#dfcba9] font-black text-sm sm:text-base font-sans">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.6} />
                </span>
                <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">
                  {isAr ? stat.labelAr : stat.labelEn}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span className="text-zinc-600 font-mono text-xs select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 5.5 Client Rating Badge */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8" dir={isAr ? "rtl" : "ltr"}>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-[#dfcba9]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-zinc-200">
            {isAr ? "تقييم 5.0 من عملائنا على خمسات ولينكد إن" : "5.0 Rated by clients on Khamsat & LinkedIn"}
          </span>
        </div>

        {/* 6. High-Contrast Primary vs Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
          {/* Primary Solid Gold Button */}
          <button
            onClick={scrollToCaseStudies}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#dfcba9] hover:bg-white text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(223,203,169,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] cursor-pointer w-full sm:w-auto"
          >
            <span>{isAr ? "شاهد أعمالنا" : "Explore Projects"}</span>
            <IconArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          {/* Secondary Ghost Button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.04] hover:bg-white/[0.09] text-zinc-200 hover:text-white backdrop-blur-md transition-all duration-300 cursor-pointer font-semibold text-xs sm:text-sm w-full sm:w-auto hover:-translate-y-0.5"
          >
            <IconCalendarEvent className="size-4 text-[#dfcba9]" />
            <span>{isAr ? "احجز استشارة تقنية" : "Request Consultation"}</span>
          </button>
        </div>

      </div>

      {/* ── Layer 4: Bottom Fade into page bg ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-36 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #09090b 100%)",
        }}
      />

    </div>
  );
}
