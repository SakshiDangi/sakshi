import type { Metadata } from "next";

import {
  professionalSummary,
  experience,
  education,
  researchInterests,
  resumeSkills,
  awards,
} from "@/data/resume";

import { Section } from "@/components/ui/Section";

import { ResumeHero } from "@/components/resume/ResumeHero";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { EducationSection } from "@/components/resume/EducationSection";
import { SkillsSummary } from "@/components/resume/SkillsSummary";
import { AwardsSection } from "@/components/resume/AwardsSection";
import { DownloadResume } from "@/components/resume/DownloadResume";
import { ResearchInterests } from "@/components/resume/ResearchInterest";

export const metadata: Metadata = {
  title: "Resume",

  description:
    "Resume of an AI engineer, educational technologist, mathematics educator, and blockchain security researcher.",
};


export default function ResumePage() {
  return (
    <>
      <Section spacing="lg">
        <ResumeHero
          title={professionalSummary.title}
          description={
            professionalSummary.description
          }
        />
      </Section>


      <Section>
        <ExperienceTimeline
          experience={experience}
        />
      </Section>


      <Section>
        <EducationSection
          education={education}
        />
      </Section>


      <Section>
        <SkillsSummary
          skills={resumeSkills}
        />
      </Section>


      <Section>
        <ResearchInterests
          interests={researchInterests}
        />
      </Section>


      <Section>
        <AwardsSection
          awards={awards}
        />
      </Section>


      <Section spacing="lg">
        <DownloadResume />
      </Section>
    </>
  );
}