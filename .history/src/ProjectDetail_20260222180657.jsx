import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // <-- NUEVO: Importamos herramientas de Router
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
// DATA DINÁMICA: TODOS TUS CASOS DE ESTUDIO
// ==========================================
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
    github: "https://github.com/username/tenisdrop",
    heroImage: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop",
    overview: "TenisDrop AI revolucionó la forma en que los coleccionistas predicen el valor de reventa de zapatillas...",
    challenge: "El cliente contaba con un modelo de Machine Learning en Python extremadamente potente...",
    solution: "Implementamos una arquitectura Headless utilizando Next.js para el SSR y SEO...",
    techStack: [
      { name: "Next.js 14", icon: <Globe size={20} /> },
      { name: "TypeScript", icon: <Code size={20} /> },
      { name: "Tailwind CSS", icon: <Layers size={20} /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1500&auto=format&fit=crop"
    ],
    results: [
      { metric: "45%", label: "Aumento en Retención" },
      { metric: "<0.8s", label: "Tiempo de Carga (LCP)" }
    ]
  },
  {
    id: 2,
    title: "Crypto Terminal",
    client: "FinTech Global",
    role: "Frontend Developer",
    timeline: "2 Meses",
    year: "2025",
    cat: "React / WebSockets",
    website: "https://cryptoterminal.com",
    github: "https://github.com/username/crypto",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    overview: "Un dashboard de trading ultrarrápido diseñado para operar con criptomonedas en tiempo real.",
    challenge: "El problema principal era el rendimiento. Renderizar miles de velas japonesas y datos de WebSockets hacía que el navegador colapsara.",
    solution: "Se implementó Zustand para el manejo de estado global sin re-renderizados innecesarios y Canvas para los gráficos.",
    techStack: [
      { name: "React", icon: <Code size={20} /> },
      { name: "WebSockets", icon: <Database size={20} /> },
      { name: "Zustand", icon: <Layers size={20} /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1500&auto=format&fit=crop"
    ],
    results: [
      { metric: "10k", label: "Transacciones por segundo" },
      { metric: "0.2s", label: "Latencia" }
    ]
  }
  // Añade aquí los proyectos del 3 al 8 siguiendo la misma estructura...
];

// ==========================================
// COMPONENTES DE LA PÁGINA
// ==========================================

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white flex justify-between items-center transition-colors duration-500">
      {/* NUEVO: Usamos <Link> en lugar de <a> para no recargar la página */}
      <Link to="/" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-green-500 transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Volver al Portafolio
      </Link>
      
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
        { scale: 1, yPercent: 10, ease: "none",
          scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true }
        }
      );
    }, container);
    return () => ctx.revert();
  }, [image]); // Se vuelve a ejecutar si cambia la imagen

  return (
    <div ref={container} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] border-b border-zinc-200 dark:border-white/10 mt-[80px]">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
      <img ref={imgRef} src={image} alt="Project Hero" className="absolute inset-0 w-full h-full object-cover origin-center" />
    </div>
  );
};

const ProjectHeader = ({ project }) => {
  // ... (Tu código intacto)
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".header-anim", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.2 });
    }, headerRef);
    return () => ctx.revert();
  }, [project.id]); // Se vuelve a ejecutar si cambia el proyecto

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
          <a href={project.website} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-green-500 hover:text-white dark:hover:text-black hover:border-green-500 transition-all duration-300 group"><Globe size={24} className="group-hover:scale-110 transition-transform" /></a>
          <a href={project.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-green-500 hover:text-white dark:hover:text-black hover:border-green-500 transition-all duration-300 group"><Github size={24} className="group-hover:scale-110 transition-transform" /></a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-zinc-200 dark:border-white/10">
        {[ { label: "Cliente", value: project.client }, { label: "Rol", value: project.role }, { label: "Tiempo", value: project.timeline }, { label: "Año", value: project.year } ].map((info, idx) => (
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
  // ... (Tu código intacto)
  return (
    <section className="py-20 px-6 md:px-20 max-w-[1400px] mx-auto section-fade">
      <div className="grid md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-black uppercase text-zinc-900 dark:text-white mb-6">El Desafío</h2>
          <div className="w-12 h-1 bg-green-500 mb-8" />
        </div>
        <div className="md:col-span-8">
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-gray-300 leading-relaxed font-light mb-12">{project.overview}</p>
          <p className="text-lg text-zinc-500 dark:text-gray-400 leading-relaxed">{project.challenge}</p>
        </div>
      </div>
    </section>
  );
};

const ImageGallery = ({ images }) => {
  // ... (Tu código intacto)
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray(".gallery-img");
      imgs.forEach((img) => {
        gsap.fromTo(img, { clipPath: "inset(10% 10% 10% 10%)", scale: 1.1 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, scrollTrigger: { trigger: img, start: "top 80%", end: "center center", scrub: 1 } });
      });
    }, container);
    return () => ctx.revert();
  }, [images]);

  return (
    <section ref={container} className="py-20 px-6 md:px-20 max-w-[1600px] mx-auto space-y-10 md:space-y-20">
      {images?.map((img, idx) => (
        <div key={idx} className="relative w-full h-[50vh] md:h-[90vh] rounded-[30px] overflow-hidden gallery-img shadow-2xl dark:shadow-none">
          <img src={img} alt={`Gallery ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </section>
  );
};

const SolutionSection = ({ project }) => {
  // ... (Tu código intacto)
  return (
    <section className="py-20 px-6 md:px-20 max-w-[1400px] mx-auto section-fade">
      <div className="grid md:grid-cols-12 gap-10 md:gap-20 mb-32">
        <div className="md:col-span-4"><h2 className="text-3xl font-black uppercase text-zinc-900 dark:text-white mb-6">La Solución</h2><div className="w-12 h-1 bg-green-500 mb-8" /></div>
        <div className="md:col-span-8">
          <p className="text-lg text-zinc-600 dark:text-gray-400 leading-relaxed mb-12">{project.solution}</p>
          <h3 className="text-xl font-bold uppercase text-zinc-900 dark:text-white mb-6">Stack Tecnológico</h3>
          <div className="flex flex-wrap gap-4">
            {project.techStack?.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-zinc-100 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-full text-zinc-800 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-500">{tech.icon}</span><span className="font-mono text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.results?.map((res, idx) => (
          <div key={idx} className="p-10 bg-zinc-50 dark:bg-[#0a0a0a] rounded-[30px] border border-zinc-200 dark:border-white/5 text-center transition-colors duration-500 hover:border-green-500/50">
            <div className="text-6xl md:text-7xl font-black text-green-600 dark:text-green-500 mb-4">{res.metric}</div><div className="text-zinc-600 dark:text-gray-400 font-mono uppercase tracking-widest text-sm">{res.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NextProject = ({ nextId, nextTitle }) => {
  const navigate = useNavigate(); // <-- Usamos navigate para no recargar la página entera
  
  if(!nextId) return null; // Si no hay siguiente proyecto, no mostramos esta sección

  return (
    <section className="h-screen flex items-center justify-center border-t border-zinc-200 dark:border-white/10 relative overflow-hidden bg-zinc-900 dark:bg-[#030303] group cursor-pointer" onClick={() => navigate(`/projects/${nextId}`)}>
      <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-700 z-0" />
      <div className="text-center z-10">
        <p className="text-zinc-400 font-mono text-sm uppercase tracking-[0.3em] mb-6">Siguiente Proyecto</p>
        <h2 className="text-[10vw] font-black tracking-tighter text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_#22c55e] transition-all duration-500">{nextTitle}</h2>
      </div>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 scale-50 group-hover:scale-100">
        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(34,197,94,0.5)]"><ArrowUpRight size={64} /></div>
      </div>
    </section>
  );
};

const Footer = () => {
  // ... (Tu código intacto)
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 dark:text-gray-500 font-mono text-sm flex flex-col items-center md:items-start gap-2"><p>DISEÑADO & DESARROLLADO CON ❤️</p><p>© {new Date().getFullYear()} - TODOS LOS DERECHOS RESERVADOS</p></div>
        <div className="flex gap-6"><a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">Twitter</a><a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">LinkedIn</a><a href="#" className="text-zinc-500 hover:text-green-500 transition-colors uppercase font-bold text-sm">GitHub</a></div>
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (PLANTILLA)
// ==========================================

export default function ProjectDetailTemplate() {
  const [isDark, setIsDark] = useState(true);
  
  // NUEVO: 1. Leemos el ID de la URL
  const { id } = useParams(); 
  
  // NUEVO: 2. Buscamos el proyecto en nuestro array que coincida con el ID (convirtiéndolo a número)
  const project = allProjects.find(p => p.id === parseInt(id));

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', gestureDirection: 'vertical', smooth: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    window.scrollTo(0, 0);
    return () => { lenis.destroy(); gsap.ticker.remove(lenis.raf); };
  }, [id]); // Agregamos "id" aquí para que al cambiar de proyecto haga scroll arriba automático

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section-fade");
      sections.forEach((section) => {
        gsap.fromTo(section, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: section, start: "top 85%", end: "bottom center", toggleActions: "play none none reverse" } });
      });
    });
    return () => ctx.revert();
  }, [id]); // También se re-animan las secciones al cambiar de ID

  // NUEVO: 3. Qué hacer si alguien entra a un ID que no existe (ej. /projects/99)
  if (!project) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/" className="text-green-500 hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  // Calculamos cuál es el siguiente proyecto para el botón del final
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProjectData = allProjects[currentIndex + 1] || allProjects[0]; // Si es el último, vuelve al primero

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

        <NextProject nextId={nextProjectData.id} nextTitle={nextProjectData.title} />
        <Footer />
        
      </div>
    </div>
  );
}