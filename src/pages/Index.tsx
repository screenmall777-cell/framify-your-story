import Hero from "@/components/Hero";
import FrameSelector from "@/components/FrameSelector";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FrameSelector />
      <Gallery />
      <About />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
