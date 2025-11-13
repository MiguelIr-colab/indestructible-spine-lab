import { Star, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "ALFONSO",
      age: 0,
      condition: "3 PROTRUSIONES (L3–S1)",
      videoId: "1w7SqYsQKNM",
      quote: "Vivía con dolor cada día. En pocas semanas volví a correr y moverme sin miedo.",
      result: "Eliminó el dolor tras 10 años y volvió a correr, trabajar y disfrutar sin limitaciones.",
      rating: 5,
    },
    {
      name: "EDUARDO",
      age: 0,
      condition: "DISCOPATÍA LUMBAR CRÓNICA",
      videoId: "2aMuVJmP9zE",
      quote: "Tras años de tratamientos fallidos, descubrí que la fuerza era mi medicina.",
      result: "Eliminó el dolor lumbar y volvió a entrenar y trabajar sin miedo.",
      rating: 5,
    },
    {
      name: "ELI",
      age: 0,
      condition: "ESCOLIOSIS Y DOLOR LUMBAR",
      videoId: "SlpiNZsuhuc",
      quote: "Vivía limitada por el dolor. Ahora entreno, trabajo y disfruto de mi cuerpo.",
      result: "Gana estabilidad, confianza y una espalda fuerte sin recurrir a terapias pasivas.",
      rating: 5,
    },
    {
      name: "SERGIO",
      age: 0,
      condition: "PROTUSIÓN L5-S1",
      videoId: "dseWDQv9hfg",
      quote: "Pasé de vivir con miedo al movimiento a disfrutar entrenando sin dolor.",
      result: "Reforzó su espalda, eliminó el dolor y recuperó su vida activa.",
      rating: 5,
    },
    {
      name: "GEMMA",
      age: 0,
      condition: "HERNIA CERVICAL Y DOLOR DE BRAZO",
      videoId: "6J9yA03JGm0",
      quote: "Pensé que me operaría. Hoy no tengo dolor y vuelvo a dormir tranquila.",
      result: "Recuperó movilidad cervical y eliminó el dolor en pocas semanas.",
      rating: 5,
    },
    {
      name: "MATÍAS",
      age: 0,
      condition: "HERNIA L4-L5 Y FECHA DE CIRUGÍA",
      videoId: "L3JWrRBqujE",
      quote: "Tenía cirugía programada. El entrenamiento me devolvió la vida.",
      result: "Canceló su operación y volvió a moverse sin dolor ni limitaciones.",
      rating: 5,
    },
    {
      name: "RAMÓN",
      age: 0,
      condition: "HERNIA L5-S1 Y PROTUSIÓN L4-L5",
      videoId: "za0gs_X2pu0",
      quote: "Vivía con dolor constante. Hoy camino, trabajo y duermo sin molestias.",
      result: "Recuperó movilidad y fuerza, sin necesidad de medicación.",
      rating: 5,
    },
    {
      name: "ABDELAH",
      age: 0,
      condition: "DOS PROTRUSIONES LUMBARES",
      videoId: "W6JcuIj-Rxk",
      quote: "No podía ni sentarme. Ahora trabajo, duermo bien y entreno sin miedo.",
      result: "Eliminó el dolor y recuperó fuerza y confianza en pocas semanas.",
      rating: 5,
    },
    {
      name: "SILVIA",
      age: 0,
      condition: "HERNIA L4-L5 CON EXTRUSIÓN",
      videoId: "2LYTh7PEMWA",
      quote: "Llevaba años con dolor. Entrenar fue lo único que me devolvió la libertad.",
      result: "Redujo el dolor a cero y volvió a jugar al pádel y disfrutar de su vida activa.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-[hsl(var(--light-gray))]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-secondary-foreground">
            Personas como ellos nos avalan
          </h2>
          <p className="text-lg text-secondary-foreground max-w-3xl mx-auto mb-8">
            Resultados reales de personas que superaron el dolor de espalda y recuperaron su vida gracias al programa <span className="font-bold">ESPALDA INDESTRUCTIBLE</span> diseñado por Roberto Galván
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg h-14 px-12"
            onClick={() => window.open('https://calendly.com/d/cnzd-y87-nk6/entrevista', '_blank')}
          >
            RESERVA AQUÍ TU PRIMERA ENTREVISTA
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[hsl(0_0%_5.5%)] border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all h-full">
              <div className="flex flex-col h-full">
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
                <div className="p-4 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.age} años</p>
                    </div>
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold uppercase whitespace-nowrap">
                      {testimonial.condition}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-foreground font-medium italic text-sm">"{testimonial.quote}"</p>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-foreground mb-1">Resultados:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg h-14 px-12"
            onClick={() => window.open('https://calendly.com/d/cnzd-y87-nk6/entrevista', '_blank')}
          >
            RESERVA TU ENTREVISTA
          </Button>
          <p className="text-center text-sm text-secondary-foreground mt-4">
            Únete a las personas que ya transformaron su vida
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
