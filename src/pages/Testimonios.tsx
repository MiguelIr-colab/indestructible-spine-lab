import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const TestimoniosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Testimonios - Espalda Indestructible</title>
        <meta name="description" content="Testimonios reales de personas que han eliminado su dolor crónico de espalda con el programa Espalda Indestructible." />
        <link rel="canonical" href="https://espaldaindestructible.com/testimonios" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimoniosPage;
