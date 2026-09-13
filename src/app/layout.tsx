import type { Metadata } from "next";
import { Geist_Mono, Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
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
    default: "BaseClinica | App de gestión y web corporativa para clínicas",
    template: "%s | BaseClinica",
  },
  description:
    "Software de gestión interna y diseño web para microclínicas: agenda, pacientes, facturación y presencia online. Pack integral con un solo proveedor.",
  icons: {
    icon: "/bc-icon.svg",
    shortcut: "/bc-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "BaseClinica",
    title: "BaseClinica | App de gestión y web corporativa para clínicas",
    description:
      "Software de gestión interna y diseño web para microclínicas. Pack integral opcional.",
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
      className={`${manrope.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
