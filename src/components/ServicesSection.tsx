import { PlusCircle, ArrowLeftRight, MinusCircle, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: PlusCircle,
    title: "Fahrzeug anmelden",
    description: "Neuzulassung von PKW, Motorrädern und Nutzfahrzeugen",
  },
  {
    icon: ArrowLeftRight,
    title: "Fahrzeug ummelden",
    description: "Halterwechsel und Adressänderungen schnell erledigt",
  },
  {
    icon: MinusCircle,
    title: "Fahrzeug abmelden",
    description: "Stilllegung und Außerbetriebsetzung von Fahrzeugen",
  },
  {
    icon: CreditCard,
    title: "Kennzeichen-Service",
    description: "Wunschkennzeichen und Kennzeichen-Reservierung",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alle Services rund um die Fahrzeugzulassung – professionell und zuverlässig
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-2 group"
            >
              <CardContent className="p-4 sm:p-6">
                <service.icon className="text-primary text-2xl sm:text-3xl mb-3 sm:mb-4 h-6 w-6 sm:h-8 sm:w-8 group-hover:scale-110 transition-bounce" />
                <h3 className="text-base sm:text-lg font-bold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-xl p-8 max-w-4xl mx-auto border border-primary/10">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Benötigen Sie Beratung?
            </h3>
            <p className="text-muted-foreground mb-6">
              Unsere erfahrenen Mitarbeiter helfen Ihnen gerne bei der Auswahl des richtigen Services 
              und informieren Sie über alle erforderlichen Unterlagen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-sm text-muted-foreground">
                <strong>Benötigte Unterlagen:</strong> Fahrzeugschein, Personalausweis, 
                Versicherungsbestätigung
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}