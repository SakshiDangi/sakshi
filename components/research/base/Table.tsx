interface TableProps {
  title?: string;
  children: React.ReactNode;
}

export function Table({
  title,
  children,
}: TableProps) {
  return (
    <div className="my-10 overflow-x-auto">
      {title && (
        <h4 className="mb-4 font-semibold">
          {title}
        </h4>
      )}

      <table
        className="
          w-full
          border-collapse
          rounded-xl
          border
        "
      >
        {children}
      </table>
    </div>
  );
}