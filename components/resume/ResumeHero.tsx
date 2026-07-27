import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ResumeHeroProps {
  title: string;
  description: string;
}

export function ResumeHero({
  title,
  description,
}: ResumeHeroProps) {
  return (
    <AnimatedFade>
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle
          eyebrow="Resume"
          title={title}
          description={description}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/resume.pdf">
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedFade>
  );
}