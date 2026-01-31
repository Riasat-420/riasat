import { motion } from "framer-motion";
import profileImage from "@/assets/profile-circular.jpg";

const stats = [
  { value: "07", label: "Years of Experience" },
  { value: "5.00", label: "Rating", stars: true },
  { value: "120+", label: "Worldwide" },
  { value: "03", label: "Awards" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm text-muted-foreground uppercase tracking-wider mb-8"
        >
          About Me
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-display leading-tight max-w-4xl mb-16"
        >
          UI/UX DESIGNER CRAFTING INTUITIVE, USER-FRIENDLY EXPERIENCES THROUGH{" "}
          <span className="text-primary">WIREFRAMING, PROTOTYPING,</span> &{" "}
          <span className="text-primary">VISUAL DESIGN.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {stat.stars && (
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              )}
              <p className="text-4xl md:text-6xl font-display font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}

          {/* Center profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
              <img
                src={profileImage}
                alt="Jessa Kinda"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
