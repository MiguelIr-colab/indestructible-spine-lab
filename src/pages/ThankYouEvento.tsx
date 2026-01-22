import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import MinimalFooter from "@/components/MinimalFooter";
const ThankYouEvento = () => {
  return <div className="min-h-screen bg-background">
      <main className="py-8 md:py-12">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary/10 rounded-full p-6">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Main Message */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                ¡Registro Completado con Éxito!
              </h1>
              
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                
                <p className="text-foreground mb-8">
                  Únete a nuestro grupo privado de WhatsApp para recibir actualizaciones exclusivas y conectar con otros miembros.
                </p>
                
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold" asChild>
                  <a href="https://chat.whatsapp.com/LwJ64VwJhGqLs3WRxykWbC?mode=wwt" target="_blank" rel="noopener noreferrer">
                    Unirse al Grupo de WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>;
};
export default ThankYouEvento;