export interface ModuleBreakdown {
  module: string;
  description: string;
}

export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  year: string;
  status?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  moduleBreakdown?: ModuleBreakdown[];
  sections?: ProjectSection[];
  disclaimer?: string;
  contactEmail?: string;
  demoUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  figmaUrl?: string;
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
  title: "FLUTTER & MOBILE DEVELOPER",
  subtitle:
    "Crafting high-performance mobile experiences with Flutter & Dart, backed by full-stack capabilities to build end-to-end digital products.",
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
      value: "Flutter & Mobile Developer\nFull Stack Engineer",
    },
    {
      label: "FOCUS",
      value: "Mobile-First Products\nClean Architecture",
    },
    {
      label: "STACK",
      value: "Flutter, Dart, Firebase, GetX\nNext.js, Node.js, PostgreSQL",
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
    id: "nutri-ai-app",
    number: "01",
    title: "NUTRI AI FOOD CALORIE TRACKER APP",
    subtitle: "AI Food & Nutrition Calorie Tracker",
    category: "Mobile / AI",
    image: "/images/Gemini_Generated_Image_3yt2ek3yt2ek3yt2.jpeg",
    year: "2026",
    figmaUrl: "https://www.figma.com/community/file/1500608399091759099/nutri-ai-food-calorie-tracker-app",
    description:
      "Aplikasi mobile lintas platform berbasis AI yang dirancang untuk mempermudah pemantauan nutrisi harian pengguna secara otomatis. Mengintegrasikan model kecerdasan buatan untuk menganalisis dan mendeteksi kalori makanan secara instan, mengelola log asupan harian, serta menyajikan visualisasi analitik pola makan.",
    highlights: [
      "AI Food Scanner: Memindai makanan secara visual untuk mengidentifikasi kandungan gizi dan estimasi kalori secara otomatis.",
      "Nutritional Logging & Diet Planning: Mencatat riwayat konsumsi harian serta menyusun rencana diet yang terstruktur.",
      "Analytics Dashboard: Menyajikan data tren asupan kalori dan makronutrien secara visual untuk evaluasi target kesehatan.",
      "Secure Authentication: Mendukung login akun fleksibel menggunakan kredensial email maupun integrasi pihak ketiga (Google Sign-In).",
      "Robust Software Architecture: Mengadopsi prinsip Clean Architecture dan manajemen state berbasis BLoC untuk performa yang terukur, modular, serta mudah dirawat.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Clean Architecture",
      "BLoC",
      "Android",
      "iOS",
      "macOS",
      "Windows",
      "Linux",
      "Web",
    ],
    demoUrl: undefined,
    githubUrl: "https://github.com/fayydhr/nutri-ai-app",
  },
  {
    id: "ecommerce-flutter-app",
    number: "02",
    title: "E-COMMERCE MOBILE APP",
    subtitle: "Full-featured Shopping & Order Management",
    category: "Mobile / Full Stack",
    image: "/images/Gemini_Generated_Image_8cvdtc8cvdtc8cvd.jpeg",
    year: "2026",
    figmaUrl:
      "https://www.figma.com/community/file/1362309395455453748/ecommerce-app-ui-kit-freebie?q_id=d7a47217-922b-4466-a60e-39117a56158a",
    description:
      "A comprehensive mobile e-commerce platform built with Flutter, featuring real-time product browsing, cart & wishlist management, secure authentication with Firebase, and seamless order experience with clean architecture.",
    highlights: [
      "Clean Architecture with Domain, Data & Presentation layers",
      "Firebase Auth with Google Sign-In & OTP email verification",
      "Real-time cart, wishlist, and product category filtering",
      "Role-based navigation and state management using GetX",
      "Push notification support and shared preferences local storage",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "GetX",
      "Google Sign-In",
      "Shared Preferences",
      "Clean Architecture",
    ],
    demoUrl: undefined,
    githubUrl: "https://github.com/fayydhr/ecommerce-app",
  },
  {
    id: "garam-dua-musim-erp",
    number: "03",
    title: "GARAM DUA MUSIM ERP",
    subtitle: "Integrated Business Management System & End-to-End Operations",
    category: "Fullstack / ERP / Business Management System",
    image: "/images/Gemini_Generated_Image_mx4muamx4muamx4m.jpeg",
    year: "2025–2026",
    status: "IN PRODUCTION",
    description:
      "A comprehensive, role-based Enterprise Resource Planning (ERP) system built for Garam Dua Musim — a salt production & distribution company. The system manages the full operational lifecycle from sales order creation, multi-level validation, production scheduling, warehouse management, QC testing, logistics, and financial reporting across 8 distinct user roles.",
    highlights: [
      "Role-based access control with 8 roles: sales, admin_finance, gudang, produksi, qc, atasan, qa, hr",
      "Full order lifecycle management — from draft to menunggu_validasi, divalidasi, diproses, siap_dikirim, and selesai",
      "Production & QC workflow — Work Orders, production requests, and QC testing stages (menunggu_sampel, proses_pengujian, rilis)",
      "Real-time push notifications via Web Push (VAPID) and Telegram Bot integration per department",
      "Fund request & financial flows — dana pengajuan approval chain (pending, disetujui, dicairkan)",
      "Document generation — Invoice & Surat Jalan export as .docx and Excel via ExcelJS",
      "MySQL + Prisma ORM with MariaDB adapter, Supabase for file storage",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "MySQL / MariaDB",
      "Supabase",
      "NextAuth v5",
      "Tailwind CSS v4",
      "Recharts",
      "Lucide React",
      "ExcelJS",
      "docx",
      "Web Push",
      "Telegram Bot API",
      "SweetAlert2",
    ],
    moduleBreakdown: [
      { module: "Sales", description: "Pembuatan & tracking pesanan, pembayaran, dokumen" },
      { module: "Admin / Finance", description: "Validasi pesanan, kas, laporan laba-rugi, piutang" },
      { module: "Warehouse", description: "Penerimaan produksi, stok barang, PO confirmation" },
      { module: "Production", description: "Work order, permintaan produksi, bahan baku" },
      { module: "QC", description: "Pengujian kualitas, status rilis / tidak layak" },
      { module: "Logistics", description: "Pengiriman, serah terima" },
      { module: "HR", description: "Manajemen karyawan" },
      { module: "QA", description: "Quality assurance & audit" },
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: "task-management-app",
    number: "04",
    title: "TASK MANAGEMENT & TO-DO LIST APP",
    subtitle: "Multi-Platform Task & Project Management App",
    category: "Mobile / Productivity",
    image: "/images/Gemini_Generated_Image_u960wzu960wzu960.jpeg",
    year: "2026",
    figmaUrl: "https://www.figma.com/community/file/1143575071825582037/task-management-to-do-list-app",
    description:
      "Aplikasi manajemen tugas dan catatan harian berbasis multi-platform yang dirancang untuk membantu pengguna mengorganisasi proyek, memantau tenggat waktu, serta meningkatkan produktivitas secara terstruktur. Aplikasi ini mengintegrasikan sistem penyimpanan lokal yang efisien untuk akses cepat tanpa bergantung pada koneksi internet, dilengkapi navigasi intuitif untuk pengelolaan tugas harian dan pencatatan ide.",
    highlights: [
      "Task & To-Do Management: Membuat, memperbarui, dan memantau status tugas harian secara terorganisasi melalui antarmuka tugas harian.",
      "Project Organization: Mengelompokkan aktivitas dan daftar pekerjaan ke dalam modul proyek tersendiri guna mempermudah pemantauan progres.",
      "Integrated Notes Module: Menyediakan fitur pencatatan terintegrasi untuk menyimpan dokumentasi, ide, atau catatan tambahan terkait proyek.",
      "Local Storage Persistence: Menggunakan mekanisme penyimpanan data lokal untuk menjaga privasi serta performa baca-tulis data yang responsif.",
      "Clean Architecture & GetX State Management: Menerapkan pemisahan layer Domain, Data, dan Presentation yang dipadukan dengan kontroler GetX untuk arsitektur kode yang teruji, reaktif, dan modular.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "GetX",
      "Local Storage",
      "Android",
      "iOS",
      "macOS",
      "Windows",
      "Linux",
      "Web",
    ],
    demoUrl: undefined,
    githubUrl: "https://github.com/fayydhr/task-management-app",
  },
  {
    id: "novelid",
    number: "05",
    title: "NOVELID — PUBLISHED ON PLAY STORE",
    subtitle: "Indonesian Translated Novel Reading App",
    category: "Mobile App / Play Store",
    image: "/images/Gemini_Generated_Image_z8pqs5z8pqs5z8pq.jpeg",
    year: "2025–2026",
    status: "PUBLISHED ON PLAY STORE",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.novelidn.app",
    demoUrl: "https://play.google.com/store/apps/details?id=com.novelidn.app",
    description:
      "NovelID offers a modern, convenient Indonesian translated novel reading experience specifically designed for digital novel lovers. With a clean interface and intuitive features, NovelID is your best reading companion in the palm of your hand.",
    highlights: [
      "The Most Complete Collection: Thousands of translated titles across Fantasy, Romance, Action, Martial Arts, Sci-Fi, and 15+ genres.",
      "Optimal Reading Experience: Elegant dark mode interface designed to reduce eye fatigue during prolonged reading.",
      "Key Features: Automatic reading progress saving, bookmarks, history tracking, smart search, and instant chapter update notifications.",
      "Guaranteed Privacy: 100% local device data storage — no personal data tracking or external server uploads.",
      "Lightweight & Account-Free: Fast performance with data saving mode; usable without registering an account.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Google Play Store",
      "Local Storage",
      "Clean Architecture",
      "Dark Mode Engine",
    ],
    sections: [
      {
        title: "THE MOST COMPLETE NOVEL COLLECTION",
        content:
          "Explore thousands of translated novel titles from various popular genres. From Fantasy, Romance, Action, Adventure, Martial Arts, Sci-Fi, to Slice of Life — all available in one app. Discover new stories every day with the latest chapter updates.",
      },
      {
        title: "OPTIMAL READING EXPERIENCE",
        content:
          "NovelID is designed with a primary focus on reading comfort. The elegant dark mode interface helps reduce eye fatigue during prolonged reading. Every interface element is carefully designed to allow you to fully focus on the story.",
      },
      {
        title: "KEY FEATURES",
        content: [
          "A collection of thousands of translated Indonesian novels",
          "15+ genres available with a comprehensive filter system",
          "Automatically saves reading progress",
          "Favorites and bookmarks for quick access",
          "Neatly recorded reading history",
          "Search by title, genre, and status",
          "Latest chapter update notifications",
          "Modern appearance with dark mode",
          "Lightweight performance and data-saving data",
          "Can be used without registering an account",
        ],
      },
      {
        title: "GUARANTEED PRIVACY",
        content:
          "All user data is stored locally on your device. NovelID does not collect, upload, or share personal data with external servers or third parties. You have full control over your data.",
      },
      {
        title: "AVAILABLE GENRES",
        content:
          "Action · Adventure · Comedy · Drama · Fantasy · Historical · Horror · Martial Arts · Mystery · Romance · Sci-Fi · Slice of Life · Supernatural · Tragedy · and others",
      },
    ],
    githubUrl: undefined,
  },
];

export const SERVICES: Service[] = [
  {
    id: "mobile-dev",
    iconName: "smartphone",
    title: "MOBILE",
    description: "Building polished, high-performance cross-platform apps with Flutter & Dart for iOS and Android.",
    skills: ["Flutter & Dart", "Firebase & GetX", "Clean Architecture", "Google Play / App Store"],
  },
  {
    id: "web-dev",
    iconName: "web",
    title: "WEB DEV",
    description: "Building responsive, accessible, and performant web applications.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Web Vitals Optimization"],
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
