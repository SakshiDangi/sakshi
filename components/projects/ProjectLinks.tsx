import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

const buttonClass =
  `
    inline-flex
    items-center
    justify-center
    rounded-lg
    px-4
    py-2
    text-sm
    font-medium
    transition-colors
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  `;

export function ProjectLinks({
  github,
  demo,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {github && (
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} border bg-background hover:bg-muted`}
        >
          <SiGithub className="mr-2 size-4" />

          GitHub
        </Link>
      )}

      {demo && (
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-primary text-primary-foreground hover:bg-primary/90`}
        >
          <ExternalLink className="mr-2 size-4" />

          Live Demo
        </Link>
      )}
    </div>
  );
}