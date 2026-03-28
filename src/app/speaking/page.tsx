import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Play, Mic, Calendar, MapPin, MessageSquare } from "lucide-react";
import { speakingTopics, speakingEvents, CONTACT_EMAIL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "From Toastmasters to the TEDx stage — sharing messages of resilience, growth, and transformation.",
};

const topicIcons = [Mic, MessageSquare, Calendar];

export default function Speaking() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-center gold-gradient-text mb-4">Speaking</h1>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              From Toastmasters to the TEDx stage — sharing messages of resilience, growth, and transformation.
            </p>
          </div>
        </section>

        {/* TEDx Feature */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-8 text-center">TEDx Talk: Deepi&apos;s Journey</h2>
            <div className="relative gold-border-ornate rounded-lg overflow-hidden group cursor-pointer mb-6">
              <Image
                src="/assets/images/tedx-stage.jpg"
                alt="TEDx Talk by Deepika Gorji"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Play size={32} className="text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <p className="text-foreground font-body leading-relaxed text-center mb-4">
              In her TEDx talk, Deepika shares the deeply personal story of moving across continents, overcoming adversity, and finding strength in every challenge. Her message resonates with anyone who has ever had to start over.
            </p>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Speaking Topics */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-8 text-center">Speaking Topics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {speakingTopics.map((topic, i) => {
                const Icon = topicIcons[i] ?? Mic;
                return (
                  <div key={topic.title} className="navy-card rounded-lg p-6 text-center">
                    <Icon size={28} className="mx-auto text-primary mb-4" />
                    <h3 className="font-display text-lg text-primary font-bold mb-3">{topic.title}</h3>
                    <p className="text-foreground/80 font-body text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Speaking Journey */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-8 text-center">Speaking Journey</h2>
            <div className="space-y-6">
              {speakingEvents.map((item, i) => (
                <div key={i} className="navy-card rounded-lg p-6 flex gap-6 items-start">
                  <div className="text-center min-w-[60px]">
                    <span className="font-display text-lg text-primary font-bold">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{item.event}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mb-2"><MapPin size={14} /> {item.location}</p>
                    <p className="text-foreground/80 font-body text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href={`mailto:${CONTACT_EMAIL}`} className="gold-btn px-8 py-3 rounded text-sm inline-block">
                Book Deepika for Your Event
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
