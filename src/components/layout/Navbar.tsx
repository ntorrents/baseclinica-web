"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_LINKS = [
  { href: "/#erp-solution", label: "Software ERP" },
  { href: "/precios", label: "Precios" },
  { href: "/precios#configurador", label: "Configurador" },
  { href: "/precios#proceso", label: "Cómo trabajamos" },
  { href: "/precios#faq", label: "Preguntas Frecuentes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/70 py-3 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white transition-opacity group-hover:opacity-90">
              <span className="text-blue-500">Base</span>Clinica
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
            >
              Contacto
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 transition-colors md:hidden"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-slate-950 p-6 shadow-2xl shadow-black border-l border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <Link
                  href="/"
                  className="text-xl font-black tracking-tight text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-blue-500">Base</span>Clinica
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-white/10 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 py-8 flex flex-col gap-6">
                {MAIN_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-bold transition-colors ${
                      pathname === link.href
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <a
                  href="/#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-500"
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
