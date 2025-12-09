import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tiempoDolor: "",
    pierdeFuerza: "",
    descripcionDolor: "",
    website: "", // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.tiempoDolor || !formData.pierdeFuerza || !formData.descripcionDolor) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        throw new Error("reCAPTCHA site key not configured");
      }

      const token = await window.grecaptcha.execute(siteKey, { action: "contact" });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          tiempoDolor: formData.tiempoDolor,
          pierdeFuerza: formData.pierdeFuerza,
          descripcionDolor: formData.descripcionDolor,
          website: formData.website,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("¡Gracias! Responderemos lo antes posible");
        setFormData({
          nombre: "",
          email: "",
          tiempoDolor: "",
          pierdeFuerza: "",
          descripcionDolor: "",
          website: "",
        });
      } else {
        toast.error(result.error || "Ha ocurrido un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Ha ocurrido un error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
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
            <form
              onSubmit={handleSubmit}
              className="space-y-4 lg:space-y-6"
            >
              {/* Honeypot field - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <label>
                  No rellenes este campo:
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div>
                <Label htmlFor="nombre" className="text-xs md:text-sm">
                  Nombre *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
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
                  name="email"
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
                  name="descripcionDolor"
                  placeholder="Describe tu dolor..."
                  value={formData.descripcionDolor}
                  onChange={(e) => setFormData({ ...formData, descripcionDolor: e.target.value })}
                  className="bg-background border-border text-foreground min-h-24 md:min-h-32 text-sm md:text-base mt-2"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full h-10 md:h-12 text-sm md:text-base" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR CONSULTA"}
              </Button>

              <p className="text-xs md:text-sm text-muted-foreground text-center">
                * Todos los campos son obligatorios
              </p>
              
              <p className="text-[10px] text-muted-foreground/60 text-center">
                Este sitio está protegido por reCAPTCHA y se aplican la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                  Política de Privacidad
                </a>{" "}
                y los{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                  Términos de Servicio
                </a>{" "}
                de Google.
              </p>
            </form>
          </div>

          {/* WhatsApp contact alternative */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm md:text-base">
              O contáctanos por teléfono al{" "}
              <a 
                href="tel:+17542739543" 
                className="text-primary font-semibold hover:underline"
              >
                +1 754 273 9543
              </a>
              <span className="block text-xs md:text-sm mt-1 text-muted-foreground/70">
                (Solo llamadas, próximamente WhatsApp también)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
