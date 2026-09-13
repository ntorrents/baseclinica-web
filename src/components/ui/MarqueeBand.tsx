"use client";

import { useReducedMotion } from "framer-motion";

type MarqueeBandProps = {
  items: string[];
  className?: string;
  tone?: "light" | "brand";
};

export function MarqueeBand({ items, className = "", tone = "light" }: MarqueeBandProps) {
  const reduceMotion = useReducedMotion();
  const row = [...items, ...items];

  const toneClass =
    tone === "brand"
      ? "bg-[var(--brand)] text-white/90"
      : "border-y border-[var(--line)] bg-white/50 text-[var(--muted)]";

  return (
    <div className={`overflow-hidden py-4 ${toneClass} ${className}`} aria-hidden>
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reduceMotion ? "" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.18em]">
            {item}
            <span className={tone === "brand" ? "text-white/40" : "text-[var(--brand)]"}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
