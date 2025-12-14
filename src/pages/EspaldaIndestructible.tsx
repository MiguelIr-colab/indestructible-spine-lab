import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EspaldaIndestructible = () => {
  const products = [{
    name: "ESPALDA INDESTRUCTIBLE",
    price: "997,00€",
    priceAmount: 997,
    duration: "12 semanas",
    slug: "12-semanas",
    popular: false
  }, {
    name: "ESPALDA INDESTRUCTIBLE",
    price: "1.749,00€",
    priceAmount: 1749,
    duration: "6 meses",
    slug: "6-meses",
    popular: true
  }, {
    name: "ESPALDA INDESTRUCTIBLE",
    price: "2.859,00€",
    priceAmount: 2859,
    duration: "1 año",
    slug: "1-ano",
    popular: false
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
                ESPALDA INDESTRUCTIBLE
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un programa para personas que quieren Eliminar su Dolor de Espalda, ya sea provocado por hernias de Disco, Protrusiones Discales, Espondilolistesis, Estenosis del canal Medular, Ciática, Lumbalgia, o simplemente porque lleven con su dolor más de 6 meses y no hayan encontrado solución en otras terapias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product, index) => <Card key={index} className={`bg-card border-border p-6 md:p-8 relative hover:shadow-[var(--shadow-card)] transition-all ${product.popular ? 'border-primary border-2' : ''}`}>
                  {product.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase">
                        Más Popular
                      </span>
                    </div>}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {product.price}
                    </div>
                    <p className="text-muted-foreground">{product.duration}</p>
                  </div>

                  <Button 
                    variant={product.popular ? "default" : "outline"} 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = `/espalda-indestructible/${product.slug}`}
                  >
                    COMPRAR AHORA
                  </Button>
                </Card>)}
            </div>

            <div className="mt-16 text-center bg-card border border-border rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                ¿No estás seguro qué programa elegir?
              </h2>
              <p className="text-muted-foreground mb-6">
                Agenda una llamada con uno de nuestros expertos y te ayudamos a elegir el programa ideal para ti
              </p>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.open('https://calendly.com/d/cnzd-y87-nk6/entrevista', '_blank')}
              >
                AGENDAR LLAMADA
              </Button>
            </div>

            
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default EspaldaIndestructible;