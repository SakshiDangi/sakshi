"use client";

import type { ReactNode } from "react";

interface ResearchContentProps {
  children: ReactNode;
}

export function ResearchContent({
  children,
}: ResearchContentProps) {
  return (
    <section className="mx-auto w-full max-w-[680px] xl:max-w-[700px] px-6 lg:px-0">
      {children}
    </section>
  );
}