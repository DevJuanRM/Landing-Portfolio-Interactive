import React, { useLayoutEffect, useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { 
  ArrowUpRight, 
  ShoppingBag, 
  Star, 
  Truck, 
  ShieldCheck, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Info,
  Layers,
  Globe,
  Sun,
  Moon,
  Zap,
  Tag,
  Search,
  Menu,
  X,
  Instagram,
  Heart
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// DATA: PRODUCTOS Y CONTENIDO DE VENTA
// ==========================================

const shirts = [
  { 
    id: 1, 
    title: "Vintage Tokyo Edition", 
    cat: "Urban Japan Import", 
    year: "Limited 2026",
    price: 89.99,
    description: "Camiseta de algodón pesado de 300gsm con bordado artesanal japonés. Importación directa desde los distritos de moda de Shibuya.",
    techStack: ["Heavy Cotton", "Oversized Fit", "Handmade Embroidery"],
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Nordic Minimalist", 
    cat: "Scandinavian Design", 
    year: "Classic Collection",
    price: 65.00,
    description: "Líneas limpias y tela orgánica premium de Dinamarca. El epítome del lujo silencioso para el uso diario exigente.",
    techStack: ["Organic Cotton", "Slim Fit", "Sustainable Tech"],
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Berlin Techno Mesh", 
    cat: "Clubbing Essential", 
    year: "SS/26",
    price: 110.50,
    description: "Diseño experimental con tecnología de transpiración activa. Inspirada en la escena industrial alemana, corte asimétrico.",
    techStack: ["Synthetic Mesh", "Acid Wash", "Reflective Straps"],
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "Parisian Silk Blend", 
    cat: "Luxury Couture", 
    year: "Premium",
    price: 145.00,
    description: "Mezcla de seda y lino importada de Francia. Caída fluida y tacto frío ideal para climas cálidos y eventos exclusivos.",
    techStack: ["Silk Blend", "Relaxed Fit", "Pearloid Buttons"],
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    title: "Brooklyn Archival", 
    cat: "Heritage Streetwear", 
    year: "Drop #04",
    price: 75.00,
    description: "Réplica de archivo de los años 90. Teñido en prenda para un look gastado auténtico. Durabilidad garantizada por 10 años.",
    techStack: ["Garment Dyed", "Boxy Fit", "Reinforced Seams"],
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    title: "Seoul Cyber-Tech", 
    cat: "Functional Wear", 
    year: "Experimental",
    price: 125.00,
    description: "Importación coreana con recubrimiento de teflón para repelencia al agua. Bolsillos tácticos ocultos y costuras termoselladas.",
    techStack: ["Water Repellent", "Nylon Tech", "YKK Zippers"],
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 7, 
    title: "Milanese Knit Polo", 
    cat: "Italian Sartorial", 
    year: "Limited Edition",
    price: 160.00,
    description: "Tejido de punto fino hecho en Milán. Estructura que mantiene la forma tras múltiples lavados. Elegancia sin esfuerzo.",
    techStack: ["Knit Cotton", "Polo Collar", "Slim Fit"],
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 8, 
    title: "London Graphic Punk", 
    cat: "Subculture Series", 
    year: "Rebel 2026",
    price: 55.00,
    description: "Estampado en serigrafía manual con tintas ecológicas. Inspirado en el punk británico de los 70 con un giro moderno.",
    techStack: ["Screen Print", "Standard Fit", "Distressed Edges"],
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop" 
  }
];

const categories = ["All", "Streetwear", "Luxury", "Minimalist", "Technical", "Vintage"];

const faqs = [
  {
    question: "¿Cómo funciona el proceso de importación?",
    answer: "Seleccionamos piezas únicas en mercados internacionales (Japón, Italia, Corea, etc.). Cada envío cuenta con seguimiento premium y aduanas pre-pagadas para que no tengas sorpresas al recibir."
  },
  {
    question: "¿Tienen guía de tallas específica?",
    answer: "Sí, debido a que trabajamos con marcas de diferentes países, cada camiseta tiene su propia tabla de medidas en centímetros. Recomendamos medir tu camiseta favorita antes de comprar."
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer: "Al ser productos importados limitados, aceptamos cambios por talla o devoluciones por defectos de fábrica dentro de los primeros 15 días tras la recepción del producto."
  },
  {
    question: "¿Cuánto tarda en llegar mi pedido?",
    answer: "El envío nacional tarda de 2 a 5 días hábiles. Si el producto está en pre-order o tránsito internacional, el tiempo estimado es de 12 a 20 días."
  }
];

// ==========================================
// COMPONENTES DE SECCIÓN
// ==========================================

const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center transition-all duration-500",
      scrolled ? "bg-white/90 dark:bg-[#030303]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 py-4" : "bg-transparent"
    )}>
      <div className="flex items-center gap-10">
        <div className="font-black text-3xl tracking-tighter uppercase cursor-pointer flex items-center gap-2 group text-zinc-900 dark:text-white">
          <ShoppingBag className="text-green-500 group-hover:rotate-12 transition-transform" size={28} />
          <span>VOGUE<span className="text-green-500">.</span>CORE</span>
        </div>
        <div className="hidden lg:flex gap-8 font-mono text-xs tracking-widest text-zinc-500 dark:text-zinc-400">
          <a href="#work" className="hover:text-green-500 transition-colors uppercase">Colección</a>
          <a href="#about" className="hover:text-green-500 transition-colors uppercase">Nuestro Manifiesto</a>
          <a href="#services" className="hover:text-green-500 transition-colors uppercase">Garantía</a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center mr-4 bg-zinc-100 dark:bg-white/5 rounded-full px-4 py-2 border border-zinc-200 dark:border-white/10">
          <Search size={16} className="text-zinc-400" />
          <input type="text" placeholder="Buscar estilo..." className="bg-transparent border-none outline-none text-xs ml-2 w-32 dark:text-white" />
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors"
        >
          {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-zinc-600" />}
        </button>
        
        <button className="relative p-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-green-500 dark:hover:bg-green-500 transition-all group">
          <ShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#030303]">
            0
          </span>
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
      gsap.fromTo(".hero-title-span", 
        { y: 120, opacity: 0, rotateX: -45 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0, 
          stagger: 0.1, 
          duration: 1.5, 
          ease: "expo.out",
          delay: 0.5
        }
      );

      gsap.to(".hero-image-bg", {
        scale: 1.2,
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

  return (
    <section ref={container} className="h-[110vh] flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 transition-colors duration-700">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550991152-1232040d3067?q=80&w=2000&auto=format&fit=crop" 
          className="hero-image-bg w-full h-full object-cover opacity-30 dark:opacity-20 grayscale"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-[#030303]/50 to-white dark:to-[#030303]" />
      </div>

      <div className="z-10 relative">
        <div className="flex items-center gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards]">
          <span className="h-[1px] w-12 bg-green-500" />
          <p className="text-green-600 dark:text-green-400 font-mono tracking-[0.4em] text-xs uppercase font-bold">
            Curated Global Selection 2026
          </p>
        </div>
        
        <h1 className="text-[14vw] md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-12 text-zinc-900 dark:text-white">
          <div className="overflow-hidden h-[15vw] md:h-[11vw]">
            <span className="hero-title-span block">WEAR THE</span>
          </div>
          <div className="overflow-hidden h-[15vw] md:h-[11vw]">
            <span className="hero-title-span block text-green-500">UNKNOWN.</span>
          </div>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 md:items-end mt-4">
          <p className="max-w-md text-zinc-600 dark:text-gray-400 text-lg md:text-xl leading-snug font-medium">
            Camisetas de importación limitada. Desde las calles de Seúl hasta los talleres de Milán. Calidad que se siente, diseño que se nota.
          </p>
          <div className="flex flex-col gap-4">
            <button className="group relative px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-black rounded-full overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">EXPLORAR DROP #01</span>
              <ArrowUpRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={24} />
            </button>
            <div className="flex items-center gap-6 px-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#030303] bg-zinc-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 leading-tight">
                <span className="text-zinc-900 dark:text-white font-bold block">+1.2k CLIENTES</span>
                COMPRANDO AHORA
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-10">
        <div className="[writing-mode:vertical-lr] font-mono text-[10px] tracking-[0.5em] text-zinc-400 uppercase">
          Scroll to explore
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-green-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-white/5 overflow-hidden bg-white dark:bg-[#030303] z-20 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-20 pr-20">
            {["JAPAN IMPORT", "PREMIUM COTTON", "STREETWEAR CULTURE", "LIMITED DROPS", "TOKYO STYLE", "EUROPEAN LUXURY"].map(s => (
              <div key={s} className="flex items-center gap-6">
                <Star className="text-green-500 fill-green-500" size={16} />
                <span className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.1)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.1)] uppercase">
                  {s}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductSection = () => {
  const [filter, setFilter] = useState("All");
  
  return (
    <section id="work" className="py-32 px-6 md:px-20 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-zinc-900 dark:text-white mb-8">
              New<br/><span className="text-green-500">Arrivals</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full border text-xs font-bold transition-all uppercase tracking-widest",
                    filter === cat 
                      ? "bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/20" 
                      : "border-zinc-200 dark:border-white/10 text-zinc-500 hover:border-zinc-400"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="max-w-xs text-zinc-500 dark:text-zinc-400 text-right font-mono text-sm leading-relaxed">
            Piezas seleccionadas a mano de los mejores distribuidores globales. Stock limitado por diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shirts.map((shirt, idx) => (
            <div 
              key={shirt.id} 
              className="group relative flex flex-col section-anim"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5">
                <img 
                  src={shirt.img} 
                  alt={shirt.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10">
                    {shirt.cat}
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-green-600">
                  <ShoppingBag size={24} />
                </button>
                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter group-hover:text-green-500 transition-colors">
                    {shirt.title}
                  </h3>
                  <span className="text-lg font-mono font-bold text-green-600 dark:text-green-400">
                    ${shirt.price}
                  </span>
                </div>
                <div className="flex gap-2 mb-4">
                  {shirt.techStack.slice(0, 2).map(t => (
                    <span key={t} className="text-[9px] font-mono text-zinc-400 uppercase border-r border-zinc-200 dark:border-white/10 pr-2 last:border-0">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ManifestoSection = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0.1,
        stagger: 0.1,
        y: 20
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={container} className="py-40 px-6 md:px-20 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-green-500 font-mono text-sm tracking-[0.4em] uppercase mb-12">Nuestra Filosofía</p>
        <h2 className="text-[8vw] md:text-[5vw] font-black leading-[1] tracking-tighter mb-16">
          {"NO VENDEMOS ROPA, CURAMOS IDENTIDAD. CADA COSTURA CUENTA UNA HISTORIA DE IMPORTACIÓN.".split(" ").map((word, i) => (
            <span key={i} className="reveal-text inline-block mr-4">{word}</span>
          ))}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            { icon: <Globe size={32} />, title: "Origen Global", desc: "Viajamos para encontrar telas que no existen en el mercado masivo." },
            { icon: <Zap size={32} />, title: "Drop Culture", desc: "Lanzamientos limitados. Una vez que se agota, desaparece para siempre." },
            { icon: <ShieldCheck size={32} />, title: "Calidad Certificada", desc: "Cada prenda pasa por un control de calidad de 15 puntos antes del envío." }
          ].map((item, i) => (
            <div key={i} className="group p-8 border border-white/10 rounded-[32px] hover:bg-white hover:text-black transition-all duration-500">
              <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 uppercase">{item.title}</h3>
              <p className="opacity-60 group-hover:opacity-100 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 px-6 md:px-20 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <Info size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white">
            Logística & <span className="text-green-500">Soporte</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="group border border-zinc-200 dark:border-white/10 rounded-3xl overflow-hidden bg-zinc-50 dark:bg-[#0a0a0a] transition-all hover:border-green-500/50"
              >
                <button 
                  className="w-full px-8 py-8 flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={cn("text-xl font-bold pr-8 transition-colors", isOpen ? "text-green-600 dark:text-green-500" : "text-zinc-900 dark:text-white")}>
                    {faq.question}
                  </span>
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500", isOpen ? "bg-green-500 border-green-500 text-white rotate-180" : "border-zinc-300 dark:border-white/10 text-zinc-400 group-hover:border-zinc-500")}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={cn("overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]", isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="px-8 pb-8 text-zinc-500 dark:text-gray-400 leading-relaxed text-lg pt-2">
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
    <footer className="relative pt-40 pb-10 bg-zinc-100 dark:bg-[#030303] border-t border-zinc-200 dark:border-white/10 transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square bg-green-500/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.75] tracking-tighter mb-12 uppercase text-zinc-900 dark:text-white">
              JOIN THE<br/><span className="text-green-500">CLUB.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="email" 
                placeholder="TU@EMAIL.COM" 
                className="flex-1 bg-white dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-full px-8 py-5 text-zinc-900 dark:text-white outline-none focus:border-green-500 transition-colors font-bold"
              />
              <button className="px-12 py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-black rounded-full hover:bg-green-500 dark:hover:bg-green-500 hover:text-white transition-all">
                SUBSCRIBIRSE
              </button>
            </div>
            <p className="mt-6 text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-4">
              * Recibe acceso anticipado a los drops y descuentos exclusivos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-mono text-xs font-black text-green-500 uppercase tracking-[0.3em] mb-8">Navegación</h4>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 font-bold uppercase text-sm">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Drops 2026</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Lookbook</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Manifesto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-black text-green-500 uppercase tracking-[0.3em] mb-8">Social</h4>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 font-bold uppercase text-sm">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"><Twitter size={16}/> Twitter / X</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"><Github size={16}/> GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-200 dark:border-white/10 gap-8">
          <div className="font-black text-2xl tracking-tighter uppercase text-zinc-900 dark:text-white">
            VOGUE<span className="text-green-500">.</span>CORE
          </div>
          
          <div className="flex gap-10 text-[10px] font-mono text-zinc-400 uppercase">
            <span>© 2026 VOGUE CORE S.A.S</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <Truck size={14}/> WORLDWIDE SHIPPING
            </div>
            <div className="w-[1px] h-4 bg-zinc-300 dark:bg-white/10" />
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <ShieldCheck size={14}/> SECURE CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

function MainContent() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".section-anim");
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className={cn("transition-colors duration-500", isDark ? "dark" : "")}>
      <div className="bg-white dark:bg-[#030303] min-h-screen">
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <HeroSection />
        <MarqueeSection />
        <ProductSection />
        <ManifestoSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
}