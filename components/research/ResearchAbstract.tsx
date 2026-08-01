interface ResearchAbstractProps {

  content:string;

}



export function ResearchAbstract({

  content,

}:ResearchAbstractProps){


  return (

    <section className="py-16">
      <div className="mx-auto max-w-[760px]">
        <div
          className="
            rounded-3xl
            border
            bg-gradient-to-br
            from-muted/40
            to-background
            p-10
            shadow-sm
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Abstract
          </p>
    
          <p
            className="
              mt-5
              text-[1.125rem]
              leading-9
              text-muted-foreground
            "
          >
            {content}
          </p>
        </div>
      </div>
    </section>

  );

}