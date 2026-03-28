import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, BookOpen, ShoppingCart } from "lucide-react";
import { featuredBook } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Stories born from lived experience — memoirs of resilience, growth, and moving forward.",
};

export default function Books() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-center gold-gradient-text mb-4">Books</h1>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Stories born from lived experience — memoirs of resilience, growth, and moving forward.
            </p>
          </div>
        </section>

        {/* Featured Book */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              <div className="flex justify-center">
                <div className="gold-border-ornate rounded-lg overflow-hidden max-w-[350px] shadow-2xl">
                  <Image
                    src={featuredBook.coverImage}
                    alt="A Girl's Journey Book Cover"
                    width={600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2">Memoir</p>
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-2">{featuredBook.title}</h2>
                  <p className="font-accent italic text-xl text-foreground/80">{featuredBook.subtitle}</p>
                </div>

                <div className="flex items-center gap-1 star-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                  <span className="text-muted-foreground text-sm ml-2">5.0</span>
                </div>

                {featuredBook.description.map((para, i) => (
                  <p key={i} className="text-foreground font-body leading-relaxed">{para}</p>
                ))}

                <div className="flex gap-4 flex-wrap">
                  <a href="#" className="gold-btn px-8 py-3 rounded text-sm flex items-center gap-2">
                    <ShoppingCart size={16} /> Buy on Amazon
                  </a>
                  <Link href={`/books/${featuredBook.id}`} className="gold-btn-outline px-8 py-3 rounded text-sm flex items-center gap-2">
                    <BookOpen size={16} /> Read Preview
                  </Link>
                </div>

                <div className="section-divider" />

                <div>
                  <h3 className="font-display text-xl text-primary mb-4">Reader Reviews</h3>
                  <div className="space-y-4">
                    {featuredBook.reviews.map((review, i) => (
                      <div key={i} className="navy-card rounded-lg p-5">
                        <Quote size={18} className="text-primary/40 mb-2" />
                        <p className="text-foreground font-accent italic mb-2">&quot;{review.text}&quot;</p>
                        <p className="text-muted-foreground text-sm">— {review.author}</p>
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
