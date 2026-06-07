import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import LazyImage from "@/components/LazyImage";

// Show only first 4 on homepage
const featuredProjects = projects.slice(0, 4);

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-none text-muted-foreground/20"
          >
            PORTFOLIO
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 pb-2"
          >
            <span className="text-sm text-muted-foreground">{projects.length}+ projects delivered</span>
          </motion.div>
        </div>

        {/* 4-project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
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
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">{project.category}</span>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-display font-bold text-primary-foreground">{project.title}</h3>
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-2">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </span>
                </div>
              </div>
              {/* Category pill */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase tracking-wider bg-background/80 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
          >
            View All {projects.length} Projects
            <motion.span
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              whileHover={{ rotate: -45 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
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
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{selectedProject.description}</p>
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
    </section>
  );
};

export default PortfolioSection;
