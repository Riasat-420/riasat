import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, Github } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    id: 1,
    title: "PRODUCT DESIGN",
    image: portfolio1,
    category: "UI/UX",
    description: "A comprehensive product design project focusing on user experience and interface design. Created intuitive workflows and visually stunning interfaces that increased user engagement by 40%.",
    client: "Tech Startup Inc.",
    year: "2024",
    services: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    id: 2,
    title: "BRAND DESIGN",
    image: portfolio2,
    category: "Branding",
    description: "Complete brand identity development including logo design, color palette, typography, and brand guidelines. Delivered a cohesive visual language that resonates with the target audience.",
    client: "Creative Agency",
    year: "2024",
    services: ["Logo Design", "Brand Strategy", "Visual Identity"],
  },
  {
    id: 3,
    title: "APP DESIGN",
    image: portfolio3,
    category: "Mobile",
    description: "Mobile application design for iOS and Android platforms. Focused on creating a seamless user experience with modern design patterns and accessibility in mind.",
    client: "FinTech Corp",
    year: "2023",
    services: ["Mobile Design", "Interaction Design", "User Testing"],
  },
  {
    id: 4,
    title: "WEB DEVELOPMENT",
    image: portfolio4,
    category: "Development",
    description: "Full-stack web development project with React and Node.js. Built a scalable e-commerce platform with real-time features and optimized performance.",
    client: "E-Commerce Brand",
    year: "2023",
    services: ["Frontend Dev", "Backend Dev", "Database Design"],
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
                  <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
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
