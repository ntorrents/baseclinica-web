import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
