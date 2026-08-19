"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconMaximize,
  IconLayersSubtract,
} from "@tabler/icons-react";

export interface GalleryItem {
  id: string | number;
  titleAr: string;
  titleEn: string;
  category: string;
  categoryAr: string;
  categoryEn: string;
  image: string;
  descriptionAr?: string;
  descriptionEn?: string;
}

interface ProjectScreenshotGalleryProps {
  items: GalleryItem[];
  isAr?: boolean;
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
}

export function ProjectScreenshotGallery({
  items,
  isAr = true,
  titleAr = "معرض المنظومات والشاشات التنفيذية",
  titleEn = "Executive Systems & Interface Gallery",
  subtitleAr = "استعراض معماري شامل لكافة الشاشات، لوحات التحكم، والمحركات التقنية للأنظمة الفرعية.",
  subtitleEn = "Comprehensive architectural walkthrough of all interfaces, dashboards, and background engines.",
}: ProjectScreenshotGalleryProps) {
  // Extract unique categories
  const categories = React.useMemo(() => {
    const cats = new Set<string>();
    items.forEach((item) => cats.add(item.category));
    return Array.from(cats);
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Filtered items
  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  // Lightbox navigation helpers
  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") {
        if (isAr) handlePrev();
        else handleNext();
      }
      if (e.key === "ArrowLeft") {
        if (isAr) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, isAr, handleNext, handlePrev]);

  return (
    <section className="relative w-full py-16 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <IconLayersSubtract className="w-4 h-4 text-[#dfcba9]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#dfcba9]">
            {isAr ? "التوثيق البصري" : "Visual Architecture"}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          {isAr ? titleAr : titleEn}
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {isAr ? subtitleAr : subtitleEn}
        </p>

        {/* Category Tabs */}
        {categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#dfcba9] text-black font-bold shadow-[0_0_20px_rgba(223,203,169,0.25)]"
                  : "bg-zinc-950 text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {isAr ? `الكل (${items.length})` : `All (${items.length})`}
            </button>

            {categories.map((cat) => {
              const count = items.filter((i) => i.category === cat).length;
              const sampleItem = items.find((i) => i.category === cat);
              const label = isAr
                ? sampleItem?.categoryAr || cat
                : sampleItem?.categoryEn || cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#dfcba9] text-black font-bold shadow-[0_0_20px_rgba(223,203,169,0.25)]"
                      : "bg-zinc-950 text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#09090d] border border-white/[0.08] hover:border-[#dfcba9]/50 transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                <Image
                  src={item.image}
                  alt={isAr ? item.titleAr : item.titleEn}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3 start-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#dfcba9] border border-white/10">
                    {isAr ? item.categoryAr : item.categoryEn}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <IconMaximize className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 bg-[#09090d]">
                <h4 className="text-base font-bold text-white group-hover:text-[#dfcba9] transition-colors duration-300">
                  {isAr ? item.titleAr : item.titleEn}
                </h4>
                {(item.descriptionAr || item.descriptionEn) && (
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {isAr ? item.descriptionAr : item.descriptionEn}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-6 inset-x-6 sm:inset-x-12 flex items-center justify-between z-50 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#dfcba9] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-sm font-medium text-zinc-300 hidden sm:inline-block">
                  {isAr
                    ? filteredItems[selectedImageIndex].categoryAr
                    : filteredItems[selectedImageIndex].categoryEn}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute start-4 sm:start-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#dfcba9] hover:text-black border border-white/20 flex items-center justify-center text-white transition-all z-50 cursor-pointer shadow-2xl"
              aria-label="Previous"
            >
              <IconChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute end-4 sm:end-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#dfcba9] hover:text-black border border-white/20 flex items-center justify-center text-white transition-all z-50 cursor-pointer shadow-2xl"
              aria-label="Next"
            >
              <IconChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <Image
                  src={filteredItems[selectedImageIndex].image}
                  alt={
                    isAr
                      ? filteredItems[selectedImageIndex].titleAr
                      : filteredItems[selectedImageIndex].titleEn
                  }
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {isAr
                    ? filteredItems[selectedImageIndex].titleAr
                    : filteredItems[selectedImageIndex].titleEn}
                </h3>
                {(filteredItems[selectedImageIndex].descriptionAr ||
                  filteredItems[selectedImageIndex].descriptionEn) && (
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                    {isAr
                      ? filteredItems[selectedImageIndex].descriptionAr
                      : filteredItems[selectedImageIndex].descriptionEn}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
