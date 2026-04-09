/** Correo de contacto público (formulario, enlaces mailto y destino del API). */
export const CONTACT_EMAIL = "hola@baseclinica.com";

export function getContactInboxEmail(): string {
  const fromEnv = process.env.CONTACT_TO_EMAIL?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : CONTACT_EMAIL;
}
