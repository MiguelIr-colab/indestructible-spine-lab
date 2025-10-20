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
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">
            <span className="text-primary">Entrenamiento online</span>{" "}
            <span className="text-foreground">para hernia, protrusión y dolor lumbar</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Método progresivo y seguro para volver a entrenar sin miedo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 lg:p-8 rounded-lg hover:shadow-[var(--shadow-card)] transition-all hover:scale-105"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 lg:mb-6">
                <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">{benefit.title}</h3>
              <p className="text-sm lg:text-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
