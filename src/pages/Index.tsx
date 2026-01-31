import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
