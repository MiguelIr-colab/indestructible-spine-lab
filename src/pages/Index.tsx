import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import VideoTestimonials from "@/components/VideoTestimonials";
import ForWho from "@/components/ForWho";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Espalda Indestructible - Elimina el dolor crónico de espalda</title>
        <meta name="description" content="Programa personalizado para eliminar el dolor crónico de espalda. Hernia discal, estenosis lumbar, ciática. Entrenamiento basado en evidencia científica." />
        <link rel="canonical" href="https://espaldaindestructible.com/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <VideoTestimonials />
        <ForWho />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
