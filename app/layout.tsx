import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KITS WOD",
  description: "Consulta tu número de Kit Oficial · Always Ready to Lift®",

  openGraph: {
    title: "KITS WOD",
    description: "Consulta tu número de Kit Oficial · Always Ready to Lift®",
    url: "https://kitswod.mx",
    siteName: "KITS WOD",
    images: [
      {
        url: "https://kitswod.mx/wod-logo.png",
        width: 1200,
        height: 630,
        alt: "KITS WOD · Always Ready to Lift®",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KITS WOD",
    description: "Consulta tu número de Kit Oficial · Always Ready to Lift®",
    images: ["https://kitswod.mx/wod-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}