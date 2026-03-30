import { NextResponse } from "next/server";

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

  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", payload);
  }

  return NextResponse.json({ ok: true });
}
