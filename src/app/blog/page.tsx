import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, Heart, MapPin } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflections, stories, and lessons from a life lived across borders — with honesty, heart, and a little humor.",
};

const categoryIcons: Record<string, React.ElementType> = {
  Writing: BookOpen,
  Passions: Heart,
  Career: ArrowRight,
  Journey: MapPin,
  Speaking: BookOpen,
  Life: Heart,
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-center gold-gradient-text mb-4">Blog</h1>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Reflections, stories, and lessons from a life lived across borders — with honesty, heart, and a little humor.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => {
                const Icon = categoryIcons[post.category] ?? BookOpen;
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="navy-card rounded-lg p-6 group cursor-pointer hover:border-primary/40 transition-colors h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={16} className="text-primary" />
                        <span className="text-xs uppercase tracking-wider text-primary font-bold">{post.category}</span>
                        <span className="text-muted-foreground text-xs ml-auto flex items-center gap-1">
                          <Calendar size={12} /> {post.date}
                        </span>
                      </div>
                      <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-foreground/70 font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <span className="text-primary text-sm font-body font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
