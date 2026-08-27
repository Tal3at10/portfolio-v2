"use client";

import React from "react";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";
import { useLocale } from "next-intl";

interface ClientReview {
  nameAr: string;
  nameEn: string;
  designationAr: string;
  designationEn: string;
  quoteAr: string;
  quoteEn: string;
  src: string;
}

const clientReviews: ClientReview[] = [
  {
    nameAr: "عبدالله الملحم",
    nameEn: "Abdullah Al-Mulhim",
    designationAr: "المدير التنفيذي • وكالة الملحم للسياحة والسفر",
    designationEn: "CEO • Al-Mulhim Travel Agency",
    quoteAr:
      "شغل احترافي ومنظم جداً ومحل ثقة. بنى لنا نظام حجوزات و Voucher متكامل خفف عننا ضغط كبير في الشغل ووفر وقت الموظفين وأتمت عمليات الواتساب بدقة عالية.",
    quoteEn:
      "Professional, highly organized, and completely trustworthy engineering. Built an integrated booking and encrypted voucher platform that saved immense manual effort and automated our travel sales workflows.",
    src: "/testimonials/abdullah-almulhim.png",
  },
  {
    nameAr: "ابراهيم الملحم",
    nameEn: "Ibrahim Al-Mulhim",
    designationAr: "مالك ورئيس مجلس الإدارة • وكالة الملحم",
    designationEn: "Owner & Chairman • Al-Mulhim Travel Agency",
    quoteAr:
      "مطور مبدع ودايماً بيقدم حلول ممتازة للمشاكل البرمجية المعقدة، مرن جداً في التعامل وبيفهم متطلبات البزنس بسرعة ويسلم شغل متقن.",
    quoteEn:
      "Creative developer who consistently delivers outstanding architectural solutions for complex technical challenges. Highly agile, grasps business needs instantly, and delivers robust systems.",
    src: "/testimonials/ibrahim-almulhim.png",
  },
  {
    nameAr: "معصوم محمود",
    nameEn: "Massoum Mahmoud",
    designationAr: "الرئيس التنفيذي والمالك • شركتي فودورا وسناب فوود (السويد)",
    designationEn: "CEO & Owner • Foodora & Snabbfood Sweden",
    quoteAr:
      "تطبيق مطاعم وشاشات ديجيتال ممتازة وتكامل سلس مع بوابات الدفع السويدية Klarna و Swish. دعم فني واحترافية عالية.",
    quoteEn:
      "Outstanding restaurant POS, live driver tracking, and digital TV menus seamlessly integrated with Swedish Klarna and Swish payment gateways.",
    src: "/testimonials/massoum-mahmoud.png",
  },
  {
    nameAr: "عبدالرحمن سعود",
    nameEn: "Abdulrahman Saud",
    designationAr: "رائد أعمال ومؤسس منصات رقمية • السعودية",
    designationEn: "SaaS Founder & Tech Entrepreneur • Saudi Arabia",
    quoteAr:
      "شغل نظيف ودايماً واثق في النتيجة اللي بيسلمها. التزامه بالجودة والدقة في المعمارية والأداء العالي شيء يُحترم فعلاً.",
    quoteEn:
      "Exceptional build quality with absolute confidence in the deliverables. His dedication to clean architecture, high concurrency, and precision is truly remarkable.",
    src: "/testimonials/abdulrahman-saud.png",
  },
  {
    nameAr: "م. أشرف سالم عبانه",
    nameEn: "Eng. Ashraf Salem Abbaneh",
    designationAr: "مستشار هندسة برمجيات وأنظمة سحابية • الأردن",
    designationEn: "Cloud Systems & Software Architect Consultant • Jordan",
    quoteAr:
      "من أفضل المهندسين المعماريين اللي تعاملت معاهم، يمتلك عقلية تحليلية منظمة وخبرة عميقة في حل المشاكل البرمجية المعقدة وتسليم أنظمة مستقرة.",
    quoteEn:
      "One of the sharpest software architects I have collaborated with. Possesses deep analytical skills, strong technical mastery, and consistently delivers rock-solid stable systems.",
    src: "/testimonials/ashraf-abbaneh.png",
  },
  {
    nameAr: "صلاح",
    nameEn: "Salah",
    designationAr: "شريك مؤسس ومدير منتجات تقنية • فلسطين",
    designationEn: "Co-Founder & Tech Product Lead • Palestine",
    quoteAr:
      "سرعة في الفهم ودقة متناهية في التنفيذ. بنى لنا منظومة متميزة تعمل بكفاءة عالية وبدون أي أعطال. أنصح بالتعامل معه لأي مشروع جاد.",
    quoteEn:
      "Rapid grasp of complex requirements and impeccable implementation precision. Built a stellar, failure-resistant system running smoothly under load.",
    src: "/testimonials/salah-palestine.png",
  },
  {
    nameAr: "عبدالمحسن الرشيد",
    nameEn: "Abdulmohsen Al-Rasheed",
    designationAr: "مالك سلسلة دايت بوكس للوجبات الصحية • السعودية",
    designationEn: "Owner • DietBox Clinical Nutrition Systems • Saudi Arabia",
    quoteAr:
      "إنسان فاهم ومبدع وشغله منظم لأبعد حد. نظام الاشتراكات وتوليد جداول الدايت الـ PDF سرّع عمليات الفروع بشكل كبير.",
    quoteEn:
      "Organized, creative, and highly knowledgeable. The meal subscription engine and automated PDF meal plan generation transformed our branch operations.",
    src: "/testimonials/dietbox-avatar.svg",
  },
  {
    nameAr: "سفر صالح الشهراني",
    nameEn: "Safar Saleh Al-Shahrani",
    designationAr: "مشرف مشاريع التحول الرقمي والحلول الحكومية • السعودية",
    designationEn: "Digital Transformation & GovTech Lead • Saudi Arabia",
    quoteAr:
      "شغل دقيق واحترافي، والتنفيذ سريع بدون أي تعقيدات مالهاش لازمة. مهندس فاهم هو بيعمل إيه كويس وملتزم بالاتفاقات.",
    quoteEn:
      "Precise, deeply professional engineering paired with unmatched execution speed and total transparency across all project phases.",
    src: "/testimonials/shahrani-avatar.svg",
  },
  {
    nameAr: "ثامر ربيع القحطاني",
    nameEn: "Thamer Rabie Al-Qahtani",
    designationAr: "مستثمر ومؤسس مشاريع رقمية • السعودية",
    designationEn: "Digital Ventures Investor & Founder • Saudi Arabia",
    quoteAr:
      "محترف جداً وملتزم بمواعيده، والأهم إن نصايحه في الـ Architecture بتحسّن من أداء النظام وبتقلل من التكاليف على المدى البعيد.",
    quoteEn:
      "A high-caliber developer with deep technical mastery and strict adherence to milestones. His architectural guidance significantly optimizes cloud costs.",
    src: "/testimonials/qahtani-avatar.svg",
  },
  {
    nameAr: "باسل",
    nameEn: "Basel",
    designationAr: "مدير تطوير الأعمال والأنظمة الرقمية • السعودية",
    designationEn: "Business Development & Digital Systems Lead • Saudi Arabia",
    quoteAr:
      "تعامل راقي وشغل عالي الجودة في الوقت المحدد. أظهر كفاءة ممتازة في التعامل مع المتطلبات التقنية الخاصة بالمشروع.",
    quoteEn:
      "Top-tier work delivered right on time. Exceptional ability to tackle bespoke technical constraints with ease and elegance.",
    src: "/testimonials/basel-avatar.svg",
  },
  {
    nameAr: "هاني",
    nameEn: "Hany",
    designationAr: "مؤسس ومنتج تطبيقات موبايل • مصر (2 Apps on Google Play)",
    designationEn: "Mobile Apps Founder & Owner • Egypt (Published on Google Play)",
    quoteAr:
      "مهندس ممتاز، طوّر ورفع لي تطبيقين على متجر Google Play مع الالتزام بكامل معايير الأمان وسياسات جوجل بدون أي مشاكل.",
    quoteEn:
      "Outstanding engineer. Developed and published 2 complete applications to Google Play Store adhering strictly to all security and compliance guidelines.",
    src: "/testimonials/hany-avatar.svg",
  },
  {
    nameAr: "ماركتنج إم",
    nameEn: "Marketing M Agency",
    designationAr: "وكالة تسويق رقمي وحلول برمجية متكاملة",
    designationEn: "Full-Service Digital Marketing & Software Agency",
    quoteAr:
      "شريك تقني موثوق اعتمدنا عليه في تطوير وبرمجة عدة مشاريع لعملائنا بكفاءة وسرعة استثنائية.",
    quoteEn:
      "A trusted technical partner whom we rely on to engineer and deploy robust web platforms for our premier clients with exceptional speed.",
    src: "/testimonials/marketing-m.svg",
  },
];

export function ClientTestimonials() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const formattedTestimonials: Testimonial[] = clientReviews.map((item) => ({
    name: isAr ? item.nameAr : item.nameEn,
    designation: isAr ? item.designationAr : item.designationEn,
    quote: isAr ? item.quoteAr : item.quoteEn,
    src: item.src,
  }));

  return (
    <section id="testimonials" className="relative z-20 w-full bg-[#09090b] text-white border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto py-16 sm:py-28 px-4 sm:px-12">
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfcba9] mb-3 font-medium">
            {isAr ? "ثقة وشهادات حية" : "Verified Client Reviews"}
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white px-2 [text-wrap:balance]">
            {isAr ? "آراء العملاء والشركاء" : "Client & Buyer Reviews"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
            {isAr
              ? "آراء وتقييمات واقعية من مسؤولين تنفيذيين ومؤسسي شركات اعتمدوا على منظوماتنا في قطاعات حيوية."
              : "Real feedback and ratings from enterprise executives, founders, and verified clients."}
          </p>
        </div>

        <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
      </div>
    </section>
  );
}
