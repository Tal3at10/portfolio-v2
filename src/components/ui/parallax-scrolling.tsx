"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLocale } from "next-intl";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconArrowDown, IconCalendarEvent } from "@tabler/icons-react";

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isAr = locale === "ar";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const header = parallaxRef.current?.querySelector(".parallax__header");
    const triggerElement = parallaxRef.current?.querySelector("[data-parallax-layers]");

    let ctx: gsap.Context | undefined;

    if (header && triggerElement) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        const layers = [
          { layer: "1", yPercent: 70 },
          { layer: "2", yPercent: 55 },
          { layer: "3", yPercent: 40 },
          { layer: "4", yPercent: 10 },
        ];

        layers.forEach((layerObj, idx) => {
          tl.to(
            triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
            {
              yPercent: layerObj.yPercent,
              ease: "none",
            },
            idx === 0 ? undefined : "<"
          );
        });
      }, parallaxRef);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ctx?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const scrollToCaseStudies = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact") || document.querySelector("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="parallax bg-[#000000]" ref={parallaxRef}>
      <section className="parallax__header relative h-[100vh] w-full">
        <div className="parallax__visuals sticky top-0 h-screen w-full overflow-hidden">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers relative w-full h-full overflow-hidden">
            {/* Layer 1: Sky */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt=""
              className="parallax__layer-img"
            />

            {/* Layer 2: Mountain */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt=""
              className="parallax__layer-img"
            />

            {/* Layer 3: Main Bold Headline, Subtitle & Interactive CTAs in Sky */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <div className="flex flex-col items-center justify-center text-center px-5 sm:px-6 max-w-4xl mx-auto pointer-events-auto w-full">

                {/* ── Eyebrow label ── */}
                <span className="inline-block text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#dfcba9]/70 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {isAr ? "مهندس أنظمة مؤسسية" : "Enterprise Systems Engineer"}
                </span>

                {/* ── Main Headline ── */}
                <h1
                  dir={isAr ? "rtl" : "ltr"}
                  className="parallax__title drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)] w-full"
                >
                  {isAr ? (
                    <>
                      <span className="block text-white font-black leading-tight">
                        أبني الأنظمة التي
                      </span>
                      <span className="block text-[#dfcba9] font-black leading-tight mt-0.5 sm:mt-1">
                        يقوم عليها عملك الفعلي.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block text-white font-black tracking-tight leading-tight normal-case">
                        I build the systems
                      </span>
                      <span className="block text-[#dfcba9] font-black tracking-tight leading-tight normal-case mt-0.5 sm:mt-1">
                        your business actually runs on.
                      </span>
                    </>
                  )}
                </h1>

                {/* ── Subtitle ── */}
                <p
                  dir={isAr ? "rtl" : "ltr"}
                  className="text-[11px] sm:text-sm md:text-[15px] text-zinc-300 font-normal max-w-xl sm:max-w-2xl mt-3 sm:mt-4 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2"
                >
                  {isAr
                    ? "من محركات السفر ومناقصات الاعتماد الحكومي، إلى السجلات الطبية والذكاء الاصطناعي — منصات شُغِّلت في الخليج وأوروبا الشمالية."
                    : "From GovTech platforms and travel engines to clinical EMRs and AI automation — shipped across the Gulf and Northern Europe."}
                </p>

                {/* ── CTA Buttons (Wide gap to flank center character) ── */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-28 md:gap-44 lg:gap-60 mt-8 sm:mt-16 md:mt-24 lg:mt-32 w-full">
                  <ShimmerButton
                    onClick={scrollToCaseStudies}
                    className="w-52 sm:w-52 md:w-56 h-10 sm:h-11 shadow-[0_0_20px_rgba(223,203,169,0.25)] text-xs sm:text-[13px] font-bold cursor-pointer px-0 shrink-0"
                  >
                    <span className="flex items-center justify-center gap-1.5 text-white">
                      <span>
                        {isAr ? "استكشف المشاريع" : "Explore My Work"}
                      </span>
                      <IconArrowDown className="size-3.5 animate-bounce" />
                    </span>
                  </ShimmerButton>

                  <button
                    onClick={scrollToContact}
                    className="w-52 sm:w-52 md:w-56 h-10 sm:h-11 flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-bold rounded-full border border-white/25 bg-black/50 hover:bg-black/80 hover:border-white/50 text-zinc-200 hover:text-white backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer shrink-0"
                  >
                    <IconCalendarEvent className="size-4 text-[#dfcba9]" />
                    <span>{isAr ? "احجز استشارة مجانية" : "Book a Free Call"}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Layer 4: Person Foreground */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt=""
              className="parallax__layer-img"
            />
          </div>

          <div className="parallax__fade"></div>
        </div>
      </section>
    </div>
  );
}

