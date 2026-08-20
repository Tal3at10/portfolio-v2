"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

interface ClientBrand {
  id: string;
  nameEn: string;
  nameAr: string;
  logo: string | null;
  sinceEn: string;
  sinceAr: string;
  type: "image" | "text";
  width?: number;
  height?: number;
}

const clients: ClientBrand[] = [
  {
    id: "almulhim",
    nameEn: "AlMulhim Travel",
    nameAr: "سفريات الملحم",
    logo: "/logos/almulhim-v2.png",
    sinceEn: "Saudi Arabia · 2025",
    sinceAr: "السعودية · 2025",
    type: "image",
    width: 140,
    height: 60,
  },
  {
    id: "injaz",
    nameEn: "Injaz · MOE KSA",
    nameAr: "إنجاز · وزارة التعليم",
    logo: "/logos/injaz-v2.png",
    sinceEn: "GovTech · 2026",
    sinceAr: "حكومي · 2026",
    type: "image",
    width: 70,
    height: 60,
  },
  {
    id: "alryadh",
    nameEn: "AlRiyadh Therapy",
    nameAr: "مركز الرياض للعلاج",
    logo: "/logos/alryadh-v2.png",
    sinceEn: "HealthTech · 2026",
    sinceAr: "صحي · 2026",
    type: "image",
    width: 140,
    height: 60,
  },
  {
    id: "adminsa",
    nameEn: "Admin.sa · Etimad",
    nameAr: "Admin.sa · اعتماد",
    logo: "/logos/adminsa.svg",
    sinceEn: "GovSaaS · 2025",
    sinceAr: "مناقصات · 2025",
    type: "image",
    width: 120,
    height: 60,
  },
  {
    id: "snabbfood",
    nameEn: "Snabbfood",
    nameAr: "Snabbfood",
    logo: null,
    sinceEn: "Sweden · 2023",
    sinceAr: "السويد · 2023",
    type: "text",
  },
  {
    id: "pronto",
    nameEn: "Pronto Pizzeria",
    nameAr: "برونتو بيتزا",
    logo: "/logos/pronto-v2.png",
    sinceEn: "Sweden · 2023",
    sinceAr: "السويد · 2023",
    type: "image",
    width: 60,
    height: 60,
  },
  {
    id: "venedig",
    nameEn: "Venedig Kolgrill",
    nameAr: "فينيدج كولجريل",
    logo: "/logos/venedig-v2.png",
    sinceEn: "Sweden · 2023",
    sinceAr: "السويد · 2023",
    type: "image",
    width: 60,
    height: 60,
  },
  {
    id: "alibaba",
    nameEn: "Ali Baba Sweden",
    nameAr: "علي بابا السويد",
    logo: "/logos/alibaba-v2.png",
    sinceEn: "Sweden · 2023",
    sinceAr: "السويد · 2023",
    type: "image",
    width: 75,
    height: 60,
  },
  {
    id: "nexgo",
    nameEn: "NexGo SuperApp",
    nameAr: "NexGo سوبرآب",
    logo: "/logos/nexgo.png",
    sinceEn: "Regional · 2024",
    sinceAr: "إقليمي · 2024",
    type: "image",
    width: 130,
    height: 60,
  },
  {
    id: "dietbox",
    nameEn: "DietBox",
    nameAr: "دايت بوكس",
    logo: "/logos/dietbox.png",
    sinceEn: "Saudi Arabia · 2024",
    sinceAr: "السعودية · 2024",
    type: "image",
    width: 130,
    height: 60,
  },
  {
    id: "keylicense",
    nameEn: "KeyLicense Pro",
    nameAr: "كي لايسنس برو",
    logo: "/logos/keylicense.png",
    sinceEn: "Security · 2024",
    sinceAr: "أمن برمجيات · 2024",
    type: "image",
    width: 130,
    height: 60,
  },
  {
    id: "foodpaperte",
    nameEn: "FOODpaperte",
    nameAr: "فود بابيرتي",
    logo: "/logos/foodpaperte.png",
    sinceEn: "B2B · 2024",
    sinceAr: "توريد B2B · 2024",
    type: "image",
    width: 140,
    height: 60,
  },
];

function SnabbfoodFullColorLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="size-8 rounded-lg bg-[#E21B1B] flex items-center justify-center font-black text-white text-base shadow-[0_0_15px_rgba(226,27,27,0.45)]">
        S
      </div>
      <div className="flex items-center text-lg font-black tracking-tight">
        <span className="text-white">Snabb</span>
        <span className="text-[#E21B1B] ml-0.5">Food</span>
      </div>
    </div>
  );
}

export function ClientLogosStrip() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative z-20 w-full bg-[#09090b] border-t border-white/[0.06] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            dir={isAr ? "rtl" : "ltr"}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#dfcba9] mb-2 font-medium"
          >
            {isAr ? "شركاء النجاح والجهات المعتمدة" : "Enterprise & GovTech Ecosystem"}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">
            {isAr
              ? "منظومات معمارية مشغّلة لدى كبرى الشركات والمؤسسات"
              : "Trusted by Leading Operators & Government Entities"}
          </h3>
        </div>

        {/* Luminous Logo Cards Grid */}
        <div
          dir="ltr"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.055] border border-white/[0.05] hover:border-[#dfcba9]/35 backdrop-blur-sm transition-all duration-300 cursor-default hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(223,203,169,0.12)]"
            >
              {/* Soft Ambient Radial Backlight Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(223,203,169,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Logo Presentation Area */}
              <div className="relative z-10 flex items-center justify-center h-14 w-full py-1">
                {client.type === "text" ? (
                  <SnabbfoodFullColorLogo />
                ) : (
                  <Image
                    src={client.logo!}
                    alt={client.nameEn}
                    width={client.width || 120}
                    height={client.height || 60}
                    className="object-contain max-h-12 sm:max-h-14 w-auto select-none pointer-events-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)] group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Entity Name & Tag */}
              <div className="relative z-10 text-center mt-3 pt-2.5 border-t border-white/[0.04] w-full">
                <p className="text-[11px] font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300 truncate">
                  {isAr ? client.nameAr : client.nameEn}
                </p>
                <p className="text-[9px] font-mono text-[#dfcba9]/60 group-hover:text-[#dfcba9] transition-colors duration-300 mt-0.5 font-medium">
                  {isAr ? client.sinceAr : client.sinceEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



