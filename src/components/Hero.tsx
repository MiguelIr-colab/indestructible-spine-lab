import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {

  return (
    <section className="min-h-screen bg-card pt-20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - First on mobile, second on desktop */}
          <div className="relative lg:h-[700px] h-[400px] rounded-lg overflow-hidden lg:order-2 order-1">
            <img
              src={heroImage}
              alt="Entrenador ayudando a persona a mejorar el dolor de espalda con ejercicios guiados"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                Di adiós al dolor de espalda y recupera tu vida de siempre
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-foreground leading-relaxed">
                Programa online personalizado que elimina el dolor crónico de espalda fortaleciendo tu columna desde la raíz.
                <span className="block mt-2 font-semibold text-primary">Sin medicación, sin reposo, sin cirugías.</span>
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Mejora tu movilidad y fuerza real en pocas semanas.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">100% adaptado a tu nivel y condición.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Acompañamiento profesional en cada fase.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-primary text-xl">🔹</span>
                  <span className="text-lg">Resultados respaldados por evidencia científica.</span>
                </li>
              </ul>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  className="text-lg h-14 px-12"
                  onClick={() => window.location.href = '/programa'}
                >
                  QUIERO UNA ESPALDA INDESTRUCTIBLE
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Solicita tu primera entrevista y descubre cómo eliminar el dolor desde casa.
                </p>

                {/* Micro-testimonial */}
                <div className="pt-6 border-t border-border mt-8">
                  <div className="flex gap-1 justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-center text-sm text-foreground italic">
                    "Llevaba años con dolor lumbar y ahora entreno sin miedo." — <strong>Ana M.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
