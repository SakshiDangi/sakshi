interface CitationProps {
  id: string;
}

export function Citation({
  id,
}: CitationProps) {
  return (
    <sup
      className="
        mx-1
        text-primary
      "
    >
      [{id}]
    </sup>
  );
}