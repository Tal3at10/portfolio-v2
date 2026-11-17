"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

export interface ProcessItem {
  num: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  clipId: string;
  image: string;
}

const defaultProcessItems: ProcessItem[] = [
  {
    num: "01",
    titleAr: "تحليل المتطلبات",
    titleEn: "Domain Analysis",
    subtitleAr: "والمعمارية النظيفة",
    subtitleEn: "& Clean CQRS",
    descriptionAr:
      "تحليل معمق وفصل الأوامر عن الاستعلامات لبناء منظومة مرنة.",
    descriptionEn:
      "Deep modeling of business entities, MediatR CQRS command separation, and event-driven architecture designed for high maintainability.",
    clipId: "clip-hexagons",
    image:
      "/images/architecture/domain-clean-architecture.jpg",
  },
  {
    num: "02",
    titleAr: "تزامن عالٍ",
    titleEn: "High-Concurrency",
    subtitleAr: "ومعمارية للتوسع",
    subtitleEn: "Engineered Scale",
    descriptionAr:
      "خوادم بـ .NET 9 لضمان استجابة سريعة وتكامل مع الدفع.",
    descriptionEn:
      "Robust backends in .NET 9 & Django with Redis queues, sub-100ms response targets, and fault-tolerant GDS & payment gateway pipelines.",
    clipId: "clip-original",
    image:
      "/images/architecture/high-concurrency-scale.jpg",
  },
  {
    num: "03",
    titleAr: "الذكاء الاصطناعي",
    titleEn: "Multi-LLM &",
    subtitleAr: "ونظام RAG للبحث الدلالي",
    subtitleEn: "Autonomous RAG",
    descriptionAr:
      "دمج نماذج الذكاء الاصطناعي مع قواعد بيانات شعاعية بدقة عالية.",
    descriptionEn:
      "In-Memory Vector DB retrieval, automated fallback across Gemini, Groq, and Cerebras, and zero-hallucination conversational bots.",
    clipId: "clip-pixels",
    image:
      "/images/architecture/ai-rag-vector-graph.jpg",
  },
];

export const ConnoisseurStackInteractor = ({
  items = defaultProcessItems,
  className,
}: {
  items?: ProcessItem[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const locale = useLocale();
  const isAr = locale === "ar";

  const handleItemSelect = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const currentItem = items[activeIndex] || items[0];

  return (
    <div
      className={cn(
        "flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full py-6 sm:py-12 px-2 sm:px-8 max-w-6xl mx-auto",
        className
      )}
    >
      {/* LEFT SIDE: Architectural Steps */}
      <div className="z-20 w-full lg:w-1/2">
        <nav aria-label={isAr ? "مراحل المنهجية" : "Methodology steps"}>
          <ul className="flex flex-col gap-5 sm:gap-8">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={item.num}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleItemSelect(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleItemSelect(index);
                    }
                  }}
                  onMouseEnter={() => handleItemSelect(index)}
                  style={{ touchAction: "manipulation" }}
                  className={cn(
                    "group cursor-pointer transition-all duration-300 select-none p-4 rounded-2xl border",
                    isActive
                      ? "bg-white/[0.04] border-[#dfcba9]/35 shadow-[0_8px_30px_rgba(223,203,169,0.08)]"
                      : "bg-transparent border-white/[0.05] hover:bg-white/[0.02] hover:border-white/15"
                  )}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number */}
                    <span
                      className={cn(
                        "text-xl sm:text-3xl font-mono font-bold transition-all duration-300 mt-0.5 shrink-0",
                        isActive
                          ? "text-[#dfcba9] scale-110"
                          : "text-zinc-600"
                      )}
                    >
                      {item.num}
                    </span>

                    {/* Main Title & Subtitle */}
                    <div className="flex flex-col">
                      <h3
                        className={cn(
                          `text-base sm:text-2xl font-black leading-[1.2] transition-all duration-300 ${isAr ? "tracking-normal" : "uppercase tracking-tight"}`,
                          isActive
                            ? "text-white opacity-100"
                            : "text-zinc-400 opacity-75 group-hover:opacity-100"
                        )}
                      >
                        {isAr ? item.titleAr : item.titleEn}{" "}
                        <span className="text-[#dfcba9] font-bold">
                          {isAr ? item.subtitleAr : item.subtitleEn}
                        </span>
                      </h3>

                      {/* Description that expands smoothly for active item */}
                      <p
                        dir="auto"
                        className={cn(
                          "text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl transition-all duration-300",
                          isActive
                            ? "opacity-100 max-h-96 mt-2.5 sm:mt-3"
                            : "opacity-0 max-h-0 overflow-hidden mt-0"
                        )}
                      >
                        {isAr ? item.descriptionAr : item.descriptionEn}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE (TOP ON MOBILE): Cross-browser Animated Architectural Visual */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center">
        <div className="absolute w-[95%] h-[95%] bg-[#dfcba9]/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative w-full max-w-[440px] aspect-square min-h-[260px] rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentItem.num}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={currentItem.image}
                alt={isAr ? currentItem.titleAr : currentItem.titleEn}
                fill
                unoptimized={true}
                className="object-cover object-center select-none pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 440px"
                priority
              />

              {/* Subtle Geometric Grid Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(223,203,169,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(223,203,169,0.18) 1px, transparent 1px)",
                  backgroundSize: "33.333% 33.333%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Live Step Indicator on Visual Card */}
          <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-20 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-mono font-bold text-[#dfcba9] shrink-0">
                {currentItem.num}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate">
                {isAr ? currentItem.titleAr : currentItem.titleEn}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {items.map((it, idx) => (
                <button
                  key={it.num}
                  type="button"
                  onClick={() => handleItemSelect(idx)}
                  aria-label={`Step ${it.num}`}
                  style={{ touchAction: "manipulation" }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    activeIndex === idx ? "w-5 bg-[#dfcba9]" : "w-2 bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
