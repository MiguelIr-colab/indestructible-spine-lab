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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-foreground">
          ¿Es este programa <span className="text-primary">para ti</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Para quién SÍ es */}
          <div className="bg-background p-8 rounded-lg border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quién NO es */}
          <div className="bg-background p-8 rounded-lg border-2 border-muted">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <X className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">No es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 p-8 rounded-lg max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Garantía de 14 días</h3>
            <p className="text-lg text-muted-foreground">
              Si no ves progresión en 14 días siguiendo el programa correctamente,{" "}
              <span className="text-primary font-bold">te devolvemos el 100% de tu inversión</span>.
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
