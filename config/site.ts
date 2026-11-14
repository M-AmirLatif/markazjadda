export interface ServiceItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  signNameAr: string;
  signNameEn: string;
  stepsAr: string[];
  stepsEn: string[];
  badgeAr?: string;
  badgeEn?: string;
}

export interface ReviewItem {
  id: string;
  authorAr: string;
  authorEn: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  commentAr: string;
  commentEn: string;
  verified: boolean;
  highlightAr: string;
  highlightEn: string;
}

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  titleAr: string;
  titleEn: string;
  category: "dent_repair" | "oven_paint" | "mechanical" | "electrical" | "workshop";
  src: string;
  poster?: string;
  aspect?: string;
  featured?: boolean;
}

/**
 * ⚠️ OWNER TODO CHECKLIST:
 * Every unverified claim has been moved here so the owner can confirm and re-enable with verified details.
 */
export const OWNER_TODO_CHECKLIST = {
  // 1. Free estimate claim (Removed from public site per instruction)
  freeEstimate: {
    enabled: false,
    todoNote: "TODO: Confirm whether photo assessments on WhatsApp are free of charge before advertising 'free quote'",
  },
  // 2. Polishing service (Removed from public site per instruction)
  polishingService: {
    enabled: false,
    todoNote: "TODO: Confirm whether Polishing & Detailing (تلميع وتجديد) is officially offered alongside the 4 sign services",
  },
  // 3. Operating Hours: Confirm exact schedule
  operatingHours: {
    enabled: false,
    todoNote: "TODO: Confirm exact opening & closing hours with shop owner",
    suggestedAr: "السبت – الخميس: 8:00 صباحاً – 10:00 مساءً | الجمعة: 4:00 عصراً – 10:00 مساءً",
    suggestedEn: "Saturday – Thursday: 8:00 AM – 10:00 PM | Friday: 4:00 PM – 10:00 PM",
  },
  // 4. Statistics: Confirm founding year / cars repaired
  statistics: {
    enabled: true,
    yearsExperience: "5+",
    yearsExperienceNote: "Confirmed by owner: 5 years of hands-on experience across multiple major auto repair shops",
    repairedCarsTodo: "TODO: Confirm verified number of cars repaired",
    warrantyDurationTodo: "TODO: Confirm exact paint warranty terms if offered",
  },
  // 5. Payment Methods
  paymentMethods: {
    enabled: false,
    todoNote: "TODO: Confirm Mada POS, Visa/Mastercard, or Cash only with management",
  },
  // 6. Booth Origin/Make
  equipmentDetails: {
    boothOriginTodo: "TODO: Confirm spray booth model/origin if owner wants it highlighted",
  },
  // 7. Social Media Handles
  socialMedia: {
    instagram: "",
    tiktok: "",
    facebook: "",
    todoNote: "TODO: Add official social media handles if available",
  },
};

export const siteConfig = {
  name: {
    ar: "مركز جدة",
    en: "Markaz Jadda",
    fullAr: "مركز جدة لصيانة وسمكرة وبوية فرن السيارات",
    fullEn: "Markaz Jadda Auto Body, Dent Repair & Oven Paint Shop",
  },
  tagline: {
    ar: "سمكرة متقنة، بوية فرن، وميكانيكا وكهرباء بإشراف فنيين متمرسين بجدة",
    en: "Precision dent repair, factory-grade oven paint, and mechanical services in Jeddah",
  },
  contact: {
    phone: "+966 50 902 5410",
    phoneDisplay: "+966 50 902 5410",
    phoneRaw: "+966509025410",
    whatsappUrl: "https://wa.me/966509025410",
    whatsappNumber: "966509025410",
    defaultWhatsAppMsgAr: "السلام عليكم، أود الاستفسار عن خدمات مركز جدة وإرسال صور الصدمة للاستفسار عن سيارتي.",
    defaultWhatsAppMsgEn: "Hello Markaz Jadda, I would like to inquire about your repair services and send photos to ask about my car.",
  },
  location: {
    plusCode: "C7V9+P79",
    addressAr: "C7V9+P79، حي الأمير عبد المجيد، جدة 22431، المملكة العربية السعودية",
    addressEn: "C7V9+P79, Prince Abdulmajeed, Jeddah 22431, Saudi Arabia",
    cityAr: "جدة",
    cityEn: "Jeddah",
    postalCode: "22431",
    landmarksAr: [
      "بجوار مطعم تميس هاوس (Tamees House)",
      "بالقرب من محطة الفحص الدوري للسيارات بجدة",
    ],
    landmarksEn: [
      "Near Tamees House restaurant",
      "Close to Motor Vehicles Periodic Inspection (الفحص الدوري)",
    ],
    googleMapsUrl: "https://maps.google.com/?q=C7V9%2BP79+Jeddah+Saudi+Arabia",
    googleMapsEmbedIframe: "https://www.google.com/maps?q=C7V9%2BP79%2C+Prince+Abdulmajeed%2C+Jeddah+22431&output=embed",
  },
  hours: {
    displayAr: "يرجى الاتصال أو التواصل عبر واتساب لمعرفة أوقات العمل الحالية",
    displayEn: "Call or WhatsApp to confirm current operating hours",
  },
  stats: {
    ratingValue: 4.1,
    ratingCount: 7,
    yearsExperience: "5+",
    yearsExperienceAr: "5+ سنوات خبرة",
    yearsExperienceEn: "5+ Years Experience",
    experienceDetailAr: "خبرة في كبرى الورش",
    experienceDetailEn: "Multi-shop background",
    source: "Google Reviews",
  },
  social: {
    instagram: "",
    tiktok: "",
    facebook: "",
  },
  analytics: {
    googleAnalyticsId: "",
  },
  // The 4 verified services shown on the physical shop sign
  services: [
    {
      id: "dent_repair",
      slug: "dent-repair",
      signNameAr: "سمكرة",
      signNameEn: "Dent Repair",
      titleAr: "سمكرة وتعديل صدمات الهيكل",
      titleEn: "Body & Dent Repair",
      shortDescAr: "إصلاح ضربات وصدمات الشاسيه والهيكل بدقة متناهية وإعادة الأبعاد للمقاييس الأصلية.",
      shortDescEn: "Expert dent removal, chassis realignment, and collision damage restoration to factory specs.",
      descriptionAr: "نقدم في مركز جدة خدمة سمكرة احترافية لجميع أنواع السيارات الصغيرة والعائلية وسيارات الدفع الرباعي. نقوم بسحب الصدمات، تعديل الرفارف، الأبواب، الكبوت والشنطة، وإصلاح الشاسيه المتضرر مع الحفاظ على خطوط الهيكل الأصلية وانسيابيته.",
      descriptionEn: "At Markaz Jadda, we deliver specialized auto body and dent repair for all passenger cars and SUVs. From minor parking dings to major collision realignment, our skilled craftsmen restore damaged body panels, doors, fenders, and chassis lines accurately.",
      icon: "Wrench",
      badgeAr: "خدمة أساسية",
      badgeEn: "Core Service",
      stepsAr: [
        "فحص الصدمة وتحديد عمق التلف ونقاط الارتكاز",
        "تفكيك الأجزاء المتأثرة وسحب الصدمة بدقة دون إجهاد المعدن",
        "تعديل الحواف وفواصل الأبواب والرفارف لتطابق الوكالة",
        "صنفرة وتجهيز السطح التأسيسي قبل مرحلة المعجون والدهان"
      ],
      stepsEn: [
        "Detailed damage assessment and chassis measurement",
        "Gentle dent pulling and sheet metal straightening",
        "Panel realignment ensuring seamless gap tolerances",
        "Surface smoothing and rust-preventive foundation"
      ]
    },
    {
      id: "oven_paint",
      slug: "oven-paint",
      signNameAr: "بوية فرن",
      signNameEn: "Oven Paint",
      titleAr: "رش بوية داخل فرن الدهان",
      titleEn: "Oven-Baked Spray Painting",
      shortDescAr: "رش الطلاء داخل كبينة بوية فرن معزولة لمنع الغبار وتثبيت الطلاء بأعلى درجات اللمعان والمتانة.",
      shortDescEn: "Sealed oven baking booth ensuring clean finish, exact color match, and long-lasting gloss.",
      descriptionAr: "نعتمد في مركز جدة على كبينة بوية فرن معزولة ومجهزة بنظام فلترة هواء لمنع ذرات الغبار أثناء الرش، مع دهانات سيارات معتمدة ومطابقة دقيقة لدرجات اللون الأصلية وتجفيف متوازن داخل الفرن.",
      descriptionEn: "We utilize an enclosed oven baking booth equipped with air filtration to eliminate airborne dust. Using automotive paints, precise color matching, and uniform curing inside the oven baking booth, we deliver an enduring showroom finish.",
      icon: "PaintBucket",
      badgeAr: "كبينة بوية فرن",
      badgeEn: "Oven Baking Booth",
      stepsAr: [
        "مطابقة كود لون السيارة الأصلي بدقة متناهية",
        "عزل كامل للسيارة والزجاج وأجزاء الكروم بأوراق عزل خاصة",
        "رش طبقات الأساس (البرايمر) واللون المعتمد داخل كبينة الفرن",
        "رش الورنيش الكريستالي اللامع (Clear Coat) والمعالجة داخل فرن الدهان"
      ],
      stepsEn: [
        "Computerized paint code matching and tint formulation",
        "Complete precision masking of glass, trims, and wheels",
        "Application of primer and base coat inside the oven baking booth",
        "High-gloss clear coat layer followed by curing in the oven baking booth"
      ]
    },
    {
      id: "mechanical",
      slug: "mechanical",
      signNameAr: "ميكانيكي",
      signNameEn: "Mechanical Repair",
      titleAr: "إصلاحات ميكانيكية شاملة",
      titleEn: "Mechanical Repair",
      shortDescAr: "صيانة العضلات، نظام التعليق، الفرامل، وتجهيز المركبات للفحص الدوري بجدة.",
      shortDescEn: "Suspension repairs, brake overhauls, mechanical tune-ups, and inspection readiness.",
      descriptionAr: "يقدم قسم الميكانيكا في مركز جدة خدمات صيانة دقيقة لأنظمة التعليق والمساعدات، والمقصات، ونظام الفرامل، مع تجهيز متكامل للسيارات قبل دخول محطة الفحص الدوري القريبة من موقعنا لتجاوز الفحص بنجاح من المرة الأولى.",
      descriptionEn: "Our mechanical division inspects and repairs suspension, steering components, bushings, brakes, and underbody parts. Located right near Jeddah's Periodic Inspection station, we also perform pre-inspection checks to guarantee your vehicle passes smoothly.",
      icon: "Cog",
      stepsAr: [
        "فحص شامل لأسفل السيارة والقطع الاستهلاكية ونظام التعليق",
        "تغيير القطع التالفة بقطع غيار أصلية أو معتمدة",
        "وزن أذرعة ومقاصات لضمان ثبات السيارة على الطريق",
        "فحص جاهزية وتوافق متطلبات الفحص الدوري السعودي"
      ],
      stepsEn: [
        "Underbody safety inspection, bushings and linkage check",
        "Replacement of worn mechanical components",
        "Wheel alignment and steering geometry adjustment",
        "Pre-inspection verification for Saudi Periodic Inspection (الفحص الدوري)"
      ]
    },
    {
      id: "electrical",
      slug: "electrical",
      signNameAr: "كهربائي",
      signNameEn: "Electrical Repair",
      titleAr: "كهرباء وإلكترونيات السيارات",
      titleEn: "Auto Electrical Repair",
      shortDescAr: "فحص وبرمجة الأنظمة الكهربائية، صيانة الإضاءة، وحل التماسات وضفائر السيارات.",
      shortDescEn: "Electrical troubleshooting, lighting replacement, wiring repair, and battery/alternator checks.",
      descriptionAr: "كشف وإصلاح الأعطال الكهربائية، صيانة وتمديد الضفائر المتضررة بعد الحوادث، تركيب الأنوار وتعديل الإضاءات الأمامية والخلفية، والتأكد من سلامة جميع الحساسات الكهربائية قبل تسليم السيارة للعميل.",
      descriptionEn: "Comprehensive auto electrical diagnoses, wiring harness restoration after collisions, headlamp and taillight replacements, and sensor calibration to ensure every circuit operates safely before vehicle handover.",
      icon: "Zap",
      stepsAr: [
        "فحص الدوائر الكهربائية والفيوزات بالكمبيوتر وأجهزة القياس",
        "إصلاح وعزل الضفائر المتأثرة بالصدمات",
        "صيانة وتثبيت الإضاءات والأنوار ووزن مستوى الأشعة",
        "اختبار نهائي لجميع الأنظمة الكهربائية والأمان"
      ],
      stepsEn: [
        "Circuit testing and multimeter electrical diagnostic",
        "Harness repair, soldering, and OEM heat-shrink insulation",
        "Headlamp/taillight alignment and illumination testing",
        "Full system validation including turn signals and brake lights"
      ]
    }
  ],
  reviews: [
    {
      id: "rev-1",
      authorAr: "عميل موثق عبر خرائط جوجل",
      authorEn: "Google Reviewer",
      rating: 5,
      dateAr: "مراجعة على جوجل",
      dateEn: "Google review",
      commentAr: "شغل ممتاز جداً وأسعارهم مناسبة وأرخص بكثير مقارنة بباقي ورش السمكرة في المنطقة. المعلم نجيب يده تتلف بحرير ومحترم جداً في التعامل.",
      commentEn: "Excellent work, and their prices are very fair and much lower compared to other body shops in the area. Master Najib is remarkably skilled and extremely professional.",
      verified: true,
      highlightAr: "شغل متقن وسعر منافس",
      highlightEn: "Meticulous work and competitive pricing"
    },
    {
      id: "rev-2",
      authorAr: "أبو فهد - عميل محلي بجدة",
      authorEn: "Abu Fahad - Jeddah Local Customer",
      rating: 5,
      dateAr: "مراجعة على جوجل",
      dateEn: "Google review",
      commentAr: "صلحت عندهم صدمة في الرفرف الخلفي ورش بوية فرن، النتيجة ما شاء الله وكأنها ما انصدمت، ومطابقة اللون ١٠٠٪؜. أنصح بالتعامل معهم.",
      commentEn: "Fixed a rear fender dent and had it oven-baked painted here. The result is flawless—looks factory new, with 100% color match. Highly recommended.",
      verified: true,
      highlightAr: "مطابقة لون البوية 100%",
      highlightEn: "100% Factory Color Match"
    },
    {
      id: "rev-3",
      authorAr: "محمد السلمي",
      authorEn: "Mohammed Al-Sulami",
      rating: 4,
      dateAr: "مراجعة على جوجل",
      dateEn: "Google review",
      commentAr: "تجربة طيبة، التزام بالموعد وسرعة في الإنجاز. السعر معقول والسمكرة بدون تموجات واضحة. ورشة مركز جدة خيار ممتاز.",
      commentEn: "Great experience, timely turnaround, and quick completion. Fair pricing and smooth dent repair with no visible ripples. Markaz Jadda is a reliable shop.",
      verified: true,
      highlightAr: "التزام بالموعد وسرعة إنجاز",
      highlightEn: "Timely Delivery & Professionalism"
    }
  ],
  faqs: [
    {
      qAr: "كيف يمكنني الاستفسار عن تكلفة السمكرة والبوية؟",
      qEn: "How can I ask about dent repair or painting for my car?",
      aAr: "بكل بساطة، قم بتصوير مكان الصدمة من زوايا واضحة وإرسال الصور عبر واتساب على الرقم 0509025410 وسيقوم الفني بالرد المباشر للاستفسار عن سيارتك ومناقشة تفاصيل العمل.",
      aEn: "Simply take clear photos of the vehicle damage from multiple angles and send them via WhatsApp to +966509025410. Our technician will reply directly to discuss your car and the required work."
    },
    {
      qAr: "كم يستغرق إصلاح الصدمة ورش البوية بالفرن؟",
      qEn: "How long does dent repair and oven painting typically take?",
      aAr: "الصدمات الخفيفة والرش الموضعي يستغرق عادة من يوم إلى يومين، بينما الصدمات الكبيرة أو رش كامل السيارة قد يستغرق وقتاً أطول وفقاً لحجم التلف لضمان جفاف ومعالجة الطلاء بدقة.",
      aEn: "Minor dent repairs and localized panel painting usually take 1–2 working days. Major collision restorations or extensive work require time based on the damage extent to ensure proper curing."
    },
    {
      qAr: "هل يتم رش البوية داخل فرن مخصص؟",
      qEn: "Is the car paint sprayed inside a dedicated oven baking booth?",
      aAr: "نعم، يتم الرش داخل كبينة بوية فرن معزولة ومفلترة لحماية الطلاء من الأتربة وشوائب الهواء، وتجفيف الطلاء بالتساوي لضمان لمعانه ومتانته.",
      aEn: "Yes, painting is carried out inside an enclosed, filtered oven baking booth that prevents dust particles and cures the paint evenly for enduring brilliance."
    },
    {
      qAr: "ما هي أنواع وموديلات السيارات التي تستقبلونها في مركز جدة؟",
      qEn: "What car makes and models do you service at Markaz Jadda?",
      aAr: "نستقبل مختلف أنواع وموديلات المركبات (تويوتا، هونداي، كيا، نيسان، فورد، جي إم سي، شيفروليه، سيارات صينية، وسيارات أوروبية وأمريكية).",
      aEn: "We welcome various vehicle makes and models: Toyota, Hyundai, Kia, Nissan, Ford, GMC, Chevrolet, Chinese brands, as well as American and European vehicles."
    },
    {
      qAr: "كيف يمكنني معرفة أوقات العمل الحالية أو حجز موعد؟",
      qEn: "How can I confirm operating hours or schedule a visit?",
      aAr: "يمكنك الاتصال مباشرة أو إرسال رسالة واتساب على الرقم 0509025410 لتأكيد الأوقات ومناسبة الحضور في أي وقت.",
      aEn: "You can call directly or send a WhatsApp message to +966509025410 to confirm current operating hours and coordinate your visit anytime."
    }
  ],
  gallery: [
    // Neutral captions without "Master Najib", without "Italian booth", and with "oven baking booth"
    {
      id: "img-front",
      type: "image",
      titleAr: "لوحة واجهة مركز جدة الرسمية (سمكرة، بوية فرن، ميكانيكي، كهربائي)",
      titleEn: "Official Markaz Jadda Front Signboard (Body Repair, Oven Paint, Mechanic, Electrician)",
      category: "workshop",
      src: "/assets/images/frontimg.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-tech-bumper",
      type: "image",
      titleAr: "فني الورشة أثناء رش وتجهيز الصدام الأمامي للسيارة",
      titleEn: "Workshop Technician Spray-Painting and Preparing Front Bumper",
      category: "oven_paint",
      src: "/assets/images/6ad67255-42f1-45ff-badb-6edb019e3035.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-suv-rear",
      type: "image",
      titleAr: "تجهيز وتأسيس باب الشنطة والصدام الخلفي لسيارة عائلية قبل البوية",
      titleEn: "SUV Tailgate & Rear Bumper Primer Preparation Before Paint",
      category: "dent_repair",
      src: "/assets/images/e5a9b2ad-2d46-4f85-8ae7-5e4260608a5a.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-suv-side",
      type: "image",
      titleAr: "عزل دقيق وتنعيم رفرف وباب سيارة الدفع الرباعي بعد السمكرة",
      titleEn: "Precision Masking & Side Panel Smoothing After Bodywork",
      category: "dent_repair",
      src: "/assets/images/efb82417-e126-49d5-8a81-cfb4ad4662d2.webp",
      aspect: "1.33",
      featured: true
    },
    {
      id: "img-equipment",
      type: "image",
      titleAr: "معدات اللحام والغاز وأجهزة سحب الصدمات داخل الورشة",
      titleEn: "Workshop Welding, Gas Torches & Body Straightening Tools",
      category: "workshop",
      src: "/assets/images/40bfa9c0-a5d6-44e1-87f3-ea5535803094.webp",
      aspect: "0.75",
      featured: false
    },
    {
      id: "img-workshop-hall",
      type: "image",
      titleAr: "صالة الورشة الرئيسية واستقبال ومتابعة صيانة السيارات",
      titleEn: "Main Workshop Hall & Active Vehicle Service Bays",
      category: "workshop",
      src: "/assets/images/3fbf6bab-98ca-4af3-ae37-502546a77195.webp",
      aspect: "0.75",
      featured: false
    },
    {
      id: "vid-17-oven",
      type: "video",
      titleAr: "رش بوية السيارة داخل كبينة بوية الفرن المعزولة",
      titleEn: "Spray Painting Inside Oven Baking Booth",
      category: "oven_paint",
      src: "/assets/videos/video_18.mp4",
      poster: "/assets/posters/video_18.webp",
      featured: true
    },
    {
      id: "vid-1-spray",
      type: "video",
      titleAr: "رش طبقات الأساس والمعالجة للسيارة بالورشة",
      titleEn: "Base Coat Application & Automotive Primer Spray",
      category: "oven_paint",
      src: "/assets/videos/video_1.mp4",
      poster: "/assets/posters/video_1.webp",
      featured: true
    },
    {
      id: "vid-11-collision",
      type: "video",
      titleAr: "صدمة خلفية قوية للرفرف والشاسيه قبل تعديل السمكرة",
      titleEn: "Severe Rear Collision Damage Before Chassis Straightening",
      category: "dent_repair",
      src: "/assets/videos/video_12.mp4",
      poster: "/assets/posters/video_12.webp",
      featured: true
    },
    {
      id: "vid-13-smoothed",
      type: "video",
      titleAr: "إعادة بناء واستقامة الرفرف الخلفي بعد السمكرة وسحب الصدمة",
      titleEn: "Rear Quarter Panel Perfectly Realigned & Primed After Repair",
      category: "dent_repair",
      src: "/assets/videos/video_14.mp4",
      poster: "/assets/posters/video_14.webp",
      featured: true
    },
    {
      id: "vid-14-gloss",
      type: "video",
      titleAr: "تشييك اللمعة ومطابقة اللون عند تسليم سيارة كامري بيضاء",
      titleEn: "Final Inspection & Color Matching On White Toyota Camry",
      category: "oven_paint",
      src: "/assets/videos/video_15.mp4",
      poster: "/assets/posters/video_15.webp",
      featured: true
    },
    {
      id: "vid-2-weld",
      type: "video",
      titleAr: "تعديل ولحام صاج الشنطة والقائم الخلفي",
      titleEn: "Trunk Frame & Rear Pillar Spot Welding & Straightening",
      category: "dent_repair",
      src: "/assets/videos/video_2.mp4",
      poster: "/assets/posters/video_2.webp",
      featured: false
    },
    {
      id: "vid-3-trunk",
      type: "video",
      titleAr: "ضبط ومطابقة فواصل الشنطة والأجنحة الجانبية",
      titleEn: "Trunk Panel Gap Alignment & Tolerance Tuning",
      category: "dent_repair",
      src: "/assets/videos/video_3.mp4",
      poster: "/assets/posters/video_3.webp",
      featured: false
    },
    {
      id: "vid-4-fender",
      type: "video",
      titleAr: "فحص استقامة الرفرف وخطوط الباب الجانبية",
      titleEn: "Fender Line Inspection & Body Contour Verification",
      category: "dent_repair",
      src: "/assets/videos/video_4.mp4",
      poster: "/assets/posters/video_4.webp",
      featured: false
    },
    {
      id: "vid-5-arch",
      type: "video",
      titleAr: "تعديل قوس العجلة والرفرف الأمامي بدقة",
      titleEn: "Front Wheel Arch & Fender Dent Realignment",
      category: "dent_repair",
      src: "/assets/videos/video_5.mp4",
      poster: "/assets/posters/video_5.webp",
      featured: false
    },
    {
      id: "vid-6-smoothing",
      type: "video",
      titleAr: "صنفرة وتنعيم السطح تمهيداً لرش البوية",
      titleEn: "Surface Sanding & Smoothing Before Oven Painting",
      category: "dent_repair",
      src: "/assets/videos/video_6.mp4",
      poster: "/assets/posters/video_6.webp",
      featured: false
    },
    {
      id: "vid-7-metal",
      type: "video",
      titleAr: "تشكيل وتعديل حافة الرفرف الحديدي يدوياً",
      titleEn: "Hand-Crafted Sheet Metal Shaping on Damaged Panel Edge",
      category: "dent_repair",
      src: "/assets/videos/video_7.mp4",
      poster: "/assets/posters/video_7.webp",
      featured: false
    },
    {
      id: "vid-8-masking",
      type: "video",
      titleAr: "عزل وتجهيز الأجزاء غير المرشوشة بالورق المخصص",
      titleEn: "Automotive Masking Paper Application Prior to Painting",
      category: "oven_paint",
      src: "/assets/videos/video_8.mp4",
      poster: "/assets/posters/video_8.webp",
      featured: false
    },
    {
      id: "vid-9-rear-dent",
      type: "video",
      titleAr: "معاينة صدمة الشنطة الخلفية والصدام",
      titleEn: "Trunk Lid & Rear Bumper Collision Assessment",
      category: "dent_repair",
      src: "/assets/videos/video_9.mp4",
      poster: "/assets/posters/video_9.webp",
      featured: false
    },
    {
      id: "vid-10-puller",
      type: "video",
      titleAr: "سحب ضربة الباب وإرجاع استقامة السطح",
      titleEn: "Door Ding Pulling & Smooth Contour Reversion",
      category: "dent_repair",
      src: "/assets/videos/video_10.mp4",
      poster: "/assets/posters/video_10.webp",
      featured: false
    },
    {
      id: "vid-12-chassis",
      type: "video",
      titleAr: "سحب شاسيه السيارة وتعديل القواعد السفلية",
      titleEn: "Chassis Alignment & Subframe Pulling Setup",
      category: "dent_repair",
      src: "/assets/videos/video_11.mp4",
      poster: "/assets/posters/video_11.webp",
      featured: false
    },
    {
      id: "vid-15-lights",
      type: "video",
      titleAr: "تطبيق وتثبيت الإسطبات والأنوار والصدام بعد البوية",
      titleEn: "Taillight Reassembly & Electrical Check Post-Paint",
      category: "electrical",
      src: "/assets/videos/video_16.mp4",
      poster: "/assets/posters/video_16.webp",
      featured: false
    },
    {
      id: "vid-16-prep",
      type: "video",
      titleAr: "إزالة الصدأ والبوية القديمة من حافة الرفرف",
      titleEn: "Old Paint Stripping & Wheel Arch Rust Preparation",
      category: "dent_repair",
      src: "/assets/videos/video_17.mp4",
      poster: "/assets/posters/video_17.webp",
      featured: false
    }
  ] as GalleryItem[]
};
