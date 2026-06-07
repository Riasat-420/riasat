import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";
import logo from "@/assets/logo.png";
import LazyImage from "@/components/LazyImage";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useSEO({
    title: "Portfolio | WordPress, React & WooCommerce Projects — Dev Riasat",
    description: "Explore 100+ web projects by Muhammad Riasat Ali — WordPress, React, WooCommerce & SaaS builds for international clients across UK, Canada, Europe & Australia.",
    canonical: "https://riasat.lovable.app/portfolio",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://riasat.lovable.app/portfolio#webpage",
      "url": "https://riasat.lovable.app/portfolio",
      "name": "Portfolio — Dev Riasat",
      "isPartOf": { "@id": "https://riasat.lovable.app/#website" },
      "about": { "@id": "https://riasat.lovable.app/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://riasat.lovable.app/" },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://riasat.lovable.app/portfolio" }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": projects.length,
        "itemListElement": projects.slice(0, 10).map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p.title,
          "url": p.url
        }))
      }
    },
  });


  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <LazyImage src={logo} alt="Dev Riasat" width={240} height={80} priority className="h-10 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Page header */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-none text-muted-foreground/20 select-none"
            >
              PORTFOLIO
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-2 left-0"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">All Projects</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                {projects.length} Projects Delivered
              </h2>
            </motion.div>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">{project.category}</span>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className="text-lg font-display font-bold text-primary-foreground leading-tight">{project.title}</h3>
                      <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-2">
                        <ArrowRight className="w-4 h-4 text-primary-foreground" />
                      </span>
                    </div>
                  </div>
                  {/* Category pill always visible */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider bg-background/80 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

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
              <div className="relative aspect-video">
                <LazyImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
              </div>
              <div className="p-6 md:p-10 -mt-12 relative">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{selectedProject.description}</p>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Client</span>
                    <p className="font-medium mt-1">{selectedProject.client}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Year</span>
                    <p className="font-medium mt-1">{selectedProject.year}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Services</span>
                    <p className="font-medium mt-1">{selectedProject.services.join(", ")}</p>
                  </div>
                </div>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium w-fit hover:bg-foreground/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
