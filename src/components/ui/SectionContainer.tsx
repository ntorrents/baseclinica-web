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
      <div className="site-rail">{children}</div>
    </section>
  );
}
