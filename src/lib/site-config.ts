// ─── TAM Systems — Centralized Site Configuration ────────────────────────────
// Single source of truth for all contact data, social links, and brand info.
// Import from here everywhere instead of hardcoding values in components.

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────────────────────
  brandAr: "تَـمّ للأنظمة",
  brandEn: "TAM Systems",
  sloganAr: "أنظمة تُنجز.. ورؤى تكتمل.",
  sloganEn: "Systems Delivered. Vision Realized.",
  domain: "https://tam-systems.com",

  // ── Contact ────────────────────────────────────────────────────────────────
  // OFFICIAL WhatsApp number — use this everywhere
  whatsapp: "+201108745372",
  whatsappUrl: "https://wa.me/201108745372",
  email: "tamsystems.agency@gmail.com",
  emailUrl: "mailto:tamsystems.agency@gmail.com",
  phone: "+201108745372",
  phoneUrl: "tel:+201108745372",

  // ── Booking ────────────────────────────────────────────────────────────────
  calendlyUrl: "https://calendly.com/mahmoud-talaat-dev/30min",

  // ── Social ─────────────────────────────────────────────────────────────────
  linkedin: "https://www.linkedin.com/in/mahmoud-talaat-9a2487295/",
  github: "https://github.com/Tal3at10",

  // ── WhatsApp pre-filled messages ───────────────────────────────────────────
  whatsappMessages: {
    consultationAr:
      "مرحباً، أود حجز استشارة تقنية معمارية لمشروعنا مع مهندس محمود طلعت.",
    consultationEn:
      "Hello, I'd like to schedule an architecture consultation for our system.",
    projectDiscussionAr: "مرحباً، أود مناقشة مشروع برمجي مع فريق تَـمّ للأنظمة.",
    projectDiscussionEn:
      "Hello, I'd like to discuss a software system project with TAM Systems.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
