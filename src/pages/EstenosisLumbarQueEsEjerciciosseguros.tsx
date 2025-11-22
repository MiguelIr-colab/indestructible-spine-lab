import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EstenosisLumbarQueEsEjercicioseguros = () => {
  return (
    <>
      <Helmet>
        <title>Estenosis lumbar: qué es y 3 ejercicios seguros para mejorar</title>
        <meta 
          name="description" 
          content="Aprende qué es la estenosis lumbar, sus síntomas, cómo se diagnostica y 3 ejercicios sencillos y seguros para empezar a reducir el dolor y ganar estabilidad sin riesgos." 
        />
        <meta 
          name="keywords" 
          content="estenosis lumbar, estenosis del canal medular, síntomas de estenosis lumbar, ejercicios para estenosis lumbar, dolor lumbar al caminar, tratamiento estenosis lumbar sin cirugía, fortalecer la espalda con estenosis, ejercicios seguros para la columna lumbar, claudicación neurogénica, espalda indestructible ejercicios" 
        />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/estenosis-lumbar-que-es-ejercicios-seguros" />
        
        <meta property="og:title" content="Estenosis lumbar: qué es y 3 ejercicios seguros para mejorar" />
        <meta property="og:description" content="Aprende qué es la estenosis lumbar, sus síntomas, cómo se diagnostica y 3 ejercicios sencillos y seguros para empezar a reducir el dolor y ganar estabilidad sin riesgos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://espaldaindestructible.com/blog/estenosis-lumbar-que-es-ejercicios-seguros" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estenosis lumbar: qué es y 3 ejercicios seguros para mejorar" />
        <meta name="twitter:description" content="Aprende qué es la estenosis lumbar, sus síntomas, cómo se diagnostica y 3 ejercicios sencillos y seguros para empezar a reducir el dolor y ganar estabilidad sin riesgos." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Estenosis lumbar: causas, síntomas y 3 ejercicios para mejorar sin riesgos",
            "description": "Aprende qué es la estenosis lumbar, sus síntomas, cómo se diagnostica y 3 ejercicios sencillos y seguros para empezar a reducir el dolor y ganar estabilidad sin riesgos.",
            "inLanguage": "es",
            "keywords": "estenosis lumbar, estenosis del canal medular, síntomas de estenosis lumbar, ejercicios para estenosis lumbar",
            "author": {
              "@type": "Person",
              "name": "Roberto Galván"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Espalda Indestructible"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://espaldaindestructible.com/blog/estenosis-lumbar-que-es-ejercicios-seguros"
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
                Estenosis lumbar: causas, síntomas y 3 ejercicios para mejorar sin riesgos
              </h1>
              <div className="aspect-video mb-8">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/g9uh1NdHqhQ"
                  title="Estenosis lumbar: qué es y 3 ejercicios seguros para mejorar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 8-10 minutos</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                La <Link to="/blog/estenosis-del-canal-lumbar-5-ejercicios" className="text-primary hover:underline">estenosis lumbar</Link> es un estrechamiento del canal por donde pasa la médula espinal que puede provocar dolor, hormigueo y pérdida de fuerza en las piernas. En este artículo entenderás qué es, qué síntomas suele dar, cómo se diagnostica y, sobre todo, cómo empezar a mejorar con 3 ejercicios sencillos y seguros, centrados en ganar fuerza y estabilidad en la columna sin poner en riesgo tu espalda.
              </p>
            </header>

            <div className="space-y-8">
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">¿Qué es la estenosis lumbar del canal medular?</h2>
                <p className="mb-4 leading-relaxed">
                  Cuando hablamos de estenosis espinal lumbar nos referimos a un estrechamiento del canal por donde pasa la médula espinal en la parte baja de la espalda.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Lumbar:</strong> es la zona baja de la columna, la última parte antes del sacro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Espinal:</strong> hace referencia al canal o "agujerito" por donde pasa tu médula.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Estenosis:</strong> significa que ese espacio se va estrechando.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Ese canal debería tener un espacio suficiente para que la médula y las raíces nerviosas "convivan" sin presión. Cuando, por distintos motivos, el espacio se reduce, se habla de estenosis del canal medular. Ese estrechamiento puede terminar irritando o comprimiendo la médula y los nervios, y ahí empiezan los síntomas.
                </p>
                <p className="leading-relaxed">
                  No se trata de una lesión repentina, sino de un proceso degenerativo con el paso del tiempo. Las estructuras que rodean la médula (discos, vértebras, articulaciones) van cambiando y pueden llegar a invadir el canal, reduciendo el espacio disponible.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">Causas frecuentes de estenosis lumbar</h2>
                <p className="mb-4 leading-relaxed">
                  Según lo que explica Roberto Galván, las causas más habituales son:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hernia o protusión discal que, poco a poco, va cerrando el canal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Desplazamiento de la vértebra (como una anterolistesis o su contrario), de forma que la vértebra se mueve y "ahorca" parcialmente la médula en un punto concreto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Protuberancias óseas debidas al desgaste, que van ocupando espacio dentro del canal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Artrosis facetaria y escoliosis degenerativa, que modifican la forma de las articulaciones y contribuyen al estrechamiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Operaciones previas que han generado tejido cicatricial; esa cicatriz puede estrechar el canal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hernias discales antiguas que han cicatrizado dejando un "callo" que ocupa espacio.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Más allá del nombre de la causa concreta, el problema clave es siempre el mismo: falta de espacio para la médula y los nervios en la zona lumbar.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">Síntomas y señales de alarma de la estenosis lumbar</h2>
                <p className="mb-4 leading-relaxed">
                  La estenosis lumbar tiene una sintomatología bastante característica. Entre las más frecuentes están:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dolor lumbar que aumenta al caminar o al estar de pie quieto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pesadez, entumecimiento o adormecimiento en una o en ambas piernas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hormigueos o sensación rara en las piernas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>En casos más severos, pérdida de fuerza en una o las dos piernas.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Hay un detalle muy importante: muchas personas notan alivio al sentarse o al inclinarse hacia delante (por ejemplo, al agacharse). Esa flexión de la columna abre un poco el canal y reduce la presión sobre la médula, por eso el dolor puede disminuir en esa posición.
                </p>
                <p className="mb-4 leading-relaxed">
                  En casos avanzados pueden aparecer:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Calambres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sensación de quemazón en la zona lumbar o en las piernas</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Estos síntomas también pueden estar presentes en otras patologías como una hernia discal, por lo que no sirven por sí solos para hacer un diagnóstico definitivo.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">Claudicación neurogénica: una señal muy típica</h3>
                <p className="mb-4 leading-relaxed">
                  Una señal muy característica de la estenosis del canal medular es lo que se llama claudicación neurogénica:
                </p>
                <p className="font-semibold mb-4 leading-relaxed">
                  Puedes caminar unos 100–200 metros, pero después necesitas sentarte porque el dolor o la pesadez en las piernas te lo impiden.
                </p>
                <p className="leading-relaxed">
                  Si te ocurre algo así de forma repetida, es una pista importante para tu médico o tu especialista.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">¿La causa es estenosis o discopatía? Diferencias clave</h3>
                <p className="mb-4 leading-relaxed">
                  Los síntomas pueden confundirse con otras patologías de columna, como una discopatía (problemas en el disco intervertebral, como hernias o protusiones). Roberto señala una diferencia orientativa:
                </p>
                <p className="mb-2 leading-relaxed">
                  <strong>En estenosis del canal medular:</strong>
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al sentarte o agacharte, el dolor mejora.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al ponerte de pie o caminar, el dolor empeora.</span>
                  </li>
                </ul>
                <p className="mb-2 leading-relaxed">
                  <strong>En discopatía:</strong>
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al sentarte, el dolor aumenta.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al moverte, suele mejorar.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Aun así, insiste en que la única forma objetiva de distinguir con seguridad una estenosis de otras patologías es a través de una resonancia magnética. Pero esto no significa que tengas que esperar a la resonancia para empezar a trabajar tu espalda: la forma de moverte y entrenar será clave en ambos casos.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">¿Cómo se diagnostica la estenosis lumbar?</h2>
                <p className="mb-4 leading-relaxed">
                  El diagnóstico no se hace solo "a ojo". Suelen combinarse varias herramientas:
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">1. Exploración clínica</h3>
                <p className="mb-2 leading-relaxed">
                  Es la valoración básica que puede hacer tu médico o especialista. Incluye:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Revisión de tus reflejos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Evaluación de la fuerza muscular en piernas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pruebas de sensibilidad (notas bien el tacto, el frío, el calor, etc.).</span>
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                  Sirve para valorar si hay compromiso neurológico y orientar el diagnóstico.
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">2. Resonancia magnética</h3>
                <p className="mb-2 leading-relaxed">
                  Es la prueba más útil para ver el grado de estrechamiento del canal y la altura exacta a la que ocurre (por ejemplo, L4-L5, L5-S1, etc.). Además permite:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ver si, además del canal medular, hay alguna raíz nerviosa comprimida.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Identificar si hay hernia, protusión, artrosis u otras alteraciones asociadas.</span>
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                  Es la prueba que confirma con más precisión la estenosis del canal medular.
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">3. Electromiograma</h3>
                <p className="mb-4 leading-relaxed">
                  En algunos casos se complementa con un electromiograma, en el que se utilizan agujas muy finas para medir la actividad eléctrica de los nervios y músculos.
                </p>
                <p className="leading-relaxed">
                  El objetivo es descartar una radiculopatía (un nervio concreto comprimido) o entender mejor si la pérdida de sensibilidad o fuerza viene de la estenosis del canal o de una compresión nerviosa localizada.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">Tratamientos habituales… y lo que falta en medio</h2>
                
                <h3 className="text-xl font-bold mb-3 text-primary">Tratamiento conservador clásico</h3>
                <p className="mb-2 leading-relaxed">
                  Lo más habitual es empezar con lo que se llama tratamiento conservador, que suele incluir:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Masajes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Terapias no invasivas como radiofrecuencias, relajaciones musculares o neuromodulación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Infiltraciones o bloqueos facetarios para intentar reducir la inflamación y el dolor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medicación para el dolor y la inflamación</span>
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                  Todo esto puede aliviar síntomas, pero no cambia necesariamente la causa de fondo: la falta de estabilidad y fuerza en la columna.
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">Cirugía descompresiva</h3>
                <p className="mb-2 leading-relaxed">
                  Cuando el dolor persiste o la compresión es muy severa, se suele valorar una cirugía descompresiva. El objetivo es retirar el tejido que invade el canal medular:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Se elimina el trozo de disco, hueso o tejido cicatricial que estrecha el canal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hoy en día se hace con técnicas mínimamente invasivas, con incisiones pequeñas en la zona lumbar.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  El problema, como señala Roberto, es que muchas veces pasamos de tratamientos pasivos (masajes, infiltraciones, medicamentos) a una cirugía, sin abordar el paso intermedio que podría marcar la diferencia: ganar fuerza, estabilidad y movilidad de forma específica.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">Tu cuerpo se está protegiendo (aunque no lo parezca)</h2>
                <p className="mb-4 leading-relaxed">
                  Un concepto muy importante del vídeo es entender que, muchas veces, lo que vemos como "problema" (hernia que cicatriza, callo óseo, tejido cicatricial) es en realidad una respuesta de protección del cuerpo.
                </p>
                <p className="mb-2 leading-relaxed">
                  Cuando un disco o una zona de la columna se daña por falta de estabilidad y fuerza, el cuerpo intenta estabilizar esa área:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Genera cicatriz.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Crea una especie de "callo" que fija la zona.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Envía sustancias al área, generando inflamación para repararla.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  El resultado puede ser que ese callo o tejido cicatricial estreche el canal medular, y ahí aparece la estenosis.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">¿Qué pasa si solo apagamos la inflamación?</h3>
                <p className="mb-2 leading-relaxed">
                  Las infiltraciones, los fármacos o ciertos procedimientos pueden:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bajar la inflamación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reducir el dolor en el corto plazo.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Pero, como explica Roberto, eso no elimina el tejido cicatricial ni corrige la inestabilidad que provocó el problema. Además, al "anular" artificialmente la inflamación, estamos interfiriendo en un proceso que el cuerpo utiliza para reparar.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">La propuesta: fuerza, estabilidad y tiempo de recuperación</h3>
                <p className="mb-2 leading-relaxed">
                  La idea es sencilla:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dejar que el cuerpo lleve a cabo sus procesos fisiológicos de reparación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A la vez, fortalecer la columna y ganar estabilidad en la zona lumbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mejorar la movilidad de otras articulaciones que están sobrecargando la zona donde se estrecha el canal.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Así, el cerebro "entiende" que la zona está más estable y segura, se reduce la necesidad de esa hiperprotección y, en muchos casos, pueden disminuir el dolor y la sensibilidad exagerada que sientes.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">3 ejercicios para estenosis lumbar sin riesgos</h2>
                <p className="mb-2 leading-relaxed">
                  Los siguientes ejercicios son una propuesta de nivel iniciación para personas con estenosis del canal lumbar. Siguen una lógica muy clara:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Movimientos suaves y controlados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mucha atención a la respiración</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Activación del abdomen para proteger la zona lumbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sin forzar rangos de movimiento dolorosos</span>
                  </li>
                </ul>

                <div className="bg-muted p-6 rounded-lg mb-6">
                  <p className="font-semibold mb-2">👉 Recomendaciones generales:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Haz la secuencia completa solo una vez al día.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>En cada ejercicio, realiza 8 repeticiones tal y como se indica.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No fuerces. Lo que tu cuerpo permita está bien al principio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Si aparece un dolor intenso o diferente al habitual, detente.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary">Ejercicio 1 – Flexión sentada abrazando cojines</h3>
                <p className="mb-4 leading-relaxed">
                  Este ejercicio aprovecha el efecto de la flexión (agacharte hacia delante), que suele aliviar la estenosis, y añade activación abdominal.
                </p>

                <h4 className="text-lg font-semibold mb-2">Material</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Una silla (o banco)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dos cojines (o una pelota algo grande, pero en el vídeo se usan cojines)</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Posición inicial</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Siéntate al filo de la silla, no al fondo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Separa las piernas para dejar un espacio entre ellas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coloca dos cojines uno sobre otro y apóyalos en tu abdomen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Abraza los cojines con ambas manos.</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Ejecución</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coge aire en la posición inicial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al soltar el aire, déjate caer suavemente hacia delante, abrazando los cojines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mientras exhalas, aprieta la barriga hacia dentro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cuando te quedes sin aire, mantente ahí un momento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Vuelve a coger aire, y al soltarlo sigue bajando un poco más, siempre sin forzar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Repite este patrón de coger aire–soltar–bajar hasta llegar a tu tope cómodo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Una repetición completa sería el recorrido desde arriba hasta tu máximo cómodo.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Haz 8 repeticiones completas.
                </p>
                <p className="leading-relaxed">
                  No busques llegar "más abajo" que nadie; lo importante es que el cuerpo se vaya soltando progresivamente con los días.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">Ejercicio 2 – Aplastar el cojín con la zona lumbar</h3>
                <p className="mb-4 leading-relaxed">
                  Aquí se trabaja la activación abdominal profunda y el control de la curva lumbar.
                </p>

                <h4 className="text-lg font-semibold mb-2">Material</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Un cojín no muy grande</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si resulta demasiado molesto, puedes usar una toalla pequeña enrollada</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Posición inicial</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Túmbate boca arriba.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coloca el cojín debajo de la zona lumbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dobla las piernas, apoyando los pies en el suelo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al tumbarte, notarás que el cojín hace que la espalda se arquee algo más de lo normal; puede resultar incómodo al principio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si es demasiado molesto, pasa a usar una toalla menos gruesa.</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Ejecución</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Desde esa posición arqueada, coge aire.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al soltar el aire, aprieta el abdomen e intenta aplastar el cojín contra el suelo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Es como hacer una retroversión de cadera, llevando la zona lumbar hacia el suelo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mantén unos instantes esa presión, con la barriga apretando hacia dentro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Relaja, vuelve a la posición inicial y repite.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Cada ciclo de coger aire–soltar–aplastar el cojín cuenta como una repetición.
                </p>
                <p className="mb-4 leading-relaxed">
                  Realiza 8 repeticiones.
                </p>
                <p className="mb-4 leading-relaxed">
                  Es normal que notes que, al coger aire, el lumbar se arquea algo más, y al soltar puedas controlar ese arco y acercar la espalda al suelo.
                </p>
                <p className="leading-relaxed">
                  Este ejercicio te enseña a controlar la posición de la zona lumbar y a activar la musculatura que la estabiliza.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-primary">Ejercicio 3 – Empuje brazos-piernas con lumbar pegado al suelo</h3>
                <p className="mb-4 leading-relaxed">
                  En este ejercicio se añade trabajo isométrico (sin movimiento) de la zona central del cuerpo, manteniendo la espalda bien protegida.
                </p>
                <p className="mb-4 leading-relaxed">
                  Es importante dominar antes el ejercicio 2 (aplastar el cojín) para poder colocar bien la espalda en este.
                </p>

                <h4 className="text-lg font-semibold mb-2">Posición inicial</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Túmbate boca arriba, esta vez sin cojín.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coloca la zona lumbar lo más pegada posible al suelo, como en la posición final del ejercicio 2.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Eleva las piernas hasta que los muslos queden perpendiculares al suelo (rodillas flexionadas a unos 90º).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coloca las manos sobre las rodillas.</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Ejecución</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coge aire en la posición inicial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Al soltar el aire: empuja con las manos contra las rodillas, y al mismo tiempo empuja con las rodillas contra las manos (fuerza en sentido contrario), aprieta la barriga hacia dentro y pega todavía más la zona lumbar al suelo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mantén esa presión de 3–4 segundos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Luego relaja, coge aire y repite.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Realiza 8 repeticiones (8 veces ese ciclo de presión + relajación).
                </p>
                <p className="leading-relaxed">
                  No se trata de empujar con máxima fuerza, sino de crear una tensión activa que active todo el núcleo abdominal mientras la zona lumbar permanece protegida contra el suelo.
                </p>
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

export default EstenosisLumbarQueEsEjercicioseguros;
