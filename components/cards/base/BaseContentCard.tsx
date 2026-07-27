import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { SkillBadge } from "@/components/ui/SkillBadge";
import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { cn } from "@/lib/utils";


export interface BaseContentCardProps {
  category: string;

  title: string;

  description: string;

  href: string;

  date?: string;

  readingTime?: string;

  tags?: string[];

  actionLabel?: string;

  className?: string;
}


export function BaseContentCard({
  category,
  title,
  description,
  href,
  date,
  readingTime,
  tags = [],
  actionLabel = "Read More",
  className,
}: BaseContentCardProps) {


  return (

    <AnimatedFade>

      <article
        className={cn(
          `
          group
          flex
          h-full
          flex-col
          rounded-2xl
          border
          bg-card
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          `,
          className
        )}
      >


        {/* Category + Date */}

        <div className="flex items-start justify-between gap-4">
          <SkillBadge variant="secondary">
            {category}
          </SkillBadge>
        
          {(date || readingTime) && (
            <div className="text-right text-sm text-muted-foreground">
              {date && (
                <div className="flex items-center justify-end gap-2">
                  <Calendar className="size-4" />
                  <time>{date}</time>
                </div>
              )}
        
              {readingTime && (
                <p className="mt-1">
                  {readingTime}
                </p>
              )}
            </div>
          )}
        </div>


        {/* Content */}

        <div className="mt-5 flex flex-1 flex-col">


          <h3
            className="
            text-xl
            font-bold
            tracking-tight
            "
          >

            {title}

          </h3>



          <p
            className="
            mt-3
            flex-1
            leading-7
            text-muted-foreground
            "
          >

            {description}

          </p>



          {/* Tags */}

          {tags.length > 0 && (

            <div
              className="
              mt-5
              flex
              flex-wrap
              gap-2
              "
            >

              {tags.map(tag => (

                <SkillBadge
                  key={tag}
                  variant="outline"
                  size="sm"
                >
                  {tag}
                </SkillBadge>

              ))}


            </div>

          )}



          {/* Action */}


          <Link
            href={href}
            className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-medium
            text-primary
            transition-colors
            hover:text-primary/80
            "
          >

            {actionLabel}


            <ArrowRight
              className="
              size-4
              transition-transform
              group-hover:translate-x-1
              "
            />


          </Link>


        </div>


      </article>


    </AnimatedFade>

  );

}