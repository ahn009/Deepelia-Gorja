import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about-deepi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl md:text-4xl text-center gold-gradient-text mb-4">The Unfolding Path</h2>
        <h3 className="font-display text-2xl text-center text-primary mb-12">About Deepika</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="gold-border-ornate rounded-lg overflow-hidden max-w-[250px]">
              <Image
                src="/assets/images/about-portrait.jpg"
                alt="Dr. Deepika Gorji"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display text-lg text-primary">Her Global Roots</h4>
            <p className="text-foreground font-body leading-relaxed text-sm">
              Dr. Deepika Gorji holds a PhD in Chemistry and worked in oil & gas for over a decade
              before transitioning to IT. She resides in Houston, Texas, with her husband and two
              grown children (aged 24 and 20). Her family is completed by two more cherished
              &quot;fur babies,&quot; Happy and Lucky, who keep her busy.
            </p>

            <h4 className="font-display text-lg text-primary">A Voice for Resilience</h4>
            <p className="text-foreground font-body leading-relaxed text-sm">
              A member of Toastmasters since 2008, she recently delivered a TEDx talk. Deeply
              devoted to her parents and her father&apos;s memory, the book is dedicated to him.
            </p>

            <h4 className="font-display text-lg text-primary">Family & Passions</h4>
            <p className="text-foreground font-body leading-relaxed text-sm">
              Deepika has an enduring passion for driving, exploring in her Rubicon Jeep, and is
              dedicated to running for causes, having completed fifty 5K runs in her 50th year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
