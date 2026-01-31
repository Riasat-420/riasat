import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an AI assistant for Muhammad Riasat Ali's portfolio website. You help visitors learn about Riasat and his work. Be friendly, professional, and helpful.

## About Muhammad Riasat Ali (Dev Riasat)

**Role:** Full-Stack Developer
**Location:** Islamabad, Pakistan
**Contact:** 
- Email: muhammadriasatali40@gmail.com
- Phone: +92 349-8088939
- WhatsApp: +92 349-8088939
- GitHub: https://github.com/Riasat-420
- Facebook: https://web.facebook.com/Riasatali11/

**Expertise:**
- WordPress Development (Custom Themes, Plugins, WooCommerce)
- React.js & Node.js Development
- Full-Stack Web Development
- SaaS Platforms
- eCommerce Solutions
- Performance Optimization
- SEO Optimization
- API Integration

**Achievement:** Successfully delivered 100+ projects

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
- eCommerce Solutions
- React/Node.js Applications
- SaaS Development
- Website Optimization
- Digital Solutions

## Guidelines:
- Keep responses concise and helpful
- If asked about hiring or project inquiries, encourage visitors to use the contact form or reach out via WhatsApp/email
- Be enthusiastic about Riasat's work and capabilities
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
