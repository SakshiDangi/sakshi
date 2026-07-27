import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import {
  SiGithub,
} from "react-icons/si";

import {
  SkillBadge,
} from "@/components/ui/SkillBadge";

import {
  cn,
} from "@/lib/utils";



interface ProjectCardProps {

  title: string;

  description: string;

  image: string;

  technologies: string[];

  github?: string;

  demo?: string;

  href?: string;

  featured?: boolean;

  className?: string;

}



const buttonClasses = {
  primary: `
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-primary
    px-4
    py-2
    text-sm
    font-medium
    text-primary-foreground
    transition-colors
    hover:bg-primary/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  `,

  outline: `
    inline-flex
    items-center
    justify-center
    rounded-lg
    border
    border-border
    bg-background
    px-4
    py-2
    text-sm
    font-medium
    transition-colors
    hover:bg-muted
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  `,
};



export function ProjectCard({

  title,

  description,

  image,

  technologies,

  github,

  demo,

  href,

  featured = false,

  className,

}: ProjectCardProps) {

  return (

    <article
      className={cn(
        `
          group
          overflow-hidden
          rounded-2xl
          border
          bg-card
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        `,
        className,
      )}
    >


      {/* ============================
          Project Image
      ============================ */}

      <div
        className="
          relative
          aspect-video
          overflow-hidden
        "
      >

        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {featured && (

          <div
            className="
              absolute
              left-4
              top-4
            "
          >

            <SkillBadge
              variant="primary"
            >
              Featured
            </SkillBadge>

          </div>

        )}

      </div>



      {/* ============================
          Content
      ============================ */}

      <div
        className="
          flex
          flex-col
          gap-6
          p-6
        "
      >


        {/* Title */}

        <div
          className="
            space-y-3
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
            "
          >
            {title}
          </h3>

          <p
            className="
              leading-7
              text-muted-foreground
            "
          >
            {description}
          </p>

        </div>



        {/* Technologies */}

        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >

          {technologies.map((technology) => (

            <SkillBadge
              key={technology}
              variant="outline"
              size="sm"
            >
              {technology}
            </SkillBadge>

          ))}

        </div>



        {/* ============================
            Actions
        ============================ */}

        <div
          className="
            flex
            flex-wrap
            gap-3
            pt-2
          "
        >

          {github && (

            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses.outline}
            >

              <SiGithub
                className="
                  mr-2
                  size-4
                "
              />

              GitHub

            </Link>

          )}



          {demo && (

            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses.outline}
            >

              <ExternalLink
                className="
                  mr-2
                  size-4
                "
              />

              Live Demo

            </Link>

          )}



          {href && (

            <Link
              href={href}
              className={buttonClasses.primary}
            >

              Read Case Study

              <ArrowRight
                className="
                  ml-2
                  size-4
                "
              />

            </Link>

          )}

        </div>

      </div>

    </article>

  );

}