export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Pakistan Agencies" | "Montreal & Quebec" | "Dev Notes";
  audience: "agencies-pk" | "local-ca" | "general";
  readTime: string;
  date: string; // ISO
  tags: string[];
  // Markdown-ish blocks rendered by the page (kept simple — h2/p/ul/quote)
  content: BlogBlock[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "white-label-dev-partner-pakistan-agencies",
    title: "Stop Burning Margin: How Pakistani Agencies Can Outsource Dev Without the Drama",
    excerpt:
      "Most local agencies in Lahore, Karachi and Islamabad lose deals because their dev pipeline is patchy. Here's how a clean white-label workflow keeps clients happy and your nights free.",
    category: "Pakistan Agencies",
    audience: "agencies-pk",
    readTime: "6 min",
    date: "2026-04-22",
    tags: ["white-label", "agency", "wordpress", "outsourcing"],
    content: [
      { type: "p", text: "If you're running a marketing or branding agency in Pakistan, the build phase is usually where the timeline cracks. The designer ships in 4 days, then the project sits with a freelancer who ghosts mid-week. Sound familiar?" },
      { type: "h2", text: "What 'white-label' actually means in practice" },
      { type: "p", text: "It means I show up under your brand. Your client never hears my name. You forward the Figma, the brief, the deadline — I hand back a staging link, change requests get handled in your ticketing tool, and the final site is delivered to your client as your work." },
      { type: "h2", text: "Where agencies usually lose money" },
      { type: "ul", items: [
        "Re-briefing the same project to three freelancers in a row.",
        "No staging environment, so revisions happen on live sites.",
        "Clients asking for SEO basics that were never set up at handover.",
        "No documentation — the next dev has to reverse-engineer everything."
      ]},
      { type: "h2", text: "A workflow that doesn't break" },
      { type: "p", text: "I keep it boring on purpose: fixed scope per sprint, staging URL within 48 hours of kickoff, daily WhatsApp standups, and a Loom walkthrough at handover so your account manager can demo to the client without calling me." },
      { type: "quote", text: "Boring workflows are the reason agencies keep their margin. Drama is what kills it." },
      { type: "h2", text: "Who this is for" },
      { type: "p", text: "Small to mid-size agencies in Pakistan that already win the client but want a reliable build partner — WordPress, WooCommerce, custom React, or a quick landing page. No retainer required to start." }
    ]
  },
  {
    slug: "wordpress-vs-custom-pakistani-clients",
    title: "WordPress or Custom Build? An Honest Answer for Pakistani Clients in 2026",
    excerpt:
      "Every agency pitches custom React. Every client asks for WordPress. Here's the actual decision tree — no buzzwords, no upselling.",
    category: "Pakistan Agencies",
    audience: "agencies-pk",
    readTime: "5 min",
    date: "2026-04-08",
    tags: ["wordpress", "react", "decision"],
    content: [
      { type: "p", text: "I get this question almost weekly from agency owners: 'The client's budget is tight, what do we tell them?' Here's the framework I actually use." },
      { type: "h2", text: "Use WordPress when…" },
      { type: "ul", items: [
        "The client will edit content themselves (blog, services, team page).",
        "They need a contact form, gallery, and a basic shop — nothing exotic.",
        "Hosting will be shared or low-cost VPS.",
        "The timeline is under 3 weeks."
      ]},
      { type: "h2", text: "Go custom (React / Next.js) when…" },
      { type: "ul", items: [
        "There's a logged-in dashboard or user accounts.",
        "Real-time data, bookings with availability, or a calculator.",
        "Performance is part of the brand (think clean SaaS landing).",
        "The client has an in-house dev or a long roadmap."
      ]},
      { type: "h2", text: "The honest middle ground" },
      { type: "p", text: "For most service businesses in Pakistan — clinics, restaurants, real estate — WordPress with a properly built theme outperforms a half-finished React site every time. Custom is not a flex. Shipping is." }
    ]
  },
  {
    slug: "montreal-cafe-website-checklist",
    title: "The Montreal Café Website Checklist: What Actually Brings People Through the Door",
    excerpt:
      "If you run a café in Mile End, Plateau or Vieux-Montréal, your website is doing one job — getting locals to walk in. Here's what mine include and why.",
    category: "Montreal & Quebec",
    audience: "local-ca",
    readTime: "5 min",
    date: "2026-03-30",
    tags: ["montreal", "cafe", "local seo", "quebec"],
    content: [
      { type: "p", text: "Tourists Google your café once. Locals Google it weekly — for hours, the new pastry, whether you have outdoor seating in May. Your website is a quiet little salesperson, and most café sites get this completely wrong." },
      { type: "h2", text: "The non-negotiables" },
      { type: "ul", items: [
        "Hours visible on the homepage, not buried in a footer.",
        "A current menu — PDF is fine, but a real HTML page ranks better.",
        "Address with a Google Maps embed and the metro station name.",
        "Photos taken inside the café in natural light (not stock).",
        "Bilingual: French first if you're in QC, English secondary."
      ]},
      { type: "h2", text: "Local SEO that actually moves the needle" },
      { type: "p", text: "Claim your Google Business Profile, keep hours updated weekly, and respond to every review — even the rude ones, politely. On the website itself, the page title should be something like 'Café [Name] — Espresso & Pastries in Mile End, Montréal'. That single line does more than any backlink." },
      { type: "h2", text: "What I usually skip" },
      { type: "p", text: "Online ordering for a 25-seat café is overkill. A 'Reserve a table' button when you don't take reservations is worse than nothing. Keep the site honest — it builds trust before they walk in." },
      { type: "quote", text: "A café website should feel like the café. Calm, warm, and useful." }
    ]
  },
  {
    slug: "jewellery-boutique-quebec-website",
    title: "Jewellery & Boutique Owners in Quebec: Why Your Website Is Costing You Walk-Ins",
    excerpt:
      "Independent boutiques in Quebec City and Montreal compete with Etsy and Instagram every day. A small, careful website tilts the balance back in your favour.",
    category: "Montreal & Quebec",
    audience: "local-ca",
    readTime: "6 min",
    date: "2026-03-15",
    tags: ["jewellery", "boutique", "quebec", "local"],
    content: [
      { type: "p", text: "I've built a handful of sites for boutique owners in QC and the same patterns show up every time. The product is beautiful, the Instagram is gorgeous, and the website looks like it was made in 2014." },
      { type: "h2", text: "Three things that quietly cost you customers" },
      { type: "ul", items: [
        "No bilingual version. In Quebec this is not optional, it's expected.",
        "Photos that are stunning on Insta but compressed badly on the site.",
        "No 'visit the boutique' section — address, parking note, opening hours."
      ]},
      { type: "h2", text: "What a focused boutique site does well" },
      { type: "p", text: "It tells a small story (who made it, where, what materials), shows the current collection clearly, and makes it effortless to either book a visit or message you. You don't need a full e-commerce store on day one — a 'reserve in store' button often converts better for higher-ticket pieces." },
      { type: "h2", text: "About pricing on the site" },
      { type: "p", text: "Show prices for a meaningful range of items. Hidden prices push people to message a competitor instead. If a piece is custom, say 'from $X' — honesty pre-qualifies the client before they walk in." },
      { type: "h2", text: "If you're in Montreal or Quebec City and want to talk" },
      { type: "p", text: "I work with independent boutiques on small, careful builds — usually a focused site in 2–3 weeks, bilingual, with the local SEO basics done properly. Drop me a message and I'll send a real proposal, not a template." }
    ]
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
