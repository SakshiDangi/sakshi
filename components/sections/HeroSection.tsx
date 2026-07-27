import Link from "next/link";

import { heroData } from "@/data";

import { Button } from "@/components/ui/button";


export function HeroSection() {

  return (

    <section
      className="
        relative
        isolate
        overflow-hidden
        container
        mx-auto
        flex
        min-h-[92vh]
        flex-col
        items-center
        justify-center
        px-6
        py-28
        text-center
        sm:px-8
        lg:py-36
      "
    >


      {/* Background */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-primary/15
          via-primary/5
          to-transparent
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-24
        -h-96
        w-96
        -translate-x-1/2
        rounded-full
        bg-primary/10
        blur-[120px]
        "
      />

      <div
        className="
          w-full
          max-w-6xl
          space-y-8
        "
      >

        {/* Badge */}

        <div
          className="
            flex
            justify-center
          "
        >

          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/15
            bg-primary/10
            px-5
            py-2.5
            text-sm
            font-semibold
            tracking-[0.18em]
            text-primary
            shadow-sm
            backdrop-blur
            "
          >

            {heroData.badge}

          </span>


        </div>




        {/* Heading */}

        <h1
          className="
          mx-auto
          max-w-6xl
          font-heading
          text-5xl
          font-extrabold
          leading-[1.05]
          tracking-[-0.05em]
          sm:text-6xl
          lg:text-7xl
          "
        >

          Building

          <span
            className="
              bg-gradient-to-r
              from-sky-500
              via-blue-500
              to-indigo-500
              bg-clip-text
              text-transparent
            "
          >

            {" "}
            Trustworthy AI Systems

          </span>


          <br />

          for Education and Secure Digital Infrastructure


        </h1>





        {/* Subtitle */}

        <p
          className="
            mx-auto
            font-medium
            leading-relaxed
            text-foreground/80
            sm:text-lg
            md:text-xl
            max-w-3xl
            text-lg
            sm:text-xl
            lg:text-2xl
            leading-relaxed
            font-medium
          "
        >

          {heroData.subtitle}

        </p>


        {/* Buttons */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3
            pt-6
            sm:flex-row
          "
        >


          <Link
            href={heroData.primaryAction.href}
          >

            <Button
              size="lg"
              className="
                h-12
                rounded-xl
                px-8
                text-base
                font-semibold
                sm:text-base
                shadow-lg
                shadow-primary/20
                border-2
                hover:bg-primary/5
              "
            >

              {heroData.primaryAction.label}

            </Button>

          </Link>




          <Link
            href={heroData.secondaryAction.href}
          >

            <Button
              size="lg"
              variant="outline"
              className="
                h-12
                rounded-xl
                px-8
                text-base
                font-semibold
                sm:text-base
                shadow-lg
                shadow-primary/20
                border-2
                hover:bg-primary/5
              "
            >

              {heroData.secondaryAction.label}

            </Button>

          </Link>





          <Link
            href="/research"
          >

            <Button
              size="lg"
              variant="ghost"
              className="
                h-12
                rounded-xl
                px-8
                text-base
                font-semibold
                sm:text-base
                shadow-lg
                shadow-primary/20
                border-2
                hover:bg-primary/5
              "
            >

              Explore Research

            </Button>

          </Link>


        </div>

                {/* Description */}

        <p
          className="
            mx-auto
            max-w-2xl
            text-base
            leading-8
            text-muted-foreground
            sm:text-base
            md:text-lg
          "
        >

          {heroData.description}

        </p>



      </div>







      {/* Expertise Cards */}

      <div
        className="
          mt-16
          grid
          w-full
          max-w-5xl
          gap-4
          sm:grid-cols-3
        "
      >



        <ExpertiseCard
          title="AI + Education"
          description="Adaptive learning, knowledge graphs, and intelligent tutoring systems"
        />



        <ExpertiseCard
          title="Blockchain Security"
          description="Bridge security, smart contracts, and distributed verification"
        />



        <ExpertiseCard
          title="Research"
          description="Learning analytics, AI systems, and trustworthy technology"
        />


      </div>



    </section>

  );

}





function ExpertiseCard({

  title,

  description,

}: {

  title:string;

  description:string;

}) {


  return (

    <div
      className="
        group
        rounded-3xl
        border
        bg-background/70
        p-7
        text-left
        shadow-md
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >

      <h3
        className="
          text-xl
          font-bold
          tracking-tight
          sm:text-xl
        "
      >

        {title}

      </h3>


      <p
        className="
          mt-2
          text-base
          leading-7
          text-muted-foreground
        "
      >

        {description}

      </p>


    </div>

  );

}