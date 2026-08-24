"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  IconSparkles,
  IconBolt,
  IconBrain,
  IconShieldCheck,
  IconArrowUpRight,
  IconStar,
} from "@tabler/icons-react";

interface WhyCard {
  icon: React.ReactNode;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  quoteAr: string;
  quoteEn: string;
  clientAr: string;
  clientEn: string;
}

const cards: WhyCard[] = [
  {
    icon: <IconBrain size={24} strokeWidth={1.75} />,
    titleAr: "مش هتحتاج تشرح مرتين.",
    titleEn: "You won't need to explain twice.",
    bodyAr:
      "تكلمني عن تحديك مرة واحدة — وأنا هفهم إيه اللي بتقصده، وإيه اللي بتحتاجه، وإيه اللي المفروض يتعمل. مش هنضيع وقت في اجتماعات وشروحات مكررة.",
    bodyEn:
      "Tell me your challenge once — I'll understand what you mean, what you need, and what should be done. No wasted calls, no repeated explanations.",
    quoteAr: "«سريع في الفهم، دقيق في التنفيذ — تسلم شغل متقن»",
    quoteEn: "«Fast comprehension, precise delivery — every single time.»",
    clientAr: "— إبراهيم الملحم، مؤسس سفريات الملحم",
    clientEn: "— Ibrahim AlMulhim, Founder of AlMulhim Travel",
  },
  {
    icon: <IconBolt size={24} strokeWidth={1.75} />,
    titleAr: "تنفيذ سريع — وشغل متقن.",
    titleEn: "Fast execution. Zero compromises.",
    bodyAr:
      "مش هتضطر تختار بين السرعة والجودة. بنسلم production-ready من أول تسليم وبدون تعقيدات أو دوامة تعديلات لا آخر ليها.",
    bodyEn:
      "You won't choose between speed and quality. We deliver production-ready from day one — no loops of revisions, no unnecessary complexity.",
    quoteAr: "«شغل دقيق والتنفيذ سريع بدون تعقيدات مالهاش لازمة»",
    quoteEn: "«Precise work, fast delivery — no unnecessary complexity.»",
    clientAr: "— سفر الشهراني، مدير تقني",
    clientEn: "— Safar AlShahrani, Technical Director",
  },
  {
    icon: <IconSparkles size={24} strokeWidth={1.75} />,
    titleAr: "المشاكل الصعبة دي شغلتنا.",
    titleEn: "Hard problems are our specialty.",
    bodyAr:
      "المشروع اللي الكل قاله «ده معقد ومش ممكن» — ده بالظبط اللي بنقعد فيه ونطلعه صح. بنحل المشكلة من جذورها وبنضمن استقرارها.",
    bodyEn:
      "The project everyone said 'too complex' — that's exactly where we thrive. We don't patch symptoms; we architect root-cause solutions that hold.",
    quoteAr: "«دايماً عنده حل، حتى لما ما فيش حل واضح»",
    quoteEn: "«Always has a solution — even when none is obvious.»",
    clientAr: "— م. أشرف عبانه، معماري أنظمة",
    clientEn: "— Eng. Ashraf Abana, Systems Architect",
  },
  {
    icon: <IconShieldCheck size={24} strokeWidth={1.75} />,
    titleAr: "مش بس مطور — شريك تقني.",
    titleEn: "Not just a developer — a strategic partner.",
    bodyAr:
      "بنفكر معاك في كيف تكبر وتتوسع، مش بس كيف تخلص المشروع. نصايحنا المعمارية بتوفر تكاليف تشغيلية حقيقية وبتحمي استثمارك لسنين.",
    bodyEn:
      "We think beyond the project deadline — about how your system scales and evolves. Our architectural guidance cuts real operational costs and protects your investment.",
    quoteAr: "«نصايحه في الـ Architecture بتحسن الأداء وتقلل التكاليف»",
    quoteEn: "«His architectural advice improves performance and cuts long-term costs.»",
    clientAr: "— ثامر القحطاني، مدير تقنية المعلومات",
    clientEn: "— Thamer AlQahtani, IT Director",
  },
];

export function WhyChooseUs() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-choose-us"
      dir={isAr ? "rtl" : "ltr"}
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#09090b] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#dfcba9]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center">
          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-4 shadow-[0_0_20px_rgba(223,203,169,0.06)]">
            <IconSparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#dfcba9] uppercase tracking-widest">
              {isAr ? "ليه تختارنا؟" : "Why Choose Us?"}
            </span>
          </div>

          {/* Main Headline — Wide max-w and balanced font-size so it stays on a single line */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-normal mb-3 sm:mb-4 max-w-5xl mx-auto px-2">
            {isAr ? (
              <>
                ليه تختارنا{" "}
                <span className="text-[#dfcba9]">وإنت عارف إن البدائل كتير؟</span>
              </>
            ) : (
              <>
                Why choose us{" "}
                <span className="text-[#dfcba9]">when alternatives exist?</span>
              </>
            )}
          </h2>

          {/* Sub-headline */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal px-2">
            {isAr
              ? "سؤال منطقي وإجابته واضحة — الحمد لله كل عميل اشتغلنا معاه عرف الإجابة بعد أول محادثة."
              : "Fair question. And the answer becomes clear after your first conversation with us — every single time."}
          </p>
        </div>

        {/* Cards Grid — Unified Gold/Zinc Luxury Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-14">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#dfcba9]/30 backdrop-blur-sm transition-all duration-300 cursor-default overflow-hidden"
              style={{
                transform: hoveredIndex === index ? "translateY(-3px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 12px 30px -10px rgba(223, 203, 169, 0.08)"
                    : "none",
              }}
            >
              {/* Subtle hover golden highlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(223, 203, 169, 0.07), transparent)",
                }}
              />

              {/* Icon Container — Unified Gold */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-[#dfcba9] bg-[#dfcba9]/10 border border-[#dfcba9]/20 group-hover:border-[#dfcba9]/40 group-hover:bg-[#dfcba9]/15 transition-colors">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2.5 leading-snug tracking-tight">
                {isAr ? card.titleAr : card.titleEn}
              </h3>

              {/* Body */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-[1.8] mb-5 font-normal">
                {isAr ? card.bodyAr : card.bodyEn}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-4" />

              {/* Client Quote — Unified Gold Tone */}
              <blockquote className="space-y-1">
                <p className="text-xs sm:text-sm font-medium italic leading-relaxed text-[#dfcba9]">
                  {isAr ? card.quoteAr : card.quoteEn}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-500 font-mono">
                  {isAr ? card.clientAr : card.clientEn}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Bottom Closing Statement + Dual CTAs */}
        <div className="text-center max-w-3xl mx-auto px-2">
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed mb-6 sm:mb-7">
            {isAr
              ? "لو حاسس إنك بتلف في دوايرك مع مطورين تانيين — يمكن حان الوقت تجرب اللي بيفهم."
              : "If you've been going in circles with other developers — maybe it's time to talk to someone who actually gets it."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary Action — WhatsApp Conversation */}
            <a
              href={`https://wa.me/201108745372?text=${encodeURIComponent(
                isAr
                  ? "مرحباً، قرأت عن تَـمّ للأنظمة وأود بدء محادثة."
                  : "Hello, I read about TAM Systems and would like to start a conversation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#dfcba9] hover:bg-white text-black font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(223,203,169,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>{isAr ? "ابدأ بمحادثة مجانية" : "Start a free conversation"}</span>
              <IconArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Secondary Action — Scroll to Testimonials */}
            <button
              onClick={scrollToTestimonials}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-white/15 hover:border-[#dfcba9]/40 bg-white/[0.03] hover:bg-white/[0.07] text-zinc-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <IconStar size={15} className="text-[#dfcba9] group-hover:scale-110 transition-transform" />
              <span>{isAr ? "شاهد آراء وتجارب عملائنا" : "Explore verified client reviews"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

