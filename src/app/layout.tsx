import type { Metadata } from "next";
import { Caveat, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LocaleProvider } from "@/i18n/LocaleProvider";

/** Tipografía estilo SaaS limpia (referencia Odoo), no Inter/Roboto */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaDisplay = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

/** Títulos “a mano” estilo Odoo */
const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
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
    default: "Base Clínica | Sistema operativo para clínicas",
    template: "%s | Base Clínica",
  },
  description:
    "Software de gestión para clínicas de salud y bienestar: fisio, dental, enfermería, estética, veterinaria y más. Agenda, historias, firma, stock y fiscalidad en una sola plataforma.",
  icons: {
    icon: "/bc-icon.svg",
    shortcut: "/bc-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Base Clínica",
    title: "Base Clínica | Sistema operativo para clínicas",
    description:
      "Software de gestión clínica integral: historiales, firma digital, inventario y autopiloto fiscal AEAT. Para centros de salud y bienestar de todo tipo.",
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
      className={`${plusJakarta.variable} ${plusJakartaDisplay.variable} ${caveat.variable} ${geistMono.variable} h-full antialiased`}
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
