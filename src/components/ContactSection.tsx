import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const contactInfoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[clamp(5rem,20vw,15rem)] font-display font-bold text-muted-foreground/10 whitespace-nowrap">
          CONTACT
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span
              variants={itemVariants}
              className="text-sm text-muted-foreground uppercase tracking-wider block"
            >
              Get in Touch
            </motion.span>
            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold mt-4 mb-8"
            >
              LET'S TALK
            </motion.h3>
            <motion.div variants={contactInfoVariants} className="space-y-4 text-muted-foreground">
              {[
                { icon: "📍", text: "California, USA" },
                { icon: "✉️", text: "hello@jessakinda.com" },
                { icon: "📞", text: "+1 (555) 123-4567" },
              ].map((item, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
                  >
                    {item.icon}
                  </motion.span>
                  {item.text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-foreground text-background rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
