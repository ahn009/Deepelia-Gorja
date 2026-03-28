import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-body mb-8 hover:underline">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-primary font-bold">{post.category}</span>
              <span className="text-muted-foreground text-xs flex items-center gap-1">
                <Calendar size={12} /> {post.date}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl gold-gradient-text mb-6">{post.title}</h1>
            <p className="text-foreground/80 font-body text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="navy-card rounded-lg p-8">
              <p className="text-muted-foreground font-body text-sm italic text-center">
                Full article content coming soon. Check back shortly for the complete post.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="gold-btn-outline px-8 py-3 rounded text-sm inline-block">
                Read More Posts
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
