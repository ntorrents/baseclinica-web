"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#portfolio", label: "Web" },
  { href: "#erp", label: "ERP" },
  { href: "#pricing", label: "Precios" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-teal-800"
          >
            <span className="text-teal-700">Base</span>Clinica
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-teal-800"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <a
              href="#contacto"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98]"
            >
              Solicitar demo
            </a>
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
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-900"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-slate-100 pt-3">
                  <a
                    href="#contacto"
                    className="block rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    Solicitar demo
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
