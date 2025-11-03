import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Perfect gift for my dad's birthday.",
      author: "Priya M.",
    },
    {
      quote: "The quality blew my mind — worth every rupee.",
      author: "Arjun K.",
    },
    {
      quote: "Looks like something straight out of a studio wall.",
      author: "Meera S.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Loved by Customers
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real stories from real people
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-sm hover:shadow-[var(--shadow-elegant)] transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-gold/30 mb-4" />
              <p className="text-lg mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
