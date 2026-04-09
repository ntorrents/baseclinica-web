import { NextResponse } from "next/server";
import { getContactInboxEmail } from "@/config/contact";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RESEND_API = "https://api.resend.com/emails";

const INTEREST_LABEL: Record<string, string> = {
  web: "Solo web corporativa",
  erp: "Solo app de gestión interna",
  integral: "Pack integral (web + app)",
  asesoria: "No estoy seguro / asesoría",
};

function sanitizeOneLine(s: string, max: number): string {
  return s.replace(/[\r\n\u0000]+/g, " ").trim().slice(0, max);
}

function buildEmailText(payload: {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
  receivedAt: string;
}): string {
  const interestLabel =
    (payload.interest && INTEREST_LABEL[payload.interest]) || payload.interest || "—";
  return [
    "Nuevo mensaje desde el formulario de contacto (BaseClinica web).",
    "",
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Teléfono: ${payload.phone || "—"}`,
    `Clínica / proyecto: ${payload.company || "—"}`,
    `Interés: ${interestLabel}`,
    "",
    "Mensaje:",
    payload.message,
    "",
    `Recibido (UTC): ${payload.receivedAt}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Cuerpo no válido" }, { status: 400 });
  }

  if (body.website && String(body.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Indica un nombre válido" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Correo no válido" }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "El mensaje debe tener al menos 10 caracteres" },
      { status: 400 },
    );
  }

  const payload = {
    name,
    email,
    phone: typeof body.phone === "string" ? body.phone.trim() : "",
    company: typeof body.company === "string" ? body.company.trim() : "",
    interest: typeof body.interest === "string" ? body.interest.trim() : "",
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = getContactInboxEmail();
  const from =
    process.env.RESEND_FROM?.trim() || "BaseClinica <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Falta RESEND_API_KEY. Simulación OK. Payload:", payload);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      {
        error:
          "El envío automático no está activo. Usa el enlace de al lado para escribirnos por correo.",
      },
      { status: 503 },
    );
  }

  const subject = sanitizeOneLine(`Contacto web: ${name}`, 200);
  const text = buildEmailText(payload);

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend", res.status, detail);
    return NextResponse.json(
      {
        error:
          "No se ha podido enviar el mensaje. Inténtalo más tarde o escríbenos con el enlace de al lado.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
