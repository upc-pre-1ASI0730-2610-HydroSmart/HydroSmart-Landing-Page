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
    lang_label: "EN" 
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