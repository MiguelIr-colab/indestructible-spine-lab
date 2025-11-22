import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HerniaDiscalL5S1 = () => {
  return (
    <>
      <Helmet>
        <title>El mejor ejercicio para la hernia discal L5-S1: fortalece tu espalda sin cirugía</title>
        <meta name="description" content="Descubre el mejor ejercicio para hernia discal L5-S1 y aprende por qué algunos estiramientos pueden empeorar tu lesión. Guía práctica y segura." />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/hernia-discal-l5-s1" />
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
                  El mejor ejercicio para la hernia discal L5-S1: fortalece tu espalda sin cirugía
                </h1>
              </header>

              <div className="aspect-video mb-8">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/OdTgNU36Dhc"
                  title="El mejor ejercicio para la hernia discal L5-S1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 5-6 minutos</span>
              </div>

              <div className="space-y-8 text-foreground">
                <p className="text-xl leading-relaxed">
                  En este video de mi canal "Espalda Indestructible", te explico cuál es realmente el mejor ejercicio para tratar una hernia discal L5-S1 sin cirugía, y por qué muchos de los estiramientos que ves en internet podrían estar empeorando tu lesión sin que lo sepas. Si quieres entender primero <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">cómo se produce una hernia discal y cómo curarla</Link>, empieza por ese artículo.
                </p>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Los ejercicios populares que debes evitar
                  </h2>
                  
                  <p className="mb-4 leading-relaxed">
                    Antes de ver qué ejercicio funciona, es importante saber <Link to="/blog/ejercicios-que-no-debo-hacer-si-tengo-hernia-discal" className="text-primary hover:underline">qué ejercicios NO debes hacer si tienes hernia discal</Link> para no agravar tu situación.
                  </p>
                  
                  <p className="leading-relaxed">
                    Comienzo mostrando los ejercicios más populares —como colgarse de una barra o usar tablas de inversión— y demuestro por qué no son seguros si tu disco intervertebral está dañado: aunque parecen aliviar temporalmente el dolor, en realidad aumentan la presión interna del disco cuando vuelves a caminar o moverte, provocando que la hernia vuelva a sobresalir.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    El ejercicio correcto: la extensión lumbar
                  </h2>

                  <p className="mb-4 leading-relaxed">
                    Después, te muestro el ejercicio correcto: una variación del movimiento conocido como "la esfinge" o extensión lumbar. Este ejercicio ayuda a descomprimir el nervio ciático y reposicionar el disco de forma natural, sin forzar tu columna.
                  </p>

                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cómo adaptarlo según el tipo de hernia que tengas (central, lateral o bilateral)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cuánto tiempo practicarlo al día para notar resultados reales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Técnica correcta paso a paso para evitar lesiones</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Importante: No existe un ejercicio milagroso
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Si llevas más de seis meses con dolor lumbar, probablemente tu problema no sea solo la hernia, sino capas de compensación muscular que tu cuerpo ha creado con el tiempo.
                  </p>
                  <p className="leading-relaxed">
                    Por eso, en mi programa Espalda Indestructible, diseño progresiones personalizadas para recuperar fuerza, estabilidad y movilidad, que son la clave para eliminar el dolor crónico de espalda.
                  </p>
                </section>

                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold">
                    💡 La herramienta más poderosa para una espalda sin dolor es la fuerza.
                  </p>
                </div>

                <section className="bg-card p-6 rounded-lg border">
                  <p className="leading-relaxed">
                    Si quieres más ejercicios específicos para la zona lumbar, consulta nuestra <Link to="/blog/ejercicios-hernia-discal-lumbar" className="text-primary hover:underline">guía completa de 7 ejercicios para hernia discal lumbar</Link>. Y si te preocupa si <Link to="/blog/entrenar-con-hernia-discal-riesgos-bien-hecho" className="text-primary hover:underline">entrenar con hernia discal es peligroso</Link>, ese artículo despejará todas tus dudas.
                  </p>
                </section>

                <div className="text-center mt-12">
                  <Button size="lg" asChild>
                    <Link to="/programa">
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
    </>
  );
};

export default HerniaDiscalL5S1;
