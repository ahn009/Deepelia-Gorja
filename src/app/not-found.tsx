import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl gold-gradient-text font-bold mb-4">404</h1>
        <p className="font-display text-2xl text-foreground mb-2">Page not found</p>
        <p className="text-muted-foreground font-body text-sm mb-8">
          The page you were looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="gold-btn px-8 py-3 rounded text-sm inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
