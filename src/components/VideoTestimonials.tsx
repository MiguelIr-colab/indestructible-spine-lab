import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Play } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "ALFONSO",
      age: 0,
      condition: "3 PROTRUSIONES (L3–S1)",
      videoId: "uKoibeP8OQ8",
      playlistIndex: 1,
      quote: "Vivía con dolor cada día. En pocas semanas volví a correr y moverme sin miedo.",
      result: "Eliminó el dolor tras 10 años y volvió a correr, trabajar y disfrutar sin limitaciones.",
      rating: 5,
    },
    {
      name: "ELI",
      age: 0,
      condition: "ESCOLIOSIS Y DOLOR LUMBAR",
      videoId: "SlpiNZsuhuc",
      playlistIndex: 3,
      quote: "Vivía limitada por el dolor. Ahora entreno, trabajo y disfruto de mi cuerpo.",
      result: "Ganó estabilidad, confianza y una espalda fuerte sin recurrir a terapias pasivas.",
      rating: 5,
    },
    {
      name: "GEMMA",
      age: 0,
      condition: "HERNIA CERVICAL Y DOLOR DE BRAZO",
      videoId: "6J9yA03JGm0",
      playlistIndex: 5,
      quote: "Pensé que me operaría. Hoy no tengo dolor y vuelvo a dormir tranquila.",
      result: "Recuperó movilidad cervical y eliminó el dolor en pocas semanas.",
      rating: 5,
    },
    {
      name: "MATÍAS",
      age: 0,
      condition: "HERNIA L4-L5 Y FECHA DE CIRUGÍA",
      videoId: "L3JWrRBqujE",
      playlistIndex: 6,
      quote: "Tenía cirugía programada. El entrenamiento me devolvió la vida.",
      result: "Canceló su operación y volvió a moverse sin dolor ni limitaciones.",
      rating: 5,
    },
    {
      name: "RAMÓN",
      age: 0,
      condition: "HERNIA L5-S1 Y PROTUSIÓN L4-L5",
      videoId: "za0gs_X2pu0",
      playlistIndex: 7,
      quote: "Vivía con dolor constante. Hoy camino, trabajo y duermo sin molestias.",
      result: "Recuperó movilidad y fuerza, sin necesidad de medicación.",
      rating: 5,
    },
    {
      name: "SILVIA",
      age: 0,
      condition: "HERNIA L4-L5 CON EXTRUSIÓN",
      videoId: "2LYTh7PEMWA",
      playlistIndex: 9,
      quote: "Llevaba años con dolor. Entrenar fue lo único que me devolvió la libertad.",
      result: "Redujo el dolor a cero y volvió a jugar al pádel y disfrutar de su vida activa.",
      rating: 5,
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
                      src={`https://www.youtube.com/embed/${testimonial.videoId}?list=PLgcEARhbMJ2boEJF9CIwMot1CCAwT5C2S&index=${testimonial.playlistIndex}`}
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
