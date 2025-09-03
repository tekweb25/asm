import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function BookingSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Terminanfrage erfolgreich!",
      description: "Vielen Dank für Ihre Terminanfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-16 section-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Termin vereinbaren
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buchen Sie Ihren Termin für die KFZ-Zulassung – schnell und unkompliziert
          </p>
        </div>
        
        <Card className="card-shadow border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Terminanfrage</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    placeholder="Max"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    placeholder="Mustermann"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="max.mustermann@email.de"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="089 123 456 789"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label>Service *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Bitte wählen Sie einen Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anmeldung">Fahrzeug anmelden</SelectItem>
                    <SelectItem value="ummeldung">Fahrzeug ummelden</SelectItem>
                    <SelectItem value="abmeldung">Fahrzeug abmelden</SelectItem>
                    <SelectItem value="kennzeichen">Kennzeichen-Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Wunschtermin *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={today}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Uhrzeit *</Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 Uhr</SelectItem>
                      <SelectItem value="10:00">10:00 Uhr</SelectItem>
                      <SelectItem value="11:00">11:00 Uhr</SelectItem>
                      <SelectItem value="14:00">14:00 Uhr</SelectItem>
                      <SelectItem value="15:00">15:00 Uhr</SelectItem>
                      <SelectItem value="16:00">16:00 Uhr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Zusätzliche Informationen oder Fragen..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="cta-gradient text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold cta-shadow hover:scale-105 transition-bounce w-full sm:w-auto min-h-[48px]"
                >
                  <CalendarCheck className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Termin anfragen
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}