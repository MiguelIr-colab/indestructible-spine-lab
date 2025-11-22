import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscalReabsorber = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Hernia discal se puede reabsorber sola: cómo hacerlo sin cirugía ni reposo eterno</title>
        <meta name="description" content="¿Una hernia discal se puede reabsorber sola sin cirugía? Sí. Descubre por qué el reposo absoluto, las resonancias constantes y sólo tomar medicación frenan tu recuperación y qué hacer de forma activa (movimiento, impactos progresivos, propiocepción y fuerza) para que la hernia mejore sin pasar por el quirófano." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernia-discal-se-puede-reabsorber-sola-sin-cirugia" />
        <meta name="keywords" content="hernia discal se puede reabsorber sola, hernia discal sin cirugía, reabsorción hernia discal, ejercicios para hernia discal, cuándo operarse por hernia discal, reposo hernia discal, tratamiento activo hernia discal, propiocepción columna vertebral, entrenamiento de fuerza para hernia discal, dolor de espalda por hernia de disco" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 text-white hover:text-yellow-400">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </Button>

            <header className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-yellow-400">
                ¿Una hernia discal se puede reabsorber sola sin cirugía? La respuesta completa
              </h1>
            </header>

            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/hioB8jHImko"
                title="¿Una hernia discal se puede reabsorber sola?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Sí, una hernia discal se puede reabsorber sola sin cirugía, pero no es cuestión de suerte ni de tumbarse en el sofá a esperar. En este artículo, basado en la explicación de Roberto Galván (Espalda Indestructible), entenderás qué es realmente una hernia, por qué puede desaparecer en las resonancias, qué factores aceleran o frenan la recuperación y qué cambios concretos en movimiento, propiocepción y fuerza necesitas para mejorar sin depender solo de medicación, infiltraciones u operaciones.
              </p>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Qué es realmente una hernia discal?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Antes de hablar de reabsorción, operación o dolor, es clave aclarar de qué estamos hablando cuando te dicen que tienes hernia discal.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Hernia vs. protusión: nombre y apellidos</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  En muchas consultas se usan términos distintos (hernia, protusión, extrusión, etc.) como si fueran problemas totalmente diferentes. Roberto lo simplifica así:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">"Hernia"</strong> sería el nombre.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">"Protusión", "extrusión", etc.</strong> serían los apellidos.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Es decir, una protusión discal también es una hernia, solo que el material interno del disco (ese "gel") se ha desplazado de una forma u otra. Si quieres entender en profundidad <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-yellow-400 hover:underline">cómo se produce una hernia discal y cómo curarla</Link>, ese artículo te lo explica paso a paso.
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Puede salir y entrar según el movimiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Puede haberse derramado más hacia fuera.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Puede verse como una rotura más evidente.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por tanto, si en tu informe pone protusión discal, no pienses que este mensaje no va contigo: sigues estando dentro del paraguas de "hernia discal".
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-white">Resonancia magnética y dolor: no siempre van de la mano</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Uno de los puntos clave del vídeo es desmontar la idea de que: "Si tengo hernia en la resonancia, entonces mi dolor viene sí o sí de ahí".
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La realidad que explica el autor es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Hay personas con hernia discal clara en la resonancia… y cero dolor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Y hay personas con mucho dolor en la espalda o la pierna… y resonancias sin hallazgos relevantes.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Esto demuestra que daño estructural no equivale automáticamente a dolor. El cuerpo y el sistema nervioso son mucho más complejos que el "sale en la imagen = por eso te duele".
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por eso también, una frase que deberías grabarte es: "Tu resonancia no eres tú. Es sólo una foto en un momento concreto."
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Puede una hernia discal reabsorberse sola?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Vamos a lo que más inquieta: ¿una hernia discal se puede reabsorber sola sin cirugía, infiltraciones ni medicación fuerte? La respuesta que da Roberto es clara: <strong className="text-white">sí</strong>.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Pero es importante entender qué significa "reabsorber" para no crear falsas expectativas.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Qué NO es la reabsorción de una hernia discal</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La reabsorción no es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Que el trozo de disco que salió vuelva "mágicamente" a su sitio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Que el disco se rejuvenezca y se convierta de nuevo en un disco "joven e indestructible".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Que tu columna quede "como nueva" sin que tú cambies nada en tu vida.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Con el paso del tiempo, los discos se deshidratan y eso no es necesariamente malo. Forma parte del envejecimiento natural de los tejidos. No significa que estés "destrozado".
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Qué SÍ es la reabsorción de una hernia discal</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando el material del disco sale de donde debería estar, el cuerpo lo reconoce como algo "fuera de lugar". Igual que:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuando se te clava un cuerpo extraño en la piel y el cuerpo lo expulsa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>O cuando se hace un trasplante y el cuerpo puede rechazar el órgano si no cumple ciertas condiciones.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Con la hernia discal, el cuerpo:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Detecta que hay tejido donde no debería.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Activa mecanismos complejos de reparación y eliminación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Con el tiempo (entre 4 meses y 1 año, según explica Roberto), en muchas personas se ha visto que la parte herniada ya no aparece en la resonancia.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Y aquí viene la clave: Lo importante no es tanto si el trozo de disco está o no está, sino que tú recuperes movilidad, vida normal y menos dolor.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Factores que influyen en la recuperación de tu hernia discal</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  En el vídeo se habla de varios puntos que condicionan la recuperación. Podemos agruparlos en estas claves prácticas:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">1. Moverte aunque tengas dolor</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando aparece el dolor fuerte, lo normal es que te diga todo el mundo: "reposo, no te muevas, no hagas nada". Y tú mismo empiezas a evitar movimientos por miedo a "romperte más".
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El problema es que:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Justo en esa fase es donde el movimiento adecuado empieza a marcar la diferencia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si no te mueves, tus músculos se debilitan y la columna pierde protección.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cada dos semanas de reposo continuado puedes ir perdiendo fuerza en la musculatura de la columna, lo que te deja más expuesto.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por eso, el mensaje es: no se trata de machacarte, pero sí de empezar a moverte, aun con algo de dolor, de forma controlada y guiada. Aquí te explicamos <Link to="/blog/hernia-discal-curar" className="text-yellow-400 hover:underline">cómo curar una hernia discal con movimiento y fuerza</Link>.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">2. El tamaño de la hernia: no te asustes si es grande</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Suele ocurrir esto: Ves en el informe: "hernia grande", "extrusión", "compresión"… Y automáticamente piensas: "Esto es gravísimo, es operación sí o sí".
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    El enfoque de Roberto es justo el contrario: cuanto más grande es la hernia, más capacidad tiene el cuerpo de activar sus "bomberos" internos para reabsorber ese material.
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Es decir, una hernia grande no significa necesariamente peor pronóstico. Lo que sí influye es cómo te mueves, cómo entrenas y cómo cuidas tu columna desde ese momento.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">3. Introducir impactos progresivos para nutrir el disco</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Otro punto que choca con lo que se suele escuchar es este: "Nada de saltos, nada de impactos, no corras, no hagas esto, no hagas lo otro…"
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El autor explica que los discos:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No se "rejuvenecen" por arte de magia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Pero sí se nutren con impactos bien dosificados.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando introduces impactos progresivos (no desde un quinto piso, sino de manera gradual y planificada):
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>El disco recibe estímulos que ayudan a aumentar su densidad y resistencia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Disminuye la probabilidad de que esa zona vuelva a "romperse" con tanta facilidad.</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-300">
                  El objetivo a medio y largo plazo es que puedas tolerar impactos sin miedo, porque eso significa que tu columna está más fuerte y capacitada.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">4. Medicar menos y con más criterio (siempre con tu médico)</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Aquí el matiz es importante: Roberto no dice que dejes la medicación por tu cuenta. Lo que plantea es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Ciertos medicamentos no sólo no ayudan a recuperar el disco, sino que pueden frenar el proceso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>La medicación, en muchos casos, es un paliativo: baja el dolor un rato, pero el "fuego" sigue ahí.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuando se pasa el efecto, vuelve el dolor igual o incluso con más intensidad, y tú sigues sin haber mejorado la causa.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por eso, la propuesta es: Hablar con tu médico y comentarle que quieres usar la medicación el tiempo justo y necesario, y centrarte en soluciones activas (movimiento, fuerza, propiocepción) que sí cambian la estructura y el control de tu cuerpo.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">5. Mejorar tu propiocepción y control motor</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La propiocepción es, simplificando, tu capacidad de sentir y controlar tu cuerpo desde dentro, sin depender de la vista o de que alguien te toque y te guíe.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  En hernia discal, esto se traduce en:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Poder activar musculatura profunda de la columna de forma específica.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Evitar que todo se mueva "en bloque" porque no sabes aislar segmentos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Saber cuándo y cómo contraer cada músculo para proteger tu columna en cada gesto.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">6. Progresar los ejercicios y no estancarte</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Otro error típico es encontrar un ejercicio que te alivia un poco, hacer siempre lo mismo durante meses, y sorprenderte porque ya no mejoras.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Roberto explica que:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cada 21 días aproximadamente el cuerpo se adapta a un estímulo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si no aumentas la dificultad, cambias el ángulo, la carga o la tarea: Dejas de mejorar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Y tu columna no se vuelve realmente más fuerte y estable.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por eso es tan importante una progresión planificada: no repetir eternamente el mismo ejercicio "suave", sino ir subiendo escalones de dificultad.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">5 errores que frenan la recuperación de tu hernia discal</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Además de lo que sí ayuda, el vídeo repasa cinco errores muy frecuentes que pueden estar saboteando tu recuperación.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Reposo prolongado</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Días, semanas o incluso meses de reposo. Miedo constante a moverte por si "te rompes más".
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Consecuencias:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pierdes fuerza en la musculatura que protege la columna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tu médula y tus discos quedan menos defendidos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Cada vez te cuesta más volver a la normalidad.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Mensaje clave: reposo absoluto + hernia discal = mala combinación a medio plazo.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Evitar movimientos por miedo</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Mucha gente evita agacharse, girar, levantar algo del suelo. Piensan que "si me duele al hacer esto, es que me estoy destrozando el disco".
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Pero el problema real suele ser:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tu cuerpo ha estado años moviendo siempre la misma zona.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Otras articulaciones no participan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Cuando evitas aún más los movimientos, tu columna se rigidiza.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">3. No levantar peso</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Otro clásico: "Con hernia discal no levantes peso".
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El enfoque del vídeo es el contrario:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tienes que levantar peso, pero de forma progresiva y bien planificada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>1–2 kg no son trabajo de fuerza real para casi nadie.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Para que un músculo se adapte, necesita un estímulo superior a lo que ya tolera.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        El verdadero riesgo no es el peso: es pasarte meses sin entrenar fuerza, y luego verte obligado a hacer un esfuerzo grande en la vida real con un cuerpo desentrenado y sin movilidad.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">4. Buscar resonancias una y otra vez</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Hacerse una resonancia puede servir para saber dónde habría que operar, si se decidiera ese camino. Pero si no quieres operarte y ya sabes que tienes hernia, entonces otra resonancia más no cambia la estrategia de recuperación.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Además, hay dos problemas:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sólo te orienta al "arreglar lo roto" con cirugía.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Alimenta el catastrofismo: cuando te dicen "esto está fatal", se activa la llamada profecía autocumplida.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">5. Confiar sólo en tratamientos pasivos</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Aquí entran: Masajes, calor local, fajas, bombas diamagnéticas, infiltraciones, terapias donde tú sólo "recibes" algo.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El problema no es que sean "malas" por definición, sino que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Ninguna de ellas fortalece realmente tu columna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No aumentan tu movilidad activa.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No mejoran tu propiocepción.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y no cambian la biomecánica que hizo que ese disco se rompiera.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Por eso, si se usan, deberían ser complementos, no el pilar central del tratamiento.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Qué hacer para ayudar a reabsorber tu hernia discal</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Ahora sí: ¿qué pasos concretos plantea Roberto para favorecer que la hernia discal mejore sin cirugía?
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Hacer un estudio biomecánico</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El objetivo es:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Detectar compensaciones en tu forma de moverte.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Ver qué articulaciones no se mueven lo que deberían.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y no limitarse sólo a la zona donde te duele.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed text-gray-300">
                      La causa de tu hernia no fue un movimiento puntual aislado (levantar una caja un día), sino un patrón de movimiento repetido durante años.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Optimizar la propiocepción y la estabilidad de la columna</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Con el estudio como base, el siguiente paso es:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Entrenar la musculatura profunda que estabiliza la columna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Aprender a contraerla de forma específica, sin depender de que alguien te toque o te corrija.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Reducir las compensaciones para que no sea siempre el mismo disco el que "se come el marrón".</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">3. Ganar movilidad activa, no sólo estirar</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      No basta con "estirar" sin más. La idea es:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Que cada articulación alcance sus rangos óptimos de movimiento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pero que lo haga desde la fuerza, no desde la pasividad.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">4. Entrenamiento de fuerza: la herramienta más potente</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Una vez que has trabajado estabilidad y movilidad, entra en juego el entrenamiento de fuerza progresivo.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      La idea no es "ponerse fuerte de gimnasio" sin más, sino fortalecer todas las estructuras del cuerpo para proteger la médula y la columna.
                    </p>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Como repite Roberto: "La herramienta más potente para eliminar un dolor crónico es la fuerza, fuerza y más fuerza."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tres ejercicios sencillos para empezar (nivel inicial y sin riesgo)</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  En el vídeo se muestran tres ejercicios de iniciación, pensados para personas con hernia discal que no saben por dónde empezar y tienen miedo a hacerse daño. Todos se hacen sentado en el sofá.
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-6">
                  <p className="font-semibold text-gray-200">
                    ⚠️ Importante: no son una rutina completa, sino un punto de partida suave.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Ejercicio 1: giro de tronco en bloque</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Siéntate al filo del sofá, con el glúteo apoyado justo en el borde.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Coloca las piernas a 90°, pies apoyados en el suelo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Junta las manos y presiona una contra la otra con fuerza.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Con la espalda recta, haz un giro de tronco, apuntando la nariz hacia tus dedos (no sólo la mirada).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>La cabeza no puede ir más rápido que el cuerpo: todo gira en bloque.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mantén el abdomen bien apretado; cuando notes que el abdomen limita el giro, paras.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Vuelve despacio al centro, sin dejar de presionar las manos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Haz 8 repeticiones hacia un lado y 8 hacia el otro, una vez al día.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Ejercicio 2: rotación interna de cadera sentado</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>De nuevo, siéntate al filo del sofá.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Rodillas flexionadas a 90°, pies en el suelo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Separa las piernas de forma que cada una forme unos 45° respecto al centro del cuerpo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sin mover el tronco, lleva una rodilla hacia dentro, acercándola al suelo lentamente.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No dejes que el cuerpo se incline ni gire para acompañar la pierna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Llega sólo hasta donde puedas sin compensar con el tronco.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Vuelve al centro y repite. Haz 8 repeticiones con una pierna y luego 8 con la otra.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Recuerda: más abajo no es mejor si para eso tienes que doblar el cuerpo.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Ejercicio 3: presión lateral contra el brazo del sofá</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Siéntate en el sofá de forma que tu mano pueda apoyar en el brazo del sofá.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Espalda recta, hombro relajado.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Apoya la mano en el brazo del sofá y lleva el hombro hacia abajo, notando cómo se activa la musculatura de la zona lateral del tronco.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Desde ahí, intenta como "flexionar el tronco hacia ese lado", pero sin que se vea el movimiento: lo haces en isométrico, empujando con el cuerpo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Debes notar trabajo en: abdomen, oblicuos, dorsal, serrato, hombro.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mantén la presión 5 segundos, descansa, y haz 8 repeticiones por lado.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Cuándo sí es necesaria la cirugía por hernia discal?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La cirugía no es la primera opción en la gran mayoría de casos. Según explica Roberto, sólo hay dos situaciones claras en las que se recomienda operar:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Pérdida de fuerza importante</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No puedes levantar la pierna o el brazo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No eres capaz de sostenerte de pie.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pierdes la capacidad de agarrar o sujetar objetos.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Incontinencia o síndrome de la cola de caballo</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Problemas graves de control de esfínteres.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Síntomas muy alarmantes que te llevarían de urgencia al neurocirujano.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Además, comenta que esto ocurre en una persona de cada 700.000, aproximadamente, y que si fuera tu caso, no estarías tranquilamente viendo un vídeo en YouTube, sino buscando ayuda urgente.
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mt-4">
                  <p className="font-semibold text-gray-200">
                    La conclusión es clara: tener mucho dolor no significa automáticamente que "te tengas que operar".
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Mensaje final: esperanza activa, no pasiva</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Si acabas de recibir un diagnóstico de hernia discal, es normal que:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Tengas miedo al quirófano.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Sientas que tu resonancia es una especie de "sentencia".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Te hayan dicho que "con tu edad es lo que hay".</span>
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Pero el mensaje de este contenido es otro:
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200 mb-2">
                    Una hernia discal se puede reabsorber sola sin cirugía.
                  </p>
                  <p className="text-gray-200">
                    Tu cuerpo tiene herramientas para repararse, siempre que tú no se las quites evitando todo movimiento, abusando del reposo, o quedándote sólo en soluciones pasivas.
                  </p>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Lo que marca la diferencia es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Entender qué ha provocado la hernia (tu biomecánica, tus compensaciones).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Recuperar movilidad, propiocepción y estabilidad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Introducir fuerza e impactos progresivos, hasta que tu columna sea mucho más resistente.</span>
                  </li>
                </ul>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    No es fácil, no es rápido, pero sí es posible. Y como repite Roberto Galván: la herramienta más potente para eliminar un dolor crónico es la fuerza, fuerza y más fuerza.
                  </p>
                </div>
              </section>

              <div className="mt-8 text-center">
                <Button size="lg" asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                  <Link to="/tienda">
                    Descubre nuestro programa completo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HerniaDiscalReabsorber;
