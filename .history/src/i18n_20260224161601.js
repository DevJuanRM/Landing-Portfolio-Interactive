import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: { work: "TRABAJO", services: "SERVICIOS", about: "SOBRE MÍ", contact: "CONTACTO" },
      hero: {
        role: "Ingeniero de Software Frontend",
        title1: "CREATIVE",
        title2: "ENGINEER",
        description: "Especializado en arquitecturas escalables, interfaces de alto rendimiento, animaciones fluidas y experiencias web inmersivas que convierten usuarios en clientes leales.",
        available: "Disponible para proyectos"
      },
      about: {
        title1: "Más allá del",
        title2: "código",
        p1: "No solo escribo React y CSS. Construyo puentes entre el diseño visual y la ingeniería lógica. Mi enfoque se centra en crear arquitecturas robustas que no sacrifiquen la experiencia del usuario.",
        p2: "Con profunda experiencia en el ecosistema JavaScript, integro tecnologías modernas como WebGL, GSAP y arquitecturas Headless para entregar productos digitales que destacan en un mercado saturado.",
        p3: "Cada milisegundo cuenta, cada pixel importa.",
        exp: "Años de Exp.",
        projectsCount: "Proyectos",
        whoami: "whoami",
        role: "Frontend Architect",
        locationLabel: "location",
        location: "Bogotá, Colombia"
      },
      services: {
        subtitle: "Experiencia Técnica",
        title1: "Capacidades",
        title2: "Principales",
        items: [
          { title: "Desarrollo Frontend", desc: "SPAs, SSG y SSR utilizando el ecosistema React (Next.js, Vite). Código limpio, modular y altamente tipado." },
          { title: "Creative Coding", desc: "Animaciones avanzadas con GSAP, Framer Motion y experiencias 3D en el navegador mediante Three.js." },
          { title: "Headless Arquitectura", desc: "Integración de frontends modernos con CMS robustos (Sanity, WordPress Headless) y plataformas e-commerce." },
          { title: "Optimización Core Web", desc: "Auditorías de rendimiento, mejora de LCP, CLS e INP para garantizar puntuaciones de 90+ en Google Lighthouse." }
        ]
      },
      works: {
        subtitle: "Casos de Estudio",
        title1: "Trabajo",
        title2: "Destacado",
        description: "Una selección de proyectos recientes enfocados en resolver problemas complejos de negocio mediante ingeniería frontend moderna."
      },
      projectCard: { viewCase: "Ver Caso de Estudio" },
      projects: {
        1: { description: "Plataforma impulsada por IA para predecir el valor de reventa de zapatillas de edición limitada utilizando modelos de machine learning y scraping en tiempo real." },
        2: { description: "Dashboard de trading en tiempo real que procesa más de 10,000 transacciones por segundo con latencia ultra baja, optimizado para day traders." },
        3: { description: "Visualización de datos 3D interactiva para una startup de biotecnología. Permite explorar redes neuronales simuladas directo en el navegador." },
        4: { description: "Arquitectura headless commerce para una marca de moda de lujo. Transiciones fluidas y un tiempo de carga inferior a 1.2 segundos a nivel global." },
        5: { description: "Remodelación completa de infraestructura monolítica a Headless CMS. Rediseño basado en Figma implementando un frontend desacoplado de alto rendimiento." },
        6: { description: "Plataforma SaaS B2B que centraliza métricas de influencers y streamers en múltiples redes para agencias de marketing, con reportes automatizados." },
        7: { description: "Interfaz web para un motor de generación musical por IA. Incluye un secuenciador multipista renderizado en el cliente y exportación en la nube." },
        8: { description: "Sistema de gestión documental seguro para facilitar aplicaciones a visas de turismo y nómada digital, con encriptación de extremo a extremo." }
      },
      faq: { title: "Preguntas Frecuentes" },
      faqs: {
        1: { question: "¿Cuál es tu proceso de trabajo?", answer: "Mi proceso se divide en 4 fases: Descubrimiento, Diseño de Arquitectura, Desarrollo y Lanzamiento." },
        2: { question: "¿Cuánto tiempo toma desarrollar un proyecto desde cero?", answer: "Un landing page interactivo toma de 2 a 4 semanas. Plataformas complejas de 2 a 3 meses." },
        3: { question: "¿Trabajas solo con React o usas otras tecnologías?", answer: "Me especializo en React (Next.js, Vite), pero soy agnóstico al framework. Uso Vue, Svelte o Vanilla JS si es necesario." },
        4: { question: "¿Haces mantenimiento después del lanzamiento?", answer: "Sí, ofrezco planes mensuales que incluyen actualizaciones, monitoreo de rendimiento y soporte técnico." }
      },
      footer: {
        subtitle: "¿Tienes una idea en mente?",
        title: "Hablemos",
        emailBtn: "ENVIAR CORREO",
        callBtn: "AGENDAR LLAMADA",
        madeWith: "DISEÑADO & DESARROLLADO CON ❤️",
        rights: "TODOS LOS DERECHOS RESERVADOS"
      }
    }
  },
  en: {
    translation: {
      nav: { work: "WORK", services: "SERVICES", about: "ABOUT", contact: "CONTACT" },
      hero: {
        role: "Frontend Software Engineer",
        title1: "CREATIVE",
        title2: "ENGINEER",
        description: "Specialized in scalable architectures, high-performance interfaces, fluid animations, and immersive web experiences that turn users into loyal customers.",
        available: "Available for projects"
      },
      about: {
        title1: "Beyond the",
        title2: "code",
        p1: "I don't just write React and CSS. I build bridges between visual design and logical engineering. My focus is on creating robust architectures without sacrificing user experience.",
        p2: "With deep experience in the JavaScript ecosystem, I integrate modern technologies like WebGL, GSAP, and Headless architectures to deliver digital products that stand out.",
        p3: "Every millisecond counts, every pixel matters.",
        exp: "Years of Exp.",
        projectsCount: "Projects",
        whoami: "whoami",
        role: "Frontend Architect",
        locationLabel: "location",
        location: "Bogota, Colombia"
      },
      services: {
        subtitle: "Technical Expertise",
        title1: "Core",
        title2: "Capabilities",
        items: [
          { title: "Frontend Development", desc: "SPAs, SSG, and SSR using the React ecosystem (Next.js, Vite). Clean, modular, and strictly typed code." },
          { title: "Creative Coding", desc: "Advanced animations with GSAP, Framer Motion, and 3D web experiences using Three.js." },
          { title: "Headless Architecture", desc: "Integration of modern frontends with robust CMS (Sanity, Headless WP) and e-commerce platforms." },
          { title: "Core Web Optimization", desc: "Performance audits, LCP, CLS, and INP improvements to guarantee 90+ Lighthouse scores." }
        ]
      },
      works: {
        subtitle: "Case Studies",
        title1: "Featured",
        title2: "Work",
        description: "A selection of recent projects focused on solving complex business problems through modern frontend engineering."
      },
      projectCard: { viewCase: "View Case Study" },
      projects: {
        1: { description: "AI-powered platform to predict limited-edition sneaker resale values using machine learning models and real-time scraping." },
        2: { description: "Real-time trading dashboard processing over 10,000 transactions per second with ultra-low latency, optimized for day traders." },
        3: { description: "Interactive 3D data visualization for a biotech startup. Allows exploring simulated neural networks directly in the browser." },
        4: { description: "Headless commerce architecture for a luxury fashion brand. Fluid transitions and a global load time of under 1.2 seconds." },
        5: { description: "Complete overhaul from a monolithic infrastructure to a Headless CMS. Figma-based redesign implementing a high-performance decoupled frontend." },
        6: { description: "B2B SaaS platform that centralizes influencer and streamer metrics across multiple networks for marketing agencies, featuring automated reporting." },
        7: { description: "Web interface for an AI music generation engine. Includes a client-rendered multitrack sequencer and cloud export." },
        8: { description: "Secure document management system to facilitate tourist and digital nomad visa applications with end-to-end encryption." }
      },
      faq: { title: "Frequently Asked Questions" },
      faqs: {
        1: { question: "What is your working process?", answer: "My process is divided into 4 phases: Discovery, Architecture Design, Development, and Launch." },
        2: { question: "How long does it take to build a project from scratch?", answer: "An interactive landing page takes 2 to 4 weeks. Complex platforms or headless e-commerce can take 2 to 3 months." },
        3: { question: "Do you only work with React or use other tech?", answer: "I specialize in React (Next.js, Vite), but I'm framework agnostic. I use Vue, Svelte, or Vanilla JS if extreme performance requires it." },
        4: { question: "Do you provide post-launch maintenance?", answer: "Yes, I offer monthly maintenance plans including updates, performance monitoring, and technical support." }
      },
      footer: {
        subtitle: "Have an idea in mind?",
        title: "Let's Talk",
        emailBtn: "SEND EMAIL",
        callBtn: "BOOK A CALL",
        madeWith: "DESIGNED & DEVELOPED WITH ❤️",
        rights: "ALL RIGHTS RESERVED"
      }
    }
  },
  ar: {
    translation: {
      nav: { work: "أعمال", services: "خدمات", about: "عني", contact: "اتصال" },
      hero: {
        role: "مهندس برمجيات واجهة أمامية",
        title1: "CREATIVE",
        title2: "ENGINEER",
        description: "متخصص في البنى القابلة للتطوير، والواجهات عالية الأداء، والرسوم المتحركة السلسة، وتجارب الويب الغامرة التي تحول المستخدمين إلى عملاء مخلصين.",
        available: "متاح للمشاريع"
      },
      about: {
        title1: "أبعد من",
        title2: "الكود",
        p1: "أنا لا أكتب فقط React و CSS. أنا أبني جسوراً بين التصميم المرئي والهندسة المنطقية. ينصب تركيزي على إنشاء بنى قوية دون التضحية بتجربة المستخدم.",
        p2: "مع خبرة عميقة في بيئة JavaScript، أقوم بدمج التقنيات الحديثة مثل WebGL و GSAP والبنى بدون واجهة خلفية لتقديم منتجات رقمية تبرز في سوق مشبع.",
        p3: "كل جزء من الثانية يهم، كل بكسل له أهمية.",
        exp: "سنوات الخبرة",
        projectsCount: "مشاريع",
        whoami: "من_أنا",
        role: "مهندس واجهات",
        locationLabel: "الموقع",
        location: "بوغوتا، كولومبيا"
      },
      services: {
        subtitle: "الخبرة الفنية",
        title1: "القدرات",
        title2: "الأساسية",
        items: [
          { title: "تطوير الواجهة الأمامية", desc: "تطبيقات الصفحة الواحدة باستخدام React. كود نظيف ومعياري." },
          { title: "البرمجة الإبداعية", desc: "رسوم متحركة متقدمة وتجارب ثلاثية الأبعاد في المتصفح باستخدام Three.js." },
          { title: "بنية Headless", desc: "دمج الواجهات الحديثة مع أنظمة إدارة المحتوى القوية ومنصات التجارة الإلكترونية." },
          { title: "تحسين أداء الويب", desc: "تدقيق الأداء وتحسين سرعة التحميل لضمان تقييم 90+ في Lighthouse." }
        ]
      },
      works: {
        subtitle: "دراسات الحالة",
        title1: "أعمال",
        title2: "مميزة",
        description: "مجموعة مختارة من المشاريع الحديثة التي تركز على حل مشاكل الأعمال المعقدة من خلال هندسة الواجهات الحديثة."
      },
      projectCard: { viewCase: "عرض دراسة الحالة" },
      projects: {
        1: { description: "منصة مدعومة بالذكاء الاصطناعي للتنبؤ بقيمة إعادة بيع الأحذية الرياضية ذات الإصدار المحدود." },
        2: { description: "لوحة تحكم تداول في الوقت الفعلي تعالج أكثر من 10,000 معاملة في الثانية." },
        3: { description: "تصور تفاعلي للبيانات ثلاثية الأبعاد لشركة تكنولوجيا حيوية ناشئة." },
        4: { description: "بنية تجارة إلكترونية headless لعلامة أزياء فاخرة. انتقالات سلسة ووقت تحميل أقل من 1.2 ثانية." },
        5: { description: "إعادة بناء كاملة للبنية التحتية إلى نظام إدارة محتوى Headless مع واجهة أمامية عالية الأداء." },
        6: { description: "منصة SaaS مركزية لمقاييس المؤثرين لوكالات التسويق مع تقارير آلية." },
        7: { description: "واجهة ويب لمحرك توليد الموسيقى بالذكاء الاصطناعي مع تسلسل مسارات متعددة." },
        8: { description: "نظام آمن لإدارة المستندات لتسهيل طلبات التأشيرات السياحية مع تشفير شامل." }
      },
      faq: { title: "الأسئلة الشائعة" },
      faqs: {
        1: { question: "ما هي عملية عملك؟", answer: "تنقسم عمليتي إلى 4 مراحل: الاكتشاف، تصميم البنية، التطوير، والإطلاق." },
        2: { question: "كم من الوقت يستغرق تطوير مشروع من الصفر؟", answer: "تستغرق الصفحة المقصودة التفاعلية من أسبوعين إلى 4 أسابيع. المنصات المعقدة من شهرين إلى 3 أشهر." },
        3: { question: "هل تعمل فقط مع React؟", answer: "أنا متخصص في React، لكنني أستخدم الأداة الأفضل للمشكلة بما في ذلك Vue أو Svelte." },
        4: { question: "هل تقدم صيانة بعد الإطلاق؟", answer: "نعم، أقدم خطط صيانة شهرية تشمل التحديثات ومراقبة الأداء والدعم الفني." }
      },
      footer: {
        subtitle: "هل لديك فكرة في ذهنك؟",
        title: "لنتحدث",
        emailBtn: "إرسال بريد إلكتروني",
        callBtn: "حجز مكالمة",
        madeWith: "صُمم وطُوّر بـ ❤️",
        rights: "جميع الحقوق محفوظة"
      }
    }
  },
  fr: {
    translation: {
      nav: { work: "TRAVAUX", services: "SERVICES", about: "À PROPOS", contact: "CONTACT" },
      hero: {
        role: "Ingénieur Logiciel Frontend",
        title1: "CRÉATIF",
        title2: "INGÉNIEUR",
        description: "Spécialisé dans les architectures évolutives, les interfaces haute performance, les animations fluides et les expériences web immersives qui transforment les utilisateurs en clients fidèles.",
        available: "Disponible pour des projets"
      },
      about: {
        title1: "Au-delà du",
        title2: "code",
        p1: "Je ne me contente pas d'écrire du React et du CSS. Je construis des ponts entre le design visuel et l'ingénierie logique. Mon objectif est de créer des architectures robustes sans sacrifier l'expérience utilisateur.",
        p2: "Fort d'une grande expérience de l'écosystème JavaScript, j'intègre des technologies modernes comme WebGL, GSAP et les architectures Headless pour livrer des produits numériques qui se démarquent.",
        p3: "Chaque milliseconde compte, chaque pixel a son importance.",
        exp: "Années d'Exp.",
        projectsCount: "Projets",
        whoami: "whoami",
        role: "Architecte Frontend",
        locationLabel: "localisation",
        location: "Bogotá, Colombie"
      },
      services: {
        subtitle: "Expertise Technique",
        title1: "Compétences",
        title2: "Principales",
        items: [
          { title: "Développement Frontend", desc: "SPA, SSG et SSR utilisant l'écosystème React (Next.js, Vite). Code propre, modulaire et strictement typé." },
          { title: "Creative Coding", desc: "Animations avancées avec GSAP, Framer Motion et expériences 3D dans le navigateur avec Three.js." },
          { title: "Architecture Headless", desc: "Intégration de frontends modernes avec des CMS robustes (Sanity, WP Headless) et plateformes e-commerce." },
          { title: "Optimisation Core Web", desc: "Audits de performance, améliorations LCP, CLS et INP pour garantir un score Lighthouse de 90+." }
        ]
      },
      works: {
        subtitle: "Études de Cas",
        title1: "Travaux",
        title2: "Remarquables",
        description: "Une sélection de projets récents axés sur la résolution de problèmes commerciaux complexes grâce à une ingénierie frontend moderne."
      },
      projectCard: { viewCase: "Voir l'étude de cas" },
      projects: {
        1: { description: "Plateforme basée sur l'IA pour prédire la valeur de revente de baskets en édition limitée." },
        2: { description: "Tableau de bord de trading en temps réel traitant plus de 10 000 transactions par seconde." },
        3: { description: "Visualisation de données 3D interactive pour une startup en biotechnologie." },
        4: { description: "Architecture e-commerce headless pour une marque de mode de luxe. Temps de chargement inférieur à 1,2 seconde." },
        5: { description: "Refonte complète d'une infrastructure monolithique vers un CMS Headless avec un frontend découplé." },
        6: { description: "Plateforme SaaS B2B centralisant les métriques d'influenceurs pour les agences de marketing." },
        7: { description: "Interface web pour un moteur de génération musicale par IA avec séquenceur multipiste." },
        8: { description: "Système sécurisé de gestion de documents pour faciliter les demandes de visas avec chiffrement." }
      },
      faq: { title: "Questions Fréquentes" },
      faqs: {
        1: { question: "Quel est votre processus de travail ?", answer: "Mon processus se divise en 4 phases : Découverte, Conception d'Architecture, Développement et Lancement." },
        2: { question: "Combien de temps faut-il pour créer un projet de zéro ?", answer: "Une landing page prend de 2 à 4 semaines. Les plateformes complexes de 2 à 3 mois." },
        3: { question: "Travaillez-vous uniquement avec React ?", answer: "Je me spécialise en React, mais je suis agnostique au framework. J'utilise Vue, Svelte ou Vanilla JS si nécessaire." },
        4: { question: "Proposez-vous une maintenance après le lancement ?", answer: "Oui, je propose des forfaits mensuels incluant mises à jour, suivi des performances et support." }
      },
      footer: {
        subtitle: "Vous avez une idée en tête ?",
        title: "Parlons-en",
        emailBtn: "ENVOYER UN EMAIL",
        callBtn: "RÉSERVER UN APPEL",
        madeWith: "CONÇU & DÉVELOPPÉ AVEC ❤️",
        rights: "TOUS DROITS RÉSERVÉS"
      }
    }
  },
  zh: {
    translation: {
      nav: { work: "项目", services: "服务", about: "关于我", contact: "联系" },
      hero: {
        role: "前端软件工程师",
        title1: "创意",
        title2: "工程师",
        description: "专注于可扩展架构、高性能界面、流畅动画以及身临其境的Web体验，从而将用户转化为忠实客户。",
        available: "可接受项目预定"
      },
      about: {
        title1: "超越",
        title2: "代码",
        p1: "我不仅编写React和CSS。我在视觉设计和逻辑工程之间架起桥梁。我的重点是创建强大的架构，而不牺牲用户体验。",
        p2: "凭借在JavaScript生态系统中的深厚经验，我整合了WebGL、GSAP和无头(Headless)架构等现代技术，提供在饱和市场中脱颖而出的数字产品。",
        p3: "每一毫秒都至关重要，每个像素都很有意义。",
        exp: "年经验",
        projectsCount: "完成项目",
        whoami: "我是谁",
        role: "前端架构师",
        locationLabel: "位置",
        location: "哥伦比亚，波哥大"
      },
      services: {
        subtitle: "技术专长",
        title1: "核心",
        title2: "能力",
        items: [
          { title: "前端开发", desc: "使用React生态系统（Next.js，Vite）的SPA，SSG和SSR。清晰，模块化且严格类型的代码。" },
          { title: "创意编程", desc: "使用GSAP，Framer Motion和Three.js在浏览器中进行高级动画和3D体验。" },
          { title: "无头架构 (Headless)", desc: "将现代前端与强大的CMS（Sanity，Headless WP）和电子商务平台集成。" },
          { title: "核心网页优化", desc: "性能审计，优化LCP，CLS和INP，以确保Lighthouse得分90+。" }
        ]
      },
      works: {
        subtitle: "案例研究",
        title1: "精选",
        title2: "项目",
        description: "精选的近期项目，专注于通过现代前端工程解决复杂的业务问题。"
      },
      projectCard: { viewCase: "查看案例研究" },
      projects: {
        1: { description: "基于AI的平台，使用机器学习模型和实时数据抓取来预测限量版运动鞋的转售价值。" },
        2: { description: "实时交易仪表板，每秒处理超过10,000笔交易，超低延迟，专为日间交易员优化。" },
        3: { description: "为一家生物技术初创公司提供交互式3D数据可视化。允许在浏览器中直接探索模拟的神经网络。" },
        4: { description: "针对奢侈时尚品牌的无头(Headless)电子商务架构。流畅的过渡和全球不到1.2秒的加载时间。" },
        5: { description: "从单体基础架构到Headless CMS的全面改革。实施高性能解耦前端。" },
        6: { description: "B2B SaaS平台，为营销机构集中多个网络上的影响者指标，具有自动报告功能。" },
        7: { description: "AI音乐生成引擎的Web界面。包含客户端渲染的多轨音序器。" },
        8: { description: "安全的文档管理系统，以促进旅游和数字游民签证申请，具有端到端加密。" }
      },
      faq: { title: "常见问题解答" },
      faqs: {
        1: { question: "您的工作流程是怎样的？", answer: "我的过程分为4个阶段：发现，架构设计，开发和发布。" },
        2: { question: "从头开始开发一个项目需要多长时间？", answer: "交互式登录页面需要2到4周。复杂的平台可能需要2到3个月。" },
        3: { question: "您只使用React工作吗？", answer: "我专攻React，但我不受框架限制。如果有必要，我也会使用Vue，Svelte或原生JS。" },
        4: { question: "发布后您提供维护吗？", answer: "是的，我提供每月维护计划，包括更新，性能监控和技术支持。" }
      },
      footer: {
        subtitle: "脑海中有一个想法？",
        title: "让我们谈谈",
        emailBtn: "发送邮件",
        callBtn: "预约通话",
        madeWith: "用 ❤️ 设计与开发",
        rights: "版权所有"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;