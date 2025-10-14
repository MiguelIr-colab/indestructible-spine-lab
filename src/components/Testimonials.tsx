import { Star, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "PILAR",
      age: 71,
      condition: "2 HERNIAS",
      videoId: "dQw4w9WgXcQ",
      quote: "Con 2 Hernias de disco y sin poder mover a penas una pierna, ni con fisioterapia ni medicación mejoraba",
      result: "Con 2 Hernias de disco y sin poder mover a penas una pierna, ni con fisioterapia ni medicación mejoraba, hasta que comenzó a trabajar la fuerza y movilidad que necesitaba.",
      rating: 5,
    },
    {
      name: "MARIANO",
      age: 26,
      condition: "1 HERNIA",
      videoId: "dQw4w9WgXcQ",
      quote: "Solo podía estar tumbado 1 hora ya puedo trabajar, correr e ir en moto",
      result: "Con 1 hernia de 8 mm no podía trabajar ni si quiera tumbado se le calmaba el dolor. A día de hoy, no ha tenido que operarse, corre, monta en bici y ha vuelto a su trabajo sin dolor alguno.",
      rating: 5,
    },
    {
      name: "JULIO",
      age: 29,
      condition: "4 PROTRUSIONES",
      videoId: "dQw4w9WgXcQ",
      quote: "Estu ve años en médic s y fisios, pero nada me quitaba el dolor",
      result: "Con 4 protrusiones discales, cervical, dorsal y lumbar, apenas podía estar tumbado por la electricidad en los brazos y piernas que sentía, y los médicos no veían una causa física que lo ocasionara. Al tercer mes entrenando Julio ya no tiene calambres y vuelve a hacer vida normal.",
      rating: 5,
    },
    {
      name: "SALVA",
      age: 53,
      condition: "4 ABOMBAMIENTOS",
      videoId: "dQw4w9WgXcQ",
      quote: "Me dijeron que mi dijo era cosa de la edad y ¡Ahora estoy surfeando sin dolor!",
      result: "Con 4 abombamientos discales, el consejo que le daban era conformarse porque su dolor era cosa de la edad. Ahora Salva ha vuelto a trabajar sin dolor incluso practica surf en su tiempo libre sin acordarse de la espalda.",
      rating: 5,
    },
    {
      name: "CRISTINA",
      age: 43,
      condition: "1 HERNIA",
      videoId: "dQw4w9WgXcQ",
      quote: "Menos mal que el médico me dijo de entrenar, mejor que operarme",
      result: "Con una hernia e importante compresión medular, con calambres en las dos piernas, Cristina tuvo que dejar de trabajar, y actualmente está corriendo y moviendo peso sin esos calambres.",
      rating: 5,
    },
    {
      name: "JUAN",
      age: 48,
      condition: "2 HERNIAS",
      videoId: "dQw4w9WgXcQ",
      quote: "No poo a trabajar y ya ni se me la a tortura era u a tortura",
      result: "Con 2 hernias discales, le era imposible trabajar de mecánico por el dolor que tenía, hasta incluso le despertaba el dolor al girarse en la cama. A día de hoy vuelve a trabajar y descansar sin dolor.",
      rating: 5,
    },
    {
      name: "FÁTIMA",
      age: 48,
      condition: "ESCOLIOSIS + HERNIA",
      videoId: "dQw4w9WgXcQ",
      quote: "Me dijeron que mi dolor era cosa de la edad y ahora estoy surfeando sin dolor",
      result: "Con escoliosis de 30° y 1 hernia, y 1 desplazamiento vertebral, Fátima no podía caminar porque la pierna no le respondía bien. A día de hoy hace vida normal ha vuelto a correr y estar largas horas de pie sin que el dolor la limite.",
      rating: 5,
    },
    {
      name: "JAVI",
      age: 44,
      condition: "PROTRUSIÓN",
      videoId: "dQw4w9WgXcQ",
      quote: "No podía trabajar, ni estar sentado, ahora me agacho sin miedo al dolor",
      result: "Con 1 protrusión al agacharse se quedaba clavado y no le permitía trabajar sin dolor. Pasados 2 meses Javi está agachándose a levantar más de 50 kg como si nada.",
      rating: 5,
    },
    {
      name: "DAVID",
      age: 44,
      condition: "2 HERNIAS",
      videoId: "dQw4w9WgXcQ",
      quote: "Me quedaba clavado y no podía trabajar sin dolor",
      result: "Con 2 hernias discales David no podía estar de pie más de 10 minutos. Ahora trabaja jornadas completas sin molestias y ha recuperado su vida activa.",
      rating: 5,
    },
    {
      name: "MARCOS",
      age: 38,
      condition: "HERNIA DISCAL",
      videoId: "dQw4w9WgXcQ",
      quote: "Evité la cirugía y recuperé mi movilidad al 100%",
      result: "Los médicos le recomendaron cirugía por una hernia L5-S1. Con el programa evitó la operación y ahora entrena sin dolor.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Personas como ellos nos avalan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales de personas que superaron el dolor de espalda y recuperaron su vida
          </p>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Video Section */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`Testimonio de ${testimonial.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                    <div className="bg-primary/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary">{testimonial.name}</h3>
                      <p className="text-lg text-muted-foreground">{testimonial.age} años</p>
                    </div>
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold uppercase whitespace-nowrap">
                      {testimonial.condition}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-foreground font-medium italic text-lg">"{testimonial.quote}"</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Resultados:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
            onClick={() => window.location.href = '/programa'}
          >
            RESERVA TU ENTREVISTA GRATUITA
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Únete a las personas que ya transformaron su vida
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
