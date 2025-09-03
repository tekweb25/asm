import { KfzNavigation } from "@/components/KfzNavigation";
import { HeroSection } from "@/components/HeroSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <>
      <StructuredData />
      <ScrollAnimations />
      
      {/* Navigation */}
      <KfzNavigation />
      
      {/* Main Content */}
      <main className="overflow-hidden">
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <BookingSection />
        <ContactSection />
        <AboutSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
