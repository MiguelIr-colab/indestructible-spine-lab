import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import VideoTestimonials from "@/components/VideoTestimonials";
import heroImage from "@/assets/team-group.png";

const Programa = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/d/cnzd-y87-nk6/entrevista', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-card pt-24">
          <div className="container mx-auto px-4 py-1 lg:py-2 xl:py-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Video - First on mobile, second on desktop */}
              <div className="relative lg:h-[700px] h-[300px] md:h-[400px] rounded-lg overflow-hidden lg:order-2 order-1">
                <video
                  src="TU_URL_DE_CDN_AQUI"
                  controls
                  className="w-full h-full object-cover"
                  poster={heroImage}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

              {/* Content - Second on mobile, first on desktop */}
              <div className="space-y-6 lg:space-y-8 lg:order-1 order-2">
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-foreground">
                    Programa Espalda Indestructible
                  </h1>
                  
                  <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed">
                    Transforma tu espalda débil en una espalda fuerte y libre de dolor.
                    <span className="block mt-2 font-semibold text-primary">Un programa diseñado específicamente para ti.</span>
                  </h2>

                  <ul className="space-y-2 lg:space-y-3">
                    <li className="flex items-start gap-2 lg:gap-3 text-foreground">
                      <span className="text-primary text-lg lg:text-xl">🔹</span>
                      <span className="text-sm md:text-base lg:text-lg">Plan de entrenamiento 100% personalizado a tu condición.</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3 text-foreground">
                      <span className="text-primary text-lg lg:text-xl">🔹</span>
                      <span className="text-sm md:text-base lg:text-lg">Seguimiento semanal con tu entrenador especializado.</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3 text-foreground">
                      <span className="text-primary text-lg lg:text-xl">🔹</span>
                      <span className="text-sm md:text-base lg:text-lg">Ejercicios progresivos basados en evidencia científica.</span>
                    </li>
                    <li className="flex items-start gap-2 lg:gap-3 text-foreground">
                      <span className="text-primary text-lg lg:text-xl">🔹</span>
                      <span className="text-sm md:text-base lg:text-lg">Acceso a plataforma online 24/7 con tus rutinas.</span>
                    </li>
                  </ul>

                  <div className="text-center pt-2 lg:pt-4">
                    <Button 
                      variant="hero" 
                      className="text-sm md:text-base lg:text-lg h-11 md:h-12 lg:h-14 px-8 md:px-10 lg:px-12 w-full lg:w-auto"
                      onClick={handleCalendlyClick}
                    >
                      RESERVA MI PRIMERA ENTREVISTA
                    </Button>
                    <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 lg:mt-4">
                      Agenda tu entrevista personalizada ahora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-12 lg:py-20 bg-[hsl(var(--light-gray))]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border-2 border-primary/20 p-6 md:p-8 rounded-lg space-y-4 lg:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">¿Por qué sé que funciona?</h2>
                
                <p className="text-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                  Porque el ejercicio y concretamente, <strong>un plan hecho para ti</strong>, consigue una mejoría importante en lo que respecta al Dolor Crónico de espalda.
                </p>

                <p className="text-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                  En algún momento de su vida, el <strong>80% de la población mundial</strong> sufrirá dolor de espalda y, la solución que te ofrecen es:
                </p>

                <ul className="space-y-2 lg:space-y-3 text-foreground text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary mt-1 text-lg lg:text-xl">•</span>
                    <span>Hacer reposo y no hacer grandes esfuerzos.</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary mt-1 text-lg lg:text-xl">•</span>
                    <span>Todo tipo de medicación</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary mt-1 text-lg lg:text-xl">•</span>
                    <span>Masajes, infiltraciones u operarte.</span>
                  </li>
                </ul>

                <p className="text-foreground leading-relaxed font-semibold text-sm md:text-base lg:text-lg">
                  Cosas que la propia ciencia ha demostrado que es ineficiente.
                </p>

                <div className="pt-4 lg:pt-6 border-t border-primary/20">
                  <p className="text-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                    Por eso he creado mi programa <strong className="text-primary">ESPALDA INDESTRUCTIBLE</strong>, para ayudar a personas como tú, a Eliminar Dolor Crónico de Espalda y volver a su vida de siempre.
                  </p>
                </div>

                <div className="text-center pt-4 lg:pt-6">
                  <Button 
                    variant="hero" 
                    className="text-sm md:text-base lg:text-lg h-11 md:h-12 lg:h-14 px-8 md:px-10 lg:px-12 w-full lg:w-auto"
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
