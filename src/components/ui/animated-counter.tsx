"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className = "",
}: AnimatedCounterProps) {
  // SSR initial value shows real value (30+, 6+, etc.) so it's never stuck at 0
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animFrameId: number;

    const startCountAnimation = () => {
      const end = value;
      const startTime = performance.now();
      const durationMs = duration * 1000;

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(end * ease);

        if (progress < 1) {
          animFrameId = requestAnimationFrame(updateCounter);
        }
      };

      // Reset to 0 and animate up
      setDisplayValue(0);
      animFrameId = requestAnimationFrame(updateCounter);
    };

    let observer: IntersectionObserver | null = null;
    let hasAnimated = false;

    // Fallback: animate after short mount delay
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        hasAnimated = true;
        startCountAnimation();
      }
    }, 400);

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            clearTimeout(fallbackTimer);
            startCountAnimation();
          }
        },
        { root: null, rootMargin: "0px", threshold: 0.01 }
      );
      observer.observe(el);
    } catch {
      // IntersectionObserver fallback handles it
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer?.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, [value, duration]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
