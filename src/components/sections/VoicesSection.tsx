import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "A powerful memoir and reckless candor that keeps you turning pages.", author: "Author, NYT" },
  { text: "A powerful memoir and footnotes that hold the remains of truth.", author: "Author, NYT" },
  { text: "A powerful memoir and relentless heart that redefines courage.", author: "Author, NYT" },
];

const VoicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-12">Voices of Resonance</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="navy-card rounded-lg p-6 text-center">
              <Quote size={24} className="mx-auto text-primary/40 mb-4" />
              <div className="flex justify-center gap-1 star-rating mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground font-accent italic text-lg mb-4">&quot;{t.text}&quot;</p>
              <p className="text-muted-foreground text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
