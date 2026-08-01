"use client";

import Link from "next/link";

interface TocItem {
  id: string;
  number: string;
  title: string;
  description?: string;
}

interface ResearchTableOfContentsProps {
  items: TocItem[];
}

export function ResearchTableOfContents({
  items,
}: ResearchTableOfContentsProps) {
  return (
    <nav
      className="
        sticky
        top-28
        max-h-[calc(100vh-7rem)]
        overflow-y-auto
        border-l
        border-border/60
        pl-5
      "
    >
      <div className="mb-6">
        <p
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-muted-foreground
          "
        >
          On this page
        </p>
      </div>

      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="
              group
              block
              rounded-md
              py-2
              transition-colors
              hover:text-foreground
            "
          >
            <div className="flex gap-3">
              <span
                className="
                  w-7
                  shrink-0
                  text-[11px]
                  font-semibold
                  text-primary
                "
              >
                {item.number}
              </span>

              <div className="min-w-0">
                <p
                  className="
                    text-[13px]
                    leading-6
                    text-muted-foreground
                    group-hover:text-foreground
                  "
                >
                  {item.title}
                </p>

                {item.description && (
                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-5
                      text-muted-foreground/80
                    "
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}