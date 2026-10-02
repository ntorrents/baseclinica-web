"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_EMAIL } from "@/config/contact";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormStep = "initial" | "details" | "success";

export function SmartContactForm() {
  const [step, setStep] = useState<FormStep>("initial");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("demo");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Datos del paso 2 (opcionales)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleInitialSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && interest) {
      setStep("details");
    }
  };

  const handleFinalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Error de configuración. Por favor, contacta directamente.");
      return;
    }

    const interestLabels: Record<string, string> = {
      demo: "Ver el software en acción",
      presupuesto: "Presupuesto personalizado",
      experto: "Hablar con un experto",
    };

    // Inferir nombre del dominio del email si no se proporcionó
    const inferredName = name || email.split("@")[0].replace(/[._-]/g, " ");

    const payload = {
      access_key: accessKey,
      subject: `[BaseClinica] Contacto: ${inferredName}`,
      from_name: "BaseClinica Web",
      name: inferredName,
      email,
      phone: phone || "—",
      company: company || "—",
      interest: interestLabels[interest] || interest,
      message: message || "Sin mensaje adicional",
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
        setErrorMessage(data.message ?? "Error al enviar. Inténtalo de nuevo.");
        return;
      }

      setStep("success");
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Verifica tu internet o contáctanos directamente.");
    }
  };

  const handleBack = () => {
    setStep("initial");
    setStatus("idle");
    setErrorMessage(null);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {step === "initial" && (
          <motion.div
            key="step-initial"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-ink">
                Empieza aquí 👇
              </h3>
              <p className="mt-1 text-sm text-muted">
                Solo 2 datos y continuamos
              </p>
            </div>

            <form onSubmit={handleInitialSubmit} className="space-y-5">
              <div>
                <label htmlFor="smart-email" className="block text-sm font-semibold text-ink">
                  Tu email profesional
                </label>
                <div className="relative mt-2">
                  <input
                    id="smart-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@clinica.com"
                    className="w-full rounded-xl border border-line bg-[#f7f8fa] py-3 pl-12 pr-4 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink">
                  ¿Qué necesitas?
                </label>
                <div className="mt-3 space-y-2">
                  {[
                    { value: "demo", label: "Ver el software en acción", icon: "🎬" },
                    { value: "presupuesto", label: "Presupuesto personalizado", icon: "💰" },
                    { value: "experto", label: "Hablar con un experto", icon: "👤" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition ${
                        interest === opt.value
                          ? "border-brand bg-brand-soft/30 ring-2 ring-brand/20"
                          : "border-gray-200 bg-white hover:border-brand/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={opt.value}
                        checked={interest === opt.value}
                        onChange={(e) => setInterest(e.target.value)}
                        className="h-5 w-5 accent-brand"
                      />
                      <span className="text-xl">{opt.icon}</span>
                      <span className="flex-1 text-sm font-medium text-ink">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-base"
              >
                Continuar
                <span className="btn-arrow">→</span>
              </button>

              <p className="text-xs text-muted">
                🔒 Respetamos tu privacidad. Lee nuestra{" "}
                <Link href="/politica-privacidad" className="underline hover:text-ink">
                  política de privacidad
                </Link>
              </p>
            </form>
          </motion.div>
        )}

        {step === "details" && (
          <motion.div
            key="step-details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div>
              <button
                onClick={handleBack}
                className="mb-4 flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
              >
                ← Volver
              </button>
              
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-12 rounded-full bg-brand" />
                <div className="h-1.5 w-12 rounded-full bg-brand" />
                <span className="text-xs font-semibold text-brand">Paso 2/2</span>
              </div>
              
              <h3 className="font-display mt-4 text-xl font-bold text-ink">
                Últimos detalles (opcionales)
              </h3>
              <p className="mt-1 text-sm text-muted">
                Esto nos ayuda a preparar mejor tu consulta
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="smart-name" className="block text-sm font-medium text-ink">
                    Nombre
                  </label>
                  <input
                    id="smart-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Opcional"
                    className="mt-1.5 w-full rounded-lg border border-line bg-[#f7f8fa] px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                </div>
                <div>
                  <label htmlFor="smart-phone" className="block text-sm font-medium text-ink">
                    WhatsApp
                  </label>
                  <input
                    id="smart-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="mt-1.5 w-full rounded-lg border border-line bg-[#f7f8fa] px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="smart-company" className="block text-sm font-medium text-ink">
                  Nombre de tu clínica
                </label>
                <input
                  id="smart-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Opcional"
                  className="mt-1.5 w-full rounded-lg border border-line bg-[#f7f8fa] px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              </div>

              <div>
                <label htmlFor="smart-message" className="block text-sm font-medium text-ink">
                  ¿Algo más que quieras contarnos?
                </label>
                <textarea
                  id="smart-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Opcional"
                  className="mt-1.5 w-full resize-y rounded-lg border border-line bg-[#f7f8fa] px-3 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {errorMessage && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar solicitud"}
                <span className="btn-arrow">→</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 border-t border-line pt-4 text-sm">
              <a
                href={`https://wa.me/34684347483`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#128C7E] hover:underline"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <span className="text-muted">o</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-brand hover:underline"
              >
                Email
              </a>
            </div>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div
            key="step-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-8 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                ¡Solicitud enviada!
              </h3>
              <p className="mt-2 text-muted">
                Te contactaremos en las próximas horas para {interest === "demo" ? "programar la demo" : interest === "presupuesto" ? "enviarte el presupuesto" : "hablar contigo"}.
              </p>
            </div>

            <div className="rounded-xl bg-brand-soft/30 p-4 text-sm text-brand-deep">
              <p className="font-semibold">Mientras tanto:</p>
              <ul className="mt-2 space-y-1 text-left">
                <li>✓ Revisa tu email (también spam)</li>
                <li>✓ Prepara tus dudas sobre gestión clínica</li>
                <li>✓ Explora nuestra <Link href="/precios" className="underline">página de precios</Link></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
