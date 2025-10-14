import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    privacidad: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    if (!formData.privacidad) {
      toast.error("Debes aceptar la política de privacidad");
      return;
    }

    toast.success("¡Gracias! Nos pondremos en contacto contigo pronto para agendar tu entrevista");
    setFormData({ nombre: "", email: "", privacidad: false });
  };

  return (
    <section className="min-h-screen bg-card pt-20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground">Elimina el </span>
                <span className="text-primary uppercase">Dolor Crónico de Espalda</span>{" "}
                <span className="text-foreground">y vuelve a tu vida de siempre</span>
              </h1>
              
              <p className="text-lg text-foreground leading-relaxed">
                Programa de entrenamiento personalizado online especializado en patologías de columna
              </p>

              <div className="bg-card border-2 border-primary/20 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-bold text-primary">¿Por qué sé esto?</h2>
                
                <p className="text-foreground leading-relaxed">
                  Porque el ejercicio y concretamente, <strong>un plan hecho para ti</strong>, consigue una mejoría importante en lo que respecta al Dolor Crónico de espalda.
                </p>

                <p className="text-foreground leading-relaxed">
                  En algún momento de su vida, el <strong>80% de la población mundial</strong> sufrirá dolor de espalda y, la solución que te ofrecen es:
                </p>

                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hacer reposo y no hacer grandes esfuerzos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Todo tipo de medicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Masajes, infiltraciones u operarte.</span>
                  </li>
                </ul>

                <p className="text-foreground leading-relaxed font-semibold">
                  Cosas que la propia ciencia ha demostrado que es ineficiente.
                </p>

                <div className="pt-4 border-t border-primary/20">
                  <p className="text-foreground leading-relaxed">
                    Por eso he creado mi programa <strong className="text-primary">ESPALDA INDESTRUCTIBLE</strong>, para ayudar a personas como tú, a Eliminar Dolor Crónico de Espalda y volver a su vida de siempre.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-6">
              <h2 className="text-xl font-bold text-foreground uppercase text-center">
                Solicita tu primera entrevista
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-background border-border text-foreground h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border text-foreground h-12"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacidad"
                    checked={formData.privacidad}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, privacidad: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <label htmlFor="privacidad" className="text-sm text-foreground cursor-pointer">
                    Acepto política de privacidad
                  </label>
                </div>

                <Button type="submit" variant="hero" className="w-full text-lg">
                  QUIERO CONOCER MEJOR TU PROGRAMA
                </Button>
              </form>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:h-[700px] h-[400px] rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt="Entrenamiento personalizado para recuperación de espalda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
