
import { SITE_CONFIG } from './config';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      contact: 'Get Strategy',
      getStarted: 'Join Now'
    },
    hero: {
      badge: 'More than a design service',
      headline: 'The Creative Partner Your Channel Deserves',
      subheadline: 'We don\'t just send files. We sync with your vision, analyze your niche, and deliver visual weapons that win the home-page battle.',
      ctaPrimary: 'Start Visual Audit',
      ctaSecondary: 'View Portfolio',
      before: 'Standard DIY',
      after: 'Thumbify Strategy',
      boring: 'Ignored (2.1% CTR)',
      statsReach: '+300% Engagement',
      statsStopper: 'Scroll Stopper',
      famousTitle: 'Built for Legends',
      famousSub: 'We treat every thumbnail as a billion-dollar asset.'
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'The secret weapon behind the world\'s fastest-growing channels.'
    },
    ai: {
      badge: 'Instant Idea Engine',
      title: 'Try Our Thumbnail Strategist',
      desc: 'Not sure what thumbnail works? Enter your video title and our AI will suggest 3 concepts.',
      placeholder: 'Enter your video title (e.g. "I built a secret room")',
      button: 'Generate Ideas',
      thinking: 'Thinking...',
      suggestions: 'AI Suggestions'
    },
    chat: {
      title: 'Thumbify AI Support',
      welcome: 'Hello! I am your Thumbify AI assistant. How can I help you grow your channel today?',
      placeholder: 'Type your message...',
      send: 'Send',
      thinking: 'Thinking...'
    },
    audit: {
      title: 'Channel Visual Audit',
      subtitle: 'Analyze your channel performance and get a personalized visual growth strategy in seconds.',
      placeholder: 'Enter your channel name or @handle',
      button: 'Analyze Now',
      cta: 'Get Custom Strategy'
    },
    special: {
      quizTitle: 'Find Your Visual DNA',
      quizDesc: 'Take our 60-second style quiz to get a personalized visual strategy.',
      voiceTitle: 'Explain by Voice',
      voiceDesc: 'Too busy to type? Record a 30-sec brief and our AI + Designers will handle the rest.',
      matchTitle: 'Niche Matchmaking',
      matchDesc: 'We pair you with a designer who is a hardcore fan and expert in your specific niche.'
    },
    features: {
      title: 'Engineered for Growth',
      desc: 'We don\'t just make designs. We build visual assets that force the YouTube algorithm to take notice.'
    },
    howItWorks: {
      header: 'How It Works',
      headerDesc: "We've streamlined the design process so you can focus on creating content, not fiddling with Photoshop.",
      title: 'From Idea to Viral In 4 Easy Steps',
      steps: [
        { title: "Select Your Plan", desc: "Pick the plan that matches your upload frequency. No contracts, cancel anytime." },
        { title: "Submit Your Request", desc: "Send us your video title and concept through our simple dashboard." },
        { title: "Pro Design Phase", desc: "Our designers craft a high-CTR thumbnail specifically to trigger curiosity and stop the scroll." },
        { title: "Review & Publish", desc: "Download your high-res design and watch your CTR soar." }
      ],
      benefits: [
        { title: "Fast Turnaround", desc: "Never delay an upload. We ensure your designs are ready before your premiere." },
        { title: "Quality Guaranteed", desc: "Every thumbnail is checked against a 12-point CTR performance list." },
        { title: "Result Oriented", desc: "We track algorithm shifts to keep your designs effective and modern." }
      ],
      readyTitle: "Ready to grow your channel?",
      readyButton: "Get Started Now"
    },
    pricing: {
      title: 'Fair Pricing for Every Creator',
      desc: 'No hidden fees. No complicated tiers. Just high-quality designs that get you more views.',
      month: '/month',
      popular: 'Most Popular',
      save: 'Save',
      original: 'Value',
      trial: 'Beta Access',
      customTitle: 'Large Scale Needs?',
      customDesc: 'Running a multi-channel network? We offer custom solutions for high-volume agencies.',
      customLink: 'Contact Sales',
      comparisonTitle: 'Compare Plans',
      comparisonFeature: 'Feature',
      plans: [
        {
          name: "Beta Access",
          price: "$0",
          originalPrice: "$25",
          saveAmount: "100%",
          description: "Test our quality with a single viral-ready design.",
          isTrial: true,
          features: [
            "1 Premium Thumbnail",
            "24-hour delivery",
            "Full source file",
            "Channel Audit Intro",
            "Visual Strategy PDF"
          ]
        },
        {
          name: "Starter",
          price: "$19",
          originalPrice: "$30",
          saveAmount: "35%",
          description: "Perfect for new creators getting started.",
          isPopular: false,
          features: [
            "5 Thumbnails / mo",
            "48-hour delivery",
            "2 Revisions per design",
            "Source files included",
            "Standard support"
          ]
        },
        {
          name: "Pro",
          price: "$49",
          originalPrice: "$80",
          saveAmount: "40%",
          description: "Ideal for consistent growth and higher CTR.",
          isPopular: true,
          features: [
            "15 Thumbnails / mo",
            "24-hour delivery",
            "Unlimited revisions",
            "Priority support",
            "A/B test consultation"
          ]
        },
        {
          name: "Creator",
          price: "$99",
          originalPrice: "$150",
          saveAmount: "33%",
          description: "Scaling fast? This is for serious channels.",
          isPopular: false,
          features: [
            "30 Thumbnails / mo",
            "12-hour delivery",
            "Dedicated designer",
            "Unlimited revisions",
            "Custom branding kit"
          ]
        }
      ],
      comparisonData: [
        { label: 'Monthly Volume', starter: '5', pro: '15', creator: '30' },
        { label: 'Delivery Time', starter: '48h', pro: '24h', creator: '12h' },
        { label: 'Revisions', starter: '2', pro: 'Unlimited', creator: 'Unlimited' },
        { label: 'Source Files', starter: true, pro: true, creator: true },
        { label: 'Dedicated Designer', starter: false, pro: false, creator: true },
        { label: 'Support Level', starter: 'Standard', pro: 'Priority', creator: 'VIP' }
      ]
    },
    contact: {
      title: 'Let\'s Scale Your Channel',
      desc: 'Skip the forms. Start a conversation with your future Creative Director.',
      emailLabel: 'Email Support',
      chatLabel: 'Live Chat',
      chatDesc: `Average response: ${SITE_CONFIG.support.averageResponseTime}.`,
      whatsappLabel: 'WhatsApp',
      whatsappNumber: SITE_CONFIG.whatsapp.display,
      responseTime: 'Response Time',
      responseDesc: 'We typically reply within the hour.',
      formTitle: 'Apply for Membership',
      voiceLabel: 'Voice Note Briefing (Experimental)',
      quizLabel: 'Start Style Quiz',
      name: 'Full Name',
      email: 'Email',
      whatsappField: 'WhatsApp for Fast Delivery',
      channel: 'Channel URL',
      message: 'What is your growth goal for this month?',
      send: 'Launch Strategy',
      sending: 'Processing...',
      success: 'Welcome to the inner circle! We will contact you via WhatsApp in < 30 mins.'
    },
    footer: {
      desc: 'The world\'s elite visual strategy partner for high-growth YouTube creators.',
      product: 'Resources',
      company: 'Support',
      rights: 'All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      howItWorks: 'كيف يعمل',
      pricing: 'الأسعار',
      contact: 'اطلب استراتيجية',
      getStarted: 'انضم الآن'
    },
    hero: {
      badge: 'أكثر من مجرد خدمة تصميم',
      headline: 'الشريك الإبداعي الذي تستحقه قناتك',
      subheadline: 'نحن لا نرسل ملفات فحسب؛ بل نندمج مع رؤيتك، نحلل مجالك، ونسلمك أسلحة بصرية تضمن لك الفوز في معركة الصفحة الرئيسية.',
      ctaPrimary: 'ابدأ فحصاً بصرياً',
      ctaSecondary: 'عرض الأعمال',
      before: 'تصميم عادي',
      after: 'استراتيجية Thumbify',
      boring: 'تم تجاهله (2.1% CTR)',
      statsReach: '+300% تفاعل',
      statsStopper: 'جاذب للانتباه',
      famousTitle: 'صُنع للأساطير',
      famousSub: 'نتعامل مع كل صورة مصغرة كأصل قيم يساوي الملايين.'
    },
    partners: {
      title: 'الشركاء',
      subtitle: 'السلاح السري وراء أسرع قنوات اليوتيوب نمواً في العالم.'
    },
    ai: {
      badge: 'محرك أفكار فوري',
      title: 'جرب مستشار الصور المصغرة بالذكاء الاصطناعي',
      desc: 'لست متأكداً ما الذي ينجح؟ أدخل عنوان الفيديو الخاص بك وسيقترح الذكاء الاصطناعي 3 مفاهيم.',
      placeholder: 'أدخل عنوان الفيديو (مثال: "بنيت غرفة سرية")',
      button: 'توليد الأفكار',
      thinking: 'جاري التفكير...',
      suggestions: 'اقتراحات الذكاء الاصطناعي'
    },
    chat: {
      title: 'دعم Thumbify بالذكاء الاصطناعي',
      welcome: 'أهلاً بك! أنا مساعد Thumbify الذكي. كيف يمكنني مساعدتك في تنمية قناتك اليوم؟',
      placeholder: 'اكتب رسالتك...',
      send: 'إرسال',
      thinking: 'جاري التفكير...'
    },
    audit: {
      title: 'فحص بصري للقناة',
      subtitle: 'حلل أداء قناتك واحصل على استراتيجية نمو بصرية مخصصة خلال ثوانٍ.',
      placeholder: 'أدخل اسم قناتك أو المعرف (@handle)',
      button: 'حلل الآن',
      cta: 'احصل على استراتيجية مخصصة'
    },
    special: {
      quizTitle: 'اكتشف بصمتك البصرية',
      quizDesc: 'خض اختبار النمط لمدة 60 ثانية للحصول على استراتيجية بصرية مخصصة.',
      voiceTitle: 'اشرح فكرتك بصوتك',
      voiceDesc: 'مشغول جداً عن الكتابة؟ سجل ملاحظة صوتية وسيتولى خبراؤنا الباقي.',
      matchTitle: 'مطابقة التخصص',
      matchDesc: 'نقوم بربطك بمصمم هو بالأساس متابع وخبير في تخصص قناتك تحديداً.'
    },
    features: {
      title: 'هندسة بصرية للنمو',
      desc: 'نحن لا نصمم صوراً فحسب؛ بل نبني أصولاً بصرية تجبر خوارزميات يوتيوب على الانتباه لمحتواك.'
    },
    howItWorks: {
      header: 'كيف يعمل',
      headerDesc: "لقد قمنا بتبسيط عملية التصميم حتى تتمكن من التركيز على إنشاء المحتوى، بدلاً من الانشغال ببرامج التصميم.",
      title: 'من فكرة إلى فيديو منتشر في 4 خطوات سهلة',
      steps: [
        { title: "اختر باقتك", desc: "حدد الباقة التي تناسب معدل رفع فيديوهاتك. لا توجد عقود، ويمكنك الإلغاء في أي وقت." },
        { title: "أرسل طلبك", desc: "أرسل لنا عنوان الفيديو وفكرتك عبر لوحة التحكم البسيطة الخاصة بنا." },
        { title: "مرحلة التصميم الاحترافي", desc: "يقوم مصممونا بابتكار صورة مصغرة عالية التحويل مصممة خصيصاً لإثارة الفضول." },
        { title: "المراجعة والنشر", desc: "قم بتحميل تصميمك عالي الجودة وشاهد ارتفاع نسبة النقر على فيديوهاتك." }
      ],
      benefits: [
        { title: "تسليم سريع", desc: "لا تؤخر رفع فيديوهاتك أبداً. نضمن جاهزية تصاميمك قبل موعد العرض." },
        { title: "جودة مضمونة", desc: "تخضع كل صورة مصغرة لفحص دقيق بناءً على 12 معياراً للأداء." },
        { title: "نتائج ملموسة", desc: "نحن نتابع تحديثات الخوارزمية لضمان بقاء تصاميمك فعالة وجذابة." }
      ],
      readyTitle: "هل أنت مستعد لتنمية قناتك؟",
      readyButton: "ابدأ الآن"
    },
    pricing: {
      title: 'أسعار عادلة لكل منشئ',
      desc: 'لا توجد رسوم خفية. باقات واضحة وتصاميم عالية الجودة تضمن لك المزيد من المشاهدات.',
      month: '/شهرياً',
      popular: 'الأكثر شيوعاً',
      save: 'وفر',
      original: 'القيمة',
      trial: 'وصول تجريبي',
      customTitle: 'هل لديك احتياجات ضخمة؟',
      customDesc: 'هل تدير شبكة قنوات متعددة؟ نقدم حلولاً مخصصة للوكالات ذات حجم الإنتاج العالي.',
      customLink: 'تواصل مع المبيعات',
      comparisonTitle: 'قارن الباقات',
      comparisonFeature: 'الميزة',
      plans: [
        {
          name: "باقة تجريبية",
          price: "0$",
          originalPrice: "25$",
          saveAmount: "100%",
          description: "اختبر جودة تصاميمنا بصورة واحدة احترافية مجاناً.",
          isTrial: true,
          features: [
            "1 صورة مصغرة بريميوم",
            "تسليم خلال 24 ساعة",
            "ملف التصميم المصدري",
            "تحليل أولي للقناة",
            "ملف استراتيجية بصرية"
          ]
        },
        {
          name: "الباقة الأساسية",
          price: "19$",
          originalPrice: "30$",
          saveAmount: "35%",
          description: "مثالية للمنشئين الجدد في بداية طريقهم.",
          isPopular: false,
          features: [
            "5 صور مصغرة / شهرياً",
            "تسليم خلال 48 ساعة",
            "مراجعتان لكل تصميم",
            "ملفات التصميم المصدرية",
            "دعم فني قياسي"
          ]
        },
        {
          name: "باقة المحترفين",
          price: "49$",
          originalPrice: "80$",
          saveAmount: "40%",
          description: "مثالية لنمو مستمر ونسبة نقر (CTR) أعلى.",
          isPopular: true,
          features: [
            "15 صور مصغرة / شهرياً",
            "تسليم خلال 24 ساعة",
            "مراجعات غير محدودة",
            "دعم ذو أولوية",
            "استشارة اختبار A/B"
          ]
        },
        {
          name: "باقة المنشئين",
          price: "99$",
          originalPrice: "150$",
          saveAmount: "33%",
          description: "هل تنمو بسرعة؟ هذه الباقة للقنوات الكبيرة.",
          isPopular: false,
          features: [
            "30 صورة مصغرة / شهرياً",
            "تسليم سريع (12 ساعة)",
            "مصمم مخصص لك",
            "مراجعات غير محدودة",
            "حقيبة هويتك البصرية"
          ]
        }
      ],
      comparisonData: [
        { label: 'الكمية الشهرية', starter: '5', pro: '15', creator: '30' },
        { label: 'وقت التسليم', starter: '48 ساعة', pro: '24 ساعة', creator: '12 ساعة' },
        { label: 'المراجعات', starter: '2', pro: 'غير محدود', creator: 'غير محدود' },
        { label: 'الملفات المصدرية', starter: true, pro: true, creator: true },
        { label: 'مصمم مخصص', starter: false, pro: false, creator: true },
        { label: 'مستوى الدعم', starter: 'قياسي', pro: 'أولوية', creator: 'VIP' }
      ]
    },
    contact: {
      title: 'لنضاعف أرقام قناتك',
      desc: 'تخطى الاستمارات التقليدية. ابدأ محادثة مباشرة مع مديرك الإبداعي القادم.',
      emailLabel: 'دعم البريد الإلكتروني',
      chatLabel: 'دردشة مباشرة',
      chatDesc: `متوسط الرد: ${SITE_CONFIG.support.averageResponseTime}.`,
      whatsappLabel: 'واتساب',
      whatsappNumber: SITE_CONFIG.whatsapp.display,
      responseTime: 'وقت الاستجابة',
      responseDesc: 'عادة ما نرد خلال ساعة واحدة.',
      formTitle: 'طلب انضمام للعضوية',
      voiceLabel: 'شرح الفكرة بالصوت (تجريبي)',
      quizLabel: 'ابدأ اختبار النمط',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      whatsappField: 'رقم الواتساب (للتسليم السريع)',
      channel: 'رابط القناة',
      message: 'ما هو هدف نموك لهذا الشهر؟',
      send: 'أطلق الاستراتيجية',
      sending: 'جاري المعالجة...',
      success: 'أهلاً بك في دائرة النخبة! سنتواصل معك عبر واتساب خلال أقل من 30 دقيقة.'
    },
    footer: {
      desc: 'الشريك الاستراتيجي البصري الأول لمنشئي محتوى اليوتيوب ذوي النمو السريع.',
      product: 'المصادر',
      company: 'الشركة',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};
