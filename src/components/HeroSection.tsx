import { motion } from "framer-motion";
import profileImage from "@/assets/riasat-profile.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <h1 className="heading-display text-[clamp(2rem,8vw,6rem)] leading-none tracking-tight">
                <span className="text-muted-foreground/30">FULL</span>
                <span className="relative inline-block">
                  -STACK
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-body whitespace-nowrap"
                  >
                    developer
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 md:mt-6">
              <p className="heading-italic text-2xl sm:text-3xl md:text-5xl text-primary">
                Muhammad <span className="text-foreground">Riasat</span> Ali
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 md:mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Hi, I am Riasat Ali
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                WEB DEVELOPMENT,<br />
                SAAS PLATFORMS<br />
                & DIGITAL SOLUTIONS.
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 md:mt-8 flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-foreground text-background rounded-full font-medium text-sm md:text-base hover:bg-foreground/90 transition-colors"
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none mx-auto"
          >
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src={profileImage}
                alt="Muhammad Riasat Ali - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating info card - hidden on mobile, repositioned on tablet+ */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
              className="hidden md:block absolute -right-4 lg:-right-8 bottom-8 lg:bottom-16 bg-card p-4 rounded-lg shadow-lg max-w-[200px] cursor-pointer"
            >
              <p className="text-sm text-muted-foreground mb-1">Full-Stack Developer specializing in WordPress, React, Node.js & scalable architectures</p>
              <a href="#about" className="text-primary text-sm font-medium hover:underline">
                View Profile →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
