import { cn } from "@/lib/utils";

export interface TimelineDotProps {
  className?: string;
}

export function TimelineDot({
  className,
}: TimelineDotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute left-0 top-2",
        "-translate-x-1/2",
        "size-4",
        "rounded-full",
        "border-4",
        "border-background",
        "bg-primary",
        className
      )}
    />
  );
}