import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const HerniasDiscalesPorQueNoMejoras = () => {
  return (
    <>
      <Helmet>
        <title>Hernias discales: por qué no mejoras y qué hacer de verdad</title>
        <meta 
          name="description" 
          content="¿Tienes hernias discales y sigues con dolor a pesar de terapias, reposo y medicación? Descubre por qué no mejoras y qué hacer realmente según la ciencia." 
        />
        <meta 
          name="keywords" 
          content="hernias discales, hernia discal dolor crónico, por qué no mejora mi hernia discal, hernia discal y resonancia magnética, tratamiento hernia discal sin cirugía, ejercicio para hernia discal, dolor lumbar crónico por hernia, estenosis lumbar y ejercicio, terapias que no funcionan para hernia discal, fuerza para mejorar hernia discal" 
        />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernias-discales-por-que-no-mejoras" />
        
        <meta property="og:title" content="Hernias discales: por qué no mejoras y qué hacer de verdad" />
        <meta property="og:description" content="¿Tienes hernias discales y sigues con dolor a pesar de terapias, reposo y medicación? Descubre por qué no mejoras y qué hacer realmente según la ciencia." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://espaldaindestructible.com/blog/hernias-discales-por-que-no-mejoras" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hernias discales: por qué no mejoras y qué hacer de verdad" />
        <meta name="twitter:description" content="¿Tienes hernias discales y sigues con dolor a pesar de terapias, reposo y medicación? Descubre por qué no mejoras y qué hacer realmente según la ciencia." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Hernias discales: por qué no mejoras y qué hacer de verdad para reducir el dolor",
            "description": "¿Tienes hernias discales y sigues con dolor a pesar de terapias, reposo y medicación? Descubre por qué no mejoras y qué hacer realmente según la ciencia.",
            "inLanguage": "es",
            "keywords": "hernias discales, hernia discal dolor crónico, por qué no mejora mi hernia discal, tratamiento hernia discal sin cirugía",
            "author": {
              "@type": "Person",
              "name": "Roberto Galván"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://espaldaindestructible.com/blog/hernias-discales-por-que-no-mejoras"
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
                Hernias discales: por qué no mejoras y qué hacer de verdad para reducir el dolor
              </h1>
              <div className="aspect-video mb-8">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TYPMs1X_zRA"
                  title="Hernias discales: por qué no mejoras y qué hacer de verdad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 10-12 minutos</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Si llevas años con hernia discal, protusiones, estenosis o escoliosis, probando terapias, medicación y reposo sin mejorar, el problema no eres tú ni tu resonancia. El problema es el enfoque. En este artículo verás por qué las terapias habituales fallan, por qué tu resonancia magnética no explica tu dolor y cuál es el camino que la ciencia respalda: movimiento, cargas progresivas, fuerza y un programa individualizado centrado en movilidad, estabilidad y fuerza, no en la imagen de tu columna.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Aviso importante:</strong> Este artículo resume una masterclass de más de 3 horas. No sustituye una valoración profesional individual. Su objetivo es ayudarte a entender por qué sigues con dolor y qué tipo de enfoque puede marcar la diferencia.
                </p>
              </div>
            </header>

            <div className="space-y-8">
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Por qué tu resonancia magnética no tiene la última palabra</h2>
                <p className="mb-4 leading-relaxed">
                  Seguramente tu historia te suena a esto:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Te hicieron una resonancia magnética.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apareció una hernia discal, protusiones, estenosis, lisis, rectificación lumbar…</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A partir de ese informe, te recomendaron reposo, medicación, infiltraciones, quizá cirugía.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Has probado de todo… y sigues igual.</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4 leading-relaxed">
                  La base del problema está aquí: se está tomando decisiones por lo que dice la resonancia, no por cómo te mueves ni qué síntomas tienes.
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">1.1. Patología en la resonancia… sin dolor</h3>
                <p className="mb-4 leading-relaxed">
                  En la masterclass se presentan estudios con miles de personas que muestran algo muy claro:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Muchísima gente tiene degeneración discal, abombamientos, protusiones, fisuras…</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A partir de los 40–50 años, la mayoría presenta "algo" en los discos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pero lo importante: muchas de esas personas no tienen dolor.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Es decir:<br />
                  <strong>Tener una hernia o discopatía en la resonancia NO significa automáticamente dolor.</strong><br />
                  Y al revés: puedes tener dolor sin que la resonancia muestre nada grave.
                </p>
                <p className="mb-4 leading-relaxed">
                  Por eso, basar todo el tratamiento sólo en la imagen es un error. Lo que debe mandar es:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu sintomatología.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cómo te mueves.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Qué puedes y qué no puedes hacer.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-primary">1.2. La misma hernia, dos personas, dos necesidades distintas</h3>
                <p className="mb-4 leading-relaxed">
                  En el vídeo se muestra un ejemplo muy claro:
                </p>
                <p className="mb-4 leading-relaxed">
                  Dos personas tienen la misma hernia en el informe.<br />
                  En la resonancia parecen "idénticas".<br />
                  Pero al evaluar su movimiento:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Una apenas puede agacharse.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>La otra se mueve mucho mejor.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  ¿Tiene sentido hacer el mismo protocolo para ambas sólo porque su resonancia dice lo mismo?<br />
                  No.
                </p>
                <p className="leading-relaxed">
                  Por eso, tu recuperación no puede basarse en "tienes hernia en L5-S1, haz estos ejercicios" o "no te muevas porque la resonancia está muy mal", sino en cómo se mueve tu cuerpo hoy.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Por qué las terapias que has probado no te han servido</h2>
                <p className="mb-4 leading-relaxed">
                  Has pasado por:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fisioterapia tradicional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Camas de tracción.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Quiropráctico, osteopatía, masajes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ozonoterapia, infiltraciones, medicación constante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reposo, calor, "no te agaches", "no cojas peso".</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Y sigues igual. Eso no es casualidad.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">2.1. Terapias pasivas vs. entrenamiento activo</h3>
                <p className="mb-4 leading-relaxed">
                  Las terapias pasivas (te hacen algo, tú no haces esfuerzo):
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pueden darte alivio puntual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pero no te hacen más fuerte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No aumentan la estabilidad de tu columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No mejoran tu movilidad activa ni corrigen bloqueos de movimiento.</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4 leading-relaxed">
                  Si una intervención no te hace más fuerte ni más estable, es muy difícil que el cambio sea duradero.
                </p>
                <p className="mb-4 leading-relaxed">
                  Por eso pasa lo de siempre:
                </p>
                <p className="italic mb-4 leading-relaxed">
                  "Me encuentro algo mejor después del tratamiento… pero al rato, al día siguiente o a los pocos días, vuelvo a estar igual."
                </p>
                <p className="leading-relaxed">
                  El disco y la musculatura no se transforman con terapias pasivas.<br />
                  Se transforman con entrenamiento progresivo.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">2.2. El problema de la medicación y los antiinflamatorios</h3>
                <p className="mb-4 leading-relaxed">
                  En el vídeo se explica una idea clave con una metáfora muy visual:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El dolor y la inflamación son como un fuego.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El cerebro envía a los "bomberos", que es tu sistema inmune, para reparar la zona.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si tomas antiinflamatorios constantemente, "aturdes" al cerebro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El cerebro cree que no hay tanto fuego… y manda menos bomberos.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Resultado:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Te duele menos un rato.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pero reparas peor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu disco no recibe toda la ayuda que necesita para recuperarse.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  No se trata de demonizar la medicación, sino de entender que:
                </p>
                <p className="font-semibold leading-relaxed">
                  Si todo tu plan se basa en "quitar inflamación y tapar el dolor" sin fortalecer ni cargar tu columna, estás alargando el problema.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Cómo se recupera realmente un disco: cargas, movimiento y sistema inmune</h2>
                <p className="mb-4 leading-relaxed">
                  En la masterclass se repite una idea: el disco se comporta como una esponja.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cuando aplicas carga y movimiento, el disco se "exprime" y luego "absorbe" nutrientes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Para que esto funcione, tiene que haber líquido y sistema inmune activo alrededor (tus "bomberos").</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si no hay carga, ni movimiento, ni "bomberos", la esponja se queda seca.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">3.1. El disco se nutre con impacto y carga… progresiva</h3>
                <p className="mb-4 leading-relaxed">
                  Lo que muestra la evidencia presentada es que:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cuanta más carga soporta el disco de forma progresiva y controlada, mejor se nutre.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cuanto más roto está (hasta cierto punto), antes puede regenerarse si recibe las cargas adecuadas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Eso sí, siempre que no estés bloqueando el proceso con medicación constante y reposo absoluto.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Por eso, el mensaje de "no cojas peso, no te muevas, haz sólo ejercicios suaves" va en contra de cómo se nutre realmente tu disco.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">3.2. Reposo prolongado = músculos débiles, columna desprotegida</h3>
                <p className="mb-4 leading-relaxed">
                  Cuando pasas meses o años:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Evitando cargar peso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Evitando moverte "por si acaso".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Haciendo caso al "reposo absoluto".</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Lo que ocurre es:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Se atrofia la musculatura que protege tu columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Esa musculatura se infiltra de grasa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu columna queda cada vez más desprotegida.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El dolor aumenta no por la hernia en sí, sino por la falta de estabilidad y fuerza.</span>
                  </li>
                </ul>
                <p className="font-semibold leading-relaxed">
                  No es que tengas una espalda "frágil por definición".<br />
                  Es que tu espalda se vuelve frágil cuando no la usas ni la fortaleces.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. El verdadero origen del dolor: bloqueos, estabilidad y miedo al movimiento</h2>
                <p className="leading-relaxed">
                  Si no es solo la hernia, ¿de dónde viene entonces el dolor?
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">4.1. Bloqueos y falta de estabilidad, no "postura perfecta"</h3>
                <p className="mb-4 leading-relaxed">
                  Muchas veces se culpa a cosas como:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Tienes la pelvis en anteversión/retroversión."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Tienes una pierna más corta que otra."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Tu postura no es neutra."</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Pero en el vídeo se deja claro:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Has vivido toda tu vida con esa pelvis o esa longitud de piernas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Y no has tenido dolor toda tu vida.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Así que no puede ser la causa principal.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Lo que sí importa es:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si tus articulaciones se mueven donde y cuando deben.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si tu columna es capaz de estabilizarse cuando caminas, te agachas, subes escaleras, corres o coges peso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si hay bloqueos biomecánicos que hacen que ciertas zonas sufran más (por ejemplo, una vértebra concreta).</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Por eso, el primer paso del programa que se explica es:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Ganar movilidad, eliminando bloqueos articulares.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Ganar estabilidad alrededor de la columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Ponerte fuerte con cargas progresivas (fuerza, fuerza y más fuerza).</span>
                  </li>
                </ol>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">4.2. Dolor no es igual a más daño</h3>
                <p className="mb-4 leading-relaxed">
                  Otro punto clave es entender que:
                </p>
                <p className="font-semibold mb-4 leading-relaxed">
                  En un dolor crónico, más dolor no siempre significa más daño estructural.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Muchas veces, lo que hay es un sistema nervioso en "modo alarma", que grita "fuego, fuego" ante cualquier esfuerzo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Si no entrenas tu cuerpo a tolerar carga y movimiento, el cerebro seguirá interpretando que todo es peligro.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  De ahí que:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Las recaídas son parte del proceso de mejora.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Una recaída no significa que "te has roto más".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Significa que tu sistema necesita seguir adaptándose a los nuevos estímulos.</span>
                  </li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Ejercicio y hernias discales: moverte aunque duela (con lógica)</h2>
                <p className="mb-4 leading-relaxed">
                  En la masterclass se insiste en un mensaje que choca con lo que te han dicho muchas veces:
                </p>
                <p className="font-semibold mb-4 leading-relaxed">
                  "Muévete tanto como puedas, incluso aunque te duela, con una progresión adecuada."
                </p>
                <p className="leading-relaxed">
                  Un médico citado en el vídeo lo resume así:<br />
                  <em>Muchas hernias y escoliosis se operan sin justificación.<br />
                  Y medicamentos como el paracetamol, para el dolor de espalda, tienen un efecto similar al placebo.</em>
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 text-primary">5.1. No es "cualquier ejercicio", es un programa con lógica</h3>
                <p className="mb-4 leading-relaxed">
                  También se deja claro algo muy importante:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No existen "ejercicios mágicos" específicos para cada hernia concreta.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No hay "el ejercicio para la L5-S1" o "el mejor ejercicio para C5-C6".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Lo que existe es un cuerpo con bloqueos, compensaciones y falta de fuerza.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Por eso, el trabajo tiene que ser:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Individualizado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Basado en una evaluación de tu movimiento (no solo en tu informe).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Con una progresión adaptada a tus capacidades, que se vaya modificando según mejoras.</span>
                  </li>
                </ul>
                <p className="font-semibold leading-relaxed">
                  Un mismo vídeo de YouTube no puede servir por igual a 40.000 personas con historias diferentes.<br />
                  Necesitas una secuencia lógica, diseñada para ti y que vaya cambiando contigo.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. No eres un caso raro: testimonios de personas "igual que tú"</h2>
                <p className="mb-4 leading-relaxed">
                  A lo largo de la masterclass aparecen muchos casos:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personas con múltiples discopatías, varias hernias, estenosis de canal, lisis, desplazamientos vertebrales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Algunas operadas una y hasta dos veces, gastando miles de euros y sin mejora real.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personas que no podían andar más de unos metros, que se quedaban clavadas en la cama o necesitaban sentarse cada pocos segundos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gente que vivía con miedo constante: al cine, a salir a la calle, a hacer planes, a estar de pie, a la cola del supermercado.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  ¿Y qué tienen en común quienes empiezan a mejorar?
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dejan de basar su vida en lo que dice la resonancia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Empiezan un proceso de entrenamiento con evaluación, movilidad, estabilidad y fuerza progresiva.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Van perdiendo el miedo a moverse.</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Y con el tiempo, muchos llegan a decir frases como:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Ahora mismo no me duele nada."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Es el primer día en años que me levanto sin dolor."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Ya casi no me acuerdo de lo mal que estaba."</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Y algo clave:<br />
                  <strong>En muchos casos, cuando se repite la resonancia la hernia sigue ahí, pero el dolor no.</strong><br />
                  Eso demuestra otra vez que no es la imagen lo que determina tu vida, sino cómo se mueve y se fortalece tu cuerpo.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Qué necesitas de verdad si tienes hernia discal y dolor crónico</h2>
                <p className="mb-4 leading-relaxed">
                  Resumiendo todo el mensaje de la masterclass:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu dolor no depende sólo de lo que dice la resonancia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Las terapias pasivas, por sí solas, no te van a sacar del bucle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El reposo prolongado y el miedo al movimiento empeoran tu columna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu disco se nutre con cargas y movimiento progresivo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El foco real debe ser: movilidad, estabilidad y fuerza.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-primary">Lo que sí necesitas es:</h3>
                
                <h4 className="text-lg font-bold mb-2 text-foreground">Una evaluación biomecánica específica</h4>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Que detecte tus bloqueos, falta de estabilidad y puntos débiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No sólo "la hernia está aquí", sino cómo se mueve todo tu cuerpo.</span>
                  </li>
                </ul>

                <h4 className="text-lg font-bold mb-2 text-foreground">Un programa individualizado</h4>
                <p className="mb-2 leading-relaxed">Que siga esta lógica:</p>
                <ol className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Primero movilidad (quitar bloqueos).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Luego estabilidad (enseñar a tu columna a sostenerse).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Después fuerza con cargas progresivas.</span>
                  </li>
                </ol>

                <h4 className="text-lg font-bold mb-2 text-foreground">Constancia y paciencia</h4>
                <p className="mb-2 leading-relaxed">Aceptar que:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Habrá recaídas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El proceso no es lineal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu dolor puede ir bajando aunque la resonancia no cambie mucho.</span>
                  </li>
                </ul>

                <h4 className="text-lg font-bold mb-2 text-foreground">Cambiar el chip mental</h4>
                <p className="mb-2 leading-relaxed">De:</p>
                <p className="italic mb-2 leading-relaxed">"Mi hernia me condena."</p>
                <p className="mb-2 leading-relaxed">A:</p>
                <p className="font-semibold mb-6 leading-relaxed">"Mi fuerza y mi movimiento son mi principal herramienta de curación."</p>

                <p className="text-xl font-bold mb-2">
                  Como se repite al final del vídeo:
                </p>
                <p className="text-xl font-bold text-primary">
                  La herramienta más potente que existe para eliminar un dolor crónico de columna es la fuerza: fuerza, fuerza y más fuerza.
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

export default HerniasDiscalesPorQueNoMejoras;
