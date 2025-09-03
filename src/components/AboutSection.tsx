import { Award, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import officeImage from "@/assets/office-interior.jpg";

export function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "15+ Jahre Erfahrung",
      description: "Langjährige Expertise in der KFZ-Zulassung",
    },
    {
      icon: Users,
      title: "5000+ zufriedene Kunden",
      description: "Vertrauen durch erstklassigen Service",
    },
    {
      icon: ShieldCheck,
      title: "Zertifizierte Qualität",
      description: "Autorisierte Zulassungsstelle mit höchsten Standards",
    },
  ];

  return (
    <section id="about" className="py-16 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Über uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ihr vertrauensvoller Partner für KFZ-Zulassungen in Köln
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <Card className="card-shadow border-border/50">
              <CardContent className="p-6 sm:p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Seit über 15 Jahren sind wir Ihr zuverlässiger Partner für alle Angelegenheiten rund um die 
                    <strong className="text-foreground"> KFZ-Zulassung in Köln</strong>. Unser erfahrenes Team sorgt dafür, dass Sie Ihr 
                    <strong className="text-foreground"> Fahrzeug anmelden</strong>, ummelden oder abmelden können – schnell, kompetent und ohne Stress.
                  </p>
                  
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Als autorisierte Zulassungsstelle bieten wir Ihnen den kompletten Service für Ihre 
                    <strong className="text-foreground"> Auto Anmeldung</strong> und alle weiteren KFZ-Dienstleistungen. Unser Ziel ist es, 
                    Ihnen den Behördengang so einfach wie möglich zu machen.
                  </p>

                  <div className="bg-primary/5 p-4 sm:p-6 rounded-lg border border-primary/10 mt-6 sm:mt-8">
                    <h4 className="font-bold text-foreground mb-3 flex items-center text-sm sm:text-base">
                      <ShieldCheck className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Unser Versprechen
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Wir behandeln Ihre KFZ-Angelegenheiten mit der gleichen Sorgfalt, 
                      wie wir es bei unseren eigenen Fahrzeugen tun würden. Transparenz, 
                      Kompetenz und Kundenservice stehen bei uns an erster Stelle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image and Achievements */}
          <div className="space-y-6 sm:space-y-8">
            {/* Office Image */}
            <div className="relative">
              <img
                src={officeImage}
                alt="Moderne KFZ Zulassungsstelle München - Professioneller Service"
                className="w-full h-48 sm:h-64 object-cover rounded-xl card-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                        <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base">{achievement.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* SEO Content */}
        <div className="mt-16">
          <Card className="card-shadow border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Warum ASM-Zulassungsdienst wählen?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">Kompetente Beratung</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Unsere Experten beraten Sie umfassend zu allen Aspekten der Fahrzeugzulassung. 
                    Von der ersten Anmeldung bis zur finalen Abmeldung stehen wir Ihnen mit Rat und Tat zur Seite.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3 text-foreground">Zeitersparnis garantiert</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Vermeiden Sie lange Wartezeiten bei Behörden. Wir erledigen Ihre KFZ-Angelegenheiten 
                    schnell und effizient, damit Sie sich auf wichtigere Dinge konzentrieren können.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">Alle Services unter einem Dach</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Ob Neuzulassung, Ummeldung, Abmeldung oder Kennzeichen-Service – 
                    wir bieten alle Dienstleistungen rund um die Fahrzeugzulassung in München.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3 text-foreground">Transparente Preise</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Keine versteckten Kosten, keine Überraschungen. Wir informieren Sie vorab 
                    über alle anfallenden Gebühren und Kosten für Ihre KFZ-Zulassung.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}