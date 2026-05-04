import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { blogPosts } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const categories = ["All", "Pakistan Agencies", "Montreal & Quebec", "Dev Notes"] as const;

const Blog = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  useSEO({
    title: "Riasat's Ravings | Blog for Agencies & Local Businesses",
    description:
      "Honest essays on web development for Pakistani marketing agencies and local businesses in Montreal & Quebec — by Muhammad Riasat Ali (Dev Riasat).",
    canonical: "https://riasat.lovable.app/blog",
    image: "https://riasat.lovable.app/og-image.jpg",
    imageAlt: "Riasat's Ravings — blog by Muhammad Riasat Ali",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://riasat.lovable.app/blog#blog",
        name: "Riasat's Ravings",
        url: "https://riasat.lovable.app/blog",
        description:
          "Essays on web development, agency outsourcing, and local SEO for Pakistan and Quebec.",
        inLanguage: ["en", "fr-CA"],
        author: { "@id": "https://riasat.lovable.app/#person" },
        publisher: { "@id": "https://riasat.lovable.app/#person" },
        isPartOf: { "@id": "https://riasat.lovable.app/#website" },
        blogPost: blogPosts.map((p) => ({
          "@type": "BlogPosting",
          "@id": `https://riasat.lovable.app/blog/${p.slug}#post`,
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          dateModified: p.date,
          inLanguage: p.translations?.fr ? ["en", "fr-CA"] : "en",
          articleSection: p.category,
          keywords: p.tags.join(", "),
          url: `https://riasat.lovable.app/blog/${p.slug}`,
          image: "https://riasat.lovable.app/og-image.jpg",
          author: { "@id": "https://riasat.lovable.app/#person" },
          publisher: { "@id": "https://riasat.lovable.app/#person" },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://riasat.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://riasat.lovable.app/blog" },
        ],
      },
    ],
  });

  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-full font-semibold mb-4">
              <Flame className="w-3 h-3" />
              Spicy takes, no fluff
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Riasat's <span className="italic text-primary">Ravings</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Field notes from building websites for Pakistani agencies and Quebec local
              businesses — written between client calls, not by a content mill.
            </p>
          </motion.div>

          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-hover)] transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition-colors"
                >
                  Read the post
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;
