import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gift } from "lucide-react";
import { useEffect } from "react";

const Pdf = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
                Rellena el formulario para obtener tu guía gratuita
              </h1>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                ¿Qué incluye el PDF?
              </h2>
              <ul className="space-y-3 mb-8 text-card-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Entiende tu tipo de discopatía y sus síntomas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>3 sesiones de iniciación listas para seguir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Ejercicios suaves para aliviar glúteos, pierna y zona lumbar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Bloqueos que frenan tu mejora y cómo superarlos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Qué hacer si el dolor sigue y cuándo pedirme ayuda</span>
                </li>
              </ul>

              <iframe 
                data-skip-lazy="" 
                src="https://entrenaconrobertogalvan.ipzmarketing.com/f/Dgt-d8The04" 
                frameBorder="0" 
                scrolling="no" 
                width="100%" 
                className="ipz-iframe min-h-[500px]"
                title="Formulario de registro"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pdf;
