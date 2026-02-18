import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Web Developer & Designer",
    company: "Camali Grafix",
    location: "Montreal, Canada (Remote)",
    period: "May 2024 – Present",
    description:
      "Experienced WordPress developer creating dynamic websites for international and Pakistani clients. Custom theme & plugin development, website optimization, and troubleshooting.",
    current: true,
  },
  {
    role: "Junior WordPress Developer",
    company: "Devcubix",
    location: "Islamabad, Pakistan",
    period: "Jan 2025 – Apr 2025",
    description:
      "Delivered projects including converting Figma, PSD & HTML designs to Elementor, Gutenberg and other page builders. Plugin and theme customization as per client requirements.",
  },
  {
    role: "Amazon Ecom Sales Specialist",
    company: "Hyper Future",
    location: "Islamabad, Pakistan",
    period: "Apr 2025 – Sep 2025",
    description:
      "Managed Amazon listings, product hunting, and PPC campaign optimization as a full-time Ecom Sales Specialist.",
  },
  {
    role: "Freelance WordPress Developer",
    company: "Self-Employed",
    location: "Remote – Worldwide",
    period: "Nov 2020 – Present",
    description:
      "Sole freelancer delivering PHP/Laravel SaaS platforms, fully customized WordPress sites, custom themes & plugin development for international clients.",
    current: true,
  },
];

const skills = [
  { category: "CMS & Page Builders", items: ["WordPress", "Elementor", "Divi", "WP Bakery", "Gutenberg", "Avada"] },
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs", "GraphQL"] },
  { category: "eCommerce", items: ["WooCommerce", "Shopify", "Custom Checkout Flows", "Payment Gateways"] },
  { category: "Database & DevOps", items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Docker", "AWS", "Vercel"] },
  { category: "Other", items: ["SEO Optimization", "WordPress Security", "ACF", "CPT", "Speed Optimization"] },
];

const certifications = [
  {
    title: "Experience Letter",
    issuer: "Camali Grafix, Canada",
    date: "November 2024",
  },
  {
    title: "Internship Completion – Frontend Development",
    issuer: "Octanet Pvt Ltd",
    date: "May 2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Large BG text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[clamp(4rem,18vw,14rem)] font-display font-bold text-muted-foreground/10 whitespace-nowrap select-none">
          RESUME
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-none text-muted-foreground/20"
          >
            EXPERIENCE
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground uppercase tracking-wider mt-4"
          >
            My Journey
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-wide">Work Experience</h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative space-y-0"
            >
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    className={`absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-2 ${
                      exp.current
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    } flex items-center justify-center`}
                  >
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </motion.div>

                  <div className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-base">{exp.role}</h4>
                      {exp.current && (
                        <span className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium mb-0.5">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span>{exp.location}</span>
                      <span>·</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column: Education + Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wide">Education</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-display font-bold">English Literature (Bachelor)</h4>
                <p className="text-primary text-sm font-medium mt-0.5">University of Sargodha – Khushab</p>
                <p className="text-xs text-muted-foreground mt-1">Nov 2020 – Present</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Alongside formal education, continuously self-learning web technologies, frameworks, and best practices through platforms like GitHub, online courses, and real-world project experience.
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wide">Certifications</h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{cert.title}</h4>
                      <p className="text-primary text-xs mt-0.5">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* GitHub link */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              href="https://github.com/riasat-420"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Open Source & Publications</p>
                <p className="text-xs text-muted-foreground mt-0.5">github.com/riasat-420</p>
                <p className="text-xs text-muted-foreground">Publicly available plugins & programs (client projects excluded)</p>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold uppercase tracking-wide">Skills & Technologies</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
