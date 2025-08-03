import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
