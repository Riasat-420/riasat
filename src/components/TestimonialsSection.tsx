import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

// Real client logos
import innogosLogo from "@/assets/logos/innogos-logo.png";
import camaliLogo from "@/assets/logos/camali-logo.png";
import avoraLogo from "@/assets/logos/avora-logo.png";
import clinicLogo from "@/assets/logos/clinic-logo.png";

// Portfolio images as fallbacks for clients without standalone logos
import portfolioMwwa from "@/assets/portfolio-mwwa.jpg";
import portfolioBrewton from "@/assets/portfolio-brewton.jpg";
import portfolioAberas from "@/assets/portfolio-aberas.jpg";
import portfolioFlistar from "@/assets/portfolio-flistar.jpg";

const testimonials = [
  {
    id: 1,
    quote: "Riasat delivered our charity website on time with excellent donation integration. The site is fast, mobile-friendly, and our member engagement has increased significantly.",
    author: "ABDUL RAHMAN",
    role: "Director, Muslim Welfare Association UK",
    image: testimonial1,
  },
  {
    id: 2,
    quote: "Our coffee brand's eCommerce store exceeded expectations. The WooCommerce setup is seamless, and sales have grown 40% since launch. Highly professional work!",
    author: "HASSAN ALI",
    role: "Founder, Brewton Coffee PK",
    image: testimonial2,
  },
  {
    id: 3,
    quote: "The bilingual construction website perfectly showcases our Montreal projects. Riasat understood our vision and delivered a site that generates quality leads consistently.",
    author: "MARC DUBOIS",
    role: "Owner, Aberas Construction Canada",
    image: testimonial3,
  },
];

const clientLogos = [
  { name: "MWWA", image: portfolioMwwa, url: "http://mwwa.uk/" },
  { name: "Brewton", image: portfolioBrewton, url: "https://brewtonpk.com/" },
  { name: "Aberas", image: portfolioAberas, url: "https://aberasconstruction.ca/" },
  { name: "Flistar", image: portfolioFlistar, url: "https://flistar.eu/" },
  { name: "Innogos", image: innogosLogo, url: "https://innogos.com/", isLogo: true },
  { name: "Camali", image: camaliLogo, url: "https://camalibijoux.com/", isLogo: true },
  { name: "Clinic Luqi", image: clinicLogo, url: "https://clinicluqi.com/", isLogo: true },
  { name: "Avora", image: avoraLogo, url: "https://avoragroup.com.au/", isLogo: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const testimonialVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const TestimonialsSection = () => {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex justify-between items-center mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground uppercase tracking-wider"
          >
            Client Feedback
          </motion.span>
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
            href="#portfolio"
            className="text-sm text-primary hover:underline"
          >
            View Portfolio →
          </motion.a>
        </div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialVariants}
              whileHover={{ x: 10 }}
              className="flex flex-col md:flex-row gap-8 items-start cursor-pointer"
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-1 mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                      className="w-4 h-4 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <blockquote className="text-2xl md:text-3xl font-display leading-tight mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Happy Clients
          </p>
          
          {/* Infinite scrolling carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <a
                  key={`${logo.name}-${index}`}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative overflow-hidden rounded-xl border border-border/50 p-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg ${
                      logo.isLogo 
                        ? "h-20 w-40 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-200" 
                        : "h-20 w-36 bg-background/50 backdrop-blur-sm"
                    }`}
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`transition-all duration-300 ${
                        logo.isLogo 
                          ? "h-12 w-auto object-contain opacity-90 group-hover:opacity-100" 
                          : "w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100"
                      }`}
                    />
                    {!logo.isLogo && (
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent rounded-lg flex items-end p-2">
                        <span className="text-xs font-semibold text-primary-foreground">
                          {logo.name}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
