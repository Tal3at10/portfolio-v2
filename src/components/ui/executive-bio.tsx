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
    <section className="relative z-20 w-full bg-[#09090b] py-14 sm:py-28 overflow-hidden border-t border-white/[0.04]">
      {/* Ambient Studio Lighting (Gold & Emerald Radiance) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#dfcba9]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 justify-between">
          
          {/* 1. Large High-Res Portrait with Solid Gold Bezel & Aura Glow */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            {/* Warm Golden Aura Glow behind portrait */}
            <div className="absolute -inset-4 sm:-inset-10 rounded-full bg-gradient-to-br from-[#dfcba9] to-[#c5a028] blur-3xl opacity-25 animate-pulse pointer-events-none" />
            
            {/* Crisp High-Res Circular Portrait Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-[#dfcba9] shadow-[0_0_60px_rgba(223,203,169,0.2)] bg-[#121216] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/profile/mahmoud-talaat.jpg"
                alt="Mahmoud Talaat - Lead Software & Systems Engineer"
                fill
                unoptimized={true}
                priority
                className="object-cover object-top select-none"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>

          {/* 2. Text & Identity Content */}
          <div className={`flex-1 w-full text-center ${isAr ? "lg:text-right" : "lg:text-left"}`} dir={isAr ? "rtl" : "ltr"}>
            
            {/* Agency & Leadership Badges (Flex-wrapped with clean gap) */}
            <div className={`flex flex-wrap items-center justify-center ${isAr ? "lg:justify-start" : "lg:justify-start"} gap-2.5 mb-5 sm:mb-6`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 shadow-[0_0_15px_rgba(223,203,169,0.08)]">
                <Sparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
                <span className="text-xs font-bold text-[#dfcba9] tracking-wide">
                  {isAr ? "تَـمّ | TAM Systems" : "TAM Systems | تَـمّ"}
                </span>
              </div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/12 text-zinc-200">
                <span className="text-xs font-semibold">
                  {isAr ? "المؤسس ومهندس الأنظمة الرئيسي" : "Founder & Lead Systems Architect"}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5">
              {isAr ? (
                <>
                  مرحباً، أنا <span className="text-[#dfcba9]">محمود طلعت</span>
                </>
              ) : (
                <>
                  Hello, I&apos;m <span className="text-[#dfcba9]">Mahmoud Talaat</span>
                </>
              )}
            </h2>

            {/* Narrative Value Bio */}
            <p className={`text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed sm:leading-[1.85] max-w-2xl mx-auto ${isAr ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"} mb-6 sm:mb-8 font-normal`}>
              {isAr
                ? "أكثر من 5 سنوات في بناء أنظمة للجهات الحكومية والشركات الكبرى — من البنية السحابية عالية التحمل إلى محركات الأتمتة، في السعودية ومصر وأوروبا. الهدف دايماً: استقرار كامل تحت الضغط، وعائد تشغيلي ملموس من أول تشغيل."
                : "5+ years engineering high-load cloud architectures, GovTech platforms, and automated business engines across Saudi Arabia, Egypt, and Northern Europe. Focused on zero-downtime scalability and tangible operational ROI."}
            </p>

            {/* Live Metrics Row */}
            <div className={`grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-6 my-4 sm:my-6 border-y border-white/[0.08] max-w-xl mx-auto ${isAr ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"}`}>
              {metrics.map((m, idx) => (
                <div key={idx} className={`text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                  <div dir="ltr" className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#dfcba9] font-sans tracking-tight">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-sm text-zinc-300 font-medium mt-1 sm:mt-1.5 leading-tight">
                    {isAr ? m.labelAr : m.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* High-Converting CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center ${isAr ? "lg:justify-start" : "lg:justify-start"} gap-3 sm:gap-4 pt-2`}>
              <Link
                href={`https://wa.me/201108745372?text=${encodeURIComponent(
                  isAr
                    ? "مرحباً مهندس محمود، أود حجز استشارة تقنية لمشروعنا."
                    : "Hello Mahmoud, I'd like to schedule an architecture consultation for our system."
                )}`}
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#dfcba9] hover:bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(223,203,169,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>{isAr ? "احجز استشارة معمارية" : "Request Architecture Consultation"}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>

              <Link
                href="https://wa.me/201108745372"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#dfcba9]/40 transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#dfcba9]" />
                <span>{isAr ? "محادثة واتساب مباشرة" : "WhatsApp Direct"}</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
