"use client";

import React, { useState } from "react";
import {
  IconHome,
  IconLayersIntersect,
  IconCpu,
  IconSparkles,
  IconSend,
  IconWorld,
  IconStar,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

interface NavItem {
  id: number;
  icon: React.ReactNode;
  labelAr: string;
  labelEn: string;
  targetId?: string;
  isLocaleSwitch?: boolean;
}

export const LumaBar = () => {
  const [active, setActive] = useState(0);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isAr = locale === "ar";

  const items: NavItem[] = [
    { id: 0, icon: <IconHome size={19} strokeWidth={1.8} />, labelAr: "الرئيسية", labelEn: "Home", targetId: "hero" },
    { id: 1, icon: <IconCpu size={19} strokeWidth={1.8} />, labelAr: "دراسات الحالة", labelEn: "Case Studies", targetId: "case-studies" },
    { id: 2, icon: <IconLayersIntersect size={19} strokeWidth={1.8} />, labelAr: "المشاريع", labelEn: "Projects", targetId: "systems" },
    { id: 3, icon: <IconSparkles size={19} strokeWidth={1.8} />, labelAr: "منهجية العمل", labelEn: "Methodology", targetId: "methodology" },
    { id: 4, icon: <IconStar size={19} strokeWidth={1.8} />, labelAr: "آراء العملاء", labelEn: "Testimonials", targetId: "testimonials" },
    { id: 5, icon: <IconSend size={19} strokeWidth={1.8} />, labelAr: "تواصل معنا", labelEn: "Contact", targetId: "contact" },
    { id: 6, icon: <IconWorld size={19} strokeWidth={1.8} />, labelAr: "English", labelEn: "عربي", isLocaleSwitch: true },
  ];

  const handleClick = (item: NavItem, index: number) => {
    if (item.isLocaleSwitch) {
      const nextLocale = locale === "ar" ? "en" : "ar";
      router.replace(pathname, { locale: nextLocale });
      return;
    }
    setActive(index);
    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:bottom-auto md:top-3.5 left-1/2 -translate-x-1/2 z-50 select-none max-w-[96vw]">
      <nav
        aria-label="Main Navigation"
        className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-3 bg-[#0a0a0d]/80 backdrop-blur-2xl rounded-full px-2.5 sm:px-4 md:px-5 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.55)] border border-white/[0.16]"
      >
        {/* TAM Systems Brand Mark */}
        <span className="hidden md:flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#dfcba9] tracking-widest uppercase pe-2 border-e border-white/10 me-1">
          {isAr ? "تَـمّ" : "TAM"}
        </span>
        {items.map((item, index) => {
          const isItemActive = index === active;
          const label = isAr ? item.labelAr : item.labelEn;
          return (
            // Plain button — no whileHover/whileTap which capture pointer events on older iOS Chrome
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item, index)}
              aria-label={label}
              style={{ touchAction: "manipulation" }}
              className={`flex items-center justify-center gap-1.5 px-2 sm:px-2.5 md:px-3 h-8 rounded-full transition-all duration-200 relative z-10 active:scale-95 ${
                isItemActive
                  ? "text-white bg-white/[0.18] border border-white/[0.3] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span className="shrink-0 scale-90 sm:scale-100">{item.icon}</span>
              <span className="hidden md:inline font-medium text-[11px] whitespace-nowrap">{label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default LumaBar;
