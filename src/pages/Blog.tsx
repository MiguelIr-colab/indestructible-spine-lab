import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Ejercicios para Hernia Discal: Guía Completa 2025",
      excerpt: "Descubre los ejercicios más efectivos y seguros para fortalecer tu espalda cuando tienes hernia discal. Método progresivo paso a paso.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Hernia Discal",
    },
    {
      title: "Estenosis Lumbar: Ejercicios que Realmente Funcionan",
      excerpt: "Aprende qué ejercicios ayudan con la estenosis lumbar y cuáles debes evitar. Basado en evidencia científica y casos reales.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Estenosis",
    },
    {
      title: "Cómo Volver al Gimnasio con Protrusión Discal",
      excerpt: "Método seguro y progresivo para retomar el entrenamiento sin miedo a lesionarte. Incluye plan de 8 semanas.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Protrusión",
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
                      <a href={post.videoUrl} target="_blank" rel="noopener noreferrer">
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
