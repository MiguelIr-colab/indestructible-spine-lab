import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import MinimalFooter from "@/components/MinimalFooter";

const Verifymailpdf = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-8 md:py-12">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary/10 rounded-full p-6">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Main Message */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ya casi tienes tu guía
                </h1>
                <div className="bg-card border border-border rounded-lg p-8">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg text-foreground mb-4">
                    Hemos enviado un correo para confirmar tu dirección.
                  </p>
                  <p className="text-foreground">
                    <strong>Ábrelo y confirma para recibir tu GUÍA de iniciación</strong>
                  </p>
                </div>
              </div>

              {/* UX Tips */}
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Consejos importantes
                </h2>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Revisa tu carpeta de spam</strong> - A veces los correos automáticos terminan ahí
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Añade nuestro email a tus contactos</strong> para asegurar que recibas futuras comunicaciones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Busca un email de "Espalda Indestructible"</strong> o revisa la bandeja de entrada principal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default Verifymailpdf;
