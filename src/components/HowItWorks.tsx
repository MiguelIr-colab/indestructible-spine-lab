import { FileCheck, Calendar, RefreshCw, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileCheck,
      title: "ENTREVISTA INICIAL",
      description: "Por videollamada conoceremos los detalles de tu dolor y tus objetivos, así como tu forma física actual. Te contaremos cómo funciona el programa y si realmente puede ayudarte.",
    },
    {
      icon: Calendar,
      title: "EVALUACIÓN",
      description: "Ya dentro del programa, te evaluaremos por medio de una serie de vídeos. En base a ello diseñaremos tu programa con la secuencia de ejercicios que debes hacer para recuperarte.",
    },
    {
      icon: RefreshCw,
      title: "TU PROGRAMACIÓN",
      description: "No es ninguna tabla, tendrás una App personal sólo para ti, en la que podrás reproducir los ejercicios explicados a la perfección para que sepas la técnica correcta de ejecución.",
    },
    {
      icon: TrendingUp,
      title: "SEGUIMIENTO DIARIO",
      description: "Además diariamente tendremos contacto, para corregirte tus ejercicios que enviarás a un entrenador asignado para un seguimiento personalizado (nada de grupos ni cosas genéricas).",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            ¿Cómo funciona el programa{" "}
            <span className="text-primary">Espalda Indestructible</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un método estructurado en 4 pasos para tu recuperación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                  <step.icon className="w-10 h-10 text-primary" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Qué incluye el programa
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground text-lg">Evaluación inicial en vídeo personalizada</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground text-lg">Revisión técnica de todos tus ejercicios</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground text-lg">Progresión personalizada según tu evolución</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground text-lg">Acceso a comunidad privada de apoyo</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
