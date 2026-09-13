"use client";

import Link from "next/link";
import { FormEvent, useState, useEffect } from "react";
import { CONTACT_EMAIL } from "@/config/contact";

const interests = [
  { value: "", label: "Selecciona una opción (opcional)" },
  { value: "web", label: "Solo web corporativa" },
  { value: "erp", label: "Solo app de gestión interna" },
  { value: "integral", label: "Pack integral (web + app de gestión)" },
  { value: "asesoria", label: "No estoy seguro / asesoría" },
];

const INTEREST_LABEL: Record<string, string> = {
  web: "Solo web corporativa",
  erp: "Solo app de gestión interna",
  integral: "Pack integral (web + app de gestión)",
  asesoria: "No estoy seguro / asesoría",
};

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[var(--line)] bg-[#f7f8fa] px-3 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string | null>(null);

  useEffect(() => {
    const checkParams = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedModules(params.get("modules"));
    };

    checkParams();

    window.addEventListener("popstate", checkParams);

    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      checkParams();
    };

    return () => {
      history.pushState = originalPushState;
      window.removeEventListener("popstate", checkParams);
    };
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Falta la clave de Web3Forms. Configura NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
      );
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: si un bot lo rellena, fingimos éxito sin enviar
    if (String(fd.get("botcheck") ?? "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    let finalMessage = String(fd.get("message") ?? "");
    if (selectedModules) {
      finalMessage = `[CONFIGURACIÓN DEL USUARIO]\nMódulos seleccionados: ${selectedModules}\n-------------------\n\n${finalMessage}`;
    }

    const interest = String(fd.get("interest") ?? "");
    const interestLabel = INTEREST_LABEL[interest] || interest || "—";
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    const payload = {
      access_key: accessKey,
      subject: `Contacto BaseClinica: ${name}`,
      from_name: "BaseClinica Web",
      name,
      email,
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      interest: interestLabel,
      message: finalMessage,
      botcheck: false,
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message ?? "No se ha podido enviar");
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
      {/* Honeypot anti-spam (Web3Forms) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden
      />

      {selectedModules && (
        <div className="mb-4 rounded-xl border border-[var(--brand)]/20 bg-[var(--brand-soft)] p-4">
          <p className="text-sm text-[var(--brand-deep)]">
            <strong>✓ Hemos guardado tu configuración.</strong> Se adjuntará a tu mensaje
            (módulos: {selectedModules.split(",").length}).
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--ink)]">
            Nombre y apellidos
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--ink)]">
            Correo electrónico
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--ink)]">
            Teléfono (opcional)
          </label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--ink)]">
            Clínica / proyecto (opcional)
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-interest" className="block text-sm font-medium text-[var(--ink)]">
          Qué te interesa
        </label>
        <select id="contact-interest" name="interest" className={fieldClass} defaultValue="">
          {interests.map((o) => (
            <option key={o.value || "empty"} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--ink)]">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={10}
          placeholder="Cuéntanos tu situación, número de profesionales, si ya tienes web o app de gestión..."
          className={`${fieldClass} resize-y placeholder:text-[var(--muted)]`}
        />
      </div>

      {errorMessage ? (
        <p id="contact-form-error" role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="text-sm font-medium text-[var(--success)]" role="status" aria-live="polite">
          Mensaje recibido. Te responderemos lo antes posible.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-semibold text-[var(--brand)] underline decoration-[var(--brand)]/30 underline-offset-4 hover:text-[var(--brand-deep)]"
        >
          O escríbenos directamente por correo
        </a>
      </div>

      <p className="text-xs text-[var(--muted)]">
        Al enviar aceptas el tratamiento de tus datos para responderte, según nuestra{" "}
        <Link
          href="/politica-privacidad"
          className="underline decoration-[var(--line)] underline-offset-2 hover:text-[var(--ink)]"
        >
          Política de privacidad
        </Link>
        .
      </p>
    </form>
  );
}
