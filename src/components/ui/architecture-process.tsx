"use client";

import React from "react";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import { useLocale } from "next-intl";

export function ArchitectureProcess() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="methodology" className="relative z-20 bg-[#000000] text-white py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Clean Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {isAr ? "المنهجية الهندسية ومراحل البناء" : "Architectural Methodology"}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr
            ? "من تحليل نطاق العمل وتصميم المعمارية النظيفة، حتى إطلاق منظومات سحابية عالية التحمل ومدمجة مع الذكاء الاصطناعي."
            : "From domain decomposition to high-concurrency event-driven backends and autonomous AI orchestration."}
        </p>
      </div>

      <ConnoisseurStackInteractor />
    </section>
  );
}
