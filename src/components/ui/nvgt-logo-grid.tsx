"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ScreenshotCardItem {
  name: string;
  image: string;
  category?: string;
  logoPosition?: "top-left" | "center" | "bottom-left" | "bottom-center";
  logoStyle?: "bold" | "normal" | "uppercase";
}

interface NvgtLogoGridProps {
  title?: string;
  subtitle?: string;
  highlightText?: string;
  logos?: ScreenshotCardItem[];
}

const defaultLogos: ScreenshotCardItem[] = [
  {
    name: "بوابة الحجوزات B2C",
    image: "/projects/almulhim-travel/main website.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "لوحة التحكم الإدارية",
    image: "/projects/almulhim-travel/admin dashboard.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "منظومة الفاوتشر المشفر",
    image: "/projects/almulhim-travel/voucher hero page.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "محرك ربط الفنادق والعمولات",
    image: "/projects/almulhim-travel/voucher dashboard.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "أرشيف الفواتير والتسويات",
    image: "/projects/almulhim-travel/voucher dashboard (6).png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "تحليلات الواتساب الذكية",
    image: "/projects/almulhim-travel/Screenshot 2026-04-23 144938.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "مكتبة المعرفة والـ Vector DB",
    image: "/projects/almulhim-travel/Screenshot 2026-04-23 151407.png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "سجل الأنشطة والأمان",
    image: "/projects/almulhim-travel/voucher dashboard (7).png",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
];

export function NvgtLogoGrid({
  title = "معرض الشاشات والمنظومات الفرعية",
  subtitle = "استعراض شامل للشاشات والأنظمة الداخلية",
  highlightText = "10 أنظمة",
  logos = defaultLogos,
}: NvgtLogoGridProps) {
  const positionClasses = {
    "top-left": "items-start justify-start p-6",
    center: "items-center justify-center p-6",
    "bottom-left": "items-end justify-start p-6",
    "bottom-center": "items-end justify-center p-6",
  };

  const styleClasses = {
    bold: "font-bold",
    normal: "font-normal",
    uppercase: "font-bold uppercase tracking-wide",
  };

  return (
    <section className="relative w-full py-16 px-6 sm:px-8 lg:px-12 bg-[#000000]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed"
            >
              {subtitle}{" "}
              {highlightText && (
                <span className="font-bold text-white">{highlightText}</span>
              )}
            </motion.p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${logo.image}")`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Name Overlay */}
              {logo.name && (
                <div
                  className={`relative flex h-full ${
                    positionClasses[logo.logoPosition || "bottom-left"]
                  }`}
                >
                  <span
                    className={`text-sm sm:text-base text-white drop-shadow-md ${
                      styleClasses[logo.logoStyle || "bold"]
                    }`}
                  >
                    {logo.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NvgtLogoGrid;
