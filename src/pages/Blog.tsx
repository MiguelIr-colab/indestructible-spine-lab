import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "💪 El mejor antiinflamatorio para la hernia discal: la clave no está en las pastillas, sino en el movimiento",
      excerpt: "Si sufres una hernia discal y estás buscando el mejor antiinflamatorio para aliviar el dolor, puede que te sorprenda saber que la verdadera solución no está en los medicamentos, sino en fortalecer tu columna.",
      videoUrl: "https://www.youtube.com/watch?v=bAR3UDwmh9g",
      thumbnail: "https://img.youtube.com/vi/bAR3UDwmh9g/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/antiinflamatorio-hernia-discal",
    },
    {
      title: "💪 Cómo curar una hernia discal sin cirugía: guía completa paso a paso",
      excerpt: "Aprende cómo curar una hernia discal sin cirugía centrándote en lo que realmente marca la diferencia: estabilidad de la columna, entrenamiento específico, posturas correctas para dormir, alimentación adecuada y un cambio de mentalidad.",
      videoUrl: "https://www.youtube.com/watch?v=8F0-ed6r8o0",
      thumbnail: "https://img.youtube.com/vi/8F0-ed6r8o0/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/como-curar-hernia-discal-sin-cirugia",
    },
    {
      title: "El mejor ejercicio para la hernia discal L5-S1: fortalece tu espalda sin cirugía",
      excerpt: "¿Sufres de dolor lumbar por una hernia discal L5-S1? En este video te enseño el ejercicio más eficaz y seguro para aliviar el dolor, reducir la presión sobre tus vértebras y recuperar movilidad sin pasar por quirófano. Descubre cómo evitar los movimientos que empeoran tu hernia y aprende la técnica correcta paso a paso.",
      videoUrl: "https://www.youtube.com/watch?v=OdTgNU36Dhc",
      thumbnail: "https://img.youtube.com/vi/OdTgNU36Dhc/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/hernia-discal-l5-s1",
    },
    {
      title: "Estenosis del canal lumbar: 5 ejercicios para aliviar el dolor sin operación (guía 2025)",
      excerpt: "En este vídeo te explico, paso a paso, qué es la estenosis del canal lumbar, por qué puede dar entumecimiento, debilidad y dificultad para caminar, y cuándo se valora la cirugía. Lo mejor: te enseño 5 ejercicios prácticos para empezar hoy mismo a reducir síntomas, ganar estabilidad y recuperar movilidad.",
      videoUrl: "https://www.youtube.com/watch?v=8GpsHk4HV6o",
      thumbnail: "https://img.youtube.com/vi/8GpsHk4HV6o/maxresdefault.jpg",
      category: "Estenosis",
      articleUrl: "/blog/estenosis-lumbar",
    },
    {
      title: "💪 Hernia Discal Cervical C5–C6: Tratamiento y 7 Ejercicios para aliviar el dolor",
      excerpt: "La hernia discal cervical C5–C6 es una de las más comunes, ya que se sitúa en un punto donde la columna soporta gran parte de la carga y movimiento. En este artículo descubrirás por qué aparece, cómo diferenciar la fase aguda de la crónica, y los tratamientos más utilizados, junto a 7 ejercicios prácticos y seguros para reducir el dolor, mejorar la movilidad y fortalecer el cuello sin necesidad de cirugía.",
      videoUrl: "https://www.youtube.com/watch?v=xCuWalw7604",
      thumbnail: "https://img.youtube.com/vi/xCuWalw7604/maxresdefault.jpg",
      category: "Hernia Cervical",
      articleUrl: "/blog/hernia-cervical-c5-c6",
    },
    {
      title: "💪 ¿Una hernia discal se puede reabsorber sola sin cirugía? La respuesta completa",
      excerpt: "Sí, una hernia discal se puede reabsorber sola sin cirugía, pero no es cuestión de suerte ni de tumbarse en el sofá a esperar. Descubre qué es realmente una hernia, por qué puede desaparecer en las resonancias, qué factores aceleran o frenan la recuperación y qué cambios concretos en movimiento, propiocepción y fuerza necesitas para mejorar.",
      videoUrl: "https://www.youtube.com/watch?v=hioB8jHImko",
      thumbnail: "https://img.youtube.com/vi/hioB8jHImko/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/hernia-discal-se-puede-reabsorber-sola-sin-cirugia",
    },
    {
      title: "💪 Curar una hernia discal sin cirugía: así se regenera tu disco con movimiento y fuerza",
      excerpt: "Descubre cómo una hernia discal puede curarse sin cirugía mediante movimiento, compresión progresiva y 7 ejercicios específicos para hernia cervical, dorsal y lumbar. Entiende el papel de tu sistema inmune y por qué el reposo absoluto puede frenar tu recuperación.",
      videoUrl: "https://www.youtube.com/watch?v=VupbMbUlF9A",
      thumbnail: "https://img.youtube.com/vi/VupbMbUlF9A/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/curar-hernia-discal-sin-cirugia",
    },
    {
      title: "💪 Hernia Cervical #3: Ejercicios avanzados para fortalecer el cuello",
      excerpt: "Aprende ejercicios avanzados para el tratamiento de la hernia cervical. Esta guía incluye progresiones seguras, técnicas de control motor y estrategias para fortalecer la musculatura profunda del cuello sin necesidad de cirugía.",
      videoUrl: "https://www.youtube.com/watch?v=xCuWalw7604",
      thumbnail: "https://img.youtube.com/vi/xCuWalw7604/maxresdefault.jpg",
      category: "Hernia Cervical",
      articleUrl: "/blog/hernia-cervical-3",
    },
    {
      title: "💪 Hernia Cervical #4: Recuperación sin cirugía paso a paso",
      excerpt: "La recuperación de una hernia cervical sin cirugía es posible. En este artículo encontrarás un plan paso a paso con ejercicios progresivos, consejos prácticos y estrategias para aliviar el dolor y recuperar tu calidad de vida.",
      videoUrl: "https://www.youtube.com/watch?v=xCuWalw7604",
      thumbnail: "https://img.youtube.com/vi/xCuWalw7604/maxresdefault.jpg",
      category: "Hernia Cervical",
      articleUrl: "/blog/hernia-cervical-4",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))]">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[hsl(var(--light-gray))]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-secondary-foreground">
                Blog
              </h1>
              <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
                Artículos, guías y videos sobre entrenamiento y patologías de columna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-background border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
                  <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative group overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-48 object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </a>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      <a href={post.videoUrl} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={post.articleUrl || post.videoUrl} target={post.articleUrl ? "_self" : "_blank"} rel="noopener noreferrer">
                        Ver video y leer más
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
