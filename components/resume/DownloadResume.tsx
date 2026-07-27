import { Download } from "lucide-react";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Button } from "@/components/ui/button";

export function DownloadResume() {
  return (
    <AnimatedFade>
      <section
        className="
          rounded-2xl
          border
          bg-card
          p-8
          text-center
          shadow-sm
        "
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">
            Download Resume
          </h2>

          <p
            className="
              mt-4
              leading-7
              text-muted-foreground
            "
          >
            Download a detailed version of my experience,
            technical skills, educational technology work,
            and research interests.
          </p>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
            >
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </Button>
            </a>
          </div>
        </div>
      </section>
    </AnimatedFade>
  );
}