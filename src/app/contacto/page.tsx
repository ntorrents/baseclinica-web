import type { Metadata } from "next";
import { ContactoPageContent } from "@/components/forms/ContactoPageContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu clínica y te proponemos el siguiente paso. Diagnóstico rápido sin compromiso.",
};

export default function ContactoPage() {
  return <ContactoPageContent />;
}
