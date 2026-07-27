import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export interface CTASectionProps {
  title?: string;
  description?: string;

  buttonText?: string;
  buttonHref?: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTASection({
  title = "Interested in Building Trustworthy AI Systems?",

  description =
    "I'm always interested in discussing AI engineering, educational technology, blockchain security, distributed systems, research collaborations, and challenging software projects. If my work aligns with what you're building, I'd love to connect.",

  buttonText = "Contact Me",

  buttonHref = "/contact",

  secondaryButtonText = "View Resume",

  secondaryButtonHref = "/resume",
}: CTASectionProps) {
  return (
    <Section
      spacing="xl"
      background="transparent"
    >
      <AnimatedFade>
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-border/60
            bg-card
            px-8
            py-20
            shadow-sm

            lg:px-20
          "
        >
          {/* Decorative background */}

          <div
            className="
              absolute
              inset-0
              -z-10

              bg-gradient-to-br
              from-primary/5
              via-transparent
              to-primary/10
            "
          />

          <SectionTitle
            align="center"

            eyebrow="Let's Connect"

            title={title}

            description={description}
          />

          {/* Expertise */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "AI Systems",
              "Educational Technology",
              "Blockchain Security",
              "Research",
              "Distributed Systems",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  bg-background/70
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-muted-foreground
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >
            <Link
              href={buttonHref}
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-primary

                px-8
                py-4

                text-base
                font-semibold

                text-primary-foreground

                transition-all

                hover:scale-[1.02]
                hover:bg-primary/90
              "
            >
              {buttonText}

              <ArrowRight className="size-5" />
            </Link>

            <Link
              href={secondaryButtonHref}
              className="
                inline-flex
                items-center

                rounded-xl

                border

                px-8
                py-4

                text-base
                font-semibold

                transition-all

                hover:bg-muted
              "
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </AnimatedFade>
    </Section>
  );
}