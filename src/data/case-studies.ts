export interface Metric {
  label_ar: string;
  label_en: string;
  value: string;
  description_ar?: string;
  description_en?: string;
}

export interface Decision {
  decision_ar: string;
  decision_en: string;
  reason_ar: string;
  reason_en: string;
  tradeoff_ar: string;
  tradeoff_en: string;
}

export interface BeforeAfterRow {
  metric_ar: string;
  metric_en: string;
  before_ar: string;
  before_en: string;
  after_ar: string;
  after_en: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  client_ar: string;
  client_en: string;
  category_ar: string;
  category_en: string;
  duration_ar: string;
  duration_en: string;
  complexity: string;
  hero_image: string;
  problem_ar: string;
  problem_en: string;
  challenge_points_ar: string[];
  challenge_points_en: string[];
  solution_ar: string;
  solution_en: string;
  architecture_flow: string[];
  decisions: Decision[];
  metrics: Metric[];
  before_after: BeforeAfterRow[];
  lessons_ar: string;
  lessons_en: string;
  tech_stack: string[];
  live_url?: string;
  additional_links?: { label_ar: string; label_en: string; url: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "almulhim-travel",
    slug: "almulhim-travel",
    live_url: "https://almulhimtravel.com/",
    additional_links: [
      {
            "label_ar": "لوحة التحكم الإدارية",
            "label_en": "Admin Dashboard",
            "url": "https://almulhimtravel.com/admin/"
      },
      {
            "label_ar": "منظومة VoucherPro B2B",
            "label_en": "VoucherPro B2B",
            "url": "https://voucher.almulhimtravel.com/"
      }
],
    title_ar: "سفريات الملحم — منصة الحجوزات وأتمتة أنظمة GDS",
    title_en: "AlMulhim Travel — Global Booking Engine & GDS Suite",
    client_ar: "وكالة سفريات الملحم (40+ موظف) • السعودية",
    client_en: "AlMulhim Travel Agency (40+ Staff) • Saudi Arabia",
    category_ar: "منصات السفر وأنظمة GDS",
    category_en: "TravelTech & GDS Automation",
    duration_ar: "8 أشهر",
    duration_en: "8 Months",
    complexity: "Tier-1 Enterprise",
    hero_image: "/projects/almulhim-travel/main website.png",
    problem_ar: "وكالة سفر كبرى (40+ موظف) كانت تفقد نحو 35% من حجوزات الواتساب بسبب الرد اليدوي وتشتت الموظفين بين شاشات وأنظمة منفصلة (Amadeus و Duffel و RateHawk). قمنا ببناء Core موحد بتقنية .NET 8 يربط أنظمة الطيران والفنادق، ويصدر القسائم المشفرة آلياً في ثوانٍ مع بوت مبيعات ذكي.",
    problem_en: "A premier travel agency with 40+ staff was losing ~35% of inbound WhatsApp leads due to delayed manual responses and fragmented GDS operations. Engineered a unified .NET 8 Core connecting flight/hotel APIs, automated encrypted PDF vouchers, and an intelligent WhatsApp sales bot.",
    challenge_points_ar: [
      "فقدان مبيعات مباشر بسبب تأخر الرد اليدوي على آلاف استفسارات الواتساب اليومية.",
      "تشتت فريق المبيعات بين شاشات وأنظمة GDS متعددة لكل حجز طيران وفنادق.",
      "استغراق إصدار عروض الأسعار والقسائم المشفرة 45 دقيقة لكل عميل.",
      "الحاجة لنظام فواتير وتقسيط متوافق مع بوابات الدفع (تابي وتمارا)."
    ],
    challenge_points_en: [
      "Direct revenue loss from slow response to thousands of inbound WhatsApp inquiries.",
      "Sales staff fragmented across disparate airline and hotel GDS consoles.",
      "Manual voucher and quote preparation taking over 45 minutes per customer.",
      "Need for automated PDF vouchers and installment payment gateways (Tabby/Tamara)."
    ],
    solution_ar: "بناء معمارية مركزية من 10 أنظمة فرعية: منصة حجز B2C، لوحة تحكم حية عبر SignalR، محرك ذكاء اصطناعي يعتمد على Vector DB للرد الفوري على استفسارات السفر، ومحرك QuestPDF لإصدار القسائم المشفرة بـ QR Code في 10 ثوانٍ.",
    solution_en: "Engineered a 10-subsystem ecosystem: unified B2C booking portal, SignalR real-time agent dashboard, RAG AI assistant for sub-50ms travel query matching, and an automated QuestPDF engine generating encrypted QR vouchers in 10 seconds.",
    architecture_flow: [
      "React 19 Frontend → .NET 8 Clean Architecture API → SQL Server",
      "WhatsApp Cloud API → SHA256 HMAC Validator → Debounce Lock → Intent Classifier",
      "Semantic Search (In-Memory Vector DB) → Gemini Multi-LLM Failover Engine",
      "Dynamic PDF Pipeline (QuestPDF) → Encrypted QR Code → Automated Customer Delivery"
    ],
    decisions: [
      {
        decision_ar: "اعتماد Multi-LLM Orchestrator مع التبديل التلقائي",
        decision_en: "Adopted Multi-LLM Orchestration with Auto-Failover",
        reason_ar: "ضمان استمرارية عمل بوت الواتساب 24/7 حتى لو تعطل أحد المزودين.",
        reason_en: "Guaranteed 24/7 bot availability even if one AI provider throttles.",
        tradeoff_ar: "إدارة تعقيد إضافي في طبقة الـ Fallback.",
        tradeoff_en: "Higher architectural complexity in fallback logic."
      },
      {
        decision_ar: "استخدام In-Memory Vector DB للبحث الدلالي",
        decision_en: "Built an In-Memory Vector Database for RAG",
        reason_ar: "سرعة استجابة فائقة (< 50ms) لاسترجاع باقات السفر.",
        reason_en: "Ultra-fast (<50ms) semantic search retrieval for 80+ packages.",
        tradeoff_ar: "استهلاك جزء أكبر من ذاكرة الخادم (RAM).",
        tradeoff_en: "Higher memory allocation on backend instances."
      }
    ],
    metrics: [
      { label_ar: "حجز شهري مؤكد", label_en: "Monthly Bookings", value: "1,200+" },
      { label_ar: "محادثة تمت أتمتتها", label_en: "Automated Chats", value: "4,000+" },
      { label_ar: "زمن إصدار الفاوتشر", label_en: "Voucher Issue Time", value: "< 10s" },
      { label_ar: "استقرار الخوادم", label_en: "System Uptime", value: "99.4%" }
    ],
    before_after: [
      {
        metric_ar: "زمن الرد على العميل",
        metric_en: "Client Response Time",
        before_ar: "15 - 30 دقيقة (يدوي)",
        before_en: "15 - 30 mins (Manual)",
        after_ar: "فوري لحظي (< 2 ثانية)",
        after_en: "Instant < 2s (24/7)"
      },
      {
        metric_ar: "إصدار عرض السعر والفاوتشر",
        metric_en: "Voucher & Quote Issuance",
        before_ar: "45 دقيقة يدوياً",
        before_en: "45 mins manually",
        after_ar: "10 ثوانٍ آلياً",
        after_en: "10 seconds automated"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لاعتمدت معمارية Event-Driven مع RabbitMQ من اليوم الأول لتقليل الترابط المباشر بين الأنظمة وتسهيل ربط مزودي GDS جدد مستقبلاً.",
    lessons_en: "If rebuilt, I would implement an Event-Driven architecture with RabbitMQ from day one to decouple subsystems and simplify onboarding future GDS providers.",
    tech_stack: ["React 19", ".NET 8", "SQL Server", "SignalR", "Gemini Multi-LLM", "Vector DB", "QuestPDF", "Tailwind CSS v4"]
  },
  {
    id: "admin-sa",
    slug: "admin-sa",
    live_url: "https://admin.sa/",
    additional_links: [
      {
            "label_ar": "لوحة الإدارة والمناقصات",
            "label_en": "Admin Control Center",
            "url": "https://admin.sa/admin/"
      }
],
    title_ar: "منصة إداري (admin.sa) — ذكاء مناقصات منصة اعتماد",
    title_en: "Etimad Intelligence (admin.sa) — GovTech Tender SaaS",
    client_ar: "شركات المقاولات والتوريد الحكومي • السعودية",
    client_en: "B2B Gov Contractors & Suppliers • Saudi Arabia",
    category_ar: "برمجيات تطبيقات SaaS والـ GovTech",
    category_en: "GovTech & B2B SaaS",
    duration_ar: "6 أشهر",
    duration_en: "6 Months",
    complexity: "Critical / Distributed Batch",
    hero_image: "/projects/admin.sa/main website hero slide.png",
    problem_ar: "تستغرق شركات المقاولات نحو 14 يوماً لدراسة كراسات الشروط الحكومية الضخمة (300+ صفحة) وصياغة العروض الفنية والمالية. قمنا ببناء منصة SaaS ذكية تكشط وتفهرس المناقصات يومياً، وتولد مسودة العروض الفنية المطابقة للمواصفات تلقائياً وتتنبأ باحتمالية الفوز.",
    problem_en: "B2B contractors spent ~14 days manually reviewing 300+ page government tender books and drafting proposals. Engineered a distributed SaaS platform scraping daily tenders from Etimad, generating compliant Word proposals automatically, and predicting bid win probabilities.",
    challenge_points_ar: [
      "كشط وفهرسة آلاف المناقصات الحكومية المطروحة يومياً على منصة اعتماد بدقة لحظية.",
      "توليد مستندات Word رسمية متوافقة حرفياً مع اللوائح والاشتراطات الحكومية.",
      "التنبؤ باحتمالية فوز العرض بناءً على أسعار المنافسين التاريخية.",
      "أتمتة الفواتير والاشتراكات المتكررة عبر بوابات الدفع المحلية (MyFatoorah)."
    ],
    challenge_points_en: [
      "Real-time scraping and indexing of thousands of daily government tenders.",
      "Generating compliant Word/PDF proposals formatted strictly to Saudi government standards.",
      "Predicting bid win probability using historical competitor pricing datasets.",
      "Managing recurring SaaS subscriptions and automated WhatsApp tender alerts."
    ],
    solution_ar: "بناء منصة سحابية تجمع بين الكشط الآلي المتجاوز للحمايات، ونظام Celery + Gemini Batch لمعالجة الكراسات الضخمة في الخلفية، ونموذج LightGBM للتنبؤ باحتمالية الفوز، مع بوت واتساب للإشعارات الفورية.",
    solution_en: "Engineered a distributed SaaS platform combining anti-detect scrapers, an async Celery + Gemini Batch pipeline for document analysis, a LightGBM ML model for win probability scoring, and an interactive WhatsApp notification bot.",
    architecture_flow: [
      "Playwright + curl-cffi Scraper → Django 4.2 API → PostgreSQL",
      "Celery Distributed Workers ← Redis ← Gemini Batch API (300+ Page Analysis)",
      "LightGBM Predictive Model → Win Probability Score & Benchmark Pricing",
      "Evolution API / Meta WhatsApp → Real-Time Alerts & MyFatoorah Invoicing"
    ],
    decisions: [
      {
        decision_ar: "استخدام Celery + Gemini Batch API للمعالجة في الخلفية",
        decision_en: "Leveraged Celery + Gemini Batch API for async processing",
        reason_ar: "تجنب حجب واجهة المستخدم أثناء توليد مستندات معقدة تستغرق دقائق.",
        reason_en: "Prevented UI blocking when crunching massive PDFs and drafting Word proposals.",
        tradeoff_ar: "إدارة بنية تحتية إضافية لـ Redis و Celery Workers.",
        tradeoff_en: "Infrastructure overhead maintaining Redis queues and worker pools."
      },
      {
        decision_ar: "اختيار خوارزمية LightGBM للتنبؤ",
        decision_en: "Selected LightGBM for Tender Win Prediction",
        reason_ar: "كفاءة ودقة عالية وسرعة استدلال فائقة مع البيانات المجدولة التاريخية.",
        reason_en: "Exceptional speed, low latency, and superior accuracy on tabular historical bidding data.",
        tradeoff_ar: "حاجة لإعادة تدريب دورية مع تغير سلوكيات المناقصات.",
        tradeoff_en: "Requires periodic pipeline retraining as procurement behaviors shift."
      }
    ],
    metrics: [
      { label_ar: "توفير وقت إعداد العرض", label_en: "Proposal Prep Reduction", value: "90%" },
      { label_ar: "مناقصة مفهرسة يومياً", label_en: "Daily Scraped Tenders", value: "10,000+" },
      { label_ar: "دقة نموذج التنبؤ بالفوز", label_en: "Win Prediction Accuracy", value: "85%+" },
      { label_ar: "ساعات عمل موفرة أسبوعياً", label_en: "Saved Weekly Staff Hours", value: "40+ ساعة" }
    ],
    before_after: [
      {
        metric_ar: "زمن صياغة العرض الفني",
        metric_en: "Proposal Drafting Time",
        before_ar: "14 يوماً مع فريق كامل",
        before_en: "14 days with entire team",
        after_ar: "4 ساعات فقط لموظف واحد",
        after_en: "4 hours by a single operator"
      },
      {
        metric_ar: "اكتشاف المناقصات المناسبة",
        metric_en: "Opportunity Discovery",
        before_ar: "بحث يدوي يفوت الفرص",
        before_en: "Manual daily portal search",
        after_ar: "تنبيه واتساب فوري مخصص",
        after_en: "Instant tailored WhatsApp alert"
      }
    ],
    lessons_ar: "لو أعدت المشروع لأضفت محرر مستندات ويب مدمج يتيح لعدة مهندسين تعديل مسودة العرض الناتجة عن الذكاء الاصطناعي في نفس اللحظة قبل التصدير النهائي.",
    lessons_en: "If rebuilt, I would incorporate a real-time collaborative editor allowing multi-user adjustments to the AI proposal directly inside the browser.",
    tech_stack: ["Python Django", "PostgreSQL", "Celery", "Redis", "Google Gemini Batch", "LightGBM", ".NET 9", "React 19"]
  },
  {
    id: "alryadh-therapy",
    slug: "alryadh-therapy",
    title_ar: "منظومة مركز الرياض للعلاج النفسي والعيادة الافتراضية (EMR)",
    title_en: "Al-Riyadh Psychiatric EMR & Telehealth Suite",
    client_ar: "مركز الرياض المتخصص للطب النفسي والتعافي — السعودية",
    client_en: "Al-Riyadh Psychiatric & Recovery Medical Center — Saudi Arabia",
    category_ar: "تكنولوجيا الرعاية الصحية والسجلات الطبية",
    category_en: "HealthTech & Telehealth",
    duration_ar: "5 أشهر",
    duration_en: "5 Months",
    complexity: "Medical Grade / CQRS",
    hero_image: "/projects/alryadh-therapy/emr-dashboard.png",
    problem_ar: "حاجة المركز لنظام سجلات طبية إلكترونية (EMR) مخصص لعلاج الإدمان والطب النفسي مع عيادة افتراضية مشفرة بدون برامج خارجية (مثل Zoom)، وفصل كامل للصلاحيات عبر 7 بوابات تشغيلية مع ضمان استرجاع السجلات في أقل من 200ms.",
    problem_en: "The specialized clinic required a dedicated psychiatric & addiction EMR with integrated HIPAA-compliant video consultations (no third-party apps like Zoom), 7 role-isolated portals, and sub-200ms medical chart retrieval.",
    challenge_points_ar: [
      "سرية البيانات الطبية والامتثال الصارم للخصوصية الصحية.",
      "تنسيق سير العمل بين 7 فئات (طبيب، مريض، تمريض، استقبال، محاسبة، سجلات، إدارة).",
      "جلسات علاج افتراضية عبر المتصفح مباشرة بجودة عالية وتشفير تام.",
      "أداء فائق واستجابة لحظية للسجلات وقوائم الانتظار."
    ],
    challenge_points_en: [
      "Strict medical data privacy and audit compliance.",
      "Coordinating workflows across 7 distinct user roles seamlessly.",
      "High-definition, browser-native encrypted telemedicine video rooms.",
      "Instantaneous medical record querying under concurrent clinic load."
    ],
    solution_ar: "تطوير منظومة Clean Architecture متكاملة تعتمد على نمط CQRS عبر MediatR في .NET 9، ودمج Daily.co WebRTC للاتصال المرئي المشفر، و SignalR للإشعارات الطبية الفورية، مع واجهة أمامية عصرية بـ React 19.",
    solution_en: "Architected a Clean Architecture backend implementing CQRS via MediatR on .NET 9, integrating Daily.co WebRTC for zero-install telemedicine, SignalR for live triage alerts, and React 19 on the frontend.",
    architecture_flow: [
      "React 19 + HeroUI + Zustand → .NET 9 Web API (MediatR CQRS)",
      "SQL Server (Optimized Read/Write Split) + EF Core 9",
      "Daily.co WebRTC Encrypted Video Rooms (Token-Protected)",
      "SignalR Hub (Real-Time Triage) + Hangfire Background Task Dispatcher"
    ],
    decisions: [
      {
        decision_ar: "تطبيق نمط CQRS مع MediatR في .NET 9",
        decision_en: "Implemented CQRS with MediatR in .NET 9",
        reason_ar: "فصل استعلامات قراءة السجلات الطبية المعقدة عن عمليات الكتابة لضمان أداء قياسي وعدم تعارض البيانات.",
        reason_en: "Separated heavy read queries from clinical state updates, ensuring blazing speed and zero concurrency collisions.",
        tradeoff_ar: "كتابة شيفرات إضافية (Boilerplate) لهيكلة الأوامر والاستعلامات.",
        tradeoff_en: "Increased initial boilerplate code for commands and query handlers."
      },
      {
        decision_ar: "الاعتماد على Daily.co كمنصة WebRTC مخصصة",
        decision_en: "Integrated Daily.co WebRTC Infrastructure",
        reason_ar: "توفير غرف فيديو مشفرة تعمل داخل المتصفح بدون تثبيت برامج مع دعم التسجيل السحابي الآمن.",
        reason_en: "Provided browser-native, encrypted video rooms with zero patient installation friction.",
        tradeoff_ar: "تكلفة اشتراك شهري تعتمد على عدد دقائق المكالمات.",
        tradeoff_en: "Variable monthly SaaS consumption fees based on consultation minutes."
      }
    ],
    metrics: [
      { label_ar: "بوابات تشغيلية مستقلة", label_en: "Isolated Portals", value: "7 بوابات" },
      { label_ar: "سرعة استرجاع السجل الطبي", label_en: "Record Retrieval Speed", value: "< 200ms" },
      { label_ar: "تشفير وأمان الجلسات", label_en: "Encrypted Sessions", value: "100%" },
      { label_ar: "التحول الرقمي الكامل", label_en: "Paperless Operation", value: "100%" }
    ],
    before_after: [
      {
        metric_ar: "إدارة السجلات والملفات",
        metric_en: "Patient Record Management",
        before_ar: "ملفات ورقية بطيئة وعرضة للضياع",
        before_en: "Paper records, prone to loss",
        after_ar: "سجل رقمي مشفر قابل للبحث الفوري",
        after_en: "Searchable, encrypted digital chart"
      },
      {
        metric_ar: "الاستشارات عن بعد",
        metric_en: "Remote Consultations",
        before_ar: "غير متوفرة أو عبر تطبيقات غير آمنة",
        before_en: "Unavailable / Unsecure apps",
        after_ar: "عيادة افتراضية مدمجة بضغطة زر",
        after_en: "One-click secure WebRTC clinic"
      },
      {
        metric_ar: "تنبيهات المواعيد والجرعات",
        metric_en: "Reminders & Triage",
        before_ar: "اتصالات يدوية تسبب تخلف المرضى",
        before_en: "Manual calls, high no-show rate",
        after_ar: "إشعارات آلية فورية خفضت الغياب بـ 50%",
        after_en: "Automated alerts cut no-shows by 50%"
      }
    ],
    lessons_ar: "لو أعدت بناء المنظومة لأضفت دعماً لمعايير HL7/FHIR العالمية من مرحلة التخطيط لتمكين الربط السريع مع منصات التأمين الصحي والمستشفيات الحكومية.",
    lessons_en: "If rebuilt, I would implement native HL7/FHIR standards early on to simplify future interoperability with national health networks and insurance platforms.",
    tech_stack: ["React 19", ".NET 9", "MediatR CQRS", "Daily.co WebRTC", "SignalR", "SQL Server", "Hangfire", "Zustand"]
  },
  {
    id: "ok-cloud",
    slug: "ok-cloud",
    live_url: "https://cloud.oksite.se/",
    title_ar: "منظومة التخزين السحابي والمزامنة المكتبية (Ok.Cloud)",
    title_en: "Ok.Cloud Enterprise Storage & Native Desktop Sync Client",
    client_ar: "شركات الإنتاج الرقمي ومزودو الحلول السحابية الخاصة",
    client_en: "Digital Media Studios & Private Cloud Service Providers",
    category_ar: "البنية السحابية وتطبيقات سطح المكتب",
    category_en: "Cloud Infrastructure & Native Desktop",
    duration_ar: "6 أشهر",
    duration_en: "6 Months",
    complexity: "High / File System I/O",
    hero_image: "/projects/ok.cloud/Screenshot 2025-12-15 221828.png",
    problem_ar: "ارتفاع تكاليف Google Drive و Dropbox على الشركات التي تدير ملفات فيديو ضخمة (+10GB)، والحاجة لحل تخزين سحابي خاص يتيح اختيار مزودي التخزين الأرخص (S3, SFTP, WebDAV) مع تطبيق مكتبي يزامن الملفات تلقائياً في الخلفية ويعمل بدون إنترنت (Offline-First).",
    problem_en: "Skyrocketing storage bills on Google Drive/Dropbox for media agencies handling massive (+10GB) files, needing a private multi-cloud storage platform with a native background sync client and robust offline-first caching.",
    challenge_points_ar: [
      "رفع وتنزيل ملفات فيديو وأصول ضخمة (+10GB) بدون انقطاع أو Timeout.",
      "مزامنة مكتبية فائقة الخفة لا تستهلك موارد المعالج مثل تطبيقات Electron.",
      "دعم التخزين عبر مزودين متعددين (S3-Compatible, Wasabi, SFTP, WebDAV).",
      "حل تعارض تعديل الملفات بين المتصفح وسطح المكتب بذكاء (Conflict Resolution)."
    ],
    challenge_points_en: [
      "Resilient chunked uploading and downloading for 10GB+ video archives.",
      "Ultra-lightweight native desktop sync avoiding Electron's heavy memory bloat.",
      "Multi-cloud storage abstraction (S3, Wasabi, SFTP, WebDAV).",
      "Smart bi-directional file conflict resolution between web and local folders."
    ],
    solution_ar: "بناء منصة ويب بـ Laravel 12 و React 19 مع تطبيق سطح مكتب أصلي لنظام Windows مبني بتقنية .NET 8 MAUI يعتمد على FileSystemWatcher وقاعدة بيانات SQLite محلية، ومحرك رفع مقسم (Chunked Uploads).",
    solution_en: "Delivered a full-stack private cloud ecosystem: Laravel 12 + React 19 web suite, coupled with a high-performance native .NET 8 Windows sync daemon utilizing FileSystemWatcher, chunked upload streams, and local SQLite offline indexing.",
    architecture_flow: [
      "React 19 Web App → Laravel 12 REST API → Multi-Cloud Drivers (S3/SFTP)",
      "Native Windows Client (.NET 8 MAUI) → System Tray Daemon → FileSystemWatcher",
      "Chunked Upload Pipeline (10MB Slices with Hash Verification)",
      "Local SQLite Metadata Engine ↔ Background Sync Bi-directional Reconciliation"
    ],
    decisions: [
      {
        decision_ar: "تطوير تطبيق سطح المكتب بتقنية .NET 8 MAUI بدلاً من Electron",
        decision_en: "Built Native Desktop Sync using .NET 8 MAUI over Electron",
        reason_ar: "توفير استهلاك الذاكرة (أقل من 40MB RAM) والتكامل العميق مع Windows File System.",
        reason_en: "Achieved ultra-low memory footprint (<40MB RAM) and direct kernel-level file I/O integration.",
        tradeoff_ar: "التركيز على بيئة Windows أولاً وتأجيل دعم macOS/Linux.",
        tradeoff_en: "Initial scope dedicated to Windows, deferring cross-platform macOS/Linux desktop releases."
      },
      {
        decision_ar: "تصميم طبقة تخزين مستقلة (Storage Agnostic Architecture)",
        decision_en: "Engineered a Universal Storage Abstraction Layer",
        reason_ar: "تمكين الشركات من ربط خوادمها الخاصة أو أي مزود S3 رخيص التكلفة لتقليص النفقات بـ 75%.",
        reason_en: "Allowed clients to plug in cheap S3-compatible providers (Wasabi, MinIO, SFTP), slashing storage costs by 75%.",
        tradeoff_ar: "بناء Drivers مخصصة لكل بروتوكول تخزين.",
        tradeoff_en: "Added complexity maintaining unified abstraction drivers across diverse protocols."
      }
    ],
    metrics: [
      { label_ar: "حجم الملفات المرفوعة", label_en: "Chunked File Uploads", value: "10GB+" },
      { label_ar: "سرعة اكتشاف التعديل", label_en: "File Change Latency", value: "< 200ms" },
      { label_ar: "توفير تكلفة التخزين", label_en: "Storage Cost Savings", value: "75%" },
      { label_ar: "موثوقية العمل بدون إنترنت", label_en: "Offline Sync Reliability", value: "100%" }
    ],
    before_after: [
      {
        metric_ar: "تكلفة التخزين السحابي",
        metric_en: "Monthly Cloud Bill",
        before_ar: "آلاف الدولارات على اشتراكات Google Drive",
        before_en: "Thousands on Google Drive / Dropbox",
        after_ar: "تخفيض 75% مع تحكم كامل بالبيانات",
        after_en: "75% cost reduction with data sovereignty"
      },
      {
        metric_ar: "مزامنة سطح المكتب",
        metric_en: "Desktop Synchronization",
        before_ar: "رفع يدوي بطيء وانقطاع متكرر",
        before_en: "Manual web uploads, frequent timeouts",
        after_ar: "مزامنة تلقائية في الخلفية بدون تدخّل",
        after_en: "Zero-touch silent background sync"
      },
      {
        metric_ar: "العمل بدون اتصال",
        metric_en: "Offline Access",
        before_ar: "لا يمكن استعراض الملفات بدون إنترنت",
        before_en: "Zero offline access or search",
        after_ar: "فهرس محلي SQLite يتيح الوصول الفوري",
        after_en: "Instant local SQLite cache access"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لطبقت خوارزمية Block-Level Delta Sync (مثل rsync) لمزامنة البايتات المعدلة فقط داخل الملفات الضخمة بدلاً من رفع الملف بالكامل عند التعديل البسيط.",
    lessons_en: "If rebuilt, I would implement Block-level Delta Sync (rsync algorithm) to synchronize only modified byte chunks inside huge files rather than re-uploading the entire file on minor edits.",
    tech_stack: ["Laravel 12", "React 19", ".NET 8 MAUI", "SQLite", "AWS S3", "FileSystemWatcher", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "injaz",
    slug: "injaz",
    title_ar: "منصة إنجاز الوطنية — اعتماد وتدقيق 990+ مدرسة حكومية",
    title_en: "Injaz National School Accreditation Platform — 990+ Schools",
    client_ar: "مديرية التعليم بالمنطقة الشرقية (الأحساء) — المملكة العربية السعودية",
    client_en: "Ministry of Education - Eastern Province (Al-Ahsa) — Saudi Arabia",
    category_ar: "تكنولوجيا التعليم والامتثال الحكومي",
    category_en: "EdTech & Gov Compliance",
    duration_ar: "4 أشهر",
    duration_en: "4 Months",
    complexity: "Medium-High / Serverless",
    hero_image: "/projects/injaz/school-portal.png",
    problem_ar: "كانت مديرية التعليم تواجه كابوساً إدارياً سنوياً يتمثل في جمع وفحص الشواهد الورقية والرقمية لـ 990 مدرسة عبر لجان تفتيش يدوية تستغرق 6 أشهر، مع انهيار خوادم البريد والملفات وتكرار الأخطاء البشرية في احتساب درجات الاعتماد.",
    problem_en: "The education directorate faced an administrative bottleneck annually collecting, auditing, and grading accreditation evidence for 990 schools across manual committees lasting 6 months, suffering server crashes and human scoring errors.",
    challenge_points_ar: [
      "استيعاب رفع 25,000+ ملف وشاهد عالي الحجم في نفس الفترة دون توقف الخوادم.",
      "عمل المنصة بسلاسة على أجهزة المدارس القديمة وضعيفة المواصفات.",
      "فصل صلاحيات التحكيم والتدقيق اللحظي لـ 8 معايير اعتماد وطنية.",
      "توليد بطاقات الاعتماد والتقارير الإحصائية الفورية القابلة للطباعة الرسمية."
    ],
    challenge_points_en: [
      "Ingesting 25,000+ heavy documents concurrently with zero server crashes.",
      "Ensuring lightweight browser rendering on outdated school computer labs.",
      "Strict role segregation for arbitrators across 8 national quality standards.",
      "Instant generation of certified accreditation scorecards and statistical summaries."
    ],
    solution_ar: "تصميم بنية تحتية Serverless تعتمد على Azure Functions و Azure Blob Storage مع تقنية Direct-to-Cloud SAS Tokens، وقاعدة بيانات Supabase PostgreSQL سريعة، مع واجهة مستخدم بالـ Vanilla JS لضمان أعلى سرعة ممكنة على أضعف الحواسيب.",
    solution_en: "Engineered a resilient Serverless architecture utilizing .NET 8 Azure Functions and Azure Blob Storage via direct SAS Token uploads, Supabase PostgreSQL, and an ultra-lightweight Vanilla JS frontend for maximum compatibility.",
    architecture_flow: [
      "Lightweight Vanilla JS / CSS3 RTL → Azure Functions (.NET 8 Microservices)",
      "Secure SAS Token Generation → Direct Multi-Part Upload to Azure Blob Storage",
      "Supabase (PostgreSQL with Row Level Security) Real-Time Audit Engine",
      "Automated Report Generation (Python + QuestPDF) → Official Sealed Certificates"
    ],
    decisions: [
      {
        decision_ar: "استخدام تقنية SAS Tokens للرفع المباشر إلى Azure Blob",
        decision_en: "Adopted SAS Token Direct-to-Cloud Uploads",
        reason_ar: "تفريغ خوادم التطبيق بالكامل من عبء نقل الملفات الثقيلة، مما منع انهيار الخادم أثناء فترات الذروة.",
        reason_en: "Completely bypassed application servers for file payload transport, eliminating server crashes during peak submission windows.",
        tradeoff_ar: "إدارة أمان دقيقة لأوقات انتهاء صلاحية الرموز (Token TTL).",
        tradeoff_en: "Strict validation requirements for token lifetime and payload limits."
      },
      {
        decision_ar: "بناء واجهة المستخدم بـ Vanilla JS خالية من المكتبات الثقيلة",
        decision_en: "Engineered a Zero-Framework Vanilla JS Frontend",
        reason_ar: "ضمان تحميل الصفحة في أقل من نصف ثانية على أجهزة المدارس الحكومية القديمة.",
        reason_en: "Guaranteed sub-second page loads on legacy hardware across remote school labs.",
        tradeoff_ar: "بناء عناصر الواجهة وتفاعل الـ DOM يدوياً بدون إطار عمل.",
        tradeoff_en: "Manual DOM manipulation without component state frameworks."
      }
    ],
    metrics: [
      { label_ar: "مدرسة تم اعتمادها وتدقيقها", label_en: "Audited Schools", value: "990+ مدرسة" },
      { label_ar: "وثيقة وشاهد تم فرزها بنجاح", label_en: "Processed Evidences", value: "25,000+" },
      { label_ar: "نسبة توقف الخادم (Downtime)", label_en: "System Downtime", value: "0% (استقرار تام)" },
      { label_ar: "تقليص فترة التحكيم والفرز", label_en: "Arbitration Window", value: "من 6 أشهر → 5 أيام" }
    ],
    before_after: [
      {
        metric_ar: "فترة التحكيم والفرز",
        metric_en: "Audit & Evaluation Cycle",
        before_ar: "6 أشهر ولجان ميدانية شاقة",
        before_en: "6 months of exhausting site visits",
        after_ar: "5 أيام فقط ومراجعة لحظية مؤتمتة",
        after_en: "5 days with real-time automated scoring"
      },
      {
        metric_ar: "استقرار الخوادم أثناء الرفع",
        metric_en: "Server Stability",
        before_ar: "انهيار الخوادم وتأخر المدارس",
        before_en: "Frequent crashes and upload failures",
        after_ar: "100% نجاح الرفع عبر السحابة المباشرة",
        after_en: "100% upload success via direct Blob storage"
      },
      {
        metric_ar: "الشفافية ودقة الدرجات",
        metric_en: "Grading Transparency",
        before_ar: "أخطاء حسابية واعتراضات متكررة",
        before_en: "Calculation discrepancies and appeals",
        after_ar: "احتساب آلي دقيق مع تقرير فوري لكل مدرسة",
        after_en: "100% automated scoring with instant breakdown"
      }
    ],
    lessons_ar: "لو أعدت بناء المنظومة لدمجت نموذج OCR / LayoutLM للتحقق التلقائي من صحة أختام وتواريخ الشواهد المرفوعة قبل وصولها إلى المحكم البشري لزيادة كفاءة الفرز.",
    lessons_en: "If rebuilt, I would implement an OCR / LayoutLM pipeline to automatically verify stamp authenticity and document dates prior to arbitrator review.",
    tech_stack: ["Azure Functions", "Azure Blob", ".NET 8", "Supabase", "PostgreSQL", "Python", "Vanilla JS"]
  },
  {
    id: "snabbfood",
    slug: "snabbfood",
    live_url: "https://snabbfood.se/",
    additional_links: [
      {
            "label_ar": "بوابة العملاء (Kund)",
            "label_en": "Customer Portal",
            "url": "https://kund.snabbfood.se/"
      },
      {
            "label_ar": "تطبيق Google Play",
            "label_en": "Google Play App",
            "url": "https://play.google.com/store/apps/details?id=se.snabbfood&pli=1"
      },
      {
            "label_ar": "مطعم Pronto Pizzeria",
            "label_en": "Pronto Pizzeria",
            "url": "https://prontopizzeria.se/"
      },
      {
            "label_ar": "مطعم Venedig Kolgrill",
            "label_en": "Venedig Kolgrill",
            "url": "https://venedigkolgrill.snabbfood.se/"
      }
],
    title_ar: "منظومة Snabbfood السويد — شبكة المطاعم والشاشات الذكية",
    title_en: "Snabbfood Sweden — Multi-Chain Restaurant POS & Digital Signage",
    client_ar: "سلاسل المطاعم وشركات التوصيل السويدية (Ali Baba, Pronto, Snabbfood)",
    client_en: "Swedish Hospitality Chains & Delivery Networks (Ali Baba, Pronto, Snabbfood)",
    category_ar: "تكنولوجيا المطاعم والـ FinTech النوردي",
    category_en: "FoodTech & Nordic FinTech",
    duration_ar: "6 أشهر",
    duration_en: "6 Months",
    complexity: "High / Multi-Tenant",
    hero_image: "/projects/snabbfood/snabbfood website.png",
    problem_ar: "تشتت إدارة القوائم والأسعار بين فروع المطاعم في السويد، والاعتماد على منصات توصيل تقتطع عمولات ضخمة (30%+). قمنا ببناء منظومة متكاملة من تطبيقات الموبايل والشاشات الرقمية المعلقة بالفروع المتصلة بالدفع السويدي المباشر.",
    problem_en: "Fragmented menu and pricing synchronization across Swedish restaurant branches, combined with crippling 30%+ third-party delivery commissions. Engineered an integrated ecosystem of mobile ordering apps, live driver tracking, digital TV menu displays, and Nordic payment integrations.",
    challenge_points_ar: [
      "مزامنة فورية للأسعار والعروض عبر شاشات TV رقمية معلقة داخل المطاعم.",
      "تكامل سلس مع بوابات الدفع النوردية الصارمة (Klarna, Swish, Revolut, Stripe).",
      "تطبيق موبايل هجين خفيف مع دعم التسجيل الصوتي لتخصيص الوجبات.",
      "معمارية Multi-Tenant تدير عدة علامات تجارية من لوحة تحكم واحدة."
    ],
    challenge_points_en: [
      "Instantaneous menu and price sync across digital in-restaurant TV displays.",
      "Native integrations with Nordic payment rails (Klarna, Swish, Revolut, Stripe).",
      "Hybrid mobile app supporting voice note meal customizations.",
      "Multi-tenant backend managing multiple separate restaurant brands centrally."
    ],
    solution_ar: "تطوير تطبيق موبايل بـ Vue 3 و Quasar و Capacitor 7، وتطبيق شاشات TV Menu Signage PWA، مع لوحة تحكم بـ Laravel 12 و MySQL تدعم تعدد المتاجر واللغة السويدية والدفع بـ SEK.",
    solution_en: "Engineered cross-platform ordering apps using Vue 3, Quasar, and Capacitor 7, coupled with real-time TV menu signage PWAs and a multi-tenant Laravel 12 backend supporting Swedish SEK and Klarna/Swish payment APIs.",
    architecture_flow: [
      "Vue 3 + Quasar Mobile Apps (iOS/Android) → Capacitor 7 Hardware Bridge",
      "Smart TV Digital Signage PWA → Real-Time Websocket Menu Sync",
      "Multi-Tenant Laravel 12 REST Engine → MySQL + Redis Cache",
      "Nordic Payment Gateway Hub (Klarna Slice-It, Swish Instant, Revolut Pay, Stripe)"
    ],
    decisions: [
      {
        decision_ar: "استخدام Quasar + Capacitor لتطوير تطبيقات الموبايل",
        decision_en: "Adopted Vue 3 + Quasar + Capacitor 7 for Mobile",
        reason_ar: "سرعة إصدار التحديثات على متاجر التطبيقات والشاشات في نفس الوقت بشيفرة برمجية موحدة.",
        reason_en: "Enabled unified single-codebase deployment across iOS, Android, Web, and Smart TV displays.",
        tradeoff_ar: "أداء الرسوميات أقل من التطبيقات الـ Native بالكامل في الأجهزة القديمة جداً.",
        tradeoff_en: "Slightly higher frame latency on very old mobile hardware compared to pure native Swift/Kotlin."
      },
      {
        decision_ar: "بناء تطبيق Digital Signage PWA لشاشات الفروع",
        decision_en: "Engineered Digital Signage PWA for Branch TVs",
        reason_ar: "العمل على أي شاشة تلفزيون ذكية بنظام أندرويد أو متصفح بدون أجهزة إضافية مكلفة.",
        reason_en: "Runs effortlessly on any smart TV or browser stick without expensive proprietary hardware.",
        tradeoff_ar: "الحاجة لإدارة إعادة الاتصال التلقائي عند انقطاع شبكة المطعم.",
        tradeoff_en: "Requires robust offline caching and auto-reconnect fallback logic."
      }
    ],
    metrics: [
      { label_ar: "طلب شهري معالج", label_en: "Monthly Orders", value: "50,000+" },
      { label_ar: "سلاسل مطاعم نشطة", label_en: "Active Swedish Chains", value: "4 سلاسل" },
      { label_ar: "سرعة تحديث شاشات TV", label_en: "TV Sync Latency", value: "< 1s" },
      { label_ar: "توفير عمولات التوصيل", label_en: "Commission Savings", value: "30%+" }
    ],
    before_after: [
      {
        metric_ar: "عمولات المبيعات",
        metric_en: "Delivery Commissions",
        before_ar: "خسارة 30% لتطبيقات التوصيل الخارجية",
        before_en: "Losing 30%+ to 3rd party delivery portals",
        after_ar: "0% عمولات مع منصة طلبات وتوصيل خاصة",
        after_en: "Direct zero-commission customer orders"
      },
      {
        metric_ar: "تحديث منيو شاشات الفروع",
        metric_en: "TV Menu Updates",
        before_ar: "طباعة ورقية مكلفة وتأخر في الأسعار",
        before_en: "Costly paper printing and menu drift",
        after_ar: "تحديث لحظي لجميع الشاشات بضغطة زر",
        after_en: "Instant multi-screen sync from dashboard"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لدمجت دعم طابعات المطبخ الحرارية Bluetooth و Network ESC/POS بشكل أعمق داخل تطبيق الـ PWA لتسريع خروج التذاكر للطبّاخين.",
    lessons_en: "If rebuilt, I would embed direct Network ESC/POS thermal printer protocols deeper inside the PWA to accelerate kitchen ticket dispatch.",
    tech_stack: ["Vue 3", "Quasar 2", "Capacitor 7", "Laravel 12", "Klarna", "Swish", "MySQL", "PWA"]
  },
  {
    id: "dietbox",
    slug: "dietbox",
    live_url: "https://dietbox.runasp.net/",
    title_ar: "منظومة دايت بوكس (DietBox) — الاشتراكات الغذائية وتوليد الـ PDF",
    title_en: "DietBox Operations — Clinical Meal Subscriptions & Dynamic PDF Engine",
    client_ar: "سلسلة مراكز ومطابخ دايت بوكس للوجبات الصحية — السعودية",
    client_en: "DietBox Clinical Nutrition & Healthy Meal Catering — Saudi Arabia",
    category_ar: "الاشتراكات الطبية وتكنولوجيا التغذية",
    category_en: "HealthTech & Nutrition SaaS",
    duration_ar: "4 أشهر",
    duration_en: "4 Months",
    complexity: "Clean Architecture / QuestPDF",
    hero_image: "/projects/DietBox/Screenshot 2026-05-02 215152.png",
    problem_ar: "حساب السعرات والماكروز يدوياً لأكثر من 1,000 مشترك أسبوعياً وتجهيز ملصقات وجداول الوجبات اليومية كان يستغرق 3 ساعات يومياً من طاقم المطبخ مع نسبة أخطاء في الوجبات المخصصة.",
    problem_en: "Calculating calories and macros manually for 1,000+ active subscribers while designing daily kitchen box labels took 3+ hours daily with recurring meal mix-ups. Built an automated .NET 8 subscription engine with sub-100ms QuestPDF label generation.",
    challenge_points_ar: [
      "حساب الماكروز الدقيقة وتخصيص الوجبات لكل مريض سمنة أو رياضي تلقائياً.",
      "توليد مئات ملفات الـ PDF وملصقات الصناديق الحرارية في ثوانٍ بدون استهلاك السيرفر.",
      "إدارة تجديد الاشتراكات وبوابات الدفع والتوصيل اليومي للفروع والمنازل.",
      "بنية Clean Architecture صارمة تقبل التوسع والتكامل مع تطبيقات الجوال."
    ],
    challenge_points_en: [
      "Automated macro calculation customized to subscriber medical profiles.",
      "Ultra-fast batch generation of thermal box labels and meal plan PDFs.",
      "Managing recurring subscription renewals, payments, and daily branch delivery routes.",
      "Strict Clean Architecture designed for seamless future mobile integrations."
    ],
    solution_ar: "بناء معمارية .NET 8 Clean Architecture مع EF Core و SQL Server، ومحرك حساب ماكروز رياضي دقيق، ودمج مكتبة QuestPDF لتوليد ملفات PDF والجداول والملصقات الحرارية في أقل من 100 ملي ثانية.",
    solution_en: "Engineered a robust .NET 8 Clean Architecture API utilizing EF Core, a precision macro calculation domain engine, and high-speed QuestPDF rendering for sub-100ms label and dietary report generation.",
    architecture_flow: [
      ".NET 8 Clean Architecture API (Domain, Application, Infrastructure, WebAPI)",
      "Macro & Calorie Engine → Dynamic Nutritional Matrix Computation",
      "QuestPDF High-Performance PDF & Thermal Label Vector Generation Pipeline",
      "Subscription Renewal & Branch Route Dispatcher Engine"
    ],
    decisions: [
      {
        decision_ar: "اختيار مكتبة QuestPDF بدلاً من HTML-to-PDF التقليدية",
        decision_en: "Adopted QuestPDF over HTML-to-PDF Wrappers",
        reason_ar: "توليد ملفات PDF بـ C# الكود الأصلي بسرعة تفوق الأدوات التقليدية بـ 10 أضعاف وبدون استهلاك ذاكرة Chrome.",
        reason_en: "Generated vector PDFs via pure C# fluent API 10x faster with zero headless browser memory overhead.",
        tradeoff_ar: "بناء تصاميم التقارير برمجياً بلغة C# بدلاً من قوالب HTML/CSS.",
        tradeoff_en: "Designed report layouts purely in C# fluent code rather than standard HTML templates."
      },
      {
        decision_ar: "تطبيق معمارية Clean Architecture مفصولة الطبقات",
        decision_en: "Strict Clean Architecture Separation",
        reason_ar: "عزل منطق حساب الاشتراكات والماكروز عن قاعدة البيانات لتسهيل الاختبارات وتغيير البنية مستقبلاً.",
        reason_en: "Isolated nutritional domain rules from DB adapters for painless unit testing and scalability.",
        tradeoff_ar: "زيادة طفيفة في عدد المشاريع والـ DTOs داخل الـ Solution.",
        tradeoff_en: "Higher file count and mapping complexity across Domain and Application layers."
      }
    ],
    metrics: [
      { label_ar: "مشترك نشط على المنظومة", label_en: "Active Subscribers", value: "1,000+" },
      { label_ar: "سرعة توليد جدول الـ PDF", label_en: "PDF Generation Time", value: "< 100ms" },
      { label_ar: "نسبة أخطاء الملصقات والوجبات", label_en: "Labeling Errors", value: "0% أخطاء" },
      { label_ar: "ساعات عمل المطبخ الموفرة يومياً", label_en: "Daily Saved Kitchen Time", value: "3 ساعات" }
    ],
    before_after: [
      {
        metric_ar: "حساب السعرات وتجهيز الملصقات",
        metric_en: "Meal Label Preparation",
        before_ar: "3 ساعات يومياً وحسابات يدوية",
        before_en: "3 hours daily of manual calculations",
        after_ar: "توليد آلي فوري لجميع الملصقات في ثوانٍ",
        after_en: "Instant automated batch generation in seconds"
      },
      {
        metric_ar: "دقة التخصيص الغذائي",
        metric_en: "Dietary Accuracy",
        before_ar: "أخطاء متكررة في تسليم وجبات الحساسية",
        before_en: "Frequent mix-ups in custom allergen meals",
        after_ar: "تطابق بنسبة 100% مع الملف الصحي للمشترك",
        after_en: "100% precision matching subscriber medical profile"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لربطت المنظومة مباشرة بأجهزة قياس الوزن والدهون الذكية (InBody APIs) عبر البلوتوث لتحديث خطط المشتركين آلياً أسبوعياً.",
    lessons_en: "If rebuilt, I would integrate directly with InBody smart scales via Webhooks to adjust subscriber meal plans automatically based on weekly biometric scans.",
    tech_stack: [".NET 8", "Clean Architecture", "SQL Server", "EF Core", "QuestPDF", "CQRS", "Tailwind CSS"]
  },
  {
    id: "nexgo",
    slug: "nexgo",
    title_ar: "سوق نكست جو (NexGo) — الـ Super App متعدد القطاعات والتوصيل",
    title_en: "NexGo Super App — Multi-Vendor Marketplace & On-Demand Logistics",
    client_ar: "منصة نكست جو للتجارة السريعة والخدمات اللوجستية المتعددة",
    client_en: "NexGo Quick-Commerce & Multi-Sector Logistics Marketplace",
    category_ar: "الأسواق الإلكترونية والخدمات اللوجستية",
    category_en: "Super Apps & Logistics",
    duration_ar: "7 أشهر",
    duration_en: "7 Months",
    complexity: "High-Concurrency / Multi-App",
    hero_image: "/projects/nexgo/superapp-storefront.png",
    problem_ar: "بناء منصة تجارة إلكترونية ولوجستيات تدير 6 قطاعات مختلفة (مطاعم، بقالة، صيدليات، طرود، تأجير سيارات، وتوصيل ركاب) مع 3 تطبيقات موبايل منفصلة وتتبع جغرافي لحظي وطباعة فواتير حرارية للتجار.",
    problem_en: "Engineering a high-throughput multi-sector marketplace spanning 6 commercial verticals (Restaurants, Groceries, Pharmacy, Parcels, Rentals, RideShare) powered by 3 dedicated Flutter mobile apps, real-time GPS dispatch, and thermal POS printing.",
    challenge_points_ar: [
      "إدارة 6 قطاعات ذات قواعد تسعير وتوصيل مختلفة تماماً في قاعدة بيانات موحدة.",
      "تتبع موقع الكابتن كل ثانية عبر WebSockets دون استنزاف بطارية الهاتف أو إجهاد السيرفر.",
      "تطبيق تاجر يدعم الطباعة الحرارية المباشرة عبر البلوتوث (Thermal ESC/POS).",
      "تصنيف المنتجات وتوليد الوسوم الذكية آلياً باستخدام الرؤية الحاسوبية والذكاء الاصطناعي."
    ],
    challenge_points_en: [
      "Unifying 6 diverse commercial sectors with distinct pricing/delivery models in one database.",
      "Sub-second live driver GPS telemetry via WebSockets without battery or server exhaustion.",
      "Merchant app supporting automated thermal Bluetooth POS ticket printing.",
      "Automated visual product categorization and tagging using computer vision AI."
    ],
    solution_ar: "بناء معمارية متكاملة تتكون من Next.js 15 للمتجر الإلكتروني، و Laravel 12 + MySQL Spatial + Redis للبنية الخلفية وإدارة النطاقات الجغرافية (Geofencing)، و 3 تطبيقات Flutter للعميل والكابتن والمتجر.",
    solution_en: "Architected an enterprise multi-app ecosystem: Next.js 15 SSR storefront, Laravel 12 with MySQL Spatial geofencing and Redis queues, alongside 3 native Flutter applications (Customer, Driver, Vendor POS).",
    architecture_flow: [
      "Next.js 15 SSR Storefront + Redux Toolkit ↔ Laravel 12 REST Engine",
      "3 Dedicated Flutter Mobile Apps (Customer, Driver GPS, Vendor POS Bluetooth)",
      "MySQL Spatial Queries + Geofencing Radius Calculations",
      "Real-Time Telemetry (Laravel Reverb WebSockets) + Google Maps SDK"
    ],
    decisions: [
      {
        decision_ar: "استخدام MySQL Spatial Geofencing لحساب أقرب كابتن",
        decision_en: "Implemented MySQL Spatial Indexes for Geofencing",
        reason_ar: "تحديد أقرب السائقين للمتجر والعميل في استعلام جغرافي فائق السرعة (< 15ms).",
        reason_en: "Dispatched nearest drivers to store locations via sub-15ms spatial SQL queries.",
        tradeoff_ar: "تتطلب عمليات حسابية إضافية لإحداثيات المضلعات الجغرافية.",
        tradeoff_en: "Requires optimized spatial indexing maintenance on heavy coordinate updates."
      },
      {
        decision_ar: "بناء 3 تطبيقات Flutter منفصلة بهوية مشتركة",
        decision_en: "Architected 3 Independent Flutter Applications",
        reason_ar: "ضمان تجربة مستخدم نقية ومخصصة تماماً لكل طرف (عميل، كابتن، تاجر) مع مشاركة مكتبة الـ Core.",
        reason_en: "Delivered laser-focused UX for each stakeholder persona while sharing core networking and models.",
        tradeoff_ar: "إدارة 3 مشاريع وتوزيعها على متاجر التطبيقات.",
        tradeoff_en: "Triple CI/CD app store release pipeline overhead."
      }
    ],
    metrics: [
      { label_ar: "قطاعات تجارية في تطبيق واحد", label_en: "Commercial Sectors", value: "6 قطاعات" },
      { label_ar: "تطبيقات موبايل Flutter", label_en: "Flutter Mobile Apps", value: "3 تطبيقات" },
      { label_ar: "زمن تحديث تتبع السائق", label_en: "Driver Telemetry Rate", value: "1 ثانية (Real-Time)" },
      { label_ar: "دعم اللغات والاتجاهات", label_en: "i18n & RTL Support", value: "عربي / إنجليزي" }
    ],
    before_after: [
      {
        metric_ar: "إدارة القطاعات والأنشطة",
        metric_en: "Sector Architecture",
        before_ar: "تطبيقات ومنصات منفصلة مكلفة في الإدارة",
        before_en: "Isolated disjointed apps with high overhead",
        after_ar: "منظومة Super App موحدة لجميع الخدمات",
        after_en: "Unified Super App ecosystem across all sectors"
      },
      {
        metric_ar: "طباعة الطلبات في المتجر",
        metric_en: "Store Order Printing",
        before_ar: "نقل يدوي للطلبات وأخطاء في التجهيز",
        before_en: "Manual transcription, kitchen ticket delays",
        after_ar: "طباعة حرارية فورية عبر البلوتوث بضغطة زر",
        after_en: "Instant thermal Bluetooth POS receipt auto-print"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لاعتمدت على Go أو Node.js كـ Microservice مخصصة لخدمة التتبع الجغرافي اللحظي لتخفيف الحمل تماماً عن الـ Monolith الرئيسي.",
    lessons_en: "If rebuilt, I would extract the driver GPS telemetry WebSocket engine into a lightweight Go microservice to decouple high-frequency socket connections from the main API.",
    tech_stack: ["Flutter 3.x", "Next.js 15", "Laravel 12", "MySQL Spatial", "Redis", "WebSockets", "Google Maps", "ESC/POS"]
  },
  {
    id: "keylicense",
    slug: "keylicense",
    title_ar: "نظام KeyLicense Pro — حماية وتراخيص البرمجيات المؤسسية",
    title_en: "KeyLicense Pro — Enterprise Cryptographic Software Licensing Suite",
    client_ar: "شركات تطوير البرمجيات والـ ISVs المستقلين",
    client_en: "Enterprise Independent Software Vendors (ISVs) & Tech Startups",
    category_ar: "الأمن السيبراني وتراخيص البرمجيات",
    category_en: "Cybersecurity & Software Licensing",
    duration_ar: "3 أشهر",
    duration_en: "3 Months",
    complexity: "High / Cryptography",
    hero_image: "/projects/keylicense/license-dashboard.png",
    problem_ar: "تعرض البرمجيات المكتبية والمؤسسية للقرصنة والتجاوز، وصعوبة إدارة التراخيص الزمنية أو المرتبطة بعتاد الأجهزة (Node-Locked) والتحقق منها دون الحاجة لاتصال إنترنت دائم.",
    problem_en: "Vulnerability of desktop enterprise software to cracking and piracy, lacking robust node-locking hardware fingerprinting and secure offline cryptographic lease tokens.",
    challenge_points_ar: [
      "توليد تراخيص مشفرة بـ RSA 4096-bit غير قابلة للتزوير أو التعديل.",
      "استخراج بصمة عتاد الجهاز (CPU, Motherboard, MAC) بدقة تامة لمنع نقل الرخصة.",
      "التحقق من صحة الترخيص محلياً في أقل من 50ms بدون الحاجة لإنترنت.",
      "لوحة تحكم مركزية لإدارة دورة حياة التراخيص (تجديد، تعليق، ترقية)."
    ],
    challenge_points_en: [
      "Generating tamper-proof RSA 4096-bit asymmetric cryptographically signed licenses.",
      "Deterministic hardware fingerprint extraction (CPU, Motherboard, MAC) preventing license theft.",
      "Sub-50ms offline verification via encrypted cryptographic lease tokens.",
      "Centralized admin dashboard managing full license lifecycles (Trial, Perpetual, Subscription)."
    ],
    solution_ar: "بناء منظومة أمان Clean Architecture بتقنية .NET 8 تدعم التشفير غير المتماثل RSA 4096-bit، وحزم SDK لربط التطبيقات، مع توليد Lease Tokens دون اتصال مشفرة.",
    solution_en: "Engineered a .NET 8 Clean Architecture licensing server and client SDK implementing asymmetric RSA 4096-bit signature validation, hardware fingerprinting, and offline cryptographic leases.",
    architecture_flow: [
      ".NET 8 Clean Architecture Licensing Core → RSA 4096-bit Cryptographic Engine",
      "Client-Side Hardware Fingerprint SDK (CPU/BIOS/NIC Hardware Digest)",
      "Offline Encrypted Lease Token Generation (Time-Bound & Tamper-Proof)",
      "Centralized License Management Dashboard (EF Core + SQL Server)"
    ],
    decisions: [
      {
        decision_ar: "اعتماد التشفير غير المتماثل RSA 4096-bit",
        decision_en: "Adopted RSA 4096-bit Asymmetric Cryptography",
        reason_ar: "حفظ المفتاح الخاص حصراً على السيرفر، مع تضمين المفتاح العام في تطبيقات العملاء لمنع التزوير حتى مع الهندسة العكسية.",
        reason_en: "Kept private signing keys isolated on the licensing server while embedding public keys in client SDKs for bulletproof integrity.",
        tradeoff_ar: "حجم الرخصة المشفرة أكبر قليلاً من التشفير المتماثل.",
        tradeoff_en: "Slightly larger license token payload footprint."
      },
      {
        decision_ar: "نظام الـ Cryptographic Lease الدون اتصال",
        decision_en: "Offline Cryptographic Lease Model",
        reason_ar: "تمكين التطبيقات من العمل في البيئات العسكرية أو المغلقة المعزولة عن الإنترنت مع التحقق الدوري.",
        reason_en: "Allowed secure application operation inside air-gapped enterprise environments with time-gated verification.",
        tradeoff_ar: "الحاجة لمنع التلاعب بساعة النظام (Anti-Clock Tampering).",
        tradeoff_en: "Required custom anti-system-clock rollback detection logic."
      }
    ],
    metrics: [
      { label_ar: "نسبة حوادث القرصنة", label_en: "Cracking Incidents", value: "0% (حماية تامة)" },
      { label_ar: "سرعة التحقق من الرخصة", label_en: "Validation Latency", value: "< 50ms" },
      { label_ar: "قوة مفاتيح التشفير", label_en: "Cryptographic Strength", value: "RSA 4096-bit" },
      { label_ar: "نماذج التراخيص المدعومة", label_en: "License Models", value: "3 نماذج (أبدي، اشتراك، تجريبي)" }
    ],
    before_after: [
      {
        metric_ar: "حماية حقوق البرمجيات",
        metric_en: "Software Protection",
        before_ar: "مفاتيح نصية بسيطة يسهل مشاركتها",
        before_en: "Trivial string serial keys easily shared",
        after_ar: "تشفير عتادي مشفر لا يمكن نقله بين الأجهزة",
        after_en: "Hardware-bound RSA 4096-bit signed tokens"
      },
      {
        metric_ar: "العمل في البيئات المغلقة",
        metric_en: "Air-Gapped Operation",
        before_ar: "فشل التحقق عند انقطاع الإنترنت",
        before_en: "Validation fails without active internet",
        after_ar: "تحقق دون اتصال فوري وآمن بـ Lease Tokens",
        after_en: "Seamless offline cryptographic verification"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لأضفت طبقة Obfuscation و Anti-Debugging مدمجة في الـ SDK لحماية الكود المصدري من أدوات التفكيك المتقدمة.",
    lessons_en: "If rebuilt, I would include automated binary code virtualization and anti-debugging guards inside the client SDK to thwart memory inspection.",
    tech_stack: [".NET 8", "C#", "RSA 4096-bit", "Clean Architecture", "SQL Server", "EF Core", "Hardware SDK"]
  },
  {
    id: "bortselite",
    slug: "bortselite",
    title_ar: "بوت بورتسيليت (Bortselite) — أتمتة التخليص الجمركي وتتبع الشحنات",
    title_en: "Bortselite Brokerage Bot — Customs Automation & Container Tracking",
    client_ar: "مكاتب التخليص الجمركي وشركات الشحن والخدمات اللوجستية",
    client_en: "Customs Clearance Brokers & Freight Forwarding Logistics Agencies",
    category_ar: "اللوجستيات وأتمتة الـ WhatsApp/Telegram",
    category_en: "Logistics Automation & ChatOps",
    duration_ar: "2 أشهر",
    duration_en: "2 Months",
    complexity: "Medium / Webhooks",
    hero_image: "/projects/bortselite/customs-bot.jpeg",
    problem_ar: "استقبال مكاتب التخليص الجمركي لمئات المكالمات والاستفسارات اليومية المتكررة من التجار وأصحاب البضائع حول حالة الحاويات والفسح الجمركي ورسوم الموانئ مما يعطل طاقم العمل.",
    problem_en: "Customs brokers overwhelmed by hundreds of daily repetitive phone calls from cargo owners inquiring about container tracking, customs clearance stages, and port fee status.",
    challenge_points_ar: [
      "الربط اللحظي مع منصات تتبع الحاويات وخطوط الملاحة البحرية.",
      "الرد التلقائي 24/7 عبر WhatsApp Cloud API و Telegram Bot دون انقطاع.",
      "توليد تنبيهات فورية عند تغير حالة الفسح أو وصول الحاوية للميناء.",
      "نشر المنظومة داخل حاوية Docker سحابية خفيفة وقليلة التكلفة."
    ],
    challenge_points_en: [
      "Live integration with maritime container tracking and port clearance APIs.",
      "24/7 automated instant responses across WhatsApp Cloud API and Telegram.",
      "Automated push notifications on milestone events (Customs Cleared, Port Exit).",
      "Deploying via lightweight, cost-effective Docker containers on cloud PaaS."
    ],
    solution_ar: "تطوير روبوت محادثة وأتمتة بـ .NET 9 Web API متصل بـ WhatsApp Cloud API و Telegram Bot API، مع محرك تتبع ومستمع Webhooks، ونشره عبر Docker على Railway.",
    solution_en: "Engineered a high-concurrency .NET 9 Web API service integrating WhatsApp Cloud API, Telegram Bot Desk, and container tracking webhooks, containerized with Docker for 24/7 reliability.",
    architecture_flow: [
      "WhatsApp Cloud API Webhook / Telegram Bot API → .NET 9 Web API Listener",
      "HMAC Webhook Signature Verification + Debounce Queue",
      "Container Tracking & Port Status Scraper Engine",
      "Docker Containerized Service on Railway with Serilog Structured Logging"
    ],
    decisions: [
      {
        decision_ar: "تطوير البوت باستخدام .NET 9 Web API",
        decision_en: "Built on .NET 9 Web API",
        reason_ar: "سرعة معالجة الـ Webhooks المتزامنة واستهلاك موارد شبه معدوم في بيئة الإنتاج.",
        reason_en: "Exceptional concurrent webhook throughput and minimal container memory consumption.",
        tradeoff_ar: "الاعتماد على بيئة تشغيل مخصصة على السحابة.",
        tradeoff_en: "Requires dedicated container deployment compared to serverless scripts."
      },
      {
        decision_ar: "دعم قنوات متعددة (واتساب وتيليجرام)",
        decision_en: "Multi-Channel Omni-Desk (WhatsApp + Telegram)",
        reason_ar: "توفير تجربة مريحة للتجار عبر واتساب، مع لوحة متابعة داخلية سريعة للمخلصين عبر تيليجرام.",
        reason_en: "Offered seamless customer tracking via WhatsApp while providing an internal alert desk on Telegram.",
        tradeoff_ar: "إدارة قيود و rate-limits مختلفة لكل منصة محادثة.",
        tradeoff_en: "Managing divergent platform rate limits and message format payloads."
      }
    ],
    metrics: [
      { label_ar: "تقليص الاستفسارات اليدوية", label_en: "Manual Inquiries Reduced", value: "80%" },
      { label_ar: "سرعة الرد الآلي", label_en: "Response Latency", value: "< 1 ثانية" },
      { label_ar: "استقرار واستمرارية الخدمة", label_en: "Bot Availability", value: "99.9%" },
      { label_ar: "القنوات المدعومة", label_en: "Supported Channels", value: "WhatsApp + Telegram" }
    ],
    before_after: [
      {
        metric_ar: "الرد على استفسارات العملاء",
        metric_en: "Customer Status Inquiry",
        before_ar: "مكالمات هاتفية متواصلة وتعطيل للعمل",
        before_en: "Non-stop phone calls disrupting office work",
        after_ar: "استعلام آلي فوري برقم الحاوية على مدار الساعة",
        after_en: "24/7 instant automated query by container number"
      },
      {
        metric_ar: "إشعار العميل بالفسح الجمركي",
        metric_en: "Clearance Notification",
        before_ar: "تأخر إبلاغ التاجر وتراكم غرامات الأرضيات",
        before_en: "Delayed communication causing demurrage fees",
        after_ar: "إشعار واتساب تلقائي فور صدور بيان الفسح",
        after_en: "Instant automated WhatsApp push upon clearance"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لربطت المنظومة مباشرة بأنظمة الفواتير والمحاسبة لإرسال رابط سداد الرسوم الجمركية للعميل عبر الرسالة مباشرة.",
    lessons_en: "If rebuilt, I would connect the bot directly to billing gateways to generate and dispatch payment links for customs fees within the chat thread.",
    tech_stack: [".NET 9", "WhatsApp Cloud API", "Telegram API", "Docker", "Railway", "Serilog", "Webhooks"]
  },
  {
    id: "sakani-bot",
    slug: "sakani-bot",
    title_ar: "سكني بوت (Sakani Bot) — أتمتة حجوزات الأراضي والمخططات الحكومية",
    title_en: "Sakani Land Allocation Bot — Real-Time RPA & Instant Plot Reservation",
    client_ar: "مجموعات الاستثمار والتطوير العقاري — المملكة العربية السعودية",
    client_en: "Private Real Estate Investment Groups — Saudi Arabia",
    category_ar: "أتمتة العمليات (RPA) والـ GovTech",
    category_en: "GovTech Automation & RPA",
    duration_ar: "2 أشهر",
    duration_en: "2 Months",
    complexity: "High / Evasive RPA",
    hero_image: "/projects/sakanibot/Screenshot 2026-05-02 215448.png",
    problem_ar: "تطرح وزارة الإسكان السعودية مخططات أراضٍ مجانية تنفد بالكامل في أجزاء من الثانية فور فتح الحجز، مما يجعل الحجز اليدوي عبر المتصفح مستحيلاً للمستفيدين بسبب ضغط السيرفرات.",
    problem_en: "Government housing land grant releases sell out in fractions of a second upon opening. Manual browser reservation was humanly impossible under intense national server concurrency.",
    challenge_points_ar: [
      "مراقبة لحظية لفتح البوابة وحجز قطعة الأرض المحددة في أقل من 450ms.",
      "التكامل التلقائي مع نفاذ الوطني الموحد (Nafath SSO) والتعامل مع التحقق الثنائي.",
      "تجاوز أنظمة الحماية والكشف عن المتصفحات المؤتمتة باستخدام بروتوكولات متقدمة (nodriver).",
      "إرسال تنبيه وتوثيق فوري مع لقطة شاشة للحجز المعتمد إلى تطبيق تيليجرام."
    ],
    challenge_points_en: [
      "Real-time portal monitoring and sub-450ms plot reservation upon grant release.",
      "Seamless automated Nafath SSO multi-factor authentication handling.",
      "Bypassing bot detection algorithms via low-level async Chrome DevTools Protocols (nodriver).",
      "Instant Telegram dispatch with proof-of-reservation screenshots."
    ],
    solution_ar: "بناء روبوت أتمتة فائق السرعة بـ Python 3.11 و nodriver (Async Chrome DevTools Protocol) يتفاعل مباشرة مع محرك المتصفح بدون تشغيل WebDriver التقليدي، مما يوفر سرعة تنفيذ خيالية وتجاوز تام للكشف.",
    solution_en: "Engineered an ultra-fast async RPA engine using Python 3.11 and nodriver communicating directly with Chrome DevTools Protocol, eliminating Selenium webdriver signatures for sub-450ms execution.",
    architecture_flow: [
      "Python 3.11 AsyncIO Engine → nodriver (Direct Async CDP Connection)",
      "Automated Session Handshake & Nafath SSO Authentication Bridge",
      "Sub-Second Target Plot Matrix Selector (< 450ms Reservation Execution)",
      "Telegram Bot API → Automated Screenshot Capture & Success Verification Dispatch"
    ],
    decisions: [
      {
        decision_ar: "الاعتماد على مكتبة nodriver بدلاً من Selenium",
        decision_en: "Adopted nodriver over Standard Selenium",
        reason_ar: "تواصل مباشر مع المتصفح عبر CDP دون حقن أدوات التحكم (navigator.webdriver) مما يمنع كشف الروبوت تماماً.",
        reason_en: "Direct async CDP communication eliminated all automated webdriver detection flags and slashed latency.",
        tradeoff_ar: "مكتبة حديثة تتطلب كتابة كود معالجة استثناءات دقيق.",
        tradeoff_en: "Required custom async retry handling for low-level CDP protocol edge cases."
      },
      {
        decision_ar: "التوثيق الفوري بلقطات الشاشة عبر تيليجرام",
        decision_en: "Instant Screenshot Proof on Telegram",
        reason_ar: "تزويد المستفيد بإثبات فوري برقم الحجز ورسم المخطط المعتمد في نفس ثانية الإنجاز.",
        reason_en: "Delivered instant visual proof and confirmation ID directly to the client's phone upon successful allocation.",
        tradeoff_ar: "استهلاك وقت إضافي بسيط في ضغط وإرسال ملف الصورة.",
        tradeoff_en: "Minor async background overhead capturing and dispatching image binaries."
      }
    ],
    metrics: [
      { label_ar: "سرعة إتمام الحجز وتأكيده", label_en: "Execution Speed", value: "< 450ms" },
      { label_ar: "نسبة نجاح الحجز عند الطرح", label_en: "Reservation Success Rate", value: "100%" },
      { label_ar: "تجاوز أنظمة كشف البوتات", label_en: "Anti-Bot Bypass", value: "100%" },
      { label_ar: "زمن إرسال الإشعار والتوثيق", label_en: "Telegram Dispatch Time", value: "فوري لحظي" }
    ],
    before_after: [
      {
        metric_ar: "حجز قطع الأراضي المطروحة",
        metric_en: "Plot Reservation",
        before_ar: "ضياع الفرص ونفاد الأراضي خلال 2 ثانية يدوياً",
        before_en: "Missed opportunities, grants gone in 2s",
        after_ar: "حجز مؤكد في أقل من 450ms فور فتح البوابة",
        after_en: "Guaranteed allocation in <450ms upon open"
      },
      {
        metric_ar: "المتابعة والمراقبة",
        metric_en: "Portal Monitoring",
        before_ar: "ساعات طويلة من التحديث اليدوي المرهق",
        before_en: "Hours of manual browser refreshing",
        after_ar: "مراقبة آلية 24/7 دون أي مجهود بشري",
        after_en: "Silent 24/7 automated pulse monitoring"
      }
    ],
    lessons_ar: "لو أعدت بناء المشروع لدمجت دعم تشغيل عدة حسابات متوازية (Multi-Account Parallel Execution) عبر عزل الـ Browser Profiles وشبكات البروكسي السكنية.",
    lessons_en: "If rebuilt, I would architect a multi-account parallel orchestration engine utilizing isolated Chrome profiles and rotating residential proxies.",
    tech_stack: ["Python 3.11", "nodriver", "AsyncIO", "Chrome CDP", "Telegram Bot API", "RPA Automation"]
  },
  {
    id: "ai-legal",
    slug: "ai-legal",
    title_ar: "مُعين — المساعد القانوني الذكي وفحص بنود العقود",
    title_en: "Moeen AI — Legal Assistant & Intelligent Contract Analyzer",
    client_ar: "منصة مُعين للخدمات القانونية • مصر والسعودية",
    client_en: "Moeen LegalTech Platform • Egypt & Saudi Arabia",
    category_ar: "الذكاء الاصطناعي والقانون (LegalTech)",
    category_en: "LegalTech & AI Contract Intelligence",
    duration_ar: "3 أشهر",
    duration_en: "3 Months",
    complexity: "AI / NLP Embeddings",
    live_url: "https://moeenlaw.com/",
    hero_image: "/images/architecture/ai-rag-vector-graph.jpg",
    problem_ar: "استغراق مراجعة العقود وتدقيق البنود الخطرة ساعات طويلة من المحامين والشركات، مع صعوبة توليد عقود ثنائية اللغة مطابقة للوائح القانونية المحلية بسرعة.",
    problem_en: "Manual contract risk review and legal validation consumed hours of lawyer time. Engineered an AI legal assistant that detects high-risk clauses in under 5 seconds and generates bilingual contracts in 2 minutes.",
    challenge_points_ar: [
      "الحاجة لفحص فوري للبنود القانونية الخطرة في العقود والتنبيه بالثغرات.",
      "توليد صياغات عقود تجارية ثنائية اللغة (عربي/إنجليزي) مطابقة للأنظمة.",
      "شات بوت استشارات قانونية مدرب على مواد القانون واللوائح الرسمية."
    ],
    challenge_points_en: [
      "Sub-5-second detection of high-risk clauses and ambiguous legal liabilities.",
      "Dynamic bilingual contract generator with jurisdiction-specific templates.",
      "Conversational legal chatbot grounded in official civil and commercial law databases."
    ],
    solution_ar: "تطوير محرك ذكاء اصطناعي يعتمد على التضمين الدلالي (Legal Embeddings) ونماذج الـ LLM لفحص مستندات العقود، مع واجهة Glassmorphism عصرية تدعم اللغة العربية بالكامل.",
    solution_en: "Developed an AI legal pipeline utilizing semantic legal embeddings and custom LLM reasoning to audit contracts, generate compliance scores, and draft bespoke agreements.",
    architecture_flow: [
      "Vanilla JS / Glassmorphism Interface ↔ Legal Reasoning API",
      "Document Parser & Chunking Pipeline ↔ Legal Vector Database",
      "Risk Classification Matrix (Critical / Moderate / Low) ↔ Gemini Legal LLM",
      "Dynamic Document Generator (Word / PDF Export) ↔ Bilingual Localization"
    ],
    decisions: [
      {
        decision_ar: "استخدام نماذج استدلال قانونية مخصصة للتحقق من البنود",
        decision_en: "Trained Specialized Legal Embeddings for Contract Clauses",
        reason_ar: "ضمان عدم تقديم استشارات خاطئة وتحديد البنود عالية المخاطر بدقة 95%.",
        reason_en: "Prevented hallucinations and achieved 95%+ precision on ambiguous liability terms.",
        tradeoff_ar: "يتطلب صياغة Prompt Chain صارمة ومتعددة المراحل.",
        tradeoff_en: "Requires multi-stage validation prompt chains increasing inference latency slightly."
      }
    ],
    metrics: [
      { label_ar: "زمن كشف البنود الخطرة", label_en: "Risk Detection Time", value: "< 5 ثوانٍ" },
      { label_ar: "زمن توليد عقد ثنائي اللغة", label_en: "Contract Drafting Time", value: "2 دقيقة" },
      { label_ar: "دقة تصنيف البنود", label_en: "Classification Accuracy", value: "95%" },
      { label_ar: "المنصة الحية", label_en: "Live Deployment", value: "moeenlaw.com" }
    ],
    before_after: [
      {
        metric_ar: "مراجعة العقد وتدقيق البنود",
        metric_en: "Contract Audit Time",
        before_ar: "ساعات من الفحص اليدوي المجهد",
        before_en: "3-5 hours of manual legal review",
        after_ar: "فحص فوري في ثوانٍ مع تقرير المخاطر",
        after_en: "Instant <5s audit with risk breakdown"
      }
    ],
    lessons_ar: "الذكاء الاصطناعي في المجال القانوني يحتاج إلى ضوابط حوكمة مشددة وتوضيح أن التوصيات استرشادية للمحامي.",
    lessons_en: "Legal AI requires strict guardrails and clear confidence boundaries to empower rather than replace licensed legal counsel.",
    tech_stack: ["Vanilla JS", "CSS3 Glassmorphism", "LLM Legal Embeddings", "Vector DB", "HTML5 RTL"]
  }
];