import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Micro-Testimonials Carousel Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
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
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="text-center px-4">
                <p className="text-lg italic text-foreground">
                  "Llevaba años con dolor lumbar y ahora entreno sin miedo." — <span className="font-semibold">Ana M.</span>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center px-4">
                <p className="text-lg italic text-foreground">
                  "Después de 2 hernias, ahora puedo trabajar jornadas completas sin dolor." — <span className="font-semibold">David R.</span>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center px-4">
                <p className="text-lg italic text-foreground">
                  "Evité la cirugía y recuperé mi vida activa al 100%." — <span className="font-semibold">Marcos L.</span>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center px-4">
                <p className="text-lg italic text-foreground">
                  "Con 71 años y 2 hernias, ahora me muevo sin limitaciones." — <span className="font-semibold">Pilar G.</span>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center px-4">
                <p className="text-lg italic text-foreground">
                  "Pasé de no poder agacharme a levantar más de 50 kg sin problemas." — <span className="font-semibold">Javi S.</span>
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0 h-8 w-8" />
          <CarouselNext className="right-0 h-8 w-8" />
        </Carousel>

        <div className="text-center mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.href = '/testimonios'}
          >
            Ver todos los testimonios
          </Button>
        </div>
      </div>

      {/* Video Testimonials Carousel Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
            Personas como ellos nos avalan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reales de personas que superaron el dolor de espalda y recuperaron su vida
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 7000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full">
                  {/* Video Section */}
                  <div className="relative aspect-video bg-muted group cursor-pointer">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                      title={`Testimonio de ${testimonial.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="bg-primary/90 rounded-full p-3">
                        <Play className="w-6 h-6 text-primary-foreground fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.age} años</p>
                      </div>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold uppercase whitespace-nowrap">
                        {testimonial.condition}
                      </span>
                    </div>

                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-foreground font-medium italic text-sm">"{testimonial.quote}"</p>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Resultados:</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 h-8 w-8 md:h-10 md:w-10" />
          <CarouselNext className="right-2 h-8 w-8 md:h-10 md:w-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
