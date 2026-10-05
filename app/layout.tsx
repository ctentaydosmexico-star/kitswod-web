import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Black Experience 2026 | KITS WOD",
  description: "Consulta tu número de kit para Black Experience 2026.",
  openGraph: {
    title: "Black Experience 2026 | KITS WOD",
    description: "Consulta tu número de kit para Black Experience 2026.",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
