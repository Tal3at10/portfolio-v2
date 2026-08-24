"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { IconSparkles, IconBolt, IconBrain, IconShield, IconArrowUpRight } from "@tabler/icons-react";

interface WhyCard {
  icon: React.ReactNode;
  iconColor: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  quoteAr: string;
  quoteEn: string;
  clientAr: string;
  clientEn: string;
  accentClass: string;
}

const cards: WhyCard[] = [
  {
    icon: <IconBrain size={26} strokeWidth={1.6} />,
    iconColor: "#dfcba9",
    accentClass: "from-[#dfcba9]/12 to-transparent border-[#dfcba9]/20",
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
    icon: <IconBolt size={26} strokeWidth={1.6} />,
    iconColor: "#10B981",
    accentClass: "from-emerald-400/10 to-transparent border-emerald-400/15",
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
    icon: <IconSparkles size={26} strokeWidth={1.6} />,
    iconColor: "#818cf8",
    accentClass: "from-indigo-400/10 to-transparent border-indigo-400/15",
    titleAr: "المشاكل الصعبة دي شغلتنا.",
    titleEn: "Hard problems are our specialty.",
    bodyAr:
      "المشروع اللي الكل قاله «ده معقد ومش ممكن» — ده بالظبط اللي بنقعد فيه ونطلعه صح. مش بنعمل patch وخلاص، بنحل المشكلة من جذورها وبنضمن إنها ما ترجعش.",
    bodyEn:
      "The project everyone said 'too complex' — that's exactly where we thrive. We don't patch symptoms; we architect root-cause solutions that hold.",
    quoteAr: "«دايماً عنده حل، حتى لما ما فيش حل واضح»",
    quoteEn: "«Always has a solution — even when none is obvious.»",
    clientAr: "— م. أشرف عبانه، معماري أنظمة",
    clientEn: "— Eng. Ashraf Abana, Systems Architect",
  },
  {
    icon: <IconShield size={26} strokeWidth={1.6} />,
    iconColor: "#f59e0b",
    accentClass: "from-amber-400/10 to-transparent border-amber-400/15",
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

  return (
    <section
      id="why-choose-us"
      dir={isAr ? "rtl" : "ltr"}
      className="relative w-full py-16 sm:py-28 px-4 sm:px-8 lg:px-12 bg-[#09090b] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#dfcba9]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 text-center">
          {/* Section Number */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dfcba9]/10 border border-[#dfcba9]/25 mb-4 sm:mb-5">
            <IconSparkles className="w-3.5 h-3.5 text-[#dfcba9]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#dfcba9] uppercase tracking-widest">
              {isAr ? "ليه تختارنا؟" : "Why Choose Us?"}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 max-w-3xl mx-auto">
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

          {/* Honest sub-headline */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {isAr
              ? "سؤال منطقي وإجابته واضحة — الحمد لله كل عميل اشتغلنا معاه عرف الإجابة بعد أول محادثة."
              : "Fair question. And the answer becomes clear after your first conversation with us — every single time."}
          </p>
        </div>

        {/* Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${card.accentClass} border backdrop-blur-sm transition-all duration-500 cursor-default overflow-hidden`}
              style={{
                background: hoveredIndex === index
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.02)",
                transform: hoveredIndex === index ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${card.iconColor}08, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                style={{
                  color: card.iconColor,
                  backgroundColor: `${card.iconColor}12`,
                  border: `1px solid ${card.iconColor}20`,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 leading-tight tracking-tight">
                {isAr ? card.titleAr : card.titleEn}
              </h3>

              {/* Body */}
              <p className="text-sm text-zinc-300 leading-[1.8] mb-5 sm:mb-6 font-normal">
                {isAr ? card.bodyAr : card.bodyEn}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-4 sm:mb-5" />

              {/* Client Quote */}
              <blockquote className="space-y-1">
                <p
                  className="text-xs sm:text-sm font-medium italic leading-relaxed"
                  style={{ color: card.iconColor }}
                >
                  {isAr ? card.quoteAr : card.quoteEn}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-500 font-mono">
                  {isAr ? card.clientAr : card.clientEn}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Bottom Closing Statement + CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 sm:mb-8">
            {isAr
              ? "لو حاسس إنك بتلف في دوايرك مع مطورين تانيين — يمكن حان الوقت تجرب اللي بيفهم."
              : "If you've been going in circles with other developers — maybe it's time to talk to someone who actually gets it."}
          </p>
          <a
            href={`https://wa.me/201108745372?text=${encodeURIComponent(
              isAr
                ? "مرحباً، قرأت عن تَـمّ للأنظمة وأود بدء محادثة."
                : "Hello, I read about TAM Systems and would like to start a conversation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#dfcba9] hover:bg-white text-black font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(223,203,169,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
          >
            <span>{isAr ? "ابدأ بمحادثة مجانية" : "Start a free conversation"}</span>
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
