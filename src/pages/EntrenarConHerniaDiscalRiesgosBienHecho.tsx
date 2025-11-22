import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EntrenarConHerniaDiscalRiesgosBienHecho = () => {
  return (
    <>
      <Helmet>
        <title>Entrenar con hernia discal: riesgos reales, biomecánica y cómo hacerlo sin miedo</title>
        <meta 
          name="description" 
          content="Entrenar con hernia discal no es peligroso si corriges tu biomecánica y trabajas fuerza, movilidad y estabilidad en la columna. Descubre cómo entrenar sin agravar tu hernia." 
        />
        <meta 
          name="keywords" 
          content="entrenar con hernia discal, es peligroso entrenar con hernia discal, hernia de disco y ejercicio, biomecánica de la columna y hernia, compensaciones columna lumbar, dolor de espalda y entrenamiento de fuerza, ejercicios para hernia discal, terapia pasiva vs entrenamiento activo, fuerza para dolor crónico de espalda" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://espaldaindestructible.com/blog/entrenar-con-hernia-discal-riesgos-bien-hecho" />
        
        <meta property="og:title" content="Entrenar con hernia discal: riesgos reales, biomecánica y cómo hacerlo sin miedo" />
        <meta property="og:description" content="Entrenar con hernia discal no es peligroso si corriges tu biomecánica y trabajas fuerza, movilidad y estabilidad en la columna. Descubre cómo entrenar sin agravar tu hernia." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://espaldaindestructible.com/blog/entrenar-con-hernia-discal-riesgos-bien-hecho" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entrenar con hernia discal: riesgos reales, biomecánica y cómo hacerlo sin miedo" />
        <meta name="twitter:description" content="Entrenar con hernia discal no es peligroso si corriges tu biomecánica y trabajas fuerza, movilidad y estabilidad en la columna. Descubre cómo entrenar sin agravar tu hernia." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Entrenar con hernia discal: ¿es realmente peligroso o justo lo que necesitas?",
            "description": "Entrenar con hernia discal no es peligroso si corriges tu biomecánica y trabajas fuerza, movilidad y estabilidad en la columna. Descubre cómo entrenar sin agravar tu hernia.",
            "inLanguage": "es",
            "articleSection": "Salud, Columna, Entrenamiento",
            "keywords": "entrenar con hernia discal, es peligroso entrenar con hernia discal, hernia de disco y ejercicio, biomecánica de la columna y hernia",
            "author": {
              "@type": "Person",
              "name": "Roberto Galván"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://espaldaindestructible.com/blog/entrenar-con-hernia-discal-riesgos-bien-hecho"
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
                Entrenar con hernia discal: ¿es realmente peligroso o justo lo que necesitas?
              </h1>
              <div className="aspect-video mb-8">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/28oXkohSLb8"
                  title="Entrenar con hernia discal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ Tiempo de lectura: 8-10 minutos</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ¿Te han dicho que <Link to="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" className="text-primary hover:underline">entrenar con hernia discal</Link> es peligroso y que debes evitar esfuerzos, cargar peso o moverte "demasiado"? En este artículo entenderás por qué el verdadero problema no es el entrenamiento en sí, sino cómo se mueve tu columna, qué compensaciones has creado y si tu programa de ejercicio está pensado para mejorar tu biomecánica, ganar fuerza y estabilidad… o si solo estás "haciendo ejercicios sueltos" que no cambian nada de raíz.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>⚠️ Aviso importante:</strong> este artículo se basa en la explicación del vídeo original y tiene un enfoque educativo. No sustituye la valoración individual de un profesional.
                </p>
              </div>
            </header>

            <div className="space-y-8">
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">¿Es peligroso entrenar con una hernia discal?</h2>
                <p className="mb-4 leading-relaxed">
                  La frase típica que habrás escuchado es algo así como:<br />
                  <em>"Con una hernia de disco no deberías entrenar. Es peligroso. Puedes acabar peor."</em>
                </p>
                <p className="mb-2 leading-relaxed">
                  Se asocian ideas como:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Te vas a quedar en silla de ruedas."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Vas a perder fuerza en una pierna."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"La hernia se va a agravar si haces esfuerzo."</span>
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Sin embargo, el mensaje central es claro:<br />
                  <strong>entrenar no es malo por tener una hernia discal; lo peligroso es entrenar sin tener en cuenta tu biomecánica y tus compensaciones.</strong>
                </p>
                <p className="mb-2 leading-relaxed">
                  El foco no debería estar en si entrenar "sí o no", sino en:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cómo te mueves.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Qué vértebras soportan más carga.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Qué partes de tu cuerpo compensan la falta de movimiento o estabilidad de la columna.</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Ahí es donde se juega de verdad el riesgo.
                </p>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">Conclusión: ¿es peligroso entrenar con hernia discal?</h2>
                <p className="mb-4 leading-relaxed">
                  La respuesta final es:<br />
                  <strong>depende de cómo entrenes.</strong>
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">Es peligroso si:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Haces ejercicios por imitación, sin que nadie analice tu forma de moverte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No se tienen en cuenta tus compensaciones, tu movilidad ni tus rangos débiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Solo sigues "ejercicios para la hernia" que no contemplan tu biomecánica.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-primary">No solo no es peligroso, sino necesario, si:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tu programa está diseñado en base a un estudio biomecánico de tu caso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>El objetivo es quitar compensaciones, ganar movilidad donde falta y estabilidad donde no la hay.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Construyes fuerza específica para que tu columna soporte mejor el día a día.</span>
                  </li>
                </ul>

                <p className="text-lg font-semibold leading-relaxed">
                  La hernia discal no mejora por evitar para siempre el entrenamiento, sino por aprender a moverte mejor, repartir fuerzas y hacer tu columna más fuerte y estable.
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

export default EntrenarConHerniaDiscalRiesgosBienHecho;
