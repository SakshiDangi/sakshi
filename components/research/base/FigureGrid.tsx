interface FigureGridProps {
  children: React.ReactNode;
}

export function FigureGrid({
  children,
}: FigureGridProps) {
  return (
    <div
      className="
        my-10
        grid
        gap-6
        md:grid-cols-2
      "
    >
      {children}
    </div>
  );
}