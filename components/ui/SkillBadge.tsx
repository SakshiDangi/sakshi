import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skillBadgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-full",
    "border",
    "font-medium",
    "transition-all",
    "duration-200",
    "select-none",
    "whitespace-nowrap",
    "hover:-translate-y-0.5",
    "hover:shadow-sm",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground",

        primary:
          "border-primary/20 bg-primary/10 text-primary",

        secondary:
          "border-secondary bg-secondary text-secondary-foreground",

        success:
          "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",

        warning:
          "border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",

        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive",

        outline:
          "border-border bg-transparent text-muted-foreground",
      },

      size: {
        sm: "px-2.5 py-1 text-xs",

        md: "px-3 py-1.5 text-sm",

        lg: "px-4 py-2 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SkillBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof skillBadgeVariants> {
  icon?: React.ReactNode;
}

export function SkillBadge({
  children,
  icon,
  variant,
  size,
  className,
  ...props
}: SkillBadgeProps) {
  return (
    <span
      className={cn(
        skillBadgeVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {icon}

      <span>{children}</span>
    </span>
  );
}