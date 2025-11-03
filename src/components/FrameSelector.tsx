import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

const frameSizes = [
  "4x6", "5x7", "6x4", "6x8", "8x8", "8x10", 
  "12x8", "12x12", "16x20", "18x24", "20x30", "24x36"
];

const finishStyles = ["Glossy", "Matte", "Wooden"];
const borderThickness = ["Thin", "Medium", "Thick"];

const FrameSelector = () => {
  const [size, setSize] = useState("");
  const [finish, setFinish] = useState("");
  const [border, setBorder] = useState("");

  const handleWhatsApp = () => {
    const message = `Hi Framified! I'm interested in a ${size || "[Size]"} frame with ${finish || "[Finish Style]"} finish and ${border || "[Border Thickness]"} border.`;
    const whatsappUrl = `https://wa.me/919488108394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="frame-selector" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Choose Your Frame Size
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Select your specifications and get an instant quote
        </p>
        
        <div className="max-w-4xl mx-auto bg-card rounded-none shadow-[var(--shadow-elegant)] p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <label className="text-sm font-medium uppercase tracking-wider">
                Frame Size (inches)
              </label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="rounded-none border-2 h-12 bg-background">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {frameSizes.map((frameSize) => (
                    <SelectItem key={frameSize} value={frameSize}>
                      {frameSize}"
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium uppercase tracking-wider">
                Finish Style
              </label>
              <Select value={finish} onValueChange={setFinish}>
                <SelectTrigger className="rounded-none border-2 h-12 bg-background">
                  <SelectValue placeholder="Select finish" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {finishStyles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium uppercase tracking-wider">
                Border Thickness
              </label>
              <Select value={border} onValueChange={setBorder}>
                <SelectTrigger className="rounded-none border-2 h-12 bg-background">
                  <SelectValue placeholder="Select border" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {borderThickness.map((thickness) => (
                    <SelectItem key={thickness} value={thickness}>
                      {thickness}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-accent rounded-none h-14 text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Price on WhatsApp
          </Button>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Chat with us directly to discuss your custom requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameSelector;
