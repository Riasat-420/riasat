// Shared project data used by both homepage and full portfolio page
import portfolioMwwa from "@/assets/portfolio-mwwa.jpg";
import portfolioBrewton from "@/assets/portfolio-brewton.jpg";
import portfolioAberas from "@/assets/portfolio-aberas.jpg";
import portfolioFlistar from "@/assets/portfolio-flistar.jpg";
import portfolioInnogos from "@/assets/portfolio-innogos.jpg";
import portfolioCamali from "@/assets/portfolio-camali.jpg";
import portfolioClinic from "@/assets/portfolio-clinic.jpg";
import portfolioAvora from "@/assets/portfolio-avora.jpg";
import portfolioIrfanijaz from "@/assets/portfolio-irfanijaz.jpg";
import portfolioCamaligrafix from "@/assets/portfolio-camaligrafix.jpg";
import portfolioAsteroidqa from "@/assets/portfolio-asteroidqa.jpg";
import portfolioYeswork from "@/assets/portfolio-yeswork.jpg";
import portfolioBaigassociates from "@/assets/portfolio-baigassociates.jpg";

export const projects = [
  {
    id: 1,
    title: "MUSLIM WELFARE ASSOCIATION",
    image: portfolioMwwa,
    category: "WordPress",
    description: "A comprehensive charity and community organization website built with WordPress. Features donation system, event management, and member portal with modern design and optimized performance.",
    client: "MWA UK",
    year: "2024",
    services: ["WordPress", "Custom Theme", "Donation Integration"],
    url: "http://mwwa.uk/",
  },
  {
    id: 2,
    title: "BREWTON COFFEE BRAND",
    image: portfolioBrewton,
    category: "eCommerce",
    description: "Premium coffee brand eCommerce website with WooCommerce integration. Custom product pages, subscription features, and seamless checkout experience for a growing coffee business.",
    client: "Brewton PK",
    year: "2024",
    services: ["WooCommerce", "Brand Design", "Payment Integration"],
    url: "https://brewtonpk.com/",
  },
  {
    id: 3,
    title: "ABERAS CONSTRUCTION",
    image: portfolioAberas,
    category: "Business",
    description: "Professional construction company website for Montreal-based firm. Showcases services, project portfolio, and contact forms with bilingual support and mobile-first design.",
    client: "Aberas Construction",
    year: "2024",
    services: ["WordPress", "Elementor", "SEO Optimization"],
    url: "https://aberasconstruction.ca/",
  },
  {
    id: 4,
    title: "FLISTAR EV BRAND",
    image: portfolioFlistar,
    category: "Corporate",
    description: "Electric vehicle brand website for European market. Features product showcases, dealer locator, and modern animations highlighting the innovative EV technology.",
    client: "Flistar EU",
    year: "2024",
    services: ["React", "API Integration", "Performance Optimization"],
    url: "https://flistar.eu/",
  },
  {
    id: 5,
    title: "INNOGOS DIGITAL AGENCY",
    image: portfolioInnogos,
    category: "Agency",
    description: "Full-service digital agency website with service showcases, case studies, and team profiles. Built for lead generation with integrated CRM and analytics.",
    client: "Innogos",
    year: "2024",
    services: ["WordPress", "Custom Development", "CRM Integration"],
    url: "https://innogos.com/",
  },
  {
    id: 6,
    title: "CAMALI BIJOUX",
    image: portfolioCamali,
    category: "eCommerce",
    description: "Luxury jewelry eCommerce store with elegant product displays, zoom functionality, and secure payment processing. Custom WooCommerce theme with advanced filtering.",
    client: "Camali's Gold Shop",
    year: "2023",
    services: ["WooCommerce", "Custom Theme", "Payment Gateway"],
    url: "https://camalibijoux.com/",
  },
  {
    id: 7,
    title: "CLINIC LUQI",
    image: portfolioClinic,
    category: "Healthcare",
    description: "Massage and wellness center website in Montreal. Features online booking system, service catalog, and therapist profiles with HIPAA-compliant contact forms.",
    client: "Clinic Luqi",
    year: "2023",
    services: ["WordPress", "Booking System", "Multilingual"],
    url: "https://clinicluqi.com/",
  },
  {
    id: 8,
    title: "AVORA GROUP",
    image: portfolioAvora,
    category: "Construction",
    description: "Design and construction specialists website for Australian market. Project galleries, service pages, and quote request system with modern aesthetics.",
    client: "Avora Group Australia",
    year: "2023",
    services: ["WordPress", "ACF", "Custom Post Types"],
    url: "https://avoragroup.com.au/",
  },
  {
    id: 9,
    title: "IRFAN IJAZ CONSULTING",
    image: portfolioIrfanijaz,
    category: "Business",
    description: "Google Search Ads specialist and business consulting website. Optimized landing page strategy with conversion-focused design and lead generation integration.",
    client: "Irfan Ijaz",
    year: "2024",
    services: ["WordPress", "Landing Page", "Google Ads"],
    url: "https://irfanijaz.com/",
  },
  {
    id: 10,
    title: "CAMALI GRAFIX",
    image: portfolioCamaligrafix,
    category: "Agency",
    description: "Creative design agency website for Canadian client Camali Grafix. Portfolio showcasing graphic design, branding, and creative services with a vibrant visual identity.",
    client: "Camali Grafix, Canada",
    year: "2024",
    services: ["WordPress", "Custom Theme", "Portfolio"],
    url: "http://camaligrafix.com/",
  },
  {
    id: 11,
    title: "ASTEROID QA",
    image: portfolioAsteroidqa,
    category: "Consulting",
    description: "Landing page strategy and business consulting website for Asteroid QA. Clean, high-converting design built to drive qualified leads and showcase consulting services.",
    client: "Asteroid QA",
    year: "2024",
    services: ["WordPress", "Landing Page", "SEO"],
    url: "https://www.asteroidqa.com/",
  },
  {
    id: 12,
    title: "PACIFY SOLAR LIGHTS",
    image: portfolioYeswork,
    category: "eCommerce",
    description: "Solar lights and outdoor lighting eCommerce store. Full WooCommerce setup with product catalog, filters, and payment integration for a growing solar energy brand.",
    client: "Yeswork Shop",
    year: "2024",
    services: ["WooCommerce", "Custom Theme", "Product Management"],
    url: "https://yeswork.shop/",
  },
  {
    id: 13,
    title: "BAIG ASSOCIATES",
    image: portfolioBaigassociates,
    category: "Legal",
    description: "Visa and work permit consultancy website. Professional design tailored for immigration services, featuring service pages, case evaluation forms, and multilingual support.",
    client: "Baig Associates",
    year: "2024",
    services: ["WordPress", "Custom Forms", "Multilingual"],
    url: "https://baigassociates.live/",
  },
];

export type Project = typeof projects[0];
