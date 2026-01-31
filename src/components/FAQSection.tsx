import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "WHAT WEB DEVELOPMENT SERVICES DO YOU OFFER?",
    answer: "I specialize in WordPress development (custom themes, Elementor, ACF, speed optimization), React & Node.js full-stack applications, API integrations, WooCommerce eCommerce solutions, and SaaS platform development with authentication, billing, and cloud infrastructure.",
  },
  {
    id: 2,
    question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
    answer: "Project timelines vary based on complexity. A simple WordPress site takes 2-3 weeks, while custom React applications or eCommerce stores typically take 4-8 weeks. SaaS platforms with advanced features may take 2-3 months. I'll provide a detailed timeline after understanding your requirements.",
  },
  {
    id: 3,
    question: "WHAT IS YOUR PRICING STRUCTURE?",
    answer: "I offer flexible project-based pricing tailored to your needs. Simple landing pages and basic WordPress sites start from $150-200. More complex projects like eCommerce stores, custom React applications, and SaaS platforms are priced based on scope and requirements. Contact me for a free consultation and personalized quote.",
  },
  {
    id: 4,
    question: "DO YOU PROVIDE ONGOING MAINTENANCE AND SUPPORT?",
    answer: "Yes! I offer monthly maintenance packages that include security updates, performance monitoring, backups, and priority support. This ensures your website stays secure, fast, and up-to-date with the latest technologies.",
  },
  {
    id: 5,
    question: "CAN YOU HELP WITH EXISTING WEBSITES?",
    answer: "Absolutely. I work on redesigns, performance optimization, bug fixes, and adding new features to existing sites. Whether it's speeding up a slow WordPress site or adding payment integrations, I can help improve your current setup.",
  },
  {
    id: 6,
    question: "WHAT IS YOUR DEVELOPMENT PROCESS?",
    answer: "My process includes: 1) Discovery call to understand your goals, 2) Proposal with timeline and cost, 3) Design mockups for approval, 4) Development with regular progress updates, 5) Testing and revisions, 6) Launch and training. You'll be involved at every stage.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          QUESTION & ANSWERS
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-sm md:text-base font-semibold group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
