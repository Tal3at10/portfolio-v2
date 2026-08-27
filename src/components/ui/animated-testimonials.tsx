"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Detect if a string is predominantly RTL (Arabic / Hebrew)
const isRTLText = (text: string) => /[\u0600-\u06FF]/.test(text);

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Robust Auto-play interval
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Swipe left / right threshold
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const current = testimonials[active % testimonials.length] || testimonials[0];
  const isRTL = isRTLText(current.quote);
  const PrevIcon = isRTL ? IconArrowRight : IconArrowLeft;
  const NextIcon = isRTL ? IconArrowLeft : IconArrowRight;

  return (
    <div
      className={cn("max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8 sm:py-16 select-none", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        
        {/* Left: Clean Focused Card Deck */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full flex items-center justify-center">
          
          {/* Subtle Decorative Ghost Backdrop Card */}
          <div className="absolute inset-2 sm:inset-4 rounded-2xl bg-zinc-900/60 border border-white/5 rotate-3 scale-95 pointer-events-none opacity-40" />
          
          {/* Active Card Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0e0e12] border border-white/12 shadow-2xl transition-all duration-500">
            {!current.src.endsWith(".svg") ? (
              <Image
                src={current.src}
                alt={current.name}
                fill
                unoptimized={true}
                className="object-cover object-center"
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1a17] via-[#0c0c0e] to-[#050505] p-6 relative select-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,203,169,0.14)_0%,transparent_70%)] pointer-events-none" />
                
                {/* Monogram Circle Badge */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#dfcba9]/35 bg-black/70 shadow-[0_0_40px_rgba(223,203,169,0.18)] flex items-center justify-center relative z-10">
                  <span className="text-2xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-[#dfcba9]">
                    {(() => {
                      const parts = current.name.trim().split(/\s+/);
                      if (parts.length === 1) return parts[0].slice(0, 2);
                      return `${parts[0][0]}.${parts[parts.length - 1][0]}`;
                    })()}
                  </span>
                </div>

                {/* Verified Client Badge */}
                <div className="mt-5 flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.05] text-xs font-mono text-zinc-300 z-10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>عميل معتمد • Verified Partner</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Testimonial Content & Controls */}
        <div className="flex justify-between flex-col py-2 sm:py-4 min-h-[260px]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                {current.name}
              </h3>
              <span className="text-xs font-mono text-zinc-500 font-medium shrink-0">
                {active + 1} / {testimonials.length}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-mono text-[#dfcba9] mt-1 font-medium">
              {current.designation}
            </p>
            
            {/* Quote — 100% visible, clean typography */}
            <p
              dir={isRTL ? "rtl" : "ltr"}
              className="text-sm sm:text-base md:text-lg text-zinc-200 leading-[1.85] mt-5 sm:mt-6 font-normal"
            >
              {current.quote}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 pt-6 sm:pt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{ touchAction: "manipulation" }}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.05] border border-white/12 hover:border-[#dfcba9]/50 hover:bg-white/[0.1] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
            >
              <PrevIcon className="h-5 w-5 text-[#dfcba9]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{ touchAction: "manipulation" }}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/[0.05] border border-white/12 hover:border-[#dfcba9]/50 hover:bg-white/[0.1] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
            >
              <NextIcon className="h-5 w-5 text-[#dfcba9]" />
            </button>

            <span className="text-xs font-mono text-zinc-500 ms-2">
              (اسحب للتنقل • Swipe to browse)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
