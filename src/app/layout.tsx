import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { OfferBanner } from "@/components/ui/OfferBanner";

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
      className={`${sourceSans.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LocaleProvider>
          <CustomCursor />
          <OfferBanner />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
