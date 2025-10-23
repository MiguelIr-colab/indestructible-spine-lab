import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EstenosisLumbar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Button>
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Estenosis del canal lumbar: 5 ejercicios para aliviar el dolor sin operación (guía 2025)
            </h1>

            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/8GpsHk4HV6o"
                title="Estenosis del canal lumbar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8">
                En este episodio de Espalda Indestructible te enseño cómo abordar el canal lumbar estrecho (estenosis del canal medular) con criterios claros y entrenamiento inteligente.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-card-foreground">¿Qué es la estenosis lumbar?</h2>
              <p className="mb-4">
                Primero te aclaro qué es la estenosis lumbar y por qué aparece (artrosis, espondilolistesis, discopatías, degeneración…). No todo dolor en la zona de la resonancia se debe a la estenosis: muchas veces los síntomas típicos son entumecimiento, debilidad, torpeza al andar e incluso, en casos graves, pérdida de control de esfínteres.
              </p>
              <p className="mb-4">
                Explico los 4 grados (A–D) y cuándo considerar cirugía (déficits neurológicos severos).
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-card-foreground">El mito del "deporte universal"</h2>
              <p className="mb-4">
                Desmonto el mito del "deporte universal" (por ejemplo, natación): no existe un deporte que por sí solo cure la estenosis. Si mantienes bloqueos articulares y un core inestable, cada paso o brazada puede seguir comprimiendo la zona.
              </p>
              <p className="mb-4">
                La clave no es "hacer más de lo mismo", sino restaurar la biomecánica: movilidad donde falta, estabilidad donde se pierde y fuerza para sostenerla en el tiempo.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-card-foreground">5 ejercicios para empezar hoy</h2>
              <p className="mb-4">
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

              <h2 className="text-2xl font-bold mt-8 mb-4 text-card-foreground">Personalización es clave</h2>
              <p className="mb-4">
                Insisto en que cada persona compensa distinto: dos pacientes con la misma estenosis pueden necesitar programas diferentes. Por eso, si tu dolor es crónico y ya probaste medicación y fisioterapia pasiva, mi programa Espalda Indestructible te guía con una progresión personalizada para quitar bloqueos, recuperar fuerza y dejar de depender del reposo.
              </p>

              <div className="bg-destructive/10 border-l-4 border-destructive p-4 my-6">
                <p className="text-destructive font-semibold">
                  ⚠️ Si presentas pérdida de fuerza marcada o alteraciones de esfínteres, consulta de inmediato con tu médico.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-card-foreground">Mensaje final</h2>
              <p className="mb-4">
                La herramienta más potente contra el dolor crónico de espalda es la fuerza —bien dosificada y sobre una biomecánica correcta. Da el primer paso con estos ejercicios y, si quieres que te acompañe en un plan a medida, reserva tu entrevista y hablamos sobre tu caso.
              </p>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
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

export default EstenosisLumbar;
