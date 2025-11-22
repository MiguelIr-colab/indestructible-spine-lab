import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MinimalFooter from "@/components/MinimalFooter";

const ThankYouEi = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-8 md:py-12">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary/10 rounded-full p-6">
                  <CheckCircle className="w-20 h-20 text-primary" />
                </div>
              </div>

              {/* Main Message */}
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                ¡Pago Realizado con Éxito!
              </h1>
              
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <p className="text-xl text-foreground mb-6">
                  Gracias por tu compra. Tu pago se ha procesado correctamente.
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  Comienza tu camino hacia una Espalda Indestructible
                </p>
                
                <div className="bg-muted/50 border border-border rounded-lg p-6 mb-6">
                  <h2 className="text-lg font-bold mb-3 text-foreground">
                    ¿Qué hacer ahora?
                  </h2>
                  <ul className="space-y-3 text-left text-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Recibirás un email con toda la información de acceso al programa
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Revisa tu bandeja de entrada y carpeta de spam
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Prepárate para comenzar tu transformación
                      </span>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  asChild
                >
                  <a href="/">
                    Volver al Inicio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default ThankYouEi;
