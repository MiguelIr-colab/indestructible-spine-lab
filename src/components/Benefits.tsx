import { Shield, TrendingUp, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce el dolor y gana confianza al moverte",
      description: "Aprende a moverte de forma segura y progresiva, eliminando el miedo que te paraliza.",
    },
    {
      icon: TrendingUp,
      title: "Recupera fuerza y movilidad real",
      description: "Programa basado en evidencia científica diseñado específicamente para patologías de columna.",
    },
    {
      icon: Heart,
      title: "Sigue un plan con seguimiento directo",
      description: "Ajustes personalizados quincenales para garantizar tu progresión de forma segura.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Entrenamiento online</span>{" "}
            <span className="text-foreground">para hernia, protrusión y dolor lumbar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Método progresivo y seguro para volver a entrenar sin miedo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg hover:shadow-[var(--shadow-card)] transition-all hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
