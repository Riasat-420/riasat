import { motion } from "framer-motion";
import heroImage from "@/assets/hero-silhouette.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-display text-[clamp(3rem,12vw,8rem)] leading-none tracking-tight">
                <span className="text-muted-foreground/30">DES</span>
                <span className="relative">
                  IGNER
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-body">
                    freelance
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6"
            >
              <p className="heading-italic text-4xl md:text-5xl text-primary">
                Jessa <span className="text-foreground">&</span> Kinda
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Hi, I am Jessa Kinda
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                BRANDING,<br />
                PRODUCT UI/UX<br />
                & DESIGN.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                View Portfolio
              </a>
            </motion.div>
          </div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Creative Designer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 top-1/4 bg-card p-4 rounded-lg shadow-lg max-w-[200px]"
            >
              <p className="text-sm text-muted-foreground mb-1">7+ Years of Expertise, Award-Winning Creative Designer in California, USA</p>
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
