import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    pais: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    toast.success("¡Gracias! Responderé en menos de 24 horas");
    setFormData({ nombre: "", email: "", mensaje: "", pais: "" });
  };

  return (
    <section id="preguntame" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 text-foreground">
              ¿Tienes dudas? <span className="text-primary">Pregúntame</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Atiendo 100% online. Completa el formulario y responderé en menos de 24 horas.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 lg:p-12 rounded-lg shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-background border-border text-foreground h-10 md:h-12 text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border text-foreground h-10 md:h-12 text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="pais" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  País
                </label>
                <Input
                  id="pais"
                  type="text"
                  placeholder="Tu país"
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  className="bg-background border-border text-foreground h-10 md:h-12 text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Describe tu situación *
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="Cuéntame: ¿Cuál es tu diagnóstico? ¿Qué objetivos tienes? ¿Qué te gustaría conseguir?"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="bg-background border-border text-foreground min-h-24 md:min-h-32 text-sm md:text-base"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full h-10 md:h-12 text-sm md:text-base" size="lg">
                ENVIAR CONSULTA
              </Button>

              <p className="text-xs md:text-sm text-muted-foreground text-center">
                * Campos obligatorios
              </p>
            </form>
          </div>

          <div className="mt-8 lg:mt-12 text-center">
            <p className="text-base md:text-lg text-muted-foreground mb-4 lg:mb-6">
              ¿Listo para volver a entrenar sin miedo?
            </p>
            <Button variant="outline" size="lg" asChild className="h-10 md:h-12 text-sm md:text-base">
              <a href="#programa">Conoce el programa completo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
