import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
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

const projects = [
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
type Project = typeof projects[0];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-none text-muted-foreground/20 mb-16"
        >
          LATEST PORTFOLIO
        </motion.h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-display font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 -mt-12 relative">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4">
                  {selectedProject.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Project Details Grid */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Client</span>
                    <p className="text-foreground font-medium mt-1">{selectedProject.client}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Year</span>
                    <p className="text-foreground font-medium mt-1">{selectedProject.year}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Services</span>
                    <p className="text-foreground font-medium mt-1">{selectedProject.services.join(", ")}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
