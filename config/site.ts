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
  priceNoteAr?: string;
  priceNoteEn?: string;
  warrantyBadgeAr?: string;
  warrantyBadgeEn?: string;
  experienceBadgeAr?: string;
  experienceBadgeEn?: string;
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

export interface WorkerMember {
  id: string;
  roleAr: string;
  roleEn: string;
  specialtyAr: string;
  specialtyEn: string;
  experienceYears: number;
  experienceAr: string;
  experienceEn: string;
  bioAr: string;
  bioEn: string;
  image: string;
  imageThumb: string;
  secondaryImage?: string;
  serviceId: string;
  skillsAr: string[];
  skillsEn: string[];
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
  // 4. Statistics: Confirmed experience, warranty and starting price
  statistics: {
    enabled: true,
    yearsOverallExperience: "5+",
    yearsOverallExperienceNote: "Confirmed by owner: 5 years of overall automotive experience",
    yearsDentingPainting: "3-4",
    yearsDentingPaintingNote: "Confirmed by owner: 3-4 years specialized experience in denting & painting across famous shops in Jeddah",
    startingPriceSar: 2000,
    startingPriceNote: "Confirmed by owner: Denting & painting starts from ~2,000 SAR, depending on vehicle condition and damage extent",
    warrantyDuration: "2 years",
    warrantyDurationNote: "Confirmed by owner: 2-year warranty on oven-baked paint against peeling and fading",
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
    yearsOverall: "5+",
    yearsDentingPainting: "3-4",
    yearsDentingPaintingAr: "3-4 سنوات خبرة بأشهر ورش جدة",
    yearsDentingPaintingEn: "3-4 Years in Famous Jeddah Shops",
    warrantyYears: 2,
    warrantyAr: "ضمان سنتين على بوية الفرن",
    warrantyEn: "2-Year Oven Paint Warranty",
    startingPriceSar: 2000,
    startingPriceAr: "يبدأ من 2,000 ريال (حسب حالة السيارة)",
    startingPriceEn: "Starts from 2,000 SAR (Based on Condition)",
    source: "Google Reviews",
  },
  pricing: {
    dentPaintingStartingSar: 2000,
    dentPaintingStartingAr: "يبدأ من 2,000 ريال",
    dentPaintingStartingEn: "Starts from 2,000 SAR",
    noteAr: "تبدأ أسعار السمكرة وبوية الفرن من حوالي 2,000 ريال، وتعتمد التكلفة على حالة ونظافة السيارة ونوعها وحجم وعمق الصدمة.",
    noteEn: "Denting and oven paint starts from ~2,000 SAR; exact pricing depends on vehicle condition, car model, and damage depth.",
  },
  warranty: {
    years: 2,
    titleAr: "ضمان سنتين على بوية الفرن",
    titleEn: "2-Year Oven Paint Warranty",
    descAr: "نقدم ضماناً لمدة سنتين على بوية الفرن ضد التقشير وتغير اللون وبهتان اللمعة لراحة بال العميل التامة.",
    descEn: "2-year comprehensive warranty on oven-baked paint against peeling, fading, and bubbling for complete peace of mind.",
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
      priceNoteAr: "الأسعار تبدأ من 2,000 ريال (حسب حالة السيارة وعمق وحجم الصدمة)",
      priceNoteEn: "Starts from ~2,000 SAR (Contingent upon vehicle condition & damage extent)",
      experienceBadgeAr: "خبرة 3-4 سنوات بأشهر ورش ومراكز جدة",
      experienceBadgeEn: "3-4 Years in Famous Jeddah Shops",
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
      descriptionAr: "نعتمد في مركز جدة على كبينة بوية فرن معزولة ومجهزة بنظام فلترة هواء لمنع ذرات الغبار أثناء الرش، مع دهانات سيارات معتمدة ومطابقة دقيقة لدرجات اللون الأصلية وتجفيف متوازن داخل الفرن، مع ضمان لمدة سنتين.",
      descriptionEn: "We utilize an enclosed oven baking booth equipped with air filtration to eliminate airborne dust. Using automotive paints, precise color matching, uniform curing inside the oven baking booth, and a 2-year warranty, we deliver an enduring showroom finish.",
      icon: "PaintBucket",
      badgeAr: "ضمان سنتين على بوية الفرن",
      badgeEn: "2-Year Oven Paint Warranty",
      warrantyBadgeAr: "ضمان سنتين على بوية الفرن ضد التقشير والبهتان",
      warrantyBadgeEn: "2-Year Warranty against peeling and fading",
      priceNoteAr: "الأسعار تبدأ من 2,000 ريال (حسب حالة ونظافة السيارة ونوعها)",
      priceNoteEn: "Starts from ~2,000 SAR (Depends on vehicle condition & model)",
      experienceBadgeAr: "خبرة 3-4 سنوات بأشهر ورش ومراكز صيانة جدة",
      experienceBadgeEn: "3-4 Years in Renowned Jeddah Workshops",
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
  team: [
    {
      id: "worker-denting",
      roleAr: "فني سمكرة وتعديل صدمات الهيكل",
      roleEn: "Senior Body & Dent Repair Craftsman",
      specialtyAr: "سمكرة وبوية وتعديل الصدمات والشاسيه بدقة متناهية",
      specialtyEn: "Auto body straightening, dent repair & chassis restoration",
      experienceYears: 5,
      experienceAr: "5 سنوات خبرة معتمدة",
      experienceEn: "5 Years Hands-on Experience",
      bioAr: "يمتلك خبرة تمتد لـ 5 سنوات في سمكرة وتعديل صدمات مختلف أنواع السيارات بدقة متناهية، وإصلاح الشاسيه والصاج وسحب الضربات وإرجاع أبعاد وفواصل الوكالة الأصلية.",
      bioEn: "Specializes in precision auto body repair and chassis realignment with 5 years of proven hands-on experience, restoring factory body lines and tolerances on all passenger cars and SUVs.",
      image: "/assets/workers/worker-dent-primary.webp",
      imageThumb: "/assets/workers/worker-dent-primary-400.webp",
      secondaryImage: "/assets/workers/worker-dent-standing.webp",
      serviceId: "dent_repair",
      skillsAr: [
        "سحب الصدمات وتعديل الشاسيه",
        "تعديل الرفارف، الأبواب، الكبوت والشنطة",
        "ضبط فواصل الأبواب وتطابق مقاييس المصنع",
        "صنفرة وتجهيز الأسطح المعدنية قبل الدهان"
      ],
      skillsEn: [
        "Chassis realignment & hydraulic dent pulling",
        "Fender, door, hood & trunk reconstruction",
        "Factory gap tolerance & line calibration",
        "Surface smoothing & anti-rust foundation"
      ]
    },
    {
      id: "worker-paint-rogan",
      roleAr: "فني دهان بوية فرن وروغن وتلميع السيارات",
      roleEn: "Automotive Paint, Oven Coating & Rogan Specialist",
      specialtyAr: "دهان بوية فرن، رش طبقات الحماية، وروغن وتلميع السيارات",
      specialtyEn: "Oven-baked spray painting, protective coatings, Rogan & high-gloss finishing",
      experienceYears: 5,
      experienceAr: "5 سنوات خبرة متخصصة",
      experienceEn: "5 Years Dedicated Experience",
      bioAr: "متخصص في دهان وبوية الفرن وروغن السيارات بخبرة 5 سنوات، يتقن مطابقة الألوان بالكمبيوتر ورش طبقات البرايمر والورنيش الكريستالي داخل كبينة بوية الفرن المعزولة لضمان أعلى بريق وحماية تدوم لسنوات.",
      bioEn: "Automotive paint and 'Rogan' coating specialist with 5 years of dedicated craftsmanship, mastering computerized color formulation, primer and clear coat application inside the sealed oven baking booth for a long-lasting showroom gloss.",
      image: "/assets/workers/worker-paint-primary.webp",
      imageThumb: "/assets/workers/worker-paint-primary-400.webp",
      secondaryImage: "/assets/workers/worker-paint-car.webp",
      serviceId: "oven_paint",
      skillsAr: [
        "مطابقة ألوان الوكالة بالكمبيوتر 100%",
        "رش بوية فرن داخل كبينة معزولة خالية من الغبار",
        "أعمال الدهان والروغن (Rogan) وحماية الطلاء",
        "تلميع كريستالي ومعالجة متوازنة للبوية بالحرارة"
      ],
      skillsEn: [
        "100% computerized factory color match",
        "Dust-free spray painting in sealed oven booth",
        "Professional Rogan coating & surface gloss",
        "High-gloss clear coat & thermal curing"
      ]
    }
  ] as WorkerMember[],
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
      qAr: "من يشرف على سمكرة ودهان وروغن سيارتي في مركز جدة؟",
      qEn: "Who oversees the dent repair, painting, and Rogan work on my car?",
      aAr: "يشرف على سيارتك فنيان متمرسان؛ الأول متخصص في سمكرة وتعديل صدمات الهيكل والشاسيه بخبرة 5 سنوات، والثاني متخصص في رش بوية الفرن وروغن وتلميع وحماية طلاء السيارات بخبرة 5 سنوات، وكلاهما يمتلكان مهارة عالية ودقة متناهية لضمان أفضل نتيجة.",
      aEn: "Your car is handled by two dedicated specialists: our senior body repair craftsman with 5 years experience in denting and chassis alignment, and our automotive paint and Rogan coating specialist with 5 years experience in oven spray painting and high-gloss finishing."
    },
    {
      qAr: "كم تبلغ أسعار السمكرة ورش بوية الفرن لديكم؟",
      qEn: "How much does dent repair and oven painting cost at Markaz Jadda?",
      aAr: "تبدأ أسعار السمكرة ورش بوية الفرن من حوالي 2,000 ريال، وتعتمد التكلفة الدقيقة على حالة ونظافة السيارة، نوع وموديل المركبة، وحجم وعمق الصدمة وعدد القطع المراد إصلاحها. يمكنك إرسال صور الصدمة عبر واتساب للحصول على استفسار سريع ومباشر.",
      aEn: "Denting and oven-baked painting starts from ~2,000 SAR. The exact price depends on your vehicle's condition, car make/model, damage depth, and the number of affected panels. Send photos via WhatsApp for an immediate consultation."
    },
    {
      qAr: "هل يوجد ضمان على رش بوية الفرن؟",
      qEn: "Do you offer a warranty on oven-baked paint?",
      aAr: "نعم، نقدم ضماناً معتمداً لمدة سنتين (2 سنة) على بوية الفرن ضد التقشير وتغير اللون وبهتان اللمعة، بفضل استخدام دهانات سيارات معتمدة وكبينة فرن معزولة تماماً تضمن معالجة متوازنة للطلاء.",
      aEn: "Yes, we provide a full 2-year warranty on oven-baked paint against peeling, color fading, and clear coat failure, backed by certified automotive paints and a sealed, dust-free baking booth."
    },
    {
      qAr: "ما هي خبرة طاقم السمكرة والبوية في ورشة مركز جدة؟",
      qEn: "What is your crew's experience in auto denting and oven painting?",
      aAr: "يمتلك طاقمنا الفني خبرة متخصصة من 3 إلى 4 سنوات في سمكرة وبوية السيارات تم صقلها في أشهر ورش ومراكز صيانة السيارات بجدة، مع خلفية ميكانيكية شاملة تتجاوز 5 سنوات لضمان أعلى مستويات الإتقان.",
      aEn: "Our craftsmen hold 3–4 years of specialized expertise in auto denting and oven painting acquired across renowned body shops in Jeddah, supported by over 5+ years of overall automotive workshop experience."
    },
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
    },
    {
      id: "img-entrance-elantra",
      type: "image",
      titleAr: "واجهة ومدخل ورشة مركز جدة واستقبال السيارات بالورشة",
      titleEn: "Markaz Jadda Workshop Reception Under Official Signboard",
      category: "workshop",
      src: "/assets/images/baa4182a-e03a-4da8-958d-4e95ec2bc6b1.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-sonata-dent-repair",
      type: "image",
      titleAr: "سمكرة وتعديل صدمة خلفية للرفرف والصدام لسيارة هيونداي",
      titleEn: "Rear Quarter Panel & Bumper Collision Repair on Hyundai Sonata",
      category: "dent_repair",
      src: "/assets/images/ed5239e0-4a12-4d4e-ad00-eae927d61f6d.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-sonata-primer-filler",
      type: "image",
      titleAr: "تأسيس ومعجون الرفرف الخلفي بعد استعدال الصدمة تمهيداً للرش",
      titleEn: "Rear Quarter Body Filler & Primer Sanded Smooth for Paint",
      category: "dent_repair",
      src: "/assets/images/3f701acf-948b-4def-ba2b-2fb36996c03d.webp",
      aspect: "1.33",
      featured: false
    },
    {
      id: "img-sedan-gloss-finish",
      type: "image",
      titleAr: "لمعة ونعومة بوية جانب السيارة بعد الرش بالفرن والمعالجة",
      titleEn: "High-Gloss Side Panel Finish After Oven-Bake Painting",
      category: "oven_paint",
      src: "/assets/images/6732e1e0-8650-4635-9245-d76bbeda1997.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "img-jeep-body-restoration",
      type: "image",
      titleAr: "تجهيز وتعديل صاج الجانب والرفارف لسيارة جيب بالورشة",
      titleEn: "Side Panels & Fender Restoration on Jeep Cherokee",
      category: "dent_repair",
      src: "/assets/images/03b7646b-71a4-4ced-9333-c5fece2bca91.webp",
      aspect: "1.33",
      featured: false
    },
    {
      id: "img-jeep-taillight-prep",
      type: "image",
      titleAr: "فك وتجهيز مكان الإسطب والرفرف الخلفي لسيارة الدفع الرباعي",
      titleEn: "Rear Quarter & Taillight Area Disassembly & Body Prep",
      category: "dent_repair",
      src: "/assets/images/0c8467c6-1539-4019-bdd9-2c9488fa5269.webp",
      aspect: "1.33",
      featured: false
    },
    {
      id: "img-jeep-hood-grille-paint",
      type: "image",
      titleAr: "تجهيز الكبوت والواجهة الأمامية لسيارة الجيب للرش والتنعيم",
      titleEn: "Jeep Hood & Front Grille Prepped for Paint Application",
      category: "oven_paint",
      src: "/assets/images/9c7761fd-a3c9-4c7b-93ad-615b7b76b4b5.webp",
      aspect: "0.75",
      featured: false
    },
    {
      id: "img-jeep-tailgate-sanding",
      type: "image",
      titleAr: "صنفرة وتأسيس باب الشنطة الخلفي لسيارة الجيب قبل دهان الفرن",
      titleEn: "Jeep Rear Tailgate Sanding & Surface Primer Preparation",
      category: "dent_repair",
      src: "/assets/images/aafb014b-597b-4058-9b2c-8bcb98c22e3b.webp",
      aspect: "0.75",
      featured: false
    },
    {
      id: "img-front-electrical-radiator",
      type: "image",
      titleAr: "وزن صدر السيارة الأمامي وتركيب الإضاءات وتوصيل الكهرباء بعد الصدمة",
      titleEn: "Front Radiator Support Alignment & Headlight Electrical Assembly",
      category: "electrical",
      src: "/assets/images/fd1f83a5-e84b-43f4-a7e9-1b8de64f0e77.webp",
      aspect: "0.75",
      featured: true
    },
    {
      id: "vid-19-jeep-prep",
      type: "video",
      titleAr: "جولة تفقدية لسيارة جيب أثناء مراحل التجهيز والصنفرة لدهان الفرن",
      titleEn: "Jeep Liberty Surface Preparation Walkthrough in Paint Bay",
      category: "oven_paint",
      src: "/assets/videos/video_19.mp4",
      poster: "/assets/posters/video_19.webp",
      featured: true
    },
    {
      id: "vid-20-sonata-inspection",
      type: "video",
      titleAr: "معاينة استقامة الصاج والرفرف الخلفي لسيارة هيونداي بعد السمكرة",
      titleEn: "Rear Body Straightness & Dent Repair Inspection on Hyundai",
      category: "dent_repair",
      src: "/assets/videos/video_20.mp4",
      poster: "/assets/posters/video_20.webp",
      featured: true
    },
    {
      id: "img-worker-dent",
      type: "image",
      titleAr: "فني السمكرة وتعديل صدمات الهيكل بورشة مركز جدة (خبرة 5 سنوات)",
      titleEn: "Senior Body & Dent Repair Craftsman at Markaz Jadda (5 Years Experience)",
      category: "workshop",
      src: "/assets/workers/worker-dent-primary.webp",
      aspect: "1.33",
      featured: true
    },
    {
      id: "img-worker-paint-rogan",
      type: "image",
      titleAr: "فني دهان بوية الفرن وروغن وتلميع السيارات بمركز جدة (خبرة 5 سنوات)",
      titleEn: "Automotive Paint, Oven Coating & Rogan Specialist (5 Years Experience)",
      category: "workshop",
      src: "/assets/workers/worker-paint-primary.webp",
      aspect: "1.33",
      featured: true
    }
  ] as GalleryItem[]
};
