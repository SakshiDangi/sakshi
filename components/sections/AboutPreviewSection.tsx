import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { about } from "@/data/about";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutPreviewSection() {
  return (
    <Section spacing="xl">
      <AnimatedFade>
        <SectionTitle
          eyebrow="About"
          align="center"
          title="Engineering AI Systems"
          description="
            Combining mathematics, artificial intelligence,
            blockchain security, and educational technology
            to build research-driven software that is practical,
            transparent, and secure.
          "
        />

        {/* About Cards */}

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          <AboutCard
            badge="Education"
            title="Academic Foundation"
            content={about.story.paragraphs[0]}
          />

          <AboutCard
            badge="Engineering"
            title="Building Products"
            content={about.story.paragraphs[1]}
          />

          <AboutCard
            badge="Research"
            title="Current Focus"
            content="
              Designing AI-powered learning platforms,
              blockchain infrastructure,
              and secure distributed systems.
            "
          />
        </div>

        {/* Metrics */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            lg:grid-cols-4
          "
        >
          {about.stats.map((stat) => (
            <MetricCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* CTA */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-border/60
            bg-muted/30
            px-8
            py-10
            lg:flex
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              Want to know the complete journey?
            </h3>

            <p
              className="
                mt-3
                text-muted-foreground
                leading-7
              "
            >
              Learn how my background in mathematics evolved into
              AI research, blockchain security, and building
              trustworthy educational technology.
            </p>
          </div>

          <Link
            href="/about"
            className="
              group         
              mt-8          
              inline-flex
              items-center
              gap-3         
              text-base
              font-semibold         
              text-primary         
              transition-colors         
              hover:text-primary/80         
              lg:mt-0
            "
          >
            <span>Read My Story</span>
          
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center         
                rounded-full         
                bg-primary/10         
                transition-all
                duration-300    
                group-hover:bg-primary
                group-hover:text-primary-foreground
                group-hover:translate-x-1
              "
            >
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </AnimatedFade>
    </Section>
  );
}

interface AboutCardProps {
  badge: string;
  title: string;
  content: string;
}

function AboutCard({
  badge,
  title,
  content,
}: AboutCardProps) {
  return (
    <article
      className="
        group
        relative
        rounded-2xl
        border
        border-border/60
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
      "
    >
      <div
        className="
          absolute
          left-6
          top-0
          h-1
          w-14
          rounded-full
          bg-primary
          opacity-80
        "
      />

      <span
        className="
          mt-3
          inline-flex
          rounded-full
          bg-primary/10
          px-3
          py-1
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-primary
        "
      >
        {badge}
      </span>

      <h3
        className="
          mt-5
          text-xl
          font-bold
          tracking-tight
          transition-colors
          group-hover:text-primary
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          text-[15px]
          leading-7
          text-muted-foreground
        "
      >
        {content}
      </p>
    </article>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({
  value,
  label,
}: MetricCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border/60
        bg-background
        px-5
        py-5
        text-center
        transition-colors
        duration-300
        hover:border-primary/30
      "
    >
      <div
        className="
          text-2xl
          font-bold
          text-primary
        "
      >
        {value}
      </div>

      <p
        className="
          mt-1
          text-sm
          text-muted-foreground
        "
      >
        {label}
      </p>
    </div>
  );
}