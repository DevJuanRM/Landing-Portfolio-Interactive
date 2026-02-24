import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "TenisDrop AI", cat: "Fintech", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Luxury Real Estate", cat: "Web3", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Crypto Terminal", cat: "Dashboard", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Social Engine", cat: "SaaS", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Neural Network", cat: "AI Labs", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Cyber Security", cat: "Enterprise", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "E-comm Pro", cat: "Marketplace", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Gaming UI", cat: "Interface", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" },
];

const Project = ({ project }) => {
  const container = useRef(null);
  const image = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Efecto de revelación: la imagen se expande y aclara al entrar
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
      <div className="relative w-full max-w-5xl h-full rounded-3xl overflow-hidden group">
        <img 
          ref={image}
          src={project.img} 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
          <div>
            <p className="text-green-400 font-mono text-sm mb-2 uppercase tracking-widest">{project.cat}</p>
            <h2 className="text-4xl md:text-6xl font-black text-white">{project.title}</h2>
          </div>
          <div className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform cursor-pointer">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <main className="bg-[#050505] min-h-screen">
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none mb-4">
            SELECTED <br /> <span className="text-green-500">WORKS</span>
          </h1>
          <p className="text-gray-400 text-xl font-light uppercase tracking-[0.5em]">Scroll to explore</p>
        </section>

        {projects.map((p) => (
          <Project key={p.id} project={p} />
        ))}

        <footer className="h-screen flex flex-col justify-center items-center border-t border-gray-900">
          <h2 className="text-5xl font-bold mb-8">¿Hacemos algo increíble?</h2>
          <button className="px-12 py-5 bg-green-500 text-black font-black text-2xl rounded-full hover:scale-105 transition-transform">
            CONTACTAR
          </button>
        </footer>
      </main>
    </ReactLenis>
  );
}