import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tiempoDolor: "",
    pierdeFuerza: "",
    descripcionDolor: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.tiempoDolor || !formData.pierdeFuerza || !formData.descripcionDolor) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    // Create email body
    const emailBody = `
Nombre: ${formData.nombre}
Email: ${formData.email}
¿Cuánto tiempo llevas con dolor?: ${formData.tiempoDolor}
¿Pierdes fuerza o tienes incontinencia?: ${formData.pierdeFuerza}

Descripción del dolor:
${formData.descripcionDolor}
    `.trim();

    // Send email using mailto (temporary solution - needs proper backend)
    window.location.href = `mailto:espaldaindestructible@gmail.com?subject=Consulta desde web - ${formData.nombre}&body=${encodeURIComponent(emailBody)}`;
    
    toast.success("¡Gracias! Responderemos lo antes posible");
    setFormData({ nombre: "", email: "", tiempoDolor: "", pierdeFuerza: "", descripcionDolor: "" });
  };

  return (
    <section id="preguntanos" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 text-foreground">
              ¿Tienes dudas? <span className="text-primary">Pregúntanos</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Completa el formulario y te responderemos lo antes posible
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 lg:p-12 rounded-lg shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <Label htmlFor="nombre" className="text-xs md:text-sm">
                  Nombre *
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-background border-border text-foreground h-10 md:h-12 text-sm md:text-base mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs md:text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border text-foreground h-10 md:h-12 text-sm md:text-base mt-2"
                  required
                />
              </div>

              <div>
                <Label className="text-xs md:text-sm mb-3 block">
                  ¿Cuánto tiempo llevas con dolor? *
                </Label>
                <RadioGroup
                  value={formData.tiempoDolor}
                  onValueChange={(value) => setFormData({ ...formData, tiempoDolor: value })}
                  className="space-y-2"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="semanas" id="semanas" />
                    <Label htmlFor="semanas" className="font-normal cursor-pointer">Semanas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="casi-3-meses" id="casi-3-meses" />
                    <Label htmlFor="casi-3-meses" className="font-normal cursor-pointer">Casi 3 meses</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="entre-3-6-meses" id="entre-3-6-meses" />
                    <Label htmlFor="entre-3-6-meses" className="font-normal cursor-pointer">Entre 3 y 6 meses</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mas-6-meses" id="mas-6-meses" />
                    <Label htmlFor="mas-6-meses" className="font-normal cursor-pointer">Más de 6 meses</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mas-1-año" id="mas-1-año" />
                    <Label htmlFor="mas-1-año" className="font-normal cursor-pointer">Más de 1 año</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mas-3-años" id="mas-3-años" />
                    <Label htmlFor="mas-3-años" className="font-normal cursor-pointer">Más de 3 años</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-xs md:text-sm mb-3 block">
                  ¿Pierdes fuerza o tienes incontinencia? *
                </Label>
                <RadioGroup
                  value={formData.pierdeFuerza}
                  onValueChange={(value) => setFormData({ ...formData, pierdeFuerza: value })}
                  className="flex gap-6"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="fuerza-si" />
                    <Label htmlFor="fuerza-si" className="font-normal cursor-pointer">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="fuerza-no" />
                    <Label htmlFor="fuerza-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="descripcionDolor" className="text-xs md:text-sm">
                  Describe el dolor que sientes *
                </Label>
                <Textarea
                  id="descripcionDolor"
                  placeholder="Describe tu dolor..."
                  value={formData.descripcionDolor}
                  onChange={(e) => setFormData({ ...formData, descripcionDolor: e.target.value })}
                  className="bg-background border-border text-foreground min-h-24 md:min-h-32 text-sm md:text-base mt-2"
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full h-10 md:h-12 text-sm md:text-base" size="lg">
                ENVIAR CONSULTA
              </Button>

              <p className="text-xs md:text-sm text-muted-foreground text-center">
                * Todos los campos son obligatorios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
