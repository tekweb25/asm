import { CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import Datenschutz from "../assets/datenschutzrichtlinien_asm.pdf"
import { useState } from "react";
import Logo from '../assets/ASM-Logo-transparent.png';


export function Footer() {
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

  const [isOpen, setIsOpen] = useState(false);


  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={scrollToBooking}
          className="cta-gradient text-white p-4 rounded-full cta-shadow hover:scale-110 transition-bounce"
          size="icon"
        >
          <CarFront className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-lg sm:text-xl font-bold">KFZ Zulassungsstelle</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ihr vertrauensvoller Partner für schnelle und kompetente KFZ-Zulassungen in Köln.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Unsere Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li onClick={() => scrollToSection("#booking")}
                  className="hover:text-primary-light transition-colors cursor-pointer">
                  Fahrzeug anmelden
                </li>
                <li onClick={() => scrollToSection("#booking")} className="hover:text-primary-light transition-colors cursor-pointer">
                  Fahrzeug ummelden
                </li>
                <li onClick={() => scrollToSection("#booking")} className="hover:text-primary-light transition-colors cursor-pointer">
                  Fahrzeug abmelden
                </li>
                <li onClick={() => scrollToSection("#booking")} className="hover:text-primary-light transition-colors cursor-pointer">
                  Kennzeichen-Service
                </li>
                <li onClick={() => scrollToSection("#booking")} className="hover:text-primary-light transition-colors cursor-pointer">
                  Beratung & Support
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p>Lustheider Str. 31</p>
                <p>51103</p>
                <p className="mt-3">
                  <strong>Tel:</strong>{" "}
                  <a
                    href="tel:+491556306710"
                    className="hover:text-primary-light transition-colors"
                  >
                    +49 155 630 6710
                  </a>
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@zulassung-muenchen.de"
                    className="hover:text-primary-light transition-colors break-all"
                  >
                    info@asm-zulassungsdienst.de
                  </a>
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Öffnungszeiten</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Mo-Fr:</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sa:</span>
                  <span className="font-medium">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>So:</span>
                  <span className="font-medium text-red-400">Geschlossen</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                &copy; 2025 KFZ Zulassungsstelle Köln. Alle Rechte vorbehalten.
              </p>

              <div className="flex space-x-6 text-sm text-gray-300">
                <a
                  href={Datenschutz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  Datenschutz
                </a>
              </div>
            </div>
            <div className="flex top:20px flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <p onClick={() => window.location.href = "https://www.teksign.de"} className="text-gray-300 text-sm">
                Created by TekSign
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}