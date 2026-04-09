"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const preciosAnchors = [
  { href: "/precios", section: "overview" as const, label: "Resumen" },
  { href: "/precios#web", section: "web" as const, label: "Web" },
  { href: "/precios#erp", section: "erp" as const, label: "App" },
  { href: "/precios#integral", section: "integral" as const, label: "Integral" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onPreciosPage = pathname === "/precios";
  const [preciosSection, setPreciosSection] = useState<string>("overview");

  useEffect(() => {
    if (!onPreciosPage) return;
    const read = () => {
      const h = window.location.hash.slice(1).toLowerCase();
      if (h === "web" || h === "erp" || h === "integral") setPreciosSection(h);
      else setPreciosSection("overview");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [onPreciosPage]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-[100]"
    >
      <div className="border-b border-white/20 bg-white/65 shadow-sm shadow-slate-900/5 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8"
          aria-label="Principal"
        >
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06, duration: 0.35 }}
          >
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-teal-800"
            >
              <span className="text-teal-700">Base</span>Clinica
            </Link>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.35 }}
            >
              <Link
                href="/precios"
                className={`text-sm font-semibold transition hover:text-teal-800 ${
                  onPreciosPage ? "text-teal-800" : "text-slate-700"
                }`}
              >
                Precios
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.35 }}
            >
              <Link
                href="/#contacto"
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98]"
              >
                Contacto
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-100 bg-white/90 backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                <li>
                  <Link
                    href="/precios"
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                      onPreciosPage
                        ? "bg-teal-50 text-teal-900"
                        : "font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-900"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Precios
                  </Link>
                </li>
                {onPreciosPage ? (
                  <>
                    <li className="px-3 pt-1 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                      Secciones
                    </li>
                    {preciosAnchors.map((a) => (
                      <li key={a.href}>
                        <a
                          href={a.href}
                          className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                            preciosSection === a.section
                              ? "bg-teal-100 text-teal-950"
                              : "text-slate-600 hover:bg-teal-50 hover:text-teal-900"
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {a.label}
                        </a>
                      </li>
                    ))}
                  </>
                ) : null}
                <li className="mt-2 border-t border-slate-100 pt-3">
                  <Link
                    href="/#contacto"
                    className="block rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {onPreciosPage ? (
        <nav
          className="border-t border-teal-100/80 bg-teal-50/50 backdrop-blur-sm"
          aria-label="Secciones de precios"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-2 gap-y-1 px-6 py-2 text-[11px] font-bold uppercase tracking-wide lg:px-8">
            {preciosAnchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className={`rounded-md px-2.5 py-1 transition ${
                  preciosSection === a.section
                    ? "bg-teal-700 text-white"
                    : "text-teal-900 hover:bg-white/90 hover:text-teal-950"
                }`}
              >
                {a.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </motion.header>
  );
}
