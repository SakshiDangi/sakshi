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
        max-w-7xl
        px-6
        lg:px-8
        py-16
      "
    >
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[260px_minmax(0,1fr)]
        "
      >
        <aside
          className="
            hidden
            lg:block
          "
        >
          <div className="sticky top-24">
            {sidebar}
          </div>
        </aside>

        <main className="min-w-0">
          {children}
        </main>
      </div>
    </section>
  );
}