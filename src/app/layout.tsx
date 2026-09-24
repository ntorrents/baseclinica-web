import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LocaleProvider } from "@/i18n/LocaleProvider";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://baseclinica.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Base Clínica | Sistema Operativo Completo para Clínicas Médico-Estéticas",
    template: "%s | Base Clínica",
  },
  description:
    "El sistema operativo completo para tu clínica: desde la captación de pacientes hasta la presentación de impuestos en Hacienda. Software de gestión clínica con firma digital, trazabilidad y autopiloto fiscal AEAT.",
  icons: {
    icon: "/bc-icon.svg",
    shortcut: "/bc-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Base Clínica",
    title: "Base Clínica | Sistema Operativo Completo para Clínicas Médico-Estéticas",
    description:
      "Software de gestión clínica integral: historiales, firma digital, inventario con trazabilidad y autopiloto fiscal AEAT. Web profesional + Software coordinado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sourceSans.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LocaleProvider>
          <CustomCursor />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
