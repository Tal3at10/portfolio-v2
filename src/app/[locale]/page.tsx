import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import { ClientLogosStrip } from "@/components/ui/client-logos-strip";
import { ExecutiveBio } from "@/components/ui/executive-bio";
import { CaseStudySticky } from "@/components/ui/case-study-sticky";
import { SystemsBento } from "@/components/ui/systems-bento";
import { ClientTestimonials } from "@/components/ui/client-testimonials";
import { GlobalArchitectMetrics } from "@/components/ui/global-architect-metrics";
import { ArchitectureProcess } from "@/components/ui/architecture-process";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import LumaBar from "@/components/ui/futuristic-nav";

export default function LocalePage() {
  return (
    <main className="min-h-screen bg-[#09090b] relative selection:bg-[#dfcba9] selection:text-black">
      {/* Subtle noise texture — breaks flat dead feel */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.028,
        }}
      />
      {/* 1. Hero Layered Parallax */}
      <ParallaxComponent />

      {/* 2. Client Logos Trust Strip */}
      <ClientLogosStrip />

      {/* 2.5 Executive Bio & Engineering Philosophy */}
      <ExecutiveBio />

      {/* 3. Deep-Dive Case Studies (Sticky Transformation) */}
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
