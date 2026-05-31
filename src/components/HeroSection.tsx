import { motion } from "framer-motion";
import profileImage from "@/assets/riasat-profile.png";
import { ShieldCheck } from "lucide-react";

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
    <section id="home" className="relative min-h-screen pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-20 overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <h1 className="heading-display skeu-headline text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] tracking-tight">
                <span className="text-muted-foreground/40 block sm:inline">FULL</span>
                <span className="relative inline-block ml-0 sm:-ml-1">
                  -STACK
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs px-2.5 md:px-3 py-1 rounded-full font-body font-medium whitespace-nowrap shadow-md"
                  >
                    developer
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 md:mt-8">
              <p className="heading-italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-wide">
                Muhammad <span className="text-foreground">Riasat</span> Ali
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                OEC & ICMPD Govt. Certified
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 md:mt-10">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
                Hi, I am Riasat Ali
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight">
                WEB DEVELOPMENT,<br />
                SAAS PLATFORMS<br />
                & DIGITAL SOLUTIONS.
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 md:mt-10 flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-foreground text-background rounded-full font-medium text-sm md:text-base hover:bg-foreground/90 transition-colors shadow-lg"
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
