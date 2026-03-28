import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Heart, Award, Car, Users, BookOpen, Mic } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deepika",
  description:
    "The story behind the story — a journey of resilience, transformation, and endless curiosity.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Banner */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-center gold-gradient-text mb-4">About Deepika</h1>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              The story behind the story — a journey of resilience, transformation, and endless curiosity.
            </p>
          </div>
        </section>

        {/* Main Bio */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
              <div className="md:col-span-2 flex justify-center">
                <div className="gold-border-ornate rounded-lg overflow-hidden max-w-[320px] sticky top-24">
                  <Image
                    src="/assets/images/about-portrait.jpg"
                    alt="Dr. Deepika Gorji"
                    width={640}
                    height={853}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-primary mb-4">Her Story</h2>
                  <p className="text-foreground font-body leading-relaxed mb-4">
                    Dr. Deepika Gorji holds a PhD in Chemistry and worked in oil & gas for over a decade before making a bold transition into IT. She resides in Houston, Texas, with her husband and two grown children — aged 24 and 20. Two cherished fur babies, Happy and Lucky, complete her family and keep her extra busy.
                  </p>
                  <p className="text-foreground font-body leading-relaxed mb-4">
                    An active Toastmasters member since 2008, Deepika recently delivered a powerful TEDx talk sharing her journey of resilience. A true extrovert, she has friends from all walks of life and loves spending time with them. She&apos;s always the first to help and can sense someone in trouble long before others.
                  </p>
                  <p className="text-foreground font-body leading-relaxed">
                    A devoted dad&apos;s daughter whose life revolved around her father&apos;s presence, the recent loss of her father cemented her resolve to publish her memoir and dedicate it to him. His memory fuels every page of &quot;A Girl&apos;s Journey.&quot;
                  </p>
                </div>

                <div className="section-divider" />

                <div>
                  <h2 className="font-display text-2xl text-primary mb-4">Passions That Drive Her</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Car, title: "Rubicon Adventures", desc: "Driving is in her blood. Measuring roads in her Rubicon Jeep is her best vacation — alone or with family and friends." },
                      { icon: Heart, title: "Running for Cause", desc: "A passion that grows every day. She completed fifty 5K runs in her 50th year, running for causes close to her heart." },
                      { icon: Users, title: "Family First", desc: "Her husband, two kids, and fur babies Happy & Lucky are the center of her world." },
                      { icon: Mic, title: "Public Speaking", desc: "From Toastmasters since 2008 to the TEDx stage — sharing stories of strength and becoming." },
                    ].map((item) => (
                      <div key={item.title} className="navy-card rounded-lg p-5">
                        <item.icon size={24} className="text-primary mb-3" />
                        <h3 className="font-display text-sm text-primary font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                        <p className="text-foreground/80 font-body text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-divider" />

                <div>
                  <h2 className="font-display text-2xl text-primary mb-4">Credentials</h2>
                  <div className="space-y-3">
                    {[
                      { icon: BookOpen, text: "PhD in Chemistry" },
                      { icon: Award, text: "Over a decade in Oil & Gas industry" },
                      { icon: Award, text: "Successful transition to IT" },
                      { icon: Mic, text: "TEDx Speaker" },
                      { icon: Award, text: "Active Toastmasters member since 2008" },
                      { icon: Heart, text: "Completed 50 5K runs at age 50" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon size={18} className="text-primary flex-shrink-0" />
                        <p className="text-foreground font-body">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
