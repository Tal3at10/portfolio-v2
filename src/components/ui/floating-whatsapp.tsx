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
      className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:bottom-7 end-4 sm:end-6 z-40 select-none"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? "تواصل مباشرة عبر واتساب" : "Chat on WhatsApp"}
        title={isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        style={{ touchAction: "manipulation" }}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#eddcc0] via-[#dfcba9] to-[#bfa16f] hover:from-[#f5e7cf] hover:to-[#d3b684] text-[#09090b] border border-[#fff2d6]/60 shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_18px_rgba(223,203,169,0.28)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.75),0_0_26px_rgba(223,203,169,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      >
        <IconBrandWhatsapp
          className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#09090b] shrink-0 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={2.2}
        />
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
