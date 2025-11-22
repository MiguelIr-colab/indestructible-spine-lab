import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EjercicioNatacionTerapeuticaHerniaDiscal = () => {
  return (
    <>
      <Helmet>
        <title>Ejercicio de natación terapéutica para hernia discal: cuándo ayuda y cuándo te perjudica</title>
        <meta 
          name="description" 
          content="¿Es bueno el ejercicio de natación terapéutica para una hernia discal? Descubre por qué 'vete a nadar' puede empeorar tu dolor de espalda si no tienes buena biomecánica ni técnica, y qué pasos seguir antes de entrar a la piscina." 
        />
        <meta 
          name="keywords" 
          content="ejercicio de natación terapéutica para hernia discal, natación y hernia discal, natación terapéutica dolor de espalda, aquagym hernia discal, es buena la natación para la hernia discal, natación dolor lumbar, biomecánica columna y natación, cuándo operarse de hernia discal, resonancia hernia discal y ejercicio, fuerza para dolor crónico de espalda" 
        />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/ejercicio-natacion-terapeutica-hernia-discal" />
        
        <meta property="og:title" content="Ejercicio de natación terapéutica para hernia discal: cuándo ayuda y cuándo te perjudica" />
        <meta property="og:description" content="¿Es bueno el ejercicio de natación terapéutica para una hernia discal? Descubre por qué 'vete a nadar' puede empeorar tu dolor de espalda si no tienes buena biomecánica ni técnica, y qué pasos seguir antes de entrar a la piscina." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://espaldaindestructible.com/blog/ejercicio-natacion-terapeutica-hernia-discal" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ejercicio de natación terapéutica para hernia discal: cuándo ayuda y cuándo te perjudica" />
        <meta name="twitter:description" content="¿Es bueno el ejercicio de natación terapéutica para una hernia discal? Descubre por qué 'vete a nadar' puede empeorar tu dolor de espalda si no tienes buena biomecánica ni técnica, y qué pasos seguir antes de entrar a la piscina." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Ejercicio de natación terapéutica para hernia discal: ¿realmente es lo mejor para tu espalda?",
            "description": "¿Es bueno el ejercicio de natación terapéutica para una hernia discal? Descubre por qué 'vete a nadar' puede empeorar tu dolor de espalda si no tienes buena biomecánica ni técnica, y qué pasos seguir antes de entrar a la piscina.",
            "inLanguage": "es",
            "keywords": "ejercicio de natación terapéutica para hernia discal, natación y hernia discal, natación terapéutica dolor de espalda, aquagym hernia discal",
            "author": {
              "@type": "Person",
              "name": "Roberto Galván"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://espaldaindestructible.com/blog/ejercicio-natacion-terapeutica-hernia-discal"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </Button>
            
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Ejercicio de natación terapéutica para hernia discal: ¿realmente es lo mejor para tu espalda?
              </h1>
              <div className="aspect-video mb-8">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JN-O-Z0F4gc"
                  title="Ejercicio de natación terapéutica para hernia discal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 8-10 minutos</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Durante años se ha repetido la frase "tienes hernia discal, vete a nadar" como si fuera una solución universal. Pero si no dominas la técnica ni tienes una buena estabilidad de la columna, esa recomendación puede empeorar tu dolor. En este artículo verás cuándo la natación terapéutica puede ser útil, por qué el aquagym genérico no suele ser buena idea y qué es lo primero que necesitas de verdad: evaluar tu biomecánica y entrenar fuerza de forma específica.
              </p>
            </header>

            <div className="space-y-8 text-foreground">
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">¿Es buena la natación terapéutica para la hernia discal?</h2>
                <p className="mb-4 leading-relaxed">
                  Si tienes una hernia discal o cualquier otra patología de columna (protusión, escoliosis, estenosis, anterolistesis, retrolistesis…) es muy probable que hayas escuchado la recomendación típica:
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
                  <p className="font-semibold">
                    "Vete a nadar, que la natación es buena para la espalda".
                  </p>
                </div>
                <p className="mb-4 leading-relaxed">
                  ¿El problema? Que esa recomendación se da sin mirar cómo te mueves y sin entender qué está pasando en tu columna cuando entras al agua.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    La natación no es buena ni mala por sí misma. Depende de cómo te mueves. Si quieres entender si <Link to="/blog/entrenar-con-hernia-discal-riesgos-bien-hecho" className="text-primary hover:underline">entrenar con hernia discal es peligroso</Link>, ese artículo te dará el contexto necesario.
                  </p>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu biomecánica (cómo se mueve realmente tu cuerpo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu nivel de control y estabilidad de columna y cadera. Para mejorar esto, consulta <Link to="/blog/ejercicios-hernia-discal-lumbar" className="text-primary hover:underline">estos ejercicios específicos para hernia discal lumbar</Link>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>La técnica de nado que utilizas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El momento del proceso en el que te encuentras. Si llevas tiempo con dolor y no mejoras, lee <Link to="/blog/hernias-discales-por-que-no-mejoras" className="text-primary hover:underline">por qué no mejoras con hernias discales</Link>.</span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  Si todo esto no se tiene en cuenta, ese "ejercicio de natación terapéutica" puede convertirse, en la práctica, en un ejercicio agresivo para tu hernia discal.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Qué es una hernia discal (sin tecnicismos)</h2>
                <p className="mb-4 leading-relaxed">
                  De forma sencilla, <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">una hernia discal</Link> es una patología del disco intervertebral que puede tener distintos grados:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Degeneración del disco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Prolapso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Extrusión.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Secuestro.</span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  El resultado es similar: parte del disco comprime una raíz nerviosa. Esa compresión puede ser central o lateral y generar dolor en diferentes zonas: pierna, glúteo, lumbar, brazo…
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mt-4">
                  <p className="font-semibold">
                    Protusión y hernia no son mundos separados, sino variaciones de un mismo problema con mayor o menor gravedad.
                  </p>
                </div>
                <p className="mt-4 leading-relaxed">
                  La imagen de la resonancia solo te dice cómo está el disco, no cómo se mueve tu cuerpo, ni dónde compensas, ni qué articulaciones están bloqueadas. Y eso es clave para entender por qué no se puede decidir tu tratamiento solo mirando la resonancia ni diciendo "tienes hernia → vete a nadar".
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Por qué "vete a nadar" puede empeorar tu dolor</h2>
                
                <h3 className="text-xl font-semibold mb-3">El problema del aquagym generalista</h3>
                <p className="mb-4 leading-relaxed">
                  Cuando te recomiendan algo como "actividad suave en el agua", muchas veces acabas en:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clases de aquagym con ejercicios estándar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Circuitos en piscina pensados para "moverse un poco".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Actividades en grupo sin valorar tu caso concreto.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Desde fuera, parece inofensivo: saltitos, patadas, movimientos de brazos, empleo de churros o tablas… Pero si tienes una patología de columna, eso puede suponer:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Flexiones de cadera mal controladas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Retroversión de pelvis repetida, que cambia la presión en tus discos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Movimientos bruscos sin control de la zona lumbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ejercicios hechos "al tuntún", sin adaptación a tu bloqueo articular.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  El agua da sensación de ligereza, pero eso no significa que el ejercicio sea neutro para tu columna. Puedes estar sumando presión justo donde tienes la hernia, sin darte cuenta.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Cuando el ejercicio suave no es tan suave</h3>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
                  <p className="font-semibold">
                    "Es solo mantenimiento, es suave, no puede hacer daño".
                  </p>
                </div>
                <p className="mb-4 leading-relaxed">
                  Pero en el vídeo del que parte este artículo se explica algo muy claro: Incluso esos ejercicios suaves de aquagym pueden provocar:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Redondeo de la zona lumbar al subir las piernas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cambios constantes de posición de la pelvis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Más presión en el disco lesionado por falta de control de la cadera.</span>
                  </li>
                </ul>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    El aquagym genérico no es la solución para tu hernia discal. Y puede incluso ser parte del problema.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">La técnica de natación: el gran olvidado</h2>
                <p className="mb-4 leading-relaxed">
                  Cuando un médico te dice "vete a nadar", parece que está imaginando que vas a nadar como Michael Phelps: cuerpo recto, buen control del tronco, rotación limpia, estabilidad del core… Pero la realidad de la mayoría de personas es otra.
                </p>

                <h3 className="text-xl font-semibold mb-3">Lo que suele pasar cuando alguien con dolor va a nadar</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No tiene técnica depurada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No controla la posición de su columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Suele lateralizar mucho la cadera al hacer crol.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Realiza patadas que frenan el cuerpo en lugar de impulsarlo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Respira girando de más la cabeza y el tronco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Arrastra los brazos, en vez de traccionar de forma eficiente.</span>
                  </li>
                </ul>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    Es decir: cuanto más cansado estás, más sufre tu hernia discal.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Lo que de verdad necesitas: evaluar tu biomecánica</h2>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
                  <p className="font-semibold">
                    Tu problema no se resuelve con "qué ejercicio hago", sino entendiendo cómo se mueve tu cuerpo.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3">El orden correcto: movilidad, estabilidad y fuerza</h3>
                <ol className="space-y-4 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">1.</span>
                    <div>
                      <strong>Evaluar tu biomecánica</strong>
                      <ul className="space-y-1 mt-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Ver cómo te mueves.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Detectar bloqueos y compensaciones.</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">2.</span>
                    <div>
                      <strong>Crear un programa específico</strong>
                      <ul className="space-y-1 mt-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Enfocado en las zonas donde compensas.</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">3.</span>
                    <div>
                      <strong>Desarrollar fuerza de verdad</strong>
                      <ul className="space-y-1 mt-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>No hablamos de "hacer cuatro puentes de glúteo y abdominales".</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    La herramienta más potente para el dolor crónico de columna es: fuerza, fuerza y más fuerza.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Conclusión: La natación no es el punto de partida</h2>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    Primero corrige tu biomecánica y gana estabilidad y fuerza. Después, si procede, la natación puede ser una herramienta más. Pero nunca el punto de partida decidido a ciegas.
                  </p>
                </div>
              </section>

            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">¿Quieres eliminar el dolor de espalda?</h3>
              <p className="mb-4">
                Accede a nuestro programa completo de ejercicios personalizados para fortalecer tu columna de forma segura y progresiva.
              </p>
              <Button asChild size="lg">
                <Link to="/programa">Ver programas</Link>
              </Button>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EjercicioNatacionTerapeuticaHerniaDiscal;
