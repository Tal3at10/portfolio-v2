"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function ExecutiveBio() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const metrics = [
    {
      value: 5,
      suffix: "+",
      labelAr: "سنوات خبرة",
      labelEn: "Years Experience",
    },
    {
      value: 30,
      suffix: "+",
      labelAr: "مشروع ومنظومة مُشغّلة",
      labelEn: "Production Systems",
    },
    {
      value: 10,
      suffix: "+",
      labelAr: "دول وأسواق عملت بها",
      labelEn: "Operational Markets",
    },
  ];

  return (
    <section className={"relative z-20 w-full bg-[#09090b] py-20 sm:py-28 overflow-hidden border-t border-white/[0.04]"}>
      {/* Ambient Studio Lighting (Gold & Emerald Radiance) */}
      <div className={"absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#dfcba9]/[0.04] rounded-full blur-[150px] pointer-events-none"} />

      <div className={"max-w-7xl mx-auto px-6 sm:px-12 relative z-10"}>
        <div className={"flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-between"}>
          
          {/* 1. Large High-Res Portrait with Solid Gold Bezel & Aura Glow */}
          <div className={"relative flex-shrink-0 flex items-center justify-center"}>
            {/* Warm Golden Aura Glow behind portrait */}
            <div className={"absolute -inset-6 sm:-inset-10 rounded-full bg-gradient-to-br from-[#dfcba9] to-[#c5a028] blur-3xl opacity-25 animate-pulse pointer-events-none"} />
            
            {/* Crisp High-Res Circular Portrait Container */}
            <div className={"relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden border-4 border-[#dfcba9] shadow-[0_0_60px_rgba(223,203,169,0.2)] bg-[#121216] transition-transform duration-500 hover:scale-[1.02]"}>
              <Image
                src={"/profile/mahmoud-talaat.jpg"}
                alt={"Mahmoud Talaat - Lead Software & Systems Engineer"}
                fill
                unoptimized={true}
                priority
                className={"object-cover object-top select-none"}
                sizes={"(max-width: 640px) 288px, (max-width: 1024px) 384px, 430px"}
              />
            </div>
          </div>

          {/* 2. Text & Identity Content */}
          <div className={"flex-1 w-full text-center lg:"} dir={isAr ? "rtl" : "ltr"}>
            
            {/* Role Header Badge */}
            <div className={"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-5"}>
              <Sparkles className={"w-3.5 h-3.5 text-[#dfcba9]"} />
              <span className={"text-xs font-mono font-medium text-[#dfcba9] uppercase tracking-wider"}>
                {isAr ? "مهندس برمجيات ونظم سحابية" : "Lead Software & Systems Engineer"}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className={"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"}>
              {isAr ? (
                <>
                  مرحباً، أنا <span className={"text-[#dfcba9]"}>محمود طلعت</span>
                </>
              ) : (
                <>
                  Hello, I&apos;m <span className={"text-[#dfcba9]"}>Mahmoud Talaat</span>
                </>
              )}
            </h2>

            {/* Narrative Value Bio */}
            <p className={"text-base sm:text-lg text-zinc-300 leading-relaxed sm:leading-[1.85] max-w-2xl mx-auto lg:mx-0 mb-8 font-normal"}>
              {isAr
                ? "خبرة 5+ سنوات في بناء وتطوير المنظومات التقنية للجهات الحكومية والشركات الكبرى في السعودية ومصر وأوروبا. أركز على بناء حلول معقدة تعمل بكفاءة تحت الضغط العالي وتقدم قيمة تشغيلية مباشرة ومستدامة."
                : "5+ years engineering high-load cloud architectures, GovTech platforms, and automated business engines across Saudi Arabia, Egypt, and Northern Europe. Focused on zero-downtime scalability and tangible operational ROI."}
            </p>

            {/* Live Metrics Row */}
            <div className={"grid grid-cols-3 gap-4 sm:gap-6 py-6 my-6 border-y border-white/[0.08] max-w-xl mx-auto lg:mx-0"}>
              {metrics.map((m, idx) => (
                <div key={idx} className={"text-center lg:"}>
                  <div className={"text-3xl sm:text-4xl lg:text-5xl font-black text-[#dfcba9] font-mono tracking-tight"}>
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className={"text-xs sm:text-sm text-zinc-400 font-medium mt-1.5 leading-tight"}>
                    {isAr ? m.labelAr : m.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* High-Converting CTAs */}
            <div className={"flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"}>
              <Link
                href={"https://wa.me/201018318042?text="}
                target={"_blank"}
                className={"group relative inline-flex items-center justify-center gap-3 bg-[#dfcba9] hover:bg-white text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(223,203,169,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-0.5"}
              >
                <span>{isAr ? "احجز استشارة معمارية" : "Request Architecture Consultation"}</span>
                <ArrowRight className={"w-4 h-4 transition-transform duration-300 "} />
              </Link>

              <Link
                href={"https://wa.me/201018318042"}
                target={"_blank"}
                className={"inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300"}
              >
                <MessageCircle className={"w-4 h-4 text-[#10B981]"} />
                <span>{isAr ? "محادثة واتساب مباشرة" : "WhatsApp Direct"}</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
