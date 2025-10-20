import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Play } from "lucide-react";

const VideoTestimonials = () => {
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
    <section className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-primary">
            Personas como ellos nos avalan
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="p-4 lg:p-5 space-y-2 lg:space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">{testimonial.name}</h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">{testimonial.age} años</p>
                      </div>
                      <span className="bg-primary text-primary-foreground px-2 py-0.5 lg:px-3 lg:py-1 rounded-md text-[10px] lg:text-xs font-bold uppercase whitespace-nowrap">
                        {testimonial.condition}
                      </span>
                    </div>

                    <div className="bg-primary/10 p-2 lg:p-3 rounded-lg">
                      <p className="text-foreground font-medium italic text-xs lg:text-sm">"{testimonial.quote}"</p>
                    </div>

                    <div className="flex gap-0.5 lg:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <div>
                      <p className="text-[10px] lg:text-xs font-semibold text-foreground mb-1">Resultados:</p>
                      <p className="text-[10px] lg:text-xs text-muted-foreground leading-relaxed">
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

        <div className="text-center mt-6 lg:mt-8">
          <a 
            href="/testimonios" 
            className="inline-block bg-primary text-primary-foreground px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            Escucha a más alumnos
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
