import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscalEjerciciosEvitar = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Ejercicios que no debo hacer si tengo hernia discal: guía práctica</title>
        <meta name="description" content="Descubre qué ejercicios no debes hacer si tienes hernia discal o dolor crónico de espalda, qué movimientos evitar y por qué algunos clásicos pueden empeorar tus síntomas." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/ejercicios-que-no-debo-hacer-hernia-discal" />
        <meta name="keywords" content="ejercicios que no debo hacer si tengo hernia discal, ejercicios prohibidos hernia discal, qué no hacer con hernia de disco, dolor crónico de espalda y ejercicio, movimientos que empeoran la hernia discal, reposo y hernia discal, natación hernia discal, planchas abdominales hernia discal, ejercicios conflictivos dolor lumbar crónico" />
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
                Ejercicios que NO debes hacer si tienes hernia discal o dolor crónico de espalda
              </h1>
            </header>

            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/-9NnW40dxAU"
                title="Ejercicios que no debo hacer con hernia discal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Si tienes hernia discal o dolor crónico de espalda, no todo vale a la hora de moverte o entrenar. En este artículo verás qué ejercicios y gestos debes evitar, por qué el reposo, ciertos estiramientos, el calor local o algunas rutinas muy populares pueden estar frenando tu recuperación, y qué enfoque tiene más sentido según el tiempo que lleves con dolor.
              </p>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Antes de nada: ¿en qué fase está tu hernia discal?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando hablamos de hernia de disco o protrusión discal no es lo mismo llevar unas semanas con dolor que arrastrarlo durante años. Por eso, lo primero es identificar en qué situación te encuentras:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Fase aguda: menos de 6 meses con dolor</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Si llevas menos de 6 meses con dolor de espalda, estás en una fase aguda. En este momento, lo prioritario es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Seguir las recomendaciones de tu médico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Enfocarte en reducir el dolor y la inflamación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No precipitarte con ejercicios o movimientos que no te hayan pautado.</span>
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed text-gray-300">
                  En la fase aguda, tu objetivo no es "entrenar fuerte", sino calmar el episodio para que no se convierta en un problema más complejo.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Fase crónica: más de 6 meses con dolor</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Si llevas más de 6 meses con dolor, has probado muchas terapias pasivas, sigues los consejos médicos y aun así el dolor:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Ya no es tan agudo como al principio,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>pero persiste y puede ser muy intenso,</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  entonces estás en una fase crónica.
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    En este escenario es donde cobra más sentido revisar qué haces en tu día a día y qué ejercicios podrían estar empeorando tus síntomas, incluso aunque te parezcan "buenos para la espalda".
                  </p>
                </div>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Este artículo se centra sobre todo en esta fase crónica, cuando el dolor se mantiene en el tiempo y necesitas cambiar la estrategia.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tópicos que debes dejar de hacer si tienes dolor crónico de espalda</h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Hay tres cosas muy habituales que casi todo el mundo hace cuando le duele la espalda… y que, si tienes hernia discal o protrusión, pueden estar jugando en tu contra.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Reposo prolongado</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El reposo absoluto puede darte la sensación de alivio a corto plazo: te mueves menos, fuerzas menos, parece que el dolor baja un poco.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Pero a medio y largo plazo:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>La musculatura se debilita,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pierdes capacidad de movimiento,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tu espalda se vuelve más sensible a cualquier esfuerzo.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        El resultado es que cada vez te ves más limitado y tu dolor se convierte en compañero de viaje permanente. Si tu dolor ya es crónico, seguir apostando solo por el reposo no te va a sacar del problema.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Abusar de los estiramientos</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Otro clásico: dedicar mucho tiempo a estirar con la idea de "soltar la espalda" o "descomprimir la zona".
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El problema es que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Inviertes mucho tiempo y energía en estiramientos,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pero no ves una mejoría real y duradera en tu dolor.</span>
                      </li>
                    </ul>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Eso genera frustración: ves que haces "lo que te han dicho" pero sigues igual.
                    </p>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Tal como se plantea en el vídeo original, los estiramientos por sí solos no están haciendo nada relevante por tu hernia discal, especialmente si no van acompañados de un trabajo más profundo sobre la movilidad real de tus vértebras y de la fuerza de la musculatura que protege tu columna.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">3. Aplicar calor en la zona lumbar</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Tercer error habitual: poner calor en la zona dolorida.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Es verdad que el calor puede producir un alivio momentáneo, porque:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Aumenta el riego sanguíneo,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Lleva más plaquetas y sangre a la zona,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Te da una sensación de relax local.</span>
                      </li>
                    </ul>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Pero, si tu dolor es crónico y llevas más de 6 meses así, tu organismo ya ha hecho su trabajo de regeneración en la zona afectada. Aumentar todavía más la inflamación con calor no significa que vaya a dolerte menos.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      De hecho, puede ocurrir que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mientras tienes la fuente de calor puesta, notes cierto alivio,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pero cuando el efecto pasa, el regreso del dolor sea todavía más intenso.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed text-gray-300">
                      En contraste, el hielo sí se menciona como una opción para bajar inflamación, algo que tiene más sentido en un contexto donde la zona ya ha estado sufriendo durante tanto tiempo.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Movimientos que debes evitar con hernia discal</h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Más allá de hábitos generales, hay ciertos movimientos concretos que conviene evitar, sobre todo si tienes hernia discal y tu espalda lleva tiempo doliendo.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Flexión con rotación de tronco</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      La flexión con rotación de tronco —agacharte y girar a la vez— es uno de los movimientos más agresivos para una hernia de disco, especialmente en fase aguda.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Ejemplo típico:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Te inclinas hacia delante para coger algo del suelo,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>A la vez giras el cuerpo para colocar ese objeto hacia un lado.</span>
                      </li>
                    </ul>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Este gesto combina:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Flexión de columna,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Rotación,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Carga en la zona lumbar.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200 mb-2">
                        En fase aguda, es prácticamente un movimiento prohibido.
                      </p>
                      <p className="text-gray-200">
                        En fase crónica, no es tan extremo, pero sigue sin ser una buena idea abusar de este tipo de gestos sin control, sobre todo si se repiten muchas veces al día.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Flexiones laterales hacia el lado contrario de la hernia</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Otro error común es pensar: "Si tengo la hernia a la izquierda, me inclino hacia la derecha para no presionarla".
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Suena lógico, pero el efecto puede ser el contrario:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Al hacer flexión lateral hacia el lado contrario,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Estás proyectando aún más el disco hacia el lado por donde ya se ha protruido o lesionado.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Es decir, lo que intuitivamente parece "proteger la hernia" puede estar empujando más el disco hacia la zona dañada.
                      </p>
                    </div>
                    <p className="mt-4 leading-relaxed text-gray-300">
                      Con el tiempo y trabajando bien la columna, podrás llegar a moverte en todos los ejes y planos, pero eso exige progresión, control, y saber dónde se están moviendo realmente tus articulaciones.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Ejercicios de entrenamiento que pueden ser conflictivos</h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Ahora pasamos a los ejercicios de entrenamiento que, aunque tienen fama de "buenos para la espalda", pueden ser muy conflictivos cuando tienes hernia discal o dolor crónico.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Natación (cuando no está bien planteada)</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      La natación suele recomendarse casi por sistema para la espalda. Pero aquí viene el matiz importante:
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      No es lo mismo:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Ser un nadador profesional o tener una técnica depurada,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Que simplemente "pasearte" en el agua intentando no forzar.</span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-white">¿Por qué puede ser un problema?</h4>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <p className="font-semibold text-white mb-2">Por la ingravidez:</p>
                        <p className="text-gray-300">
                          En el agua, el cuerpo pesa menos. Eso puede sonar bien, pero también hace que tu musculatura trabaje menos contra la gravedad, de forma parecida a lo que ocurre con un astronauta en el espacio si pasa demasiado tiempo sin carga: la musculatura tiende a atrofiarse.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-white mb-2">Por la inercia de la lámina de agua:</p>
                        <p className="text-gray-300">
                          Al desplazarte, muchas veces haces fuerza al inicio del movimiento, pero luego te dejas llevar por la inercia del agua. Eso significa que no estás trabajando de forma constante la musculatura que debería proteger tu espalda, como sí ocurre en el medio terrestre.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Conclusión: si no tienes una técnica muy buena y un nivel físico alto, la natación puede no sólo no ayudarte, sino no aportar casi nada a la fuerza real que tu espalda necesita.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Ejercicio global de tipo "cat-camel"</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El famoso ejercicio "cat-camel" (alternar flexión y extensión de la espalda a cuatro patas) es otro clásico.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Funciona bien si todas las vértebras se mueven correctamente, pero en el contexto de una hernia discal o protrusión, suele ocurrir que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tienes varias vértebras bloqueadas,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>O con movilidad muy limitada,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y otras vértebras que se mueven en exceso.</span>
                      </li>
                    </ul>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Cuando haces un ejercicio global como el cat-camel:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mueves la columna "en bloque",</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Las vértebras que ya tienen más movilidad son las que reciben más carga,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y esas suelen ser las que han dado problemas (donde ha aparecido la hernia o la protrusión).</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        Por eso, hacer ejercicios globales sin haber trabajado antes esos bloqueos articulares, no tiene demasiado sentido: sigues cargando siempre en la misma zona, la que ya está castigada.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">3. Planchas abdominales para "fortalecer el core"</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Las planchas abdominales también se recomiendan a menudo para la espalda con la idea de fortalecer el core.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Es muy probable que hayas oído que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tu dolor de espalda se debe a un core débil,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y que la solución es "ponerlo fuerte".</span>
                      </li>
                    </ul>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El problema es que, si tienes hernia discal y dolor crónico, lanzarte directamente a hacer planchas puede:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sobrecargar la zona lumbar,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mantenerte en una posición donde la espalda tiene que soportar tensión constante,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sin haber trabajado antes la movilidad y la estabilidad segmentaria que necesitas.</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-gray-200">
                        De nuevo, el enfoque no es que "las planchas sean malas de por sí", sino que no son el punto de partida adecuado cuando tu espalda lleva tanto tiempo doliendo y tus vértebras no se mueven de forma homogénea.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Y entonces qué sí puedo hacer si tengo hernia discal?</h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Es lógico que, después de leer todo lo que no deberías hacer, te preguntes: "Vale, ¿y qué sí puedo hacer para no hacerme más daño?"
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  En el contenido original se plantea algo muy importante: para explicar en detalle qué ejercicios sí hacer con hernia discal o protrusión, se necesita un material específico aparte.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Aun así, podemos extraer varias ideas clave:
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">1. Respetar la fase aguda y escuchar al médico</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      En los primeros meses de dolor:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Haz caso a tu médico y sus recomendaciones,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>El objetivo principal es reducir el dolor agudo,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No fuerces con ejercicios que no hayan sido pautados.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">2. Priorizar la movilidad segmentaria antes que los ejercicios "globales"</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Si hay vértebras que no se mueven como deberían y otras que se mueven demasiado, no tiene sentido hacer ejercicios donde toda la columna se mueve en bloque (como el cat-camel) sin abordar antes esos bloqueos articulares.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      La lógica es:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Primero, recuperar la movilidad donde está limitada,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Después, integrar esa movilidad en ejercicios controlados,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y solo más adelante pasar a movimientos más globales.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">3. Moverse en tierra y no depender solo del agua</h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      El vídeo insiste en que lo que realmente te hace falta es moverte fuera del agua, en un entorno donde tu cuerpo tenga que soportar su peso y generar fuerza real.
                    </p>
                    <p className="leading-relaxed text-gray-300">
                      La idea es que tu espalda recupere su función en el medio donde vives el día a día: de pie, caminando, cargando, moviéndote… no flotando.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">4. Entender que la herramienta clave es la fuerza</h3>
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                      <p className="font-semibold text-gray-200 text-lg">
                        "La herramienta más potente que existe para eliminar tu dolor de espalda es la fuerza. Fuerza, fuerza y más fuerza".
                      </p>
                    </div>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      Esto no significa levantar cargas sin criterio, sino entender que:
                    </p>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Una espalda con músculos fuertes y activos está mejor preparada,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>La fuerza bien trabajada es una aliada a largo plazo frente al dolor crónico.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed text-gray-300">
                      Por eso, el enfoque general apunta hacia:
                    </p>
                    <ul className="space-y-2 mt-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Dejar atrás el reposo pasivo,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Abandonar la idea de que "solo estirar" o "poner calor" resolverá el problema,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Y avanzar hacia un proceso en el que la fuerza y el movimiento controlado sean protagonistas.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Mensaje final</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Tu recuperación no depende de encontrar un "truco milagroso", sino de:
                </p>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Entender qué movimientos evitar,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Saber qué hábitos no te están ayudando,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>E ir construyendo, paso a paso, una espalda más fuerte y más capaz.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200 text-lg">
                    Recuerda: la herramienta más potente para eliminar el dolor crónico de espalda es la fuerza, fuerza y más fuerza.
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

export default HerniaDiscalEjerciciosEvitar;
