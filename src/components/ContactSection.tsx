import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"; // ✅ EmailJS hinzugefügt

export function ContactSection() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive",
      });
      return;
    }

    try {
      // ✅ EmailJS send
      const result = await emailjs.send(
        "service_y5qay3q",    // <-- Service ID aus EmailJS
        "template_aygq118",   // <-- Template ID aus EmailJS
        {
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
        },
        "8giaBL1tUMmaJqTnA"     // <-- Public Key aus EmailJS
      );

      if (result.status === 200) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.",
        });

        // ✅ Formular zurücksetzen
        setContactForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    }
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt & Anfahrt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Besuchen Sie uns oder kontaktieren Sie uns direkt
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Details */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary text-lg sm:text-xl h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Adresse</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Niehlerstraße 123, 50733 Köln</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-primary text-lg sm:text-xl h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Telefon</p>
                    <a 
                      href="tel:+4989123456789" 
                      className="text-primary hover:underline transition-colors text-sm sm:text-base"
                    >
                      089 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary text-lg sm:text-xl h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">E-Mail</p>
                    <a 
                      href="mailto:info@zulassung-muenchen.de" 
                      className="text-primary hover:underline transition-colors text-sm sm:text-base break-all"
                    >
                      info@ASM-Zulassungsdienst.de
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Opening Hours */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Montag - Freitag:</span>
                    <span className="font-medium">08:00 - 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Samstag:</span>
                    <span className="font-medium">09:00 - 13:00 Uhr</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Sonntag:</span>
                    <span className="font-medium text-destructive">Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Directions */}
            <Card className="card-shadow overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Standort & Anfahrt
                </CardTitle>
              </CardHeader>
              
              {/* Map */}
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0282187963044!2d6.9580023321624225!3d50.971656588203274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf258747866a7b%3A0x12929182db8b9b21!2zQsOkY2tlcmVpIEdyw7x0dG5lcg!5e0!3m2!1sde!2sde!4v1756558220304!5m2!1sde!2sde"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort der ASM-Zulassungsdienst Köln"
                />
              </div>
              
              {/* Transportation */}
              <div className="p-4 bg-section-bg">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Car className="text-primary mr-2 h-4 w-4" />
                    Kostenlose Parkplätze verfügbar
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Train className="text-primary mr-2 h-4 w-4" />
                    U-Bahn: Marienplatz (5 Min. Fußweg)
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Bus className="text-primary mr-2 h-4 w-4" />
                    Bus-Haltestelle: 100m entfernt
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Name *</Label>
                    <Input
                      id="contactName"
                      value={contactForm.name}
                      onChange={(e) => handleContactChange("name", e.target.value)}
                      required
                      placeholder="Ihr vollständiger Name"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">E-Mail *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      required
                      placeholder="ihre.email@domain.de"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactSubject">Betreff *</Label>
                    <Input
                      id="contactSubject"
                      value={contactForm.subject}
                      onChange={(e) => handleContactChange("subject", e.target.value)}
                      required
                      placeholder="Betreff Ihrer Nachricht"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactMessage">Nachricht *</Label>
                    <Textarea
                      id="contactMessage"
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => handleContactChange("message", e.target.value)}
                      required
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full cta-gradient text-white py-3 sm:py-4 font-semibold hover:scale-105 transition-bounce min-h-[48px]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
