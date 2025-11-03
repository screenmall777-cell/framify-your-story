import frameMotivation from "@/assets/frame-motivation.jpg";
import frameFamily from "@/assets/frame-family.jpg";
import frameCelebrity from "@/assets/frame-celebrity.jpg";
import frameQuote from "@/assets/frame-quote.jpg";
import frameArt from "@/assets/frame-art.jpg";

const Gallery = () => {
  const frames = [
    { src: frameMotivation, alt: "Motivational Frame", span: "md:col-span-2" },
    { src: frameFamily, alt: "Family Photo Frame", span: "md:row-span-2" },
    { src: frameCelebrity, alt: "Celebrity Frame", span: "" },
    { src: frameQuote, alt: "Quote Frame", span: "md:col-span-2" },
    { src: frameArt, alt: "Art Frame", span: "" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Inspiration Wall
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          From motivation to memories, every frame tells a story
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {frames.map((frame, index) => (
            <div
              key={index}
              className={`${frame.span} overflow-hidden group cursor-pointer relative rounded-sm`}
            >
              <img
                src={frame.src}
                alt={frame.alt}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://www.instagram.com/framified.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium hover:text-gold transition-colors duration-300"
          >
            See More on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
