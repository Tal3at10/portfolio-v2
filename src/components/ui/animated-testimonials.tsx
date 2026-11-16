"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  // Touch tracking refs
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  // Robust Auto-play interval (pauses when touching or hovering)
  useEffect(() => {
    if (!autoplay || isPaused || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, isPaused, testimonials.length, handleNext]);

  // Touch Swipe Handlers for Mobile (with slope locking & RTL awareness)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    isHorizontalSwipe.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartPos.current) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartPos.current.x;
    const diffY = touch.clientY - touchStartPos.current.y;

    if (isHorizontalSwipe.current === null) {
      // Determine gesture intent after 8px movement
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (!touchStartPos.current) return;

    if (isHorizontalSwipe.current) {
      const touch = e.changedTouches[0];
      const diffX = touchStartPos.current.x - touch.clientX;

      // Threshold: 35px swipe distance
      if (Math.abs(diffX) > 35) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }

    touchStartPos.current = null;
    isHorizontalSwipe.current = null;
  };

  const handleTouchCancel = () => {
    setIsPaused(false);
    touchStartPos.current = null;
    isHorizontalSwipe.current = null;
  };

  const current = testimonials[active % testimonials.length] || testimonials[0];
  const isRTL = isRTLText(current.quote);
  const PrevIcon = isRTL ? IconArrowRight : IconArrowLeft;
  const NextIcon = isRTL ? IconArrowLeft : IconArrowRight;

  return (
    <div
      className={cn(
        "max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8 sm:py-16 select-none",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ touchAction: "pan-y" }}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        
        {/* Left: Clean Focused Card Deck with Smooth Animated Transition */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full flex items-center justify-center">
          
          {/* Subtle Decorative Ghost Backdrop Card */}
          <div className="absolute inset-2 sm:inset-4 rounded-2xl bg-zinc-900/60 border border-white/5 rotate-3 scale-95 pointer-events-none opacity-40" />
          
          {/* Active Card Container with Framer Motion slide */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0e0e12] border border-white/12 shadow-2xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96, x: direction * 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -direction * 20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                {!current.src.endsWith(".svg") ? (
                  <Image
                    src={current.src}
                    alt={current.name}
                    fill
                    unoptimized={true}
                    className="object-cover object-center select-none pointer-events-none"
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Testimonial Content & Controls */}
        <div className="flex justify-between flex-col py-2 sm:py-4 min-h-[260px]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={current.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl sm:text-3xl font-bold text-white tracking-tight"
                >
                  {current.name}
                </motion.h3>
              </AnimatePresence>

              <span className="text-xs font-mono text-[#dfcba9]/70 font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 shrink-0">
                {active + 1} / {testimonials.length}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-mono text-[#dfcba9] mt-1.5 font-medium">
              {current.designation}
            </p>
            
            {/* Quote with smooth crossfade */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={current.quote}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                dir={isRTL ? "rtl" : "ltr"}
                className="text-sm sm:text-base md:text-lg text-zinc-200 leading-[1.85] mt-5 sm:mt-6 font-normal"
              >
                {current.quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Interactive Navigation Controls + Mobile Dots */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/[0.06] mt-4">
            {/* Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                style={{ touchAction: "manipulation" }}
                className="h-11 w-11 rounded-full bg-white/[0.05] border border-white/15 hover:border-[#dfcba9]/60 hover:bg-white/[0.1] active:bg-[#dfcba9] active:text-black flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
              >
                <PrevIcon className="h-5 w-5 text-[#dfcba9]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                style={{ touchAction: "manipulation" }}
                className="h-11 w-11 rounded-full bg-white/[0.05] border border-white/15 hover:border-[#dfcba9]/60 hover:bg-white/[0.1] active:bg-[#dfcba9] active:text-black flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
              >
                <NextIcon className="h-5 w-5 text-[#dfcba9]" />
              </button>

              <span className="text-xs font-mono text-zinc-400 ms-1">
                (اسحب للتنقل • Swipe)
              </span>
            </div>

            {/* Interactive Pagination Dots (Touch-Friendly) */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{ touchAction: "manipulation" }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    active === idx
                      ? "w-7 bg-[#dfcba9] shadow-[0_0_10px_rgba(223,203,169,0.5)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
