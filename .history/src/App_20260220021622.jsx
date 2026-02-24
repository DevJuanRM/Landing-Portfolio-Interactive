import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowUpRight, Code, Cpu, Layout, Sparkles, MonitorSmartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- SECCIÓN DE SERVICIOS (Nueva) ---
const Services = () => {
  const services = [
    { icon: <Layout />, title: "High-End Landing Pages", desc: "Diseño y desarrollo de sitios enfocados en conversión masiva usando React y GSAP." },
    { icon: <Cpu />, title: "Fullstack Architecture", desc: "Sistemas escalables con Node.js y Supabase para aplicaciones de alto tráfico." },
    { icon: <Sparkles />, title: "Creative Interaction", desc: "Experiencias inmersivas con animaciones fluidas y optimizadas para 120Hz." },
  ];

  return (
    <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-green-500/50 transition-all duration-500">
            <div className="mb-6 text-green-400 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE DE PROYECTO (Optimizado) ---
const Project = ({ project }) => {
  const container = useRef(null);
  const image = useRef(null);
  const info = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Efecto Parallax de la Imagen
      gsap.fromTo(image.current, 
        { scale: 1.3, y: 100 },
        { scale: 1, y: 0, scrollTrigger: { trigger: container.current, scrub: 0.5 } }
      );
      
      // Efecto de aparición del texto
      gsap.from(info.current, {
        opacity: 0, y: 50, scrollTrigger: { trigger: container.current, start: "top 60%" }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative py-32 md:py-60 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden rounded-[2rem] h-[60vh] md:h-[80vh] bg-gray-900">
          <img ref={image} src={project.img} className="w-full h-full object-cover will-change-transform grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
        <div ref={info} className="space-y-8">
          <span className="text-xs font-mono text-green-500 uppercase tracking-[0.3em]">{project.cat}</span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">{project.title}</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">Arquitectura frontend optimizada para SEO y retención de usuario, utilizando un stack moderno para garantizar milisegundos de carga.</p>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 group text-white font-bold text-lg">
                Explorar Caso <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05, duration: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      {/* HERO MINIMALISTA */}
      <section className="h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <h1 className="text-[12vw] font-black leading-[0.9] tracking-tighter">
          FRONTEND <br /> <span className="text-green-500">ENGINEER</span>
        </h1>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <p className="max-w-md text-gray-500 text-lg italic">"Transformando visiones complejas en interfaces digitales fluidas y de alto rendimiento."</p>
          <div className="flex gap-4 font-mono text-xs text-green-500">
            <span>DISPONIBLE PARA PROYECTOS Q1 2026</span>
          </div>
        </div>
      </section>

      <Services />

      <section className="px-6 py-20"><h2 className="text-xs font-mono text-gray-700 uppercase tracking-widest text-center">Featured Projects</h2></section>

      {[/* Tus proyectos aquí */].map((p, i) => (
        <Project key={i} project={p} />
      ))}

      {/* SECCIÓN DE CIERRE (Call to Action) */}
      <section className="py-60 px-6 text-center border-t border-white/5">
        <h2 className="text-6xl md:text-9xl font-black mb-16 italic tracking-tighter">LET'S BUILD.</h2>
        <a href="mailto:tuemail@dominio.com" className="text-3xl md:text-5xl font-light hover:text-green-500 transition-colors border-b border-green-500 pb-2">Hablemos de tu próximo proyecto</a>
      </section>
    </main>
  );
}