"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/LocaleProvider";

const META = [
  {
    id: "web",
    href: "/precios#web",
    cardClass: "bg-[#1c1c1c] text-white border-white/10",
    accent: "text-[var(--accent)]",
  },
  {
    id: "erp",
    href: "/precios#erp",
    cardClass: "bg-[#f07a3a] text-[#111] border-transparent",
    accent: "text-[#111]/55",
  },
  {
    id: "combo",
    href: "/precios#combo",
    cardClass: "bg-[var(--brand)] text-white border-transparent",
    accent: "text-white/55",
  },
] as const;

export function SolutionSection() {
  const t = useT();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const items = useMemo(
    () =>
      t.solutions.items.map((item, i) => ({
        ...item,
        ...META[i],
        cta: { label: item.cta, href: META[i].href },
      })),
    [t],
  );

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible[0]) return;
        const idx = nodes.indexOf(visible[0].target as HTMLElement);
        if (idx >= 0) setActive(idx);
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [items]);

  const current = items[active] ?? items[0];

  return (
    <section id="soluciones" className="relative z-[20] scroll-mt-28 bg-[#141414] text-white">
      <div className="site-rail pt-16 sm:pt-24 lg:pt-28">
        <p className="section-eyebrow !text-white/55">{t.solutions.eyebrow}</p>
        <h2 className="font-display mt-5 max-w-3xl text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">
          {t.solutions.titleBefore} <span className="mark-accent">{t.solutions.titleMark}</span>
          {t.solutions.titleAfter}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg lg:text-xl">
          {t.solutions.lead}
        </p>
      </div>

      <div className="site-rail mt-12 grid gap-8 pb-20 sm:mt-14 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:pb-32">
        <div className="hidden lg:block">
          <div className="sticky top-28 flex min-h-[calc(100vh-8rem)] flex-col justify-center py-6 pr-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="max-w-lg"
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.18em] sm:text-[0.95rem] ${current.accent}`}>
                  {current.n} / {current.label}
                </p>
                <h3 className="font-display mt-4 text-[clamp(1.75rem,2.8vw,2.4rem)] font-extrabold leading-[1.1] tracking-tight">
                  {current.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">{current.body}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {current.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
                <Link href={current.cta.href} className="btn-ghost-light mt-8 inline-flex">
                  {current.cta.label}
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex gap-2">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.label}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() =>
                    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-[var(--brand)]" : "w-3 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {items.map((item, i) => (
            <article
              key={item.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`flex min-h-[min(70vh,560px)] flex-col justify-between rounded-[1.4rem] border p-6 sm:min-h-[70vh] sm:rounded-[1.6rem] sm:p-10 lg:min-h-[75vh] lg:p-12 ${item.cardClass}`}
            >
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.18em] lg:hidden ${
                    item.id === "erp" ? "text-[#111]/55" : "text-white/50"
                  }`}
                >
                  {item.n} / {item.label}
                </p>
                <p
                  className={`hidden text-sm font-semibold uppercase tracking-[0.18em] lg:block ${
                    item.id === "erp" ? "text-[#111]/55" : "text-white/50"
                  }`}
                >
                  {item.n} / {t.solutions.productWord}
                </p>
                <h3 className="font-display mt-5 text-[clamp(2.2rem,6vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.04em] sm:mt-6">
                  {Number(item.n)}. {item.label}
                </h3>
                <p
                  className={`mt-5 max-w-md text-base leading-relaxed sm:mt-6 sm:text-lg lg:hidden ${
                    item.id === "erp" ? "text-[#111]/75" : "text-white/70"
                  }`}
                >
                  {item.body}
                </p>
              </div>
              <Link
                href={item.cta.href}
                className={`mt-10 inline-flex w-fit rounded-full px-5 py-3 text-sm font-semibold transition ${
                  item.id === "erp"
                    ? "bg-[#111] text-white hover:bg-[#111]/85"
                    : "bg-white text-[#111] hover:bg-white/90"
                }`}
              >
                {item.cta.label} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
