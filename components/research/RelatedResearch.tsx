"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ResearchPaper } from "@/types";

import { research } from "@/data";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";


interface RelatedResearchProps {
  currentSlug: string;

  relatedProjects?: string[];
}


export function RelatedResearch({
  currentSlug,
}: RelatedResearchProps) {


  const relatedResearch = research
    .filter(
      (paper) =>
        paper.slug !== currentSlug
    )
    .slice(0, 3);



  if (!relatedResearch.length) {
    return null;
  }



  return (

    <section
      className="
        border-t
        py-20
      "
    >

      <Container className="max-w-5xl">


        <div className="mb-12">


          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Research Series
          </p>


          <h2
            className="
              mt-4
              text-3xl
              font-bold
            "
          >
            Continue Reading
          </h2>


          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-muted-foreground
            "
          >
            Explore related research papers from this
            independent technical whitepaper series.
          </p>


        </div>




        <div
          className="
            grid
            gap-6
            md:grid-cols-3
          "
        >


          {relatedResearch.map((paper) => (

            <RelatedCard
              key={paper.slug}
              paper={paper}
            />

          ))}


        </div>



      </Container>


    </section>

  );

}



interface RelatedCardProps {

  paper: ResearchPaper;

}



function RelatedCard({
  paper,
}: RelatedCardProps) {


  return (

    <Card
      className="
        group
        flex
        h-full
        flex-col
        p-6
        transition-all
        hover:-translate-y-1
        hover:shadow-lg
      "
    >


      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-primary
          "
        >
          Volume {paper.volume}
        </span>


        <span
          className="
            text-xs
            text-muted-foreground
          "
        >
          {paper.status}
        </span>


      </div>




      <h3
        className="
          mt-5
          text-xl
          font-bold
          leading-tight
          group-hover:text-primary
        "
      >

        {paper.title}

      </h3>




      <p
        className="
          mt-4
          flex-1
          text-sm
          leading-7
          text-muted-foreground
        "
      >

        {paper.description}

      </p>




      <Link
        href={paper.href}
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-primary
        "
      >

        Read Paper


        <ArrowRight
          className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-1
          "
        />


      </Link>


    </Card>

  );

}