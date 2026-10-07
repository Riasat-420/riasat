const qa = [
  { q: "Who is Muhammad Riasat Ali?", a: "Muhammad Riasat Ali (Dev Riasat) is a government-certified full-stack web developer in Islamabad, Pakistan, with 5+ years of experience and 100+ delivered projects." },
  { q: "What does Dev Riasat build?", a: "WordPress and WooCommerce sites, React/Next.js web apps, and bilingual websites for small businesses, plus white-label development for marketing agencies." },
  { q: "Who does he work with?", a: "Pakistani SEO and marketing agencies that outsource development, and local businesses in Canada — especially cafés, jewellery shops and boutiques in Montreal and Quebec." },
  { q: "How much does a website cost?", a: "It depends on pages, features and content. Share your requirements through the contact form and you'll get a clear, fixed quote before any work starts." },
];

const QuickAnswers = () => (
  <section aria-labelledby="quick-answers" className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="quick-answers" className="text-3xl md:text-4xl font-bold mb-8 text-center">Quick answers</h2>
      <dl className="grid gap-4 md:grid-cols-2">
        {qa.map((i) => (
          <div key={i.q} className="rounded-2xl border border-border bg-card p-6">
            <dt className="font-semibold text-lg mb-2 text-foreground">{i.q}</dt>
            <dd className="text-muted-foreground">{i.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default QuickAnswers;
