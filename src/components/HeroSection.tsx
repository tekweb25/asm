import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";
import heroImage from "@/assets/hero-kfz-munich.jpg";

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="KFZ Zulassungsstelle München - Professionelle Fahrzeugzulassung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Schnelle KFZ-Zulassung
            <br />
            <span className="text-primary-light">in Köln</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-4 sm:px-0">
            Fahrzeug anmelden, ummelden oder abmelden – kompetent und zuverlässig. 
            Ihr vertrauensvoller Partner für alle KFZ-Angelegenheiten.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              onClick={scrollToBooking}
              className="cta-gradient text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold cta-shadow hover:scale-105 transition-bounce w-full sm:w-auto min-h-[48px]"
            >
              <CalendarCheck className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Jetzt Termin vereinbaren
            </Button>
            
            <Button
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[48px]"
            >
              <a href="tel:+4989123456789">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                089 123 456 789
              </a>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Schnelle Termine</h3>
              <p className="text-blue-100 text-sm">Kurzfristige Terminvergabe möglich</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Zentrale Lage</h3>
              <p className="text-blue-100 text-sm">Direkt in Köln mit Parkplätzen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Persönlicher Service</h3>
              <p className="text-blue-100 text-sm">Wir kümmern uns persönlich um Ihre Zulassung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}