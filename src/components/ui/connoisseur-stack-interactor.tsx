"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useLocale } from "next-intl";

export interface ProcessItem {
  num: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  clipId: string;
  image: string;
}

const defaultProcessItems: ProcessItem[] = [
  {
    num: "01",
    titleAr: "تحليل المتطلبات",
    titleEn: "Domain Analysis",
    subtitleAr: "والمعمارية النظيفة",
    subtitleEn: "& Clean CQRS",
    descriptionAr:
      "تحليل معمق وفصل الأوامر عن الاستعلامات لبناء منظومة مرنة.",
    descriptionEn:
      "Deep modeling of business entities, MediatR CQRS command separation, and event-driven architecture designed for high maintainability.",
    clipId: "clip-hexagons",
    image:
      "/images/architecture/domain-clean-architecture.jpg",
  },
  {
    num: "02",
    titleAr: "تزامن عالٍ",
    titleEn: "High-Concurrency",
    subtitleAr: "ومعمارية للتوسع",
    subtitleEn: "Engineered Scale",
    descriptionAr:
      "خوادم بـ .NET 9 لضمان استجابة سريعة وتكامل مع الدفع.",
    descriptionEn:
      "Robust backends in .NET 9 & Django with Redis queues, sub-100ms response targets, and fault-tolerant GDS & payment gateway pipelines.",
    clipId: "clip-original",
    image:
      "/images/architecture/high-concurrency-scale.jpg",
  },
  {
    num: "03",
    titleAr: "الذكاء الاصطناعي",
    titleEn: "Multi-LLM &",
    subtitleAr: "ونظام RAG للبحث الدلالي",
    subtitleEn: "Autonomous RAG",
    descriptionAr:
      "دمج نماذج الذكاء الاصطناعي مع قواعد بيانات شعاعية بدقة عالية.",
    descriptionEn:
      "In-Memory Vector DB retrieval, automated fallback across Gemini, Groq, and Cerebras, and zero-hallucination conversational bots.",
    clipId: "clip-pixels",
    image:
      "/images/architecture/ai-rag-vector-graph.jpg",
  },
];

export const ConnoisseurStackInteractor = ({
  items = defaultProcessItems,
  className,
}: {
  items?: ProcessItem[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const locale = useLocale();
  const isAr = locale === "ar";

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current)
      mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);

    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.35, from: "random" },
      ease: "expo.out",
    })
      // 2. IDLE (Sine Breath)
      .to(selector, {
        scale: 1.04,
        duration: 1.4,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.2, from: "center" },
      })
      // 3. OUT (Expo In)
      .to(selector, {
        scale: 0,
        duration: 0.6,
        stagger: { amount: 0.25, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between w-full py-12 px-6 sm:px-12 max-w-6xl mx-auto overflow-hidden",
        className
      )}
    >
      {/* LEFT SIDE: Architectural Steps */}
      <div className="z-20 w-full lg:w-1/2">
        <nav>
          <ul className="flex flex-col gap-10">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={item.num}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleItemHover(index)}
                  onTouchStart={() => handleItemHover(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleItemHover(index);
                    }
                  }}
                  onMouseEnter={() => handleItemHover(index)}
                  className="group cursor-pointer transition-all duration-300 select-none"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number */}
                    <span
                      className={cn(
                        "text-2xl sm:text-3xl font-mono font-bold transition-all duration-500 mt-1 shrink-0",
                        isActive
                          ? "text-[#dfcba9] scale-110"
                          : "text-zinc-700 dark:text-zinc-700"
                      )}
                    >
                      {item.num}
                    </span>

                    {/* Main Title & Subtitle */}
                    <div className="flex flex-col">
                      <h3
                        className={cn(
                          `text-lg sm:text-2xl font-black leading-[1.15] transition-all duration-500 ${isAr ? "tracking-normal" : "uppercase tracking-tight"}`, 
                          isActive
                            ? "text-white opacity-100 rtl:-translate-x-1 sm:rtl:-translate-x-2 ltr:translate-x-1 sm:ltr:translate-x-2"
                            : "text-zinc-500 sm:text-zinc-600 opacity-60 sm:opacity-40 translate-x-0"
                        )}
                      >
                        {isAr ? item.titleAr : item.titleEn}
                        <br />
                        <span className="text-[#dfcba9] font-bold">
                          {isAr ? item.subtitleAr : item.subtitleEn}
                        </span>
                      </h3>

                      {/* Description that expands smoothly for active item */}
                      <p dir="auto"
                        className={cn(
                          "text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl mt-3 sm:mt-4 transition-all duration-500",
                          isActive
                            ? "opacity-100 max-h-96 rtl:-translate-x-1 sm:rtl:-translate-x-2 ltr:translate-x-1 sm:ltr:translate-x-2"
                            : "opacity-0 max-h-0 overflow-hidden"
                        )}
                      >
                        {isAr ? item.descriptionAr : item.descriptionEn}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE: Animated GSAP SVG Grid Mosaic */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
        <div className="absolute w-[110%] h-[110%] bg-[#dfcba9]/5 blur-[100px] rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 500 500"
          className="w-full max-w-[460px] h-auto z-10 drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
        >
          <defs>
            {/* 1. Original Multi-Slice Mask */}
            <clipPath id="clip-original">
              <rect className="path" x="20" y="25" width="460" height="75" rx="12" />
              <rect className="path" x="20" y="120" width="460" height="75" rx="12" />
              <rect className="path" x="20" y="215" width="460" height="75" rx="12" />
              <rect className="path" x="20" y="310" width="460" height="75" rx="12" />
              <rect className="path" x="20" y="405" width="460" height="75" rx="12" />
            </clipPath>

            {/* 2. Hexagons / Bento Geometric Slices */}
            <clipPath id="clip-hexagons">
              <rect
                className="path"
                x="20"
                y="20"
                width="200"
                height="280"
                rx="14"
              />
              <rect
                className="path"
                x="20"
                y="320"
                width="200"
                height="160"
                rx="14"
              />
              <rect
                className="path"
                x="240"
                y="20"
                width="240"
                height="140"
                rx="14"
              />
              <rect
                className="path"
                x="240"
                y="180"
                width="110"
                height="160"
                rx="14"
              />
              <rect
                className="path"
                x="370"
                y="180"
                width="110"
                height="160"
                rx="14"
              />
              <rect
                className="path"
                x="240"
                y="360"
                width="240"
                height="120"
                rx="14"
              />
            </clipPath>

            {/* 3. 9-Square Grid Mosaic */}
            <clipPath id="clip-pixels">
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  className="path"
                  x={(i % 3) * 160 + 20}
                  y={Math.floor(i / 3) * 160 + 20}
                  width="140"
                  height="140"
                  rx="10"
                />
              ))}
            </clipPath>
          </defs>

          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image
              ref={imageRef}
              href={items[0].image}
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
