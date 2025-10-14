import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "FÁTIMA",
      age: 48,
      condition: "ESCOLIOSIS",
      image: testimonial1,
      quote: "Me dijeron que mi dolor era cosa de la edad y ahora estoy surfeando sin dolor",
      result: "Con escoliosis de 30° y 1 hernia, y 1 desplazamiento vertebral, Fátima no podía caminar porque la pierna no le respondía bien. A día de hoy hace vida normal ha vuelto a correr y estar largas horas de pie sin que el dolor la limite.",
      rating: 5,
    },
    {
      name: "JAVI",
      age: 44,
      condition: "PROTRUSIÓN",
      image: testimonial2,
      quote: "No podía trabajar, ni estar sentado, ahora me agacho sin miedo al dolor",
      result: "Con 1 protrusión al agacharse se quedaba clavado y no le permitía trabajar sin dolor. Pasados 2 meses Javi está agachándose a levantar más de 50 kg como si nada.",
      rating: 5,
    },
    {
      name: "DAVID",
      age: 44,
      condition: "2 HERNIAS",
      image: testimonial3,
      quote: "Me quedaba clavado y no podía trabajar sin dolor",
      result: "Con 2 hernias discales David no podía estar de pie más de 10 minutos. Ahora trabaja jornadas completas sin molestias y ha recuperado su vida activa.",
      rating: 5,
    },
    {
      name: "LAURA",
      age: 52,
      condition: "LUMBALGIA CRÓNICA",
      image: testimonial1,
      quote: "Después de 10 años con dolor, ahora puedo jugar con mis nietos",
      result: "Laura sufría de dolor lumbar crónico que le impedía agacharse. Tras 3 meses de programa, puede realizar todas sus actividades diarias sin limitaciones.",
      rating: 5,
    },
    {
      name: "MARCOS",
      age: 38,
      condition: "HERNIA DISCAL",
      image: testimonial2,
      quote: "Evité la cirugía y recuperé mi movilidad al 100%",
      result: "Los médicos le recomendaron cirugía por una hernia L5-S1. Con el programa evitó la operación y ahora entrena sin dolor.",
      rating: 5,
    },
    {
      name: "CARMEN",
      age: 55,
      condition: "CIÁTICA",
      image: testimonial3,
      quote: "El dolor bajaba hasta el pie, ahora camino kilómetros sin problemas",
      result: "Tenía ciática que le impedía caminar más de 5 minutos. Hoy hace senderismo y ha vuelto a sus actividades favoritas.",
      rating: 5,
    },
    {
      name: "PEDRO",
      age: 41,
      condition: "ESCOLIOSIS",
      image: testimonial1,
      quote: "Pensaba que tendría que vivir con el dolor para siempre",
      result: "Con escoliosis de 25° y dolor constante, Pedro recuperó su calidad de vida y ahora practica deporte regularmente.",
      rating: 5,
    },
    {
      name: "ISABEL",
      age: 49,
      condition: "2 PROTRUSIONES",
      image: testimonial2,
      quote: "No podía ni atarme los zapatos, ahora hago yoga sin dolor",
      result: "Las protrusiones le limitaban movimientos básicos. Tras el programa recuperó toda su movilidad y practica yoga diariamente.",
      rating: 5,
    },
    {
      name: "ANTONIO",
      age: 47,
      condition: "HERNIA + PROTRUSIÓN",
      image: testimonial3,
      quote: "De no poder trabajar a levantar peso sin miedo",
      result: "Su trabajo físico se había vuelto imposible por el dolor. Ahora trabaja a pleno rendimiento y sin limitaciones.",
      rating: 5,
    },
    {
      name: "MARÍA",
      age: 50,
      condition: "LUMBALGIA",
      image: testimonial1,
      quote: "5 años tomando pastillas, ahora no necesito ninguna",
      result: "Dependía de analgésicos diarios. Con el programa eliminó el dolor y dejó completamente la medicación.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            ¿Todavía dudas de que esto pueda ayudarte?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo otras personas transformaron su vida y bienestar dando el primer paso hacia el cambio.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card overflow-hidden hover:shadow-[var(--shadow-card)] transition-all h-full">
                  <div className="relative h-64">
                    <img
                      src={testimonial.image}
                      alt={`Testimonio de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{testimonial.name}</h3>
                          <p className="text-sm text-foreground">{testimonial.age} años</p>
                        </div>
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold uppercase">
                          {testimonial.condition}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-foreground font-medium italic">"{testimonial.quote}"</p>
                    </div>

                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-foreground mb-2">
                        {testimonial.name}: {testimonial.age} años
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Resultados:</span> {testimonial.result}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
