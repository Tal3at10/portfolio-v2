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
    { id: 0, icon: <IconHome size={20} />, labelAr: "الرئيسية", labelEn: "Home", targetId: "hero" },
    { id: 1, icon: <IconCpu size={20} />, labelAr: "دراسات الحالة", labelEn: "Case Studies", targetId: "case-studies" },
    { id: 2, icon: <IconLayersIntersect size={20} />, labelAr: "كتالوج المنظومات", labelEn: "Systems", targetId: "systems" },
    { id: 3, icon: <IconSparkles size={20} />, labelAr: "منهجية العمل", labelEn: "Methodology", targetId: "methodology" },
    { id: 4, icon: <IconSend size={20} />, labelAr: "تواصل وحجز", labelEn: "Contact", targetId: "contact" },
    { id: 5, icon: <IconWorld size={20} />, labelAr: "English / عربي", labelEn: "عربي / EN", isLocaleSwitch: true },
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
    <div className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="relative flex items-center justify-center gap-1 sm:gap-2 bg-[#0a0a0d]/85 backdrop-blur-2xl rounded-full px-3 sm:px-5 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/[0.1] overflow-hidden">
        
        {/* Active Indicator Glow */}
        <motion.div
          layoutId="active-indicator"
          className="absolute w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl -z-10"
          animate={{
            left: `calc(${active * (100 / items.length)}% + ${100 / items.length / 2}%)`,
            translateX: "-50%",
          }}
          transition={{ type: "spring", stiffness: 450, damping: 28 }}
        />

        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <motion.div key={item.id} className="relative flex flex-col items-center group">
              {/* Button */}
              <motion.button
                onClick={() => handleClick(item, index)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: isActive ? 1.1 : 1 }}
                className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-colors relative z-10 ${
                  isActive
                    ? "text-white bg-white/[0.12] shadow-inner"
                    : "text-[#a1a1aa] hover:text-white hover:bg-white/[0.04]"
                }`}
                aria-label={isAr ? item.labelAr : item.labelEn}
              >
                {item.icon}
              </motion.button>

              {/* Tooltip (Bottom on desktop, Top on mobile) */}
              <span className="absolute bottom-full md:bottom-auto md:top-full mb-3 md:mb-0 md:mt-3 px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#141419] text-[#f4f4f5] border border-white/[0.1] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {isAr ? item.labelAr : item.labelEn}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LumaBar;
