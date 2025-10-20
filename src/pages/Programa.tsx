import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import VideoTestimonials from "@/components/VideoTestimonials";
import heroImage from "@/assets/hero-image.jpg";

const Programa = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/entrenaconrobertogalvan/30m', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-card pt-20">
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image - First on mobile, second on desktop */}
              <div className="relative lg:h-[700px] h-[400px] rounded-lg overflow-hidden lg:order-2 order-1">
                <img
                  src={heroImage}
                  alt="Programa Espalda Indestructible - Entrenamiento personalizado para eliminar dolor de espalda"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Second on mobile, first on desktop */}
              <div className="space-y-8 lg:order-1 order-2">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                    Programa Espalda Indestructible
                  </h1>
                  
                  <h2 className="text-xl lg:text-2xl text-foreground leading-relaxed">
                    Transforma tu espalda débil en una espalda fuerte y libre de dolor.
                    <span className="block mt-2 font-semibold text-primary">Un programa diseñado específicamente para ti.</span>
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <span className="text-primary text-xl">🔹</span>
                      <span className="text-lg">Plan de entrenamiento 100% personalizado a tu condición.</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <span className="text-primary text-xl">🔹</span>
                      <span className="text-lg">Seguimiento semanal con tu entrenador especializado.</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <span className="text-primary text-xl">🔹</span>
                      <span className="text-lg">Ejercicios progresivos basados en evidencia científica.</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <span className="text-primary text-xl">🔹</span>
                      <span className="text-lg">Acceso a plataforma online 24/7 con tus rutinas.</span>
                    </li>
                  </ul>

                  <div className="text-center pt-4">
                    <Button 
                      variant="hero" 
                      className="text-lg h-14 px-12"
                      onClick={handleCalendlyClick}
                    >
                      RESERVA MI PRIMERA ENTREVISTA
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Agenda tu entrevista personalizada ahora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border-2 border-primary/20 p-6 md:p-8 rounded-lg space-y-6">
                <h2 className="text-3xl font-bold text-primary text-center">¿Por qué sé que funciona?</h2>
                
                <p className="text-foreground leading-relaxed text-lg">
                  Porque el ejercicio y concretamente, <strong>un plan hecho para ti</strong>, consigue una mejoría importante en lo que respecta al Dolor Crónico de espalda.
                </p>

                <p className="text-foreground leading-relaxed text-lg">
                  En algún momento de su vida, el <strong>80% de la población mundial</strong> sufrirá dolor de espalda y, la solución que te ofrecen es:
                </p>

                <ul className="space-y-3 text-foreground text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span>Hacer reposo y no hacer grandes esfuerzos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span>Todo tipo de medicación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span>Masajes, infiltraciones u operarte.</span>
                  </li>
                </ul>

                <p className="text-foreground leading-relaxed font-semibold text-lg">
                  Cosas que la propia ciencia ha demostrado que es ineficiente.
                </p>

                <div className="pt-6 border-t border-primary/20">
                  <p className="text-foreground leading-relaxed text-lg">
                    Por eso he creado mi programa <strong className="text-primary">ESPALDA INDESTRUCTIBLE</strong>, para ayudar a personas como tú, a Eliminar Dolor Crónico de Espalda y volver a su vida de siempre.
                  </p>
                </div>

                <div className="text-center pt-6">
                  <Button 
                    variant="hero" 
                    className="text-lg h-14 px-12"
                    onClick={handleCalendlyClick}
                  >
                    RESERVA MI PRIMERA ENTREVISTA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <VideoTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Programa;
