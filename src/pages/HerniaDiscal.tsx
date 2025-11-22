import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscal = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Cómo curar una hernia discal sin cirugía: guía completa paso a paso</title>
        <meta name="description" content="Cómo curar una hernia discal sin cirugía paso a paso. Aprende posturas para dormir, ejercicios específicos, errores habituales, alimentación y mentalidad para eliminar el dolor lumbar crónico." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/como-curar-hernia-discal-sin-cirugia" />
        <meta name="keywords" content="cómo curar una hernia discal sin cirugía, curar hernia discal, ejercicios para hernia discal lumbar, dolor lumbar crónico por hernia de disco, operarse o no de hernia discal, posturas para dormir con hernia lumbar, ejercicios para fortalecer la columna lumbar, alimentación para hernia discal, entrenamiento para dolor lumbar, evitar operación de hernia discal" />
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
                Cómo curar una hernia discal sin cirugía y recuperar tu vida paso a paso
              </h1>
            </header>

            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/8F0-ed6r8o0"
                title="Cómo curar una hernia discal sin cirugía"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                En este artículo aprenderás cómo curar una hernia discal sin cirugía centrándote en lo que realmente marca la diferencia: estabilidad de la columna, entrenamiento específico, posturas correctas para dormir, alimentación adecuada y un cambio de mentalidad. No se trata de vivir "un poco mejor", sino de volver a hacer tu vida sin miedo al dolor lumbar.
              </p>

              <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                <p className="font-semibold text-gray-200">
                  ⚠️ Aviso importante: Este artículo resume y organiza el contenido de un vídeo educativo. No sustituye la valoración de un profesional sanitario.
                </p>
              </div>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿De verdad tu hernia discal es el problema principal?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Antes de hablar de ejercicios, operaciones o pastillas, hay una idea clave:
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    Tu enemigo principal no es la hernia, sino la inestabilidad de tu columna.
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Muchas personas pasan por un camino parecido al que el autor describe:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Un día te agachas y notas un pinchazo lumbar brutal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>El dolor se hace constante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>De pie te molesta. Sentado también.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Agacharte a recoger algo del suelo se vuelve una "aventura".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Dormir es una batalla: cambias de postura y el dolor reaparece.</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-300">
                  Si te reconoces en esto, no estás solo. Y lo primero es entender qué está pasando.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Hernia discal vs protrusión discal: qué es y qué no es</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Entre las vértebras tienes discos intervertebrales, que actúan como "amortiguadores" llenos de agua.
                </p>
                <ul className="space-y-3 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Una protrusión discal</strong> es cuando el disco se deforma y sobresale, pero no se rompe del todo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Una hernia discal</strong> aparece cuando el disco se rompe y parte de su contenido se desplaza hacia la médula o una ramificación nerviosa.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Te suelen decir que: "La hernia que presiona el nervio es la causa de todo tu dolor". Pero el propio autor matiza:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Hay personas con hernia y dolor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Personas con hernia y sin dolor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Personas sin hernia y con dolor lumbar.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Es decir: la imagen de la resonancia no explica por sí sola tu dolor. Lo que marca la diferencia es el grado de estabilidad de tu columna, cómo se mueven tus vértebras y la fuerza de la musculatura que las protege.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">¿Operarse o no operarse de hernia discal?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La gran pregunta: "¿Y si la única solución es operarme?"
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El autor distingue dos tipos de casos:
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-white">Casos donde la cirugía puede ser necesaria</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando hay fracturas óseas, politraumatismos, vértebras astilladas que presionan claramente la médula… ahí la operación puede ser prioritaria para evitar daños graves.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Casos donde NO debería ser la primera opción</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando "solo" tienes hernia de disco, protrusión discal o espondilolistesis (cierto desplazamiento de vértebras), el mensaje es claro:
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    No es tan grave como te han hecho creer. Y muchas veces operarse no soluciona el dolor.
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  En el vídeo se menciona un estudio con 562 personas operadas de hernia lumbar:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Solo a un 40% se les quitó el dolor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Un 10% siguió igual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Un 50% mejoró algo… pero no se le quitó del todo.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Además, en parte de ese grupo el dolor volvió con el tiempo (recidiva).
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Conclusión del autor: En torno a un 60% de los operados no sienten que haya merecido la pena: han pasado por un riesgo alto (paraplejia, pérdida de fuerza, problemas de esfínteres, nuevas hernias…) y siguen con dolor.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Por eso insiste:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>La cirugía no debe ser tu primera opción si "solo" tienes hernia/protrusión lumbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Aunque te operes, igual tendrás que entrenar después para estabilizar la columna.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Buenas noticias: las hernias cambian con el tiempo</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Otro punto que desmonta mucho miedo:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Con los años, los discos se deshidratan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Eso hace que la hernia pueda dejar de presionar tanto la médula o el nervio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>El dolor puede disminuir o desaparecer sin cirugía, si acompañas el proceso con entrenamiento adecuado.</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    No es cierto que "cuanto más tiempo pase sin operarte, peor será siempre".
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Lo que sí empeora las cosas es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>El reposo eterno.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>El miedo a moverte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No fortalecer la musculatura que estabiliza tu columna.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">El arma más potente para curar tu hernia discal: el entrenamiento</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El autor lo repite varias veces:
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    "La herramienta más potente que existe para eliminar cualquier tipo de dolor lumbar es el entrenamiento."
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Y no habla de reposar meses, llevar una faja todo el día, ni vivir a base de calor, cremas y pastillas.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Habla de:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Fortalecer la musculatura que estabiliza tu columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Trabajar abdominales y musculatura profunda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Recuperar la movilidad de cadera y columna sin miedo.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 text-white">El verdadero objetivo</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  No es que "te duela un poco menos". Es que vuelvas a hacer tu vida normal: puedas agacharte, dormir, caminar y trabajar sin estar pensando todo el rato en tu hernia.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">El peso de la mente: del "es crónico" a ser "indestructible"</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Cuando te dicen que tu dolor es crónico, lo normal es pasar por estas fases:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Negación</strong> – "Eso no me puede estar pasando a mí".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Ira</strong> – Te enfadas con médicos, contigo mismo, con el mundo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Negociación</strong> – "Si hago todo perfecto, ¿se me quitará?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Depresión</strong> – Te imaginas un futuro limitado, con dolor constante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Aceptación</strong> – Asumes que "te toca vivir con ello".</span>
                  </li>
                </ul>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    El autor propone cambiar la última fase por otra: Indestructibilidad: aceptar que hay dolor, pero creer al 100% que puedes reducirlo o eliminarlo con el enfoque adecuado.
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La actitud importa porque:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si crees que "nada te va a servir", no harás los ejercicios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si te han llenado de miedo con diagnósticos dramáticos, tu propia mente será la que te bloquee.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cómo dormir con hernia lumbar sin aumentar el dolor</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Dormir es uno de los momentos más críticos cuando tienes hernia discal.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Cómo se mueve el disco según la postura</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Simplificando lo que explica el autor:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuando haces una flexión hacia delante, el disco se desplaza hacia atrás.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuando flexionas hacia un lado, el disco se desplaza hacia el lado contrario.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">¿De qué lado dormir?</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Ejemplo usado en el vídeo: hernia hacia la izquierda.
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Se recomienda tumbarse inicialmente sobre el lado derecho.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuidar cómo cae la cadera y cómo se curva la zona lumbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Evitar posiciones donde se combine: Flexión lateral + rotación + flexión hacia delante.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">Lo que NUNCA debes hacer</h3>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    Da igual dónde esté tu hernia: Nunca sumes a la vez flexión lateral + rotación del tronco.
                  </p>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Ejemplos a evitar:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Agacharte en diagonal a coger una caja retorciendo la espalda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Abdominales cruzados llevando codo a rodilla contraria.</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-300">
                  Esos gestos son críticos para el disco y pueden disparar el dolor.
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Ejercicios y movimientos que debes evitar al inicio</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Especialmente en fases de dolor fuerte:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Evita las flexiones de tronco hacia adelante si tu hernia es central/posterior.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Si tu hernia es lateral (derecha o izquierda), evita flexionar hacia el lado contrario.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Evita cualquier ejercicio que combine rotación + flexión lateral (el "movimiento prohibido" del vídeo).</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-300">
                  No es un "nunca más", es un "todavía no".
                </p>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tres ejercicios suaves para empezar a moverte sin miedo</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Estos ejercicios buscan movilizar y descomprimir un poco la zona, sin exigir demasiada fuerza.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">1. Ejercicio de las dos sillas o la puerta</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Objetivo: movilizar suavemente la cadera y columna.
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Coloca dos sillas paralelas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Apoya las manos en los respaldos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Apoya solo las puntas de los pies y deja que las rodillas queden ligeramente suspendidas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Desde ahí, mueve la cadera suavemente a un lado y al otro, manteniendo los hombros más fijos.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Variante: apoyado en una puerta, con las manos arriba y los pies en el suelo, dejando que el peso caiga hacia delante y repitiendo el mismo balanceo de cadera.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">2. Ejercicio "Torre de Pisa"</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Objetivo: empujar el disco hacia dentro del canal adecuado.
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Supón que tu hernia está en el lado derecho.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Te colocas de pie, pegado a la pared con el lado izquierdo del cuerpo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Apoyas antebrazo y hombro en la pared.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Cuerpo en ligera diagonal, pies algo separados de la pared.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Desde ahí, llevas la cadera hacia la pared y vuelves al centro, lento.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Esto ayuda, según el autor, a descomprimir la zona donde está la hernia.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">3. Ejercicio de la "báscula de la cadera"</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Objetivo: controlar la posición de la pelvis y activar la zona lumbar y abdominal.
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Tumbado boca arriba: variante 1 con piernas estiradas o variante 2 con rodillas flexionadas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Localiza las crestas ilíacas (los huesos de delante de la cadera).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Haz una anteversión: arquea un poco el lumbar (que quepa la mano debajo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Luego una retroversión: pega toda la zona lumbar al suelo (que no quepa la mano).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Alterna varias veces, controlando el movimiento.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Medicamentos, cremas, fajas… ¿sí o no?</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El enfoque del vídeo es muy claro y directo:
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="font-semibold text-gray-200">
                    Nada de esto corrige el problema de base: la inestabilidad de tu columna.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Relajantes musculares</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Tu cuerpo contrae la musculatura alrededor de la columna para proteger la médula. Si tomas un relajante muscular, esa protección baja. Te puede doler menos un rato, pero tu columna queda más desprotegida, especialmente al levantarte.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Cremas "milagrosas"</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Motivos por los que, según el autor, no tienen sentido:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No regeneran el disco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No atraviesan hasta las capas profundas donde está el problema.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Generan una sensación de frío o calor que solo "distrae" al cerebro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Pueden crear falsas expectativas y frustración cuando ves que no te curan.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">Antiinflamatorios</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El disco no está inervado. No "sientes" que el disco esté mal. El dolor viene de la presión sobre el nervio o médula, y de la inestabilidad. Desinflamar algo superficial no corrige esa presión mecánica.
                </p>
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-semibold text-gray-200">
                    Mensaje central: Puedes gastar mucho en fármacos y cremas sin resolver lo esencial: fortalecer y estabilizar tu columna con entrenamiento.
                  </p>
                </div>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Alimentación para apoyar la recuperación de una hernia discal</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La alimentación no cura tu hernia por sí sola, pero puede reducir síntomas y apoyar la salud de tus huesos, cartílagos, discos y sistema nervioso.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Lo que conviene evitar</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Según el vídeo, deberías reducir o evitar:
                </p>
                <ul className="space-y-3 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Alcohol:</strong> Dificulta la absorción de micronutrientes como la vitamina B12. Favorece la aparición de neuropatías, y tu hernia ya está irritando nervios.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Tabaco:</strong> Especialmente negativo si tienes además problemas de tipo reumatoide.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Sobrepeso:</strong> Aumenta la carga sobre las vértebras lumbares. Suele ir unido a sedentarismo, otro factor clave en la aparición del dolor.
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">Nutrientes que sí te interesan</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El autor destaca 9 nutrientes importantes:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Calcio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Fósforo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Magnesio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Hierro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Vitamina D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Vitamina K</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Vitamina C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Vitamina B12</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Glucosamina y condroitina</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  La idea general:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Priorizar alimentos reales (vegetales, frutos secos, pescado, carnes, huevos, lácteos si los toleras).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>No abusar de suplementos por tu cuenta para no caer en hipervitaminosis.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cómo curar una hernia discal sin cirugía: plan de acción práctico</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Llegamos a lo que realmente quieres: ¿qué hago para que el dolor se vaya o baje al mínimo?
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">1. Cambia tus hábitos de movimiento diario</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Si estás mucho tiempo sentado o de pie, cada hora:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Levántate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Camina un poco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Haz pequeños giros suaves de tronco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Mobiliza caderas.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-300">
                  No se trata de matarte a entrenar un día, sino de mover tu columna todos los días, varias veces, de forma controlada.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">2. Fortalece tu abdomen (pero bien)</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  No basta con hacer planchas eternas sin moverte. El objetivo es:
                </p>
                <ul className="space-y-2 mb-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Trabajar los abdominales como soporte real de la columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Integrarlos con el movimiento de cadera y columna, no solo "aguantar".</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">3. Fortalece la musculatura estabilizadora de la columna</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  El vídeo habla de un "músculo secreto" de estabilidad (se refiere a la musculatura profunda tipo multífidos): es clave para la estabilidad de las vértebras, importante si has tenido ciática o dolor que baja a las piernas.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">4. Los 7 ejercicios clave que propone el autor</h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Hazlos de forma progresiva, con buena técnica y sin buscar el dolor máximo.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">1. Punta de flecha (tumbado boca arriba)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tumbado boca arriba en colchoneta.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Piernas separadas un poco más que las caderas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Brazos extendidos por encima de la cabeza, intentando "crecer".</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Juntas las puntas de los pies y las giras ligeramente hacia dentro.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Mantienes unos 30 segundos. Repites 3 veces.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">2. Vaivén con la pared</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Colocas una rodilla sobre una toalla, la otra pierna adelantada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>El pie de atrás se apoya en la pared.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Manos en el suelo, bajo los hombros.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Empujas con la pierna de atrás para ir hacia delante.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Haces el movimiento de vaivén con ambas piernas.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">3. Twister tumbado</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tumbado boca arriba, brazos en cruz, hombros pegados al suelo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Levantas la pierna contraria al lado de la hernia.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Dejas caer esa pierna hacia el lado de la hernia.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>20 repeticiones hacia el lado indicado.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">4. La campana con peso</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>De pie (o de rodillas), con un peso de 4–5 kg en la mano contraria al lado de la hernia.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Te inclinas solo hacia el lado de la hernia.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>3 series de 20 repeticiones.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">5. El "Cristo"</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Sentado en el suelo, piernas estiradas formando una "V" amplia.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Brazos en cruz, espalda recta.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Elevas una pierna y la llevas desde un lado al otro sin arrastrar.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">6. Abdominal en V invertida (plancha dinámica)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Posición de plancha sobre antebrazos, rodillas estiradas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Subes la cadera hacia arriba.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Bajas lento, apretando el abdomen.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>3 series de 20 repeticiones.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">7. Superman modificado (cuadrupedia flotante)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Manos debajo de hombros, rodillas debajo de caderas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Elevas un poco las rodillas del suelo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Extiendes un brazo hacia delante, manteniendo la altura de las rodillas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>3 series de 20 repeticiones (10 por brazo).</span>
                      </li>
                    </ul>
                  </div>
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

export default HerniaDiscal;
