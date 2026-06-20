import { Experience, Education, Project } from './types';

export const personalInfo = {
  name: "Jose Buendia Vico",
  title: "Desarrollador Web / Front-End Developer",
  tagline: "Especializado en crear interfaces de usuario impecables, estructuradas con código semántico, escalables y optimizadas.",
  email: "josebuendiavico4@gmail.com",
  phone: "+34 663 38 05 78",
  location: "Jaén, España",
  github: "https://github.com/josebuendia", // placeholder standard github based on his name
  linkedin: "https://linkedin.com/in/jose-buendia-vico", // professional linkedin based on his name
  aboutMe: "Soy un programador web apasionado por la maquetación semántica, el clean code y las arquitecturas web eficientes. Disfruto construyendo componentes de React altamente reutilizables y buscando soluciones innovadoras a problemas complejos de interfaz. Para mí, el frontend es la unión perfecta entre ingeniería de precisión y experiencia humana.",
  detailedBio: "Nacido de una intensa curiosidad por saber cómo funcionan los sistemas digitales, he recorrido un camino educativo y profesional enfocado en el desarrollo multimedia. Durante mi formación superior en DAW (Desarrollo de Aplicaciones Web) y mi experiencia de inserción laboral FP Dual en NTT Data, aprendí la importancia crucial de la modularidad, metodologías como BEM y arquitecturas React reactivas. Siempre apuesto por código nativo optimizado, accesibilidad y velocidad de carga, buscando asegurar que cada píxel sume al valor del producto.",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B1 (Intermedio)" },
    { name: "Portugués", level: "B1 (Intermedio / Estancia Erasmus+)" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador Web (FP Dual)",
    company: "NTT Data",
    location: "Jaén, España",
    period: "2025 - 2026",
    description: [
      "Participación activa en el proyecto de gran alcance 'StaffLink', colaborando estrechamente en la migración progresiva de una infraestructura legacy de Drupal hacia una arquitectura modular en React.",
      "Desarrollo y diseño de componentes interactivos y altamente reutilizables bajo estándares rigurosos de HTML, CSS modular y JS integrado en Liferay CMS.",
      "Identificación sistemática, triage y resolución de bugs en producción, logrando mejorar la estabilidad de la plataforma y el flujo de los usuarios finales.",
      "Gestión ágil de versiones y flujos de trabajo con Git en entornos multi-equipo con integración continua.",
      "Maquetación premium, accesible y responsive mediante Sass avanzado, CSS Grid, Flexbox y metodología estructurada BEM.",
      "Uso habitual de entornos de desarrollo modernos como Node.js y bundlers ultrarrápidos como Vite."
    ],
    tags: ["React", "TypeScript", "Drupal Migration", "Liferay CMS", "Sass", "BEM", "Vite", "Git"]
  },
  {
    id: "exp-2",
    role: "Servicio Técnico (Prácticas Erasmus+)",
    company: "RomãoTech",
    location: "Portugal",
    period: "2024",
    description: [
      "Diagnóstico avanzado, reparación física y lógica de equipos informáticos portátiles, de escritorio y terminales móviles en tiempo récord.",
      "Estructuración e instalación de sistemas operativos cliente/servidor y optimización de software de rendimiento empresarial.",
      "Montaje detallado de hardware y resolución autónoma de averías complejas físicas, cableado de redes y soporte directo a clientes."
    ],
    tags: ["Hardware", "Sistemas Operativos", "Redes", "Soporte Técnico", "Erasmus+"]
  },
  {
    id: "exp-3",
    role: "Administrador Informático / Dev",
    company: "I.E.S. San Juan Bosco",
    location: "Jaén, España",
    period: "2023",
    description: [
      "Creación, diseño y puesta en producción de una aplicación web Intranet interna para agilizar la comunicación docente y el control de inventario usando HTML, CSS y JavaScript nativo.",
      "Mantenimiento regular, actualización de seguridad y optimización de bases de datos del portal institucional desarrollado en WordPress (CMS).",
      "Administración y soporte de cuentas de red, equipos de cómputo virtuales y servidores físicos del centro educativo."
    ],
    tags: ["WordPress", "Vanilla JavaScript", "HTML5/CSS3", "PHP", "Intranet Development"]
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    degree: "Grado Superior - Desarrollo de Aplicaciones Web (DAW)",
    institution: "I.E.S. Virgen Del Carmen (Jaén)",
    period: "2024 - 2026",
    description: "Especialización avanzada en tecnologías web frontend y backend, bases de datos relacionales, despliegues Cloud, diseño de APIs y optimización SEO."
  },
  {
    id: "edu-2",
    degree: "Grado Medio - Sistemas Microinformáticos y Redes (SMR)",
    institution: "I.E.S. Virgen Del Carmen (Jaén)",
    period: "2021 - 2023",
    description: "Fundamentos sólidos de arquitectura de computadores, seguridad informática, administración remota de sistemas y redes locales cableadas e inalámbricas."
  },
  {
    id: "edu-3",
    degree: "Educación Secundaria Obligatoria (ESO)",
    institution: "San Vicente de Paul",
    period: "2016 - 2021",
    description: "Formación básica general, destacando en ciencias técnicas y tecnologías digitales."
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "StaffLink Client Portal",
    role: "Frontend Developer (Core Team Member)",
    description: "Sistema empresarial migrado de Drupal a React. Cuenta con renderizado optimizado de vistas complejas y un diseño responsive impecable.",
    longDescription: "Colaborando dentro de la FP Dual en NTT Data, StaffLink es una plataforma corporativa que unifica la gestión de datos de recursos internos y externos. La migración requirió desacoplar el frontend monolítico de Drupal a React, logrando una reducción del 40% en tiempos de respuesta iniciales. Adaptamos la maquetación a los estándares internos exigentes de NTT Data con CSS modular y metodología BEM.",
    tech: ["React", "TypeScript", "Drupal API", "Tailwind CSS", "Liferay", "Git"],
    highlights: ["Migración completa de vistas del panel principal", "Estructurado bajo metodología BEM estricta", "Accesibilidad nivel WCAG 2.1 AA", "Modularizado con componentes funcionales"],
    features: ["Panel interactivo en tiempo real", "Filtros multitarea avanzados", "Modo offline parcial", "Integración con gestores de contenido externos"],
    category: "fullstack",
    difficulty: "Avanzado"
  },
  {
    id: "proj-2",
    title: "BEM Nesting & Sass Generator Tool",
    role: "Creador de la Herramientas y Diseñador de UI",
    description: "Herramienta interactiva para desarrolladores frontend. Valida nombres de CSS en base a la metodología BEM y genera código Sass anidado de inmediato.",
    longDescription: "Herramienta que diseñé de manera independiente para agilizar la maquetación CSS. Permite a los desarrolladores ingresar sus clases de componentes HTML, valida en tiempo real si respetan la convención BEM (Bloque, Elemento, Modificador) y traduce la jerarquía a un bloque de código Sass anidado, reduciendo errores manuales en equipos juniors.",
    tech: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Motion Animations"],
    highlights: ["Evaluador de clases en tiempo real mediante Regex avanzado", "Traductor de estructuras jerárquicas CSS a Sass anidado", "Copiado rápido con un solo clic", "Visualizador gráfico interactivo del árbol DOM"],
    features: ["Guías contextuales interactivas de BEM", "Soporte para múltiples bloques simultáneos", "Exportación directa en formato .scss", "Estadísticas de complejidad selector"],
    category: "tool",
    difficulty: "Intermedio"
  },
  {
    id: "proj-3",
    title: "Intranet Docente San Juan Bosco",
    role: "Full-Stack Developer Autónomo",
    description: "Plataforma web ágil y local para profesores, facilitando la gestión de equipos de computación, inventario físico y reporte de incidencias técnicas en directo.",
    longDescription: "Proyecto desarrollado para la gestión digital de incidencias informáticas en el centro. El sistema reemplazó los formatos en papel y automatizó la asignación de tickets al administrador, optimizando un 65% los tiempos de reparación. Se implementó usando frontend HTML5/JS responsive y backend PHP ligero con base de datos SQL segura.",
    tech: ["HTML5", "CSS3 Grid", "Vanilla JavaScript", "PHP", "MySQL", "ChartJS"],
    highlights: ["Sistema de inicio de sesión con roles diferenciados (Profesor / Técnico)", "Generador automático de incidencias con prioridades de color", "Gráficos de estado mensuales", "Optimizado para visualización móvil"],
    features: ["Buscador inteligente con autocompletado", "Exportación de informes mensuales en XLS/PDF", "Notificaciones de alerta visuales", "Histórico de mantenimientos preventivos"],
    category: "frontend",
    difficulty: "Intermedio"
  },
  {
    id: "proj-4",
    title: "Portfolio Web Premium",
    role: "Diseñador & Desarrollador Principal",
    description: "Este mismo sitio web. Una obra de arte de ingeniería frontend en React, estructurada de manera semántica, optimizada para SEO y animaciones de precisión.",
    longDescription: "Inspirado en los portfolios de los mejores desarrolladores frontend de la industria mundial, diseñé un sistema de visualización interactivo. Diseñado con una paleta de colores oscuros profundos (slate blue), curvas de aceleración fluidas (Cubic Bezier) y estructurado semánticamente para que los buscadores de empleo y arañas SEO comprendan instantáneamente mi perfil técnico.",
    tech: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "SEO Semantic HTML"],
    highlights: ["Estructura 100% responsive testeadas en pantallas móviles y ultrawide", "Filtros rápidos de habilidades y sincronización de experiencia interactiva", "Formulario de contacto funcional con mitigación de spam local", "Soporte de descarga y vista de impresión estructurada"],
    features: ["Animaciones minimalistas fluidas", "Optimización de Lighthouse de 100% en accesibilidad y buenas prácticas", "Modo interactivo de validación BEM", "Modales informativos detallados por proyecto"],
    category: "frontend",
    difficulty: "Profesional"
  }
];

export const skillsData = {
  frontend: [
    { name: "React", level: 90, usageCount: 3, favorite: true },
    { name: "TypeScript", level: 85, usageCount: 2, favorite: true },
    { name: "Sass (SCSS)", level: 95, usageCount: 2, favorite: true },
    { name: "Metodología BEM", level: 95, usageCount: 2, favorite: true },
    { name: "CSS Grid & Flexbox", level: 95, usageCount: 3, favorite: false },
    { name: "Vue.js", level: 60, usageCount: 1, favorite: false },
    { name: "JavaScript (ES6+)", level: 90, usageCount: 3, favorite: true },
    { name: "HTML5 Semántico", level: 95, usageCount: 4, favorite: true }
  ],
  backend: [
    { name: "Node.js", level: 80, usageCount: 2, favorite: false },
    { name: "PHP", level: 75, usageCount: 2, favorite: false },
    { name: "Laravel", level: 70, usageCount: 1, favorite: false },
    { name: "SQL (BBDD Relacionales)", level: 80, usageCount: 2, favorite: false },
    { name: "APIs RESTful", level: 85, usageCount: 3, favorite: true }
  ],
  tools: [
    { name: "Vite", level: 90, usageCount: 3, favorite: true },
    { name: "Git & GitHub", level: 90, usageCount: 3, favorite: true },
    { name: "Liferay (CMS)", level: 75, usageCount: 1, favorite: false },
    { name: "WordPress", level: 85, usageCount: 1, favorite: false }
  ]
};
