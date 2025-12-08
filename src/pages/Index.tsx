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
