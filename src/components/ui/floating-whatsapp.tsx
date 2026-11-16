"use client";

import React from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const locale = useLocale();
  const isAr = locale === "ar";

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
        aria-label={isAr ? "تواصل مباشرة عبر واتساب" : "Chat on WhatsApp"}
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 h-10 sm:h-11 rounded-full bg-[#0a0a0d]/90 hover:bg-[#141419] backdrop-blur-2xl border border-[#dfcba9]/30 hover:border-[#dfcba9]/80 text-[#dfcba9] shadow-[0_12px_32px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_20px_rgba(223,203,169,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_28px_rgba(223,203,169,0.25)] transition-all duration-300 hover:scale-[1.04] active:scale-95 focus:outline-none"
      >
        {/* Subtle Ambient Glow on Hover */}
        <span
          className="absolute inset-0 rounded-full bg-[#dfcba9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />

        {/* Live Status indicator dot */}
        <span className="relative flex size-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>

        {/* WhatsApp Icon in Signature Champagne Gold */}
        <IconBrandWhatsapp
          className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfcba9] shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          strokeWidth={2}
        />

        {/* Sleek Label */}
        <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
          {isAr ? "محادثة فورية" : "WhatsApp"}
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
