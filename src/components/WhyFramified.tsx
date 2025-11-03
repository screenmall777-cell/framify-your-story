import { Award, Hammer, Truck } from "lucide-react";

const WhyFramified = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Materials",
      description: "Museum-grade prints, crystal-clear finish.",
    },
    {
      icon: Hammer,
      title: "Handcrafted Precision",
      description: "Each frame made with care.",
    },
    {
      icon: Truck,
      title: "Fast & Safe Delivery",
      description: "Protected packaging, doorstep delivery.",
    },
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFramified;
