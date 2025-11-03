import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Framified.store</h3>
            <p className="text-sm opacity-80">Premium frames, timeless memories</p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/framified.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Visit our Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/919488108394"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm opacity-80">
            © 2025 Framified.store | Crafted with ❤️ in India | +91 9488108394
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
