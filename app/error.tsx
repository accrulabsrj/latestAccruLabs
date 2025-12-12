"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Something went wrong!</h1>
          <p className="text-text-secondary">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="gradient">
            Try again
          </Button>
          <Button href="/" variant="ghost">
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}











