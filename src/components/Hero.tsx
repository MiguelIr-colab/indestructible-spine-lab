import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-image-new.jpg";
import heroBackground from "@/assets/hero-background-new.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  const testimonials = [
    {
      name: "JAVI",
      age: 44,
      condition: "PROTRUSIÓN",
      videoId: "dQw4w9WgXcQ",
      quote: "No podía trabajar, ni estar sentado, ahora me agacho sin miedo al dolor",
      result: "Con 1 protrusión al agacharse se quedaba clavado y no le permitía trabajar sin dolor. Pasados 2 meses Javi está agachándose a levantar más de 50 kg como si nada.",
    },
    {
      name: "DAVID",
      age: 44,
      condition: "2 HERNIAS",
      videoId: "dQw4w9WgXcQ",
      quote: "Me quedaba clavado y no podía trabajar sin dolor",
      result: "Con 2 hernias discales David no podía estar de pie más de 10 minutos. Ahora trabaja jornadas completas sin molestias y ha recuperado su vida activa.",
    },
    {
      name: "LAURA",
      age: 52,
      condition: "LUMBALGIA CRÓNICA",
      videoId: "dQw4w9WgXcQ",
      quote: "Después de 10 años con dolor, ahora puedo jugar con mis nietos",
      result: "Laura sufría de dolor lumbar crónico que le impedía agacharse. Tras 3 meses de programa, puede realizar todas sus actividades diarias sin limitaciones.",
    },
    {
      name: "PILAR",
      age: 71,
      condition: "2 HERNIAS",
      videoId: "dQw4w9WgXcQ",
      quote: "Con 2 Hernias de disco y sin poder mover a penas una pierna, ni con fisioterapia ni medicación mejoraba",
      result: "Con 2 Hernias de disco y sin poder mover a penas una pierna, ni con fisioterapia ni medicación mejoraba, hasta que comenzó a trabajar la fuerza y movilidad que necesitaba.",
    },
    {
      name: "CRISTINA",
      age: 43,
      condition: "1 HERNIA",
      videoId: "dQw4w9WgXcQ",
      quote: "Menos mal que el médico me dijo de entrenar, mejor que operarme",
      result: "Con una hernia e importante compresión medular, con calambres en las dos piernas, Cristina tuvo que dejar de trabajar, y actualmente está corriendo y moviendo peso sin esos calambres.",
    },
    {
      name: "MARCOS",
      age: 38,
      condition: "HERNIA DISCAL",
      videoId: "dQw4w9WgXcQ",
      quote: "Evité la cirugía y recuperé mi movilidad al 100%",
      result: "Los médicos le recomendaron cirugía por una hernia L5-S1. Con el programa evitó la operación y ahora entrena sin dolor.",
    },
  ];

  return (
    <section className="min-h-screen relative pt-16 lg:pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center',
        }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 lg:py-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Image - First on mobile, second on desktop */}
          <div className="relative lg:h-[500px] h-[200px] rounded-lg overflow-hidden lg:order-2 order-1 w-full">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/draffep0n/video/upload/c_limit,w_720,f_auto,q_auto:eco/v1763053970/video_presentación_web_wh9yvf.mp4"
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="metadata"
            />
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-3 lg:space-y-6 lg:order-1 order-2 w-full overflow-hidden">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-foreground break-words">
                Fortalece tu columna sin riesgos, sólo para personas con patologías de columna: Hernias, protrusiones, lisis, estenosis...
              </h1>
              
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed break-words">
                Programa online individualizado por fisioterapeutas y entrenadores, para fortalecer y estabilizar tu columna.
                <span className="block mt-1 lg:mt-2 font-semibold text-primary break-words">Sin los riesgos de la cirugía y desde casa</span>
              </h2>

              <ul className="space-y-1.5 lg:space-y-2 w-full">
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-primary text-base lg:text-xl flex-shrink-0 mt-0.5">🔹</span>
                  <span className="text-xs sm:text-sm lg:text-base break-words">Estudiamos tu biomecánica.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-primary text-base lg:text-xl flex-shrink-0 mt-0.5">🔹</span>
                  <span className="text-xs sm:text-sm lg:text-base break-words">Creamos tu programa 100% según tus test iniciales.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-primary text-base lg:text-xl flex-shrink-0 mt-0.5">🔹</span>
                  <span className="text-xs sm:text-sm lg:text-base break-words">Acompañamiento profesional por fisios y entrenadores a diario.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-primary text-base lg:text-xl flex-shrink-0 mt-0.5">🔹</span>
                  <span className="text-xs sm:text-sm lg:text-base break-words">Resultados respaldados por evidencia científica.</span>
                </li>
              </ul>

              <div className="text-center pt-1 lg:pt-0 w-full">
                <Button 
                  variant="hero" 
                  className="text-[10px] leading-tight xs:text-xs sm:text-sm md:text-base lg:text-lg h-10 sm:h-11 md:h-12 lg:h-14 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 w-full lg:w-auto break-words whitespace-normal"
                  onClick={() => window.open('https://calendly.com/d/cnzd-y87-nk6/entrevista', '_blank')}
                >
                  QUIERO UNA ENTREVISTA
                </Button>
                <p className="text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-2 lg:mt-4 break-words px-2">
                  Agenda tu primera entrevista y descubre cómo empezar cuanto antes.
                </p>
              </div>

              {/* Micro-Testimonials Carousel Section - Compact */}
              <div className="mt-3 lg:mt-6 w-full overflow-hidden">
                <div className="text-center mb-1.5 lg:mb-3">
                  <div className="flex gap-0.5 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 7000,
                      stopOnInteraction: false,
                    }),
                  ]}
                  className="w-full max-w-xl mx-auto"
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="text-center px-2">
                        <p className="text-[11px] sm:text-xs lg:text-sm italic text-foreground break-words">
                          "Llevaba años con dolor lumbar y ahora entreno sin miedo." — <span className="font-semibold">Ana M.</span>
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center px-2">
                        <p className="text-[11px] sm:text-xs lg:text-sm italic text-foreground break-words">
                          "Después de 2 hernias, ahora puedo trabajar jornadas completas sin dolor." — <span className="font-semibold">David R.</span>
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center px-2">
                        <p className="text-[11px] sm:text-xs lg:text-sm italic text-foreground break-words">
                          "Evité la cirugía y recuperé mi vida activa al 100%." — <span className="font-semibold">Marcos L.</span>
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center px-2">
                        <p className="text-[11px] sm:text-xs lg:text-sm italic text-foreground break-words">
                          "Con 71 años y 2 hernias, ahora me muevo sin limitaciones." — <span className="font-semibold">Pilar G.</span>
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center px-2">
                        <p className="text-[11px] sm:text-xs lg:text-sm italic text-foreground break-words">
                          "Pasé de no poder agacharme a levantar más de 50 kg sin problemas." — <span className="font-semibold">Javi S.</span>
                        </p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-0 h-5 w-5 lg:h-6 lg:w-6 hidden sm:flex" />
                  <CarouselNext className="right-0 h-5 w-5 lg:h-6 lg:w-6 hidden sm:flex" />
                </Carousel>

                <div className="text-center mt-2 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = '/testimonios'}
                    className="text-[10px] sm:text-xs h-7 sm:h-8 px-3 break-words whitespace-normal"
                  >
                    Ver más testimonios
                  </Button>
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
