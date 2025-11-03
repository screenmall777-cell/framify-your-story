import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSelector = () => {
    document.getElementById("frame-selector")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Framified" className="h-24 md:h-32 animate-fade-in" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
          Frame Your Story.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light animate-fade-in leading-relaxed">
          From your proudest moments to your daily motivation — crafted with precision and passion.
        </p>
        
        <Button 
          onClick={scrollToSelector}
          size="lg"
          className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105 animate-fade-in"
        >
          Customize Your Frame
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
