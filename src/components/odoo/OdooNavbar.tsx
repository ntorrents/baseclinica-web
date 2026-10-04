"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function OdooNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/#apps", label: "Apps" },
    { href: "/precios", label: "Precios" },
    { href: "/#plataforma", label: "Plataforma" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-[var(--line)] bg-white/95 backdrop-blur-md" : "border-transparent bg-white"
      }`}
    >
      <div className="odoo-rail flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
          base<span className="text-[var(--brand)]">clinica</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <Link href="/contacto" className="odoo-btn-primary">
            Solicitar demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 text-base font-medium text-[var(--ink)]">
                {l.label}
              </Link>
            ))}
            <Link href="/contacto" className="odoo-btn-primary mt-2 text-center">
              Solicitar demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
