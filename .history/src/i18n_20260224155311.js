import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "nav": {
        "work": "TRABAJO",
        "services": "SERVICIOS",
        "about": "SOBRE MÍ",
        "contact": "Contactar"
      },
      "hero": {
        "subtitle": "Ingeniero de Software Frontend",
        "creative": "CREATIVE",
        "engineer": "ENGINEER",
        "desc": "Especializado en arquitecturas escalables, interfaces de alto rendimiento, animaciones fluidas y experiencias web inmersivas.",
        "status": "Disponible para proyectos"
      }
      // Aquí irían tus demás traducciones...
    }
  },
  en: {
    translation: {
      "nav": {
        "work": "WORK",
        "services": "SERVICES",
        "about": "ABOUT",
        "contact": "Contact"
      },
      "hero": {
        "subtitle": "Frontend Software Engineer",
        "creative": "CREATIVE",
        "engineer": "ENGINEER",
        "desc": "Specialized in scalable architectures, high-performance interfaces, fluid animations, and immersive web experiences.",
        "status": "Available for projects"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "work": "عمل",
        "services": "خدمات",
        "about": "عني",
        "contact": "اتصال"
      },
      "hero": {
        "subtitle": "مهندس برمجيات واجهة أمامية",
        "creative": "مبدع",
        "engineer": "مهندس",
        "desc": "متخصص في البنى القابلة للتطوير، والواجهات عالية الأداء، والرسوم المتحركة السلسة، وتجارب الويب الغامرة.",
        "status": "متاح للمشاريع"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;