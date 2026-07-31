import type { Metadata } from "next";

import {
  getResearchPapers,
} from "@/lib/research";


import { Section } from "@/components/ui/Section";

import { SectionTitle } from "@/components/ui/SectionTitle";

import { ResearchCard } from "@/components/cards/ResearchCard";



export const metadata: Metadata = {

  title:
    "Research | Sakshi",


  description:
    "Independent research papers covering AI, adaptive learning, educational technology, and trustworthy systems.",

};



export default function ResearchPage(){


  const papers =
    getResearchPapers();



  return (

    <Section spacing="lg">


      <SectionTitle

        eyebrow="Research Series"

        title="AI Education & Adaptive Learning Research"

        description="
        Independent technical whitepapers exploring
        artificial intelligence, adaptive learning,
        educational games, and learning systems.
        "

      />



      <div
        className="
          mt-12
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {
          papers.map(
            (paper)=>(
              <ResearchCard

                key={
                  paper.slug
                }

                paper={
                  paper
                }

              />
            )
          )
        }

      </div>


    </Section>

  );

}