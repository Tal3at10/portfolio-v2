"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconHome,
  IconLayersIntersect,
  IconCpu,
  IconSparkles,
  IconSend,
  IconWorld,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

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
    { id: 2, icon: <IconLayersIntersect size={19} strokeWidth={1.8} />, labelAr: "كتالوج المنظومات", labelEn: "Systems", targetId: "systems" },
    { id: 3, icon: <IconSparkles size={19} strokeWidth={1.8} />, labelAr: "منهجية العمل", labelEn: "Methodology", targetId: "methodology" },
    { id: 4, icon: <IconSend size={19} strokeWidth={1.8} />, labelAr: "تواصل وحجز", labelEn: "Contact", targetId: "contact" },
    { id: 5, icon: <IconWorld size={19} strokeWidth={1.8} />, labelAr: "English", labelEn: "عربي", isLocaleSwitch: true },
  ];

  const handleClick = (item: NavItem, index: number) => {
    if (item.isLocaleSwitch) {
      const nextLocale = locale === "ar" ? "en" : "ar";
      const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`;
      router.push(newPath);
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
    <header className="fixed bottom-5 md:bottom-auto md:top-3.5 left-1/2 -translate-x-1/2 z-50 select-none">
      <nav 
        aria-label="Main Navigation" 
        className="relative flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 bg-[#0a0a0d]/70 backdrop-blur-2xl rounded-full px-4 sm:px-5 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.45)] border border-white/[0.16]"
      >
        {/* TAM Systems Brand Mark */}
        <span className="hidden md:flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#dfcba9] tracking-widest uppercase pr-2 border-r border-white/10 mr-1">
          {isAr ? "تَـمّ" : "TAM"}
        </span>
        {items.map((item, index) => {
          const isActive = index === active;
          const label = isAr ? item.labelAr : item.labelEn;
          return (
            <motion.div key={item.id} className="relative flex flex-col items-center group">
              <motion.button
                onClick={() => handleClick(item, index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-200 relative z-10 ${
                  isActive
                    ? "text-white bg-white/[0.18] border border-white/[0.3] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.08]"
                }`}
                aria-label={label}
              >
                {item.icon}
              </motion.button>

              {/* Instant High-Contrast Tooltip */}
              <span className="absolute bottom-full md:bottom-auto md:top-full mb-2 md:mb-0 md:mt-2.5 px-2.5 py-1 text-[10px] font-mono font-medium tracking-tight rounded-lg bg-[#141419]/95 text-white border border-white/[0.15] shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none whitespace-nowrap z-50">
                {label}
              </span>
            </motion.div>
          );
        })}
      </nav>
    </header>
  );
};

export default LumaBar;
