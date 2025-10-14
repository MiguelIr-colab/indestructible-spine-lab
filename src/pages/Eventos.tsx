import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Eventos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    privacidad: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    
    if (!formData.privacidad) {
      toast.error("Debes aceptar la política de privacidad");
      return;
    }

    toast.success("¡Formulario enviado con éxito!");
    setFormData({ nombre: "", email: "", privacidad: false });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* VSL Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden mb-12">
                {/* Placeholder for video - replace with actual video embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Inserta aquí tu video de Vimeo o YouTube
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ejemplo: &lt;iframe src="https://www.youtube.com/embed/VIDEO_ID"&gt;&lt;/iframe&gt;
                    </p>
                  </div>
                </div>
                {/* 
                  Replace the above placeholder with your actual video embed:
                  <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                */}
              </div>

              {/* Form Section */}
              <div className="bg-card border border-border rounded-lg p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  ACCEDE PARA FORTALECER TU COLUMNA
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-primary mb-2">
                      Nombre
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="bg-background border-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="bg-background border-input"
                      required
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
                    <label htmlFor="privacidad" className="text-sm text-foreground">
                      Acepto la{" "}
                      <a href="#" className="text-primary hover:underline">
                        política de privacidad
                      </a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
                  >
                    ENVIAR
                  </Button>
                </form>
              </div>

              {/* Next Steps Section */}
              <div className="mt-16 bg-card border border-border rounded-lg p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
                  ¿CUÁL ES EL SIGUIENTE PASO?
                </h3>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Se te abrirá YouTube, presiona allí en RECIBIR AVISO
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      MIRA tu EMAIL te he enviado el enlace al grupo en WhatsApp
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Mira en la carpeta de SPAM por si acaso
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Si no lo haces, no podrás ver el BOTÓN para entrar al GRUPO
                    </p>
                  </div>
                </div>
              </div>

              {/* Waiting Message */}
              <div className="mt-12 text-center">
                <h4 className="text-xl md:text-2xl font-bold text-foreground">
                  TIENES QUE ESPERAR AL PRÓXIMO LANZAMIENTO GRATUITO
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Eventos;
