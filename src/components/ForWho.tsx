import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForWho = () => {
  const forWho = [
    "Personas diagnosticadas con hernia discal",
    "Dolor por protrusión o estenosis lumbar",
    "Ciática leve o moderada",
    "Personas que quieren volver a entrenar sin miedo",
    "Adultos entre 25 y 60 años con dolor crónico",
  ];

  const notForWho = [
    "Dolor agudo sin diagnóstico médico",
    "Patologías graves sin supervisión médica",
    "Personas que buscan soluciones mágicas instantáneas",
    "Quienes no están comprometidos con el proceso",
  ];

  return (
    <section className="py-12 lg:py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-16 text-center text-foreground">
          ¿Es este programa <span className="text-primary">para ti</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Para quién SÍ es */}
          <div className="bg-background p-6 md:p-8 rounded-lg border-2 border-primary">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 lg:w-7 lg:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">Es para ti si...</h3>
            </div>
            <ul className="space-y-3 lg:space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-2 lg:gap-3">
                  <Check className="w-5 h-5 lg:w-6 lg:h-6 text-primary mt-0.5 lg:mt-1 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quién NO es */}
          <div className="bg-background p-6 md:p-8 rounded-lg border-2 border-muted">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-muted rounded-full flex items-center justify-center">
                <X className="w-5 h-5 lg:w-7 lg:h-7 text-muted-foreground" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">No es para ti si...</h3>
            </div>
            <ul className="space-y-3 lg:space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-2 lg:gap-3">
                  <X className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground mt-0.5 lg:mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm md:text-base lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 lg:mt-16 text-center">
          <div className="bg-primary/10 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mb-6 lg:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 lg:mb-4">Prueba algo diferente</h3>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
              Nada de grupos ni videos genéricos. <span className="text-primary font-bold">100% adaptado a lo que tú necesites</span>.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="#programa">Empieza tu plan ahora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
