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

    toast.success("¡Gracias! Te enviaremos tu regalo pronto");
    setFormData({ nombre: "", email: "", privacidad: false });
  };

  return (
    <section className="min-h-screen bg-card pt-20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-primary uppercase">Manual para aliviar el dolor</span>{" "}
                <span className="text-foreground">provocado por una discopatía</span>
              </h1>
              
              <div className="space-y-3 text-foreground">
                <p className="text-lg font-medium">INCLUYE 3 SESIONES COMPLETAS DE EJERCICIOS:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">Sin salir de casa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">Sin material</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">En solo 15'</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-6">
              <h2 className="text-xl font-bold text-foreground uppercase text-center">
                Rellena el siguiente formulario para recibir tu regalo
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

                <Button type="submit" variant="hero" className="w-full">
                  ENVIAR
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
