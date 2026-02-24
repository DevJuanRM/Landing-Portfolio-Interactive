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
  // Plantillas genéricas para los proyectos del 3 al 8 (Edita los textos luego)
  ...[3, 4, 5, 6, 7, 8].map(num => ({
    id: num,
    title: `Proyecto de Estudio 0${num}`,
    client: `Agencia #${num}`,
    role: "Frontend Developer",
    timeline: "2 Meses",
    year: "2024",
    cat: "React / Vite / GSAP",
    website: "#",
    github: "#",
    heroImage: `https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop&sig=${num}`,
    overview: "Descripción general del proyecto. Aquí explicarás de qué trató la aplicación y cuál era el objetivo comercial o de usuario principal.",
    challenge: "El problema técnico que resolviste. ¿Qué impedía que la empresa avanzara antes de que llegaras tú?",
    solution: "La solución técnica. ¿Cómo utilizaste código limpio, animaciones o arquitecturas modernas para resolver el desafío?",
    techStack: [
      { name: "React", icon: <Code size={20} /> },
      { name: "GSAP", icon: <Monitor size={20} /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"
    ],
    results: [
      { metric: "100", label: "Puntos en Lighthouse" },
      { metric: "3x", label: "Conversión" }
    ]
  }))
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
          <a href={project.website} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white