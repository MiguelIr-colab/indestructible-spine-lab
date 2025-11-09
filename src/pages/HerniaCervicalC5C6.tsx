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
      
      <div className="min-h-screen bg-[hsl(var(--light-gray))]">
        <Header />
        <main className="pt-20">
          <article className="py-20 bg-[hsl(var(--light-gray))]">
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

              <div className="aspect-video mb-8">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/xCuWalw7604"
                  title="Hernia Discal Cervical C5-C6: Tratamiento y Ejercicios"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>¿Por qué aparece la hernia discal cervical C5–C6?</h2>
                <p>
                  Esta hernia ocurre en la zona que une la lordosis cervical (curva del cuello) y la cifosis dorsal (parte alta de la espalda).
                  Es un punto donde se concentran las cargas, por lo que es más propenso a lesiones.
                </p>
                <p>
                  Según explica Roberto Galván, el problema no suele ser la edad ni los movimientos repetitivos, sino la falta de fuerza y movilidad en la espalda.
                  Cuando el resto de la columna no se mueve bien, todas las tensiones se concentran en el cuello, deteriorando el disco cervical hasta que se deforma o se rompe.
                </p>

                <h2>Síntomas más comunes</h2>
                <ul>
                  <li>Dolor y adormecimiento en el brazo o antebrazo.</li>
                  <li>Pérdida de sensibilidad en el pulgar y el índice (característico de C5–C6).</li>
                  <li>En hernias más altas, el hormigueo puede afectar el meñique o anular.</li>
                  <li>En casos graves, debilidad al coger objetos o pérdida de fuerza en los brazos.</li>
                </ul>
                <p>
                  <strong>Si aparecen síntomas neurológicos o problemas al controlar esfínteres, consulta al médico: puede existir compresión medular.</strong>
                </p>

                <h2>Fase aguda y fase crónica: diferencias</h2>
                <p>
                  <strong>Fase aguda (primeras 6–12 semanas):</strong> dolor constante, que no mejora con posturas. En esta etapa, la medicación puede aliviar, pero no soluciona la causa.
                </p>
                <p>
                  <strong>Fase crónica (más de 12 semanas):</strong> el dolor ya no se debe al disco, sino a la rigidez muscular y la debilidad. Aquí el tratamiento se centra en movilizar y fortalecer la columna.
                </p>

                <h2>Tratamientos más habituales</h2>
                <ul>
                  <li><strong>Reposo corto:</strong> útil unos días, pero prolongarlo agrava la rigidez y el dolor.</li>
                  <li><strong>Infiltraciones u ozonoterapia:</strong> pueden aliviar momentáneamente la presión, pero no corrigen la causa.</li>
                  <li><strong>Descompresión axial:</strong> puede mejorar la movilidad, aunque el dolor suele volver si no hay fortalecimiento muscular.</li>
                  <li><strong>Cirugía (nucleotomía, artrodesis o disco artificial):</strong> opción válida solo en casos graves; aun así, se debe entrenar el cuello después para evitar recaídas.</li>
                </ul>

                <h2>Cuándo es necesaria la cirugía</h2>
                <p>
                  Se recomienda solo si hay signos neurológicos importantes: pérdida de fuerza, dificultad para mover brazos o piernas o alteraciones en esfínteres.
                  Un electromiograma confirmará si hay lesión nerviosa.
                  Las operaciones cervicales suelen tener buen pronóstico, pero deben ir siempre acompañadas de ejercicios de fortalecimiento.
                </p>

                <h2>7 Ejercicios para la hernia cervical C5–C6</h2>
                <p><em>Realiza los ejercicios sin dolor. Si alguno causa molestias, detente y pasa al siguiente.</em></p>

                <h3>1. Respiración diafragmática en extensión torácica</h3>
                <p>
                  Sentado, saca pecho ligeramente. Inhala por la nariz (4 s), mantén (3 s) y suelta el aire lentamente por la boca sin encorvarte.
                </p>
                <p>👉 Mejora la movilidad torácica y reduce tensión cervical.</p>

                <h3>2. Extensiones torácicas</h3>
                <p>Tres variantes:</p>
                <ul>
                  <li>De rodillas: saca y hunde pecho (15 repeticiones).</li>
                  <li>En cuadrupedia: separa y junta escápulas sin arquear el lumbar.</li>
                  <li>Sentado: mismo movimiento con abdomen firme.</li>
                </ul>
                <p>👉 Aumenta la movilidad dorsal y disminuye carga cervical.</p>

                <h3>3. Cat–Camel controlado</h3>
                <p>
                  Desde cuadrupedia, siéntate sobre los talones y empuja las manos hacia adelante para redondear la espalda. Luego tracciona hacia ti, saca pecho y mira al frente.
                  Hazlo 8 veces lentamente.
                </p>
                <p>👉 Coordinación entre zona dorsal y cervical.</p>

                <h3>4. Esfinge con brazos en W</h3>
                <p>
                  Tumbado boca abajo, levanta ligeramente el tronco y lleva los brazos hacia atrás formando una "W".
                  Mantén 30 s y repite 6 veces.
                </p>
                <p>👉 Activa trapecio inferior, dorsal y musculatura cervical.</p>

                <h3>5. Isométricos cervicales con cojín</h3>
                <p>
                  Apoya la cabeza en un cojín contra la pared o mueble.
                </p>
                <ul>
                  <li>Gira suavemente la cabeza contra la resistencia (como decir "no").</li>
                  <li>Empuja hacia adelante o atrás sin mover el cuello.</li>
                </ul>
                <p>
                  Mantén 15 s y repite 4 veces por dirección.
                </p>
                <p>👉 Fortalece el cuello y mejora la estabilidad.</p>

                <h3>6. Elevación de hombros en cuadrupedia</h3>
                <p>
                  Apoya manos bajo hombros y rodillas bajo caderas.
                  Mantén la espalda recta y abdomen firme.
                  Levanta un brazo lentamente hasta dejarlo paralelo al suelo.
                  Haz 8 repeticiones por lado.
                </p>
                <p>👉 Fortalece la musculatura escapular.</p>

                <h3>7. Rotaciones de columna en oposición</h3>
                <p>
                  Tumbado, cruza una pierna sobre la otra.
                  Lleva las piernas y la cabeza hacia un lado y los brazos al contrario.
                  Mantén los codos extendidos y haz 8 repeticiones por lado.
                </p>
                <p>👉 Favorece la movilidad global y equilibra la columna.</p>

                <h2>Conclusión: fuerza y movimiento</h2>
                <p>
                  La hernia cervical C5–C6 se mejora al recuperar la movilidad torácica y fortalecer el cuello.
                  Las terapias pasivas solo alivian; el movimiento y la fuerza son el tratamiento más eficaz y duradero.
                </p>
                <p>
                  <strong>"Fuerza, fuerza y más fuerza."</strong><br />
                  Es la herramienta más potente para eliminar cualquier tipo de dolor cervical.
                </p>

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
