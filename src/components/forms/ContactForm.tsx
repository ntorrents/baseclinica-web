"use client";

import { FormEvent, useState } from "react";

const interests = [
  { value: "", label: "Selecciona una opción (opcional)" },
  { value: "web", label: "Solo web corporativa" },
  { value: "erp", label: "Solo ERP / CRM" },
  { value: "integral", label: "Pack integral (web + ERP)" },
  { value: "asesoria", label: "No estoy seguro / asesoría" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const body = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "No se ha podido enviar");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Prueba de nuevo.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate
      aria-describedby={errorMessage ? "contact-form-error" : undefined}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
            Nombre y apellidos
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition focus:border-teal-500 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition focus:border-teal-500 focus:ring-2"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700">
            Teléfono (opcional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition focus:border-teal-500 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700">
            Clínica / proyecto (opcional)
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition focus:border-teal-500 focus:ring-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-interest" className="block text-sm font-medium text-slate-700">
          Qué te interesa
        </label>
        <select
          id="contact-interest"
          name="interest"
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition focus:border-teal-500 focus:ring-2"
          defaultValue=""
        >
          {interests.map((o) => (
            <option key={o.value || "empty"} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={10}
          placeholder="Cuéntanos tu situación, número de profesionales, si ya tienes web o ERP..."
          className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/20 transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2"
        />
      </div>

      {errorMessage ? (
        <p id="contact-form-error" role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="text-sm font-medium text-teal-800" role="status" aria-live="polite">
          Mensaje recibido. Te responderemos lo antes posible.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <a
          href="mailto:hola@baseclinica.com"
          className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
        >
          O escríbenos directamente por correo
        </a>
      </div>

      <p className="text-xs text-slate-500">
        Al enviar este formulario aceptas que tratemos tus datos para responderte, conforme a la
        información legal de esta web. No usamos tus datos con fines comerciales sin consentimiento.
      </p>
    </form>
  );
}
