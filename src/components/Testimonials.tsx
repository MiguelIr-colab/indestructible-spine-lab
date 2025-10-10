import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
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
      condition: "ESCOLIOSIS",
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
      quote: "Me quedaba clavado y no le permitía trabajar sin dolor",
      result: "Con 1 protrusión al agacharse se quedaba clavado y no le permitía trabajar sin dolor. Pasados 2 meses Javi está agachándose a levantar más de 50 kg como si nada.",
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
