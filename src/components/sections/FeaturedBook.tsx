import Image from "next/image";
import { Star } from "lucide-react";
import { featuredBook } from "@/lib/constants";

const FeaturedBook = () => {
  return (
    <section id="books" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-12">Featured Book</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="gold-border-ornate rounded-lg overflow-hidden max-w-[280px] shadow-2xl">
              <Image
                src={featuredBook.coverImage}
                alt="A Girl's Journey Book Cover"
                width={600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">{featuredBook.title}</h3>
            <p className="text-foreground font-body leading-relaxed mb-4">
              From a small town in India, through war-torn Iraq, to a new life in Canada and the USA.
              &quot;A Girl&apos;s Journey&quot; is a memoir of resilience, learning, and moving forward.
            </p>

            <div className="flex items-center gap-1 mb-2 star-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <div className="navy-card rounded-lg p-4 mb-6 inline-block">
              <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Praise</p>
              <p className="text-foreground italic font-accent text-lg">&quot;A transformative memoir.&quot;</p>
              <p className="text-muted-foreground text-sm mt-1">— Ria Reeves</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="gold-btn px-6 py-3 rounded text-sm">Buy on Amazon</a>
              <a href="#" className="gold-btn-outline px-6 py-3 rounded text-sm">Read Preview</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
