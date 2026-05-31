import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "WORDPRESS DEVELOPMENT",
    description: "Custom WordPress themes, Elementor builds, ACF, CPT, and speed optimization. From simple blogs to complex membership platforms and enterprise sites.",
  },
  {
    id: 2,
    title: "REACT & NODE.JS",
    description: "Modern full-stack applications with React frontends and Node.js backends. Headless CMS setups, API development, and scalable architectures.",
    isDefault: true,
  },
  {
    id: 3,
    title: "API INTEGRATIONS",
    description: "Seamless third-party integrations including payment gateways, CRMs, automation tools, and custom API development for data-driven solutions.",
  },
  {
    id: 4,
    title: "ECOMMERCE SOLUTIONS",
    description: "WooCommerce stores, custom checkout flows, payment integrations, inventory management, and conversion-optimized shopping experiences.",
  },
  {
    id: 5,
    title: "SAAS PLATFORMS",
    description: "End-to-end SaaS development with user authentication, subscription billing, multi-tenancy, dashboards, and scalable cloud infrastructure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  const [openId, setOpenId] = useState<number | null>(2);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="skeu-headline text-[clamp(3rem,12vw,9rem)] font-display font-bold leading-none text-muted-foreground/20"
          >
            SERVICE
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground uppercase tracking-wider mt-4"
          >
            My Services
          </motion.span>
        </div>

        {/* Services accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="border-b border-border"
            >
              <motion.button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                whileHover={{ x: 10 }}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <motion.span
                  animate={{ rotate: openId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  {openId === service.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </motion.span>
              </motion.button>
              
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
