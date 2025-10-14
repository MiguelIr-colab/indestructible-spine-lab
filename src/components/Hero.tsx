import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const microTestimonials = [
    { text: "Llevaba años con dolor lumbar y ahora entreno sin miedo.", author: "Ana M." },
    { text: "Ya no necesito pastillas para el dolor, mi espalda está más fuerte que nunca.", author: "Carlos R." },
    { text: "Pensé que tendría que vivir con el dolor, pero este programa cambió mi vida.", author: "Laura G." },
    { text: "De estar de baja a volver a trabajar sin limitaciones en 3 meses.", author: "Miguel S." },
    { text: "No podía jugar con mis hijos, ahora disfruto cada momento sin dolor.", author: "Patricia V." },
  ];

  return (
    <section className="min-h-screen bg-card pt-20">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image - First on mobile, second on desktop */}
          <div className="relative lg:h-[500px] h-[300px] rounded-lg overflow-hidden lg:order-2 order-1">
            <img
              src={heroImage}
              alt="Entrenador ayudando a persona a mejorar el dolor de espalda con ejercicios guiados"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-6 lg:order-1 order-2">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-foreground">
                Di adiós al dolor de espalda y recupera tu vida de siempre
              </h1>
              
              <h2 className="text-lg lg:text-xl text-foreground leading-relaxed">
                Programa online personalizado que elimina el dolor crónico de espalda fortaleciendo tu columna desde la raíz.
                <span className="block mt-2 font-semibold text-primary">Sin medicación, sin reposo, sin cirugías.</span>
              </h2>

              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-base">Mejora tu movilidad y fuerza real en pocas semanas.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-base">100% adaptado a tu nivel y condición.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-base">Acompañamiento profesional en cada fase.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-base">Resultados respaldados por evidencia científica.</span>
                </li>
              </ul>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  className="text-base lg:text-lg h-12 lg:h-14 px-8 lg:px-12"
                  onClick={() => window.location.href = '/programa'}
                >
                  QUIERO UNA ESPALDA INDESTRUCTIBLE
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Solicita tu primera entrevista y descubre cómo eliminar el dolor desde casa.
                </p>

                {/* Micro-testimonial Carousel */}
                <div className="pt-4 border-t border-border mt-6">
                  <div className="flex gap-1 justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">⭐</span>
                    ))}
                  </div>
                  <Carousel
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 6000,
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {microTestimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                          <p className="text-center text-sm text-foreground italic px-4">
                            "{testimonial.text}" — <strong>{testimonial.author}</strong>
                          </p>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
