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
  // Start from 0 — animation goes 0 → value when triggered
  const [displayValue, setDisplayValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    // Fallback timer: if IntersectionObserver never fires (old iOS Chrome),
    // trigger the animation after 2.5s unconditionally
    const fallbackTimer = setTimeout(() => {
      if (!triggered) setTriggered(true);
    }, 2500);

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !triggered) {
            setTriggered(true);
            clearTimeout(fallbackTimer);
          }
        },
        { root: null, rootMargin: "0px", threshold: 0.01 }
      );
      observer.observe(el);
    } catch {
      // IntersectionObserver not supported — fallback timer handles it
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer?.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!triggered) return;

    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(end * ease);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [triggered, value, duration]);

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
