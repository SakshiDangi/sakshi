import Image from "next/image";

import type {
  ProjectGalleryImage,
} from "@/types/project";

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
}

export function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <section
      className="
        grid
        gap-6
        md:grid-cols-2
      "
    >
      {images.map((image) => (
        <div
          key={image.src}
          className="
            relative
            aspect-video
            overflow-hidden
            rounded-2xl
            border
            bg-muted
            shadow-sm
          "
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </section>
  );
}