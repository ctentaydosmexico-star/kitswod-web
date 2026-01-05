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
        url: "https://kitswod.mx/WOD_PESTAÑA.png",
        width: 1200,
        height: 630,
        alt: "KITS WOD",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}