"use client";

import React, { useState } from "react";
import { 
  IconArrowUpRight, 
  IconCalendarEvent, 
  IconBrandWhatsapp, 
  IconMail, 
  IconPhone, 
  IconBrandLinkedin, 
  IconBrandGithub,
  IconArrowUp
} from "@tabler/icons-react";
import { useLocale } from "next-intl";

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const locale = useLocale();
  const isAr = locale === "ar";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(true);

    setTimeout(() => {
      setShowSuccess(true);
    }, 450);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/201108745372", "_blank");
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/mahmoud-talaat-dev/30min", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" role="contentinfo" className="relative z-20 bg-[#09090b] text-white min-h-[85vh] flex flex-col justify-between pt-16 sm:pt-28 pb-12 px-4 sm:px-6 border-t border-white/[0.08]">
      
      {/* Main Interactive Center Area */}
      <div className="relative flex flex-col items-center justify-center flex-1 max-w-4xl mx-auto w-full my-auto min-h-[380px] sm:min-h-[420px]">
        
        {/* REVEALED ACTIONS AFTER CLICK */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Heading */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {isAr ? "تواصل مباشر لبدء العمل" : "Let's talk"}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mt-2 sm:mt-3 font-normal leading-relaxed">
              {isAr
                ? "إن كان لديك مشروع يتطلب معمارية متينة أو فكرة تحتاج تنفيذاً احترافياً، اختر الطريقة المناسبة لبدء الحوار."
                : "Choose your preferred channel to discuss your system architecture, requirements, or schedule a direct consultation."}
            </p>
          </div>

          {/* Action Buttons: WhatsApp & Calendly */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center mt-2">
            
            {/* 1. Direct WhatsApp Chat Button */}
            <button
              onClick={handleWhatsApp}
              className="group relative flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#dfcba9] hover:bg-[#ebd9bd] text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(223,203,169,0.25)] cursor-pointer w-full sm:w-auto justify-center"
            >
              <IconBrandWhatsapp className="w-5 h-5 text-black" />
              <span>{isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</span>
              <IconArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* 2. Calendly 30-Min Strategy Call Button */}
            <button
              onClick={handleBookCall}
              className="group relative flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 bg-zinc-950 hover:bg-white text-white hover:text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer w-full sm:w-auto justify-center"
            >
              <IconCalendarEvent className="w-5 h-5" />
              <span>{isAr ? "احجز استشارة (30 دقيقة)" : "Book Strategy Call"}</span>
              <IconArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Subtle Info Badge */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-zinc-500 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfcba9] animate-pulse shrink-0" />
            <span>
              {isAr
                ? "استجابة سريعة عبر واتساب • اتفاقية سرية تامة (NDA)"
                : "Fast response via WhatsApp • NDA Protected"}
            </span>
          </div>
        </div>

        {/* INITIAL STATE BEFORE CLICK */}
        
        {/* Availability Pill (Gold & Muted Neutral) */}
        <div
          className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-mono transition-all duration-500 mb-8"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfcba9] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#dfcba9]" />
          </span>
          <span className="tracking-widest uppercase text-[11px] font-medium text-zinc-300">
            {isAr ? "متاح لبناء المنظومات والمشاريع الكبرى" : "Available for enterprise projects"}
          </span>
        </div>

        {/* Big Interactive "Let's work together" Text */}
        <button
          type="button"
          className="group relative cursor-pointer select-none bg-transparent border-0 p-0 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
            touchAction: "manipulation",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-extralight tracking-tight text-white sm:text-7xl md:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  {isAr ? "لنبدأ العمل" : "Let's work"}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-zinc-300 font-normal">
                    {isAr ? "معاً" : "together"}
                  </span>
                </span>
              </span>
            </h2>

            {/* Circular Trigger Arrow Button */}
            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "white" : isHovered ? "white" : "rgba(255,255,255,0.2)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "rgba(255,255,255,0.15)" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.15)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <IconArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "#000000" : "#ffffff",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          {/* Decorative Horizontal Lines */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 sm:-left-20 pointer-events-none">
            <div
              className="h-px w-10 sm:w-16 bg-white/20 transition-all duration-500"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.4,
              }}
            />
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 sm:-right-20 pointer-events-none">
            <div
              className="h-px w-10 sm:w-16 bg-white/20 transition-all duration-500"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.4,
              }}
            />
          </div>
        </button>

        {/* Bottom Subtext Before Click */}
        <div
          className="mt-10 flex flex-col items-center gap-2 text-center transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
            {isAr
              ? "هل لديك فكرة مشروع أو ترغب في استشارة هندسية؟ اضغط بالأعلى لبدء المحادثة."
              : "Have a project in mind? Click above to start a conversation or schedule a consultation."}
          </p>
          <a 
            href="mailto:tamsystems.agency@gmail.com"
            className="text-xs font-mono text-[#dfcba9] hover:underline"
          >
            tamsystems.agency@gmail.com
          </a>
        </div>

      </div>

      {/* DOCK OF SOCIAL CHANNELS & MINIMAL FOOTER */}
      <div className="w-full max-w-5xl mx-auto pt-16 flex flex-col items-center gap-8">
        
        {/* Interactive Social Media Dock */}
        <nav aria-label="Social links" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 p-2 rounded-2xl sm:rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md shadow-2xl max-w-full">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/201108745372"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#dfcba9] text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconBrandWhatsapp className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mahmoud-talaat-9a2487295/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#dfcba9] text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconBrandLinkedin className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Tal3at10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-white text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconBrandGithub className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:tamsystems.agency@gmail.com"
            aria-label="Email"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#dfcba9] text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconMail className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Email
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+201108745372"
            aria-label="Phone"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#dfcba9] text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconPhone className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              +20 110 874 5372
            </span>
          </a>

          {/* Calendly */}
          <a
            href="https://calendly.com/mahmoud-talaat-dev/30min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calendly"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#dfcba9] text-zinc-400 hover:text-black border border-white/5 transition-all duration-300 hover:scale-115"
          >
            <IconCalendarEvent className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {isAr ? "حجز استشارة" : "Schedule Meeting"}
            </span>
          </a>

        </nav>

        {/* Minimal Copyright and Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 border-t border-white/10 pt-6">
          <p>
            {isAr
              ? `© ${new Date().getFullYear()} تَـمّ | TAM Systems. هندسة وتطوير المنظومات المؤسسية.`
              : `© ${new Date().getFullYear()} TAM Systems | تَـمّ. Enterprise Software & Cloud Engineering.`}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {isAr ? "العودة للأعلى" : "Back to Top"} <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}
