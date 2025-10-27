import { Shield, TrendingUp, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Recupera la seguridad al moverte",
      description: "Con un sistema validado por investigaciones en columna",
    },
    {
      icon: TrendingUp,
      title: "Recupera tus actividades sin limitaciones",
      description: "Y retoma tus actividades que ahora no te atreves a hacer",
    },
    {
      icon: Heart,
      title: "Sigue un plan diseñado para tu columna",
      description: "Ajustes y correcciones diarias para que progreses de forma segura.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">
            <span className="text-primary">Entrenamiento online</span>{" "}
            <span className="text-foreground">para personas con patologías de columna: hernias, protrusiones, lisis, estenosis...</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Método progresivo y seguro para recuperar tu vida normal
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
