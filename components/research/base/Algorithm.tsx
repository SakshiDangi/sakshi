interface AlgorithmProps {
  title: string;
  children: React.ReactNode;
}

export function Algorithm({
  title,
  children,
}: AlgorithmProps) {
  return (
    <div
      className="
        my-8
        rounded-xl
        border
        bg-muted/20
        p-6
      "
    >
      <h4
        className="
          mb-4
          font-semibold
        "
      >
        {title}
      </h4>

      <pre
        className="
          overflow-x-auto
          whitespace-pre-wrap
          font-mono
          text-sm
        "
      >
        {children}
      </pre>
    </div>
  );
}