export const translations = {
  es: {
    // Header
    "header.about": "Sobre mí",
    "header.projects": "Proyectos",
    "header.contact": "Contacto",

    // Hero
    "hero.tag": "💻 Backend Developer",
    "hero.greeting": "Hola, soy ",
    "hero.description":
      "Desarrollador backend especializado en crear APIs robustas, sistemas escalables y soluciones optimizadas con Node.js, Python y TypeScript.",

    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Desarrollador apasionado por crear soluciones eficientes",
    "about.p1":
      "Soy un desarrollador backend con experiencia en la creación de APIs RESTful, sistemas de caché, herramientas CLI y arquitecturas escalables. También desarrollo sitios web como freelance con enfoque en performance y SEO. Me enfoco en escribir código limpio, eficiente y bien documentado.",
    "about.p2":
      "Mi experiencia incluye trabajar con Node.js, Python, TypeScript, bases de datos PostgreSQL, Redis para optimización de performance, Docker para deployment, y Astro + Tailwind CSS para sitios web rápidos y optimizados. Siempre busco aprender nuevas tecnologías y mejores prácticas.",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Algunos de mis trabajos recientes",

    // Project 0 - Carobra
    "projects.0.tag": "PROYECTO FREELANCE",
    "projects.0.title": "🌐 Sitio Web Carobra",
    "projects.0.description":
      "Sitio web corporativo desarrollado como proyecto freelance para Carobra Consultores Especializados, empresa líder en servicios financieros con más de 13 años de experiencia.",
    "projects.0.highlight":
      "SEO Score: 100/100 en Lighthouse · Performance: 86/100 Real Experience Score",
    "projects.0.feature.0":
      "Schema.org completo (Organization, JobPosting, Breadcrumbs, Testimonios)",
    "projects.0.feature.1":
      "Formularios con validación y envío por email transaccional con Resend",
    "projects.0.feature.2":
      "Upload de CV con conversión a PDF y almacenamiento en Vercel Blob",
    "projects.0.feature.3":
      "Galería de fotos con widget embed de Flickr (sin costo de API)",
    "projects.0.feature.4":
      "Imágenes optimizadas en WebP con Astro Image y lazy loading",
    "projects.0.feature.5": "Diseño responsive para móvil, tablet y desktop",
    "projects.0.feature.6": "Open Graph y Twitter Cards optimizados",

    // Project 1 - Booking API
    "projects.1.tag": "API REST",
    "projects.1.title": "🏨 Booking API",
    "projects.1.description":
      "API RESTful completa para gestión de reservas de habitaciones de hotel, con autenticación segura, sistema de roles y documentación interactiva.",
    "projects.1.highlight":
      "14 tests automatizados con Jest · Validación de solapamiento de fechas · Swagger UI interactiva",
    "projects.1.feature.0":
      "Autenticación JWT con hashing Argon2 y sistema de roles (Admin/Usuario)",
    "projects.1.feature.1":
      "Validación robusta de datos con Zod en todos los endpoints",
    "projects.1.feature.2":
      "Detección inteligente de solapamiento de fechas en reservas",
    "projects.1.feature.3":
      "Paginación en endpoints de listado con índices optimizados",
    "projects.1.feature.4":
      "Documentación Swagger/OpenAPI 3.0 con ejemplos y schemas reutilizables",
    "projects.1.feature.5":
      "Connection pooling con Neon (PostgreSQL Serverless)",
    "projects.1.feature.6":
      "14 tests automatizados cubriendo casos críticos",

    // Project 2 - Weather API
    "projects.2.tag": "OPTIMIZACIÓN",
    "projects.2.title": "🌤️ Weather API + Redis Cache",
    "projects.2.description":
      "API wrapper meteorológica con caché Redis, soporte Docker completo y monitoreo de performance en tiempo real. Basada en el proyecto Weather API de roadmap.sh.",
    "projects.2.highlight":
      "95-97% mejora de performance en requests cacheados · Degradación elegante si Redis no está disponible",
    "projects.2.feature.0":
      "Caché Redis 7 con mejora de 95-97% en latencia de requests cacheados",
    "projects.2.feature.1":
      "Endpoint /stats con estadísticas de caché en tiempo real",
    "projects.2.feature.2":
      "Rate limiting (100 requests por cada 15 minutos)",
    "projects.2.feature.3":
      "Degradación elegante cuando Redis no está disponible",
    "projects.2.feature.4":
      "Docker & Docker Compose para setup multi-contenedor",
    "projects.2.feature.5": "Suite de tests con Jest + Supertest",
    "projects.2.feature.6":
      "Configuración flexible de entorno con soporte de unidades métricas",

    // Project 3 - TMDB CLI
    "projects.3.tag": "CLI TOOL",
    "projects.3.title": "🎬 TMDB CLI Tool",
    "projects.3.description":
      "Herramienta de línea de comandos para buscar películas, series y actores usando la API de The Movie Database con interfaz colorida y profesional.",
    "projects.3.highlight":
      "UX destacada con tablas coloridas, caché local y múltiples formatos de salida",
    "projects.3.feature.0": "Búsqueda de películas, series y personas",
    "projects.3.feature.1": "Información detallada con ratings",
    "projects.3.feature.2": "Contenido en tendencia (día/semana)",
    "projects.3.feature.3": "Interfaz colorida con Rich",
    "projects.3.feature.4": "Sistema de caché local",

    // ProjectCard
    "projectCard.highlights": "💡 Destaca:",

    // Contact
    "contact.title": "¿Trabajemos juntos?",
    "contact.description":
      "Estoy disponible para oportunidades freelance o posiciones full-time. Si tienes un proyecto en mente o simplemente quieres conectar, ¡escríbeme!",
    "contact.button": "Enviar Email",

    // Footer
    "footer.text": "Nico Guerrero. Hecho con ☕ y mucho código.",

    // Meta
    "meta.description":
      "Desarrollador Backend especializado en Node.js, Python y TypeScript",
    "meta.title": "Nico Guerrero | Backend Developer",
  },

  en: {
    // Header
    "header.about": "About me",
    "header.projects": "Projects",
    "header.contact": "Contact",

    // Hero
    "hero.tag": "💻 Backend Developer",
    "hero.greeting": "Hi, I'm ",
    "hero.description":
      "Backend developer specialized in building robust APIs, scalable systems and optimized solutions with Node.js, Python and TypeScript.",

    // About
    "about.title": "About me",
    "about.subtitle": "Developer passionate about building efficient solutions",
    "about.p1":
      "I'm a backend developer with experience building RESTful APIs, caching systems, CLI tools and scalable architectures. I also build websites as a freelancer with a focus on performance and SEO. I focus on writing clean, efficient and well-documented code.",
    "about.p2":
      "My experience includes working with Node.js, Python, TypeScript, PostgreSQL databases, Redis for performance optimization, Docker for deployment, and Astro + Tailwind CSS for fast and optimized websites. I'm always looking to learn new technologies and best practices.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of my recent work",

    // Project 0 - Carobra
    "projects.0.tag": "FREELANCE PROJECT",
    "projects.0.title": "🌐 Carobra Website",
    "projects.0.description":
      "Corporate website developed as a freelance project for Carobra Consultores Especializados, a leading financial services company with over 13 years of experience.",
    "projects.0.highlight":
      "SEO Score: 100/100 on Lighthouse · Performance: 86/100 Real Experience Score",
    "projects.0.feature.0":
      "Complete Schema.org (Organization, JobPosting, Breadcrumbs, Testimonials)",
    "projects.0.feature.1":
      "Forms with validation and transactional email sending via Resend",
    "projects.0.feature.2":
      "CV upload with PDF conversion and storage in Vercel Blob",
    "projects.0.feature.3":
      "Photo gallery with Flickr embed widget (no API cost)",
    "projects.0.feature.4":
      "WebP optimized images with Astro Image and lazy loading",
    "projects.0.feature.5": "Responsive design for mobile, tablet and desktop",
    "projects.0.feature.6": "Optimized Open Graph and Twitter Cards",

    // Project 1 - Booking API
    "projects.1.tag": "REST API",
    "projects.1.title": "🏨 Booking API",
    "projects.1.description":
      "Complete RESTful API for hotel room booking management, with secure authentication, role-based system and interactive documentation.",
    "projects.1.highlight":
      "14 automated tests with Jest · Date overlap validation · Interactive Swagger UI",
    "projects.1.feature.0":
      "JWT authentication with Argon2 hashing and role system (Admin/User)",
    "projects.1.feature.1":
      "Robust data validation with Zod across all endpoints",
    "projects.1.feature.2":
      "Smart date overlap detection in bookings",
    "projects.1.feature.3":
      "Pagination in listing endpoints with optimized indexes",
    "projects.1.feature.4":
      "Swagger/OpenAPI 3.0 documentation with reusable examples and schemas",
    "projects.1.feature.5":
      "Connection pooling with Neon (PostgreSQL Serverless)",
    "projects.1.feature.6":
      "14 automated tests covering critical cases",

    // Project 2 - Weather API
    "projects.2.tag": "OPTIMIZATION",
    "projects.2.title": "🌤️ Weather API + Redis Cache",
    "projects.2.description":
      "Weather API wrapper with Redis caching, full Docker support and real-time performance monitoring. Based on the roadmap.sh Weather API project.",
    "projects.2.highlight":
      "95-97% performance improvement on cached requests · Graceful degradation if Redis is unavailable",
    "projects.2.feature.0":
      "Redis 7 cache with 95-97% latency improvement on cached requests",
    "projects.2.feature.1":
      "/stats endpoint with real-time cache statistics",
    "projects.2.feature.2":
      "Rate limiting (100 requests per 15 minutes)",
    "projects.2.feature.3":
      "Graceful degradation when Redis is unavailable",
    "projects.2.feature.4":
      "Docker & Docker Compose for multi-container setup",
    "projects.2.feature.5": "Test suite with Jest + Supertest",
    "projects.2.feature.6":
      "Flexible environment configuration with metric units support",

    // Project 3 - TMDB CLI
    "projects.3.tag": "CLI TOOL",
    "projects.3.title": "🎬 TMDB CLI Tool",
    "projects.3.description":
      "Command-line tool for searching movies, TV shows and actors using The Movie Database API with a colorful and professional interface.",
    "projects.3.highlight":
      "Outstanding UX with colorful tables, local cache and multiple output formats",
    "projects.3.feature.0": "Search for movies, TV shows and people",
    "projects.3.feature.1": "Detailed information with ratings",
    "projects.3.feature.2": "Trending content (day/week)",
    "projects.3.feature.3": "Colorful interface with Rich",
    "projects.3.feature.4": "Local cache system",

    // ProjectCard
    "projectCard.highlights": "💡 Highlights:",

    // Contact
    "contact.title": "Let's work together?",
    "contact.description":
      "I'm available for freelance opportunities or full-time positions. If you have a project in mind or just want to connect, reach out!",
    "contact.button": "Send Email",

    // Footer
    "footer.text": "Nico Guerrero. Made with ☕ and lots of code.",

    // Meta
    "meta.description":
      "Backend Developer specialized in Node.js, Python and TypeScript",
    "meta.title": "Nico Guerrero | Backend Developer",
  },
} as const;

export type Lang = "es" | "en";
export type TranslationKey = keyof (typeof translations)["es"];
