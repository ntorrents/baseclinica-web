"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState, useEffect } from "react";
import { CONTACT_EMAIL } from "@/config/contact";
import { useT } from "@/i18n/LocaleProvider";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[var(--line)] bg-[#f7f8fa] px-3 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string | null>(null);

  const interestLabel = useMemo(() => {
    const map: Record<string, string> = {};
    for (const o of t.contactForm.interests) {
      if (o.value) map[o.value] = o.label;
    }
    return map;
  }, [t]);

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
      setErrorMessage(t.contactForm.missingKey);
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("botcheck") ?? "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    let finalMessage = String(fd.get("message") ?? "");
    if (selectedModules) {
      finalMessage = `[CONFIG]\nModules: ${selectedModules}\n-------------------\n\n${finalMessage}`;
    }

    const interest = String(fd.get("interest") ?? "");
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    const payload = {
      access_key: accessKey,
      subject: `${t.contactForm.subjectPrefix} ${name}`,
      from_name: "BaseClinica Web",
      name,
      email,
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      interest: interestLabel[interest] || interest || "—",
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
        setErrorMessage(data.message ?? t.contactForm.sendFail);
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t.contactForm.networkError);
    }
  }

  const waHref = `https://wa.me/34684347483?text=${encodeURIComponent(t.cta.waText)}`;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate
      aria-describedby={errorMessage ? "contact-form-error" : undefined}
    >
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
            <strong>✓ </strong>
            {t.contactForm.savedConfig.replace(
              "{count}",
              String(selectedModules.split(",").length),
            )}
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--ink)]">
            {t.contactForm.name}
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--ink)]">
            {t.contactForm.email}
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
            {t.contactForm.phone}
          </label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--ink)]">
            {t.contactForm.company}
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
          {t.contactForm.interest}
        </label>
        <select id="contact-interest" name="interest" className={fieldClass} defaultValue="">
          {t.contactForm.interests.map((o) => (
            <option key={o.value || "empty"} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--ink)]">
          {t.contactForm.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={10}
          placeholder={t.contactForm.placeholder}
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
          {t.contactForm.success}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? t.contactForm.sending : t.contactForm.send}
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/20"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          {t.contactForm.wa}
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-semibold text-[var(--brand)] underline decoration-[var(--brand)]/30 underline-offset-4 hover:text-[var(--brand-deep)]"
        >
          {t.contactForm.orEmail}
        </a>
      </div>

      <p className="text-xs text-[var(--muted)]">
        {t.contactForm.privacyBefore}{" "}
        <Link
          href="/politica-privacidad"
          className="underline decoration-[var(--line)] underline-offset-2 hover:text-[var(--ink)]"
        >
          {t.contactForm.privacyLink}
        </Link>
        {t.contactForm.privacyAfter}
      </p>
    </form>
  );
}
