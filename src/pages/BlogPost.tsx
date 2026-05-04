import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Languages } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { blogPosts, getPostBySlug, getPostInLang, type BlogLang } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const UI = {
  en: {
    back: "Back to Riasat's Ravings",
    ctaTitle: "Want to talk about a project?",
    ctaBody:
      "I take on a small number of builds each month — agencies in Pakistan and local businesses in Montreal & Quebec especially welcome.",
    ctaButton: "Message me on WhatsApp",
    moreIn: "More in",
    readIn: "Read in",
    available: "This post is available in French",
  },
  fr: {
    back: "Retour aux billets de Riasat",
    ctaTitle: "Envie de discuter d'un projet ?",
    ctaBody:
      "Je prends un petit nombre de projets chaque mois — agences au Pakistan et commerces locaux à Montréal et au Québec sont particulièrement bienvenus.",
    ctaButton: "Écrivez-moi sur WhatsApp",
    moreIn: "Plus dans",
    readIn: "Lire en",
    available: "Ce billet est aussi disponible en anglais",
  },
} as const;

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  const hasFrench = !!post?.translations?.fr;
  const initialLang: BlogLang = post?.defaultLang === "fr" && hasFrench ? "fr" : "en";
  const [lang, setLang] = useState<BlogLang>(initialLang);

  const view = useMemo(
    () => (post ? getPostInLang(post, lang) : null),
    [post, lang]
  );

  const postUrl = `https://riasat.lovable.app/blog/${slug ?? ""}`;
  const ogImage = "https://riasat.lovable.app/og-image.jpg";

  useSEO({
    title: view
      ? `${view.title} | Riasat's Ravings`
      : "Post not found | Riasat's Ravings",
    description: view?.excerpt ?? "Blog post not found.",
    canonical: postUrl,
    image: ogImage,
    imageAlt: view?.title,
    type: "article",
    locale: lang === "fr" ? "fr_CA" : "en_US",
    article: post
      ? {
          publishedTime: post.date,
          modifiedTime: post.date,
          section: post.category,
          tags: post.tags,
          author: "Muhammad Riasat Ali",
        }
      : undefined,
    hreflang: hasFrench
      ? [
          { hreflang: "en", href: postUrl },
          { hreflang: "fr-CA", href: postUrl },
          { hreflang: "x-default", href: postUrl },
        ]
      : undefined,
    jsonLd: post && view
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${postUrl}#post`,
          headline: view.title,
          description: view.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: lang === "fr" ? "fr-CA" : "en",
          keywords: post.tags.join(", "),
          articleSection: post.category,
          mainEntityOfPage: postUrl,
          url: postUrl,
          image: [ogImage],
          author: { "@id": "https://riasat.lovable.app/#person" },
          publisher: { "@id": "https://riasat.lovable.app/#person" },
          isPartOf: { "@id": "https://riasat.lovable.app/blog#blog" },
          ...(hasFrench
            ? {
                workTranslation: {
                  "@type": "BlogPosting",
                  inLanguage: lang === "fr" ? "en" : "fr-CA",
                  headline:
                    lang === "fr"
                      ? post.title
                      : post.translations!.fr!.title,
                  url: postUrl,
                },
              }
            : {}),
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://riasat.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://riasat.lovable.app/blog" },
              { "@type": "ListItem", position: 3, name: view.title, item: postUrl },
            ],
          },
        }
      : undefined,
  });

  if (!post || !view) return <Navigate to="/blog" replace />;

  const t = UI[lang];
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const dateLocale = lang === "fr" ? "fr-CA" : "en-US";

  return (
    <div className="min-h-screen bg-background" lang={lang === "fr" ? "fr-CA" : "en"}>
      <Header />
      <main className="pt-28 pb-16">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>

          {/* Language toggle (only when a translation exists) */}
          {hasFrench && (
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div
                role="group"
                aria-label="Language"
                className="inline-flex items-center rounded-full border border-border bg-card p-1"
              >
                <button
                  onClick={() => setLang("fr")}
                  aria-pressed={lang === "fr"}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    lang === "fr"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Languages className="w-3 h-3" />
                  Français
                </button>
                <button
                  onClick={() => setLang("en")}
                  aria-pressed={lang === "en"}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    lang === "en"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  English
                </button>
              </div>
              <span className="text-xs text-muted-foreground">{t.available}</span>
            </div>
          )}

          <motion.header
            key={`header-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1 text-primary font-semibold">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString(dateLocale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {view.readTime}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              {view.title}
            </h1>
            <p className="text-lg text-muted-foreground">{view.excerpt}</p>
          </motion.header>

          <motion.div
            key={`body-${lang}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-6"
          >
            {view.content.map((block, i) => {
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
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <h3 className="font-display text-xl font-semibold mb-2">{t.ctaTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.ctaBody}</p>
            <a
              href="https://wa.me/+923498088939"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              {t.ctaButton} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-2xl font-semibold mb-4">
                {t.moreIn} {post.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => {
                  const rView = getPostInLang(r, lang);
                  return (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="block p-5 rounded-xl border border-border bg-card hover:shadow-[var(--shadow-hover)] transition-all"
                    >
                      <div className="text-xs text-primary font-semibold mb-1">{r.category}</div>
                      <div className="font-display text-lg font-semibold leading-snug">{rView.title}</div>
                    </Link>
                  );
                })}
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
