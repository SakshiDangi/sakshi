interface PaperSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export function PaperSection({
  title,
  id,
  children,
}: PaperSectionProps) {
  return (
    <section
      id={id}
      className="my-16 scroll-mt-24"
    >
      <h2
        className="
          mb-8
          text-3xl
          font-bold
        "
      >
        {title}
      </h2>

      {children}
    </section>
  );
}