import { BookOpen } from "lucide-react";

interface DefinitionProps {
  title: string;
  children: React.ReactNode;
}

export function Definition({
  title,
  children,
}: DefinitionProps) {
  return (
    <div
      className="
        my-10
        rounded-2xl
        border
        bg-muted/30
        p-6
        transition
        hover:-translate-y-1
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          gap-2
          font-semibold
        "
      >
        <BookOpen className="h-5 w-5" />

        {title}
      </div>

      <div>{children}</div>
    </div>
  );
}