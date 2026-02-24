import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Star, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight,
  ChevronDown, 
  Play, 
  Instagram, 
  Facebook, 
  Twitter,
  Sun,
  Moon,
  Tag,
  Package,
  RefreshCw,
  Heart,
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// DATA: PRODUCTOS, CATEGORÍAS, TESTIMONIOS
// ==========================================

const categories = [
  { id: 'streetwear', name: 'Streetwear', count: 124 },
  { id: 'vintage', name: 'Vintage 90s', count: 86 },
  { id: 'oversize', name: 'Oversize Premium', count: 215 },
  { id: 'basics', name: 'Básicos Esenciales', count: 342 },
  { id: 'anime', name: 'Anime Collabs', count: 54 },
];

const features = [
  {
    icon: <Truck size={32} />,
    title: "Envío Express",
    desc: "A toda Colombia en 24/48h. Gratis en compras superiores a $150.000 COP."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Calidad Importada",
    desc: "Algodón peruano y pima de alto gramaje (220g - 300g) garantizado."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Cambios Gratis",
    desc: "Tienes 30 días para devoluciones o cambios sin preguntas ni complicaciones."
  },
  {
    icon: <Award size={32} />,
    title: "Diseños Exclusivos",
    desc: "Colecciones limitadas. Una vez se agotan, no vuelven a producirse."
  }
];

const products = [
  { 
    id: 1, 
    title: "Tokyo Drift Oversize", 
    cat: "Streetwear", 
    price: 85000,
    oldPrice: 120000,
    description: "Camiseta de corte oversize con estampado inspirado en la cultura automovilística de Tokio. Fabricada en algodón pesado de 250g para una caída perfecta. Cuello acanalado reforzado.",
    features: ["100% Algodón Premium", "Estampado DTF de alta durabilidad", "Corte Boxy Fit", "Pre-lavada (no encoge)"],
    colors: ["#000000", "#FFFFFF", "#4A0404"],
    sizes: ["S", "M", "L", "XL"],
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 128,
    isNew: true,
    isBestseller: false
  },
  { 
    id: 2, 
    title: "Acid Wash Vintage", 
    cat: "Vintage 90s", 
    price: 95000,
    oldPrice: null,
    description: "Proceso de lavado ácido manual que hace que cada pieza sea única. Inspirada en las camisetas de bandas de rock de los años 90. Textura ultra suave y desgaste intencional en bordes.",
    features: ["Lavado ácido artesanal", "Algodón 220g", "Costuras vintage", "Cuello desgastado"],
    colors: ["#2d2d2d", "#4b5320", "#1a1a1a"],
    sizes: ["M", "L", "XL", "XXL"],
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop",
    rating: 5.0,
    reviews: 84,
    isNew: false,
    isBestseller: true
  },
  { 
    id: 3, 
    title: "Cyberpunk Essential", 
    cat: "Streetwear", 
    price: 75000,
    oldPrice: null,
    description: "Diseño minimalista en el frente con un gráfico expansivo cyberpunk en la espalda. Tinta reflectiva que brilla con el flash de las cámaras. Perfecta para la vida nocturna.",
    features: ["Tinta reflectiva 3M", "Corte Regular", "Algodón peinado 200g", "Etiqueta bordada"],
    colors: ["#000000", "#0f0f0f"],
    sizes: ["S", "M", "L"],
    img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 56,
    isNew: true,
    isBestseller: false
  },
  { 
    id: 4, 
    title: "Minimalist Heavyweight", 
    cat: "Básicos Esenciales", 
    price: 65000,
    oldPrice: 75000,
    description: "El básico definitivo. Sin logos, sin distracciones. Solo el mejor algodón pima importado con un gramaje de 300g. La estructura se mantiene firme lavado tras lavado.",
    features: ["300g Heavyweight", "100% Algodón Pima", "Sin costuras laterales", "Cuello grueso 3cm"],
    colors: ["#FFFFFF", "#000000", "#E5E5E5", "#D2B48C"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 312,
    isNew: false,
    isBestseller: true
  },
  { 
    id: 5, 
    title: "Neo-Tokyo Mecha", 
    cat: "Anime Collabs", 
    price: 110000,
    oldPrice: null,
    description: "Edición especial limitada a 500 unidades. Gráfico de mecha gigante con detalles en alta densidad (relieve). Incluye caja de colección y certificado de autenticidad.",
    features: ["Estampado High-Density", "Caja de colección", "Algodón 280g", "Oversize extremo"],
    colors: ["#FFFFFF", "#1E1E1E"],
    sizes: ["M", "L", "XL"],
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    rating: 5.0,
    reviews: 42,
    isNew: true,
    isBestseller: true
  },
  { 
    id: 6, 
    title: "Washed Retro Logo", 
    cat: "Vintage 90s", 
    price: 80000,
    oldPrice: 95000,
    description: "Inspirada en el merchandising deportivo de los 90. Logo retro craquelado (cracked ink) que da un aspecto de haber sido usada por décadas. Ultra suave al tacto.",
    features: ["Tinta craquelada", "Efecto Sun-faded", "Corte relajado", "Algodón 200g"],
    colors: ["#3B5998", "#8B0000", "#006400"],
    sizes: ["S", "M", "L", "XL"],
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 93,
    isNew: false,
    isBestseller: false
  },
  { 
    id: 7, 
    title: "Tech-Wear Utility", 
    cat: "Streetwear", 
    price: 135000,
    oldPrice: null,
    description: "Más que una camiseta. Incorpora un bolsillo oculto termosellado en el pecho, paneles laterales transpirables y un tejido mezcla de algodón con fibras técnicas para repeler líquidos.",
    features: ["Bolsillo termosellado", "Repelente a líquidos", "Paneles de ventilación", "Corte articulado"],
    colors: ["#000000", "#4B5320"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 18,
    isNew: true,
    isBestseller: false
  },
  { 
    id: 8, 
    title: "Y2K Rhinestone", 
    cat: "Vintage 90s", 
    price: 98000,
    oldPrice: 130000,
    description: "El regreso de los 2000. Logo frontal hecho completamente con pedrería (rhinestones) de alta adherencia que no se caen en la lavadora. Baby tee fit ajustado.",
    features: ["Pedrería de alta fijación", "Baby tee fit", "Algodón elástico", "Estética Y2K"],
    colors: ["#000000", "#FFC0CB", "#FFFFFF"],
    sizes: ["XS", "S", "M"],
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop",
    imgHover: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 67,
    isNew: false,
    isBestseller: true
  }
];

const testimonials = [
  {
    name: "Camilo Restrepo",
    city: "Medellín",
    text: "La calidad del algodón es brutal. Literalmente no he encontrado camisetas tan gruesas y con tan buena caída en ninguna marca nacional. La Heavyweight es mi uniforme de diario ahora.",
    rating: 5
  },
  {
    name: "Valentina Gómez",
    city: "Bogotá",
    text: "Compré la Acid Wash y el efecto vintage es real, no parece impreso barato. El envío fue súper rápido, me llegó al día siguiente. 10/10 la atención por WhatsApp.",
    rating: 5
  },
  {
    name: "Mateo Silva",
    city: "Cali",
    text: "Los estampados DTF no se cuartean. Ya he lavado la Tokyo Drift como 10 veces y sigue intacta. El corte oversize es perfecto, no te ves cuadrado.",
    rating: 4.5
  },
  {
    name: "Sofia Jaramillo",
    city: "Barranquilla",
    text: "Me encanta el empaque, se nota el amor por la marca. Las camisetas de colaboraciones de anime son hermosas, los detalles en relieve valen cada peso.",
    rating: 5
  },
  {
    name: "Alejandro Pérez",
    city: "Pereira",
    text: "Excelente servicio al cliente. Tuve que cambiar una talla porque la pedí muy grande (el oversize es real) y me resolvieron en 2 días sin cobrarme envío adicional.",
    rating: 5
  },
  {
    name: "Daniela Vargas",
    city: "Bogotá",
    text: "El fit de las Y2K es exactamente lo que buscaba. La pedrería resiste la lavadora (las lavo al revés por si acaso) y brillan increíble. Totalmente recomendadas.",
    rating: 4.5
  }
];

const faqs = [
  {
    question: "¿De dónde importan las camisetas?",
    answer: "Trabajamos con proveedores seleccionados en Perú (reconocido por el mejor algodón pima del mundo) y ensamblamos ciertas piezas técnicas con telas traídas de Japón. Todo el proceso de diseño y estampado final se realiza en nuestro taller en Colombia garantizando calidad."
  },
  {
    question: "¿Cómo sé cuál es mi talla ideal en corte Oversize?",
    answer: "Nuestras prendas oversize ya vienen ampliadas. Si sueles ser talla M en una camiseta normal, pide talla M para un look holgado perfecto. Si quieres un look extremo, sube una talla. Revisa nuestra tabla de medidas en cada producto para mayor precisión."
  },
  {
    question: "¿Cuánto tarda el envío?",
    answer: "Despachamos el mismo día si compras antes de las 2:00 PM. Para ciudades principales (Bogotá, Medellín, Cali) toma de 1 a 2 días hábiles. Para el resto del país entre 3 a 5 días hábiles. Recibirás un link de rastreo en tu correo."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito, PSE, Nequi, Daviplata y pagos en efectivo a través de Efecty. Todas las transacciones están encriptadas y son 100% seguras."
  },
  {
    question: "¿Puedo hacer devoluciones si no me gusta?",
    answer: "¡Por supuesto! Tienes 30 días calendario desde que recibes tu pedido para solicitar un cambio de talla, color o el reembolso de tu dinero. La prenda debe estar sin uso, sin lavar y con sus etiquetas originales."
  }
];

// Formateador de moneda
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// ==========================================
// COMPONENTES DE INTERFAZ & SECCIONES
// ==========================================

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 py-4" 
          : "bg-transparent py-6"
      )}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-900 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <div className="font-black text-3xl tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform text-zinc-900 dark:text-white flex-1 text-center md:text-left md:flex-none">
            DRIP<span className="text-indigo-600 dark:text-indigo-500">.</span>CO
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 font-mono text-xs tracking-widest text-zinc-900 dark:text-white uppercase font-bold">
            <a href="#collection" className="hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors relative group">
              Colección
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#bestsellers" className="hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors relative group">
              Más Vendidos
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors relative group">
              Nosotros
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors relative group">
              FAQ
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center gap-5 flex-1 justify-end md:flex-none">
            <button className="hidden sm:block text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">
              <Search size={22} />
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors text-zinc-900 dark:text-white"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="relative text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors flex items-center gap-2">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-[#050505] z-[100] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex justify-between items-center border-b border-zinc-200 dark:border-white/10">
          <div className="font-black text-2xl tracking-tighter uppercase text-zinc-900 dark:text-white">
            DRIP<span className="text-indigo-600 dark:text-indigo-500">.</span>CO
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 bg-zinc-100 dark:bg-white/10 rounded-full text-zinc-900 dark:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-8 gap-8 text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mt-10">
          <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Colección</a>
          <a href="#bestsellers" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Más Vendidos</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 transition-colors">Nosotros</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 transition-colors">FAQ</a>
        </div>
        <div className="mt-auto p-8 border-t border-zinc-200 dark:border-white/10 flex justify-center gap-6 text-zinc-500 dark:text-gray-400">
          <Instagram size={24} className="hover:text-indigo-600 transition-colors cursor-pointer" />
          <Facebook size={24} className="hover:text-indigo-600 transition-colors cursor-pointer" />
          <Twitter size={24} className="hover:text-indigo-600 transition-colors cursor-pointer" />
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  const container = useRef(null);
  const textRefs = useRef([]);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Entrada del texto
      gsap.fromTo(textRefs.current, 
        { y: 100, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { 
          y: 0, 
          opacity: 1, 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          stagger: 0.15, 
          duration: 1.5, 
          ease: "power4.out",
          delay: 0.2
        }
      );

      // Efecto Parallax en la imagen principal
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      // Desvanecimiento del hero al scrollear
      gsap.to(".hero-content", {
        opacity: 0,
        y: -100,
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
    <section ref={container} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Fondo de Imagen Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/50 z-10" />
        <img 
          ref={imgRef}
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop" 
          alt="Streetwear Fashion Model" 
          className="w-full h-[120%] object-cover object-top opacity-80"
        />
      </div>
      
      {/* Contenido Hero */}
      <div className="hero-content relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <div className="overflow-hidden mb-6">
          <span ref={addToRefs} className="block px-6 py-2 border border-white/30 rounded-full font-mono text-sm tracking-widest text-white uppercase backdrop-blur-md bg-white/5">
            Nueva Colección Vol. 4
          </span>
        </div>
        
        <h1 className="text-[14vw] md:text-[9vw] font-black tracking-tighter leading-[0.85] text-white uppercase mb-8">
          <div className="overflow-hidden"><span ref={addToRefs} className="block">REDEFINE</span></div>
          <div className="overflow-hidden flex items-center justify-center gap-4">
            <span ref={addToRefs} className="block italic font-serif font-light lowercase text-indigo-400">your</span>
            <span ref={addToRefs} className="block">STYLE</span>
          </div>
        </h1>
        
        <p ref={addToRefs} className="max-w-xl text-white/80 text-lg md:text-xl font-light mb-12">
          Camisetas premium oversize y streetwear. Diseños exclusivos importados con el mejor algodón de alto gramaje. No seguimos tendencias, las creamos.
        </p>
        
        <div className="overflow-hidden flex flex-col sm:flex-row gap-6">
          <a 
            ref={addToRefs}
            href="#collection" 
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 group"
          >
            Ver Colección
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            ref={addToRefs}
            href="#bestsellers" 
            className="px-10 py-5 bg-black/40 text-white font-black uppercase tracking-widest text-sm border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 rounded-full flex items-center justify-center gap-3"
          >
            <Play size={18} fill="currentColor" />
            Ver Lookbook
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const InfiniteMarquee = () => {
  return (
    <section className="py-6 border-y border-zinc-200 dark:border-white/10 overflow-hidden bg-indigo-600 dark:bg-indigo-600 text-white relative">
      <div className="flex whitespace-nowrap gap-10 animate-marquee items-center">
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-6">
              ALGODÓN PIMA 100% <Star size={20} fill="currentColor" className="text-yellow-300 mx-4" />
            </span>
            <span className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-6 text-white/70">
              CORTE OVERSIZE <Zap size={20} fill="currentColor" className="text-yellow-300 mx-4" />
            </span>
            <span className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-6">
              HEAVYWEIGHT 250G <ShieldCheck size={20} fill="currentColor" className="text-yellow-300 mx-4" />
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-500 section-anim">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feat, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">{feat.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-6">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
              Nuevo
            </span>
          )}
          {product.oldPrice && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
              Oferta
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 dark:text-white hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          <Heart size={18} />
        </button>

        {/* Imágenes Swap al hover */}
        <img 
          src={product.img} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />
        <img 
          src={product.imgHover} 
          alt={`${product.title} Lifestyle`} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 scale-105 group-hover:scale-100 transform"
        />

        {/* Add to Cart overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-colors">
            <ShoppingCart size={16} />
            Añadir al carrito
          </button>
        </div>
      </div>

      {/* Info del Producto */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
            {product.cat}
          </p>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span className="text-xs font-bold text-zinc-900 dark:text-white ml-1">{product.rating}</span>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">({product.reviews})</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-black text-zinc-900 dark:text-white">
            {formatPrice(product.price)}
          </p>
          {product.oldPrice && (
            <p className="text-sm font-medium text-zinc-400 line-through">
              {formatPrice(product.oldPrice)}
            </p>
          )}
        </div>
      </div>

      {/* Tallas disponibles rápidas */}
      <div className="flex gap-2 mt-4">
        {product.sizes.slice(0, 4).map(size => (
          <div key={size} className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-white/10 flex items-center justify-center text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-white transition-colors">
            {size}
          </div>
        ))}
        {product.sizes.length > 4 && (
          <div className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-white/10 flex items-center justify-center text-xs font-medium text-zinc-600 dark:text-zinc-400">
            +
          </div>
        )}
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filteredProducts = activeCat === 'All' 
    ? products 
    : products.filter(p => p.cat.toLowerCase().includes(activeCat.toLowerCase()));

  return (
    <section id="collection" className="py-32 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-500 section-anim">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white mb-6">
              Últimos <br/><span className="text-indigo-600 dark:text-indigo-500">Drops</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-lg">
              Explora nuestra colección curada de camisetas premium. Calidad sin compromisos, diseños que hablan por sí solos.
            </p>
          </div>
          
          {/* Categorías Filter */}
          <div className="flex flex-wrap gap-2 justify-end">
            <button 
              onClick={() => setActiveCat('All')}
              className={cn(
                "px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all",
                activeCat === 'All' 
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-bold" 
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10"
              )}
            >
              Todos
            </button>
            {categories.slice(0, 3).map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCat(cat.name)}
                className={cn(
                  "px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all",
                  activeCat === cat.name 
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-bold" 
                    : "bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full flex items-center gap-3">
            Cargar Más Productos <RefreshCw size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const LookbookParallax = () => {
  const container = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parallax-img-1", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      gsap.to(".parallax-img-2", {
        yPercent: 20,
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

  return (
    <section ref={container} className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] overflow-hidden section-anim">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-indigo-600 dark:text-indigo-500 font-mono text-sm uppercase tracking-widest mb-4">Temporada 2024</p>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white">
            Street <br/> <span className="text-transparent [-webkit-text-stroke:2px_#18181b] dark:[-webkit-text-stroke:2px_#ffffff]">Lookbook</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative h-[60vh] md:h-[80vh] rounded-[40px] overflow-hidden parallax-img-1">
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" 
              alt="Lookbook 1"
              className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white w-max rounded-full text-xs font-mono uppercase tracking-widest mb-4">
                Outfit #01
              </span>
              <h3 className="text-3xl text-white font-black uppercase tracking-tight">Oversize & Cargo</h3>
            </div>
          </div>

          <div className="relative h-[50vh] md:h-[70vh] rounded-[40px] overflow-hidden parallax-img-2 mt-0 md:mt-32">
            <img 
              src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop" 
              alt="Lookbook 2"
              className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white w-max rounded-full text-xs font-mono uppercase tracking-widest mb-4">
                Outfit #02
              </span>
              <h3 className="text-3xl text-white font-black uppercase tracking-tight">Vintage Acid Wash</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-500 section-anim overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white mb-16 text-center">
          Lo que dice la <span className="text-indigo-600 dark:text-indigo-500">Comunidad</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-zinc-50 dark:bg-[#0a0a0a] p-10 rounded-3xl border border-zinc-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(Math.floor(test.rating))].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
                {test.rating % 1 !== 0 && <Star size={20} fill="currentColor" className="opacity-50" />}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed italic mb-8">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xl">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">{test.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-green-500" /> Comprador Verificado • {test.city}
                  </p>
                </div>
              </div>
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
    <section id="faq" className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-500 section-anim border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-indigo-600 dark:text-indigo-500 font-mono text-sm uppercase tracking-widest mb-4">Resolviendo Dudas</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500 shadow-sm"
              >
                <button 
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={cn("text-lg md:text-xl font-bold pr-8 transition-colors", isOpen ? "text-indigo-600 dark:text-indigo-500" : "text-zinc-900 dark:text-white")}>
                    {faq.question}
                  </span>
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0", isOpen ? "bg-indigo-600 border-indigo-600 text-white rotate-180" : "border-zinc-300 dark:border-white/20 text-zinc-600 dark:text-white")}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div 
                  className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}
                >
                  <div className="px-8 pb-8 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/5 pt-6 mt-2 text-lg">
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

const NewsletterSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-indigo-600 dark:bg-indigo-900 text-white section-anim">
      {/* Patrón de fondo abstracto */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
          Únete al Club
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12 text-indigo-100">
          Recibe acceso anticipado a nuevos drops, colaboraciones exclusivas y un 15% de descuento en tu primera compra.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="tu@correo.com" 
            className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-all text-lg backdrop-blur-md"
            required
          />
          <button type="submit" className="px-10 py-5 bg-white text-indigo-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Suscribirme
          </button>
        </form>
        <p className="mt-6 text-xs font-mono text-indigo-200 uppercase tracking-widest">
          Cero spam. Solo ropa increíble. Prometido.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-10 px-6 md:px-12 bg-zinc-950 text-white overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        
        {/* Brand */}
        <div>
          <div className="font-black text-4xl tracking-tighter uppercase mb-6">
            DRIP<span className="text-indigo-500">.</span>CO
          </div>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
            Redefiniendo el streetwear en Colombia. Telas importadas de alta densidad, diseños exclusivos y atención al detalle en cada costura.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500 transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-bold text-lg uppercase tracking-widest mb-6">Tienda</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Nuevos Ingresos</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Más Vendidos</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Básicos Heavyweight</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Accesorios</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Tarjetas de Regalo</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-lg uppercase tracking-widest mb-6">Soporte</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Guía de Tallas</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Envíos y Entregas</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Cambios y Devoluciones</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> FAQ</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contacto</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg uppercase tracking-widest mb-6">Contacto</h4>
          <ul className="space-y-4 text-zinc-400">
            <li>WhatsApp: +57 300 123 4567</li>
            <li>Email: soporte@dripco.com.co</li>
            <li className="mt-6">
              <p className="font-bold text-white mb-2 uppercase tracking-widest text-sm">Taller (Solo Cita Previa):</p>
              Cra 15 # 85 - 45<br />
              Bogotá, Colombia
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-6 text-zinc-500 text-sm font-mono relative z-10">
        <p>© {new Date().getFullYear()} DRIP.CO - TODOS LOS DERECHOS RESERVADOS</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        </div>
      </div>
      
      {/* Texto gigante de fondo */}
      <div className="absolute -bottom-10 left-0 right-0 text-[18vw] font-black text-white/5 whitespace-nowrap text-center pointer-events-none select-none">
        STREETWEAR
      </div>
    </footer>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function App() {
  const [isDark, setIsDark] = useState(false); // Falso por defecto = Tema Claro

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
            opacity: 0, 
            y: 80 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <BrowserRouter>
      <div className={cn(
        "transition-colors duration-500 w-full min-h-screen selection:bg-indigo-500 selection:text-white", 
        isDark ? "dark" : ""
      )}>
        <div className="bg-white dark:bg-[#050505] min-h-screen text-zinc-900 dark:text-white font-sans overflow-x-hidden">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main>
            <HeroSection />
            <InfiniteMarquee />
            <FeaturesSection />
            <ProductsSection />
            <LookbookParallax />
            <TestimonialsSection />
            <FAQSection />
            <NewsletterSection />
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}