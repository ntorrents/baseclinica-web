"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_LINKS = [
  { href: "/#elige", label: "Soluciones" },
  { href: "/#erp-solution", label: "Demo ERP" },
  { href: "/#portfolio", label: "Caso web" },
  { href: "/precios", label: "Precios" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const onPrecios = pathname.startsWith("/precios");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--line)]/80 bg-white/80 py-3 shadow-[0_10px_40px_-24px_rgba(20,24,31,0.25)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
          <Link href="/" className="group shrink-0">
            <span className="font-display text-xl font-extrabold tracking-tight text-[var(--ink)]">
              <span className="text-[var(--brand)]">Base</span>Clinica
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {MAIN_LINKS.map((link) => {
              const isActive =
                link.href === "/precios" ? onPrecios : pathname === "/" && false;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[var(--brand)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="/precios#configurador"
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-bold transition ${
                onPrecios
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand-deep)]"
                  : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
              }`}
            >
              <svg className="h-4 w-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h4M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
              <span className="hidden sm:inline">Configurar precio</span>
              <span className="sm:hidden">Configurar</span>
            </Link>
            <Link href="/contacto" className="btn-primary !px-4 !py-2">
              Contacto
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)] hover:bg-black/5 md:hidden"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--ink)]/40 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-[var(--line)] bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-6">
                <Link
                  href="/"
                  className="font-display text-xl font-extrabold text-[var(--ink)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[var(--brand)]">Base</span>Clinica
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-[var(--muted)] hover:bg-black/5"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-5 py-8">
                {MAIN_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display text-2xl font-bold text-[var(--ink)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="my-2 border-t border-[var(--line)] pt-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Herramienta aparte
                  </p>
                  <Link
                    href="/precios#configurador"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl border border-[var(--brand)] bg-[var(--brand-soft)] px-4 py-3.5 font-display text-lg font-bold text-[var(--brand-deep)]"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h4M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
                    </svg>
                    Configurar precio
                  </Link>
                </div>
              </div>

              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full py-4 text-base"
              >
                Contacto
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
