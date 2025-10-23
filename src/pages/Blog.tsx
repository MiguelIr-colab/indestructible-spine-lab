import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Ejercicios para Hernia Discal: Guía Completa 2025",
      excerpt: "Aprende cómo aliviar el dolor lumbar y fortalecer tu espalda sin cirugía. Descubre los mejores ejercicios, posturas y hábitos para recuperar tu movilidad paso a paso.",
      videoUrl: "https://www.youtube.com/watch?v=8F0-ed6r8o0",
      thumbnail: "https://img.youtube.com/vi/8F0-ed6r8o0/maxresdefault.jpg",
      category: "Hernia Discal",
      articleUrl: "/blog/hernia-discal",
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Artículos, guías y videos sobre entrenamiento y patologías de columna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
                  <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative group">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-48 object-cover"
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
                    <h3 className="text-xl font-bold text-card-foreground mb-3 hover:text-primary transition-colors">
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
