import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HerniaDiscal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" className="mb-8" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </Button>

            <header className="mb-8">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold mb-4">
                Hernia Discal
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                Cómo curar una hernia discal sin cirugía: guía práctica 2025
              </h1>
            </header>

            <div className="mb-8 aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8F0-ed6r8o0"
                title="Cómo curar una hernia discal sin cirugía"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                En este video descubrirás cómo curar una hernia discal de forma natural, evitando la cirugía y los tratamientos pasivos. A través de un método progresivo basado en movimiento, estabilidad y control, aprenderás a fortalecer tu columna y reducir el dolor lumbar de raíz.
              </p>

              <h2 className="text-3xl font-bold text-card-foreground mt-12 mb-6">
                El entrenamiento es la mejor medicina
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Nada de reposo eterno ni fajas que debilitan tu espalda. Aquí aprenderás a:
              </p>

              <ul className="space-y-4 mb-8 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Identificar qué movimientos evitar según tu tipo de hernia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Realizar ejercicios seguros y efectivos para estabilizar la zona lumbar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Adoptar posturas correctas al dormir y al moverte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Mejorar tu alimentación y hábitos para acelerar la recuperación.</span>
                </li>
              </ul>

              <div className="bg-card border border-border rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  El mensaje es claro
                </h3>
                <p className="text-muted-foreground text-lg">
                  Una hernia discal no tiene por qué limitar tu vida. Con constancia y la guía adecuada, puedes volver a moverte sin miedo, sin dolor y con una espalda fuerte.
                </p>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <Link to="/tienda">
                    Conoce nuestros programas
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
