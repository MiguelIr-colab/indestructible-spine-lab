import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const TestimoniosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
                Testimonios Reales
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo personas como tú han transformado su vida superando el dolor de espalda
              </p>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimoniosPage;
