export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  year: string;
  description: string;
  highlights: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  number: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  points: string[];
  skills: string[];
}

export interface Service {
  id: string;
  iconName: "web" | "smartphone" | "database" | "design";
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Fayyadh Rahinda",
  brand: "FAYYDHR®",
  title: "SOFTWARE ENGINEER",
  subtitle:
    "Building thoughtful digital experiences, scalable applications, and modern products through code and design.",
  location: "Indonesia / Remote",
  year: "2026",
  email: "fayyadh.rahinda@example.com",
  phone: "+62 812-3456-7890",
  socials: [
    { name: "EMAIL", url: "mailto:fayyadh.rahinda@example.com", icon: "mail" },
    { name: "GITHUB", url: "https://github.com", icon: "github" },
    { name: "LINKEDIN", url: "https://linkedin.com", icon: "linkedin" },
    { name: "INSTAGRAM", url: "https://instagram.com", icon: "instagram" },
  ],
  aboutStatements: [
    {
      label: "LOCATION",
      value: "Indonesia / Remote",
    },
    {
      label: "ROLE",
      value: "Full Stack Developer\nUI/UX Designer",
    },
    {
      label: "FOCUS",
      value: "Scalable Systems\nPerformance Optimization",
    },
    {
      label: "STACK",
      value: "React, Node.js, Next.js, Python\nAWS, PostgreSQL, Tailwind",
    },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    number: "01",
    role: "FULL STACK DEVELOPER INTERN",
    company: "PT GARAM DUA MUSIM",
    location: "Lamongan, Jawa Timur",
    period: "OCT 2025 — PRESENT",
    points: [
      "Independently developed an Enterprise Resource Planning (ERP) system from business requirement gathering to production deployment.",
      "Analyzed existing manual business processes and transformed them into a centralized digital ERP platform.",
      "Designed and implemented modules including purchasing, sales, inventory, warehouse, production, work orders, and reporting.",
      "Integrated business workflows into a single system, reducing repetitive manual tasks and improving operational efficiency.",
      "Designed relational database schemas using Prisma ORM and MySQL to ensure efficient and reliable data management.",
      "Built the application using Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, MySQL, and Server Actions.",
      "Managed the entire software development lifecycle, including requirement analysis, system design, development, testing, and deployment.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL", "Server Actions", "ERP Systems"],
  },
  {
    id: "exp-2",
    number: "02",
    role: "FULL STACK DEVELOPMENT INTERN",
    company: "CODVEDA TECHNOLOGIES",
    location: "Remote",
    period: "2025",
    points: [
      "Developed full-stack applications integrating frontend, backend, and database components.",
      "Built REST APIs using Node.js and Express with CRUD functionality.",
      "Implemented frontend interfaces using modern JavaScript frameworks and API integration.",
      "Implemented authentication and authorization using JWT, password hashing, and role-based access control.",
      "Integrated databases and performed CRUD operations, data validation, and basic database optimization.",
    ],
    skills: ["Node.js", "Express.js", "JavaScript", "JWT", "RESTful APIs", "Database Optimization"],
  },
  {
    id: "exp-3",
    number: "03",
    role: "SOFTWARE ENGINEER INTERN",
    company: "BPJS KESEHATAN",
    location: "Surabaya, Jawa Timur",
    period: "MAY 2025 — AUG 2025",
    points: [
      "Developed an AI-powered internal chatbot to improve access to organizational knowledge and internal information.",
      "Built responsive user interfaces using React and Tailwind CSS integrated with a Flask backend.",
      "Implemented chatbot interaction, database query mode, PDF document extraction, authentication, and chat history management.",
      "Integrated the DeepSeek language model through the OpenRouter API for intelligent natural language responses.",
      "Collaborated on MySQL and REST API integration and designed UI prototypes for the organization's internal mobile application.",
    ],
    skills: ["React", "Tailwind CSS", "Python", "Flask", "DeepSeek AI", "OpenRouter API", "MySQL", "PDF Extraction"],
  },
  {
    id: "exp-4",
    number: "04",
    role: "FREELANCE WEB & MOBILE DEVELOPER",
    company: "JOKIPROYEK",
    location: "Remote, Indonesia",
    period: "AUG 2025 — PRESENT",
    points: [
      "Delivered tailored responsive web applications and cross-platform mobile solutions for diverse client specifications.",
      "Engineered end-to-end features spanning custom UI design systems, API development, and secure database integrations.",
    ],
    skills: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Mobile & Web Engineering"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "erp-system",
    number: "01",
    title: "ERP BUSINESS SYSTEM",
    subtitle: "Enterprise Resource & Logistics Management",
    category: "Full Stack / Enterprise",
    image: "/images/project-erp.jpg",
    year: "2026",
    description:
      "A comprehensive corporate enterprise resource planning platform tailored for real-time inventory tracking, procurement automation, financial balance tracking, and role-based access control.",
    highlights: [
      "Real-time inventory audit and warehouse shipment logging",
      "Automated PDF invoicing and financial reconciliation",
      "Granular role-based permissions and activity logs",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Chart.js"],
    demoUrl: "https://example.com/erp-demo",
    githubUrl: "https://github.com/fayyadh/erp-business-system",
  },
  {
    id: "novelid",
    number: "02",
    title: "NOVELID",
    subtitle: "Digital Reading & Creative Publishing Platform",
    category: "Web Application",
    image: "/images/project-novelid.jpg",
    year: "2025",
    description:
      "A responsive community web app for authors and readers featuring rich-text publishing, chapter-by-chapter bookmarks, customizable reader mode with dark themes, and reader engagement.",
    highlights: [
      "Distraction-free reading engine with typography customization",
      "Draft autosaving and chapter versioning for authors",
      "Interactive comment threads and community upvoting system",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion"],
    demoUrl: "https://example.com/novelid",
    githubUrl: "https://github.com/fayyadh/novelid-platform",
  },
  {
    id: "weather-app",
    number: "03",
    title: "WEATHER APPLICATION",
    subtitle: "Hyperlocal Forecast & Meteorological Insights",
    category: "Frontend / API Integration",
    image: "/images/project-weather.jpg",
    year: "2025",
    description:
      "An ultra-fast, minimalist meteorological dashboard providing hourly weather forecasts, radar simulation maps, air quality index metrics, and geolocation detection.",
    highlights: [
      "Geo-location auto detection with interactive radar maps",
      "7-day hourly precipitation and UV radiation graphs",
      "Offline caching and lightning-fast client-side state handling",
    ],
    techStack: ["TypeScript", "React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    demoUrl: "https://example.com/weather-app",
    githubUrl: "https://github.com/fayyadh/weather-insights",
  },
  {
    id: "calorie-tracker",
    number: "04",
    title: "FOOD CALORIE TRACKER",
    subtitle: "Nutritional Health & Meal Analytics",
    category: "Full Stack / HealthTech",
    image: "/images/project-calorie.jpg",
    year: "2024",
    description:
      "A personal nutrition tracking application designed to help users log daily calorie intake, track macronutrient distributions, set fitness targets, and analyze dietary habits over time.",
    highlights: [
      "Extensive food database search with quick barcode entry simulation",
      "Dynamic calorie and macro-nutrient progress rings",
      "Weekly nutritional summary export and health insights",
    ],
    techStack: ["React Native", "Next.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    demoUrl: "https://example.com/calorie-tracker",
    githubUrl: "https://github.com/fayyadh/food-calorie-tracker",
  },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    iconName: "web",
    title: "WEB DEV",
    description: "Building responsive, accessible, and performant web applications.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Web Vitals Optimization"],
  },
  {
    id: "mobile-dev",
    iconName: "smartphone",
    title: "MOBILE",
    description: "Creating cross-platform mobile experiences that feel native.",
    skills: ["React Native", "Expo", "PWA", "Offline First"],
  },
  {
    id: "backend-dev",
    iconName: "database",
    title: "BACKEND",
    description: "Designing robust architectures and scalable APIs.",
    skills: ["Node.js / Express", "Python", "PostgreSQL & Prisma", "REST / GraphQL"],
  },
  {
    id: "uiux-design",
    iconName: "design",
    title: "UI/UX",
    description: "Crafting intuitive interfaces focused on user experience.",
    skills: ["Figma Design", "Wireframing & Prototyping", "Design Systems", "Micro-Interactions"],
  },
];
