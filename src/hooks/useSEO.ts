import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: object | object[];
  noindex?: boolean;
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

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
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
  type = "website",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
    const desc = description.length > 160 ? description.slice(0, 157) + "..." : description;
    const url = canonical || (typeof window !== "undefined" ? window.location.href : SITE_URL);

    document.title = fullTitle;

    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Dev Riasat");

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    setLink("canonical", url);

    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      document.querySelectorAll('script[data-seo="page-jsonld"]').forEach((s) => s.remove());
    }
  }, [title, description, canonical, image, type, jsonLd, noindex]);
};
