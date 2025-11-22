import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaCervicalC5C6 = () => {
  return (
    <>
      <Helmet>
        <title>Hernia discal cervical C5 C6: tratamiento y 7 ejercicios explicados paso a paso | Espalda Indestructible</title>
        <meta name="description" content="Guía clara sobre hernia discal cervical C5 C6: causas reales, fases (aguda y crónica), cuándo operar y 7 ejercicios prácticos para mejorar movilidad, estabilidad y fuerza sin añadir dolor." />
        <meta name="keywords" content="hernia discal cervical C5 C6, ejercicios para hernia cervical, protusión cervical, tratamiento hernia cervical, síntomas C5 C6, fase aguda y crónica hernia cervical, isométricos cervicales, movilidad torácica, descompresión cervical, cuándo operar hernia cervical" />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernia-discal-cervical-c5-c6-tratamiento-ejercicios" />
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
                  Hernia discal cervical C5 C6: tratamiento y 7 ejercicios que sí ayudan
                </h1>
              <p className="mb-4 leading-relaxed">
                Si te han diagnosticado hernia discal cervical C5 C6 (o protusión), esta guía te explica <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">por qué aparece una hernia discal</Link>, cómo diferenciar fase aguda de crónica, cuándo valorar cirugía y 7 ejercicios que priorizan movilidad, estabilidad y fuerza para reducir el dolor y evitar recaídas.
              </p>
              </header>

              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/xCuWalw7604"
                  title="Hernia Discal Cervical C5-C6: Tratamiento y Ejercicios"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 6-8 minutos</span>
              </div>

              <div className="space-y-8 text-foreground">
                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">¿Por qué es tan común la hernia discal cervical C5 C6?</h2>
                  <p className="mb-4 leading-relaxed">
                    La zona C5–C6 coincide con un punto de inflexión entre la lordosis cervical y la cifosis dorsal. Es un lugar donde se concentran movilidad y carga, por lo que soporta más tensión y es más vulnerable.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Aunque te hayan contado que la causa es "cargar mucho la cabeza", "repetir movimientos" o "un accidente", el origen real suele ser la falta de movilidad y de fuerza en la espalda. Cuando la columna no reparte bien las cargas, todo el estrés acaba yendo siempre al mismo disco, que termina degenerándose o rompiéndose.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      💡 Idea clave: No es lo que haces muchas veces, sino cómo lo hace tu columna. Movilidad global + estabilidad + fuerza son la base.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Hernia vs. protusión: recordatorio rápido</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong>Protusión:</strong> el disco no está roto; se deforma y presiona estructuras cercanas.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong>Hernia:</strong> el disco se rompe y parte de su contenido sale y puede comprimir la médula o una raíz nerviosa.
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed">
                    En ambos casos, los síntomas dependen de dónde y cuánto comprima.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Síntomas típicos de C5 C6 (y niveles vecinos)</h2>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>En C5–C6 son frecuentes el dolor, entumecimiento y hormigueo que pueden irradiar por brazo y antebrazo, llegando a pulgar e índice.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>En niveles más altos, los síntomas son parecidos, pero puede cambiar el dedo afectado (más hacia meñique o anular) e incluso aparecer parestesias faciales.</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      ⚠️ Recuerda: el cuello forma parte de la espalda. Lo que pasa en la zona lumbar o torácica repercute en el cuello y viceversa. La columna se evalúa como un todo.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Fases: aguda vs. crónica (y qué esperar)</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-bold text-lg mb-2 text-primary">Fase aguda (≈ 6–12 semanas)</h3>
                <p className="leading-relaxed">
                  Dolor intenso y constante, difícil de aliviar con posturas. Aquí suele usarse medicación para paliar el dolor. Aun así, conviene iniciar movilidad y control específicos, para que el cerebro "entienda" que controlas la zona y deje de proteger con dolor. Para complementar esta fase, los <Link to="/blog/ejercicios-respiracion-dolor-espalda" className="text-primary hover:underline">ejercicios de respiración para el dolor de espalda</Link> pueden ser de gran ayuda.
                </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-bold text-lg mb-2 text-secondary">Fase crónica</h3>
                <p className="leading-relaxed">
                  El dolor persiste más allá del periodo agudo. Es momento de entrenar a conciencia: eliminar compensaciones, ganar movilidad, y sobre todo fuerza. La fuerza es la herramienta más potente para reducir dolor y prevenir nuevos episodios. Si llevas tiempo con dolor y no mejoras, lee <Link to="/blog/hernias-discales-por-que-no-mejoras" className="text-primary hover:underline">por qué no mejoras con hernias discales</Link>.
                </p>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Tratamientos convencionales: pros, contras y límites</h2>
                  <p className="mb-4 leading-relaxed">
                    Repasamos opciones habituales y su principal limitación: si no corriges la debilidad y las compensaciones, los síntomas vuelven.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Reposo y esperar reabsorción:</strong> puede calmar, pero no resuelve la causa.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Infiltraciones (p. ej., ozono/PRP):</strong> pueden reducir presión en fase aguda. En crónico, si la mecánica no cambia, el problema reaparece.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Descompresión axial:</strong> puede dar alivio temporal. Sin fuerza y control, el cuadro recidiva.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Nucleotomía percutánea:</strong> extrae el fragmento herniado; si la carga sigue mal repartida, puede volver el dolor.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Artrodesis (fusión):</strong> estabiliza el segmento, pero las vértebras vecinas acaban cargando más.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Prótesis de disco:</strong> preserva movilidad, pero incluso con disco artificial, necesitas fuerza y estabilidad.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      ✅ Conclusión práctica: sea cual sea la intervención, entrenar movilidad, estabilidad y fuerza del cuello y de toda la columna es ineludible.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">¿Cuándo valorar cirugía?</h2>
                  <p className="mb-4 leading-relaxed">
                    Considera cirugía si hay signos de lesión medular:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Debilidad importante en brazos o piernas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Caída de objetos por pérdida de fuerza.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Problemas de esfínteres en casos severos.</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed">
                    Una prueba como el electromiograma puede aportar evidencia para decidir. Si es necesaria, la cirugía cervical suele tener buen pronóstico y menor riesgo que en lumbar por el abordaje, pero siempre habrá que fortalecer después.
                  </p>
                </section>

                <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                  <h2 className="text-2xl font-bold mb-2">7 ejercicios para hernia discal cervical C5 C6</h2>
                  <div className="mb-6 bg-background p-4 rounded border-l-4 border-primary">
                    <p className="font-semibold">⚠️ Normas de oro antes de empezar:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No todos los ejercicios le sientan igual a todo el mundo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Si alguno aumenta el dolor, elimínalo y pasa al siguiente.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Avanza poco a poco, sin dolor y con técnica.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>La prioridad es control, movilidad torácica y fuerza isométrica cervical.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">1</span>
                        Respiración diafragmática en extensión torácica
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Mejorar movilidad torácica y la posición del diafragma, reduciendo la proyección anterior de la cabeza.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Siéntate con rodillas flexionadas y codos estirados.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Realiza una extensión torácica ("saca pecho") sin arquear el lumbar.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Inhala 4 s por la nariz, mantén 3 s, y exhala lento por la boca.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mantén el tronco extendido durante todo el ciclo.</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 No colapses el tronco al exhalar; la extensión torácica es constante.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">2</span>
                        Extensiones torácicas (3 variantes)
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Ganar movilidad torácica y control escapular.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold mb-2">Variante A (arrodillado sobre talones):</p>
                          <p className="leading-relaxed">
                            Saca pecho y lleva hombros atrás (cabeza neutra). Luego invierte: hunde pecho y hombros adelante. → 15 repeticiones.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Variante B (cuadrupedia, "empuje de escápulas"):</p>
                          <p className="leading-relaxed">
                            Con codos bloqueados, alterna entre separar escápulas (saca "chepa") y acercarlas (dejar caer el pecho). Evita mover el lumbar. → 15 repeticiones.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Variante C (sentado al filo de la silla):</p>
                          <p className="leading-relaxed">
                            Espalda recta, abdomen activo. Alterna sacar y hundir pecho sin perder posición lumbar. → 15 repeticiones.
                          </p>
                        </div>
                      </div>
                      <p className="text-primary font-semibold mt-3">👉 Errores comunes: doblar codos, arquear el lumbar, perder cabeza neutra.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">3</span>
                        Cat–Camel adaptado con énfasis dorsal
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Disociar dorsal y cervical, evitando compensaciones.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>En cuadrupedia, siéntate sobre talones.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Fase A: empuja el suelo hacia delante con las manos para separar escápulas y sacar joroba dorsal.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Fase B: tracciona las manos hacia ti, baja hombros, saca pecho y mira al frente.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Realiza 8 repeticiones lentas (A + B = 1).</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 Movimiento lento, sentir la apertura escapular y el control torácico.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">4</span>
                        Esfinge con brazos en W (isométrico posterior)
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Activar cadena posterior (dorsales, trapecio inferior, retractores escapulares).
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Decúbito prono (boca abajo). Frente apoyada.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Eleva ligeramente el tronco sin perder apoyo de la cabeza.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Eleva brazos y llévalos atrás formando una W.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Junta escápulas (énfasis en vértices inferiores).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mantén 30 s, relaja y repite 6 series.</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 Trabajo en parte posterior del hombro y dorsales; tórax en extensión.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">5</span>
                        Isométricos cervicales en 4 planos (con cojín)
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Mejorar estabilidad y desinflamar mediante contracciones sin movimiento.
                      </p>
                      <p className="mb-2 font-semibold">Material: cojín y una columna o mueble firme.</p>
                      <div className="space-y-3 mb-3">
                        <div>
                          <p className="font-semibold mb-1">Rotación derecha/izquierda:</p>
                          <p className="leading-relaxed">
                            Apoya la sien en el cojín contra la columna. Intenta decir que NO contra la resistencia, sin que la cabeza gire. → 15 s x 4 series por lado.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Extensión isométrica (hacia atrás):</p>
                          <p className="leading-relaxed">
                            Cojín en la parte posterior de la cabeza. Pegado a la columna, intenta empujar atrás (eje en primeras vértebras), sin llevar barbilla al pecho. → 15 s x 4 series.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Flexión isométrica (hacia delante):</p>
                          <p className="leading-relaxed">
                            Cojín en la frente. Intenta decir que SÍ llevando barbilla abajo (no atrás). → 15 s x 4 series.
                          </p>
                        </div>
                      </div>
                      <p className="text-primary font-semibold">👉 Mantén hombros relajados, cabeza neutra y evita compensaciones.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">6</span>
                        Flexiones de hombros en cuadrupedia (sin compensar)
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Integrar control escapular con estabilidad lumbo-pélvica.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>En cuadrupedia, manos bajo hombros, rodillas bajo caderas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Coloca la pelvis en retroversión, abdomen activo y espalda plana.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Enraíza la mano de apoyo (empuja el suelo).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Eleva un brazo lento hasta quedar paralelo al suelo, sin girar el tronco ni doblar codo.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Baja controlando. 8 repeticiones por lado.</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 Errores comunes: colapsar el tronco al elevar el brazo, flexionar el codo, perder alineación.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">7</span>
                        Rotaciones de columna en direcciones contrarias
                      </h3>
                      <p className="mb-2 font-semibold">Objetivo:</p>
                      <p className="mb-3 leading-relaxed">
                        Mejorar la rotación torácica y la coordinación entre curvas.
                      </p>
                      <p className="mb-2 font-semibold">Cómo hacerlo:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Tumbado de lado, pierna superior sobre la inferior.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Brazos entrelazados y extendidos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Lleva rodillas y cabeza hacia el mismo lado de la pierna elevada, y los brazos al lado contrario.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Vuelve al centro lento.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>8 repeticiones al mismo lado y cambia.</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 Codos extendidos, movimientos lentos, buscar apertura progresiva sin dolor.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Cómo progresar de forma segura</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <div>
                        <strong>Sin dolor:</strong> los ejercicios no deben aumentar el dolor. Si uno molesta, descártalo.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <div>
                        <strong>Pocos pero bien:</strong> prioriza técnica y control antes que cantidad.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <div>
                        <strong>Consistencia:</strong> practica a diario en fase inicial.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <div>
                        <strong>Progresión:</strong> aumenta gradualmente tiempos isométricos y repeticiones.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <div>
                        <strong>Globalidad:</strong> no entrenes solo el cuello; trabaja toda la columna (torácica y lumbar) para repartir cargas.
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Lo que de verdad cambia el pronóstico</h2>
                  <p className="mb-4 leading-relaxed">
                    La fuerza. Es el mensaje central: fuerza, fuerza y más fuerza. El cuerpo se adapta cuando recibe el estímulo adecuado. Si mueves mejor (movilidad), controlas mejor (estabilidad) y soportas más (fuerza), disminuye la presión sobre el disco y mejora la calidad de vida del cuello.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="text-lg font-bold">
                      "Fuerza, fuerza y más fuerza."
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Preguntas rápidas</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">¿Puedo curarme solo con reposo?</h3>
                      <p className="leading-relaxed">Puede aliviar en agudo, pero si no cambias la mecánica, los síntomas reaparecerán.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">¿Las infiltraciones me valen en crónico?</h3>
                      <p className="leading-relaxed">Pueden ayudar en agudo. En crónico, sin reeducación de la carga, el efecto suele ser temporal.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">¿Y si me opero?</h3>
                      <p className="leading-relaxed">Si hay daño neurológico, valora cirugía con tu equipo. Aun así, entrenar movilidad, control y fuerza será obligatorio para no recaer.</p>
                    </div>
                  </div>
                </section>

                <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary">
                  <p className="text-sm italic text-muted-foreground">
                    ⚠️ Nota final: esta guía no sustituye valoración clínica. Úsala para entrenar mejor, con progresión y sin dolor, recordando que la clave es movilidad + estabilidad + fuerza en toda tu columna.
                  </p>
                </div>

                <div className="mt-12 p-6 bg-primary/10 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">¿Quieres recuperar la fuerza en tu cuello?</h3>
                  <p className="mb-4">
                    Accede a nuestro programa completo de ejercicios personalizados para fortalecer tu columna cervical de forma segura y progresiva.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/tienda">Ver programas</Link>
                  </Button>
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

export default HerniaCervicalC5C6;
