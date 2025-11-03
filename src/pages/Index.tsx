import Hero from "@/components/Hero";
import WhyFramified from "@/components/WhyFramified";
import FrameSelector from "@/components/FrameSelector";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyFramified />
      <FrameSelector />
      <Gallery />
      <Testimonials />
      <About />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
