"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  IconMaximize,
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconExternalLink,
  IconLayersSubtract,
  IconSparkles,
} from "@tabler/icons-react";

export interface ShowcaseItem {
  nameAr: string;
  nameEn: string;
  categoryAr?: string;
  categoryEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  techBadge?: string;
  image: string;
  liveUrl?: string;
}

interface InteractiveScreenshotShowcaseProps {
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  isAr?: boolean;
  items: ShowcaseItem[];
}

export function InteractiveScreenshotShowcase({
  titleAr = "معرض المنظومات والشاشات الحية",
  titleEn = "Production Interfaces & Subsystems",
  subtitleAr = "استعراض تفصيلي للوحات العمليات، بوابات الموظفين، والتطبيقات الميدانية بدقة كاملة",
  subtitleEn = "Detailed visual inspection of operational dashboards, client portals, and mobile apps",
  isAr = true,
  items,
}: InteractiveScreenshotShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = [
    { id: "all", label: isAr ? "كافة الشاشات" : "All Interfaces" },
    ...Array.from(
      new Set(
        items
          .map((item) => (isAr ? item.categoryAr : item.categoryEn))
          .filter(Boolean) as string[]
      )
    ).map((cat) => ({ id: cat, label: cat })),
  ];

  // Filter items
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) =>
          isAr
            ? item.categoryAr === selectedCategory
            : item.categoryEn === selectedCategory
        );

  // Body Scroll Lock for Lightbox
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#000000] border-t border-white/[0.08]">
      {/* Ambient background studio lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#dfcba9]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-4 shadow-[0_0_20px_rgba(223,203,169,0.06)]">
            <IconSparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
            <span className="text-xs font-mono font-bold text-[#dfcba9] uppercase tracking-widest">
              {isAr ? "المعاينة الحية والأنظمة الفرعية" : "Live Subsystems & Interfaces"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
            {isAr
              ? "واجهات حقيقية من بيئة الإنتاج"
              : "Production Interfaces & Modules"}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {isAr
              ? "استعراض معماري شامل لكافة الشاشات، لوحات التحكم، والمحركات التقنية للأنظمة الفرعية."
              : "Comprehensive architectural walkthrough of live dashboards, portals, and background engines."}
          </p>
        </div>

        {/* Categories Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl sm:rounded-2xl bg-zinc-950 border border-white/10 self-start lg:self-auto max-w-full overflow-x-auto no-scrollbar mb-6 sm:mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.image}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden hover:border-[#dfcba9]/40 transition-all duration-300 shadow-2xl"
            >
              {/* macOS-style Browser Frame Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f14] border-b border-white/[0.08]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="ms-2 text-[11px] font-mono text-zinc-400 truncate hidden sm:inline-block max-w-[200px]">
                    {isAr ? item.nameAr : item.nameEn}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.techBadge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 whitespace-nowrap">
                      {item.techBadge}
                    </span>
                  )}
                  <button
                    onClick={() => setActiveLightboxIndex(index)}
                    aria-label="Inspect Fullscreen"
                    className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <IconMaximize className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Image Preview Container (High Definition & Uncompressed) */}
              <div
                onClick={() => setActiveLightboxIndex(index)}
                className="relative aspect-[16/10] w-full bg-[#05070d] cursor-zoom-in overflow-hidden border-b border-white/5"
              >
                <Image
                  src={item.image}
                  alt={isAr ? item.nameAr : item.nameEn}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center gap-2 shadow-2xl">
                    <IconMaximize className="w-4 h-4 text-[#dfcba9]" />
                    {isAr ? "تكبير ومعاينة الدقة الأصلية" : "Inspect Full Resolution"}
                  </span>
                </div>
              </div>

              {/* Caption Bar Underneath (Clean spacing & no clipping on mobile) */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-[#090b10]">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#dfcba9] transition-colors leading-snug">
                      {isAr ? item.nameAr : item.nameEn}
                    </h3>
                    {(item.categoryAr || item.categoryEn) && (
                      <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#dfcba9]/10 text-[#dfcba9] border border-[#dfcba9]/20 self-start sm:self-auto whitespace-nowrap">
                        {isAr ? item.categoryAr : item.categoryEn}
                      </span>
                    )}
                  </div>
                  <p
                    dir="auto"
                    className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal"
                  >
                    {isAr ? item.descriptionAr : item.descriptionEn}
                  </p>
                </div>

                {item.liveUrl && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#dfcba9] hover:underline"
                    >
                      <span>{isAr ? "معاينة الرابط المباشر" : "Visit Live Platform"}</span>
                      <IconExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6"
          >
            {/* Top Toolbar */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-6 sm:right-6 flex items-center justify-between z-50 px-4 py-2.5 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-white/15 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-xs font-semibold text-white truncate max-w-[200px] sm:max-w-md">
                  {isAr
                    ? filteredItems[activeLightboxIndex].nameAr
                    : filteredItems[activeLightboxIndex].nameEn}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {filteredItems[activeLightboxIndex].liveUrl && (
                  <a
                    href={filteredItems[activeLightboxIndex].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#dfcba9] text-black font-semibold text-xs hover:bg-[#ebd9bd] transition-colors"
                  >
                    <span>{isAr ? "فتح الرابط" : "Open Live"}</span>
                    <IconExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev !== null && prev > 0
                        ? prev - 1
                        : filteredItems.length - 1
                    )
                  }
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-zinc-900/90 hover:bg-white text-white hover:text-black border border-white/15 transition-all z-50 shadow-2xl cursor-pointer"
                  aria-label="Previous image"
                >
                  <IconChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev !== null && prev < filteredItems.length - 1
                        ? prev + 1
                        : 0
                    )
                  }
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-zinc-900/90 hover:bg-white text-white hover:text-black border border-white/15 transition-all z-50 shadow-2xl cursor-pointer"
                  aria-label="Next image"
                >
                  <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Fullscreen Image Presentation (Uncompressed & High Resolution) */}
            <div className="relative w-full max-w-6xl max-h-[60vh] sm:max-h-[75vh] h-[55vh] sm:h-[75vh] flex items-center justify-center my-auto">
              <Image
                src={filteredItems[activeLightboxIndex].image}
                alt={
                  isAr
                    ? filteredItems[activeLightboxIndex].nameAr
                    : filteredItems[activeLightboxIndex].nameEn
                }
                fill
                unoptimized={true}
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-zinc-900/95 border border-white/15 backdrop-blur-md text-center max-w-2xl w-[92%] sm:w-auto shadow-2xl">
              <p
                dir="auto"
                className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal"
              >
                {isAr
                  ? filteredItems[activeLightboxIndex].descriptionAr
                  : filteredItems[activeLightboxIndex].descriptionEn}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
