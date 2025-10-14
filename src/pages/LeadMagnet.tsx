import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Gift } from "lucide-react";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    privacidad: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    if (!formData.privacidad) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Perfecto!",
      description: "Revisa tu email para recibir tu guía gratuita",
    });

    setFormData({ nombre: "", email: "", privacidad: false });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Gift className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
                Guía Gratuita: Ejercicios para Hernia Discal
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descarga tu guía paso a paso con los ejercicios más efectivos y seguros para fortalecer tu espalda
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                ¿Qué incluye la guía?
              </h2>
              <ul className="space-y-3 mb-8 text-card-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>10 ejercicios progresivos ilustrados paso a paso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Rutina semanal adaptable a tu nivel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Consejos de higiene postural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Qué ejercicios evitar con hernia discal</span>
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-card-foreground">Nombre completo</Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="mt-2 bg-input border-border text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-input border-border text-foreground"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacidad"
                    checked={formData.privacidad}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacidad: checked as boolean })
                    }
                  />
                  <label htmlFor="privacidad" className="text-sm text-muted-foreground leading-relaxed">
                    Acepto la política de privacidad y el tratamiento de mis datos
                  </label>
                </div>

                <Button type="submit" variant="default" className="w-full" size="lg">
                  DESCARGAR GUÍA GRATIS
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeadMagnet;
