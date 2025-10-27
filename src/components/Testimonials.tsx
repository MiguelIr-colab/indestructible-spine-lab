import { Star, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "EDUARDO",
      age: 52,
      condition: "HERNIA DISCAL Y DESHIDRATACIÓN DE DISCO VERTEBRAL",
      videoId: "2aMuVJmP9zE",
      quote: "Vivía pendiente del dolor. No podía estar de pie sin sufrir, ni dormir sin pastillas. Cada vez que me agachaba o salía en bici, terminaba destrozado. Hoy, no necesito medicación y puedo moverme con total libertad.",
      result: "Después de años tomando analgésicos y con recaídas constantes, Eduardo logró eliminar el dolor y recuperar la fuerza gracias al programa Espalda Indestructible. Volvió a trabajar de pie, hacer deporte y disfrutar de su día sin depender de pastillas. \"Ahora puedo estar horas de pie, viajar, entrenar… y no pienso en el dolor. La diferencia es brutal.\"",
      rating: 5,
    },
    {
      name: "ALFONSO",
      age: 48,
      condition: "5 DISCOPATÍAS LUMBARES",
      videoId: "uKoibeP8OQ8",
      quote: "Vivía con dolor. Me levantaba con dolor y me acostaba con dolor. Después de años sin poder coger a mi hijo ni hacer deporte, hoy puedo hacerlo todo sin miedo ni dolor.",
      result: "Con 5 discopatías y 2 protusiones, Alfonso pasó de vivir con dolor diario y sin poder practicar deporte, a eliminarlo por completo en solo 12 semanas. Volvió a correr, agacharse y recuperar su vida familiar. \"Me ha cambiado la vida. No es solo físico… volví a silbar.\"",
      rating: 5,
    },
    {
      name: "ELI",
      age: 40,
      condition: "HERNIA DISCAL LUMBAR",
      videoId: "SlpiNZsuhuc",
      quote: "No podía moverme. Ni sentarme, ni dormir, ni agacharme. Pensé que mi vida se había terminado. En solo unos días de entrenamiento volví a dormir del tirón… y hoy hago de todo sin dolor.",
      result: "Tras años de dolor y tratamientos fallidos —masajes, láser, radiofrecuencia y EPI—, Eli eliminó completamente su dolor solo entrenando con el programa Espalda Indestructible. Volvió a vestirse de pie, conducir, correr y disfrutar de conciertos y fiestas sin miedo a recaer. \"Ya no necesito masajes ni pastillas. Cuando tengo molestias, entreno… y desaparecen. He recuperado mi energía y mi vida.\"",
      rating: 5,
    },
    {
      name: "SERGIO",
      age: 36,
      condition: "HERNIA DISCAL L4-L5 Y SACROILEITIS",
      videoId: "dseWDQv9hfg",
      quote: "Vivía con un dolor constante en la zona lumbar y el sacro. No podía estar de pie ni sentado sin molestias. Tenía miedo de moverme, de agacharme, de empeorar. Hoy pinto mi casa, muevo muebles y vivo sin dolor.",
      result: "Sergio sufría una hernia de disco y sacroileitis con dolor persistente (nivel 8/10), entumecimiento en la pierna y rigidez lumbar. Tras entrenar con el programa Espalda Indestructible, eliminó el dolor, recuperó la movilidad y perdió el miedo al movimiento. \"Antes no podía ni estar de pie, ahora me agacho, cargo peso y hago vida normal. Es increíble cómo cambia todo cuando vuelves a moverte sin miedo.\"",
      rating: 5,
    },
    {
      name: "GEMMA",
      age: 41,
      condition: "HERNIA CERVICAL EXTRUIDA C5-C6",
      videoId: "6J9yA03JGm0",
      quote: "Estuve ingresada por el dolor. No podía moverme, ni ducharme, ni caminar. Me propusieron operarme de urgencia… y dije que no. Empecé a entrenar, y el dolor desapareció. No ha vuelto.",
      result: "Gemma sufría una hernia cervical extruida que le provocaba un dolor incapacitante y pérdida de sensibilidad en el brazo. Tras probar múltiples terapias sin éxito, decidió empezar el programa Espalda Indestructible. En solo unas semanas recuperó movilidad, fuerza y volvió a hacer vida normal sin necesidad de cirugía. \"Llevo meses sin dolor. Vuelvo a trabajar, ir en bici y vivir sin miedo. Si no haces algo distinto, te quedas atrapado en el dolor. Yo elegí moverme.\"",
      rating: 5,
    },
    {
      name: "MATÍAS",
      age: 45,
      condition: "HERNIA L5-S1, ESTENOSIS LUMBAR Y PINZAMIENTO CIÁTICO",
      videoId: "L3JWrRBqujE",
      quote: "No podía ni lavarme la cara ni ducharme sin dolor. Tenía fecha para operarme, pero decidí intentarlo entrenando. Hoy trabajo, me muevo y vivo sin dolor… y cancelé la operación.",
      result: "Matías sufría una hernia lumbar con estenosis del canal medular y pinzamiento del nervio ciático. Durante meses no pudo trabajar ni realizar tareas básicas. Tras seis meses de entrenamiento en el programa Espalda Indestructible, eliminó el dolor, recuperó la movilidad y volvió a la construcción sin limitaciones. \"Pasé de no poder moverme a levantar peso y agacharme sin miedo. La clave fue no rendirme: la fuerza lo cambia todo.\"",
      rating: 5,
    },
    {
      name: "RAMÓN",
      age: 47,
      condition: "HERNIA L5-S1, PROTRUSIÓN L4-L5 Y CIÁTICA",
      videoId: "za0gs_X2pu0",
      quote: "Vivía con un dolor insoportable. No podía trabajar ni estar de pie más de unos minutos. Probé de todo, nada funcionaba. Hoy hago vida normal y ya ni recuerdo cómo era vivir con dolor.",
      result: "Ramón sufría una hernia lumbar, una protrusión discal y una ciática que le impedían trabajar y dormir sin medicación. Tras comenzar el programa Espalda Indestructible, recuperó movilidad, fuerza y su vida diaria. En pocas semanas pudo volver a sentarse, estar de pie y moverse sin molestias. \"Hace tres años habría dado cualquier cosa por esto. Si lo hubiera sabido antes, habría empezado mucho antes. La fuerza fue mi solución.\"",
      rating: 5,
    },
    {
      name: "ABDELAH",
      age: 43,
      condition: "DOS PROTUSIONES LUMBARES",
      videoId: "W6JcuIj-Rxk",
      quote: "No podía trabajar, ni estar sentado 20 minutos. Dormía mal, el dolor no me dejaba vivir. Hoy vuelvo a trabajar, duermo bien y entreno sin miedo.",
      result: "Abdelah tenía dos protrusiones lumbares que le impedían moverse y lo obligaban a permanecer tumbado gran parte del día. Tras incorporarse al programa Espalda Indestructible, eliminó el dolor, volvió a caminar horas sin molestias y regresó al trabajo con normalidad. \"Ahora levanto 35 kg en el gimnasio, duermo bien y no tengo miedo a moverme. Ojalá lo hubiera hecho antes… me habría ahorrado años de dolor.\"",
      rating: 5,
    },
    {
      name: "SILVIA",
      age: 46,
      condition: "HERNIA L4-L5 CON GRAN EXTRUSIÓN",
      videoId: "2LYTh7PEMWA",
      quote: "Llevaba años con dolor. No podía correr, jugar al pádel ni disfrutar de nada. Estaba cansada de vivir pendiente de encontrar una postura que no doliera. Hoy entreno, trabajo y hago deporte sin dolor.",
      result: "Silvia, médica de profesión, sufría una hernia lumbar extruida con dolor crónico desde 2011. Probó fisioterapia, infiltraciones y programas genéricos sin éxito. Con Espalda Indestructible, eliminó el dolor en pocas semanas, recuperó la movilidad y volvió a jugar al pádel, viajar y hacer vida normal. \"Ahora tengo miedo a parar, no a moverme. Entrenar fue lo único que me quitó el dolor. He vuelto a disfrutar de mi vida.\"",
      rating: 5,
    },
    {
      name: "ALFONSO",
      age: 0,
      condition: "3 PROTRUSIONES (L3–S1)",
      videoId: "1w7SqYsQKNM",
      quote: "Me levantaba y me acostaba con dolor. Probé de todo: fisio, infiltraciones, rizólisis… y nada. Empecé el programa, y en 4–6 semanas ya notaba el cambio. Hoy corro, monto en moto y hago vida normal.",
      result: "Durante más de 10 años convivió con dolor lumbar continuo y episodios de ciática. Le plantearon cirugía (incluso fijación), pero la evitó. Con Espalda Indestructible (2 bloques, 6 meses), recuperó movilidad, fuerza y confianza: volvió a correr, caminar horas, trabajar sin planear posturas y entrenar sin miedo. \"Ahora el entrenamiento es mi analgésico. El dolor dejó de mandar en mi vida.\"",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-[hsl(var(--light-gray))]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Personas como ellos nos avalan
          </h2>
          <p className="text-lg text-secondary-foreground max-w-3xl mx-auto mb-8">
            Resultados reales de personas que superaron el dolor de espalda y recuperaron su vida gracias al programa <span className="font-bold">ESPALDA INDESTRUCTIBLE</span> diseñado por Roberto Galván
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg h-14 px-12"
            onClick={() => window.location.href = '/programa'}
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
