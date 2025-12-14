import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto - Espalda Indestructible</title>
        <meta name="description" content="Contáctanos para resolver tus dudas sobre el programa Espalda Indestructible. Estamos aquí para ayudarte a eliminar tu dolor de espalda." />
        <link rel="canonical" href="https://espaldaindestructible.com/contacto" />
      </Helmet>
      <Header />
      <main className="pt-28 md:pt-32">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
