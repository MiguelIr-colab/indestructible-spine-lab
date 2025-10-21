import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Tienda = () => {
  const products = [
    {
      name: "Programa 3 Meses",
      price: "297€",
      duration: "3 meses",
      features: [
        "Evaluación inicial completa",
        "Plan de entrenamiento personalizado",
        "Seguimiento semanal por videollamada",
        "Ajustes progresivos del programa",
        "Acceso a material educativo",
        "Soporte por WhatsApp",
      ],
      popular: false,
    },
    {
      name: "Programa 6 Meses",
      price: "497€",
      duration: "6 meses",
      features: [
        "Todo lo del programa de 3 meses",
        "Seguimiento quincenal personalizado",
        "Revisión de técnica en ejercicios",
        "Planificación de objetivos a largo plazo",
        "Acceso prioritario a nuevos contenidos",
        "Garantía de resultados",
      ],
      popular: true,
    },
    {
      name: "Programa 9 Meses",
      price: "697€",
      duration: "9 meses",
      features: [
        "Todo lo del programa de 6 meses",
        "Seguimiento mensual de por vida",
        "Acceso VIP a comunidad privada",
        "Planes de mantenimiento personalizados",
        "Descuentos en renovaciones",
        "Máxima transformación garantizada",
      ],
      popular: false,
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
                Programas de Entrenamiento
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elige el programa que mejor se adapte a tus objetivos y comienza tu transformación hoy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className={`bg-card border-border p-6 md:p-8 relative hover:shadow-[var(--shadow-card)] transition-all ${
                    product.popular ? 'border-primary border-2' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase">
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {product.price}
                    </div>
                    <p className="text-muted-foreground">{product.duration}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={product.popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    COMPRAR AHORA
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center bg-card border border-border rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                ¿No estás seguro qué programa elegir?
              </h2>
              <p className="text-muted-foreground mb-6">
                Agenda una llamada con uno de nuestros expertos y te ayudamos a elegir el programa ideal para ti
              </p>
              <Button variant="default" size="lg">
                AGENDAR LLAMADA GRATUITA
              </Button>
            </div>

            <div className="mt-12 text-center text-muted-foreground text-sm">
              <p>💳 Pago seguro mediante WooCommerce</p>
              <p className="mt-2">✓ Garantía de devolución de 14 días</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tienda;
