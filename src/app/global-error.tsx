"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0f1e", color: "#d4a853", fontFamily: "sans-serif", display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong</h2>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>A critical error occurred. Please reload the page.</p>
          <button
            onClick={reset}
            style={{ background: "hsl(43 72% 55%)", color: "#0a0f1e", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", fontWeight: 700 }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
