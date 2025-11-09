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
        <title>Hernia Discal Cervical C5-C6: Tratamiento y 7 Ejercicios para aliviar el dolor | Espalda Indestructible</title>
        <meta name="description" content="Guía completa para la hernia cervical C5–C6 con causas, tratamientos y 7 ejercicios para aliviar el dolor sin cirugía." />
        <meta name="keywords" content="hernia discal cervical C5 C6, hernia cervical tratamiento, ejercicios para hernia cervical, dolor cuello y brazo, protrusión cervical, C5 C6 ejercicios, fortalecimiento cuello, rigidez cervical, ejercicios sin cirugía" />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernia-cervical-c5-c6" />
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
                  💪 Hernia Discal Cervical C5–C6: Tratamiento y 7 Ejercicios para aliviar el dolor
                </h1>
                <p className="text-xl text-muted-foreground">
                  La hernia discal cervical C5–C6 es una de las más comunes, ya que se sitúa en un punto donde la columna soporta gran parte de la carga y movimiento. En este artículo descubrirás por qué aparece, cómo diferenciar la fase aguda de la crónica, y los tratamientos más utilizados, junto a 7 ejercicios prácticos y seguros para reducir el dolor, mejorar la movilidad y fortalecer el cuello sin necesidad de cirugía.
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
                  <h2 className="text-2xl font-bold mb-4">¿Por qué aparece la hernia discal cervical C5–C6?</h2>
                  <p className="mb-4 leading-relaxed">
                    Esta hernia ocurre en la zona que une la lordosis cervical (curva del cuello) y la cifosis dorsal (parte alta de la espalda).
                    Es un punto donde se concentran las cargas, por lo que es más propenso a lesiones.
                  </p>
                  <p className="leading-relaxed">
                    Según explica Roberto Galván, el problema no suele ser la edad ni los movimientos repetitivos, sino la falta de fuerza y movilidad en la espalda.
                    Cuando el resto de la columna no se mueve bien, todas las tensiones se concentran en el cuello, deteriorando el disco cervical hasta que se deforma o se rompe.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Síntomas más comunes</h2>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Dolor y adormecimiento en el brazo o antebrazo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pérdida de sensibilidad en el pulgar y el índice (característico de C5–C6).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>En hernias más altas, el hormigueo puede afectar el meñique o anular.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>En casos graves, debilidad al coger objetos o pérdida de fuerza en los brazos.</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold">
                      ⚠️ Si aparecen síntomas neurológicos o problemas al controlar esfínteres, consulta al médico: puede existir compresión medular.
                    </p>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Fase aguda y fase crónica: diferencias</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="leading-relaxed">
                        <strong className="text-primary">Fase aguda (primeras 6–12 semanas):</strong> dolor constante, que no mejora con posturas. En esta etapa, la medicación puede aliviar, pero no soluciona la causa.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="leading-relaxed">
                        <strong className="text-secondary">Fase crónica (más de 12 semanas):</strong> el dolor ya no se debe al disco, sino a la rigidez muscular y la debilidad. Aquí el tratamiento se centra en movilizar y fortalecer la columna.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Tratamientos más habituales</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Reposo corto:</strong> útil unos días, pero prolongarlo agrava la rigidez y el dolor.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Infiltraciones u ozonoterapia:</strong> pueden aliviar momentáneamente la presión, pero no corrigen la causa.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Descompresión axial:</strong> puede mejorar la movilidad, aunque el dolor suele volver si no hay fortalecimiento muscular.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <div>
                        <strong>Cirugía (nucleotomía, artrodesis o disco artificial):</strong> opción válida solo en casos graves; aun así, se debe entrenar el cuello después para evitar recaídas.
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Cuándo es necesaria la cirugía</h2>
                  <p className="leading-relaxed">
                    Se recomienda solo si hay signos neurológicos importantes: pérdida de fuerza, dificultad para mover brazos o piernas o alteraciones en esfínteres.
                    Un electromiograma confirmará si hay lesión nerviosa.
                    Las operaciones cervicales suelen tener buen pronóstico, pero deben ir siempre acompañadas de ejercicios de fortalecimiento.
                  </p>
                </section>

                <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                  <h2 className="text-2xl font-bold mb-2">7 Ejercicios para la hernia cervical C5–C6</h2>
                  <p className="italic text-muted-foreground mb-6">Realiza los ejercicios sin dolor. Si alguno causa molestias, detente y pasa al siguiente.</p>

                  <div className="space-y-6">
                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">1</span>
                        Respiración diafragmática en extensión torácica
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        Sentado, saca pecho ligeramente. Inhala por la nariz (4 s), mantén (3 s) y suelta el aire lentamente por la boca sin encorvarte.
                      </p>
                      <p className="text-primary font-semibold">👉 Mejora la movilidad torácica y reduce tensión cervical.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">2</span>
                        Extensiones torácicas
                      </h3>
                      <p className="mb-2 font-semibold">Tres variantes:</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>De rodillas: saca y hunde pecho (15 repeticiones).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>En cuadrupedia: separa y junta escápulas sin arquear el lumbar.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Sentado: mismo movimiento con abdomen firme.</span>
                        </li>
                      </ul>
                      <p className="text-primary font-semibold">👉 Aumenta la movilidad dorsal y disminuye carga cervical.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">3</span>
                        Cat–Camel controlado
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        Desde cuadrupedia, siéntate sobre los talones y empuja las manos hacia adelante para redondear la espalda. Luego tracciona hacia ti, saca pecho y mira al frente.
                        Hazlo 8 veces lentamente.
                      </p>
                      <p className="text-primary font-semibold">👉 Coordinación entre zona dorsal y cervical.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">4</span>
                        Esfinge con brazos en W
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        Tumbado boca abajo, levanta ligeramente el tronco y lleva los brazos hacia atrás formando una "W".
                        Mantén 30 s y repite 6 veces.
                      </p>
                      <p className="text-primary font-semibold">👉 Activa trapecio inferior, dorsal y musculatura cervical.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">5</span>
                        Isométricos cervicales con cojín
                      </h3>
                      <p className="mb-2">Apoya la cabeza en un cojín contra la pared o mueble.</p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Gira suavemente la cabeza contra la resistencia (como decir "no").</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Empuja hacia adelante o atrás sin mover el cuello.</span>
                        </li>
                      </ul>
                      <p className="mb-2">Mantén 15 s y repite 4 veces por dirección.</p>
                      <p className="text-primary font-semibold">👉 Fortalece el cuello y mejora la estabilidad.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">6</span>
                        Elevación de hombros en cuadrupedia
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        Apoya manos bajo hombros y rodillas bajo caderas.
                        Mantén la espalda recta y abdomen firme.
                        Levanta un brazo lentamente hasta dejarlo paralelo al suelo.
                        Haz 8 repeticiones por lado.
                      </p>
                      <p className="text-primary font-semibold">👉 Fortalece la musculatura escapular.</p>
                    </div>

                    <div className="bg-background p-5 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">7</span>
                        Rotaciones de columna en oposición
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        Tumbado, cruza una pierna sobre la otra.
                        Lleva las piernas y la cabeza hacia un lado y los brazos al contrario.
                        Mantén los codos extendidos y haz 8 repeticiones por lado.
                      </p>
                      <p className="text-primary font-semibold">👉 Favorece la movilidad global y equilibra la columna.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4">Conclusión: fuerza y movimiento</h2>
                  <p className="mb-4 leading-relaxed">
                    La hernia cervical C5–C6 se mejora al recuperar la movilidad torácica y fortalecer el cuello.
                    Las terapias pasivas solo alivian; el movimiento y la fuerza son el tratamiento más eficaz y duradero.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="text-lg font-bold">
                      "Fuerza, fuerza y más fuerza."
                    </p>
                    <p className="mt-2">
                      Es la herramienta más potente para eliminar cualquier tipo de dolor cervical.
                    </p>
                  </div>
                </section>

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
