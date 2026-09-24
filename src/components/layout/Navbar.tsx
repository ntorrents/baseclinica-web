"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LocaleSwitcher, LocaleSwitcherDark } from "@/components/ui/LocaleSwitcher";
import { useT } from "@/i18n/LocaleProvider";

function BrandMark({ invert = false }: { invert?: boolean }) {
  return (
    <span
      className={`font-display text-[1.35rem] font-bold tracking-tight sm:text-[1.45rem] ${
        invert ? "text-white" : "text-[var(--ink)]"
      }`}
    >
      base<span className="text-[var(--brand)]">clinica</span>
    </span>
  );
}

function MenuGlyph({ open }: { open?: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M4.5 4.5l9 9M13.5 4.5l-9 9"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="11" cy="11" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const t = useT();
  const links = t.nav.links;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(0);
  const pathname = usePathname();
  const panelColor = links[hoverIdx]?.color ?? links[0].color;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("nav-menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("nav-menu-open");
    };
  }, [open]);

  return (
    <>
      <header className={`pointer-events-none fixed top-0 w-full ${open ? "z-[60]" : "z-50"}`}>
        <div
          className={`mx-auto flex max-w-[76rem] items-center px-6 py-4 sm:px-10 lg:px-14 xl:px-[4.5rem] transition-all duration-300 ${
            scrolled || open ? "justify-end" : "justify-between"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!scrolled && !open && (
              <motion.div
                key="brand"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto"
              >
                <Link href="/">
                  <BrandMark />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5">
            <AnimatePresence mode="wait" initial={false}>
              {!scrolled && !open ? (
                <motion.div
                  key="locale-normal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <LocaleSwitcher className="pointer-events-auto" />
                </motion.div>
              ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              {!scrolled && !open && (
                <motion.div
                  key="hablar"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden sm:block"
                >
                  <Link href="/contacto" className="btn-primary !py-2.5 !px-4 text-sm">
                    {t.nav.speak}
                    <span className="btn-arrow">→</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                open
                  ? "border-white/80 bg-transparent text-white"
                  : "border-[var(--ink)]/20 bg-[var(--background)]/90 text-[var(--ink)] backdrop-blur-md"
              }`}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
            >
              <MenuGlyph open={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex"
          >
            <div className="relative flex min-h-full min-h-[100dvh] flex-1 flex-col overflow-hidden bg-[#2a2a2a] text-white">
              <div className="flex items-center justify-between px-5 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
                <Link href="/" onClick={() => setOpen(false)} className="py-3">
                  <BrandMark invert />
                </Link>
                <span className="h-12 w-12" aria-hidden />
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 px-5 py-6 sm:px-10 lg:px-16">
                {links.map((link, i) => {
                  const active = hoverIdx === i;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + i * 0.035 }}
                      onMouseEnter={() => setHoverIdx(i)}
                      onFocus={() => setHoverIdx(i)}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-3 py-1 sm:gap-5"
                      >
                        <span
                          className="shrink-0 font-mono text-xs font-semibold tabular-nums sm:text-sm"
                          style={{ color: link.color }}
                        >
                          {link.n}
                        </span>
                        <span
                          className={`font-display text-[clamp(2.2rem,10vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] transition-colors ${
                            active ? "text-white" : "text-white/35"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="grid gap-4 border-t border-white/10 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-xs uppercase tracking-[0.14em] text-white/45 sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:px-10">
                <div>
                  <p>{t.nav.email}</p>
                  <a
                    href="mailto:hola@baseclinica.com"
                    className="mt-1 block break-all normal-case tracking-normal text-white"
                  >
                    hola@baseclinica.com
                  </a>
                </div>
                <div>
                  <p>{t.nav.whatsapp}</p>
                  <a
                    href="https://wa.me/34684347483"
                    className="mt-1 block normal-case tracking-normal text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +34 684 347 483
                  </a>
                </div>
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <LocaleSwitcherDark />
                  <Link
                    href="/contacto"
                    onClick={() => setOpen(false)}
                    className="btn-ghost-light !mt-0 !inline-flex !px-4 !py-2 text-xs normal-case tracking-normal"
                  >
                    {t.nav.goContact}
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              aria-hidden
              className="hidden w-[min(32vw,380px)] shrink-0 lg:block"
              animate={{ backgroundColor: panelColor }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
