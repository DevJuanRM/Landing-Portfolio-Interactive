import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowUpRight, Code, Layout, Smartphone, Globe, Cpu, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "TenisDrop AI", cat: "Next.js / Python", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Crypto Terminal", cat: "React / WebSockets", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Neural Dashboard", cat: "Three.js / GSAP", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "E-comm Luxury", cat: "Shopify / React", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop" },
];

const skills = ["React.js", "Node.js", "Tailwind CSS", "GSAP", "Three.js", "Supabase", "TypeScript", "Next.js", "Framer Motion", "Vite"];

const Project = ({ project }) => {
  const container = useRef(null);
  const image = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(image.current, 
        { scale: 1.4, clipPath: "inset(20% 20% 20% 20%)", opacity: 0 },
        { 
          scale: 1, 
          clipPath: "inset(0% 0% 0% 0%)", 
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative h-[80vh] w-full flex items-center justify-center mb-40 overflow-hidden px-6">
      <div className="relative w-full max-w-6xl h-full rounded-[40px] overflow-hidden group border border-white/10">
        <img ref={image} src={project.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <div>
            <p className="text-green-400 font-mono text-xs mb-4 uppercase tracking-[0.3em]">{project.cat}</p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">{project.title}</h2>
          </div>
          <div className="p-6 bg-white rounded-full text-black hover:bg-green-500 transition-all cursor-pointer group-hover:rotate-45">
            <ArrowUpRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPro() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#030303] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full" />
        <motion_div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10">
          <h1 className="text-[12vw] font-black tracking-tighter leading-[0.85] mb-10">
            CREATIVE <br /> <span className="text-green-500">ENGINEER</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:items-center">
            <p className="max-w-md text-gray-400 text-lg leading-relaxed">
              Especializado en interfaces de alto rendimiento, animaciones fluidas y experiencias web que convierten usuarios en clientes.
            </p>
            <div className="flex gap-4">
                <div className="px-6 py-3 border border-white/20 rounded-full font-mono text-sm uppercase">Basado en Colombia</div>
                <div className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm uppercase">Disponible para proyectos</div>
            </div>
          </div>
        </motion_div>
      </section>

      {/* 2. SKILLS MARQUEE (Cinta infinita) */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-10">
          {[1,2,3].map((n) => (
            <div key={n} className="flex gap-10 animate-marquee items-center">
              {skills.map(s => (
                <span key={s} className="text-6xl font-black opacity-20 hover:opacity-100 hover:text-green-500 transition-all cursor-default">{s}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICIOS (Bento Grid) */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">LO QUE HAGO POR TU NEGOCIO</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0a] p-10 rounded-[30px] border border-white/5 hover:border-green-500/50 transition-colors">
            <Code className="text-green-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Desarrollo Web Pro</h3>
            <p className="text-gray-400 leading-relaxed">Sitios construidos con React y Next.js enfocados en la velocidad de carga (SEO) y escalabilidad.</p>
          </div>
          <div className="bg-[#0a0a0a] p-10 rounded-[30px] border border-white/5 hover:border-green-500/50 transition-colors">
            <Layers className="text-green-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Animaciones de Élite</h3>
            <p className="text-gray-400 leading-relaxed">Uso de GSAP y Framer Motion para crear experiencias interactivas que retienen la atención del usuario.</p>
          </div>
          <div className="bg-[#0a0a0a] p-10 rounded-[30px] border border-white/5 hover:border-green-500/50 transition-colors">
            <Smartphone className="text-green-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
            <p className="text-gray-400 leading-relaxed">Diseño y desarrollo optimizado para el iPhone 16 Pro Max y dispositivos Android de última generación.</p>
          </div>
        </div>
      </section>

      {/* 4. PROYECTOS */}
      <section className="py-20">
        <div className="px-10 mb-20">
          <h2 className="text-8xl font-black tracking-tighter opacity-10">PORTFOLIO</h2>
        </div>
        {projects.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </section>

      {/* 5. CTA FINAL */}
      <footer className="h-screen flex flex-col justify-center items-center text-center px-10 border-t border-white/5 bg-gradient-to-b from-transparent to-green-950/10">
        <h2 className="text-7xl md:text-[10vw] font-black leading-[0.8] mb-12">LISTO PARA <br /> ESCALAR?</h2>
        <div className="flex flex-col md:flex-row gap-6">
            <button className="px-16 py-6 bg-green-500 text-black font-black text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                EMPECEMOS UN PROYECTO
            </button>
            <button className="px-16 py-6 border border-white/20 text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all">
                AGENDAR LLAMADA
            </button>
        </div>
        <p className="mt-20 text-gray-500 font-mono text-sm tracking-widest">© 2026 - COLOMBIA - DIGITAL ENGINEER</p>
      </footer>
    </main>
  );
}