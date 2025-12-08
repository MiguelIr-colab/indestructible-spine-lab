import { useState } from "react";
import { Star, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import testimonialFatima from "@/assets/testimonial-fatima.png";
import testimonialLiliana from "@/assets/testimonial-liliana.png";
import testimonialMariano from "@/assets/testimonial-mariano.png";
import testimonialMiguelangel from "@/assets/testimonial-miguelangel.png";
import testimonialJuanandres from "@/assets/testimonial-juanandres.png";
import testimonialGema from "@/assets/testimonial-gema.png";
import testimonialManuel from "@/assets/testimonial-manuel.png";
import testimonialDorle from "@/assets/testimonial-dorle.png";
import testimonialEduardo from "@/assets/testimonial-eduardo.png";
import testimonialRosario from "@/assets/testimonial-rosario.png";
import testimonialCarlos from "@/assets/testimonial-carlos.png";
import testimonialRosi from "@/assets/testimonial-rosi.png";
import testimonialAriel from "@/assets/testimonial-ariel.png";
import testimonialRamon from "@/assets/testimonial-ramon.png";
import testimonialAbdelah from "@/assets/testimonial-abdelah.png";
import testimonialSilvia from "@/assets/testimonial-silvia.png";
import testimonialJose from "@/assets/testimonial-jose.png";
import testimonialEli from "@/assets/testimonial-eli.png";
import testimonialAlfonso from "@/assets/testimonial-alfonso.png";
import testimonialMatias from "@/assets/testimonial-matias.png";
import testimonialGemma from "@/assets/testimonial-gemma.png";
import testimonialSergio from "@/assets/testimonial-sergio.png";
import testimonialDavid from "@/assets/testimonial-david.png";

const Testimonials = () => {
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});

  const handlePlayVideo = (index: number) => {
    setPlayingVideos(prev => ({ ...prev, [index]: true }));
  };
  const testimonials = [
    {
      name: "ALFONSO",
      age: 0,
      condition: "2 PROTUSIONES Y 3 ABOMBAMIENTOS",
      videoId: "uKoibeP8OQ8",
      playlistIndex: 1,
      quote: "Vivía con dolor cada día. En pocas semanas volví a correr y moverme sin miedo.",
      result: "Eliminó el dolor tras 10 años y volvió a correr, trabajar y disfrutar sin limitaciones.",
      rating: 5,
      thumbnail: testimonialAlfonso,
    },
    {
      name: "EDUARDO",
      age: 0,
      condition: "DISCOPATÍA LUMBAR CRÓNICA",
      videoId: "2aMuVJmP9zE",
      playlistIndex: 2,
      quote: "Tras años de tratamientos fallidos, descubrí que la fuerza era mi medicina.",
      result: "Eliminó el dolor lumbar y volvió a entrenar y trabajar sin miedo.",
      rating: 5,
      thumbnail: testimonialEduardo,
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
      thumbnail: testimonialEli,
    },
    {
      name: "SERGIO",
      age: 0,
      condition: "PROTUSIÓN L5-S1",
      videoId: "dseWDQv9hfg",
      playlistIndex: 4,
      quote: "Pasé de vivir con miedo al movimiento a disfrutar entrenando sin dolor.",
      result: "Reforzó su espalda, eliminó el dolor y recuperó su vida activa.",
      rating: 5,
      thumbnail: testimonialSergio,
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
      thumbnail: testimonialGemma,
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
      thumbnail: testimonialMatias,
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
      thumbnail: testimonialRamon,
    },
    {
      name: "ABDELAH",
      age: 0,
      condition: "DOS PROTRUSIONES LUMBARES",
      videoId: "W6JcuIj-Rxk",
      playlistIndex: 8,
      quote: "No podía ni sentarme. Ahora trabajo, duermo bien y entreno sin miedo.",
      result: "Eliminó el dolor y recuperó fuerza y confianza en pocas semanas.",
      rating: 5,
      thumbnail: testimonialAbdelah,
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
      thumbnail: testimonialSilvia,
    },
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
    {
      name: "MANUEL",
      age: 0,
      condition: "HERNIA L5-S1,\nCIÁTICA Y\nPIERNA DORMIDA",
      videoId: "mOhh-LK5Bt4",
      playlistIndex: 36,
      quote: "Pensé que no volvería a agacharme ni a conducir tranquilo por mi espalda, y ahora entreno y vivo el día a día sin miedo al dolor.",
      result: "En 6 meses desapareció el dolor lumbar y la parestesia, y ahora puede agacharse, coger peso y entrenar sin dolor.",
      rating: 5,
      thumbnail: testimonialManuel,
    },
    {
      name: "GEMA",
      age: 0,
      condition: "PROTRUSIÓN L3-L4,\nHERNIA L4-L5 Y\nDESPLAZAMIENTO\nVERTEBRAL",
      videoId: "7m_TO0p0pXg",
      playlistIndex: 37,
      quote: "Pensé que viviría siempre con dolor lumbar y ciático, y ahora puedo vestirme, trabajar, viajar y saltar horas sin que mi espalda se queje.",
      result: "Recupera su vida diaria: se viste sin dolor, trabaja sentada, camina rápido, corre y salta horas en conciertos y viajes en autobús sin molestias lumbares ni ciáticas.",
      rating: 5,
      thumbnail: testimonialGema,
    },
    {
      name: "ARIEL",
      age: 0,
      condition: "PROTRUSIÓN DISCAL\nL4-L5",
      videoId: "My2-AmVBWLA",
      playlistIndex: 38,
      quote: "Pensé que el dolor lumbar sería para siempre; hoy puedo trabajar sentado y viajar en coche sin miedo.",
      result: "Tras 2 años con protrusión L4-L5, ahora lleva casi 3 semanas sin dolor, trabaja sentado en reuniones largas y viaja 5 h en coche sin molestias.",
      rating: 5,
      thumbnail: testimonialAriel,
    },
    {
      name: "JUAN ANDRÉS",
      age: 0,
      condition: "HERNIA L5 S1,\nDESGARRO DE ANILLO S1\nY ESPONDILOARTROSIS",
      videoId: "r25y1YwnNPM",
      playlistIndex: 39,
      quote: "De un dolor lumbar 8/10 por hernia L5 S1 y espondiloartrosis a olvidarse del dolor crónico gracias al programa Espalda indestructible y al entrenamiento de fuerza.",
      result: "Tras medio año con dolor lumbar intenso y fisioterapia sin resultados, ahora hace vida normal, se ata los zapatos y estornuda sin miedo.",
      rating: 5,
      thumbnail: testimonialJuanandres,
    },
    {
      name: "ROSI",
      age: 0,
      condition: "CINCO HERNIAS DISCALES,\nESTENOSIS DE CANAL\nY ARTROSIS",
      videoId: "pztMUoda4ic",
      playlistIndex: 41,
      quote: "Con cinco hernias discales, estenosis de canal y artrosis, el entrenamiento me ha permitido volver a caminar y cocinar de pie sin miedo y sin medicación.",
      result: "En 3 meses pasó de caer a los 600 pasos a caminar kilómetros, cocinar de pie, cargar la bombona y dormir bien, sin medicación, con mucha más fuerza y confianza.",
      rating: 5,
      thumbnail: testimonialRosi,
    },
    {
      name: "CARLOS",
      age: 0,
      condition: "CIÁTICA Y HERNIA DISCAL\nL5-S1 OPERADA",
      videoId: "fD0rJuRG9d4",
      playlistIndex: 40,
      quote: "Pensé que la ciática, la hernia operada y la osteoporosis serían de por vida;  hoy entreno sin dolor de espalda.",
      result: "En 2 meses y medio en el programa Indestructible pasó de crisis de ciática diarias y miedo a trabajar a estar casi siempre sin dolor, hacer peso muerto con 45 kg y salir en moto sin limitaciones.",
      rating: 5,
      thumbnail: testimonialCarlos,
    },
    {
      name: "ROSARIO",
      age: 0,
      condition: "TENDINOSIS GLÚTEA,\nHERNIA Y ESTENOSIS\nLUMBAR",
      videoId: "50fCQ5PD8ak",
      playlistIndex: 42,
      quote: "Pensé que viviría siempre con dolor lumbar, glúteo y pie dormidos por la hernia y la estenosis, pero he vuelto a caminar, dormir y hacer mi vida casi normal.",
      result: "Tras entrenar online, camina sola una hora, sube escaleras sin dolor lumbar, ha dejado la medicación y vuelve a coser y dormir con tranquilidad.",
      rating: 5,
      thumbnail: testimonialRosario,
    },
    {
      name: "LILIANA",
      age: 0,
      condition: "PROTRUSIÓN LUMBAR\nL4-L5 Y DOLOR\nLUMBAR CRÓNICO",
      videoId: "HApEzXI-xb0",
      playlistIndex: 18,
      quote: "Tras 4 años con protrusiones y dolor lumbar crónico, entendí que la fuerza podía devolverme la espalda y la vida.",
      result: "Tras 3 años y 9 meses de dolor lumbar por protrusiones L4-L5, hoy se sienta horas sin dolor, trapea, carga peso y levanta hasta 40 kg con seguridad y confianza.",
      rating: 5,
      thumbnail: testimonialLiliana,
    },
    {
      name: "JOSE",
      age: 0,
      condition: "HERNIA DISCAL,\nPROTRUSIÓN DISCAL\nY RECTIFICACIÓN\nLUMBAR",
      videoId: "J4ujDgMaYzQ",
      playlistIndex: 14,
      quote: "Tenía una hernia discal, otra casi hernia con rectificación lumbar y llevaba más de 10 años con dolor de espalda; ahora hay días enteros que ni me acuerdo del dolor gracias al entrenamiento online de fuerza.",
      result: "Tras más de 10 años con dolor diario de espalda, pasa de no poder estar de pie ni caminar a trabajar 10 h, correr y entrenar fuerza y peso muerto online casi sin dolor.",
      rating: 5,
      thumbnail: testimonialJose,
    },
    {
      name: "SALVADOR",
      age: 0,
      condition: "3 ABOMBAMIENTOS\nDISCALES L3-S1\nY DOLOR CRÓNICO\nDE ESPALDA",
      videoId: "Np4KG2EXOEA",
      playlistIndex: 24,
      quote: "Pensé que con 3 abombamientos discales L3-S1 y dolor de espalda crónico, a mis 53 años tenía que dejar el deporte; hoy entreno fuerte, hago surf y me muevo sin miedo.",
      result: "Tras 1-2 meses de entrenamiento online, reduce el dolor lumbar a cero, puede entrenar con pesas hasta 50 kg, hacer surf y deporte aeróbico varios días seguidos sin recaídas.",
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
                <div className="relative aspect-video bg-muted">
                  {testimonial.thumbnail && !playingVideos[index] ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => handlePlayVideo(index)}
                    >
                      <img 
                        src={testimonial.thumbnail} 
                        alt={`Testimonio de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground fill-current" />
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
                <div className="p-4 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                  <div>
                      <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                    </div>
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold uppercase text-center leading-tight max-w-[140px] whitespace-pre-line">
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
