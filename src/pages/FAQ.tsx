import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, MapPin, MessageCircle, Star } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const GMB_URL = "https://share.google/IFgl82JjDnrrDBh5W";
const WHATSAPP = "https://wa.me/+923498088939";

type QA = { q: string; a: string };
const groups: { title: string; items: QA[] }[] = [
  {
    title: "Services",
    items: [
      { q: "What services does Muhammad Riasat Ali offer?", a: "Muhammad Riasat Ali (Dev Riasat) builds WordPress websites, React and Node.js web apps, WooCommerce stores, API integrations and SaaS platforms. He also handles speed optimization, redesigns and bug fixes on existing sites." },
      { q: "Do you work with WordPress and Elementor?", a: "Yes. I build custom WordPress themes, Elementor sites, and setups with ACF and custom post types, so clients can edit content without touching code." },
      { q: "Can you build an online store?", a: "Yes. I build WooCommerce and custom eCommerce stores with product catalogs, payments, shipping rules and order emails." },
      { q: "Can you fix or improve my existing website?", a: "Yes. I take over existing sites for redesigns, speed fixes, bug fixes, security cleanup and new features, without rebuilding from scratch unless needed." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "How much does a website cost?", a: "Simple landing pages and basic WordPress sites start from $150–200. Larger projects like online stores, custom web apps and SaaS platforms are quoted based on scope after a free consultation." },
      { q: "How do payments work?", a: "Larger projects are split into milestones, so you pay as each stage is delivered and approved." },
      { q: "Do you offer maintenance?", a: "Yes. Monthly maintenance covers updates, backups, security checks, uptime monitoring and small content changes." },
    ],
  },
  {
    title: "Timelines & process",
    items: [
      { q: "How long does a website take?", a: "A standard WordPress site takes about 2–3 weeks. Custom React apps and online stores take about 4–8 weeks. SaaS platforms can take 2–3 months depending on features." },
      { q: "What is your work process?", a: "Discovery call, proposal with timeline and cost, design approval, development with regular updates, testing and revisions, then launch and a handover walkthrough." },
      { q: "Will I own the website and code?", a: "Yes. After final payment you own the site, the code, and all accounts such as hosting and domain." },
    ],
  },
  {
    title: "Working together",
    items: [
      { q: "Where are you based and who do you work with?", a: "I am based in Islamabad, Pakistan, and work remotely with clients in the UK, Canada (including Montreal and Quebec), Australia, Europe and Pakistan." },
      { q: "Do you work with agencies as a white-label developer?", a: "Yes. I partner with marketing and SEO agencies as a white-label developer. Your client deals with you; I handle the build quietly in the background." },
      { q: "How do we communicate?", a: "Mostly WhatsApp and email, with video calls when needed. I adjust my working hours to overlap with your time zone." },
      { q: "Are you a certified developer?", a: "I hold a government-recognized Soft Skills certification from the Overseas Employment Corporation (OEC) and ICMPD, alongside 5+ years of experience and 100+ delivered projects." },
    ],
  },
];

const all = groups.flatMap((g) => g.items);

const FAQPage = () => {
  const [open, setOpen] = useState<string | null>(all[0].q);

  useSEO({
    title: "FAQ — Web Development Questions Answered | Dev Riasat",
    description: "Answers about pricing (from $150), timelines, WordPress, React, eCommerce and working with Muhammad Riasat Ali, a full-stack developer in Islamabad.",
    canonical: "https://riasat.lovable.app/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://riasat.lovable.app/faq#faq",
      mainEntity: all.map((x) => ({
        "@type": "Question",
        name: x.q,
        acceptedAnswer: { "@type": "Answer", text: x.a },
      })),
    },
  });

  return (
    <main id="main-content" className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
        <h1 className="skeu-headline text-4xl md:text-6xl font-display font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">
          Straight answers about working with Muhammad Riasat Ali — services, pricing, timelines and process.
        </p>

        {groups.map((g) => (
          <section key={g.title} className="mb-10">
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4 text-primary">{g.title}</h2>
            <div className="rounded-2xl border border-border bg-card px-5">
              {g.items.map((x) => {
                const isOpen = open === x.q;
                return (
                  <div key={x.q} className="border-b border-border last:border-0">
                    <button
                      onClick={() => setOpen(isOpen ? null : x.q)}
                      aria-expanded={isOpen}
                      className="w-full py-5 flex items-center justify-between gap-4 text-left"
                    >
                      <h3 className="text-base font-semibold">{x.q}</h3>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {/* Answers stay in the page for search engines; only visually collapsed */}
                    <p className={`text-muted-foreground pb-5 ${isOpen ? "block" : "hidden"}`}>{x.a}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <section className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-2">Find me on Google</h2>
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Web Developer Muhammad Riasat Ali · Islamabad, Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={GMB_URL} target="_blank" rel="noopener noreferrer" className="btn-skeu inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
              <Star className="w-4 h-4" /> View & review on Google
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-skeu inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border font-semibold">
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQPage;
