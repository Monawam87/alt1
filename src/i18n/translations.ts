export type Lang = 'ar' | 'en';

export type GalleryData = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
};

export type ReviewData = {
  id: number;
  name: string;
  role: string;
  rating: number;
  time: string;
  text: string;
};

export type FaqData = { q: string; a: string };
export type NavLink = { id: string; label: string };
export type StatData = { value: number; label: string; suffix: string; decimal?: boolean };
export type NearbyPlace = { name: string; rating: number; reviews: number; type: string };
export type HourEntry = { day: string; time: string };

export type Dict = {
  dir: 'rtl' | 'ltr';
  museumInfo: {
    name: string;
    shortName: string;
    tagline: string;
    rating: number;
    reviewCount: number;
    address: string;
    phone: string;
    hours: string;
    plusCode: string;
    description: string;
  };
  nav: NavLink[];
  hero: {
    city: string;
    reviews: string;
    locationShort: string;
    openToday: string;
    galleriesCount: string;
    exploreGalleries: string;
    planVisit: string;
    discoverMore: string;
    altMuseum: string;
  };
  about: {
    badge: string;
    title: string;
    heading: string;
    desc2: string;
    highlights: string[];
    exploreGalleries: string;
    badgeRooms: string;
    badgeRoomsLabel: string;
    altHall: string;
    altDetails: string;
  };
  stats: StatData[];
  galleries: {
    badge: string;
    title: string;
    subtitle: string;
    visitRoom: string;
  };
  galleryData: GalleryData[];
  reviews: {
    badge: string;
    title: string;
    reviewsLabel: string;
    topTagsTitle: string;
    tags: string[];
    prev: string;
    next: string;
    reviewN: string;
  };
  reviewData: ReviewData[];
  visit: {
    badge: string;
    title: string;
    hoursTitle: string;
    addressTitle: string;
    contactTitle: string;
    mosqueTitle: string;
    mosqueSubtitle: string;
    directions: string;
    altMosque: string;
    mapTitle: string;
    tips: { icon: 'Calendar' | 'Clock' | 'Navigation'; title: string; desc: string }[];
    hours: HourEntry[];
  };
  faq: {
    title: string;
    subtitle: string;
    data: FaqData[];
  };
  footer: {
    shortName: string;
    subtitle: string;
    quickLinks: string;
    nearby: string;
    reviews: string;
    contact: string;
    backToTop: string;
    copyright: string;
    social: string;
  };
  nearbyPlaces: NearbyPlace[];
  booking: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    date: string;
    time: string;
    visitors: string;
    visitType: string;
    typeIndividual: string;
    typeFamily: string;
    typeGroup: string;
    typeSchool: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    cancel: string;
    successTitle: string;
    successMessage: string;
    closeSuccess: string;
    required: string;
    invalidPhone: string;
    invalidEmail: string;
    selectDate: string;
    selectTime: string;
  };
};

const ar: Dict = {
  dir: 'rtl',
  museumInfo: {
    name: 'متحف مدينة الطيبات العالمية للعلوم والمعرفة',
    shortName: 'متحف الطيبات',
    tagline: 'مجمّع متاحف يبرز تراث المدينة ويتميّز بمسجد وآثار وعمارة تقليدية',
    rating: 4.5,
    reviewCount: 2655,
    address: '3170 ريحانة الجزيرة، الفيصلية، جدة 23442',
    phone: '056 386 6984',
    hours: 'يفتح يومياً من ٩ صباحاً حتى ٩ مساءً',
    plusCode: 'H5JG+9M الفيصلية، جدة',
    description:
      'يعد متحف مدينة الطيبات العالمية للعلوم والمعرفة من أبرز المعالم الثقافية في مدينة جدة، حيث يضم مجموعة متاحف متخصصة تعرض تاريخ العالم والمملكة العربية السعودية عبر العصور، بأسلوب سردي تفاعلي يمزج بين الأصالة والمعاصرة. يتميّز المتحف بمسجده الجميل وآثاره النادرة وعمارته التقليدية التي تعكس عراقة المدينة.',
  },
  nav: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'نبذة' },
    { id: 'galleries', label: 'القاعات' },
    { id: 'reviews', label: 'المراجعات' },
    { id: 'visit', label: 'الزيارة' },
  ],
  hero: {
    city: 'مدينة جدة',
    reviews: 'مراجعة',
    locationShort: 'الفيصلية، جدة',
    openToday: 'مفتوح اليوم حتى ٩ مساءً',
    galleriesCount: '14+ قاعة عرض',
    exploreGalleries: 'استكشف القاعات',
    planVisit: 'خطة زيارتك',
    discoverMore: 'اكتشف المزيد',
    altMuseum: 'متحف الطيبات',
  },
  about: {
    badge: 'نبذة عن المتحف',
    title: 'حيث يلتقي التاريخ بالمعرفة',
    heading: 'رحلة عبر الزمن في قلب جدة التاريخية',
    desc2:
      'يأخذك المتحف في رحلة ممتعة عبر الحضارات الإنسانية والعصور الإسلامية، من خلال قاعات منسقة بعناية تعرض القطع الأثرية والمخطوطات والنماذج المعمارية بأسلوب سردي يجمع بين الأصالة والمعاصرة.',
    highlights: [
      'معروضات أثرية نادرة من حضارات متعددة',
      'مسجد جميل بعمارة تقليدية أصيلة',
      'جولات إرشادية بأخصائيين في الآثار',
      'مناسب للعائلات والمدارس والسيّاح',
    ],
    exploreGalleries: 'تعرّف على القاعات',
    badgeRooms: '١٤+',
    badgeRoomsLabel: 'قاعة متخصصة',
    altHall: 'قاعة المتحف',
    altDetails: 'تفاصيل معمارية',
  },
  stats: [
    { value: 14, label: 'قاعة عرض متخصصة', suffix: '+' },
    { value: 1000, label: 'قطعة أثرية نادرة', suffix: '+' },
    { value: 2655, label: 'مراجعة زوّار', suffix: '' },
    { value: 4.5, label: 'تقييم عام', suffix: '/5', decimal: true },
  ],
  galleries: {
    badge: 'قاعات العرض',
    title: 'استكشف كنوز المتحف',
    subtitle:
      'ست قاعات متخصصة تأخذك في رحلة شاملة عبر التاريخ والفنون والعلوم، من فجر الحضارات إلى إرث الأمة الإسلامي',
    visitRoom: 'زيارة القاعة',
  },
  galleryData: [
    {
      id: 1,
      title: 'قاعة الحضارات القديمة',
      subtitle: 'من فجر التاريخ',
      description:
        'رحلة عبر أعرق الحضارات الإنسانية، من مصر الفرعونية وبلاد ما بين النهرين إلى حضارات الجزيرة العربية، عبر قطع أثرية ومجسمات ونقوش نادرة تحكي قصة الإنسان الأول.',
      image: '/images/IMG_7961.jpeg',
      icon: 'Globe',
    },
    {
      id: 2,
      title: 'قاعة التراث الإسلامي',
      subtitle: 'إرث خالد',
      description:
        'مخطوطات نادرة ونسخ قرآنية تاريخية وأعمال خطّ وعملات إسلامية من عصور مختلفة، تجسّد إسهامات الحضارة الإسلامية في العلوم والفنون والمعرفة الإنسانية.',
      image: '/images/IMG_7964.jpeg',
      icon: 'BookOpen',
    },
    {
      id: 3,
      title: 'قاعة العمارة التقليدية',
      subtitle: 'روح الحجاز',
      description:
        'نماذج معمارية دقيقة لبيوت جدة التراثية ومساجدها وأسواقها القديمة، تُبرز فنون النجارة والرواشين والزخارف الحجازية التي تميّز عمارة المنطقة.',
      image: '/images/IMG_7963.jpeg',
      icon: 'Building2',
    },
    {
      id: 4,
      title: 'قاعة المسجد والتاريخ',
      subtitle: 'أصالة الإيمان',
      description:
        'يتميّز المتحف بمسجد جميل بعمارته التقليدية، وتعرض القاعة تطوّر عمارة المساجد في الجزيرة العربية عبر القرون مع نماذج للمحاريب والمنابر.',
      image: '/images/IMG_7962.jpeg',
      icon: 'Landmark',
    },
    {
      id: 5,
      title: 'قاعة الفنون والخط العربي',
      subtitle: 'جماليات الحرف',
      description:
        'مقتنيات فنية تذخر بأعمال الخط العربي بأنماطه المختلفة - الكوفي والثلث والنسخ - إلى جانب الزخارف الهندسية والأرابيسك التي تملأ جدران المتحف.',
      image: '/images/IMG_7964.jpeg',
      icon: 'PenTool',
    },
    {
      id: 6,
      title: 'قالة العلوم والمعرفة',
      subtitle: 'إرث العلماء',
      description:
        'إنجازات العلماء المسلمين في الطب والفلك والرياضيات والكيمياء، عبر آلات علمية ومجسمات وخرائط تاريخية تروي قصة ازدهار العلوم في الحضارة الإسلامية.',
      image: '/images/IMG_7961.jpeg',
      icon: 'FlaskConical',
    },
  ],
  reviews: {
    badge: 'آراء الزوّار',
    title: 'ماذا قال زوّارنا',
    reviewsLabel: 'مراجعة',
    topTagsTitle: 'الكلمات الأكثر تكراراً في المراجعات',
    tags: ['مسجد', 'الإسلامي', 'الدخول', 'جميل', 'تاريخي', 'رائع', 'منظّم', 'ممتاز'],
    prev: 'السابق',
    next: 'التالي',
    reviewN: 'المراجعة',
  },
  reviewData: [
    {
      id: 1,
      name: 'عصام العسيري',
      role: 'مرشد محلي · 21 مراجعة · 55 صورة',
      rating: 5,
      time: 'قبل 8 أشهر',
      text: 'متحف جمييييييييل للغاية، يعرض تاريخ العالم والسعودية بشكل جميل وحميم، أنصح العائلات والأفراد والسيّاح والمؤسسات التعليمية بكل مراحلها للاستفادة من قطع المتحف في التعليم والثقافة والتاريخ والحضارة.',
    },
    {
      id: 2,
      name: 'إيمان الغامدي',
      role: 'مرشد محلي · 13 مراجعة · 21 صورة',
      rating: 5,
      time: 'قبل سنة',
      text: 'متحف رائع و مليء بالمعرفة و الأثريات على مر التاريخ والمعروضة بترتيب في أقسام منسقة بطريقة رائعة، إضافةً إلى الشرح المفصل من أخصائي الآثار الأستاذ مصطفى عجلان الذي كان مرافقنا طوال الجولة و أثرانا بكمية المعلومات و الشروحات الله يعطيه ألف عافية.',
    },
    {
      id: 3,
      name: 'محمد العارفي',
      role: 'مرشد محلي · 195 مراجعة · 141 صورة',
      rating: 5,
      time: 'قبل 5 أشهر',
      text: 'متحف الطيبات وبجواره مسجد جميل جدا، المكان تاريخي رايق يستحق الجلوس وقصص العرب، أنصح بالزيارة لكل من يبحث عن الثراء الثقافي والتاريخي في جدة.',
    },
  ],
  visit: {
    badge: 'خطّط زيارتك',
    title: 'نرحّب بكم في متحف الطيبات',
    hoursTitle: 'ساعات العمل',
    addressTitle: 'العنوان',
    contactTitle: 'للتواصل والحجز',
    mosqueTitle: 'مسجد المتحف',
    mosqueSubtitle: 'عمارة تقليدية أصيلة في قلب المجمّع',
    directions: 'الاتجاهات إلى المتحف',
    altMosque: 'مسجد المتحف',
    mapTitle: 'موقع المتحف',
    tips: [
      { icon: 'Calendar', title: 'الحجز المسبق', desc: 'يُنصح بالاتصال للمجموعات' },
      { icon: 'Clock', title: 'مدة الزيارة', desc: '٢-٣ ساعات في المتوسط' },
      { icon: 'Navigation', title: 'المواقف', desc: 'موقف مجاني للزوّار' }
    ],
    hours: [
      { day: 'السبت', time: '٩ ص — ٩ م' },
      { day: 'الأحد', time: '٩ ص — ٩ م' },
      { day: 'الإثنين', time: '٩ ص — ٩ م' },
      { day: 'الثلاثاء', time: '٩ ص — ٩ م' },
      { day: 'الأربعاء', time: '٩ ص — ٩ م' },
      { day: 'الخميس', time: '٩ ص — ٩ م' },
      { day: 'الجمعة', time: '٤ م — ٩ م' },
    ],
  },
  faq: {
    title: 'الأسئلة الشائعة',
    subtitle: 'كل ما تحتاج معرفته قبل زيارتك لمتحف الطيبات',
    data: [
      { q: 'ما هي ساعات عمل المتحف؟', a: 'يفتح المتحف يومياً من الساعة ٩ صباحاً حتى ٩ مساءً، طوال أيام الأسبوع بما فيها العطلات الرسمية.' },
      { q: 'هل يوجد رسوم دخول للزيارة؟', a: 'نعم، يوجد تذكرة دخول بأسعار رمزية. تختلف الأسعار للأفراد والعائلات والمجموعات الطلابية. يُنصح بالاتصال مسبقاً للمجموعات الكبيرة.' },
      { q: 'هل المتحف مناسب للعائلات والأطفال؟', a: 'بالتأكيد، المتحف مصمم ليكون تجربة تعليمية ممتعة لجميع الأعمار، ويوفّر برامج تعليمية مخصصة للمدارس والمؤسسات التعليمية.' },
      { q: 'هل تتوفر جولات إرشادية؟', a: 'نعم، يوفّر المتحف جولات إرشادية بمرشدين متخصصين في الآثار والتاريخ، يمكن حجزها مسبقاً عبر الهاتف أو عند البوابة.' },
      { q: 'هل يوجد موقف للسيارات؟', a: 'نعم، يتوفر موقف سيارات مجاني للزوّار بالقرب من مدخل المتحف.' },
      { q: 'كم تستغرق زيارة المتحف؟', a: 'تستغرق الزيارة المعتادة من ساعتين إلى ثلاث ساعات لاستعراض جميع القاعات، ويمكن تمديد الوقت للراغبين في التأمل والقراءة التفصيلية.' },
    ],
  },
  footer: {
    shortName: 'متحف الطيبات',
    subtitle: 'للعلوم والمعرفة',
    quickLinks: 'روابط سريعة',
    nearby: 'أماكن قريبة',
    reviews: 'مراجعة',
    contact: 'تواصل معنا',
    backToTop: 'العودة للأعلى',
    copyright: 'متحف مدينة الطيبات العالمية للعلوم والمعرفة. جميع الحقوق محفوظة.',
    social: 'تواصل اجتماعي',
  },
  nearbyPlaces: [
    { name: 'متحف عبدالرؤوف حسن خليل', rating: 4.5, reviews: 459, type: 'متحف' },
    { name: 'متحف بيت نصيف', rating: 4.4, reviews: 6161, type: 'متحف التاريخ المحلي' },
    { name: 'دار الفنون الإسلامية بجدة', rating: 4.7, reviews: 639, type: 'متحف' },
    { name: 'بيت البلد', rating: 4.3, reviews: 247, type: 'متحف التاريخ المحلي' },
  ],
  booking: {
    title: 'الحجز المسبق',
    subtitle: 'احجز زيارتك مسبقاً لضمان أفضل تجربة',
    name: 'الاسم الكامل',
    namePlaceholder: 'أدخل اسمك الكامل',
    phone: 'رقم الهاتف',
    phonePlaceholder: '05xxxxxxxx',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'example@email.com',
    date: 'تاريخ الزيارة',
    time: 'وقت الزيارة',
    visitors: 'عدد الزوّار',
    visitType: 'نوع الزيارة',
    typeIndividual: 'فردي',
    typeFamily: 'عائلي',
    typeGroup: 'مجموعة',
    typeSchool: 'مدرسة',
    notes: 'ملاحظات إضافية',
    notesPlaceholder: 'أي طلبات خاصة أو ملاحظات...',
    submit: 'تأكيد الحجز',
    cancel: 'إلغاء',
    successTitle: 'تم استلام طلب الحجز!',
    successMessage: 'سنتواصل معك قريباً لتأكيد موعد زيارتك. شكراً لاختيارك متحف الطيبات.',
    closeSuccess: 'إغلاق',
    required: 'هذا الحقل مطلوب',
    invalidPhone: 'رقم الهاتف غير صحيح',
    invalidEmail: 'البريد الإلكتروني غير صحيح',
    selectDate: 'اختر التاريخ',
    selectTime: 'اختر الوقت',
  },
};

const en: Dict = {
  dir: 'ltr',
  museumInfo: {
    name: 'Taybat City International Museum of Science & Knowledge',
    shortName: 'Taybat Museum',
    tagline: 'A museum complex showcasing the city\u2019s heritage, featuring a mosque, artifacts, and traditional architecture',
    rating: 4.5,
    reviewCount: 2655,
    address: '3170 Rayhanat Al Jazira, Al Faisaliyah, Jeddah 23442',
    phone: '056 386 6984',
    hours: 'Open daily from 9 AM to 9 PM',
    plusCode: 'H5JG+9M Al Faisaliyah, Jeddah',
    description:
      'The Taybat City International Museum of Science & Knowledge is one of Jeddah\u2019s most prominent cultural landmarks, housing a collection of specialized museums that display the history of the world and the Kingdom of Saudi Arabia across the ages, in an interactive narrative style blending authenticity with modernity. The museum is distinguished by its beautiful mosque, rare artifacts, and traditional architecture reflecting the city\u2019s heritage.',
  },
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'galleries', label: 'Galleries' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'visit', label: 'Visit' },
  ],
  hero: {
    city: 'City of Jeddah',
    reviews: 'reviews',
    locationShort: 'Al Faisaliyah, Jeddah',
    openToday: 'Open today until 9 PM',
    galleriesCount: '14+ Exhibition Halls',
    exploreGalleries: 'Explore Galleries',
    planVisit: 'Plan Your Visit',
    discoverMore: 'Discover More',
    altMuseum: 'Taybat Museum',
  },
  about: {
    badge: 'About the Museum',
    title: 'Where History Meets Knowledge',
    heading: 'A Journey Through Time in the Heart of Historic Jeddah',
    desc2:
      'The museum takes you on an engaging journey through human civilizations and Islamic eras, through carefully curated halls displaying artifacts, manuscripts, and architectural models in a narrative style that blends authenticity with modernity.',
    highlights: [
      'Rare artifacts from multiple civilizations',
      'Beautiful mosque with authentic traditional architecture',
      'Guided tours by archaeology specialists',
      'Suitable for families, schools, and tourists',
    ],
    exploreGalleries: 'Explore the Halls',
    badgeRooms: '14+',
    badgeRoomsLabel: 'Specialized Halls',
    altHall: 'Museum Hall',
    altDetails: 'Architectural Details',
  },
  stats: [
    { value: 14, label: 'Specialized Halls', suffix: '+' },
    { value: 1000, label: 'Rare Artifacts', suffix: '+' },
    { value: 2655, label: 'Visitor Reviews', suffix: '' },
    { value: 4.5, label: 'Overall Rating', suffix: '/5', decimal: true },
  ],
  galleries: {
    badge: 'Exhibition Halls',
    title: 'Explore the Museum\u2019s Treasures',
    subtitle:
      'Six specialized halls take you on a comprehensive journey through history, arts, and sciences, from the dawn of civilizations to the Islamic heritage',
    visitRoom: 'Visit Hall',
  },
  galleryData: [
    {
      id: 1,
      title: 'Hall of Ancient Civilizations',
      subtitle: 'From the Dawn of History',
      description:
        'A journey through the oldest human civilizations, from Pharaonic Egypt and Mesopotamia to the civilizations of the Arabian Peninsula, through rare artifacts, models, and inscriptions telling the story of early humanity.',
      image: '/images/IMG_7961.jpeg',
      icon: 'Globe',
    },
    {
      id: 2,
      title: 'Hall of Islamic Heritage',
      subtitle: 'A Timeless Legacy',
      description:
        'Rare manuscripts, historical Quranic copies, calligraphy works, and Islamic coins from various eras, embodying the contributions of Islamic civilization to sciences, arts, and human knowledge.',
      image: '/images/IMG_7964.jpeg',
      icon: 'BookOpen',
    },
    {
      id: 3,
      title: 'Hall of Traditional Architecture',
      subtitle: 'Spirit of the Hijaz',
      description:
        'Precise architectural models of Jeddah\u2019s heritage houses, mosques, and old markets, showcasing the woodwork, rawashin, and Hijazi ornaments that distinguish the region\u2019s architecture.',
      image: '/images/IMG_7963.jpeg',
      icon: 'Building2',
    },
    {
      id: 4,
      title: 'Hall of the Mosque & History',
      subtitle: 'Authenticity of Faith',
      description:
        'The museum features a beautiful mosque with traditional architecture. This hall displays the evolution of mosque architecture in the Arabian Peninsula across centuries with models of mihrabs and minbars.',
      image: '/images/IMG_7962.jpeg',
      icon: 'Landmark',
    },
    {
      id: 5,
      title: 'Hall of Arts & Arabic Calligraphy',
      subtitle: 'Beauty of Crafts',
      description:
        'Artistic pieces rich with Arabic calligraphy in its various styles \u2014 Kufic, Thuluth, and Naskh \u2014 alongside geometric patterns and arabesque that fill the museum\u2019s walls.',
      image: '/images/IMG_7964.jpeg',
      icon: 'PenTool',
    },
    {
      id: 6,
      title: 'Hall of Science & Knowledge',
      subtitle: 'Legacy of Scholars',
      description:
        'Achievements of Muslim scholars in medicine, astronomy, mathematics, and chemistry, through scientific instruments, models, and historical maps telling the story of the flourishing of sciences in Islamic civilization.',
      image: '/images/IMG_7961.jpeg',
      icon: 'FlaskConical',
    },
  ],
  reviews: {
    badge: 'Visitor Reviews',
    title: 'What Our Visitors Say',
    reviewsLabel: 'reviews',
    topTagsTitle: 'Most Frequent Words in Reviews',
    tags: ['Mosque', 'Islamic', 'Entrance', 'Beautiful', 'Historic', 'Wonderful', 'Organized', 'Excellent'],
    prev: 'Previous',
    next: 'Next',
    reviewN: 'Review',
  },
  reviewData: [
    {
      id: 1,
      name: 'Essam Al-Asiri',
      role: 'Local Guide \u00b7 21 reviews \u00b7 55 photos',
      rating: 5,
      time: '8 months ago',
      text: 'A beeaaaautiful museum that displays the history of the world and Saudi Arabia in a beautiful and intimate way. I recommend it to families, individuals, tourists, and educational institutions at all stages to benefit from the museum\u2019s pieces in education, culture, history, and civilization.',
    },
    {
      id: 2,
      name: 'Eman Al-Ghamdi',
      role: 'Local Guide \u00b7 13 reviews \u00b7 21 photos',
      rating: 5,
      time: 'a year ago',
      text: 'A wonderful museum full of knowledge and antiquities throughout history, displayed in an organized manner in well-arranged sections. Added to that was the detailed explanation from archaeology specialist Mr. Mostafa Ajlan who accompanied us throughout the tour and enriched us with information and explanations. May God reward him abundantly.',
    },
    {
      id: 3,
      name: 'Mohammed Al-Arefi',
      role: 'Local Guide \u00b7 195 reviews \u00b7 141 photos',
      rating: 5,
      time: '5 months ago',
      text: 'Taybat Museum and next to it a very beautiful mosque. The place is historic and cool, worth sitting and hearing stories of the Arabs. I recommend visiting for anyone seeking cultural and historical richness in Jeddah.',
    },
  ],
  visit: {
    badge: 'Plan Your Visit',
    title: 'Welcome to Taybat Museum',
    hoursTitle: 'Opening Hours',
    addressTitle: 'Address',
    contactTitle: 'Contact & Booking',
    mosqueTitle: 'Museum Mosque',
    mosqueSubtitle: 'Authentic traditional architecture in the heart of the complex',
    directions: 'Directions to the Museum',
    altMosque: 'Museum Mosque',
    mapTitle: 'Museum Location',
    tips: [
      { icon: 'Calendar', title: 'Pre-Booking', desc: 'Calling ahead is recommended for groups' },
      { icon: 'Clock', title: 'Visit Duration', desc: '2-3 hours on average' },
      { icon: 'Navigation', title: 'Parking', desc: 'Free parking for visitors' },
    ],
    hours: [
      { day: 'Saturday', time: '9 AM \u2014 9 PM' },
      { day: 'Sunday', time: '9 AM \u2014 9 PM' },
      { day: 'Monday', time: '9 AM \u2014 9 PM' },
      { day: 'Tuesday', time: '9 AM \u2014 9 PM' },
      { day: 'Wednesday', time: '9 AM \u2014 9 PM' },
      { day: 'Thursday', time: '9 AM \u2014 9 PM' },
      { day: 'Friday', time: '4 PM \u2014 9 PM' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know before visiting Taybat Museum',
    data: [
      { q: 'What are the museum\u2019s opening hours?', a: 'The museum is open daily from 9 AM to 9 PM, throughout the week including public holidays.' },
      { q: 'Is there an entrance fee?', a: 'Yes, there is a nominal entrance ticket. Prices vary for individuals, families, and student groups. Calling ahead is recommended for large groups.' },
      { q: 'Is the museum suitable for families and children?', a: 'Absolutely. The museum is designed to be an enjoyable educational experience for all ages, and offers specialized programs for schools and educational institutions.' },
      { q: 'Are guided tours available?', a: 'Yes, the museum offers guided tours with specialized guides in archaeology and history, which can be booked in advance by phone or at the gate.' },
      { q: 'Is there parking available?', a: 'Yes, there is a free parking lot for visitors near the museum entrance.' },
      { q: 'How long does a museum visit take?', a: 'A typical visit takes two to three hours to explore all the halls, and can be extended for those who wish to contemplate and read in detail.' },
    ],
  },
  footer: {
    shortName: 'Taybat Museum',
    subtitle: 'Science & Knowledge',
    quickLinks: 'Quick Links',
    nearby: 'Nearby Places',
    reviews: 'reviews',
    contact: 'Contact Us',
    backToTop: 'Back to Top',
    copyright: 'Taybat City International Museum of Science & Knowledge. All rights reserved.',
    social: 'Social Media',
  },
  nearbyPlaces: [
    { name: 'Abdulraouf Hassan Khalil Museum', rating: 4.5, reviews: 459, type: 'Museum' },
    { name: 'Nassif House Museum', rating: 4.4, reviews: 6161, type: 'Local History Museum' },
    { name: 'Jeddah Islamic Arts House', rating: 4.7, reviews: 639, type: 'Museum' },
    { name: 'Bayt Al-Balad', rating: 4.3, reviews: 247, type: 'Local History Museum' },
  ],
  booking: {
    title: 'Pre-Booking',
    subtitle: 'Book your visit in advance to ensure the best experience',
    name: 'Full Name',
    namePlaceholder: 'Enter your full name',
    phone: 'Phone Number',
    phonePlaceholder: '05xxxxxxxx',
    email: 'Email Address',
    emailPlaceholder: 'example@email.com',
    date: 'Visit Date',
    time: 'Visit Time',
    visitors: 'Number of Visitors',
    visitType: 'Visit Type',
    typeIndividual: 'Individual',
    typeFamily: 'Family',
    typeGroup: 'Group',
    typeSchool: 'School',
    notes: 'Additional Notes',
    notesPlaceholder: 'Any special requests or notes...',
    submit: 'Confirm Booking',
    cancel: 'Cancel',
    successTitle: 'Booking Request Received!',
    successMessage: 'We will contact you soon to confirm your visit date. Thank you for choosing Taybat Museum.',
    closeSuccess: 'Close',
    required: 'This field is required',
    invalidPhone: 'Invalid phone number',
    invalidEmail: 'Invalid email address',
    selectDate: 'Select date',
    selectTime: 'Select time',
  },
};

export const translations: Record<Lang, Dict> = { ar, en };
