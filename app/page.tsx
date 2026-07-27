import type { Metadata } from "next";


import { HeroSection } from "@/components/sections/HeroSection";

import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";

import { ResearchPreviewSection } from "@/components/sections/ResearchPreviewSection";

import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";

import { CTASection } from "@/components/sections/CTASection";



export const metadata: Metadata = {

  title:
    "Blockchain Security Researcher | AI Learning Systems Engineer",


  description:
    "Portfolio of a blockchain security researcher and AI engineer building secure cross-chain infrastructure, adaptive learning platforms, and verifiable digital systems.",


  keywords:[

    "Blockchain Security",

    "Bridge Security",

    "Smart Contract Auditing",

    "AI Education",

    "Adaptive Learning",

    "Learning Analytics",

    "Web3 Security"

  ],

};




export default function HomePage(){


return (

<main>

<HeroSection />

<ProjectsPreviewSection />

<ResearchPreviewSection />

<AboutPreviewSection />

<CTASection />

</main>

);


}