import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { CONTACT_EMAIL } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu clínica y te proponemos el siguiente paso. Diagnóstico rápido sin compromiso.",
};

export default function ContactoPage() {
  return (
    <div className="page-atmosphere min-h-screen text-[var(--ink)]">
      <Navbar />
      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-28 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:pt-36">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
              Cuéntanos tu clínica
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]">
              Respuesta en horario laboral. Si prefieres llamada o WhatsApp, indícalo en el mensaje.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                "Diagnóstico rápido sin compromiso",
                "Mismo interlocutor para Pack Integral",
                "Presupuesto cerrado antes de empezar",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[var(--ink)]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-3 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
              <p>
                Correo:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/34684347483?text=Hola,%20quería%20información%20sobre%20BaseClinica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]"
                >
                  +34 684 347 483
                </a>
              </p>
              <p className="pt-2">
                <Link href="/" className="underline underline-offset-4 hover:text-[var(--ink)]">
                  ← Volver al inicio
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_28px_70px_-36px_rgba(20,24,31,0.35)] sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
