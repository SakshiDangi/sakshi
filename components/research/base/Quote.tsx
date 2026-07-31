interface QuoteProps {
  children: React.ReactNode;
  author?: string;
}

export function Quote({
  children,
  author,
}: QuoteProps) {
  return (
    <blockquote
      className="
        my-8
        border-l-4
        pl-6
        italic
      "
    >
      <p>{children}</p>

      {author && (
        <footer className="mt-4 text-sm">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}