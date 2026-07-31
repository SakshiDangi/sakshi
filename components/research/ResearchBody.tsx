import type { ReactNode } from "react";

interface ResearchBodyProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function ResearchBody({
  sidebar,
  children,
}: ResearchBodyProps) {
  return (
    <section
      className="
        mx-auto
        mt-16
        grid
        max-w-7xl
        gap-10
        px-6
        lg:grid-cols-[280px_1fr]
      "
    >
      <aside
        className="
          hidden
          lg:block
        "
      >
        {sidebar}
      </aside>

      <main
        className="
          min-w-0
        "
      >
        {children}
      </main>
    </section>
  );
}