import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "MORE ABOUT ME?",
    answer: "I'm a passionate UI/UX designer with 7+ years of experience creating beautiful, functional digital products. I specialize in branding, product design, and user experience.",
  },
  {
    id: 2,
    question: "HOW CAN I CONTACT WITH YOU?",
    answer: "You can reach me via my email at hello@jessakinda.com or through the contact form below. I typically respond within 24 hours.",
  },
  {
    id: 3,
    question: "HOW MUCH FOR COST?",
    answer: "Project costs vary based on scope and complexity. I offer custom quotes after understanding your specific needs. Feel free to reach out for a free consultation.",
  },
  {
    id: 4,
    question: "WHICH TYPE OF SERVICES YOU PROVIDE?",
    answer: "I provide comprehensive design services including UI/UX design, branding, web design, mobile app design, and creative direction for startups and established businesses.",
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
