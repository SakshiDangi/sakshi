import type { Project } from "@/types";


import {
  ProjectHero,
  ProblemCard,
  SolutionCard,
  ArchitectureTimeline,
  FeaturesGrid,
  TechnologySection,
  ChallengesCard,
  FutureRoadmap,
  ProjectGallery,
  ProjectLinks,
} from "@/components/projects";


interface ProjectCaseStudyProps {

  project: Project;

}



export function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {


return (

<div className="space-y-20">


{/* Hero */}

<ProjectHero
project={project}
/>



{/* Problem */}

<ProblemCard
problem={project.problem}
/>



{/* Solution */}

<SolutionCard
solution={project.solution}
/>



{/* Architecture */}

<ArchitectureTimeline
architecture={
project.architecture
}
/>



{/* Features */}

<FeaturesGrid
features={
project.features
}
/>



{/* Technologies */}

<TechnologySection
technologies={
project.technologies
}
/>



{/* Challenges */}

<ChallengesCard
challenges={
project.challenges
}
/>



{/* Future */}

<FutureRoadmap
items={
project.future
}
/>



{/* Gallery */}

<ProjectGallery
 images={project.gallery}
/>



{/* Links */}

<ProjectLinks
github={
project.github
}
demo={
project.demo
}
/>


</div>

);

}