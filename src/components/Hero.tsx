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
          {/* Image - First on mobile, second on desktop */}
          <div className="relative lg:h-[700px] h-[400px] rounded-lg overflow-hidden lg:order-2 order-1">
            <img
              src={heroImage}
              alt="Entrenador ayudando a persona a mejorar el dolor de espalda con ejercicios guiados"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                Di adiós al dolor de espalda y recupera tu vida de siempre
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-foreground leading-relaxed">
                Programa online personalizado que elimina el dolor crónico de espalda fortaleciendo tu columna desde la raíz.
                <span className="block mt-2 font-semibold text-primary">Sin medicación, sin reposo, sin cirugías.</span>
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Mejora tu movilidad y fuerza real en pocas semanas.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">100% adaptado a tu nivel y condición.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Acompañamiento profesional en cada fase.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Resultados respaldados por evidencia científica.</span>
                </li>
              </ul>

              <div className="bg-card border-2 border-primary/20 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-primary">¿Por qué sé esto?</h3>
                
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

                <Button type="submit" variant="hero" className="w-full text-lg h-14">
                  QUIERO UNA ESPALDA INDESTRUCTIBLE
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Solicita tu primera entrevista y descubre cómo eliminar el dolor desde casa.
                </p>
              </form>

              {/* Micro-testimonial */}
              <div className="pt-4 border-t border-border">
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-center text-sm text-foreground italic">
                  "Llevaba años con dolor lumbar y ahora entreno sin miedo." — <strong>Ana M.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
