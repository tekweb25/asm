import { Clock, UserCheck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Clock,
    title: "Schnelle Termine",
    description: "Kurzfristige Terminvergabe und schnelle Bearbeitung Ihrer KFZ-Zulassung",
  },
  {
    icon: UserCheck,
    title: "Kompetenter Service",
    description: "Erfahrene Mitarbeiter beraten Sie professionell bei allen Zulassungsfragen",
  },
  {
    icon: MapPin,
    title: "Zentrale Lage",
    description: "Gut erreichbar in Köln mit Parkplätzen direkt vor der Tür",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum unsere Zulassungsstelle wählen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ihr zuverlässiger Partner für alle ASM-Zulassungsdienst in Köln
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="text-center card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="text-primary text-xl sm:text-2xl h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-card-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}