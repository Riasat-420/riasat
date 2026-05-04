import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, ExternalLink, RefreshCw, ArrowLeft, Copy } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

type CheckStatus = "ok" | "warn" | "fail";

type Check = {
  label: string;
  status: CheckStatus;
  detail: string;
};

type PageAudit = {
  url: string;
  loading: boolean;
  error?: string;
  title?: string;
  description?: string;
  canonical?: string;
  ogTags?: Record<string, string>;
  twitterTags?: Record<string, string>;
  jsonLd?: any[];
  robots?: string;
  checks?: Check[];
};

const ROUTES = ["/", "/portfolio", "/trust"];
const SITE_URL = "https://riasat.lovable.app";

const StatusIcon = ({ status }: { status: CheckStatus }) => {
  if (status === "ok") return <CheckCircle2 className="w-4 h-4 text-green-600" />;
  if (status === "warn") return <AlertCircle className="w-4 h-4 text-amber-500" />;
  return <AlertCircle className="w-4 h-4 text-destructive" />;
};

const auditCurrentPage = (route: string): PageAudit => {
  const head = document.head;
  const title = document.title;
  const description = head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
  const canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
  const robots = head.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content;

  const ogTags: Record<string, string> = {};
  head.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]').forEach((m) => {
    ogTags[m.getAttribute("property")!] = m.content;
  });

  const twitterTags: Record<string, string> = {};
  head.querySelectorAll<HTMLMetaElement>('meta[name^="twitter:"]').forEach((m) => {
    twitterTags[m.getAttribute("name")!] = m.content;
  });

  const jsonLd: any[] = [];
  head.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((s) => {
    try {
      jsonLd.push(JSON.parse(s.textContent || "{}"));
    } catch {
      jsonLd.push({ _error: "Invalid JSON-LD", raw: s.textContent });
    }
  });

  const checks: Check[] = [
    {
      label: "Title present",
      status: title ? (title.length > 60 ? "warn" : "ok") : "fail",
      detail: title ? `${title.length} chars: "${title}"` : "Missing",
    },
    {
      label: "Meta description",
      status: description ? (description.length > 160 ? "warn" : "ok") : "fail",
      detail: description ? `${description.length} chars` : "Missing",
    },
    {
      label: "Canonical URL",
      status: canonical ? "ok" : "fail",
      detail: canonical || "Missing",
    },
    {
      label: "Open Graph tags",
      status: ogTags["og:title"] && ogTags["og:image"] && ogTags["og:url"] ? "ok" : "warn",
      detail: `${Object.keys(ogTags).length} OG tags found`,
    },
    {
      label: "Twitter card",
      status: twitterTags["twitter:card"] && twitterTags["twitter:image"] ? "ok" : "warn",
      detail: `${Object.keys(twitterTags).length} Twitter tags found`,
    },
    {
      label: "JSON-LD structured data",
      status: jsonLd.length > 0 ? "ok" : "fail",
      detail: `${jsonLd.length} schema block(s)`,
    },
    {
      label: "Robots directive",
      status: robots && !robots.includes("noindex") ? "ok" : robots?.includes("noindex") ? "fail" : "warn",
      detail: robots || "Default (indexable)",
    },
  ];

  return {
    url: SITE_URL + (route === "/" ? "" : route),
    loading: false,
    title,
    description,
    canonical,
    robots,
    ogTags,
    twitterTags,
    jsonLd,
    checks,
  };
};

const SeoCheck = () => {
  const [activeRoute, setActiveRoute] = useState("/");
  const [audit, setAudit] = useState<PageAudit>({ url: SITE_URL, loading: true });
  const [sitemapUrls, setSitemapUrls] = useState<string[]>([]);
  const [sitemapStatus, setSitemapStatus] = useState<"loading" | "ok" | "fail">("loading");
  const [refreshKey, setRefreshKey] = useState(0);

  useSEO({
    title: "SEO Check | Internal Audit — Dev Riasat",
    description: "Internal SEO verification dashboard for the Dev Riasat portfolio site.",
    canonical: `${SITE_URL}/seo-check`,
    noindex: true,
  });

  // Audit the live route by navigating an iframe-free DOM check.
  // Since this app is SPA, we simulate per-route checks by switching the route
  // — the parent page's <head> already reflects the active page via useSEO.
  useEffect(() => {
    // Allow useSEO on other pages to settle if user just navigated
    const t = setTimeout(() => {
      setAudit(auditCurrentPage(activeRoute));
    }, 50);
    return () => clearTimeout(t);
  }, [activeRoute, refreshKey]);

  useEffect(() => {
    setSitemapStatus("loading");
    fetch("/sitemap.xml")
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.text();
      })
      .then((xml) => {
        const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
        setSitemapUrls(matches);
        setSitemapStatus("ok");
      })
      .catch(() => setSitemapStatus("fail"));
  }, [refreshKey]);

  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </Link>
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90"
          >
            <RefreshCw className="w-4 h-4" /> Re-run audit
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 max-w-5xl space-y-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Internal Tool</p>
          <h1 className="text-4xl font-display font-bold mb-2">SEO Check</h1>
          <p className="text-muted-foreground">
            Audits the currently rendered page's <code>&lt;head&gt;</code>. Pick a route below — open it in a new tab,
            then come back here and re-run to verify.
          </p>
        </div>

        {/* Route selector */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Audit a route</h2>
          <div className="flex flex-wrap gap-2">
            {ROUTES.map((route) => (
              <button
                key={route}
                onClick={() => setActiveRoute(route)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeRoute === route ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {route}
              </button>
            ))}
            <a
              href={activeRoute}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:bg-secondary inline-flex items-center gap-1.5"
            >
              Open <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Note: this audits the <strong>currently loaded</strong> page's head. Open a route in a new tab and re-run audit there for that page's tags.
          </p>
        </section>

        {/* Checks */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Checks</h2>
          <div className="bg-card border border-border rounded-xl divide-y divide-border">
            {audit.checks?.map((c) => (
              <div key={c.label} className="flex items-start gap-3 p-4">
                <StatusIcon status={c.status} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{c.label}</p>
                  <p className="text-xs text-muted-foreground break-words">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Canonical & key meta */}
        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Canonical & Robots</h3>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Canonical</dt>
                <dd className="break-all">{audit.canonical || <span className="text-destructive">missing</span>}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Robots</dt>
                <dd>{audit.robots || "default"}</dd>
              </div>
            </dl>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Title & Description</h3>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Title</dt>
                <dd>{audit.title}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Description</dt>
                <dd className="text-muted-foreground">{audit.description}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* OG + Twitter */}
        <section className="grid md:grid-cols-2 gap-4">
          <TagBlock title="Open Graph" tags={audit.ogTags || {}} />
          <TagBlock title="Twitter Card" tags={audit.twitterTags || {}} />
        </section>

        {/* JSON-LD */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              JSON-LD ({audit.jsonLd?.length || 0})
            </h2>
            <a
              href={`https://search.google.com/test/rich-results?url=${encodeURIComponent(audit.url)}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-primary hover:underline inline-flex items-center gap-1"
            >
              Test in Google Rich Results <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="space-y-3">
            {audit.jsonLd?.map((schema, i) => {
              const json = JSON.stringify(schema, null, 2);
              return (
                <div key={i} className="bg-card border border-border rounded-xl">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                    <span className="text-xs font-mono text-muted-foreground">Block #{i + 1}</span>
                    <button
                      onClick={() => copy(json)}
                      className="text-xs inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                  <pre className="p-4 text-xs overflow-auto max-h-96"><code>{json}</code></pre>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sitemap */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Sitemap ({sitemapStatus === "ok" ? `${sitemapUrls.length} URLs` : sitemapStatus})
          </h2>
          <div className="bg-card border border-border rounded-xl p-5">
            {sitemapStatus === "loading" && <p className="text-sm text-muted-foreground">Loading…</p>}
            {sitemapStatus === "fail" && (
              <p className="text-sm text-destructive">sitemap.xml not reachable at /sitemap.xml</p>
            )}
            {sitemapStatus === "ok" && (
              <ul className="space-y-1.5 text-sm">
                {sitemapUrls.map((u) => (
                  <li key={u} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <a href={u} target="_blank" rel="noreferrer" className="hover:underline break-all">{u}</a>
                  </li>
                ))}
              </ul>
            )}
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3"
            >
              Open raw sitemap.xml <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* External validators */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">External validators</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Google Rich Results Test", url: `https://search.google.com/test/rich-results?url=${encodeURIComponent(audit.url)}` },
              { label: "Schema.org Validator", url: `https://validator.schema.org/#url=${encodeURIComponent(audit.url)}` },
              { label: "Meta Tags Preview", url: `https://metatags.io/?url=${encodeURIComponent(audit.url)}` },
              { label: "Google Search Console", url: "https://search.google.com/search-console" },
            ].map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:border-primary/50 text-sm"
              >
                <span>{l.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const TagBlock = ({ title, tags }: { title: string; tags: Record<string, string> }) => (
  <div className="bg-card border border-border rounded-xl p-5">
    <h3 className="font-semibold mb-3">{title} <span className="text-xs text-muted-foreground font-normal">({Object.keys(tags).length})</span></h3>
    {Object.keys(tags).length === 0 ? (
      <p className="text-sm text-muted-foreground">No tags found</p>
    ) : (
      <dl className="space-y-1.5 text-xs">
        {Object.entries(tags).map(([k, v]) => (
          <div key={k} className="grid grid-cols-[140px_1fr] gap-2">
            <dt className="font-mono text-muted-foreground truncate">{k}</dt>
            <dd className="break-all">{v}</dd>
          </div>
        ))}
      </dl>
    )}
  </div>
);

export default SeoCheck;
