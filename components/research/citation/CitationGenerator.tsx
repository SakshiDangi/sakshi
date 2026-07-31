"use client";


import {
  useState,
} from "react";


import type {
  ResearchPaper,
} from "@/types/research-paper";



interface CitationGeneratorProps {

  paper: ResearchPaper;

}



type CitationStyle =
  | "APA"
  | "IEEE"
  | "BibTeX";





export function CitationGenerator({

  paper,

}:CitationGeneratorProps){



  const [style,setStyle] =
    useState<CitationStyle>("APA");




  const year =
    paper.publicationDate;



  const apa =

`${paper.author}. (${year}). ${paper.title}. ${paper.series}. Version ${paper.version}.`;





  const ieee =

`${paper.author}, "${paper.title}," ${paper.series}, vol. ${paper.volume}, ${year}.`;





  const bibtex =

`@article{${paper.slug},

author = {${paper.author}},

title = {${paper.title}},

year = {${year}},

journal = {${paper.series}}

}`;




  const citations = {

    APA: apa,

    IEEE: ieee,

    BibTeX: bibtex,

  };




  return (

    <section

      className="
        rounded-xl
        border
        p-6
        space-y-4
      "

    >


      <h2

        className="
          text-xl
          font-semibold
        "

      >

        Cite this research

      </h2>



      <div
        className="
          flex
          gap-2
        "
      >


        {
          (
            [
              "APA",
              "IEEE",
              "BibTeX",
            ] as CitationStyle[]
          )
          .map((item)=>(


            <button

              key={item}

              onClick={()=>
                setStyle(item)
              }

              className="
                rounded-md
                border
                px-3
                py-1
              "

            >

              {item}

            </button>


          ))
        }


      </div>



      <pre

        className="
          overflow-x-auto
          rounded-lg
          bg-muted
          p-4
          text-sm
        "

      >

        {
          citations[style]
        }

      </pre>


    </section>

  );

}