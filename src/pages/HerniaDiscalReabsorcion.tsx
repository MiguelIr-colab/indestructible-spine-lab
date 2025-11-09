import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscalReabsorcion = () => {
  return (
    <>
      <Helmet>
        <title>Hernia discal se reabsorbe sin cirugía: guía práctica, ejercicios y errores a evitar | Espalda Indestructible</title>
        <meta name="description" content="Hernia discal se reabsorbe sin cirugía. Descubre por qué ocurre, en qué casos operar, los 7 factores clave de recuperación, 5 errores comunes y 3 ejercicios iniciales para empezar sin riesgos." />
        <meta name="keywords" content="hernia discal se reabsorbe, reabsorción hernia discal, hernia discal sin cirugía, ejercicios hernia discal, protrusión discal, control motor columna, propiocepción lumbar, impactos en discos, resonancia magnética y dolor, operación hernia discal, dolor ciático, estudio biomecánico, entrenamiento de fuerza columna" />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernia-discal-se-reabsorbe-sin-cirugia" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <article className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <Button variant="ghost" asChild className="mb-8">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al blog
                </Link>
              </Button>

              <header className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  Hernia discal se reabsorbe sin cirugía: descubre la verdad y cómo empezar bien
                </h1>
                <p className="text-xl text-muted-foreground">
                  Sí, una hernia discal se puede reabsorber sin cirugía. En esta guía clara y práctica entenderás por qué pasa, en qué casos sí operar, los factores que aceleran tu recuperación, los errores que frenan tu progreso y 3 ejercicios iniciales para empezar con seguridad.
                </p>
              </header>

              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/hioB8jHImko"
                  title="Hernia Discal se Reabsorbe sin Cirugía"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 8-10 minutos</span>
              </div>

              <div className="space-y-8 text-foreground">
                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">¿La hernia discal se reabsorbe sola?</h2>
                  <p className="mb-4 leading-relaxed">
                    La respuesta corta es <strong>sí</strong>. Tu cuerpo tiene mecanismos para eliminar la parte del disco que salió. Eso es lo que significa reabsorber: el organismo reconoce tejido fuera de lugar y lo degrada y elimina con el tiempo.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      ⚠️ Importante: reabsorber no es "meter el disco de nuevo" ni "rejuvenecerlo". El disco se nutre y gana densidad con estímulos adecuados, pero no "vuelve atrás en el tiempo". Aun así, puedes recuperar movilidad, fuerza y vida normal.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Hernia, protrusión… ¿es lo mismo?</h2>
                  <p className="mb-4 leading-relaxed">
                    Sí. "Hernia" es el nombre, y "protrusión, extrusión…" son apellidos. No te bloquees por la etiqueta. El enfoque es el mismo.
                  </p>
                  <h3 className="text-xl font-semibold mb-3">¿Si tengo dolor, la causa es la hernia?</h3>
                  <p className="leading-relaxed">
                    No siempre. Hay personas con hernia sin dolor y otras con dolor sin hallazgos en la resonancia. Dolor y hallazgo estructural no equivalen 1:1. El objetivo no es "que la resonancia salga bonita", sino que el dolor baje y que te muevas mejor.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Por qué el cuerpo reabsorbe una hernia</h2>
                  <p className="mb-4 leading-relaxed">
                    Piensa en un cuerpo extraño en la piel: el cuerpo lo expulsa. Con la hernia, ocurre algo similar. El material del disco fuera de su sitio puede generar presión e irritación y el cuerpo activa sistemas de defensa que reducen y eliminan ese material con el tiempo.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      💡 Lo clave: hay estudios que muestran que, entre 4 meses y 1 año, una hernia puede no estar presente en resonancias posteriores. Pero lo importante no es la imagen, sino tu función y dolor.
                    </p>
                  </div>
                </section>

                <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                  <h2 className="text-2xl font-bold mb-6">7 factores que aceleran la recuperación de una hernia discal</h2>
                  
                  <div className="space-y-5">
                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">1</span>
                        Moverte aunque haya dolor
                      </h3>
                      <p className="leading-relaxed">
                        El reposo prolongado empeora. El momento de más dolor no pide inmovilidad, sino movimiento inteligente y progresivo. El miedo a moverte alimenta el problema.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">2</span>
                        Tamaño de la hernia
                      </h3>
                      <p className="leading-relaxed">
                        Cuanto más grande, más capacidad de reabsorción suele haber y en menos tiempo. Paradójico, pero real.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">3</span>
                        Aplicar impactos (progresivos)
                      </h3>
                      <p className="leading-relaxed">
                        Los discos no "rejuvenecen", se nutren. Los impactos controlados ayudan a esa nutrición y aumentan la densidad del tejido. No empiezas saltando desde alto, pero sí apuntas a tolerar impactos a medio y largo plazo para reducir recidivas.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">4</span>
                        Evitar medicación que frene la recuperación
                      </h3>
                      <p className="leading-relaxed">
                        La medicación puede aliviar puntualmente, pero no corrige la causa. Y ciertos fármacos pueden entorpecer el proceso del disco. Habla con tu médico para ajustar el plan y no depender de paliativos.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">5</span>
                        Desarrollar la propiocepción y el control motor
                      </h3>
                      <p className="leading-relaxed">
                        Debes aprender a activar la musculatura profunda cerca del área afectada (cervical, dorsal o lumbar). Sin feedback externo: que tú sientas y controles. Sin esto, el cuerpo se mueve en bloque y compensa, cargando siempre el mismo punto.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">6</span>
                        Progresiones de dificultad
                      </h3>
                      <p className="leading-relaxed">
                        El cuerpo se adapta en ~21 días. Si repites siempre lo mismo, te estancas. Aumenta gradualmente la dificultad, los rangos y las cargas.
                      </p>
                    </div>

                    <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">7</span>
                        Fuerza como herramienta central
                      </h3>
                      <p className="leading-relaxed">
                        La fuerza es la herramienta más potente para un dolor crónico. Pero antes: estudio biomecánico → propiocepción → movilidad → fuerza. En ese orden.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-6">5 errores que frenan tu recuperación</h2>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-xl">❌</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Error 1: Reposo prolongado</h3>
                        <p className="leading-relaxed">
                          Cada 2 semanas sin entrenar, pierdes fuerza. Debilitas las estructuras que protegen la médula. Moverse, incluso con dolor, es parte del tratamiento.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-xl">❌</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Error 2: Evitar movimientos "por si empeora"</h3>
                        <p className="leading-relaxed">
                          Limitarte por miedo te hace más rígido. Cuando tengas que agacharte o girar sí o sí, estarás menos preparado y dolerá más. Hay que repartir cargas: que todas las vértebras trabajen, no siempre el mismo disco.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-xl">❌</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Error 3: No levantar peso</h3>
                        <p className="leading-relaxed">
                          1–2 kg no es fuerza. Para adaptarte, necesitas estímulos por encima de lo que ya toleras. Levantar peso bien no agrava la hernia; llegar desentrenado a un esfuerzo inesperado, sí.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-xl">❌</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Error 4: Buscar otra resonancia "a ver si ya se curó"</h3>
                        <p className="leading-relaxed">
                          La resonancia sirve para planificar una cirugía. Si no vas a operarte, una nueva imagen no guía tu recuperación y puede aumentar el catastrofismo. El cerebro cree lo que le repites.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-xl">❌</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Error 5: Depender de terapias pasivas</h3>
                        <p className="leading-relaxed">
                          Masajes, calor, fajas, infiltraciones… no estabilizan tu columna ni mejoran control motor. No corrigen la causa. Pueden ayudar a pasar un bache, pero no sustituyen el trabajo activo.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">¿Cuándo sí es necesaria una cirugía?</h2>
                  <p className="mb-4 leading-relaxed font-semibold">
                    Solo en dos casos:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Pérdida de fuerza objetiva</strong> (no puedes levantar la pierna/brazo, sostenerte de pie, o se cae la fuerza).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Incontinencia / síndrome de la cola de caballo.</strong></span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      ⚠️ Son situaciones excepcionales y evidentes. Si estás aquí leyendo, probablemente no estás en ese caso. Aun si te operas, no garantiza que el dolor desaparezca y, en cualquier escenario, tendrás que entrenar después.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Lo que sí funciona: hoja de ruta práctica</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-bold text-lg mb-2">1) Estudio biomecánico</h3>
                      <p className="leading-relaxed">
                        Detecta compensaciones y carencias. No solo en el punto de dolor. Observa patrones globales: cómo te agachas, giras, cargas, respiras.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-bold text-lg mb-2">2) Optimizar la propiocepción</h3>
                      <p className="leading-relaxed">
                        Aprende a activar musculatura profunda sin mirar, sin que te toquen. Control interno real. Esto estabiliza y reduce compensaciones.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-bold text-lg mb-2">3) Ganar movilidad con fuerza</h3>
                      <p className="leading-relaxed">
                        No solo estirar pasivo. Logra rangos funcionales llevando el segmento con tu propia fuerza. Así sostienes la movilidad.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-bold text-lg mb-2">4) Entrenamiento de fuerza</h3>
                      <p className="leading-relaxed">
                        Cuando hayas ganado control y movilidad, progresa la fuerza en todas las cadenas. Cargas reales y bien dosificadas. La fuerza protege.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                  <h2 className="text-2xl font-bold mb-2">3 ejercicios iniciales (nivel iniciación, sin riesgo)</h2>
                  <div className="mb-6 bg-background p-4 rounded border-l-4 border-primary">
                    <p className="font-semibold">⚠️ Indicaciones:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Hazlos una vez al día</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ocho repeticiones por lado cuando aplique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Movimiento lento, columna erguida, sin compensaciones</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">1</span>
                        Rotación en bloque sentado
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Trabajar control motor y rotación global sin compensar con cuello ni caderas.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Siéntate en el filo del sofá, piernas a 90°.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Presiona mano contra mano, brazos extendidos al frente.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Con la nariz apuntando a los dedos, gira en bloque sin adelantar la cabeza.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Activa abdomen. Para cuando el abdomen limita.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Vuelve despacio al centro.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>8 repeticiones por lado.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">2</span>
                        Rotación interna de cadera controlada
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Mejorar movilidad de cadera con estabilidad troncal, clave para repartir cargas en la columna.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>En el filo del sofá, rodillas perpendiculares al suelo, pies un poco abiertos (~45° respecto al centro).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Sin mover el tronco, lleva una rodilla hacia dentro lo más que puedas sin girar el cuerpo.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Vuelve al centro.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>8 repeticiones con una pierna y luego 8 con la otra.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">3</span>
                        Presión lateral isométrica
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Estabilidad lateral y activación profunda sin dolor.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Siéntate de forma que alcances el brazo del sofá con una mano.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Hombro abajo (activa el lateral del tronco).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Empuja hacia abajo el brazo del sofá con el cuerpo (no solo con el brazo), sin flexionar el tronco.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Apreta abdomen, dorsales, serrato.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>8 repeticiones de 5 segundos por lado.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Miedos comunes… y realidades</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">💭</span>
                      <div>
                        <p className="mb-1"><strong>"Si me muevo, empeora."</strong></p>
                        <p className="leading-relaxed text-muted-foreground">No. Moverse bien reduce dolor y acelera la reabsorción.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💭</span>
                      <div>
                        <p className="mb-1"><strong>"Sin medicación no aguanto."</strong></p>
                        <p className="leading-relaxed text-muted-foreground">Ajusta con tu médico, pero recuerda: la medicación no cura, solo aplaca.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💭</span>
                      <div>
                        <p className="mb-1"><strong>"Levantar peso es peligroso."</strong></p>
                        <p className="leading-relaxed text-muted-foreground">Lo peligroso es estar desentrenado cuando la vida te exige un esfuerzo.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💭</span>
                      <div>
                        <p className="mb-1"><strong>"Necesito otra resonancia."</strong></p>
                        <p className="leading-relaxed text-muted-foreground">Si no vas a operarte, prioriza evaluación y entrenamiento, no imagen.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-primary/10 p-6 rounded-lg border-2 border-primary">
                  <h2 className="text-2xl font-bold mb-4">Conclusiones clave</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Sí, una hernia discal puede reabsorberse.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>El tamaño no condena; a veces ayuda a reabsorber antes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>La fuerza, la propiocepción y los impactos progresivos son claves.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Evita reposo prolongado, miedo al movimiento, cargas ridículas, imagen por ansiedad y terapias pasivas como única estrategia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>La operación solo tiene sentido ante pérdida de fuerza o incontinencia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Plan: estudio biomecánico → propiocepción → movilidad con fuerza → fuerza global.</span>
                    </li>
                  </ul>
                </section>

                <div className="bg-muted/50 p-6 rounded-lg border text-sm text-muted-foreground">
                  <p className="font-semibold mb-2">⚠️ Nota importante:</p>
                  <p>
                    Esta guía no sustituye valoración clínica. Úsala para entrenar mejor, con progresión y sin dolor, recordando que la clave es movilidad + estabilidad + fuerza en toda tu columna.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HerniaDiscalReabsorcion;
