export const languages = { en: "English", es: "Español" } as const;
export const defaultLang = "en";
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "es" ? "es" : "en";
}

const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume ↗",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      setIn: "Set in Barlow",
    },
    hero: {
      available: "Available for work",
      role: "Full Stack Software Engineer",
      desc: "Building full stack systems with Angular and Spring Boot — data modeling, user and billing management, microservices, and Kubernetes deployments with CI/CD pipelines.",
      viewWork: "View Work →",
      getInTouch: "Get in Touch",
      openToRoles: "Open to roles",
      statusTitle: "Full Stack Engineer",
      statusBody: "Full-time · Contract · Remote-friendly",
      focus: ["Full stack web apps", "Microservices & CI/CD", "Data modeling & ETLs"],
      stats: [
        { n: "3.5+", strong: "Years", label: "experience" },
        { n: "2", strong: "Domains", label: "worked in" },
        { n: "5+", strong: "Core techs", label: "mastered" },
      ],
      categories: [
        { label: "Frontend", techs: ["Angular", "TypeScript", "Astro"] },
        { label: "Backend", techs: ["Spring Boot", "Java", "Node.js", "Express", "FastAPI"] },
        { label: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "Git"] },
        { label: "Data", techs: ["Oracle", "PostgreSQL"] },
        { label: "Architecture", techs: ["Microservices", "Hexagonal", "REST APIs"] },
        { label: "AI", techs: ["Prompt Eng.", "LLM Workflows", "AI-Assisted"] },
      ],
    },
    about: {
      tag: "About me",
      title: "I write software<br />that scales and lasts",
      p1: "Full stack engineer with 3.5+ years of experience spanning research software and enterprise systems. For the past 2.5 years I've worked at Vitaly building full stack applications with Angular and Spring Boot — data modeling, user and invoice management, microservices, and Kubernetes deployments with CI/CD pipelines.",
      p2: "Before that, I spent a year at the Human Movement Biomechanics Lab (Faculty of Sport Sciences, Cáceres), building full stack applications and data ETLs, and automating data analysis with MATLAB, C, Python and R.",
      p3: "I care about clean architecture, reliable deployments, and software that holds up once it leaves the lab — or the sprint.",
      coreValues: "Core values",
      traits: [
        { icon: "⬡", title: "Clean Code", desc: "Readable and maintainable" },
        { icon: "◎", title: "Architecture", desc: "Built to grow without breaking" },
        { icon: "△", title: "Problem Solving", desc: "Root causes, not symptoms" },
        { icon: "⊕", title: "Ownership", desc: "End-to-end accountability" },
        { icon: "◫", title: "Communication", desc: "Clear handoffs, no ambiguity" },
        { icon: "✧", title: "Adaptability", desc: "Fast across domains and stacks" },
      ],
    },
    skills: {
      tag: "Expertise",
      title: "Technical Skills",
      desc: "Full-stack depth across frontend, backend, data, cloud, architecture and testing.",
      groups: [
        { title: "Frontend", wide: false, items: ["Angular", "Astro", "TypeScript", "JavaScript", "HTML", "CSS"] },
        { title: "Backend", wide: false, items: ["Java", "Spring Boot", "Node.js", "Express", "FastAPI", "REST APIs"] },
        { title: "Architecture", wide: false, items: ["Microservices", "Hexagonal Architecture", "MVC", "Data Modeling"] },
        { title: "Databases", wide: false, items: ["Oracle", "PostgreSQL"] },
        { title: "DevOps & CI/CD", wide: true, items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Git", "Linux"] },
        { title: "Data & Research", wide: false, items: ["MATLAB", "Python", "R", "C", "ETL"] },
        { title: "AI Tooling", wide: false, items: ["Prompt Engineering", "AI-Assisted Development", "LLM Workflows"] },
      ],
    },
    experience: {
      tag: "Career",
      title: "Experience",
      jobs: [
        {
          date: "2023 — Present",
          company: "Vitaly",
          role: "Full Stack Engineer",
          desc: "Building full stack applications with Angular and Spring Boot. Data modeling on Oracle and PostgreSQL, user and invoice management, microservices architecture, and Kubernetes deployments backed by CI/CD pipelines.",
          techs: ["Angular", "Spring Boot", "Oracle", "PostgreSQL", "Kubernetes", "CI/CD"],
        },
        {
          date: "2022 — 2023",
          company: "Human Movement Biomechanics Lab — Faculty of Sport Sciences, Cáceres",
          role: "Full Stack Developer & Data Engineer",
          desc: "Built full stack applications and data ETLs for movement analysis. Automated data processing pipelines and integrated them into full stack tools using MATLAB, C, Python and R.",
          techs: ["MATLAB", "Python", "R", "C", "ETL"],
        },
      ],
    },
    contact: {
      tag: "Get in touch",
      title: "Let's build something<br />remarkable together",
      sub: "Open to full-time roles, contract work, and interesting collaborations. Currently available.",
      github: "GitHub ↗",
      linkedin: "LinkedIn ↗",
      loc: "Spain · Remote-friendly",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
      resume: "Currículum ↗",
      themeToLight: "Cambiar a tema claro",
      themeToDark: "Cambiar a tema oscuro",
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      setIn: "Escrito con Barlow",
    },
    hero: {
      available: "Disponible para trabajar",
      role: "Ingeniero de Software Full Stack",
      desc: "Construyo sistemas full stack con Angular y Spring Boot — modelado de datos, gestión de usuarios y facturación, microservicios y despliegues en Kubernetes con pipelines de CI/CD.",
      viewWork: "Ver proyectos →",
      getInTouch: "Contactar",
      openToRoles: "Abierto a ofertas",
      statusTitle: "Ingeniero Full Stack",
      statusBody: "Jornada completa · Contrato · Remoto",
      focus: ["Apps web full stack", "Microservicios y CI/CD", "Modelado de datos y ETLs"],
      stats: [
        { n: "3,5+", strong: "Años", label: "de experiencia" },
        { n: "2", strong: "Sectores", label: "distintos" },
        { n: "5+", strong: "Tecnologías clave", label: "dominadas" },
      ],
      categories: [
        { label: "Frontend", techs: ["Angular", "TypeScript", "Astro"] },
        { label: "Backend", techs: ["Spring Boot", "Java", "Node.js", "Express", "FastAPI"] },
        { label: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "Git"] },
        { label: "Datos", techs: ["Oracle", "PostgreSQL"] },
        { label: "Arquitectura", techs: ["Microservicios", "Hexagonal", "REST APIs"] },
        { label: "IA", techs: ["Prompt Eng.", "Flujos LLM", "Asistido por IA"] },
      ],
    },
    about: {
      tag: "Sobre mí",
      title: "Escribo software<br />que escala y perdura",
      p1: "Ingeniero full stack con más de 3,5 años de experiencia entre software de investigación y sistemas empresariales. Los últimos 2,5 años he trabajado en Vitaly construyendo aplicaciones full stack con Angular y Spring Boot — modelado de datos, gestión de usuarios y facturas, microservicios y despliegues en Kubernetes con pipelines de CI/CD.",
      p2: "Antes de eso, pasé un año en el Human Movement Biomechanics Lab (Facultad de Ciencias del Deporte, Cáceres), construyendo aplicaciones full stack y ETLs de datos, y automatizando análisis de datos con MATLAB, C, Python y R.",
      p3: "Me importa la arquitectura limpia, los despliegues fiables y el software que aguanta cuando sale del laboratorio — o del sprint.",
      coreValues: "Valores clave",
      traits: [
        { icon: "⬡", title: "Código limpio", desc: "Legible y mantenible" },
        { icon: "◎", title: "Arquitectura", desc: "Pensada para crecer sin romperse" },
        { icon: "△", title: "Resolución de problemas", desc: "Causas raíz, no síntomas" },
        { icon: "⊕", title: "Responsabilidad", desc: "De principio a fin" },
        { icon: "◫", title: "Comunicación", desc: "Traspasos claros, sin ambigüedad" },
        { icon: "✧", title: "Adaptabilidad", desc: "Rápido entre dominios y stacks" },
      ],
    },
    skills: {
      tag: "Experiencia técnica",
      title: "Habilidades Técnicas",
      desc: "Profundidad full stack en frontend, backend, datos, cloud, arquitectura y testing.",
      groups: [
        { title: "Frontend", wide: false, items: ["Angular", "Astro", "TypeScript", "JavaScript", "HTML", "CSS"] },
        { title: "Backend", wide: false, items: ["Java", "Spring Boot", "Node.js", "Express", "FastAPI", "REST APIs"] },
        { title: "Arquitectura", wide: false, items: ["Microservicios", "Arquitectura Hexagonal", "MVC", "Modelado de Datos"] },
        { title: "Bases de datos", wide: false, items: ["Oracle", "PostgreSQL"] },
        { title: "DevOps y CI/CD", wide: true, items: ["Docker", "Kubernetes", "Pipelines CI/CD", "Git", "Linux"] },
        { title: "Datos e investigación", wide: false, items: ["MATLAB", "Python", "R", "C", "ETL"] },
        { title: "Herramientas de IA", wide: false, items: ["Ingeniería de Prompts", "Desarrollo Asistido por IA", "Flujos LLM"] },
      ],
    },
    experience: {
      tag: "Trayectoria",
      title: "Experiencia",
      jobs: [
        {
          date: "2023 — Actualidad",
          company: "Vitaly",
          role: "Ingeniero Full Stack",
          desc: "Construyo aplicaciones full stack con Angular y Spring Boot. Modelado de datos en Oracle y PostgreSQL, gestión de usuarios y facturas, arquitectura de microservicios y despliegues en Kubernetes con pipelines de CI/CD.",
          techs: ["Angular", "Spring Boot", "Oracle", "PostgreSQL", "Kubernetes", "CI/CD"],
        },
        {
          date: "2022 — 2023",
          company: "Human Movement Biomechanics Lab — Facultad de Ciencias del Deporte, Cáceres",
          role: "Desarrollador Full Stack e Ingeniero de Datos",
          desc: "Construí aplicaciones full stack y ETLs de datos para análisis de movimiento. Automaticé pipelines de procesamiento de datos y los integré en herramientas full stack usando MATLAB, C, Python y R.",
          techs: ["MATLAB", "Python", "R", "C", "ETL"],
        },
      ],
    },
    contact: {
      tag: "Hablemos",
      title: "Construyamos algo<br />increíble juntos",
      sub: "Abierto a puestos a jornada completa, proyectos por contrato y colaboraciones interesantes. Disponible ahora.",
      github: "GitHub ↗",
      linkedin: "LinkedIn ↗",
      loc: "España · Remoto",
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return content[lang];
}
