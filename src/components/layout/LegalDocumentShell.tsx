import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";

type LegalDocumentShellProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalDocumentShell({ title, children }: LegalDocumentShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fdfa,_#f8fafc_45%,_#ffffff_80%)]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12 pb-20 lg:px-8">
        <nav className="mb-8 text-sm text-slate-600">
          <Link href="/" className="font-medium text-teal-800 hover:text-teal-950">
            Inicio
          </Link>
          <span className="mx-2 text-slate-400" aria-hidden>
            /
          </span>
          <span className="text-slate-900">{title}</span>
        </nav>
        <article className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-900/5 backdrop-blur-sm sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
          <div className="prose-legal mt-8 space-y-5 text-[15px] leading-relaxed text-slate-700">
            {children}
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
