import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import type { ResearchPaper } from "@/types/research-paper";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface ResearchCardProps {
  paper: ResearchPaper;
}



export function ResearchCard({
  paper,
}: ResearchCardProps) {


  return (

    <Card
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        transition-all
        hover:-translate-y-2
        hover:shadow-xl
      "
    >


{/* Cover Image */}

      <div
        className="
          relative
          aspect-video
          overflow-hidden
          bg-muted
        "
      >
      
        <Image
      
          src={paper.coverImage}
      
          alt={paper.title}
      
          fill
      
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
      
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
      
        />
      
      </div>



      <div
        className="
          flex
          flex-1
          flex-col
          p-6
        "
      >


        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >

          <Badge
            variant="secondary"
          >
            {
              paper.category
            }
          </Badge>


          <span
            className="
              text-sm
              text-muted-foreground
            "
          >
            {
              paper.publicationDate
            }
          </span>


        </div>




        <h3
          className="
            mt-6
            text-2xl
            font-bold
            leading-tight
            group-hover:text-primary
          "
        >

          {
            paper.title
          }

        </h3>



        <p
          className="
            mt-4
            flex-1
            leading-7
            text-muted-foreground
          "
        >

          {
            paper.description
          }

        </p>



        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >

          {
            paper.tags.map(
              (tag)=>(
                <Badge
                  key={tag}
                  variant="outline"
                >
                  {tag}
                </Badge>
              )
            )
          }

        </div>



        <Link

          href={
            paper.href
          }

          className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-semibold
            text-primary
          "

        >

          Read Research

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              group-hover:translate-x-1
            "
          />

        </Link>


      </div>


    </Card>

  );

}