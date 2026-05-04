import { useEffect } from "react";

type HreflangAlt = { hreflang: string; href: string };

type ArticleMeta = {
  publishedTime?: string; // ISO
  modifiedTime?: string; // ISO
  section?: string;
  tags?: string[];
  author?: string;
};

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  locale?: string; // e.g. "en_US", "fr_CA"
  jsonLd?: object | object[];
  noindex?: boolean;
  hreflang?: HreflangAlt[]; // alternate language URLs
  article?: ArticleMeta;
};

const SITE_URL = "https://riasat.lovable.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (selector: string) => {
  document.head.querySelectorAll(selector).forEach((el) => el.remove());
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]:not([hreflang])`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setHreflangs = (alts: HreflangAlt[]) => {
  // Wipe previously injected hreflang alternates we own
  document.head
    .querySelectorAll('link[rel="alternate"][data-seo="hreflang"]')
    .forEach((el) => el.remove());
  alts.forEach(({ hreflang, href }) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    link.dataset.seo = "hreflang";
    document.head.appendChild(link);
  });
};

const setJsonLd = (data: object | object[]) => {
  const id = "page-jsonld";
  document.querySelectorAll(`script[data-seo="${id}"]`).forEach((s) => s.remove());
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seo = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

export const useSEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  imageAlt,
  type = "website",
  locale = "en_US",
  jsonLd,
  noindex = false,
  hreflang,
  article,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
    const desc = description.length > 160 ? description.slice(0, 157) + "..." : description;
    const url = canonical || (typeof window !== "undefined" ? window.location.href : SITE_URL);

    document.title = fullTitle;
    document.documentElement.setAttribute("lang", locale.startsWith("fr") ? "fr-CA" : "en");

    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", imageAlt || fullTitle);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Dev Riasat");
    setMeta('meta[property="og:locale"]', "property", "og:locale", locale);

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    setLink("canonical", url);

    // Article-specific OG tags (only for type=article)
    removeMeta('meta[property^="article:"]');
    if (type === "article" && article) {
      if (article.publishedTime)
        setMeta(
          'meta[property="article:published_time"]',
          "property",
          "article:published_time",
          article.publishedTime,
        );
      if (article.modifiedTime)
        setMeta(
          'meta[property="article:modified_time"]',
          "property",
          "article:modified_time",
          article.modifiedTime,
        );
      if (article.section)
        setMeta('meta[property="article:section"]', "property", "article:section", article.section);
      if (article.author)
        setMeta('meta[property="article:author"]', "property", "article:author", article.author);
      (article.tags || []).forEach((tag) => {
        const link = document.createElement("meta");
        link.setAttribute("property", "article:tag");
        link.setAttribute("content", tag);
        document.head.appendChild(link);
      });
    }

    // Hreflang alternates
    if (hreflang && hreflang.length > 0) {
      setHreflangs(hreflang);
    } else {
      document.head
        .querySelectorAll('link[rel="alternate"][data-seo="hreflang"]')
        .forEach((el) => el.remove());
    }

    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      document.querySelectorAll('script[data-seo="page-jsonld"]').forEach((s) => s.remove());
    }
  }, [title, description, canonical, image, imageAlt, type, locale, jsonLd, noindex, hreflang, article]);
};
