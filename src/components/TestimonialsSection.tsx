import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    quote: "Extraordinary performance! Quick solutions. Highly recommended.",
    author: "R.B THOMAS",
    role: "Chicago City, CEO",
    image: testimonial1,
  },
  {
    id: 2,
    quote: "Get Quick solutions with great quality—a recommendation that's unequivocal",
    author: "EMMA COLLINS",
    role: "Los Angeles, UX Lead",
    image: testimonial2,
  },
  {
    id: 3,
    quote: "Professional, creative, & truly results-driven!",
    author: "DAVID MILLER",
    role: "San Francisco",
    image: testimonial3,
  },
];

const clientLogos = ["PWA", "Vline", "TRAVOR", "ebay", "Saba"];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex justify-between items-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground uppercase tracking-wider"
          >
            Client Feedback
          </motion.span>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#"
            className="text-sm text-primary hover:underline"
          >
            View All →
          </motion.a>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
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
                <blockquote className="text-2xl md:text-3xl font-display leading-tight mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Happy Clients
          </p>
          <div className="flex flex-wrap gap-12 items-center">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-2xl font-display font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
