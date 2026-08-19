export interface Package {
  id: string;
  name_ar: string;
  name_en: string;
  tagline_ar: string;
  tagline_en: string;
  price_sar: string;
  price_usd_approx: string;
  duration_ar: string;
  duration_en: string;
  target_audience_ar: string;
  target_audience_en: string;
  reference_project_ar: string;
  reference_project_en: string;
  reference_slug: string;
  featured: boolean;
  deliverables_ar: string[];
  deliverables_en: string[];
  scope_boundary_ar: string[];
  scope_boundary_en: string[];
}

export const packages: Package[] = [
  {
    id: "ai-rag-suite",
    name_ar: "منظومة وكلاء الذكاء الاصطناعي المؤسسي (AI & RAG Suite)",
    name_en: "Enterprise AI Agent & Custom RAG Architecture",
    tagline_ar: "بناء وكلاء أذكياء ومحركات بحث دلالي مدمجة مع الواتساب والأنظمة الداخلية دون هلوسة",
    tagline_en: "Production-grade RAG pipelines, multi-LLM orchestrators & WhatsApp AI automation without hallucinations",
    price_sar: "25,000 – 55,000 ر.س",
    price_usd_approx: "$6,500 – $14,500",
    duration_ar: "4 – 6 أسابيع",
    duration_en: "4 – 6 Weeks",
    target_audience_ar: "وكالات السفر، العيادات، المتاجر الكبرى، والمؤسسات الخدمية الساعية لأتمتة المبيعات والدعم.",
    target_audience_en: "Travel agencies, medical centers, and enterprise services automating 24/7 sales and customer triage.",
    reference_project_ar: "منظومة سفريات الملحم الذكية (AlMulhim Travel AI)",
    reference_project_en: "AlMulhim Travel AI Ecosystem",
    reference_slug: "almulhim-travel",
    featured: true,
    deliverables_ar: [
      "محرك RAG دلالي مخصص لقاعدة بيانات ومعارف العميل (Semantic Search).",
      "موزع Multi-LLM ذكي مع آلية التبديل التلقائي (Gemini, OpenAI, Groq) لتقليص التكلفة بنسبة 60%.",
      "روبوت واتساب وويب ذكي مع نظام التدخل البشري الحقيقي (Human Takeover).",
      "لوحة تحكم وتحليلات متقدمة للمحادثات واكتشاف نقاط انسحاب العملاء (Drop-offs).",
      "تكامل مباشر مع قواعد البيانات وأنظمة الـ CRM وبوابات الدفع الإلكتروني.",
      "شهر دعم فني مجاني ومراقبة مستمرة للأداء بعد الإطلاق."
    ],
    deliverables_en: [
      "Custom semantic RAG retrieval engine on company knowledge bases.",
      "Multi-LLM orchestrator with automatic failover (Gemini, OpenAI, Groq), reducing token costs by 60%.",
      "Interactive WhatsApp and Web AI agent with real-time human takeover dashboard.",
      "Conversation analytics suite for lead scoring and drop-off detection.",
      "Direct API integrations with internal CRM, SQL DBs, and payment gateways.",
      "1 month of complimentary technical support and prompt tuning."
    ],
    scope_boundary_ar: [
      "استضافة الخوادم (يوفرها العميل على VPS/Cloud الخاص به).",
      "تدريب نماذج Foundation Models من الصفر (يتم الاعتماد على نماذج رائدة مع RAG و Fine-Tuning)."
    ],
    scope_boundary_en: [
      "Cloud hosting infrastructure fees (provided by client).",
      "Training foundation LLMs from scratch (leveraging state-of-the-art models with RAG)."
    ]
  },
  {
    id: "govtech-tenders",
    name_ar: "منصة أتمتة المناقصات والخدمات الحكومية (GovTech SaaS)",
    name_en: "Government Tenders & B2B SaaS Automation Suite",
    tagline_ar: "كشط وتصنيف مناقصات منصة اعتماد وتوليد العروض الفنية والمالية بالذكاء الاصطناعي",
    tagline_en: "Automated tender aggregation, AI proposal drafting & predictive bid win analytics",
    price_sar: "30,000 – 70,000 ر.س",
    price_usd_approx: "$8,000 – $18,500",
    duration_ar: "6 – 8 أسابيع",
    duration_en: "6 – 8 Weeks",
    target_audience_ar: "شركات المقاولات والتوريد الحكومي ورواد أعمال منصات الـ B2B SaaS.",
    target_audience_en: "Government contractors, supply chain companies, and B2B SaaS entrepreneurs.",
    reference_project_ar: "منصة إداري لمناقصات اعتماد (admin.sa)",
    reference_project_en: "admin.sa (Etimad Intelligence)",
    reference_slug: "admin-sa",
    featured: true,
    deliverables_ar: [
      "محرك كشط آلي موزع للمناقصات والوثائق مع التجاوز الذكي للحمايات.",
      "توليد كراسات العروض الفنية والمالية بصيغة Word/PDF مطابقة للوائح الحكومية السعودية.",
      "نموذج تعلم آلي (Machine Learning) لتقدير احتمالية الفوز وترجيح الأسعار المنافسة.",
      "بنية SaaS متعددة المستأجرين (Multi-tenant) مع بوابات الدفع والاشتراكات (MyFatoorah, Stripe).",
      "نظام إشعارات فورية عبر الواتساب والتيليجرام فور طرح المناقصات المطابقة.",
      "لوحة تحكم إدارية مركزية للتحليلات وإدارة المشتركين."
    ],
    deliverables_en: [
      "Distributed scraping engine with anti-bot bypass for government procurement portals.",
      "Automated Word/PDF technical proposal generator compliant with Saudi bylaws.",
      "LightGBM predictive machine learning model for bid win probability scoring.",
      "Multi-tenant SaaS engine with subscription billing (MyFatoorah & Stripe).",
      "Real-time WhatsApp & Telegram alerts on new matching tender releases.",
      "Executive analytics and user management dashboard."
    ],
    scope_boundary_ar: [
      "ضمان ثبات حماية المواقع الحكومية الخارجية ضد التغييرات الجذرية.",
      "تقديم استشارات قانونية متخصصة في نزاعات العقود."
    ],
    scope_boundary_en: [
      "Guarantees against external third-party government website structure overhauls.",
      "Legal counsel representation for contract arbitration."
    ]
  },
  {
    id: "super-app-marketplace",
    name_ar: "سوق إلكتروني متعدد البائعين (Super App Marketplace)",
    name_en: "Multi-Vendor Super App & Geospatial Fleet Engine",
    tagline_ar: "منظومة موحدة للتوصيل والمطاعم والتأجير مع 3 تطبيقات Flutter وتتبع لحظي",
    tagline_en: "Unified multi-sector marketplace with 3 synchronized Flutter apps & real-time dispatch",
    price_sar: "40,000 – 80,000 ر.س",
    price_usd_approx: "$10,500 – $21,500",
    duration_ar: "8 – 12 أسبوع",
    duration_en: "8 – 12 Weeks",
    target_audience_ar: "شركات التوصيل، سلاسل التجزئة، ورواد أعمال منصات التجارة الإلكترونية الشاملة.",
    target_audience_en: "On-demand delivery startups, retail conglomerates, and super-app operators.",
    reference_project_ar: "سوق نيكسجو فائق التطبيقات (NexGo Marketplace)",
    reference_project_en: "NexGo Super App Suite",
    reference_slug: "nexgo",
    featured: true,
    deliverables_ar: [
      "3 تطبيقات Flutter متزامنة (تطبيق العميل + تطبيق السائق مع GPS + تطبيق التاجر وطباعة البلوتوث).",
      "موقع ويب عالي الأداء بـ Next.js 15 مهيأ للـ SEO والتسوق السريع.",
      "لوحة تحكم مركزية متطورة بـ Laravel لإدارة الفروع والمناطق الجغرافية (Geofencing).",
      "محرك تتبع لحظي للسائقين عبر WebSockets بتحديث مكاني كل ثانية.",
      "دمج بوابات الدفع والمحافظ الرقمية وتقسيم العمولات الآلي (Split Payments).",
      "دعم ثنائي اللغة (عربي / إنجليزي) وتوافق RTL كامل."
    ],
    deliverables_en: [
      "3 Flutter mobile applications (Customer App, Driver GPS App, Merchant Bluetooth POS App).",
      "High-speed SEO-optimized Next.js 15 customer web storefront.",
      "Laravel central command panel with geofencing and vendor fleet management.",
      "Sub-second WebSocket geospatial driver tracking pipeline.",
      "Digital wallet, multi-gateway checkout, and automated vendor commission splits.",
      "Bilingual AR/EN support with native RTL layout optimization."
    ],
    scope_boundary_ar: [
      "رسوم حسابات المطورين في متجر Apple و Google Play (يوفرها العميل).",
      "شراء أجهزة الطابعات الحرارية أو حواسيب التجار."
    ],
    scope_boundary_en: [
      "Apple Developer & Google Play Console account fees (provided by client).",
      "Physical POS thermal printer hardware procurement."
    ]
  },
  {
    id: "emr-telehealth",
    name_ar: "منظومة السجلات الطبية والعيادة الافتراضية (EMR & Telehealth)",
    name_en: "Enterprise EMR & Encrypted WebRTC Telehealth Platform",
    tagline_ar: "نظام طبي متكامل بـ 7 بوابات تشغيلية وغرف فيديو مشفرة بمعمارية CQRS فائقة الأداء",
    tagline_en: "7-portal HIPAA-ready psychiatric & clinical EMR with browser-native WebRTC video rooms",
    price_sar: "30,000 – 60,000 ر.س",
    price_usd_approx: "$8,000 – $16,000",
    duration_ar: "6 – 8 أسابيع",
    duration_en: "6 – 8 Weeks",
    target_audience_ar: "المستشفيات الخاصة، المراكز العلاجية، المجمعات التخصصية، والعيادات النفسية.",
    target_audience_en: "Private hospitals, psychiatric therapy centers, specialized polyclinics, and wellness institutes.",
    reference_project_ar: "منظومة مركز الرياض للطب النفسي والتعافي",
    reference_project_en: "Al-Riyadh Psychiatric EMR",
    reference_slug: "alryadh-therapy",
    featured: false,
    deliverables_ar: [
      "5 إلى 7 بوابات تشغيلية منفصلة (طبيب، مريض، تمريض، استقبال، إدارة، محاسبة).",
      "عيادة افتراضية مشفرة بالكامل عبر المتصفح (WebRTC) دون الحاجة لتثبيت برامج خارجية.",
      "سجل طبي إلكتروني موحد (EMR) باسترجاع فائق السرعة (< 200ms) عبر نمط CQRS في .NET 9.",
      "نظام جدولة مواعيد آلي وتنبيهات فورية للمرضى عبر SMS والواتساب خفضت التخلف بـ 50%.",
      "إدارة الوصفات الطبية والعلامات الحيوية وسجل التدقيق الأمني (Audit Logs).",
      "شهر دعم فني وتدريب كامل لطاقم المركز الطبي."
    ],
    deliverables_en: [
      "5 to 7 isolated role-based portals (Physician, Patient, Triage, Reception, Admin, Billing).",
      "End-to-end encrypted browser-native WebRTC virtual consultation rooms.",
      "Sub-200ms electronic medical records querying powered by .NET 9 CQRS Clean Architecture.",
      "Automated appointment dispatch and SMS/WhatsApp reminder engine cutting no-shows by 50%.",
      "Clinical prescription generator, vital sign tracker, and HIPAA-compliant audit logs.",
      "1 month of technical warranty and comprehensive hospital staff onboarding."
    ],
    scope_boundary_ar: [
      "رسوم دقائق مكالمات WebRTC السحابية واشتراكات بوابات الرسائل النصية.",
      "الربط مع معايير التأمين الصحي المخصصة خارج نطاق المشروع الأساسي."
    ],
    scope_boundary_en: [
      "Third-party WebRTC telephony and SMS messaging consumption rates.",
      "Custom legacy insurance mainframe integrations outside agreed scope."
    ]
  },
  {
    id: "private-cloud-storage",
    name_ar: "السحابة المؤسسية الخاصة وتطبيق المزامنة المكتبي (Private Cloud & Sync)",
    name_en: "Private Cloud Storage & Native Desktop Sync Ecosystem",
    tagline_ar: "بديل Google Drive المؤسسي بـ ربع التكلفة مع تطبيق Windows أصلي ومزامنة في الخلفية",
    tagline_en: "Self-hosted Google Drive alternative with native Windows sync daemon and chunked 10GB+ uploads",
    price_sar: "20,000 – 45,000 ر.س",
    price_usd_approx: "$5,500 – $12,000",
    duration_ar: "4 – 6 أسابيع",
    duration_en: "4 – 6 Weeks",
    target_audience_ar: "شركات الإنتاج الإعلامي، المكاتب الهندسية، والمؤسسات الحريصة على سيادة وسرية بياناتها.",
    target_audience_en: "Media studios, engineering consultancies, and enterprises requiring 100% data sovereignty.",
    reference_project_ar: "منظومة أوكيه كلاود (Ok.Cloud Ecosystem)",
    reference_project_en: "Ok.Cloud Ecosystem",
    reference_slug: "ok-cloud",
    featured: false,
    deliverables_ar: [
      "منصة ويب سحابية لإدارة ومشاركة ومعاينة ملفات الفيديو والصور والمستندات.",
      "تطبيق Windows Desktop أصلي خفيف (.NET 8 MAUI) يعمل في الـ System Tray لمزامنة المجلدات تلقائياً.",
      "محرك رفع مقسم (Chunked Uploads) يدعم رفع ملفات ضخمة (+10GB) مع استئناف الرفع عند الانقطاع.",
      "دعم التخزين عبر مزودين متعددي السحابة (AWS S3, Wasabi, SFTP, WebDAV) لتوفير 75% من التكلفة.",
      "نظام فهرسة محلي SQLite للعمل بدون إنترنت (Offline-First) وحل تعارض الملفات الذكي.",
      "لوحة تحكم لمدير النظام لإدارة المستخدمين والمساحات التخزينية والصلاحيات."
    ],
    deliverables_en: [
      "Full web cloud portal for file management, secure sharing, and instant media previews.",
      "Native lightweight Windows desktop client (.NET 8 MAUI) residing in the system tray for silent background sync.",
      "Chunked upload engine resiliently transferring 10GB+ video archives with auto-resume on network drop.",
      "Multi-cloud storage abstraction (S3, Wasabi, SFTP, WebDAV), slashing storage bills by 75%.",
      "Local SQLite index for offline-first browsing and intelligent bi-directional conflict resolution.",
      "Enterprise admin hub for user quota allocation, team workspaces, and access control."
    ],
    scope_boundary_ar: [
      "تكلفة سعة التخزين السحابي لمزودي S3 أو الخوادم الخاصة (يدفعها العميل مباشرة).",
      "تطبيق سطح مكتب لنظام macOS (متاح كإضافة منفصلة)."
    ],
    scope_boundary_en: [
      "Cloud storage provider byte capacity charges (paid directly by client to AWS/Wasabi).",
      "macOS desktop client build (available as a modular add-on)."
    ]
  }
];
