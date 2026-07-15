import type { ReactNode } from "react";

export function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div className={`mx-auto px-6 ${narrow ? "max-w-[760px]" : "max-w-6xl"} ${className}`}>
      {children}
    </div>
  );
}
