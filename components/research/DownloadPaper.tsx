import type { ResearchPaper } from "@/types/research-paper";


interface DownloadPaperProps {

  paper: ResearchPaper;

}



export function DownloadPaper({

  paper,

}: DownloadPaperProps) {


  return (

    <section
      className="
        rounded-xl
        border
        p-6
        space-y-3
      "
    >

      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Download Paper
      </h2>


      <p
        className="
          text-sm
          text-muted-foreground
        "
      >

        PDF version:
        {" "}
        {paper.title}

      </p>


      <a

        href={paper.pdf}

        download

        className="
          inline-flex
          rounded-lg
          border
          px-4
          py-2
          hover:bg-muted
        "

      >

        Download PDF

      </a>


    </section>

  );

}