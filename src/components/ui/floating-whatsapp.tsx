"use client";

import React, { useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [isHovered, setIsHovered] = useState(false);

  const message = isAr
    ? siteConfig.whatsappMessages.consultationAr
    : siteConfig.whatsappMessages.consultationEn;

  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label={isAr ? "زر تواصل واتساب" : "WhatsApp Contact"}
      className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:bottom-8 end-4 sm:end-6 md:end-8 z-40 select-none"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isAr ? "تواصل مباشرة عبر واتساب" : "Chat on WhatsApp"}
        className="group relative flex items-center gap-2.5 p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-[#dfcba9] via-[#d4be95] to-[#c2a675] text-[#09090b] shadow-[0_8px_30px_rgba(223,203,169,0.35)] hover:shadow-[0_12px_40px_rgba(223,203,169,0.6)] border border-[#f5e8d0]/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfcba9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
      >
        {/* Pulsing subtle ambient gold aura */}
        <span
          className="absolute inset-0 rounded-full bg-[#dfcba9] animate-ping opacity-25 pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <IconBrandWhatsapp
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#09090b] shrink-0 transition-transform duration-300 group-hover:rotate-6"
          strokeWidth={2.2}
        />

        {/* Desktop Expandable Tooltip / Label */}
        <span
          className={`hidden md:inline-block overflow-hidden whitespace-nowrap text-xs font-bold tracking-tight text-[#09090b] transition-all duration-300 ease-out ${
            isHovered ? "max-w-[140px] opacity-100 pe-1" : "max-w-0 opacity-0"
          }`}
        >
          {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        </span>

        {/* Live Status indicator dot */}
        <span
          className="absolute -top-1 -end-1 flex size-3"
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-emerald-500 border-2 border-[#09090b]" />
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
