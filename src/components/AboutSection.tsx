import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile-circular.jpg";

const stats = [
  { value: "07", label: "Years of Experience" },
  { value: "5.00", label: "Rating", stars: true },
  { value: "120+", label: "Worldwide" },
  { value: "03", label: "Awards" },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {value}{suffix}
    </motion.span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm text-muted-foreground uppercase tracking-wider mb-8"
        >
          About Me
        </motion.span>

        {/* Main heading with word-by-word animation */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl md:text-4xl lg:text-5xl font-display leading-tight max-w-4xl mb-16"
        >
          {"UI/UX DESIGNER CRAFTING INTUITIVE, USER-FRIENDLY EXPERIENCES THROUGH ".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-primary inline-block mr-2"
          >
            WIREFRAMING, PROTOTYPING,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="inline-block mr-2"
          >
            &
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="text-primary inline-block"
          >
            VISUAL DESIGN.
          </motion.span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              {stat.stars && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex justify-center gap-1 mb-2"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                      className="w-4 h-4 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </motion.div>
              )}
              <p className="text-4xl md:text-6xl font-display font-bold mb-2">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}

          {/* Center profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            className="absolute left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg"
            >
              <img
                src={profileImage}
                alt="Jessa Kinda"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
