"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Deterministic SSR-safe rotation angles to prevent hydration mismatches
const ROTATION_ANGLES = [-6, 5, -4, 6, -5, 4];

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

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4500);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const getRotation = (index: number) => {
    return ROTATION_ANGLES[index % ROTATION_ANGLES.length];
  };

  return (
    <div className={cn("max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Stacked 3D Image Deck */}
        <div>
          <div className="relative h-80 sm:h-96 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -35, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 shadow-2xl"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    unoptimized={testimonial.src.endsWith('.svg')}
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Testimonial Content & Controls */}
        <div className="flex justify-between flex-col py-4 min-h-[280px]">
          {(() => {
            const current = testimonials[active % testimonials.length] || testimonials[0];
            if (!current) return null;

            return (
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.name}
                </h3>
                <p className="text-sm font-mono text-[#dfcba9] mt-1">
                  {current.designation}
                </p>
                
                <motion.p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mt-6 font-normal">
                  {current.quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            );
          })()}

          <div className="flex gap-4 pt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-[#dfcba9]/40 hover:bg-white/[0.08] flex items-center justify-center transition-all duration-300 group/button cursor-pointer"
            >
              <IconArrowLeft className="h-5 w-5 text-[#dfcba9] group-hover/button:-translate-x-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-[#dfcba9]/40 hover:bg-white/[0.08] flex items-center justify-center transition-all duration-300 group/button cursor-pointer"
            >
              <IconArrowRight className="h-5 w-5 text-[#dfcba9] group-hover/button:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
