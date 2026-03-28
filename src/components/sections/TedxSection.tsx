import Image from "next/image";
import { Play } from "lucide-react";

const TedxSection = () => {
  return (
    <section id="speaking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-12">Sharing My Message: TEDx & Beyond</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative gold-border-ornate rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src="/assets/images/tedx-stage.jpg"
              alt="TEDx Talk by Deepika Gorji"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Play size={28} className="text-primary-foreground ml-1" />
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground font-body mt-4 text-sm">
            Watch my TEDx talk, &quot;Deepi&apos;s Journey&quot; — sharing a message of resilience, growth, and moving forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TedxSection;
