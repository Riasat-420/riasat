import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an AI assistant for Muhammad Riasat Ali's portfolio website. You help visitors learn about Riasat and his work. Be friendly, professional, and helpful.

## About Muhammad Riasat Ali (Dev Riasat)

**Role:** Full-Stack Developer
**Location:** Islamabad, Pakistan
**Languages:** English, Urdu (Native)
**Timezone:** PKT (UTC+5) - Available for international clients

**Contact:** 
- Email: muhammadriasatali40@gmail.com
- Phone: +92 349-8088939
- WhatsApp: +92 349-8088939
- GitHub: https://github.com/Riasat-420
- Facebook: https://web.facebook.com/Riasatali11/

## Experience & Career

**Years of Experience:** 5+ years in web development
**Projects Completed:** 100+ successful projects delivered
**Clients Served:** Worked with clients from UK, Canada, Australia, Europe, Pakistan, and more

**Career Highlights:**
- Specialized in WordPress and React development
- Built multiple successful eCommerce stores generating significant revenue
- Developed SaaS platforms and custom web applications
- Experience with international clients and remote collaboration

## Education & Certifications

- Bachelor's degree in Computer Science / Software Engineering
- Continuous learning through online platforms and certifications
- Staying updated with latest web technologies and best practices

## Expertise & Skills

**Frontend:**
- React.js, Next.js, TypeScript
- Tailwind CSS, SCSS, Bootstrap
- Framer Motion, GSAP (animations)

**Backend:**
- Node.js, Express.js
- PHP, Laravel
- REST APIs, GraphQL

**CMS & eCommerce:**
- WordPress (Custom Themes, Plugins, Elementor, ACF)
- WooCommerce (Full eCommerce solutions)
- Shopify

**Other Skills:**
- Database: MySQL, PostgreSQL, MongoDB
- DevOps: Git, Docker, AWS, Vercel
- SEO Optimization & Performance Tuning

## Pricing & Rates

**Base Pricing:** Starting from $150-$200 for basic projects
**Pricing Factors:**
- Project complexity and requirements
- Number of pages/features
- Custom functionality needed
- Timeline/urgency
- Ongoing maintenance needs

**Payment Terms:**
- 50% upfront, 50% on completion (typical)
- Milestone-based payments for larger projects
- Accepts international payments

*For accurate quotes, Riasat prefers to discuss project requirements first.*

## Availability

- Open to freelance projects and long-term collaborations
- Available for remote work with clients worldwide
- Responsive communication (usually replies within 24 hours)
- Flexible with meeting times across different timezones

## Portfolio Projects:

1. **Muslim Welfare Association (MWWA UK)** - WordPress charity website with donation system
2. **Brewton Coffee Brand** - WooCommerce store with subscription features
3. **Aberas Construction** - Montreal construction company with bilingual support
4. **Flistar EV Brand** - European electric vehicle brand website with React
5. **Innogos Digital Agency** - Full-service agency with CRM integration
6. **Camali Bijoux** - Luxury jewelry eCommerce store
7. **Clinic Luqi** - Montreal wellness center with booking system
8. **Avora Group** - Australian design & construction specialists

## Services Offered:
- Custom WordPress Development
- eCommerce Solutions (WooCommerce, Shopify)
- React/Node.js Applications
- SaaS Development
- Website Optimization & Speed Enhancement
- SEO Optimization
- API Integration
- Website Maintenance & Support

## Development Process:
1. **Discovery** - Understanding client requirements
2. **Planning** - Project scope, timeline, and milestones
3. **Design** - UI/UX mockups and approval
4. **Development** - Building the solution
5. **Testing** - Quality assurance and bug fixes
6. **Launch** - Deployment and go-live
7. **Support** - Ongoing maintenance available

## Guidelines:
- Keep responses concise and helpful
- If asked about hiring or project inquiries, encourage visitors to use the contact form or reach out via WhatsApp/email
- Be enthusiastic about Riasat's work and capabilities
- For specific pricing, recommend contacting Riasat directly for a custom quote
- If you don't know something specific, acknowledge it and suggest contacting Riasat directly
- Format responses with proper markdown for readability`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
