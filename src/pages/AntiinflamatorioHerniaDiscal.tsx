import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AntiinflamatorioHerniaDiscal = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))]">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-[hsl(var(--light-gray))]">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>
            </Button>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary-foreground">
              💪 El mejor antiinflamatorio para la hernia discal: la clave no está en las pastillas, sino en el movimiento
            </h1>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bAR3UDwmh9g"
                title="El mejor antiinflamatorio para la hernia discal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none text-secondary-foreground/90">
              <p className="text-xl font-semibold mb-6">
                Si sufres una hernia discal y estás buscando el mejor antiinflamatorio para aliviar el dolor, puede que te sorprenda saber que la verdadera solución no está en los medicamentos, sino en fortalecer tu columna.
              </p>

              <p className="mb-6">
                En este artículo descubrirás por qué los AINES, las infiltraciones o la ozonoterapia ofrecen solo alivio temporal, y cómo el ejercicio físico bien planificado actúa como el antiinflamatorio natural más poderoso para eliminar el dolor lumbar o cervical y recuperar tu movilidad.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                ¿Cuál es el mejor antiinflamatorio para una hernia discal?
              </h2>

              <p className="mb-6">
                Cuando escuchamos "hernia discal", lo primero que pensamos es en dolor, inflamación y medicamentos. Sin embargo, cada vez más estudios y profesionales del movimiento coinciden en algo clave: el mejor antiinflamatorio para una hernia discal no se vende en farmacias, se construye con movimiento.
              </p>

              <p className="mb-6">
                Una hernia o protrusión discal se produce cuando el disco intervertebral se desplaza o deforma, generando presión sobre los nervios cercanos. Esto puede causar dolor lumbar, ciática, hormigueos o debilidad en las piernas o brazos, dependiendo de la zona afectada.
              </p>

              <p className="mb-6">
                Y aunque parezca lógico recurrir a antiinflamatorios, relajantes musculares o infiltraciones, la mayoría de estos tratamientos solo alivian los síntomas a corto plazo, sin atacar la verdadera causa.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Los tratamientos tradicionales: alivio rápido, resultados limitados
              </h2>

              <p className="mb-6">
                Es habitual que los médicos receten antiinflamatorios no esteroideos (AINES) o incluso relajantes musculares para reducir la molestia inicial. También existen terapias como la ozonoterapia, el PRP (plasma rico en plaquetas) o las infiltraciones de corticoides, muy populares entre quienes buscan una solución rápida.
              </p>

              <p className="mb-6">
                El problema es que estos métodos no resuelven el origen del dolor. Su efecto antiinflamatorio puede aliviar durante unos días o semanas, pero al desaparecer, el dolor vuelve y, a menudo, con más intensidad.
              </p>

              <p className="mb-6">
                Además, el uso prolongado de relajantes musculares debilita la musculatura estabilizadora de la columna, haciendo que el cuerpo genere más rigidez y menos movilidad, justo lo contrario de lo que necesita para recuperarse.
              </p>

              <p className="mb-6 font-semibold">
                En palabras sencillas: cuanto más dependes de medicamentos, más frágil se vuelve tu espalda.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                La verdad sobre la inflamación y el dolor crónico
              </h2>

              <p className="mb-6">
                Uno de los errores más comunes es pensar que el dolor crónico en la espalda proviene directamente de la hernia o del disco dañado. En realidad, el tejido lesionado se regenera en un plazo máximo de seis meses.
              </p>

              <p className="mb-6">
                Si el dolor persiste más allá de ese tiempo, no es el disco el que duele, sino la rigidez muscular y la sobrerreacción del cerebro, que intenta proteger la zona limitando el movimiento.
              </p>

              <p className="mb-6">
                Esa "protección excesiva" se traduce en contracturas, miedo al movimiento y una sensación de debilidad constante. Por eso, el reposo prolongado o la inactividad solo empeoran el problema, porque el cuerpo se vuelve más rígido y pierde capacidad de reacción.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Por qué el ejercicio es el mejor antiinflamatorio natural
              </h2>

              <p className="mb-6">
                El movimiento controlado y el entrenamiento progresivo no solo ayudan a recuperar la fuerza y movilidad, sino que también reducen la inflamación de manera natural. El ejercicio estimula la circulación, mejora la oxigenación de los tejidos y envía señales al cerebro de que "todo está bien", desactivando ese estado de alerta constante que genera dolor.
              </p>

              <p className="mb-6 text-xl font-semibold text-primary">
                👉 El ejercicio físico es, literalmente, el mejor antiinflamatorio natural para una hernia discal.
              </p>

              <p className="mb-6">
                Fortalecer la musculatura profunda —especialmente el core, los multífidos y los paravertebrales— permite que la columna recupere su estabilidad y deje de depender de la tensión muscular protectora. El resultado: menos rigidez, menos dolor y más libertad de movimiento.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Ejercicios que debes evitar (al menos al principio)
              </h2>

              <p className="mb-6">
                Cuando hay una hernia discal reciente o un dolor intenso, no todos los ejercicios son apropiados. En la fase inicial conviene evitar:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Movimientos de rotación y flexión simultánea del tronco.</li>
                <li>Ejercicios con carga vertical excesiva (como correr o hacer sentadillas pesadas).</li>
                <li>Abdominales tradicionales o con rotación, que aumentan la presión sobre el disco.</li>
              </ul>

              <p className="mb-6">
                Esto no significa que nunca más podrás hacerlos. El objetivo es progresar gradualmente, fortaleciendo la musculatura estabilizadora antes de aumentar la carga o la complejidad de los movimientos.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Ejercicios recomendados para aliviar el dolor y fortalecer la columna
              </h2>

              <p className="mb-6">
                A medida que el dolor disminuye y el cuerpo recupera confianza, es momento de introducir ejercicios terapéuticos que ayuden a estabilizar la columna y fortalecer la espalda. Algunos ejemplos eficaces son:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Movilizaciones suaves de cadera y columna (puentes, balanceos, extensiones ligeras).</li>
                <li>Ejercicios de respiración y control del core (como el dead bug o la plancha modificada).</li>
                <li>Trabajo de fuerza progresiva con cargas controladas (peso muerto técnico, ejercicios con gomas, etc.).</li>
              </ul>

              <p className="mb-6">
                El secreto está en la progresión: avanzar paso a paso, escuchando al cuerpo y sin miedo al movimiento. El dolor no siempre significa daño; muchas veces es solo una señal de rigidez que debe desbloquearse.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                El reposo prolongado: el enemigo silencioso
              </h2>

              <p className="mb-6">
                Muchos creen que "guardar reposo" es la mejor forma de sanar la hernia, pero la evidencia científica demuestra lo contrario. A partir de las 48 horas sin movimiento, el cuerpo comienza a atrofiar su musculatura y a perder capacidad de estabilización.
              </p>

              <p className="mb-6">
                Esto agrava la rigidez, incrementa el dolor y retrasa la recuperación. Por eso, incluso si hay molestia, es importante mantenerse activo dentro de los límites del dolor tolerable.
              </p>

              <p className="mb-6 font-semibold">
                Como dice el especialista Roberto Galván, "moverte con dolor leve será siempre más beneficioso que quedarte quieto".
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Las infiltraciones: alivio momentáneo, frustración asegurada
              </h2>

              <p className="mb-6">
                Las infiltraciones pueden parecer milagrosas porque eliminan el dolor durante unos días, pero no solucionan el problema de fondo. Cuando el efecto pasa, el dolor regresa y la persona suele sentirse más frustrada y más débil que antes.
              </p>

              <p className="mb-6">
                Además, estudios recientes indican que las infiltraciones repetidas pueden acelerar la degeneración del tejido, por lo que no se recomienda hacer más de tres. La mejor alternativa sigue siendo entrenar y recuperar la función muscular de forma segura.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                La fórmula definitiva: fuerza, movimiento y constancia
              </h2>

              <p className="mb-6">
                Si tu dolor dura más de seis meses, probablemente ya no es un problema estructural, sino funcional. Tu cuerpo necesita moverse, fortalecerse y volver a confiar en su capacidad.
              </p>

              <p className="mb-6">
                El entrenamiento de fuerza adaptado es la herramienta más poderosa para eliminar el dolor de espalda de forma duradera. No necesitas fármacos ni terapias invasivas: necesitas reeducar tu cuerpo y devolverle la estabilidad que ha perdido.
              </p>

              <p className="mb-6 text-xl font-semibold">
                Por eso, el mejor antiinflamatorio para la hernia discal es el ejercicio físico. El movimiento es salud. La fuerza es libertad.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-foreground">
                Conclusión: el poder está en ti
              </h2>

              <p className="mb-6">
                Si llevas tiempo sufriendo de dolor lumbar, ciática o rigidez cervical, recuerda esto: tu cuerpo no está roto, solo necesita recuperar el control y la fuerza. Los medicamentos pueden ayudarte a pasar un mal momento, pero no son la solución.
              </p>

              <p className="mb-6">
                Muévete, fortalece, progresa y, sobre todo, confía en tu proceso. Como dice Roberto Galván en su programa Espalda Indestructible:
              </p>

              <p className="mb-8 text-xl font-bold text-primary">
                "La fuerza es el mejor tratamiento para cualquier tipo de dolor. La verdadera medicina está en tu propio cuerpo."
              </p>

              <div className="mt-12 p-8 bg-primary/10 rounded-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
                  ¿Quieres recuperar tu espalda de forma definitiva?
                </h3>
                <p className="mb-6 text-secondary-foreground/90">
                  Descubre el programa Espalda Indestructible: el método completo para eliminar el dolor lumbar, fortalecer tu columna y recuperar tu movilidad sin cirugía ni medicamentos.
                </p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <Link to="/tienda">
                    Ver programa completo
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

export default AntiinflamatorioHerniaDiscal;
