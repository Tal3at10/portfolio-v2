"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

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

            {/* Layer 3: Clean English-Only Headline */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h1 dir="ltr" className="parallax__title leading-[0.88] text-center">
                <span className="block">BUILT FOR THE CLIMB.</span>
                <span className="block">ENGINEERED FOR THE TOP.</span>
              </h1>
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
