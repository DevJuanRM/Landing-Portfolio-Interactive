import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // <-- ¡NUEVO! Importamos los hooks de navegación
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Github, 
  Globe, 
  Monitor, 
  Smartphone, 
  Database, 
  Layers,
  Sun,
  Moon,
  Code
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// DATA: BASE DE DATOS DE LOS 8 CASOS DE ESTUDIO
// ==========================================
// Ahora es un arreglo [] que contiene todos tus proyectos.
const allProjects = [
  {
    id: 1,
    title: "TenisDrop AI",
    client: "SneakerHead Inc.",
    role: "Lead Frontend Engineer",
    timeline: "3 Meses",
    year: "2025",
    cat: "Next.js / Python",
    website: "https://tenisdrop.ai",
    github: "https://github.com",
    heroImage: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop",
    overview: "TenisDrop AI revolucionó la forma en que los coleccionistas predicen el valor de reventa de zapatillas. Interfaz capaz de renderizar miles de puntos de datos en tiempo real con latencia casi nula.",
    challenge: "El cliente contaba con un modelo de ML en Python extremadamente potente, pero carecía de una plataforma web que pudiera consumir esa API sin congelar el navegador.",
    solution: "Implementamos arquitectura Headless utilizando Next.js para el SSR y SEO, conectado a un backend de Python/FastAPI. WebSockets para precios en vivo y Canvas/WebGL para gráficos.",
    techStack: [
      { name: "Next.js 14", icon: <Globe size={20} /> },
      { name: "TypeScript", icon: <Code size={20} /> },
      { name: "Tailwind CSS", icon: <Layers size={20} /> },
      { name: "FastAPI", icon: <Database size={20} /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1500&auto=format&fit=crop"
    ],
    results: [
      { metric: "45%", label: "Aumento en Retención" },
      { metric: "<0.8s", label: "Tiempo de Carga (LCP)" },
      { metric: "12k+", label: "Usuarios Activos/Mes" }
    ]
  },
  {
    id: 2,
    title: "Crypto Terminal",
    client: "Fintech Global",
    role: "Frontend Architect",
    timeline: "4 Meses",
    year: "2025",
    cat: "React / WebSockets",
    website: "https://cryptoterminal.com",
    github: "https://github.com",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    overview: "Dashboard de trading en tiempo real que procesa más de 10,000 transacciones por segundo con latencia ultra baja, optimizado para day traders profesionales.",
    challenge: "Manejar actualizaciones masivas del DOM sin bloquear la UI principal cuando el mercado tiene picos de volatilidad.",
    solution: "Virtualización de listas pesadas, Zustand para el estado global evitando re-renders innecesarios y Chart.js integrado con Canvas nativo.",
    techStack: [
      { name: "React 18", icon: <Code size={20} /> },
      { name: "WebSockets", icon: <Globe size={20} /> },
      { name: "Zustand", icon: <Database size={20} /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1500&auto=format&fit=crop"
    ],
    results: [
      { metric: "10k+", label: "TPS Procesadas" },
      { metric: "0.2s", label: "Latencia Promedio" },
      { metric: "99.9%", label: "Uptime" }
    ]
  },
  {
    id: 3,
    title: "Neural Dashboard",
    client: "BioTech Startup",
    role: "Creative Developer",
    timeline: "2 Meses",
    year: "2024",
    cat: "Three.js / GSAP",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    overview: "Visualización de datos 3D interactiva para una startup de biotecnología. Permite explorar redes neuronales simuladas directo en el navegador.",
    challenge: "Renderizar modelos 3D complejos sin que los ventiladores del computador del usuario colapsen.",
    solution: "Implementación de React Three Fiber con optimización de geometrías e instanciado.",
    techStack: [{ name: "Three.js", icon: <Monitor size={20} /> }, { name: "GSAP", icon: <Code size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "60", label: "FPS Estables" }, { metric: "2x", label: "Interacción" }, { metric: "1.2s", label: "Load Time" }]
  },
  {
    id: 4,
    title: "E-comm Luxury",
    client: "Moda Global",
    role: "Frontend Lead",
    timeline: "5 Meses",
    year: "2024",
    cat: "Shopify / React",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
    overview: "Arquitectura headless commerce para una marca de moda de lujo. Transiciones fluidas y un tiempo de carga inferior a 1.2 segundos a nivel global.",
    challenge: "Integrar el inventario en tiempo real de Shopify con una experiencia SPA personalizada.",
    solution: "Shopify Hydrogen acoplado con React y Framer Motion para transiciones de página fluidas.",
    techStack: [{ name: "React", icon: <Code size={20} /> }, { name: "GraphQL", icon: <Database size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "1.2s", label: "LCP" }, { metric: "35%", label: "Más Ventas" }, { metric: "100", label: "Performance" }]
  },
  {
    id: 5,
    title: "Marwind Headless",
    client: "Agencia Marwind",
    role: "Frontend Developer",
    timeline: "3 Meses",
    year: "2024",
    cat: "WordPress / React",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    overview: "Remodelación completa de infraestructura monolítica a Headless CMS. Rediseño basado en Figma implementando un frontend desacoplado de alto rendimiento.",
    challenge: "El cliente quería mantener WordPress para sus editores, pero necesitaba la velocidad de React en el Frontend.",
    solution: "Consumo de WP REST API estáticamente con Next.js y revalidación de datos incremental.",
    techStack: [{ name: "React", icon: <Code size={20} /> }, { name: "TailwindCSS", icon: <Layers size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "98", label: "SEO Score" }, { metric: "4x", label: "Más rápido" }, { metric: "0 CLS", label: "Estabilidad Visual" }]
  },
  {
    id: 6,
    title: "Streamer Analytics SaaS",
    client: "Marketing Pro",
    role: "Fullstack Dev",
    timeline: "6 Meses",
    year: "2026",
    cat: "Next.js / Node.js",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    overview: "Plataforma SaaS B2B que centraliza métricas de influencers y streamers en múltiples redes para agencias de marketing, con reportes automatizados.",
    challenge: "Manejar APIs de terceros (Twitch, YouTube, TikTok) con distintos límites de peticiones.",
    solution: "Arquitectura serverless en Node.js manejando colas de peticiones y guardando el caché en PostgreSQL.",
    techStack: [{ name: "Next.js", icon: <Globe size={20} /> }, { name: "Node.js", icon: <Database size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "50+", label: "Agencias B2B" }, { metric: "1M+", label: "Perfiles trackeados" }, { metric: "100%", label: "Automatizado" }]
  },
  {
    id: 7,
    title: "Sonic AI Studio",
    client: "AudioTech AI",
    role: "Frontend Vue",
    timeline: "4 Meses",
    year: "2026",
    cat: "Vue / WebAudio API",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
    overview: "Interfaz web para un motor de generación musical por IA. Incluye un secuenciador multipista renderizado en el cliente y exportación en la nube.",
    challenge: "Manipulación de buffers de audio pesados directo en el navegador del usuario.",
    solution: "Uso intensivo de WebAudio API acoplado a la reactividad de Vue y Pinia para el estado de las pistas.",
    techStack: [{ name: "Vue.js", icon: <Code size={20} /> }, { name: "WebAudio API", icon: <Monitor size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "0 latency", label: "Playback" }, { metric: "Multitrack", label: "Soporte" }, { metric: "Cloud", label: "Exportación" }]
  },
  {
    id: 8,
    title: "Nomad Visa Portal",
    client: "Immigration Gov",
    role: "Frontend Security",
    timeline: "3 Meses",
    year: "2025",
    cat: "React / Firebase",
    website: "#",
    github: "#",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    overview: "Sistema de gestión documental seguro para facilitar aplicaciones a visas de turismo y nómada digital, con encriptación de extremo a extremo.",
    challenge: "Asegurar que los pasaportes y documentos financieros de los usuarios no pudieran ser interceptados.",
    solution: "Implementación de Crypto.js en el cliente antes de enviar cualquier blob de archivo a Firebase Storage.",
    techStack: [{ name: "React", icon: <Code size={20} /> }, { name: "Firebase", icon: <Database size={20} /> }],
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"],
    results: [{ metric: "AES-256", label: "Encriptación" }, { metric: "100%", label: "Cumplimiento Legal" }, { metric: "5k+", label: "Visas procesadas" }]
  }
];

// ==========================================
// COMPONENTES DE LA PÁGINA
// ==========================================

const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate(); // <-- Usamos navigate para no recargar la página
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white flex justify-between items-center transition-colors duration-500">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-green-500 transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Volver al Portafolio
      </button>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors"
        >
          {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
      </div>
    </nav>
  );
};

const HeroImageParallax = ({ image }) => {
  const container = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, 
        { scale: 1.2, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, [image]); // Se vuelve a ejecutar si la imagen cambia

  return (
    <div ref={container} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] border-b border-zinc-200 dark:border-white/10 mt-[80px]">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
      <img 
        ref={imgRef}
        src={image} 
        alt="Project Hero" 
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />
    </div>
  );
};

const ProjectHeader = ({ project }) => {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".header-anim", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, headerRef);
    return () => ctx.revert();
  }, [project.id]); // Vuelve a animar si cambia el ID

  return (
    <section ref={headerRef} className="pt-20 pb-20 px-6 md:px-20 max-w-[1400px] mx-auto section-fade">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
        <div className="max-w-4xl">
          <p className="header-anim text-green-600 dark:text-green-500 font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-green-600/50 dark:bg-green-500/50" />
            {project.cat}
          </p>
          <h1 className="header-anim text-6xl md:text-8xl lg:text-[10vw] font-black tracking-tighter leading-[0.85] text-zinc-900 dark:text-white transition-colors duration-500">
            {project.title}
          </h1>
        </div>
        
        <div className="header-anim flex gap-4 shrink-0">
          <a href={project.website} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-green-500 hover:text-white dark:hover:text-black hover:border-green-500 transition-all duration-300 group">
            <Globe size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-green-500 hover:text-white dark:hover:text-black hover:border-green-500 transition-all duration-300 group">
            <Github size={24} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-zinc-200 dark:border-white/10">
        {[
          { label: "Cliente", value: project.client },
          { label: "Rol", value: project.role },
          { label: "Tiempo", value: project.timeline },
          { label: "Año", value: project.year }
        ].map((info, idx) => (
          <div key={idx} className="header-anim">
            <p className="text-zinc-500 dark:text-gray-500 font-mono text-xs uppercase tracking-widest mb-2">{info.label}</p>
            <p className="text-zinc-900 dark:text-white font-bold text-lg">{info.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContentSection = ({ project }) => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-[1400px] mx-auto section-fade">
      <div className="grid md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-black uppercase text-zinc-900 dark:text-white mb-6">El Desafío</h2>
          <div className="w-12 h-1 bg-green-500 mb-8" />
        </div>
        <div className="md:col-span-8">
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-gray-300 leading-relaxed font-light mb-12">
            {project.overview}
          </p>
          <p className="text-lg text-zinc-500 dark:text-gray-400 leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </div>
    </section>
  );
};

const ImageGallery = ({ images }) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray(".gallery-img");
      imgs.forEach((img) => {
        gsap.fromTo(img,
          { clipPath: "inset(10% 10% 10% 10%)", scale: 1.1 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "center center",
              scrub: 1
            }
          }
        );
      });
    }, container);
    return () => ctx.revert();
  }, [images]); // Dependencia para cuando cambian las fotos

  return (
    <section ref={container} className="py-20 px-6 md:px-20 max-w-[1600px] mx-auto space-y-10 md:space-y-20">
      {images.map((img, idx) => (
        <div key={idx} className="relative w-full h-[50vh] md:h-[90vh] rounded-[30px] overflow-hidden gallery-img shadow-2xl dark:shadow-none">
          <img src={img} alt={`Gallery ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </section>
  );
};

const SolutionSection = ({ project }) => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-[1400px] mx-auto section-fade">
      <div className="grid md:grid-cols-12 gap-10 md:gap-20 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-black uppercase text-zinc-900 dark:text-white mb-6">La Solución</h2>
          <div className="w-12 h-1 bg-green-500 mb-8" />
        </div>
        <div className="md:col-span-8">
          <p className="text-lg text-zinc-600 dark:text-gray-400 leading-relaxed mb-12">
            {project.solution}
          </p>
          
          <h3 className="text-xl font-bold uppercase text-zinc-900 dark:text-white mb-6">Stack Tecnológico</h3>
          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-zinc-100 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-full text-zinc-800 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-500">{tech.icon}</span>
                <span className="font-mono text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.results.map((res, idx) => (
          <div key={idx} className="p-10 bg-zinc-50 dark:bg-[#0a0a0a] rounded-[30px] border border-zinc-200 dark:border-white/5 text-center transition-colors duration-500 hover:border-green-500/50">
            <div className="text-6xl md:text-7xl font-black text-green-600 dark:text-green-500 mb-4">{res.metric}</div>
            <div className="text-zinc-600 dark:text-gray-400 font-mono uppercase tracking-widest text-sm">{res.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NextProject = ({ nextId, nextTitle }) => {
  const navigate = useNavigate(); // <-- Navegación fluida al siguiente proyecto
  return (
    <section 
      className="h-screen flex items-center justify-center border-t border-zinc-200 dark:border-white/10 relative overflow-hidden bg-zinc-900 dark:bg-[#030303] group cursor-pointer" 
      onClick={() => navigate(`/projects/${nextId}`)}
    >
      <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-700 z-0" />
      
      <div className="text-center z-10">
        <p className="text-zinc-400 font-mono text-sm uppercase tracking-[0.3em] mb-6">Siguiente Proyecto</p>
        <h2 className="text-[10vw] font-black tracking-tighter text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_#22c55e] transition-all duration-500">
          {nextTitle}
        </h2>
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 scale-50 group-hover:scale-100">
        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(34,197,94,0.5)]">
          <ArrowUpRight size={64} />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 dark:text-gray-500 font-mono text-sm flex flex-col items-center md:items-start gap-2">
          <p>DISEÑADO & DESARROLLADO CON ❤️</p>
          <p>© {new Date().getFullYear()} - TODOS LOS DERECHOS RESERVADOS</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (PLANTILLA)
// ==========================================

export default function ProjectDetailTemplate() {
  const { id } = useParams(); // <-- ¡NUEVO! Extraemos el ID numérico de la URL
  const [isDark, setIsDark] = useState(true);

  // <-- ¡NUEVO! Buscamos en la base de datos el proyecto que coincida con el ID
  const projectId = parseInt(id);
  const project = allProjects.find(p => p.id === projectId);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // <-- ¡NUEVO! Hacemos que scrollee hacia arriba CADA VEZ que cambia el ID
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [id]); // Dependencia del ID para reiniciar lenis en navegación

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section-fade");
      sections.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, [id]); // Refrescar animaciones al cambiar de proyecto

  // <-- Manejo de errores: Si el usuario pone /projects/99 en la URL
  if (!project) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
        <a href="/" className="text-green-500 hover:underline">Volver al inicio</a>
      </div>
    );
  }

  // <-- Lógica para saber cuál es el siguiente proyecto automáticamente
  const nextProjectId = projectId === allProjects.length ? 1 : projectId + 1;
  const nextProjectData = allProjects.find(p => p.id === nextProjectId);

  return (
    <div className={cn("transition-colors duration-500 w-full min-h-screen", isDark ? "dark" : "")}>
      <div className="bg-white dark:bg-[#030303] min-h-screen text-zinc-900 dark:text-white font-sans selection:bg-green-500 selection:text-white dark:selection:text-black overflow-hidden transition-colors duration-500">
        
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <HeroImageParallax image={project.heroImage} />
          <ProjectHeader project={project} />
          <ContentSection project={project} />
          <ImageGallery images={project.gallery} />
          <SolutionSection project={project} />
        </main>

        <NextProject nextId={nextProjectId} nextTitle={nextProjectData.title} />
        <Footer />
        
      </div>
    </div>
  );
}