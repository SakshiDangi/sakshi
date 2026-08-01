"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / scrollHeight) * 100;

      setProgress(
        Math.min(
          100,
          Math.max(0, percentage)
        )
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <>
      <div
        className="
          fixed
          top-0
          left-0
          z-[100]
          h-1
          w-full
          bg-border/30
          backdrop-blur-sm
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-primary
            transition-[width]
            duration-200
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div
        className="
          fixed
          top-5
          right-6
          z-[100]
          hidden
          items-center
          gap-3
          rounded-full
          border
          bg-background/80
          px-4
          py-2
          shadow-lg
          backdrop-blur-md
          lg:flex
        "
      >
        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-muted-foreground
          "
        >
          Reading
        </span>

        <span
          className="
            text-sm
            font-semibold
          "
        >
          {Math.round(progress)}%
        </span>
      </div>
    </>
  );
}