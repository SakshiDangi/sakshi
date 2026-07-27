import type { Metadata } from "next";

import {
  about,
  mission,
} from "@/data/about";
import { skillCategories } from "@/data/skills";
import { stats } from "@/data/stats";
import { values } from "@/data/values";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutSkills } from "@/components/about/AboutSkills";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutValues } from "@/components/about/AboutValues";

import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my journey from mathematics education to AI-powered adaptive learning, educational technology, and secure software engineering.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />

      <AboutTimeline
        items={about.timeline}
      />

      <AboutSkills
        categories={skillCategories}
      />

      <AboutMission
        title={mission.title}
        description={mission.description}
      />

      <AboutStats
        stats={stats}
      />

      <AboutValues
        values={values}
      />

      <CTASection
        title="Let's Build Better Learning Systems"
        description="I'm interested in collaborating on adaptive learning, AI-powered education, learning analytics, blockchain infrastructure, and secure software systems that create measurable educational impact."
        buttonText="Get in Touch"
        buttonHref="/contact"
        secondaryButtonText="View Projects"
        secondaryButtonHref="/projects"
      />
    </>
  );
}