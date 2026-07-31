import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: FigureProps) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full rounded-2xl border"
      />

      <figcaption
        className="
          mt-3
          text-center
          text-sm
          italic
          text-muted-foreground
        "
      >
        {caption}
      </figcaption>
    </figure>
  );
}