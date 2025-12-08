import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Play } from "lucide-react";
import testimonialFatima from "@/assets/testimonial-fatima.png";
import testimonialCristina from "@/assets/testimonial-cristina.png";
import testimonialMariano from "@/assets/testimonial-mariano.png";
import testimonialMiguelangel from "@/assets/testimonial-miguelangel.png";
import testimonialDavid from "@/assets/testimonial-david.png";
import testimonialDorle from "@/assets/testimonial-dorle.png";

const VideoTestimonials = () => {
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});

  const handlePlayVideo = (index: number) => {
    setPlayingVideos(prev => ({ ...prev, [index]: true }));
  };

  const testimonials = [
    {
      name: "FÁTIMA",
      age: 0,
      condition: "ESCOLIOSIS,\n2 HERNIAS Y\nDESPLAZAMIENTO DE DISCO",
      videoId: "_A9eHRvBigs",
      playlistIndex: 23,
      quote: "Pasé de no poder andar sin agarrarme, con escoliosis y dos hernias discales, a vivir mi día a día sin dolor.",
      result: "Vivía con dolor diario y necesitaba calmantes. Tras trabajar fuerza con Espalda Indestructible ahora camina sola, con postura normal y sin dolor en su día a día.",
      rating: 5,
      thumbnail: testimonialFatima,
    },
    {
      name: "CRISTINA",
      age: 0,
      condition: "HERNIA DISCAL\nCENTRAL L5-S1\nCON COMPRESIÓN\nMEDULAR",
      videoId: "QyZTTrvjm1w",
      playlistIndex: 31,
      quote: "Pensaba que solo la operación me salvaría y hoy, con una hernia discal L5-S1 central, hago entrenamiento de fuerza y vuelvo a trotar suave.",
      result: "En 12 semanas desaparecieron los calambres en las piernas y los pinchazos en la espalda y el dolor lumbar. Ha vuelto a caminar y ya puede trotar suave y entrenar con barra de 20 kg.",
      rating: 5,
      thumbnail: testimonialCristina,
    },
    {
      name: "MARIANO",
      age: 0,
      condition: "HERNIA DISCAL\nL5-S1 IZQUIERDA\nY RECTIFICACIÓN\nLUMBAR",
      videoId: "eaSPIXLfCLA",
      playlistIndex: 32,
      quote: "Pasé de vivir tumbado por una hernia discal L5-S1 izquierda y rectificación lumbar a volver a la bici y moto, al teletrabajo y al ejercicio con el programa Espalda Indestructible.",
      result: "Ha pasado de estar el 90% del día tumbado, con dolor lumbar y de pierna, a montar en bici 13 km sin dolor, ir en moto, hacer la compra y trabajar horas sentado.",
      rating: 5,
      thumbnail: testimonialMariano,
    },
    {
      name: "MIGUEL ÁNGEL",
      age: 0,
      condition: "HERNIA DISCAL\nCON RECIDIVA,\nOPERADO DOS VECES",
      videoId: "tmltcVMB5Ys",
      playlistIndex: 33,
      quote: "De no poder levantarse de la cama, operado dos veces de hernia discal y con miedo a agacharse, a entrenar con fuerza y sin dolor crónico de espalda cargando la olla de la abuela.",
      result: "Tras 12 semanas con el programa espalda indestructible ya no tiene dolor crónico de espalda, ha evitado una tercera operación y puede levantar 30 kg sin miedo a agacharse.",
      rating: 5,
      thumbnail: testimonialMiguelangel,
    },
    {
      name: "DAVID",
      age: 0,
      condition: "HERNIA L4-L5,\nPROTRUSIÓN L3-L4\nY ESTENOSIS LUMBAR",
      videoId: "c9Rc5x_mJoY",
      playlistIndex: 34,
      quote: "Pasé de necesitar estar tumbado por el dolor a moverme, sentarme y caminar con confianza, sin miedo a que vuelva la ciática.",
      result: "Con el programa online individualizado pasó de dolor lumbar, ciática y adormecimiento del pie derecho a sentarse más de 4 horas, caminar varias horas y hacer su vida diaria sin dolor.",
      rating: 5,
      thumbnail: testimonialDavid,
    },
    {
      name: "DORLE",
      age: 0,
      condition: "DISCOPATÍA DEGENERATIVA\nL4-L5 Y L5-S1\nCON PROTUSIÓN",
      videoId: "iD0MZPkw3c4",
      playlistIndex: 35,
      quote: "Después de 28 años con dolor diario, hoy camino y trabajo horas seguidas sin miedo a que vuelva el dolor de espalda.",
      result: "Tras 28 años con dolor lumbar y cervical por discopatía degenerativa, ahora puede caminar y estar sentada horas, trabajar y hacer vida diaria casi sin dolor de espalda.",
      rating: 5,
      thumbnail: testimonialDorle,
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
                  <div className="relative aspect-video bg-muted">
                    {testimonial.thumbnail && !playingVideos[index] ? (
                      <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <img 
                          src={testimonial.thumbnail} 
                          alt={`Testimonio de ${testimonial.name}`}
                          className="w-full h-full object-cover scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-primary-foreground fill-current" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${testimonial.videoId}?list=PLgcEARhbMJ2boEJF9CIwMot1CCAwT5C2S&index=${testimonial.playlistIndex}${playingVideos[index] ? '&autoplay=1' : ''}`}
                        title={`Testimonio de ${testimonial.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 lg:p-5 space-y-2 lg:space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">{testimonial.name}</h3>
                      </div>
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold uppercase text-center leading-tight max-w-[140px] whitespace-pre-line">
                        {testimonial.condition}
                      </span>
                    </div>

                    <div className="flex gap-0.5 lg:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <div className="bg-primary/10 p-2 lg:p-3 rounded-lg">
                      <p className="text-foreground font-medium italic text-xs lg:text-sm">"{testimonial.quote}"</p>
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
