"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCalculator } from "@/contexts/CalculatorContext";

export function TimeCalculator() {
  const { 
    patients, 
    setPatients, 
    hoursPerWeek, 
    hoursPerMonth, 
    hoursPerYear,
    moneyPerMonth,
    moneyPerYear,
    missedPatients
  } = useCalculator();
  
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailCapture = () => {
    setShowEmailCapture(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `📊 Informe ROI personalizado - ${email}`,
          from_name: "Base Clínica - Calculadora ROI",
          email: email,
          message: `
INFORME ROI PERSONALIZADO - BASE CLÍNICA
========================================

DATOS DE TU CLÍNICA:
- Pacientes atendidos por semana: ${patients}

TIEMPO QUE ESTÁS PERDIENDO:
- Por semana: ${hoursPerWeek} horas
- Por mes: ${hoursPerMonth} horas  
- Por año: ${hoursPerYear} horas (${Math.round(hoursPerYear / 8)} días laborables completos)

COSTE DE OPORTUNIDAD:
- Por mes: ${moneyPerMonth.toLocaleString()}€
- Por año: ${moneyPerYear.toLocaleString()}€

PACIENTES QUE PODRÍAS ATENDER:
- ${missedPatients} pacientes adicionales por semana
- ${Math.round(missedPatients * 4.33)} pacientes adicionales por mes
- ${Math.round(missedPatients * 52)} pacientes adicionales por año

========================================

CÓMO BASE CLÍNICA RECUPERA ESTE TIEMPO:

✅ AUTOMATIZACIÓN DE CITAS
- Confirmaciones automáticas por SMS/WhatsApp
- Recordatorios 24h antes sin intervención manual
- Reprogramación online por el propio paciente
- AHORRO: ~4h/semana

✅ GESTIÓN DOCUMENTAL INTELIGENTE
- Expedientes digitales centralizados
- Búsqueda instantánea (vs. buscar carpetas físicas o carpetas en Windows)
- Historial completo en 1 clic
- AHORRO: ~3h/semana

✅ FACTURACIÓN AUTOMÁTICA
- Facturas generadas automáticamente tras cada cita
- Integración contable directa
- Control de impagos automatizado
- AHORRO: ~2.5h/semana

✅ FIRMA DIGITAL DE CONSENTIMIENTOS
- Consentimientos firmados desde tablet en consulta
- Almacenamiento legal automático
- Sin papeles, sin escáneres
- AHORRO: ~1.5h/semana

✅ GESTIÓN DE STOCK Y PEDIDOS
- Alertas automáticas de stock bajo
- Trazabilidad de lotes y caducidades
- Control de consumos por tratamiento
- AHORRO: ~1h/semana

✅ REPORTING AUTOMÁTICO
- Dashboard con KPIs actualizados en tiempo real
- Informes de facturación mensuales automáticos
- Análisis de rentabilidad por servicio
- AHORRO: ~1.5h/semana

========================================

PRÓXIMOS PASOS:

1️⃣ DEMO PERSONALIZADA (30 min)
   Ver en directo cómo funciona con datos reales de tu clínica

2️⃣ PRUEBA GRATIS 14 DÍAS
   Sin compromiso, sin tarjeta, con soporte incluido

3️⃣ IMPLEMENTACIÓN EXPRESS (< 1 semana)
   Migración de datos + formación + configuración personalizada

📞 Reserva tu demo: https://baseclinica.com/contacto
💰 Ver planes: https://baseclinica.com/precios

========================================

¿Preguntas? Responde a este email o llámanos.

Base Clínica - Gestión inteligente para clínicas del siglo XXI
          `.trim(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error al enviar el informe. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el informe. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative overflow-hidden rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-white via-brand-soft/30 to-white p-8 shadow-[0_32px_64px_-12px_rgba(59,130,246,0.25)] lg:p-10"
    >
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2">
          <span className="text-2xl">💡</span>
          <span className="text-sm font-bold uppercase tracking-wider text-brand-deep">
            Calculadora de Tiempo Perdido
          </span>
        </div>

        <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink lg:text-3xl">
          ¿Cuánto tiempo pierdes cada semana?
        </h3>
        
        <p className="mt-2 text-base text-muted">
          Descubre cuántas horas dedicas a tareas administrativas que podrías automatizar
        </p>

        {!showEmailCapture ? (
          <>
            <div className="mt-8">
              <label htmlFor="patients-slider" className="block text-sm font-semibold text-ink">
                Pacientes que atiendes por semana:
              </label>
              <div className="mt-4 flex items-center gap-4">
                <input
                  id="patients-slider"
                  type="range"
                  min="10"
                  max="150"
                  value={patients}
                  onChange={(e) => setPatients(Number(e.target.value))}
                  className="h-3 flex-1 appearance-none rounded-full bg-gray-200 accent-brand"
                  style={{
                    background: `linear-gradient(to right, var(--brand) 0%, var(--brand) ${((patients - 10) / 140) * 100}%, #e5e7eb ${((patients - 10) / 140) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <span className="font-display min-w-[4rem] text-right text-3xl font-bold text-brand">
                  {patients}
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-6 lg:p-8">
              <div className="flex items-start gap-4 border-b border-red-200/50 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500 text-2xl">
                  ⏱️
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900/70">Tiempo perdido semanalmente</p>
                  <p className="font-display mt-1 text-4xl font-black text-red-600">
                    {hoursPerWeek}h
                  </p>
                  <p className="mt-1 text-sm text-red-900/60">
                    = {hoursPerMonth}h/mes · {hoursPerYear}h/año
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-orange-200/50 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-2xl">
                  💸
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-900/70">Productividad perdida</p>
                  <p className="font-display mt-1 text-4xl font-black text-orange-600" suppressHydrationWarning>
                    {moneyPerMonth.toLocaleString()}€/mes
                  </p>
                  <p className="mt-1 text-sm text-orange-900/60" suppressHydrationWarning>
                    ~{moneyPerYear.toLocaleString()}€ al año en coste de oportunidad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-2xl">
                  📉
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-amber-900/70">Pacientes que podrías atender</p>
                  <p className="font-display mt-1 text-4xl font-black text-amber-600">
                    +{missedPatients}
                  </p>
                  <p className="mt-1 text-sm text-amber-900/60">
                    por semana con ese tiempo recuperado
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleEmailCapture}
              className="btn-primary mt-8 w-full justify-center text-base lg:text-lg"
            >
              📧 Envíame el informe completo detallado
              <span className="btn-arrow">→</span>
            </button>
          </>
        ) : !submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="calc-email" className="block text-sm font-semibold text-ink">
                Tu email profesional:
              </label>
              <input
                id="calc-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@clinica.com"
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar informe personalizado"}
              <span className="btn-arrow">→</span>
            </button>
            <p className="text-xs text-muted">
              📊 Recibirás un PDF con el análisis completo de tu clínica y recomendaciones específicas.
            </p>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-2xl bg-green-50 p-6 text-center"
          >
            <div className="text-4xl">✅</div>
            <p className="mt-3 font-semibold text-green-900">
              ¡Informe enviado!
            </p>
            <p className="mt-1 text-sm text-green-700">
              Revisa tu email en los próximos minutos
            </p>
          </motion.div>
        )}

        <p className="mt-6 text-center text-xs text-muted">
          * Cálculo basado en el tiempo promedio que dedican clínicas similares a tareas administrativas manuales
        </p>
      </div>
    </motion.div>
  );
}
