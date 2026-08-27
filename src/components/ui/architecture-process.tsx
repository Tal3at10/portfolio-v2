"use client";

import React from "react";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import { useLocale } from "next-intl";

export function ArchitectureProcess() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="methodology" className="relative z-20 w-full bg-[#09090b] text-white border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto py-16 sm:py-28 px-4 sm:px-12">
      {/* Clean Section Header */}
      <div className="mb-12 text-center">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-3 font-medium">
          {isAr ? "منهجية البناء والتسليم" : "Engineering Delivery Protocol"}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          {isAr ? "المنهجية الهندسية ومراحل البناء" : "Architectural Methodology"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "كيف أبني الأنظمة — من فهم المشكلة إلى إطلاق المنصة."
            : "How I architect solutions — from discovery to launch."}
        </p>
      </div>

      <ConnoisseurStackInteractor />
      </div>
    </section>
  );
}
