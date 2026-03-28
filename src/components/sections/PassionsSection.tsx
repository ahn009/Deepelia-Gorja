import Image from "next/image";
import { passions } from "@/lib/constants";

const PassionsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-12">My Passions & Causes</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {passions.map((p) => (
            <div key={p.label} className="navy-card rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <p className="font-display text-sm text-primary font-bold uppercase tracking-wider">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
