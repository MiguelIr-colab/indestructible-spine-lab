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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.tiempoDolor || !formData.pierdeFuerza || !formData.descripcionDolor) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Añadimos los valores controlados de los radios por si acaso
    data.set("tiempoDolor", formData.tiempoDolor);
    data.set("pierdeFuerza", formData.pierdeFuerza);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });

      toast.success("¡Gracias! Responderemos lo antes posible");
      setFormData({
        nombre: "",
        email: "",
        tiempoDolor: "",
        pierdeFuerza: "",
        descripcionDolor: "",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error al enviar el formulario");
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
            {/* Hidden form for Netlify detection */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              hidden
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="nombre" />
              <input type="email" name="email" />
              <input type="text" name="tiempoDolor" />
              <input type="text" name="pierdeFuerza" />
              <textarea name="descripcionDolor" />
              <input type="text" name="bot-field" />
            </form>

            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
              className="space-y-4 lg:space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <p className="hidden">
                <label>
                  No rellenes este campo: <input name="bot-field" />
                </label>
              </p>
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
                <input type="hidden" name="tiempoDolor" value={formData.tiempoDolor} />
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
                <input type="hidden" name="pierdeFuerza" value={formData.pierdeFuerza} />
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

              <div data-netlify-recaptcha="true" className="my-4" />

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
