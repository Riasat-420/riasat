import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Dev Riasat | Full-Stack Developer in Islamabad, Pakistan",
    description: "Muhammad Riasat Ali — Govt-certified full-stack developer. WordPress, React, Node.js & WooCommerce for clients in UK, Canada, Australia & Europe.",
    canonical: "https://riasat.lovable.app/",
    type: "profile",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://riasat.lovable.app/#webpage",
      "url": "https://riasat.lovable.app/",
      "name": "Dev Riasat | Full-Stack Developer",
      "isPartOf": { "@id": "https://riasat.lovable.app/#website" },
      "about": { "@id": "https://riasat.lovable.app/#person" },
      "primaryImageOfPage": "https://riasat.lovable.app/og-image.jpg",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://riasat.lovable.app/" }
        ]
      }
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <ChatBot />
    </div>
  );
};

export default Index;
