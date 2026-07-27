import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Homepage"
      className="
        inline-flex
        flex-col
        leading-none
        transition-opacity
        duration-200
        hover:opacity-90
      "
    >
      <span
        className="
          font-heading
          text-2xl
          lg:text-[30px]
          font-extrabold
          tracking-[-0.05em]
          text-foreground
        "
      >
        Sakshi
      </span>

      <span
        className="
          mt-1
          text-[11px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-primary
        "
      >
        AI Research • Blockchain Security 
      </span>
    </Link>
  );
}