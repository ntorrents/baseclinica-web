import { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative z-10 py-20 sm:py-24 ${id ? "scroll-mt-24" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
