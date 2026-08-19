"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  IconBrandWhatsapp,
  IconDatabase,
  IconBrain,
  IconWorld,
  IconCpu,
  IconCloudCheck,
  IconServer,
} from "@tabler/icons-react";

const NodeCircle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 sm:size-14 items-center justify-center rounded-2xl border border-white/20 bg-zinc-900 text-white p-3 shadow-xl transition-transform hover:scale-105",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-xs font-medium text-zinc-200 text-center leading-tight">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="text-[10px] font-mono text-zinc-500 text-center leading-none">
          {sublabel}
        </span>
      )}
    </div>
  );
});

NodeCircle.displayName = "NodeCircle";

export function SystemArchitectureFlow({
  isAr = true,
}: {
  isAr?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  const botRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const vectorRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  const gdsRef = useRef<HTMLDivElement>(null);
  const workersRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[380px] sm:h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-10 shadow-2xl"
      ref={containerRef}
      dir="ltr"
    >
      <div className="flex size-full flex-col max-w-2xl max-h-[300px] items-stretch justify-between gap-6 z-10">
        {/* Top Tier */}
        <div className="flex flex-row items-center justify-between">
          <NodeCircle
            ref={webRef}
            label={isAr ? "بوابة الحجز (B2C)" : "B2C Web Portal"}
            sublabel="React 19"
          >
            <IconWorld className="w-6 h-6 text-zinc-100" />
          </NodeCircle>

          <NodeCircle
            ref={gdsRef}
            label={isAr ? "مزودو الطيران والفنادق" : "Global GDS APIs"}
            sublabel="Duffel / Amadeus"
          >
            <IconCloudCheck className="w-6 h-6 text-zinc-100" />
          </NodeCircle>
        </div>

        {/* Center Tier */}
        <div className="flex flex-row items-center justify-between">
          <NodeCircle
            ref={botRef}
            label={isAr ? "بوت مبيعات الواتساب" : "WhatsApp Sales Bot"}
            sublabel="Cloud API"
          >
            <IconBrandWhatsapp className="w-6 h-6 text-zinc-100" />
          </NodeCircle>

          <NodeCircle
            ref={coreRef}
            className="size-16 sm:size-20 border-white/40 bg-zinc-900/90 text-white shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            label={isAr ? "النواة المركزية" : "Central Core API"}
            sublabel=".NET 8 Clean Arch"
          >
            <IconCpu className="w-8 h-8 text-white" />
          </NodeCircle>

          <NodeCircle
            ref={vectorRef}
            label={isAr ? "البحث الدلالي (RAG)" : "Vector DB (RAG)"}
            sublabel="In-Memory Fast"
          >
            <IconBrain className="w-6 h-6 text-zinc-100" />
          </NodeCircle>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-row items-center justify-between">
          <NodeCircle
            ref={workersRef}
            label={isAr ? "معالجات الخلفية" : "Async Background Tasks"}
            sublabel="PDF & Jobs"
          >
            <IconServer className="w-6 h-6 text-zinc-100" />
          </NodeCircle>

          <NodeCircle
            ref={dbRef}
            label={isAr ? "قاعدة البيانات" : "Relational Database"}
            sublabel="SQL Server"
          >
            <IconDatabase className="w-6 h-6 text-zinc-100" />
          </NodeCircle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={webRef}
        toRef={coreRef}
        curvature={-50}
        endYOffset={-10}
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={botRef}
        toRef={coreRef}
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={workersRef}
        toRef={coreRef}
        curvature={50}
        endYOffset={10}
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gdsRef}
        toRef={coreRef}
        curvature={-50}
        endYOffset={-10}
        reverse
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={vectorRef}
        toRef={coreRef}
        reverse
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={coreRef}
        curvature={50}
        endYOffset={10}
        reverse
        pathColor="rgba(255, 255, 255, 0.15)"
        gradientStartColor="#ffffff"
        gradientStopColor="#a1a1aa"
      />
    </div>
  );
}
