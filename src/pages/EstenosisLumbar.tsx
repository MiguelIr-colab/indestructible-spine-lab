import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EstenosisLumbar = () => {
  return (
    <>
      <Helmet>
        <title>Estenosis del canal lumbar: 5 ejercicios para aliviar el dolor sin operación (guía 2025)</title>
        <meta name="description" content="Estenosis del canal lumbar: aprende qué es, sus síntomas y 5 ejercicios efectivos para aliviar el dolor sin operación." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/estenosis-lumbar" />
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
                  Estenosis del canal lumbar: 5 ejercicios para aliviar el dolor sin operación
                </h1>
              </header>

              <div className="aspect-video mb-8">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/8GpsHk4HV6o"
                  title="Estenosis del canal lumbar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 6-8 minutos</span>
              </div>

              <div className="space-y-8 text-foreground">
                <p className="text-xl leading-relaxed">
                  En este episodio de Espalda Indestructible te enseño cómo abordar el canal lumbar estrecho (estenosis del canal medular) con criterios claros y entrenamiento inteligente.
                </p>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">¿Qué es la estenosis lumbar?</h2>
                  <p className="mb-4 leading-relaxed">
                    Primero te aclaro qué es la estenosis lumbar y por qué aparece (artrosis, espondilolistesis, discopatías, degeneración…). No todo dolor en la zona de la resonancia se debe a la estenosis: muchas veces los síntomas típicos son entumecimiento, debilidad, torpeza al andar e incluso, en casos graves, pérdida de control de esfínteres. Si quieres entender en detalle <Link to="/blog/estenosis-lumbar-que-es-ejercicios-seguros" className="text-primary hover:underline">qué es la estenosis lumbar y 3 ejercicios seguros para mejorar</Link>, ese artículo te lo explica paso a paso.
                  </p>
                  <p className="leading-relaxed">
                    Explico los 4 grados (A–D) y cuándo considerar cirugía (déficits neurológicos severos).
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">El mito del "deporte universal"</h2>
                  <p className="mb-4 leading-relaxed">
                    Desmonto el mito del "deporte universal" (por ejemplo, natación): no existe un deporte que por sí solo cure la estenosis. Si mantienes bloqueos articulares y un core inestable, cada paso o brazada puede seguir comprimiendo la zona.
                  </p>
                  <p className="leading-relaxed">
                    La clave no es "hacer más de lo mismo", sino restaurar la biomecánica: movilidad donde falta, estabilidad donde se pierde y fuerza para sostenerla en el tiempo.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">5 ejercicios para empezar hoy</h2>
                  <p className="mb-4 leading-relaxed">
                    Para empezar hoy, te dejo 5 ejercicios pensados para aliviar síntomas y mejorar el control (son genéricos; lo ideal es personalizarlos tras evaluar tus bloqueos):
                  </p>

                  <ol className="list-decimal list-inside space-y-4 mb-6">
                    <li>
                      <strong>Side to Side con pelota entre las rodillas:</strong> rotación controlada manteniendo presión isométrica para estabilizar la columna.
                    </li>
                    <li>
                      <strong>Rodilla–codo con pelota:</strong> contracción isométrica de 5″ para activar core profundo sin sobrecargar la zona lumbar.
                    </li>
                    <li>
                      <strong>Retroversión con toalla bajo el lumbar:</strong> aprende a "aplanar" suavemente la zona y a controlar la pelvis.
                    </li>
                    <li>
                      <strong>Puente glúteo modificado:</strong> altura baja, caderas niveladas; progresión a una pierna para estabilidad lumbopélvica real.
                    </li>
                    <li>
                      <strong>Círculos de cadera:</strong> rodilla al pecho–abrir–cerrar para ganar movilidad específica de cadera y eliminar compensaciones.
                    </li>
                  </ol>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Personalización es clave</h2>
                  <p className="mb-4 leading-relaxed">
                    Insisto en que cada persona compensa distinto: dos pacientes con la misma estenosis pueden necesitar programas diferentes. Por eso, si tu dolor es crónico y ya probaste medicación y fisioterapia pasiva, mi programa Espalda Indestructible te guía con una progresión personalizada para quitar bloqueos, recuperar fuerza y dejar de depender del reposo. Si además tienes <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">hernia discal</Link>, te recomiendo leer <Link to="/blog/hernias-discales-por-que-no-mejoras" className="text-primary hover:underline">por qué no mejoras</Link> para entender el enfoque completo.
                  </p>
                  
                  <p className="leading-relaxed">
                    Para ejercicios más específicos de columna lumbar, consulta <Link to="/blog/ejercicios-hernia-discal-lumbar" className="text-primary hover:underline">estos 7 ejercicios para hernia discal lumbar</Link> que complementan perfectamente el trabajo de estenosis.
                  </p>
                </section>

                <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                  <p className="text-destructive font-semibold">
                    ⚠️ Si presentas pérdida de fuerza marcada o alteraciones de esfínteres, consulta de inmediato con tu médico.
                  </p>
                </div>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Mensaje final</h2>
                  <p className="leading-relaxed">
                    La herramienta más potente contra el dolor crónico de espalda es la fuerza —bien dosificada y sobre una biomecánica correcta. Da el primer paso con estos ejercicios y, si quieres que te acompañe en un plan a medida, reserva tu entrevista y hablamos sobre tu caso.
                  </p>
                </section>

                <div className="mt-12 text-center">
                  <Button size="lg" asChild>
                    <Link to="/programa">Conoce el programa</Link>
                  </Button>
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
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EstenosisLumbar;
