"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocale } from "next-intl";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconArrowDown, IconCalendarEvent } from "@tabler/icons-react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// ─── Social Proof Data ────────────────────────────────────────────────────────
const stats = [
  { value: 12, suffix: "", labelEn: "Systems Built", labelAr: "نظام مؤسسي" },
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

        {/* Eyebrow */}
        <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-5 sm:mb-6 font-medium">
          {isAr ? "مهندس أنظمة مؤسسية" : "Enterprise Systems Engineer"}
        </span>

        {/* ── Name — the anchor ── */}
        <h1
          dir={isAr ? "rtl" : "ltr"}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-none mb-4 sm:mb-5 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          {isAr ? "محمود طلعت" : "Mahmoud Talaat"}
        </h1>

        {/* ── Italic Tagline ── */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-lg sm:text-xl md:text-2xl font-light italic text-[#dfcba9] mb-5 sm:mb-6"
        >
          {isAr
            ? "أنظمة تصمد أمام التحولات."
            : "Systems that outlast trends."}
        </p>

        {/* ── Subtitle ── */}
        <p
          dir={isAr ? "rtl" : "ltr"}
          className="text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal max-w-lg sm:max-w-2xl leading-[1.85] mb-7 sm:mb-8 px-2"
        >
          {isAr ? (
            <>
              تقنية حكومية. سياحة ومحركات OTA. سجلات طبية إلكترونية. ذكاء اصطناعي.
              <br />
              <span className="text-zinc-400">منظومات مؤسسية تعمل الآن في الخليج وأوروبا الشمالية.</span>
            </>
          ) : (
            <>
              GovTech. Travel OTA. Clinical EMR. AI Automation.
              <br />
              <span className="text-zinc-400">Enterprise-grade systems deployed across the Gulf and Northern Europe.</span>
            </>
          )}
        </p>

        {/* ── Social Proof Strip with Counting Numbers ── */}
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

        {/* ── CTA Buttons — unified style ── */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-28 md:gap-44 lg:gap-60">
          {/* Primary */}
          <ShimmerButton
            onClick={scrollToCaseStudies}
            className="w-56 h-11 shadow-[0_0_24px_rgba(223,203,169,0.25)] text-[13px] font-semibold cursor-pointer px-0 shrink-0"
          >
            <span className="flex items-center justify-center gap-1.5 text-white">
              <span>{isAr ? "استكشف المشاريع" : "Explore My Work"}</span>
              <IconArrowDown className="size-3.5 animate-bounce" />
            </span>
          </ShimmerButton>

          {/* Secondary — Architecture Consultation CTA */}
          <button
            onClick={scrollToContact}
            className="w-56 h-11 shrink-0 flex items-center justify-center gap-2 text-[12px] font-semibold rounded-full border border-[#dfcba9]/40 bg-white/[0.06] hover:bg-white/[0.12] hover:border-[#dfcba9]/80 text-zinc-100 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg"
          >
            <IconCalendarEvent className="size-4 text-[#dfcba9]" />
            <span>{isAr ? "احجز استشارة معمارية" : "Request Consultation"}</span>
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
