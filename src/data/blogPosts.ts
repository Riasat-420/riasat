export type BlogLang = "en" | "fr";

export type BlogTranslation = {
  title: string;
  excerpt: string;
  readTime: string;
  content: BlogBlock[];
};

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
  // Optional translations. If `fr` exists, the post is treated as bilingual
  // and the post page defaults to FR for Quebec readers.
  translations?: Partial<Record<BlogLang, BlogTranslation>>;
  // When true, the FR version is preferred as the default reading language.
  defaultLang?: BlogLang;
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
    defaultLang: "fr",
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
    ],
    translations: {
      fr: {
        title: "La checklist du site web pour les cafés montréalais : ce qui fait vraiment entrer les gens",
        excerpt:
          "Si vous tenez un café dans le Mile End, le Plateau ou le Vieux-Montréal, votre site web a un seul travail : faire entrer les habitués. Voici ce que j'inclus toujours, et pourquoi.",
        readTime: "5 min",
        content: [
          { type: "p", text: "Les touristes cherchent votre café une seule fois sur Google. Les habitués, eux, le cherchent chaque semaine — pour les heures, la nouvelle pâtisserie, savoir si la terrasse est ouverte en mai. Votre site web est un petit vendeur silencieux, et la plupart des sites de cafés ratent complètement cette job." },
          { type: "h2", text: "Les incontournables" },
          { type: "ul", items: [
            "Les heures d'ouverture visibles sur la page d'accueil, pas cachées dans le pied de page.",
            "Un menu à jour — un PDF, ça passe, mais une vraie page HTML se classe mieux sur Google.",
            "L'adresse avec une carte Google intégrée et le nom de la station de métro la plus proche.",
            "Des photos prises à l'intérieur du café en lumière naturelle (pas des images stock).",
            "Bilingue : français en premier au Québec, anglais en second."
          ]},
          { type: "h2", text: "Le référencement local qui fait vraiment une différence" },
          { type: "p", text: "Réclamez votre fiche Google Business, mettez les heures à jour chaque semaine, et répondez à tous les avis — même les bêtes, poliment. Sur le site lui-même, le titre de la page devrait ressembler à : « Café [Nom] — Espresso et pâtisseries dans le Mile End, Montréal ». Cette seule ligne fait plus qu'aucun backlink." },
          { type: "h2", text: "Ce que je laisse tomber, en général" },
          { type: "p", text: "La commande en ligne pour un café de 25 places, c'est exagéré. Un bouton « Réserver une table » alors que vous ne prenez pas de réservations, c'est pire que rien. Gardez le site honnête — ça bâtit la confiance avant même que la personne pousse la porte." },
          { type: "quote", text: "Un site de café devrait ressembler au café lui-même. Calme, chaleureux, et utile." }
        ]
      }
    }
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
    defaultLang: "fr",
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
    ],
    translations: {
      fr: {
        title: "Bijouteries et boutiques au Québec : pourquoi votre site web vous fait perdre des visites en magasin",
        excerpt:
          "Les boutiques indépendantes à Québec et à Montréal compétitionnent avec Etsy et Instagram chaque jour. Un petit site web bien fait fait pencher la balance de votre bord.",
        readTime: "6 min",
        content: [
          { type: "p", text: "J'ai bâti une poignée de sites pour des propriétaires de boutiques au Québec, et les mêmes patterns reviennent à chaque fois. Le produit est magnifique, l'Instagram est superbe, et le site web a l'air d'avoir été fait en 2014." },
          { type: "h2", text: "Trois choses qui vous coûtent des clients sans bruit" },
          { type: "ul", items: [
            "Pas de version bilingue. Au Québec, ce n'est pas une option, c'est attendu.",
            "Des photos magnifiques sur Insta mais mal compressées sur le site.",
            "Pas de section « visitez la boutique » — adresse, note sur le stationnement, heures d'ouverture."
          ]},
          { type: "h2", text: "Ce qu'un bon site de boutique fait bien" },
          { type: "p", text: "Il raconte une petite histoire (qui l'a fait, où, avec quels matériaux), montre la collection actuelle clairement, et rend facile de réserver une visite ou de vous écrire. Vous n'avez pas besoin d'une boutique en ligne complète dès le jour un — un bouton « réserver en magasin » convertit souvent mieux pour les pièces de plus haute valeur." },
          { type: "h2", text: "Au sujet des prix sur le site" },
          { type: "p", text: "Affichez les prix pour une bonne partie des items. Les prix cachés poussent les gens à écrire à un compétiteur à la place. Si une pièce est sur mesure, écrivez « à partir de X $ » — l'honnêteté pré-qualifie le client avant même qu'il franchisse la porte." },
          { type: "h2", text: "Si vous êtes à Montréal ou à Québec et qu'on devrait se parler" },
          { type: "p", text: "Je travaille avec des boutiques indépendantes sur des projets petits et soignés — habituellement un site ciblé en 2 à 3 semaines, bilingue, avec les bases du référencement local bien faites. Écrivez-moi et je vous enverrai une vraie proposition, pas un gabarit." }
        ]
      }
    }
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

// Helper: returns the post content in the requested language, falling back to EN.
export const getPostInLang = (post: BlogPost, lang: BlogLang) => {
  if (lang === "fr" && post.translations?.fr) {
    const fr = post.translations.fr;
    return { title: fr.title, excerpt: fr.excerpt, readTime: fr.readTime, content: fr.content };
  }
  return { title: post.title, excerpt: post.excerpt, readTime: post.readTime, content: post.content };
};
