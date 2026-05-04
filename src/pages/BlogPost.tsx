import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  useSEO({
    title: post
      ? `${post.title} | Riasat's Ravings`
      : "Post not found | Riasat's Ravings",
    description: post?.excerpt ?? "Blog post not found.",
    canonical: `https://riasat.lovable.app/blog/${slug ?? ""}`,
    type: "article",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `https://riasat.lovable.app/blog/${post.slug}#post`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "en",
          keywords: post.tags.join(", "),
          articleSection: post.category,
          mainEntityOfPage: `https://riasat.lovable.app/blog/${post.slug}`,
          author: { "@id": "https://riasat.lovable.app/#person" },
          publisher: { "@id": "https://riasat.lovable.app/#person" },
          isPartOf: { "@id": "https://riasat.lovable.app/blog#blog" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://riasat.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://riasat.lovable.app/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://riasat.lovable.app/blog/${post.slug}` },
            ],
          },
        }
      : undefined,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Riasat's Ravings
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1 text-primary font-semibold">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {post.content.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold mt-10 mb-2">
                    {block.text}
                  </h2>
                );
              if (block.type === "p")
                return (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/90">
                    {block.text}
                  </p>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 text-foreground/90">
                    {block.items.map((it, j) => (
                      <li key={j} className="leading-relaxed">{it}</li>
                    ))}
                  </ul>
                );
              if (block.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary pl-5 py-2 italic font-display text-xl text-foreground/90 bg-primary/5 rounded-r-lg"
                  >
                    "{block.text}"
                  </blockquote>
                );
              return null;
            })}
          </motion.div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                #{t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <h3 className="font-display text-xl font-semibold mb-2">Want to talk about a project?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              I take on a small number of builds each month — agencies in Pakistan and local businesses in
              Montreal & Quebec especially welcome.
            </p>
            <a
              href="https://wa.me/+923498088939"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Message me on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold mb-4">More in {post.category}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="block p-5 rounded-xl border border-border bg-card hover:shadow-[var(--shadow-hover)] transition-all"
                  >
                    <div className="text-xs text-primary font-semibold mb-1">{r.category}</div>
                    <div className="font-display text-lg font-semibold leading-snug">{r.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPost;
