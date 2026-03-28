import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4">A Global Odyssey of Resilience and Growth</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              <span className="gold-gradient-text">Deepika</span>
              <br />
              <span className="gold-gradient-text">Gorji</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl font-accent italic">&quot;Deepi&quot;</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-primary mt-4 mb-2">Survive. Learn. Move On.</p>
            <p className="text-muted-foreground font-body text-sm tracking-wider mb-8">Author, Speaker & Lifelong Learner</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="gold-btn px-6 py-3 rounded text-sm">Buy on Amazon</a>
              <Link href="/books" className="gold-btn-outline px-6 py-3 rounded text-sm">Read Preview</Link>
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="gold-border-ornate rounded-lg overflow-hidden max-w-sm">
                <Image
                  src="/assets/images/hero-portrait.jpg"
                  alt="Deepika Gorji"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
