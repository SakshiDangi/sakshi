import { Lightbulb } from "lucide-react";

interface CalloutProps {
  title: string;
  children: React.ReactNode;
}

export function Callout({
  title,
  children,
}: CalloutProps) {
  return (
    <div
      className="
        my-8
        rounded-xl
        border-l-4
        border-primary
        bg-primary/5
        p-6
      "
    >
      <div
        className="
          mb-3
          flex
          items-center
          gap-2
          font-semibold
        "
      >
        <Lightbulb className="h-5 w-5" />

        {title}
      </div>

      {children}
    </div>
  );
}