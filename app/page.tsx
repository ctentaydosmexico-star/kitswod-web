"use client";

import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { PARTICIPANTES } from "./data/participantes";

/* =========================
   Helpers
========================= */
function normalize(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

function safeFilename(s: string) {
  return (s || "kit")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

/* =========================
   Page
========================= */
export default function Home() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const total = PARTICIPANTES.length;

  const results = useMemo(() => {
    const query = q.trim();
    if (!query) return [];

    const qt = normalize(query);
    const qd = digitsOnly(query);

    return PARTICIPANTES.filter((p: any) => {
      const nombre = normalize(String(p.nombre_box ?? ""));
      const email = normalize(String(p.email ?? ""));
      const tel = digitsOnly(String(p.telefono ?? ""));

      return (
        nombre.includes(qt) ||
        email.includes(qt) ||
        (qd.length >= 4 && tel.includes(qd))
      );
    }).slice(0, 30);
  }, [q]);

  async function downloadCardAsImage() {
    if (!selected || !cardRef.current) return;

    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // 1) Generar PNG
      const dataUrl = canvas.toDataURL("image/png");

      // 2) Intento A: Web Share (si existe) -> iPhone/Android suele estar feliz
      try {
        const canShare = (navigator as any).canShare?.bind(navigator);
        if (navigator.share && canShare) {
          const res = await fetch(dataUrl);
          const blob = await res.blob();
          const fileName = `kitswod-${selected.num}-${safeFilename(
            selected.nombre_box || "atleta"
          )}.png`;
          const file = new File([blob], fileName, { type: "image/png" });

          if (canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "KITS WOD",
              text: "Mi tarjeta de kit",
            });
            return; // listo
          }
        }
      } catch {
        // si falla share, seguimos al download normal
      }

      // 3) Intento B: Download normal (desktop/Android)
      const fileName = `kitswod-${selected.num}-${safeFilename(
        selected.nombre_box || "atleta"
      )}.png`;

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      // 4) Fallback iOS: abrir en nueva pestaña para "Guardar imagen"
      // (porque iOS puede ignorar el download sin avisar)
      if (isIOS()) {
        const w = window.open();
        if (w) {
          w.document.write(`
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Guardar imagen</title>
                <style>
                  body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#111;}
                  img{max-width:95vw;height:auto;box-shadow:0 10px 30px rgba(0,0,0,.35);border-radius:10px;}
                  p{position:fixed;bottom:14px;left:0;right:0;text-align:center;color:#fff;font-family:system-ui;opacity:.9;font-size:14px;margin:0}
                </style>
              </head>
              <body>
                <img src="${dataUrl}" />
                <p>Mantén presionada la imagen → “Guardar en Fotos”</p>
              </body>
            </html>
          `);
          w.document.close();
        }
      }
    } finally {
      setDownloading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-4 text-black font-sans">
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between border-b border-black pb-2 mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/wod-logo.png"
            alt="WOD"
            style={{ height: 36, width: "auto", display: "block" }}
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold">KITS WOD</div>
            <div className="text-xs text-gray-600">Christmas Challenge 2025</div>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          Total atletas: <strong>{total}</strong>
        </div>
      </header>

      {/* ================= BUSCADOR ================= */}
      <section className="mb-6">
        <h1 className="text-lg font-semibold mb-1">Encuentra tu número de kit</h1>
        <p className="text-sm text-gray-600 mb-2">
          Busca por <strong>nombre</strong>, <strong>box</strong>,{" "}
          <strong>correo</strong> o <strong>teléfono</strong> (últimos 4).
        </p>

        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setSelected(null);
          }}
          placeholder="Ej. Karina / UKN / gmail / 2732"
          className="w-full border border-black px-3 py-2 text-sm"
        />

        <div className="text-xs text-gray-600 mt-2">
          Tip: si buscas por teléfono, usa al menos los <strong>últimos 4</strong>.
        </div>
      </section>

      {/* ================= RESULTADOS ================= */}
      {results.length > 0 && (
        <section className="border border-black mb-6">
          {results.map((p: any) => (
            <button
              key={p.num}
              onClick={() => setSelected(p)}
              className="w-full text-left px-3 py-2 border-b border-black hover:bg-gray-100 text-sm"
            >
              <strong>{p.num}</strong> — {p.nombre_box}
            </button>
          ))}
        </section>
      )}

      {/* ================= TARJETA ================= */}
      <section className="mb-6">
        <h2 className="text-md font-semibold mb-2">Tu tarjeta</h2>
        <p className="text-sm text-gray-600 mb-3">
          Selecciona un resultado para ver tu tarjeta.
        </p>

        {/* SOLO ESTO SE CAPTURA */}
        <div ref={cardRef} className="border border-black p-4 bg-white">
          {selected ? (
            <>
              <div className="flex justify-between items-start mb-3">
                <img src="/wod-logo.png" alt="WOD" style={{ height: 36, width: "auto" }} />
                <div className="text-right text-xs">
                  <div className="font-semibold">CHRISTMAS CHALLENGE</div>
                  <div>2025</div>
                </div>
              </div>

              <div className="text-5xl font-bold mb-2">{selected.num}</div>

              <div className="text-sm font-semibold mb-1">{selected.nombre_box}</div>

              <div className="text-xs text-gray-600 mb-3">
                {selected.categoria} · Talla {selected.talla}
              </div>

              <div className="text-xs text-gray-700">kitswod.mx · @thewod_go</div>
            </>
          ) : (
            <div className="text-sm text-gray-500">Selecciona un atleta</div>
          )}
        </div>

        <div className="flex gap-2 mt-3">
          <a
            href={
              selected
                ? `https://wa.me/?text=${encodeURIComponent(
                    `Mi número de kit para el Christmas Challenge 2025 es ${selected.num} 💪🎄\n\nkitswod.mx`
                  )}`
                : undefined
            }
            target="_blank"
            rel="noreferrer"
            className={`border border-black px-3 py-2 text-xs hover:bg-black hover:text-white ${
              selected ? "" : "opacity-40 pointer-events-none"
            }`}
          >
            Compartir WhatsApp
          </a>

          <button
            onClick={downloadCardAsImage}
            disabled={!selected || downloading}
            className={`border border-black px-3 py-2 text-xs hover:bg-black hover:text-white ${
              !selected || downloading ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            {downloading ? "Generando..." : "Descargar imagen"}
          </button>
        </div>

        <div className="text-xs text-gray-600 mt-2">
          Tip: en iPhone puede abrirse una pestaña con la imagen para guardarla en Fotos.
        </div>
      </section>

      {/* ================= PRIVACIDAD ================= */}
      <section className="border-t border-black pt-2 mb-6 text-xs text-gray-600">
        Privacidad: no mostramos correo ni teléfono. Solo tu <strong>número de kit</strong>.
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="flex justify-between items-center text-xs text-gray-600">
        <div>© {new Date().getFullYear()} WOD</div>
        <a href="https://instagram.com/thewod_go" target="_blank" rel="noreferrer">
          Instagram @thewod_go
        </a>
      </footer>
    </main>
  );
}