import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSelector = () => {
    document.getElementById("frame-selector")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Made with Soul.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-12">
          Framified isn't just about pictures — it's about people, stories, and emotion.
          Every piece is crafted with care, giving your memories the frame they deserve.
        </p>
        
        <Button
          onClick={scrollToSelector}
          size="lg"
          className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6 rounded-sm font-medium transition-all duration-300 hover:scale-105"
        >
          Start Your Frame →
        </Button>
      </div>
    </section>
  );
};

export default About;
