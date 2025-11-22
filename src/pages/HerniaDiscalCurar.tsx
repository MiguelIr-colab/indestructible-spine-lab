import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscalCurar = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Curar hernia discal sin cirugía: 7 ejercicios para regenerar tu disco paso a paso</title>
        <meta name="description" content="Descubre cómo una hernia discal puede curarse sin cirugía mediante movimiento, compresión progresiva y 7 ejercicios específicos para hernia cervical, dorsal y lumbar. Entiende el papel de tu sistema inmune y por qué el reposo absoluto puede frenar tu recuperación." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/curar-hernia-discal-sin-cirugia" />
        <meta name="keywords" content="curar hernia discal sin cirugía, ejercicios para hernia discal, hernia discal cervical dorsal y lumbar, regenerar disco intervertebral, movimiento para hernia discal, sistema inmune y hernia discal, reposo y hernia discal, ejercicios de fuerza para dolor de espalda, compresión del disco como una esponja" />
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
                Curar una hernia discal sin cirugía: así se regenera tu disco con movimiento y fuerza
              </h1>
            </header>

            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VupbMbUlF9A"
                title="Curar hernia discal sin cirugía"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                En este artículo aprenderás por qué una hernia discal puede curarse sin cirugía si se dan ciertas condiciones, cómo funciona tu disco como una esponja que necesita movimiento para nutrirse y cuáles son los 7 ejercicios que pueden ayudarte a regenerarlo de forma progresiva, tanto si tu hernia es cervical, dorsal o lumbar.
              </p>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Qué es una hernia discal y por qué puede regenerarse</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando escuchas "hernia discal", es fácil pensar en algo roto para siempre, condenado a la cirugía. Sin embargo, tal y como explica Roberto Galbán, licenciado en Ciencias de la Actividad Física y del Deporte, una hernia discal puede recuperarse sin operar si se dan ciertas condiciones.
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200 mb-2">
                    Tu disco intervertebral se comporta de forma muy parecida a una esponja.
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Cuando se comprime, absorbe el líquido que tiene alrededor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>A través de ese líquido llegan nutrientes y sustancias que ayudan a regenerar el tejido.</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  El problema es que el disco puede romperse de muchas formas: protrusión, extrusión, con migración, más grande o más pequeña. Pero el cuerpo siempre trata de solucionarlo con el mismo mecanismo: tu sistema inmune entra en acción.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">El sistema inmune también repara tus discos</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando te cortas la piel, llegan plaquetas y células del sistema inmune, se forma una costra y con el tiempo la zona cicatriza. Con los discos vertebrales ocurre algo parecido: tu cuerpo intenta reparar ese tejido roto.
                </p>

                <p className="mb-4 leading-relaxed text-gray-300">
                  La diferencia clave es que:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>La piel sí tiene venas y arterias que llevan nutrientes directamente a la zona dañada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Tu disco no tiene vasos sanguíneos que lo atraviesen.</span>
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Eso significa que la sangre no entra dentro del disco para llevar esos nutrientes y células regeneradoras. Se quedan rodeando el disco, pero no penetran de forma directa en su interior.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Entonces, ¿de qué depende que tu hernia discal se regenere?</h3>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200 mb-2">
                    Depende de que ese líquido lleno de sustancias del sistema inmune entre dentro del disco.
                  </p>
                  <p className="text-gray-200">
                    Y ahí vuelve la comparación con la esponja: tu disco absorbe lo que tiene alrededor cuando se comprime y descomprime.
                  </p>
                </div>

                <p className="leading-relaxed text-gray-300">
                  Sin esa compresión, el disco herniado es como una esponja apoyada sobre el agua… que casi no absorbe nada.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">La metáfora de la esponja: por qué el reposo absoluto no te ayuda</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Para que lo entiendas mejor, en el vídeo se realiza un experimento muy simple con dos esponjas:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-white">Primera esponja</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Se coloca en un vaso con agua.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Se deja 15 minutos sin tocarla, apoyada sobre el líquido.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pasado el tiempo, al apretarla apenas sale agua.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong className="text-white">La esponja está prácticamente seca.</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-white">Segunda esponja</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Se introduce en otro vaso con agua.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Esta vez se aprieta y se suelta con los dedos varias veces.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Poco a poco va cambiando de color, se nota más húmeda, se deforma por la cantidad de agua.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong className="text-white">Al exprimirla, sale mucha más agua.</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200 mb-2">
                    La conclusión es clara:
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Un disco (o una esponja) en reposo absoluto casi no absorbe líquido.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Un disco que se comprime y descomprime sí se nutre.</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Trasladado a tu columna:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si haces solo reposo, tu disco herniado no se nutre bien.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si generas compresión controlada y progresiva, ayudas a que entren nutrientes y sustancias del sistema inmune en el interior del disco.</span>
                  </li>
                </ul>

                <p className="leading-relaxed text-gray-300">
                  Por eso, aunque te hayan dicho que con una hernia "no debes hacer nada, no debes agacharte, ni correr, ni saltar", esa recomendación puede ir en contra de la regeneración real del disco.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Entonces el esfuerzo es bueno o malo para la hernia?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Aquí aparece la gran dualidad que genera tanta confusión:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Por un lado, más esfuerzo y más carga pueden aumentar la presión del disco sobre la médula o los nervios, y con ello el dolor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Por otro lado, sin presión, el disco no se nutre y no se regenera.</span>
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Esto significa que no se trata de elegir entre:
                </p>
                <div className="bg-gray-800 p-4 rounded mb-4">
                  <p className="text-gray-300 mb-2">❌ "Reposo absoluto"</p>
                  <p className="text-gray-300">o</p>
                  <p className="text-gray-300 mt-2">❌ "Hacer cualquier esfuerzo sin control"</p>
                </div>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    Se trata de aplicar un principio muy concreto: Compresión progresiva, controlada y adaptada a tu situación.
                  </p>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Además, a largo plazo, no tener fuerza es un problema añadido. Cuanta menos fuerza tengas:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Más débil estará tu cuerpo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Más difícil será estabilizar tu columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Más fácil será que aparezcan nuevos problemas de espalda.</span>
                  </li>
                </ul>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Por eso, el mensaje central es rotundo: La fuerza, bien trabajada y bien planificada, es una herramienta clave contra el dolor crónico de espalda por hernias, protrusiones o incluso estenosis del canal medular.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Principio clave: movimiento, compresión y progresión</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Para que tu disco herniado tenga opciones reales de regenerarse sin cirugía, se deben combinar tres ideas:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-white">Movimiento en lugar de inmovilidad</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>El reposo absoluto no favorece la nutrición del disco.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>El movimiento genera pequeñas compresiones que ayudan a que el disco "chupe" nutrientes, igual que la esponja.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-white">Compresión suave y gradual</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No sirve hacer un gran sobreesfuerzo de golpe, sobre todo si la hernia es reciente.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Hay que empezar por cargas muy bajas, que generen una compresión moderada y tolerable.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-white">Progresión en las cargas</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Con el tiempo, tu disco y tus tejidos se van adaptando a cada vez mayores niveles de presión.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Eso permite que el disco se nutra mejor y que tu cuerpo gane fuerza y tolerancia al esfuerzo.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Para ayudarte a aplicar este principio, el autor propone una secuencia de 7 ejercicios, pensados para ir llevando tus discos de menos presión a más presión, tanto si tu hernia es cervical, dorsal o lumbar.
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mt-4">
                  <p className="font-semibold text-gray-200">
                    ⚠️ Importante: si algún ejercicio te aumenta el dolor, debes detenerlo de inmediato y probar con otros más suaves o buscar ayuda profesional.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">7 ejercicios para ayudar a curar una hernia discal sin cirugía</h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  A continuación verás los ejercicios explicados de forma práctica, tal como se describen en el vídeo. Recuerda: hazlos siempre con control, sin forzar y respetando tu nivel de dolor.
                </p>

                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">1. Ejercicio para hernia cervical: presión suave con las manos</h3>
                    <p className="mb-4 text-gray-300">
                      Este ejercicio está indicado para hernias cervicales, pero también puede ayudar cuando la hernia es dorsal alta.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Cómo hacerlo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Entrelaza los dedos y colócalos sobre la parte superior de tu cabeza.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Siéntate o ponte de pie con el cuerpo erguido.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Empuja con las manos suavemente hacia abajo, como si quisieras acercar la cabeza al suelo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Al mismo tiempo, el cuello se mantiene recto, sin irse hacia atrás ni hacia adelante.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>La presión que vas a poder ejercer es muy leve, lo suficiente para que haya una pequeña compresión.</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      Este gesto genera una compresión suave en los discos cervicales, similar a apretar muy ligeramente una esponja. Es una forma segura de empezar a que el disco se nutra sin grandes impactos.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">2. Ejercicio para hernia dorsal alta: igual que el cervical</h3>
                    <p className="text-gray-300">
                      Si tu hernia es dorsal y alta, el ejercicio anterior también te sirve. La compresión suave se transmite a esa zona y contribuye al mismo objetivo: darle movimiento y presión ligera a los discos sin generar impactos.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">3. Ejercicio de hombros con pesas para la zona dorsal</h3>
                    <p className="mb-4 text-gray-300">
                      Para seguir trabajando la zona dorsal, el vídeo propone un ejercicio con pesas o botellas.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Material:</h4>
                    <p className="mb-4 text-gray-300">
                      Dos mancuernas, botellas grandes de agua o garrafas, según tu capacidad.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Cómo hacerlo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sujeta una pesa en cada mano con los codos extendidos a los lados del cuerpo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mantén la espalda totalmente erguida.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Eleva los hombros hacia arriba (como si quisieras tocarte las orejas) y luego déjalos caer.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Evita que los codos se doblen.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>También evita que el tronco se balancee hacia adelante o hacia atrás.</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      Este movimiento genera una pequeña presión en la zona dorsal desde arriba, ayudando a que los discos de esa zona se comporten "como una esponja" y se nutran.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">4. Ejercicio de apoyo de brazos: subir y dejarse caer sentado</h3>
                    <p className="mb-4 text-gray-300">
                      Este ejercicio sigue trabajando la zona dorsal y también ayuda a la columna lumbar.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Cómo hacerlo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Siéntate en un asiento firme (por ejemplo, un taburete).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Coloca las manos a los lados del asiento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Extiende los codos para levantar tu cuerpo unos centímetros.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Después, suéltate y déjate caer suavemente sobre el asiento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Repite varias veces: subes con los brazos y bajas dejándote caer.</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      Es un ejercicio muy simple que genera una presión de abajo hacia arriba sobre los discos, pero de forma controlada. La caída no debe ser brusca, sino moderada y tolerable.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">5. Ejercicio del "globo" o cojín: mini saltos sentados</h3>
                    <p className="mb-4 text-gray-300">
                      El siguiente paso de progresión es aumentar un poco el impacto, pero de forma amortiguada. En el vídeo se menciona el típico juego de explotar un globo sentándote encima. Aquí se plantea algo similar, pero usando un cojín grande en lugar de un globo.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Cómo hacerlo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Coloca un cojín grande sobre la silla o el taburete.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Ponte de pie delante del cojín.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Realiza un pequeño salto y siéntate sobre el cojín, dejándote caer.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Levántate y repite: saltas y te dejas caer sobre el cojín.</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      El cojín actúa como amortiguador, pero aun así genera una compresión mayor que el ejercicio anterior. Es un paso más en la progresión hacia impactos controlados.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">6. Saltos a una pierna: impacto controlado desde el talón</h3>
                    <p className="mb-4 text-gray-300">
                      El siguiente ejercicio traslada la progresión a los miembros inferiores y la columna lumbar.
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-white">Cómo hacerlo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Ponte a la pata coja, apoyado solo en una pierna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Colócate de puntillas sobre ese pie.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Realiza pequeños saltos, de forma que al caer el pie toque el suelo y se deje caer el peso.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Intenta que el impacto vaya principalmente hacia el talón, para que la fuerza se transmita hacia arriba, a la columna.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Luego cambia de pierna y repite.</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      Son saltos pequeños, no hace falta saltar alto. La idea es generar una vibración y compresión suave que se transmita desde el talón hasta la columna.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">7. Pequeños saltos con las dos piernas y trote suave</h3>
                    <p className="mb-4 text-gray-300">
                      La siguiente progresión consiste en:
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 text-white">Saltos suaves a dos piernas</h4>
                    <ul className="space-y-2 mb-4 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pequeños saltos, sin mucha altura.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>De nuevo, buscando que el peso caiga hacia el talón, para que la fuerza se transmita hacia los discos.</span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-white">Salir a trotar suavemente</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Una vez que toleras bien los saltos suaves, el siguiente paso es un trote muy ligero.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>No hace falta correr rápido ni mucho tiempo: se trata de darle a tu columna una dosis moderada de impacto y movimiento.</span>
                      </li>
                    </ul>

                    <p className="mt-4 text-gray-300">
                      Con estos ejercicios, pasas de compresiones muy suaves (como el ejercicio cervical con las manos) a compresiones mayores (saltos y trote), siempre con el objetivo de que tus discos se nutran mejor y puedan ir regenerándose.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cómo saber hasta dónde llegar y cuándo parar</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Aunque el movimiento y la fuerza sean fundamentales, hay una regla que no debes olvidar:
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-6">
                  <p className="font-semibold text-gray-200">
                    Si un ejercicio te aumenta el dolor, tienes que dejar de hacerlo.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Algunas pautas básicas a tener en cuenta:</h3>
                <ul className="space-y-3 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Empieza siempre por los ejercicios de menor impacto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Aumenta la dificultad de forma progresiva, no de un día para otro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si notas que el dolor se dispara o aparecen síntomas nuevos, para y retrocede a un nivel de ejercicio más suave.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si pruebas varios ejercicios y ninguno te sienta bien, lo más prudente es buscar la ayuda de un profesional del ejercicio físico que pueda evaluar tu caso concreto.</span>
                  </li>
                </ul>

                <p className="leading-relaxed text-gray-300">
                  Tal y como comenta el autor, muchas personas con dolor crónico de espalda por hernias, protrusiones o estenosis del canal medular mejoran de forma notable cuando se les prescribe un programa de fuerza adaptado a sus condiciones.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Mensaje final: la fuerza como la herramienta más potente</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La idea principal que debes llevarte es que una hernia discal puede recuperarse sin cirugía en muchos casos, pero no lo hará solo con reposo.
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200 mb-2">
                    Tu disco necesita:
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Movimiento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Compresión suave y progresiva.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Fuerza, para que tu cuerpo pueda soportar mejor las cargas del día a día.</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Tu sistema inmune está preparado para defender y reparar tus tejidos, pero necesita que tu disco funcione "como una esponja": comprimiéndose y absorbiendo lo que tiene alrededor.
                </p>

                <p className="mb-4 leading-relaxed text-gray-300">
                  Por eso, más allá de los mitos sobre "no moverse" cuando tienes una hernia, el mensaje final es claro:
                </p>

                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200 text-lg">
                    La herramienta más potente para eliminar el dolor crónico es la fuerza: fuerza y más fuerza, siempre bien guiada y adaptada a tu situación.
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

export default HerniaDiscalCurar;
