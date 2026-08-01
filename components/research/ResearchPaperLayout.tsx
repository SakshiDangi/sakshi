import type { ReactNode } from "react";
import { ReadingProgress } from "@/components/research";
import type { ResearchPaper } from "@/types/research-paper";
import type { ResearchTocItem } from "@/types/research-toc";
import type { ResearchReference } from "@/types/research-reference";
import { ResearchBody } from "./ResearchBody";
import { ResearchHero } from "./ResearchHero";
import { ResearchMetadata } from "./ResearchMetadata";
import { ResearchTableOfContents } from "./ResearchTableOfContents";
import { ResearchContent } from "./ResearchContent";
import { ResearchReferences } from "./ResearchReferences";
import { RelatedResearch } from "./RelatedResearch";
import { ResearchAbstract } from "@/components/research";
import { CitationGenerator } from "./citation";
import { DownloadPaper } from "./DownloadPaper";
import { ResearchContainer } from "../ui/ResearchContainer";

interface ResearchPaperLayoutProps {

  paper: ResearchPaper;

  toc: ResearchTocItem[];

  references: ResearchReference[];

  children: ReactNode;

}



export function ResearchPaperLayout({

  paper,

  toc,

  references,

  children,

}: ResearchPaperLayoutProps) {

  return (

    <main
      className="
        min-h-screen
      "
    >

      <ReadingProgress />

      <ResearchHero

        volume={
          paper.volume
        }

        title={
          paper.title
        }

        subtitle={
          paper.subtitle
        }

        description={
          paper.description
        }

        category={
          paper.category
        }

        status={
          paper.status
        }

        publicationDate={
          paper.publicationDate
        }

        version={
          paper.version
        }

        readingTime={
          paper.readingTime
        }

        pages={
          paper.pages
        }

        series={
          paper.series
        }

        author={
          paper.author
        }

      />


      <ResearchAbstract

        content={
          paper.abstract ??
          "Abstract coming soon."
        }
      
      />



      <ResearchMetadata

        paper={
          paper
        }

      />

      <ResearchBody
      sidebar={

      <ResearchTableOfContents

        items={
          toc
        }

      />
      }>

      <ResearchContainer>
      <ResearchContent>

        {children}

      </ResearchContent>
      </ResearchContainer>
      </ResearchBody>

      <ResearchReferences

        references={
          references
        }

      />


      <CitationGenerator

        paper={
          paper
        }
      
      />

      <DownloadPaper

        paper={
          paper
        }
      
      />

      <RelatedResearch

        currentSlug={
          paper.slug
        }

      />


    </main>

  );

}