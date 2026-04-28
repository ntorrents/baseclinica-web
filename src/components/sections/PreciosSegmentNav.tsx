"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type PreciosTabId = "overview" | "web" | "erp" | "integral";

const LINKS: { id: PreciosTabId; href: string; label: string; hint: string }[] = [
  { id: "overview", href: "/precios", label: "Resumen", hint: "Tres líneas de producto" },
  { id: "web", href: "/precios#web", label: "Web", hint: "Presencia y SEO" },
  { id: "erp", href: "/precios#erp", label: "App", hint: "Gestión interna" },
  { id: "integral", href: "/precios#integral", label: "Integral", hint: "Web + app con ventaja" },
];

type PreciosSegmentNavProps = {
  active: PreciosTabId;
  onSelect: (tab: PreciosTabId) => void;
};

export function PreciosSegmentNav({ active, onSelect }: PreciosSegmentNavProps) {
  const pathname = usePathname();

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-sm shadow-slate-900/[0.04] backdrop-blur-sm sm:inline-flex sm:flex-wrap sm:items-center sm:gap-1">
      {LINKS.map((item) => {
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            scroll={false}
            onClick={(e) => {
              onSelect(item.id);
              if (pathname !== "/precios") return;
              e.preventDefault();
              if (item.id === "overview") {
                window.history.replaceState(null, "", "/precios");
                window.dispatchEvent(new CustomEvent("precios:location"));
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
              }
              window.location.hash = item.id;
            }}
            className={`flex min-h-[2.75rem] flex-col justify-center rounded-xl px-4 py-2 text-center transition sm:min-h-0 sm:min-w-[7.5rem] sm:py-2.5 ${
              isActive
                ? "bg-teal-700 text-white shadow-md shadow-teal-900/20"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span className="text-sm font-semibold">{item.label}</span>
            <span
              className={`text-[11px] font-medium leading-tight sm:mt-0.5 ${
                isActive ? "text-teal-100" : "text-slate-400"
              }`}
            >
              {item.hint}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
