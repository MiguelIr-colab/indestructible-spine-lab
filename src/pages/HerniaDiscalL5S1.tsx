import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HerniaDiscalL5S1 = () => {
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
                El mejor ejercicio para la hernia discal L5-S1: fortalece tu espalda sin cirugía
              </h1>
            </header>

            <div className="mb-8 aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OdTgNU36Dhc"
                title="El mejor ejercicio para la hernia discal L5-S1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                En este video de mi canal "Espalda Indestructible", te explico cuál es realmente el mejor ejercicio para tratar una hernia discal L5-S1 sin cirugía, y por qué muchos de los estiramientos que ves en internet podrían estar empeorando tu lesión sin que lo sepas. Si quieres entender primero <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">cómo se produce una hernia discal y cómo curarla</Link>, empieza por ese artículo.
              </p>

              <h2 className="text-3xl font-bold text-card-foreground mt-12 mb-6">
                Los ejercicios populares que debes evitar
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Antes de ver qué ejercicio funciona, es importante saber <Link to="/blog/ejercicios-que-no-debo-hacer-si-tengo-hernia-discal" className="text-primary hover:underline">qué ejercicios NO debes hacer si tienes hernia discal</Link> para no agravar tu situación.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Comienzo mostrando los ejercicios más populares —como colgarse de una barra o usar tablas de inversión— y demuestro por qué no son seguros si tu disco intervertebral está dañado: aunque parecen aliviar temporalmente el dolor, en realidad aumentan la presión interna del disco cuando vuelves a caminar o moverte, provocando que la hernia vuelva a sobresalir.
              </p>

              <h2 className="text-3xl font-bold text-card-foreground mt-12 mb-6">
                El ejercicio correcto: la extensión lumbar
              </h2>

              <p className="text-muted-foreground mb-6">
                Después, te muestro el ejercicio correcto: una variación del movimiento conocido como "la esfinge" o extensión lumbar. Este ejercicio ayuda a descomprimir el nervio ciático y reposicionar el disco de forma natural, sin forzar tu columna.
              </p>

              <ul className="space-y-4 mb-8 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Cómo adaptarlo según el tipo de hernia que tengas (central, lateral o bilateral)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Cuánto tiempo practicarlo al día para notar resultados reales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Técnica correcta paso a paso para evitar lesiones</span>
                </li>
              </ul>

              <div className="bg-card border border-border rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Importante: No existe un ejercicio milagroso
                </h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Si llevas más de seis meses con dolor lumbar, probablemente tu problema no sea solo la hernia, sino capas de compensación muscular que tu cuerpo ha creado con el tiempo.
                </p>
                <p className="text-muted-foreground text-lg">
                  Por eso, en mi programa Espalda Indestructible, diseño progresiones personalizadas para recuperar fuerza, estabilidad y movilidad, que son la clave para eliminar el dolor crónico de espalda.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 my-12">
                <p className="text-lg text-card-foreground font-semibold">
                  La herramienta más poderosa para una espalda sin dolor es la fuerza. 💥
                </p>
              </div>

              <p className="text-muted-foreground mb-6">
                Si quieres más ejercicios específicos para la zona lumbar, consulta nuestra <Link to="/blog/ejercicios-hernia-discal-lumbar" className="text-primary hover:underline">guía completa de 7 ejercicios para hernia discal lumbar</Link>. Y si te preocupa si <Link to="/blog/entrenar-con-hernia-discal-riesgos-bien-hecho" className="text-primary hover:underline">entrenar con hernia discal es peligroso</Link>, ese artículo despejará todas tus dudas.
              </p>

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

export default HerniaDiscalL5S1;
