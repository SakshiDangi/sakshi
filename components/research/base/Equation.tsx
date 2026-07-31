interface EquationProps {
  children: React.ReactNode;
}

export function Equation({
  children,
}: EquationProps) {
  return (
    <div
      className="
        my-8
        overflow-x-auto
        rounded-xl
        border
        bg-muted/30
        p-6
        text-center
        font-mono
        text-lg
      "
    >
      {children}
    </div>
  );
}