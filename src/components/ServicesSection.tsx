import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "BRANDING",
    description: "Creating distinctive brand identities that resonate with your target audience and set you apart from competitors.",
  },
  {
    id: 2,
    title: "DESIGN",
    description: "Efficient, knowledgeable, & smooth experience. Highly recommended.",
    isDefault: true,
  },
  {
    id: 3,
    title: "MARKETING",
    description: "Strategic digital marketing solutions to grow your online presence and reach your business goals.",
  },
  {
    id: 4,
    title: "CODE",
    description: "Clean, maintainable code that brings designs to life with modern web technologies.",
  },
];

const ServicesSection = () => {
  const [openId, setOpenId] = useState<number | null>(2);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex justify-between items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(4rem,15vw,12rem)] font-display font-bold leading-none text-muted-foreground/20"
          >
            SERVICE
          </motion.h2>
          <span className="text-sm text-muted-foreground uppercase tracking-wider mt-4">
            Our Services
          </span>
        </div>

        {/* Services accordion */}
        <div className="max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  {openId === service.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openId === service.id ? "auto" : 0,
                  opacity: openId === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-muted-foreground max-w-xl">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
