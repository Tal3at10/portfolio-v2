export interface Testimonial {
  id: number;
  quote_ar: string;
  quote_en: string;
  author_ar: string;
  author_en: string;
  role_ar: string;
  role_en: string;
  company_ar: string;
  company_en: string;
  category: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote_ar: "تحويل نظام حجوزاتنا إلى منظومة واحدة ذكية وفر علينا أكثر من 15 ساعة عمل أسبوعياً لكل موظف مبيعات، وزادت نسبة إتمام الحجوزات عبر الواتساب بأكثر من 40% بفضل الرد الذكي الفوري.",
    quote_en: "Unifying our booking workflow into one intelligent system saved 15+ hours weekly per sales rep and boosted WhatsApp conversions by 40% through instant RAG responses.",
    author_ar: "م. فهد القحطاني",
    author_en: "Eng. Fahad Al-Qahtani",
    role_ar: "مدير العمليات التشغيلية",
    role_en: "Operations Director",
    company_ar: "سفريات الملحم",
    company_en: "AlMulhim Travel",
    category: "Travel"
  },
  {
    id: 2,
    quote_ar: "أتمتة العمليات وفرت علينا ساعات من العمل اليدوي يومياً. نظام الذكاء الاصطناعي لفهم طلبات العملاء عبر الواتساب ضاعف من سرعة استجابتنا.",
    quote_en: "Operational automation saved us countless manual hours daily. The WhatsApp AI system doubled our response turnaround.",
    author_ar: "أ. عبد العزيز الملحم",
    author_en: "Abdulaziz Al-Mulhim",
    role_ar: "المدير العام",
    role_en: "General Manager",
    company_ar: "مجموعة الملحم للسياحة",
    company_en: "AlMulhim Group",
    category: "Travel"
  },
  {
    id: 3,
    quote_ar: "إصدار الفواتشر المشفرة بـ QR Code في 10 ثوانٍ غيّر طريقة عملنا بالكامل. العملاء يستلمون تأكيد حجزهم فوراً.",
    quote_en: "Generating encrypted QR vouchers in 10 seconds revolutionized our checkout flow. Customers receive instant verification.",
    author_ar: "سارة العتيبي",
    author_en: "Sarah Al-Otaibi",
    role_ar: "مديرة المبيعات والحجوزات",
    role_en: "Head of Sales & Bookings",
    company_ar: "سفريات الملحم",
    company_en: "AlMulhim Travel",
    category: "Travel"
  },
  {
    id: 4,
    quote_ar: "كنا نفوّت عشرات المناقصات شهرياً لضيق وقت إعداد الكراسات الفنية. المنصة جعلتنا ننتج عروضاً متكاملة بدقة 100% في نفس يوم طرح المناقصة، مما ضاعف ترسياتنا السنوية.",
    quote_en: "We used to miss dozens of bids due to tight prep deadlines. The platform now generates 100% compliant bids the same day a tender drops.",
    author_ar: "م. خالد الدوسري",
    author_en: "Eng. Khaled Al-Dossari",
    role_ar: "الرئيس التنفيذي للعمليات",
    role_en: "Chief Operating Officer",
    company_ar: "شركة المقاولات المتحدة",
    company_en: "United Contracting Co.",
    category: "GovTech"
  },
  {
    id: 5,
    quote_ar: "توليد العروض الفنية بالذكاء الاصطناعي اختصر وقت إعداد كراسات المناقصات من 14 يوماً إلى 4 ساعات فقط، مع دقة مذهلة في مطابقة المتطلبات الحكومية.",
    quote_en: "AI proposal generation compressed tender drafting from 14 days to 4 hours with flawless alignment to Saudi procurement bylaws.",
    author_ar: "سعد الشهري",
    author_en: "Saad Al-Shehri",
    role_ar: "مدير العطاءات والمناقصات",
    role_en: "Head of Tenders & Bidding",
    company_ar: "منصة إداري (admin.sa)",
    company_en: "admin.sa Platform",
    category: "GovTech"
  },
  {
    id: 6,
    quote_ar: "التنبيهات الفورية عبر الواتساب فور طرح المناقصات الحكومية المطابقة لمجالنا منحتنا ميزة تنافسية غير مسبوقة في السوق.",
    quote_en: "Instant WhatsApp alerts the moment a matching government tender is published gave us an unbeatable market edge.",
    author_ar: "م. عبد الله الغامدي",
    author_en: "Eng. Abdullah Al-Ghamdi",
    role_ar: "مدير تطوير الأعمال",
    role_en: "Business Development Director",
    company_ar: "حلول البنية التحتية السعودية",
    company_en: "Saudi Infrastructure Solutions",
    category: "GovTech"
  },
  {
    id: 7,
    quote_ar: "الربط بين العيادة الافتراضية والملف الطبي الشامل جعل تجربة الاستشارة الطبية النفسية للمرضى من خارج الرياض أكثر أماناً وسلاسة من الحضور الشخصي.",
    quote_en: "Integrating the virtual clinic with the full EMR made telemedicine sessions for patients outside Riyadh safer and smoother than physical visits.",
    author_ar: "د. إبراهيم السبيعي",
    author_en: "Dr. Ibrahim Al-Subaie",
    role_ar: "الاستشاري الطبي العام",
    role_en: "Medical Director",
    company_ar: "مركز الرياض للطب النفسي والتعافي",
    company_en: "Al-Riyadh Psychiatric Center",
    category: "Healthcare"
  },
  {
    id: 8,
    quote_ar: "فصل بوابات الأطباء، التمريض، والمرضى جعل سير العمل في المركز منظماً، وقضى على أخطاء إدخال البيانات الطبية تماماً.",
    quote_en: "Segregating portals for physicians, nursing, and patients streamlined our clinical operations and eliminated chart entry errors.",
    author_ar: "د. منى الرويلي",
    author_en: "Dr. Mona Al-Ruwaili",
    role_ar: "مديرة إدارة الجودة الطبية",
    role_en: "Clinical Quality Director",
    company_ar: "مجمع الرياض الطبي",
    company_en: "Al-Riyadh Medical Complex",
    category: "Healthcare"
  },
  {
    id: 9,
    quote_ar: "سرعة استدعاء السجل الطبي الإلكتروني في أقل من 200 مللي ثانية جعلت فترات الانتظار معدومة ومكنت أطباءنا من التركيز على التشخيص.",
    quote_en: "Sub-200ms medical chart retrieval eliminated clinic wait times, letting our doctors focus entirely on patient care.",
    author_ar: "م. طارق المنصور",
    author_en: "Eng. Tariq Al-Mansoor",
    role_ar: "مدير تقنية المعلومات الصحية",
    role_en: "Health IT Director",
    company_ar: "مركز الرياض للتعافي",
    company_en: "Al-Riyadh Recovery Clinic",
    category: "Healthcare"
  },
  {
    id: 10,
    quote_ar: "متابعة شواهد 990 مدرسة كانت كابوساً تشغيلياً يستغرق شهوراً؛ منصة إنجاز حققت الشفافية والتدقيق اللحظي وحيدت الأخطاء البشرية بالكامل في أيام معدودة.",
    quote_en: "Auditing evidence across 990 schools was an operational nightmare lasting months; Injaz delivered real-time transparency and zero error in days.",
    author_ar: "أ. صالح النعيم",
    author_en: "Saleh Al-Naeem",
    role_ar: "رئيس لجنة الاعتماد والتحكيم",
    role_en: "Head of Accreditation Committee",
    company_ar: "مديرية التعليم بالأحساء",
    company_en: "Al-Ahsa Directorate of Education",
    category: "EdTech"
  },
  {
    id: 11,
    quote_ar: "استيعاب المنصة لأكثر من 25,000 ملف ووثيقة رسمية بدون ثانية توقف واحدة برهن على قوة البنية السحابية وهندستها العالية.",
    quote_en: "Handling 25,000+ official documents with zero server downtime proved the resilience of the serverless architecture.",
    author_ar: "م. وليد العمري",
    author_en: "Eng. Waleed Al-Omari",
    role_ar: "مشرف التحول الرقمي",
    role_en: "Digital Transformation Supervisor",
    company_ar: "إدارة التعليم",
    company_en: "Department of Education",
    category: "EdTech"
  },
  {
    id: 12,
    quote_ar: "عمل المنصة بخفة مذهلة على أضعف حواسيب المدارس الحكومية القديمة كان هو الإنجاز الحقيقي الذي ضمن نجاح المشروع 100%.",
    quote_en: "The platform's blazing performance on legacy school hardware was the pivotal factor in its 100% adoption success.",
    author_ar: "أ. نورة الحربي",
    author_en: "Noura Al-Harbi",
    role_ar: "أخصائية جودة التعليم",
    role_en: "Education Quality Specialist",
    company_ar: "منظومة إنجاز الوطنية",
    company_en: "Injaz National Suite",
    category: "EdTech"
  },
  {
    id: 13,
    quote_ar: "تطبيق المزامنة المكتبي يعمل بخفة وسرعة تضاهي Google Drive، مع استهلاك ذاكرة لا يتجاوز 40 ميجابايت، مما خفض تكاليف التخزين لدينا بنسبة 75%.",
    quote_en: "The native desktop sync matches Google Drive in smoothness while using <40MB RAM, slashing our monthly storage bills by 75%.",
    author_ar: "عمر زكي",
    author_en: "Omar Zaki",
    role_ar: "المدير التقني",
    role_en: "Chief Technology Officer",
    company_ar: "ستوديو الإنتاج الرقمي",
    company_en: "Digital Media Studio",
    category: "Cloud"
  },
  {
    id: 14,
    quote_ar: "رفع ملفات الفيديو الضخمة (+10GB) بدون انقطاع مع ميزة استئناف الرفع المقسم حل أكبر مشكلة واجهها فريق المونتاج لدينا.",
    quote_en: "Uploading 10GB+ video archives seamlessly with resumable chunked streams solved our production crew's biggest headache.",
    author_ar: "كريم يوسف",
    author_en: "Kareem Youssef",
    role_ar: "مدير الإنتاج والمحتوى",
    role_en: "Head of Media Production",
    company_ar: "أوكيه كلاود",
    company_en: "Ok.Cloud Ecosystem",
    category: "Cloud"
  },
  {
    id: 15,
    quote_ar: "إدارة عدة تطبيقات (مطاعم، بقالة، صيدلية) من لوحة تحكم واحدة خففت من تعقيد العمليات التشغيلية وضاعفت كفاءة التوزيع لدينا.",
    quote_en: "Managing multi-sector delivery (food, grocery, pharma) from a single unified dispatch console halved operational complexity.",
    author_ar: "أحمد طارق",
    author_en: "Ahmed Tariq",
    role_ar: "المدير التنفيذي للتشغيل",
    role_en: "Chief Operating Officer",
    company_ar: "منصة نكس جو (NexGo)",
    company_en: "NexGo Super App",
    category: "Marketplace"
  },
  {
    id: 16,
    quote_ar: "تطبيق السائقين سريع جداً والتتبع الجغرافي اللحظي كل ثانية عبر WebSockets جعل تجربة العميل استثنائية وزاد من تقييماتنا.",
    quote_en: "The driver app is blazing fast; 1-second WebSocket geospatial tracking elevated our customer ratings significantly.",
    author_ar: "ماجد الدخيل",
    author_en: "Majed Al-Dakheel",
    role_ar: "مدير العمليات والأسطول",
    role_en: "Fleet Operations Manager",
    company_ar: "نيكس جو للخدمات اللوجستية",
    company_en: "NexGo Logistics",
    category: "Marketplace"
  },
  {
    id: 17,
    quote_ar: "شاشات عرض المطبخ وتطبيقات الجوال عملت معاً بتناغم تام، مما قلل من وقت انتظار العملاء في مطاعمنا بالسويد بنسبة 35%.",
    quote_en: "Kitchen display boards and mobile ordering synced in perfect harmony, cutting customer queue times in Sweden by 35%.",
    author_ar: "إريك يوهانسون",
    author_en: "Erik Johansson",
    role_ar: "مالك سلسلة مطاعم",
    role_en: "Restaurant Chain Owner",
    company_ar: "مجموعة مطاعم برونتو (السويد)",
    company_en: "Pronto Restaurant Group (Sweden)",
    category: "FoodTech"
  },
  {
    id: 18,
    quote_ar: "دمج بوابات الدفع النوردية مثل Klarna و Swish رفع من نسبة إتمام الطلبات والدفع الإلكتروني المباشر لأكثر من 92%.",
    quote_en: "Integrating local Nordic payment gateways (Klarna & Swish) boosted online checkout completions past 92%.",
    author_ar: "يوناس ليندكفيست",
    author_en: "Jonas Lindqvist",
    role_ar: "المدير المالي",
    role_en: "Chief Financial Officer",
    company_ar: "سلسلة سناب فود (ستوكهولم)",
    company_en: "Snabbfood AB (Stockholm)",
    category: "FoodTech"
  },
  {
    id: 19,
    quote_ar: "أتمتة حساب السعرات الغذائية وطباعة ملصقات الوجبات وفرت 3 ساعات يومياً على طاقم المطبخ وألغت أخطاء الحساسية تماماً.",
    quote_en: "Automating macro calculations and kitchen label printing saved 3 hours daily and eliminated allergen labeling mistakes.",
    author_ar: "حسام الجابر",
    author_en: "Hossam Al-Jaber",
    role_ar: "مدير التشغيل الغذائي",
    role_en: "Culinary Operations Manager",
    company_ar: "صندوق الدايت (DietBox)",
    company_en: "DietBox Catering",
    category: "FoodTech"
  },
  {
    id: 20,
    quote_ar: "كشف البنود القانونية الخطرة في العقود خلال 5 ثوانٍ فقط وتوليد المسودات ثنائية اللغة اختصر أياماً من المراجعة اليدوية المرهقة.",
    quote_en: "Scanning risky contract clauses in 5 seconds and generating bilingual agreements saved days of manual legal review.",
    author_ar: "المستشار ياسر عبد الرحمن",
    author_en: "Counsel Yasser Abdulrahman",
    role_ar: "شريك قانوني أول",
    role_en: "Senior Legal Partner",
    company_ar: "مكتب المشورة القانونية",
    company_en: "Al-Mashoura Law Firm",
    category: "LegalTech"
  },
  {
    id: 21,
    quote_ar: "روبوت التخليص الجمركي أتمت الرد على 80% من استفسارات العملاء المتكررة عن الشحنات وسمح لفريقنا بالتركيز على العمليات الحرجة.",
    quote_en: "The customs brokerage bot automated 80% of routine shipment queries, allowing our ops team to focus on critical clearance tasks.",
    author_ar: "فيصل السعدون",
    author_en: "Faisal Al-Saadoun",
    role_ar: "مدير التخليص والشحن",
    role_en: "Freight Clearance Manager",
    company_ar: "مجموعة بورتسلايت للشحن",
    company_en: "Bortselite Freight Hub",
    category: "Logistics"
  },
  {
    id: 22,
    quote_ar: "بناء محرك حجز السينما بلغة F# البرمجية قضى على أي احتمالية لتضارب حجز المقاعد في نفس اللحظة واستهلك أقل من 35MB ذاكرة.",
    quote_en: "Engineering the cinema engine in F# eliminated all race conditions during flash seat sales while sipping under 35MB RAM.",
    author_ar: "م. سامي خليل",
    author_en: "Eng. Sami Khalil",
    role_ar: "مدير هندسة البرمجيات",
    role_en: "Software Engineering Lead",
    company_ar: "منظومة التذاكر الرقمية",
    company_en: "Digital Ticketing Engine",
    category: "Engineering"
  },
  {
    id: 23,
    quote_ar: "نظام إدارة تراخيص البرمجيات والتشفير برهن على دقة متناهية وسرعة تحقق في أقل من 50 مللي ثانية مع صفر اختراقات.",
    quote_en: "The cryptographic license management SDK proved ultra-reliable with <50ms verification and zero breach attempts.",
    author_ar: "د. رامي النجار",
    author_en: "Dr. Rami Al-Najjar",
    role_ar: "رئيس أمن المعلومات",
    role_en: "Chief Information Security Officer",
    company_ar: "حلول البرمجيات المؤسسية",
    company_en: "Enterprise Software ISV",
    category: "Security"
  },
  {
    id: 24,
    quote_ar: "العمل مع محمود طلعت أثبت أنه ليس مجرد مبرمج؛ بل مهندس أنظمة استراتيجي يفهم أهداف الأعمال ويصمم أنظمة لا تتعطل.",
    quote_en: "Partnering with Mahmoud Talaat proved he is not just a coder, but a strategic systems architect who delivers unbreakable business platforms.",
    author_ar: "م. طارق عبد العزيز",
    author_en: "Eng. Tariq Abdulaziz",
    role_ar: "مستثمر ورائد أعمال تقني",
    role_en: "Tech Venture Investor & Founder",
    company_ar: "صندوق الابتكار الرقمي",
    company_en: "Digital Innovation Ventures",
    category: "Enterprise"
  }
];
