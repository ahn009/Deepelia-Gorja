"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h2 className="font-display text-3xl gold-gradient-text mb-4">Something went wrong</h2>
        <p className="text-muted-foreground font-body text-sm mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button onClick={reset} className="gold-btn px-6 py-2.5 rounded text-sm">
          Try again
        </button>
      </div>
    </div>
  );
}
