import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import { CaseStudySticky } from "@/components/ui/case-study-sticky";
import { SystemsBento } from "@/components/ui/systems-bento";
import { ClientTestimonials } from "@/components/ui/client-testimonials";
import { GlobalArchitectMetrics } from "@/components/ui/global-architect-metrics";
import { ArchitectureProcess } from "@/components/ui/architecture-process";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import LumaBar from "@/components/ui/futuristic-nav";

export default function LocalePage() {
  return (
    <main className="min-h-screen bg-[#000000] relative selection:bg-[#dfcba9] selection:text-black">
      {/* 1. Hero Layered Parallax */}
      <ParallaxComponent />

      {/* 2. Deep-Dive Case Studies (Sticky Transformation) */}
      <CaseStudySticky />

      {/* 3. Systems Catalog (Bento Grid) */}
      <SystemsBento />

      {/* 4. Social Proof & Client Testimonials (Animated Deck) */}
      <ClientTestimonials />

      {/* 5. Global Engineering Metrics */}
      <GlobalArchitectMetrics />

      {/* 6. Architectural Methodology (Interactive GSAP Clip Mosaic) */}
      <ArchitectureProcess />

      {/* 7. Closing CTA & Interactive Social Dock */}
      <LetsWorkTogether />

      {/* 8. Floating Glass Navigation Bar */}
      <LumaBar />
    </main>
  );
}
