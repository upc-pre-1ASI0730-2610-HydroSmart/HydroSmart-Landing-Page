const resources = {
  es: {
    nav_home: "Inicio",
    nav_benefits: "Beneficios",
    nav_features: "Características",
    nav_plans: "Planes",
    nav_about: "Nosotros",
    nav_faq: "FAQ",
    btn_start: "Empezar Ahora",
    hero_title: "TRANSFORMANDO LA GESTIÓN DEL\n AGUACON TECNOLOGÍA INTELIGENTE\nPARA UN IMPACTO SOSTENIBLE",
    hero_subtitle: "PARA UN IMPACTO SOSTENIBLE",
    btn_optimize: "OPTIMIZAR AHORA",
    lang_label: "ES" 
    ,benefits_title: "¿Por qué elegirnos?",
    benefits_subtitle: "Un estándar que no falla",
    benefit_1_title: "Ahorro Estratégico",
    benefit_1_text: "Reduce drásticamente tu facturación mensual mediante la detección temprana de ineficiencias y el uso optimizado de cada gota.",
    benefit_2_title: "Control Total 24/7",
    benefit_2_text: "Supervisa tu sistema en tiempo real desde la app, con datos precisos que te permiten tomar decisiones informadas al instante.",
    benefit_3_title: "Cero Desperdicio",
    benefit_3_text: "Algoritmos avanzados que detectan anomalías y microfugas antes de que se conviertan en pérdidas críticas.",
    benefit_4_title: "Eco-Cumplimiento",
    benefit_4_text: "Fortalece tu imagen corporativa y cumple con las normativas ambientales reduciendo tu huella hídrica de manera sistemática.",
    benefit_5_title: "Gestión Intuitiva",
    benefit_5_text: "Accede a una interfaz simplificada y amigable que convierte datos complejos en acciones claras para optimizar tu operación diaria.",
    benefit_6_title: "Integración Ágil",
    benefit_6_text: "Nuestra tecnología se integra a tu infraestructura actual de forma rápida, permitiéndote expandir la red de control según tus necesidades.",
    btn_plans: "VER PLANES"
  },
  en: {
    nav_home: "Home",
    nav_benefits: "Benefits",
    nav_features: "Features",
    nav_plans: "Plans",
    nav_about: "About Us",
    nav_faq: "FAQ",
    btn_start: "Get Started",
    hero_title: "TRANSFORMING WATER MANAGEMENT\nWITH SMART TECHNOLOGY\nFOR A SUSTAINABLE IMPACT",
    hero_subtitle: "FOR A SUSTAINABLE IMPACT",
    btn_optimize: "OPTIMIZE NOW",
    lang_label: "EN" ,
    benefits_title: "Why choose us?",
    benefits_subtitle: "A standard that does not fail",
    benefit_1_title: "Strategic Savings",
    benefit_1_text: "Drastically reduce your monthly bills through early detection of inefficiencies and the optimized use of every drop.",
    benefit_2_title: "Total Control 24/7",
    benefit_2_text: "Monitor your system in real time from the app, with precise data that helps you make informed decisions instantly.",
    benefit_3_title: "Zero Waste",
    benefit_3_text: "Advanced algorithms detect anomalies and micro-leaks before they turn into critical losses.",
    benefit_4_title: "Eco-Compliance",
    benefit_4_text: "Strengthen your corporate image and comply with environmental regulations by systematically reducing your water footprint.",
    benefit_5_title: "Intuitive Management",
    benefit_5_text: "Access a simplified, friendly interface that turns complex data into clear actions to optimize your daily operation.",
    benefit_6_title: "Agile Integration",
    benefit_6_text: "Our technology integrates quickly with your current infrastructure, allowing you to expand the control network as needed.",
    btn_plans: "VIEW PLANS"
  }
};

let currentLang = document.documentElement.lang === 'en' ? 'en' : 'es';

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = resources[currentLang][key];
  });

  document.getElementById("lang-toggle").textContent = resources[currentLang].lang_label;
  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", applyTranslations);