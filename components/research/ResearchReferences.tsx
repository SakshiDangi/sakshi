import { ExternalLink } from "lucide-react";

import type { ResearchReference } from "@/types";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";


interface ResearchReferencesProps {

  references: ResearchReference[];

}



export function ResearchReferences({

  references,

}: ResearchReferencesProps) {


  if (!references.length) {

    return null;

  }


  return (

    <section className="border-t py-20">


      <Container className="max-w-4xl">


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
            References
          </p>


          <h2
            className="
              mt-4
              text-3xl
              font-bold
            "
          >
            Research Sources
          </h2>


        </div>



        <div
          className="
            space-y-6
          "
        >


          {references.map((reference, index) => (


            <Card
              key={reference.id}
              className="p-6"
            >


              <div
                className="
                  flex
                  gap-5
                "
              >


                <div
                  className="
                    text-lg
                    font-bold
                    text-primary
                  "
                >
                  [{index + 1}]
                </div>



                <div>


                  <h3
                    className="
                      font-semibold
                    "
                  >
                    {reference.title}
                  </h3>



                  <p
                    className="
                      mt-2
                      text-sm
                      text-muted-foreground
                    "
                  >

                    {reference.authors}

                    {reference.year &&
                      ` (${reference.year})`
                    }

                    {reference.source &&
                      ` · ${reference.source}`
                    }

                  </p>



                  {reference.description && (

                    <p
                      className="
                        mt-3
                        leading-7
                        text-muted-foreground
                      "
                    >

                      {reference.description}

                    </p>

                  )}



                  {reference.url && (

                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-primary
                      "
                    >

                      Source

                      <ExternalLink
                        className="
                          h-4
                          w-4
                        "
                      />

                    </a>

                  )}


                </div>


              </div>


            </Card>


          ))}


        </div>


      </Container>


    </section>

  );

}