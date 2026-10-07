# Full SEO / GEO / Open Graph / Technical optimization

## 1. SEO (Google/Bing visibility)
- Fix the homepage canonical and og:url: they point to `riasat.vercel.app`. Change both to `https://riasat.lovable.app/` so Google doesn't treat another site as the main version.
- Check that every page, including each blog post, has its own title, description and canonical.
- Update `sitemap.xml` so it lists every live page (home, portfolio, trust, resume, blog, every post). Remove any made-up "last updated" dates.
- Add a `Sitemap:` line for each sitemap to `robots.txt`, and say clearly that Bing and AI crawlers are allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot).
- Add Bing Webmaster verification support. You'll provide the code; it can also be imported from Google Search Console.

## 2. GEO / AEO (getting cited by ChatGPT, Gemini, Perplexity)
- Add `public/llms.txt`: a plain-English summary of who you are, your services, where you work, your credentials and your key page links. AI engines read this file.
- Build one connected set of structured data (`@graph`) that links Person, ProfessionalService (your Google Business listing), WebSite and Organization by ID, with `sameAs` links to LinkedIn, GitHub, your Google Business listing and Fiverr/Upwork if you have them.
- Add a short "Quick answers" block to the homepage: "Who is Muhammad Riasat Ali?", "What does Dev Riasat build?", "How much does a website cost?" Each gets a 1–2 sentence answer in plain text. AI engines quote short, direct answers like these.
- Add a TL;DR summary at the top of each blog post, plus author and date details.

## 3. Open Graph (link previews when shared)
- Make one branded 1200x630 share image: your photo, your name and a tagline in the site's orange style. Use it as the default share image, with full width, height and alt text.
- Give each blog post its own share title and description, using the post image where one exists.
- Add twitter:site/creator tags and an app theme color.
- Note: Facebook, WhatsApp and LinkedIn previews only read the homepage's built-in tags. Unique previews for each page would need the site upgraded to server rendering.

## 4. Technical (speed, Core Web Vitals)
- Compress images: `src/assets` is 9.5 MB. Convert the large JPG/PNGs (portfolio, profile, certificate) to WebP at sensible sizes. This usually cuts the total by more than 70%.
- Add `loading="lazy"`, `decoding="async"` and width/height to images below the top of the page. Load the main hero image first with `fetchpriority="high"`.
- Load pages only when they're opened (portfolio, trust, resume, blog, seo-check), so the homepage downloads less code.
- Preload the heading and body fonts with `display=swap`.
- HTTPS is already handled by hosting. Nothing needed.

## Technical details
- Files: `index.html`, `public/robots.txt`, `public/sitemap.xml`, new `public/llms.txt`, new `public/og-default.jpg`, `src/hooks/useSEO.ts`, `src/App.tsx` (React.lazy + Suspense), image components, `BlogPost.tsx`, a new `QuickAnswers` homepage section.
- Image conversion is done once with a script. Imports are updated to `.webp`.
- Changes reach the live site after you publish. Then resubmit the sitemaps in Search Console.
