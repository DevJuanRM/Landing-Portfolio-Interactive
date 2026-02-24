import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { 
  ArrowUpRight, 
  Code, 
  Layout, 
  Smartphone, 
  Layers, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Terminal,
  Cpu,
  Globe,
  Sun,
  Moon
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// DATA: 8 CASOS DE ESTUDIO Y CONTENIDO
// ==========================================
  
const projects = [
  { 
    id: 1, 
    title: "TenisDrop AI", 
    cat: "Next.js / Python", 
    year: "2025",
    description: "Plataforma impulsada por IA para predecir el valor de reventa de zapatillas de edición limitada utilizando modelos de machine learning y scraping en tiempo real.",
    techStack: ["Next.js", "Python", "TensorFlow", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Crypto Terminal", 
    cat: "React / WebSockets", 
    year: "2025",
    description: "Dashboard de trading en tiempo real que procesa más de 10,000 transacciones por segundo con latencia ultra baja, optimizado para day traders.",
    techStack: ["React", "WebSockets", "Zustand", "Chart.js"],
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Neural Dashboard", 
    cat: "Three.js / GSAP", 
    year: "2024",
    description: "Visualización de datos 3D interactiva para una startup de biotecnología. Permite explorar redes neuronales simuladas directo en el navegador.",
    techStack: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "E-comm Luxury", 
    cat: "Shopify / React", 
    year: "2024",
    description: "Arquitectura headless commerce para una marca de moda de lujo. Transiciones fluidas y un tiempo de carga inferior a 1.2 segundos a nivel global.",
    techStack: ["Shopify Hydrogen", "React", "GraphQL", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    title: "Marwind Headless", 
    cat: "WordPress / React", 
    year: "2024",
    description: "Remodelación completa de infraestructura monolítica a Headless CMS. Rediseño basado en Figma implementando un frontend desacoplado de alto rendimiento.",
    techStack: ["React", "WP REST API", "GSAP", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    title: "Streamer Analytics SaaS", 
    cat: "Next.js / Node.js", 
    year: "2026",
    description: "Plataforma SaaS B2B que centraliza métricas de influencers y streamers en múltiples redes para agencias de marketing, con reportes automatizados.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 7, 
    title: "Sonic AI Studio", 
    cat: "Vue / WebAudio API", 
    year: "2026",
    description: "Interfaz web para un motor de generación musical por IA. Incluye un secuenciador multipista renderizado en el cliente y exportación en la nube.",
    techStack: ["Vue.js", "WebAudio API", "Pinia", "AWS S3"],
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 8, 
    title: "Nomad Visa Portal", 
    cat: "React / Firebase", 
    year: "2025",
    description: "Sistema de gestión documental seguro para facilitar aplicaciones a visas de turismo y nómada digital, con encriptación de extremo a extremo.",
    techStack: ["React", "Firebase", "Crypto.js", "Material UI"],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop" 
  }
];

const skills = [
  "React.js", "Node.js", "Tailwind CSS", "GSAP", "Three.js", 
  "Supabase", "TypeScript", "Next.js", "Framer Motion", "Vite",
  "GraphQL", "WebGL", "Jest", "Cypress", "Figma"
];

const faqs = [
  {
    question: "¿Cuál es tu proceso de trabajo?",
    answer: "Mi proceso se divide en 4 fases: Descubrimiento (entender el negocio y requerimientos), Diseño de Arquitectura (selección de stack tecnológico), Desarrollo (sprints ágiles con entregables semanales) y Lanzamiento (QA riguroso, optimización SEO y despliegue)."
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto desde cero?",
    answer: "Un landing page interactivo de alto rendimiento puede tomar entre 2 a 4 semanas. Plataformas complejas, dashboards o e-commerce headless pueden requerir de 2 a 3 meses dependiendo de la integración de APIs y el nivel de animaciones personalizadas."
  },
  {
    question: "¿Trabajas solo con React o usas otras tecnologías?",
    answer: "Me especializo en el ecosistema React (Next.js, Vite), pero soy un desarrollador agnóstico al framework. Utilizo las herramientas que mejor resuelvan el problema, incluyendo Vue, Svelte, o soluciones vanilla con JS/TS puro si el rendimiento extremo lo requiere."
  },
  {
    question: "¿Haces mantenimiento después del lanzamiento?",
    answer: "Sí, ofrezco planes de mantenimiento mensual que incluyen actualizaciones de dependencias, monitoreo de rendimiento (Core Web Vitals), copias de seguridad y horas de soporte técnico para nuevas características."
  }
];

// ==========================================
// COMPONENTES DE SECCIÓN (SOPORTAN LIGHT/DARK)
// ==========================================

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white flex justify-between items-center transition-colors duration-500">
      <div className="font-black text-2xl tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform">
        DEV<span className="text-green-500">.</span>PRO
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest">
        <a href="#work" className="hover:text-green-500 transition-colors">TRABAJO</a>
        <a href="#services" className="hover:text-green-500 transition-colors">SERVICIOS</a>
        <a href="#about" className="hover:text-green-500 transition-colors">SOBRE MÍ</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
        <button className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-green-500 dark:hover:bg-green-500 hover:text-white dark:hover:text-black transition-all text-sm uppercase">
          Contactar
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const container = useRef(null);
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(textRefs.current, 
        { y: 100, opacity: 0, rotateX: -45 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0, 
          stagger: 0.1, 
          duration: 1.2, 
          ease: "power4.out",
          delay: 0.2
        }
      );

      gsap.to(".hero-glow", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section ref={container} className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden section-anim">
      {/* Glows adaptables */}
      <div className="hero-glow absolute top-20 right-20 w-[500px] h-[500px] bg-green-400/30 dark:bg-green-500/20 blur-[150px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="hero-glow absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-500/10 blur-[150px] rounded-full pointer-events-none transition-colors duration-500" />
      
      <div className="z-10 mt-20">
        <div className="overflow-hidden mb-4">
          <p ref={addToRefs} className="text-green-600 dark:text-green-400 font-mono tracking-[0.3em] text-sm md:text-base uppercase">
            Ingeniero de Software Frontend
          </p>
        </div>
        
        <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-900 dark:text-white transition-colors duration-500">
          <div className="overflow-hidden"><span ref={addToRefs} className="block">CREATIVE</span></div>
          <div className="overflow-hidden"><span ref={addToRefs} className="block text-green-500">ENGINEER</span></div>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-10 md:items-center mt-12">
          <p ref={addToRefs} className="max-w-xl text-zinc-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed transition-colors duration-500">
            Especializado en arquitecturas escalables, interfaces de alto rendimiento, animaciones fluidas y experiencias web inmersivas que convierten usuarios en clientes leales.
          </p>
          <div ref={addToRefs} className="flex flex-wrap gap-4">
            <div className="px-6 py-3 border border-zinc-300 dark:border-white/20 rounded-full font-mono text-sm uppercase flex items-center gap-2 text-zinc-800 dark:text-white transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponible para proyectos
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-6 md:left-20 animate-bounce text-zinc-400 dark:text-white/50 transition-colors duration-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  return (
    <section className="py-10 border-y border-zinc-200 dark:border-white/5 overflow-hidden bg-slate-50 dark:bg-[#050505] section-anim relative transition-colors duration-500">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500" />
      
      <div className="flex whitespace-nowrap gap-10 hover:[animation-play-state:paused] animate-marquee">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex gap-10 items-center">
            {skills.map(s => (
              <span 
                key={`${n}-${s}`} 
                className="text-4xl md:text-6xl font-black text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.15)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.2)] hover:[-webkit-text-stroke:1px_#22c55e] dark:hover:[-webkit-text-stroke:1px_#22c55e] hover:text-green-500 dark:hover:text-green-500 transition-all cursor-default select-none"
              >
                {s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".about-text", 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={container} className="py-32 px-6 md:px-20 max-w-7xl mx-auto section-anim">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter about-text text-zinc-900 dark:text-white transition-colors duration-500">
            Más allá del <br /><span className="text-green-500">código</span>
          </h2>
          <div className="space-y-6 text-zinc-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-500">
            <p className="about-text">
              No solo escribo React y CSS. Construyo puentes entre el diseño visual y la ingeniería lógica. Mi enfoque se centra en crear arquitecturas robustas que no sacrifiquen la experiencia del usuario.
            </p>
            <p className="about-text">
              Con profunda experiencia en el ecosistema JavaScript, integro tecnologías modernas como WebGL, GSAP y arquitecturas Headless para entregar productos digitales que destacan en un mercado saturado.
            </p>
            <p className="about-text font-medium text-zinc-800 dark:text-gray-300">
              Cada milisegundo cuenta, cada pixel importa.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 about-text">
            <div>
              <div className="text-5xl font-black text-zinc-900 dark:text-white transition-colors duration-500">5+</div>
              <div className="text-green-600 dark:text-green-500 font-mono text-sm mt-2 uppercase">Años de Exp.</div>
            </div>
            <div>
              <div className="text-5xl font-black text-zinc-900 dark:text-white transition-colors duration-500">40+</div>
              <div className="text-green-600 dark:text-green-500 font-mono text-sm mt-2 uppercase">Proyectos</div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden about-text border border-zinc-200 dark:border-white/10 group transition-colors duration-500 shadow-xl dark:shadow-none">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
            alt="Workspace" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 dark:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-[#030303] dark:via-transparent to-transparent transition-colors duration-500" />
          <div className="absolute bottom-10 left-10 p-6 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-white/10 transition-colors duration-500 shadow-lg dark:shadow-none">
            <Terminal size={32} className="text-green-600 dark:text-green-500 mb-4" />
            <div className="font-mono text-sm text-zinc-800 dark:text-white/80 transition-colors duration-500">
              <span className="text-green-600 dark:text-green-500">~</span> whoami<br/>
              Frontend Architect<br/>
              <span className="text-green-600 dark:text-green-500">~</span> location<br/>
              Bogotá, Colombia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-20 bg-slate-50 dark:bg-[#050505] section-anim border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-green-600 dark:text-green-500 font-mono text-sm uppercase tracking-widest mb-4">Experiencia Técnica</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white transition-colors duration-500">Capacidades<br/>Principales</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Code size={40} />,
              title: "Desarrollo Frontend",
              desc: "SPAs, SSG y SSR utilizando el ecosistema React (Next.js, Vite). Código limpio, modular y altamente tipado."
            },
            {
              icon: <Layers size={40} />,
              title: "Creative Coding",
              desc: "Animaciones avanzadas con GSAP, Framer Motion y experiencias 3D en el navegador mediante Three.js."
            },
            {
              icon: <Cpu size={40} />,
              title: "Headless Arquitectura",
              desc: "Integración de frontends modernos con CMS robustos (Sanity, WordPress Headless) y plataformas e-commerce."
            },
            {
              icon: <Smartphone size={40} />,
              title: "Optimización Core Web",
              desc: "Auditorías de rendimiento, mejora de LCP, CLS e INP para garantizar puntuaciones de 90+ en Google Lighthouse."
            }
          ].map((srv, i) => (
            <div key={i} className="bg-white dark:bg-[#0a0a0a] p-10 rounded-[30px] border border-zinc-200 dark:border-white/5 hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-md dark:shadow-none">
              <div className="text-zinc-300 dark:text-white/20 group-hover:text-green-500 transition-colors duration-300 mb-8">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white transition-colors duration-500">{srv.title}</h3>
              <p className="text-zinc-600 dark:text-gray-400 leading-relaxed text-sm transition-colors duration-500">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const container = useRef(null);
  const image = useRef(null);
  const navigate = useNavigate(); // <-- Agregamos el hook de navegación aquí

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(image.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={container} 
      className={cn(
        "relative w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-40 px-6 md:px-20 max-w-[1600px] mx-auto group cursor-pointer",
        !isEven && "md:flex-row-reverse"
      )}
      // <-- Cambiamos el href por el navigate fluido
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="w-full md:w-[60%] h-[50vh] md:h-[80vh] relative rounded-[40px] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xl dark:shadow-none transition-colors duration-500">
        <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          ref={image} 
          src={project.img} 
          className="absolute -top-[10%] -bottom-[10%] w-full h-[120%] object-cover grayscale-[0.5] dark:grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
          alt={project.title} 
        />
        
        <div className="absolute top-8 left-8 z-20 px-6 py-2 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-full border border-zinc-200 dark:border-white/10 font-mono text-xs text-zinc-900 dark:text-white uppercase tracking-widest transition-colors duration-500">
          {project.year}
        </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center">
        <p className="text-green-600 dark:text-green-400 font-mono text-sm mb-6 uppercase tracking-[0.3em] flex items-center gap-3">
          <span className="w-8 h-[1px] bg-green-600/50 dark:bg-green-400/50" />
          {project.cat}
        </p>
        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-none group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-500">
          {project.title}
        </h2>
        <p className="text-zinc-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-md transition-colors duration-500">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {project.techStack.map(tech => (
            <span key={tech} className="px-4 py-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-full text-xs text-zinc-600 dark:text-gray-300 font-mono transition-colors duration-500">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-green-500 group-hover:border-green-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
            <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="font-bold text-sm uppercase tracking-widest text-zinc-900 dark:text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Ver Caso de Estudio
          </span>
        </div>
      </div>
    </div>
  );
};

const WorksSection = () => {
  return (
    <section id="work" className="py-32 section-anim relative transition-colors duration-500">
      <div className="px-6 md:px-20 mb-32 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <div>
          <p className="text-green-600 dark:text-green-500 font-mono text-sm uppercase tracking-widest mb-4">Casos de Estudio</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-zinc-900 dark:text-white transition-colors duration-500">
            Trabajo<br/>Destacado
          </h2>
        </div>
        <p className="max-w-md text-zinc-600 dark:text-gray-400 text-right md:text-left transition-colors duration-500">
          Una selección de proyectos recientes enfocados en resolver problemas complejos de negocio mediante ingeniería frontend moderna.
        </p>
      </div>

      <div className="relative z-10">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 px-6 md:px-20 bg-slate-50 dark:bg-[#050505] section-anim border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 text-center text-zinc-900 dark:text-white transition-colors duration-500">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500 shadow-sm dark:shadow-none"
              >
                <button 
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={cn("text-xl font-bold pr-8 transition-colors", isOpen ? "text-green-600 dark:text-green-500" : "text-zinc-900 dark:text-white")}>
                    {faq.question}
                  </span>
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0", isOpen ? "bg-green-500 border-green-500 text-white dark:text-black rotate-180" : "border-zinc-300 dark:border-white/20 text-zinc-600 dark:text-white")}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div 
                  className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}
                >
                  <div className="px-8 pb-8 text-zinc-600 dark:text-gray-400 leading-relaxed border-t border-zinc-100 dark:border-white/5 pt-6 mt-2 transition-colors duration-500">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-10 border-t border-zinc-200 dark:border-white/10 overflow-hidden section-anim transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-green-200/50 dark:bg-green-900/10 blur-[200px] rounded-full pointer-events-none transition-colors duration-500" />
      
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto relative z-10 flex flex-col items-center text-center">
        <p className="text-green-600 dark:text-green-500 font-mono text-sm uppercase tracking-widest mb-6 border border-green-500/30 px-6 py-2 rounded-full bg-green-50 dark:bg-green-500/5 transition-colors duration-500">
          ¿Tienes una idea en mente?
        </p>
        <h2 className="text-[15vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter mb-12 uppercase text-zinc-900 dark:text-white hover:text-green-500 dark:hover:text-green-500 transition-colors duration-500 cursor-pointer">
          Hablemos
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-32">
          <button className="px-12 py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-black text-lg rounded-full hover:bg-green-500 dark:hover:bg-green-500 hover:text-white transition-all duration-300 shadow-[0_0_0_rgba(34,197,94,0)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] flex items-center justify-center gap-3">
            <Mail size={20} />
            ENVIAR CORREO
          </button>
          <button className="px-12 py-5 border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white font-bold text-lg rounded-full hover:bg-zinc-100 dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-3">
            <Globe size={20} />
            AGENDAR LLAMADA
          </button>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-200 dark:border-white/10 gap-6 transition-colors duration-500">
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-zinc-500 dark:text-gray-500 font-mono text-sm flex flex-col items-center md:items-end gap-2 transition-colors duration-500">
            <p>DISEÑADO & DESARROLLADO CON ❤️</p>
            <p>© {new Date().getFullYear()} - TODOS LOS DERECHOS RESERVADOS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (CONTROLADOR DE TEMA)
// ==========================================

export default function PortfolioPro() {
  // Estado para el tema. Por defecto falso (Light Mode como pediste "en blanco")
  // Puedes cambiar el default a true si prefieres que inicie oscuro.
  const [isDark, setIsDark] = useState(false);

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
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section-anim");

      sections.forEach((section) => {
        gsap.fromTo(section,
          { 
            opacity: 0.3, 
            y: 100 
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              end: "top 15%",
              scrub: 1,
            }
          }
        );

        gsap.to(section, {
          opacity: 0.3,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "bottom 15%",
            end: "bottom top",
            scrub: 1,
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // El envoltorio principal controla la clase 'dark' de Tailwind
    <div className={cn("transition-colors duration-500 w-full min-h-screen", isDark ? "dark" : "")}>
      <div className="bg-white dark:bg-[#030303] min-h-screen text-zinc-900 dark:text-white font-sans selection:bg-green-500 selection:text-white dark:selection:text-black overflow-hidden transition-colors duration-500">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <SkillsMarquee />
          <AboutSection />
          <ServicesSection />
          <WorksSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}