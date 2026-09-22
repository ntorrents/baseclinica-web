"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioCase } from "@/types/landing";
import { useT } from "@/i18n/LocaleProvider";

type PortfolioProps = {
  data: PortfolioCase;
};

export function Portfolio({ data }: PortfolioProps) {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="ejemplo" className="py-16 sm:py-24 lg:py-28">
      <div className="site-rail relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14">
          <div>
            <p className="section-eyebrow">{t.presence.eyebrow}</p>
            <h2 className="font-display mt-5 text-[clamp(1.85rem,3.8vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-[var(--ink)]">
              {t.presence.titleBefore}{" "}
              <span className="mark-accent">{t.presence.titleMark}</span>
              {t.presence.titleAfter}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg lg:text-xl">
              {t.presence.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex"
              >
                {t.presence.exampleCta}
                <span className="btn-arrow">→</span>
              </a>
              <Link
                href="/precios#web"
                className="text-sm font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
              >
                {t.presence.priceCta}
              </Link>
            </div>
          </div>

          <ul className="grid gap-5 sm:gap-6">
            {t.presence.points.map((p, i) => (
              <motion.li
                key={p.n}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-t border-[var(--line)] pt-4"
              >
                <p className="font-mono text-xs font-semibold tabular-nums text-[var(--brand)]">
                  {p.n}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-bold tracking-tight text-[var(--ink)] sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="box-plain relative z-[20] mt-10 overflow-hidden p-2 sm:mt-12 sm:p-3"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#efece6] sm:aspect-[16/9]">
            <Image
              src={data.image}
              alt={t.presence.altImage}
              fill
              className="object-cover object-top"
              sizes="(max-width:1024px) 100vw, 76rem"
              quality={100}
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
