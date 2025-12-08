import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
