import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
        nav: { work: "TRABAJO", services: "SERVICIOS", about: "SOBRE MÍ", faq: "PREGUNTAS", contact: "CONTACTO" },      hero: {
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
      },
      // ==========================================
      // TRADUCCIONES DE LA PÁGINA DE DETALLES
      // ==========================================
      detail: {
        back: "Volver al Portafolio",
        client: "Cliente",
        role: "Rol",
        time: "Tiempo",
        year: "Año",
        challengeTitle: "El Desafío",
        solutionTitle: "La Solución",
        techStackTitle: "Stack Tecnológico",
        nextProject: "Siguiente Proyecto"
      },
      details: {
        1: {
          role: "Lead Frontend Engineer", timeline: "3 Meses",
          overview: "TenisDrop AI revolucionó la forma en que los coleccionistas predicen el valor de reventa de zapatillas. Interfaz capaz de renderizar miles de puntos de datos en tiempo real con latencia casi nula.",
          challenge: "El cliente contaba con un modelo de ML en Python extremadamente potente, pero carecía de una plataforma web que pudiera consumir esa API sin congelar el navegador.",
          solution: "Implementamos arquitectura Headless utilizando Next.js para el SSR y SEO, conectado a un backend de Python/FastAPI. WebSockets para precios en vivo y Canvas/WebGL para gráficos.",
          results: { 0: { label: "Aumento en Retención" }, 1: { label: "Tiempo de Carga (LCP)" }, 2: { label: "Usuarios Activos/Mes" } }
        },
        2: {
          role: "Frontend Architect", timeline: "4 Meses",
          overview: "Dashboard de trading en tiempo real que procesa más de 10,000 transacciones por segundo con latencia ultra baja, optimizado para day traders profesionales.",
          challenge: "Manejar actualizaciones masivas del DOM sin bloquear la UI principal cuando el mercado tiene picos de volatilidad.",
          solution: "Virtualización de listas pesadas, Zustand para el estado global evitando re-renders innecesarios y Chart.js integrado con Canvas nativo.",
          results: { 0: { label: "TPS Procesadas" }, 1: { label: "Latencia Promedio" }, 2: { label: "Uptime" } }
        },
        3: {
          role: "Creative Developer", timeline: "2 Meses",
          overview: "Visualización de datos 3D interactiva para una startup de biotecnología. Permite explorar redes neuronales simuladas directo en el navegador.",
          challenge: "Renderizar modelos 3D complejos sin que los ventiladores del computador del usuario colapsen.",
          solution: "Implementación de React Three Fiber con optimización de geometrías e instanciado.",
          results: { 0: { label: "FPS Estables" }, 1: { label: "Interacción" }, 2: { label: "Load Time" } }
        },
        4: {
          role: "Frontend Lead", timeline: "5 Meses",
          overview: "Arquitectura headless commerce para una marca de moda de lujo. Transiciones fluidas y un tiempo de carga inferior a 1.2 segundos a nivel global.",
          challenge: "Integrar el inventario en tiempo real de Shopify con una experiencia SPA personalizada.",
          solution: "Shopify Hydrogen acoplado con React y Framer Motion para transiciones de página fluidas.",
          results: { 0: { label: "LCP" }, 1: { label: "Más Ventas" }, 2: { label: "Performance" } }
        },
        5: {
          role: "Frontend Developer", timeline: "3 Meses",
          overview: "Remodelación completa de infraestructura monolítica a Headless CMS. Rediseño basado en Figma implementando un frontend desacoplado de alto rendimiento.",
          challenge: "El cliente quería mantener WordPress para sus editores, pero necesitaba la velocidad de React en el Frontend.",
          solution: "Consumo de WP REST API estáticamente con Next.js y revalidación de datos incremental.",
          results: { 0: { label: "SEO Score" }, 1: { label: "Más rápido" }, 2: { label: "Estabilidad Visual" } }
        },
        6: {
          role: "Fullstack Dev", timeline: "6 Meses",
          overview: "Plataforma SaaS B2B que centraliza métricas de influencers y streamers en múltiples redes para agencias de marketing, con reportes automatizados.",
          challenge: "Manejar APIs de terceros (Twitch, YouTube, TikTok) con distintos límites de peticiones.",
          solution: "Arquitectura serverless en Node.js manejando colas de peticiones y guardando el caché en PostgreSQL.",
          results: { 0: { label: "Agencias B2B" }, 1: { label: "Perfiles trackeados" }, 2: { label: "Automatizado" } }
        },
        7: {
          role: "Frontend Vue", timeline: "4 Meses",
          overview: "Interfaz web para un motor de generación musical por IA. Incluye un secuenciador multipista renderizado en el cliente y exportación en la nube.",
          challenge: "Manipulación de buffers de audio pesados directo en el navegador del usuario.",
          solution: "Uso intensivo de WebAudio API acoplado a la reactividad de Vue y Pinia para el estado de las pistas.",
          results: { 0: { label: "Playback" }, 1: { label: "Soporte" }, 2: { label: "Exportación" } }
        },
        8: {
          role: "Frontend Security", timeline: "3 Meses",
          overview: "Sistema de gestión documental seguro para facilitar aplicaciones a visas de turismo y nómada digital, con encriptación de extremo a extremo.",
          challenge: "Asegurar que los pasaportes y documentos financieros de los usuarios no pudieran ser interceptados.",
          solution: "Implementación de Crypto.js en el cliente antes de enviar cualquier blob de archivo a Firebase Storage.",
          results: { 0: { label: "Encriptación" }, 1: { label: "Cumplimiento Legal" }, 2: { label: "Visas procesadas" } }
        }
      }
    }
  },
  en: {
    translation: {
      nav: { work: "WORK", services: "SERVICES", about: "ABOUT", faq: "FAQ", contact: "CONTACT" },
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
      },
      detail: {
        back: "Back to Portfolio",
        client: "Client",
        role: "Role",
        time: "Timeline",
        year: "Year",
        challengeTitle: "The Challenge",
        solutionTitle: "The Solution",
        techStackTitle: "Tech Stack",
        nextProject: "Next Project"
      },
      details: {
        1: {
          role: "Lead Frontend Engineer", timeline: "3 Months",
          overview: "TenisDrop AI revolutionized the way collectors predict the resale value of limited-edition sneakers. An interface capable of rendering thousands of data points in real time with near-zero latency.",
          challenge: "The client had an extremely powerful Python ML model, but lacked a web platform that could consume that API without freezing the browser.",
          solution: "We implemented a Headless architecture using Next.js for SSR and SEO, connected to a Python/FastAPI backend. WebSockets for live pricing and Canvas/WebGL for charts.",
          results: { 0: { label: "Increase in Retention" }, 1: { label: "Load Time (LCP)" }, 2: { label: "Active Users/Month" } }
        },
        2: {
          role: "Frontend Architect", timeline: "4 Months",
          overview: "Real-time trading dashboard processing over 10,000 transactions per second with ultra-low latency, optimized for professional day traders.",
          challenge: "Handling massive DOM updates without blocking the main UI thread during market volatility spikes.",
          solution: "Heavy list virtualization, Zustand for global state avoiding unnecessary re-renders, and Chart.js integrated with native Canvas.",
          results: { 0: { label: "TPS Processed" }, 1: { label: "Average Latency" }, 2: { label: "Uptime" } }
        },
        3: {
          role: "Creative Developer", timeline: "2 Months",
          overview: "Interactive 3D data visualization for a biotech startup. Allows exploring simulated neural networks directly in the browser.",
          challenge: "Rendering complex 3D models without causing the user's computer fans to collapse.",
          solution: "Implementation of React Three Fiber with geometry optimization and instancing.",
          results: { 0: { label: "Stable FPS" }, 1: { label: "Interaction" }, 2: { label: "Load Time" } }
        },
        4: {
          role: "Frontend Lead", timeline: "5 Months",
          overview: "Headless commerce architecture for a luxury fashion brand. Fluid transitions and a global load time of under 1.2 seconds.",
          challenge: "Integrating Shopify's real-time inventory with a customized SPA experience.",
          solution: "Shopify Hydrogen coupled with React and Framer Motion for seamless page transitions.",
          results: { 0: { label: "LCP" }, 1: { label: "More Sales" }, 2: { label: "Performance" } }
        },
        5: {
          role: "Frontend Developer", timeline: "3 Months",
          overview: "Complete infrastructure overhaul from monolithic to Headless CMS. Figma-based redesign implementing a high-performance decoupled frontend.",
          challenge: "The client wanted to keep WordPress for their editors, but needed the speed of React on the Frontend.",
          solution: "Static consumption of WP REST API with Next.js and incremental static regeneration (ISR).",
          results: { 0: { label: "SEO Score" }, 1: { label: "Faster" }, 2: { label: "Visual Stability" } }
        },
        6: {
          role: "Fullstack Dev", timeline: "6 Months",
          overview: "B2B SaaS platform that centralizes influencer and streamer metrics across multiple networks for marketing agencies, with automated reports.",
          challenge: "Handling third-party APIs (Twitch, YouTube, TikTok) with different rate limits.",
          solution: "Serverless architecture in Node.js handling request queues and caching in PostgreSQL.",
          results: { 0: { label: "B2B Agencies" }, 1: { label: "Tracked Profiles" }, 2: { label: "Automated" } }
        },
        7: {
          role: "Frontend Vue", timeline: "4 Months",
          overview: "Web interface for an AI music generation engine. Includes a client-rendered multitrack sequencer and cloud export.",
          challenge: "Manipulating heavy audio buffers directly in the user's browser.",
          solution: "Intensive use of the WebAudio API coupled with Vue reactivity and Pinia for track state.",
          results: { 0: { label: "Playback" }, 1: { label: "Support" }, 2: { label: "Export" } }
        },
        8: {
          role: "Frontend Security", timeline: "3 Months",
          overview: "Secure document management system facilitating tourist and digital nomad visa applications with end-to-end encryption.",
          challenge: "Ensuring that users' passports and financial documents could not be intercepted.",
          solution: "Client-side implementation of Crypto.js before sending any file blob to Firebase Storage.",
          results: { 0: { label: "Encryption" }, 1: { label: "Legal Compliance" }, 2: { label: "Visas Processed" } }
        }
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
      },
      detail: {
        back: "العودة إلى محفظة الأعمال",
        client: "العميل",
        role: "الدور",
        time: "المدة الزمنية",
        year: "السنة",
        challengeTitle: "التحدي",
        solutionTitle: "الحل",
        techStackTitle: "التقنيات المستخدمة",
        nextProject: "المشروع التالي"
      },
      details: {
        1: {
          role: "مهندس واجهة أمامية رئيسي", timeline: "3 أشهر",
          overview: "أحدثت TenisDrop AI ثورة في كيفية توقع هواة الجمع لقيمة إعادة بيع الأحذية الرياضية. واجهة قادرة على عرض آلاف نقاط البيانات في الوقت الفعلي.",
          challenge: "كان لدى العميل نموذج تعلم آلي قوي للغاية بلغة بايثون، لكنه افتقر إلى منصة ويب يمكنها استهلاك واجهة برمجة التطبيقات هذه دون تجميد المتصفح.",
          solution: "نفذنا بنية Headless باستخدام Next.js للـ SSR و SEO، متصلة بخلفية Python/FastAPI.",
          results: { 0: { label: "زيادة في الاحتفاظ" }, 1: { label: "وقت التحميل" }, 2: { label: "مستخدم نشط/شهر" } }
        },
        2: {
          role: "مهندس معماري للواجهة الأمامية", timeline: "4 أشهر",
          overview: "لوحة تحكم تداول في الوقت الفعلي تعالج أكثر من 10000 معاملة في الثانية بزمن انتقال منخفض للغاية.",
          challenge: "التعامل مع التحديثات الضخمة لـ DOM دون حظر واجهة المستخدم الرئيسية أثناء تقلبات السوق.",
          solution: "تجسيد القوائم الثقيلة، Zustand للحالة العالمية وتجنب عمليات إعادة التصيير غير الضرورية.",
          results: { 0: { label: "معاملات معالجة" }, 1: { label: "متوسط الكمون" }, 2: { label: "وقت التشغيل" } }
        },
        3: {
          role: "مطور إبداعي", timeline: "شهرين",
          overview: "تصور تفاعلي للبيانات ثلاثية الأبعاد لشركة تكنولوجيا حيوية. يسمح باستكشاف الشبكات العصبية المحاكاة.",
          challenge: "عرض نماذج ثلاثية الأبعاد معقدة دون التسبب في انهيار مراوح كمبيوتر المستخدم.",
          solution: "تنفيذ React Three Fiber مع تحسين الهندسة والاستنساخ.",
          results: { 0: { label: "إطارات مستقرة" }, 1: { label: "التفاعل" }, 2: { label: "وقت التحميل" } }
        },
        4: {
          role: "قائد الواجهة الأمامية", timeline: "5 أشهر",
          overview: "بنية تجارة إلكترونية Headless لعلامة أزياء فاخرة. انتقالات سلسة ووقت تحميل أقل من 1.2 ثانية.",
          challenge: "دمج مخزون Shopify في الوقت الفعلي مع تجربة SPA مخصصة.",
          solution: "Shopify Hydrogen مقترنًا بـ React و Framer Motion للانتقالات السلسة.",
          results: { 0: { label: "تحميل" }, 1: { label: "مبيعات أكثر" }, 2: { label: "الأداء" } }
        },
        5: {
          role: "مطور واجهة أمامية", timeline: "3 أشهر",
          overview: "إعادة تشكيل كاملة للبنية التحتية إلى نظام إدارة محتوى Headless.",
          challenge: "أراد العميل الاحتفاظ بـ WordPress لمحرريه، لكنه احتاج إلى سرعة React.",
          solution: "الاستهلاك الثابت لواجهة برمجة تطبيقات WP REST باستخدام Next.js.",
          results: { 0: { label: "نقاط SEO" }, 1: { label: "أسرع" }, 2: { label: "الاستقرار المرئي" } }
        },
        6: {
          role: "مطور كامل المكدس", timeline: "6 أشهر",
          overview: "منصة SaaS B2B مركزية لمقاييس المؤثرين لوكالات التسويق مع تقارير آلية.",
          challenge: "التعامل مع واجهات برمجة تطبيقات لجهات خارجية بحدود طلبات مختلفة.",
          solution: "بنية بدون خادم في Node.js للتعامل مع قوائم الانتظار والتخزين المؤقت في PostgreSQL.",
          results: { 0: { label: "وكالات B2B" }, 1: { label: "ملفات متتبعة" }, 2: { label: "آلي" } }
        },
        7: {
          role: "مطور Vue", timeline: "4 أشهر",
          overview: "واجهة ويب لمحرك توليد الموسيقى بالذكاء الاصطناعي مع تسلسل مسارات متعددة.",
          challenge: "التعامل مع المخازن المؤقتة الصوتية الثقيلة مباشرة في متصفح المستخدم.",
          solution: "الاستخدام المكثف لـ WebAudio API مع تفاعلية Vue و Pinia.",
          results: { 0: { label: "التشغيل" }, 1: { label: "الدعم" }, 2: { label: "التصدير" } }
        },
        8: {
          role: "أمن الواجهة الأمامية", timeline: "3 أشهر",
          overview: "نظام آمن لإدارة المستندات لتسهيل طلبات التأشيرات بتشفير شامل.",
          challenge: "التأكد من عدم إمكانية اعتراض جوازات سفر المستخدمين.",
          solution: "تنفيذ Crypto.js من جانب العميل قبل الإرسال إلى Firebase.",
          results: { 0: { label: "التشفير" }, 1: { label: "الامتثال القانوني" }, 2: { label: "التأشيرات المعالجة" } }
        }
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
      },
      detail: {
        back: "Retour au Portfolio",
        client: "Client",
        role: "Rôle",
        time: "Durée",
        year: "Année",
        challengeTitle: "Le Défi",
        solutionTitle: "La Solution",
        techStackTitle: "Technologies",
        nextProject: "Projet Suivant"
      },
      details: {
        1: {
          role: "Lead Frontend Engineer", timeline: "3 Mois",
          overview: "TenisDrop AI a révolutionné la façon dont les collectionneurs prédisent la valeur de revente des baskets. Interface capable de rendre des milliers de points de données en temps réel.",
          challenge: "Le client disposait d'un modèle ML en Python extrêmement puissant, mais manquait d'une plateforme web pour consommer cette API sans figer le navigateur.",
          solution: "Mise en œuvre d'une architecture Headless avec Next.js pour le SSR, connectée à un backend Python/FastAPI. WebSockets pour les prix en direct.",
          results: { 0: { label: "Augmentation Rétention" }, 1: { label: "Temps de Chargement" }, 2: { label: "Utilisateurs Actifs/Mois" } }
        },
        2: {
          role: "Architecte Frontend", timeline: "4 Mois",
          overview: "Tableau de bord de trading en temps réel traitant plus de 10 000 transactions par seconde avec une latence ultra-faible.",
          challenge: "Gérer des mises à jour massives du DOM sans bloquer l'interface utilisateur principale lors des pics de volatilité.",
          solution: "Virtualisation des listes, Zustand pour l'état global et Chart.js intégré au Canvas natif.",
          results: { 0: { label: "TPS Traitées" }, 1: { label: "Latence Moyenne" }, 2: { label: "Temps de Disponibilité" } }
        },
        3: {
          role: "Développeur Créatif", timeline: "2 Mois",
          overview: "Visualisation interactive de données 3D pour une startup en biotechnologie. Permet d'explorer des réseaux neuronaux simulés.",
          challenge: "Rendre des modèles 3D complexes sans provoquer la surchauffe de l'ordinateur de l'utilisateur.",
          solution: "Implémentation de React Three Fiber avec optimisation de la géométrie et instanciation.",
          results: { 0: { label: "FPS Stables" }, 1: { label: "Interaction" }, 2: { label: "Temps de Chargement" } }
        },
        4: {
          role: "Frontend Lead", timeline: "5 Mois",
          overview: "Architecture e-commerce headless pour une marque de mode de luxe. Transitions fluides et temps de chargement global inférieur à 1,2 seconde.",
          challenge: "Intégrer l'inventaire en temps réel de Shopify avec une expérience SPA personnalisée.",
          solution: "Shopify Hydrogen couplé à React et Framer Motion pour des transitions fluides.",
          results: { 0: { label: "LCP" }, 1: { label: "Plus de Ventes" }, 2: { label: "Performance" } }
        },
        5: {
          role: "Développeur Frontend", timeline: "3 Mois",
          overview: "Refonte complète d'une infrastructure monolithique vers un CMS Headless avec un frontend découplé de haute performance.",
          challenge: "Le client souhaitait conserver WordPress pour ses éditeurs tout en bénéficiant de la vitesse de React.",
          solution: "Consommation statique de l'API WP REST avec Next.js et revalidation des données.",
          results: { 0: { label: "Score SEO" }, 1: { label: "Plus Rapide" }, 2: { label: "Stabilité Visuelle" } }
        },
        6: {
          role: "Développeur Fullstack", timeline: "6 Mois",
          overview: "Plateforme SaaS B2B centralisant les métriques d'influenceurs pour les agences de marketing, avec rapports automatisés.",
          challenge: "Gérer les API tierces avec différentes limites de requêtes.",
          solution: "Architecture sans serveur dans Node.js gérant les files d'attente et la mise en cache avec PostgreSQL.",
          results: { 0: { label: "Agences B2B" }, 1: { label: "Profils Suivis" }, 2: { label: "Automatisé" } }
        },
        7: {
          role: "Développeur Vue", timeline: "4 Mois",
          overview: "Interface web pour un moteur de génération musicale par IA. Inclut un séquenceur multipiste rendu côté client.",
          challenge: "Manipulation de lourds tampons audio directement dans le navigateur de l'utilisateur.",
          solution: "Utilisation intensive de l'API WebAudio couplée à la réactivité de Vue et Pinia.",
          results: { 0: { label: "Lecture" }, 1: { label: "Support" }, 2: { label: "Exportation" } }
        },
        8: {
          role: "Sécurité Frontend", timeline: "3 Mois",
          overview: "Système de gestion de documents sécurisé facilitant les demandes de visas avec chiffrement de bout en bout.",
          challenge: "S'assurer que les passeports des utilisateurs ne puissent pas être interceptés.",
          solution: "Mise en œuvre côté client de Crypto.js avant l'envoi au stockage Firebase.",
          results: { 0: { label: "Chiffrement" }, 1: { label: "Conformité Légale" }, 2: { label: "Visas Traités" } }
        }
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
      },
      detail: {
        back: "返回作品集",
        client: "客户",
        role: "角色",
        time: "时间",
        year: "年份",
        challengeTitle: "挑战",
        solutionTitle: "解决方案",
        techStackTitle: "技术栈",
        nextProject: "下一个项目"
      },
      details: {
        1: {
          role: "首席前端工程师", timeline: "3个月",
          overview: "TenisDrop AI彻底改变了收藏家预测限量版运动鞋转售价值的方式。界面能够以几乎零延迟实时渲染数千个数据点。",
          challenge: "客户拥有一个极其强大的Python机器学习模型，但缺乏一个可以在不冻结浏览器的情况下使用该API的网络平台。",
          solution: "我们使用Next.js实现了无头架构，用于SSR和SEO，连接到Python/FastAPI后端。用于实时价格的WebSockets和用于图表的Canvas/WebGL。",
          results: { 0: { label: "保留率增加" }, 1: { label: "加载时间(LCP)" }, 2: { label: "活跃用户/月" } }
        },
        2: {
          role: "前端架构师", timeline: "4个月",
          overview: "实时交易仪表板，每秒处理超过10,000笔交易，超低延迟，专为日间交易员优化。",
          challenge: "在市场波动激增期间处理大规模的DOM更新，而不会阻塞主UI线程。",
          solution: "列表虚拟化，全局状态的Zustand避免不必要的重新渲染，以及与原生Canvas集成的Chart.js。",
          results: { 0: { label: "处理的TPS" }, 1: { label: "平均延迟" }, 2: { label: "正常运行时间" } }
        },
        3: {
          role: "创意开发人员", timeline: "2个月",
          overview: "为一家生物技术初创公司提供交互式3D数据可视化。允许在浏览器中直接探索模拟的神经网络。",
          challenge: "渲染复杂的3D模型而不会导致用户的计算机风扇崩溃。",
          solution: "通过几何优化和实例化实现React Three Fiber。",
          results: { 0: { label: "稳定的FPS" }, 1: { label: "互动" }, 2: { label: "加载时间" } }
        },
        4: {
          role: "前端主管", timeline: "5个月",
          overview: "针对奢侈时尚品牌的无头(Headless)电子商务架构。流畅的过渡和全球不到1.2秒的加载时间。",
          challenge: "将Shopify的实时库存与定制的SPA体验集成在一起。",
          solution: "Shopify Hydrogen与React和Framer Motion相结合，实现流畅的页面过渡。",
          results: { 0: { label: "加载(LCP)" }, 1: { label: "更多销售" }, 2: { label: "性能" } }
        },
        5: {
          role: "前端开发人员", timeline: "3个月",
          overview: "从单体基础架构到Headless CMS的全面改革。实施高性能解耦前端。",
          challenge: "客户希望为编辑保留WordPress，但需要前端的React速度。",
          solution: "使用Next.js静态使用WP REST API并增量验证数据。",
          results: { 0: { label: "SEO得分" }, 1: { label: "更快" }, 2: { label: "视觉稳定性" } }
        },
        6: {
          role: "全栈开发人员", timeline: "6个月",
          overview: "B2B SaaS平台，为营销机构集中多个网络上的影响者指标，具有自动报告功能。",
          challenge: "处理具有不同请求限制的第三方API (Twitch, YouTube, TikTok)。",
          solution: "Node.js中的无服务器架构，处理请求队列并在PostgreSQL中缓存。",
          results: { 0: { label: "B2B机构" }, 1: { label: "跟踪配置文件" }, 2: { label: "自动化" } }
        },
        7: {
          role: "Vue前端", timeline: "4个月",
          overview: "AI音乐生成引擎的Web界面。包含客户端渲染的多轨音序器和云导出。",
          challenge: "直接在用户的浏览器中处理沉重的音频缓冲区。",
          solution: "大量使用WebAudio API结合Vue的反应性和Pinia进行轨道状态管理。",
          results: { 0: { label: "回放" }, 1: { label: "支持" }, 2: { label: "导出" } }
        },
        8: {
          role: "前端安全", timeline: "3个月",
          overview: "安全的文档管理系统，以促进旅游和数字游民签证申请，具有端到端加密。",
          challenge: "确保用户的护照和财务文件无法被拦截。",
          solution: "在将任何文件发送到Firebase Storage之前，在客户端实施Crypto.js。",
          results: { 0: { label: "加密" }, 1: { label: "法律合规" }, 2: { label: "处理的签证" } }
        }
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