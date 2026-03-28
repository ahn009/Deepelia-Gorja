import Image from "next/image";
import { MapPin } from "lucide-react";
import { countries } from "@/lib/constants";

const JourneySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-12">Journey Around the World</h2>

        <div className="gold-border-ornate rounded-lg overflow-hidden mb-10 max-w-5xl mx-auto">
          <Image
            src="/assets/images/journey-countries.jpg"
            alt="Journey landmarks - India, Iraq, Canada, USA"
            width={1600}
            height={512}
            className="w-full h-auto"
          />
          <div className="grid grid-cols-4">
            {countries.map((c) => (
              <div key={c.name} className="text-center py-3 bg-secondary/50 border-t border-border">
                <span className="font-display text-sm md:text-base text-primary font-bold">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap max-w-3xl mx-auto">
          {countries.map((c, i) => (
            <div key={c.name} className="flex items-center gap-2 md:gap-4">
              <div className="text-center">
                <MapPin size={20} className="mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">{c.year}</p>
                <p className="text-xs text-primary font-bold">{c.label}: {c.name}</p>
              </div>
              {i < countries.length - 1 && (
                <div className="w-8 md:w-16 border-t border-dashed border-primary/40" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="gold-btn-outline px-8 py-3 rounded text-sm inline-block">View My Journey</a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
