import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  },
  {
    id: 2,
    title: "BRAND DESIGN",
    image: portfolio2,
    category: "Branding",
  },
  {
    id: 3,
    title: "APP DESIGN",
    image: portfolio3,
    category: "Mobile",
  },
  {
    id: 4,
    title: "APP DESIGN",
    image: portfolio4,
    category: "Development",
  },
];

const PortfolioSection = () => {
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
    </section>
  );
};

export default PortfolioSection;
