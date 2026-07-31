interface ResearchAbstractProps {

  content:string;

}



export function ResearchAbstract({

  content,

}:ResearchAbstractProps){


  return (

    <section
      className="
        my-12
        rounded-3xl
        border
        bg-gradient-to-br
        from-muted/40
        to-background
        p-10
        shadow-sm
        transition
        hover:shadow-md
      "
    >

      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Abstract
      </h2>


      <p
        className="
          leading-8
          text-muted-foreground
        "
      >

        {content}

      </p>


    </section>

  );

}