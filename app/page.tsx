"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
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

export default function Home() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<any | null>(null);

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

  /* =========================
     Share
  ========================= */
  function buildShareText() {
    if (!selected) return "";
    return `LGNDS LATAM 2025
Mi número de kit: ${selected.num}

kitswod.mx · @thewod_go`;
  }

  function shareWhatsApp() {
    if (!selected) return;
    const text = buildShareText();
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        text + "\n\nhttps://kitswod.mx"
      )}`,
      "_blank"
    );
  }

  async function shareNative() {
    if (!selected) return;

    const text = buildShareText();
    const url = "https://kitswod.mx";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "KITS WOD",
          text,
          url,
        });
      } catch {
        return;
      }
    } else {
      try {
        await navigator.clipboard.writeText(text + "\n\n" + url);
        alert("Copiado ✅ Pégalo en Instagram o WhatsApp.");
      } catch {
        alert("No se pudo copiar.");
      }
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
            style={{ height: 42, width: "auto", display: "block" }}
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold">KITS WOD</div>
            <div className="text-xs text-gray-600">LGNDS LATAM 2025</div>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          Total atletas: <strong>{total}</strong>
        </div>
      </header>

      {/* ================= BUSCADOR ================= */}
      <section className="mb-6">
        <h1 className="text-lg font-semibold mb-1">
          Encuentra tu número de kit
        </h1>

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

        <div className="border border-black p-4">
          {selected ? (
            <>
              <div className="flex justify-between items-start mb-3">
                <img
                  src="/wod-logo.png"
                  alt="WOD"
                  style={{ height: 42, width: "auto" }}
                />

                <div className="text-right text-xs">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img
                      src="/lgnds-logo.png"
                      alt="LGNDS"
                      style={{ height: 42, width: "auto" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>
                  <div className="font-semibold mt-1">LGNDS LATAM</div>
                  <div>2025</div>
                </div>
              </div>

              <div className="text-5xl font-bold mb-2">{selected.num}</div>

              <div className="text-sm font-semibold mb-1">
                {selected.nombre_box}
              </div>

              <div className="text-xs text-gray-600 mb-3">
                {selected.categoria} · Talla {selected.talla}
              </div>

              <div className="text-xs text-gray-700">
                kitswod.mx · @thewod_go
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-500">
              Selecciona un atleta
            </div>
          )}
        </div>
      </section>

      {/* ================= BOTONES ================= */}
      <section className="flex gap-2 mb-8">
        <button
          onClick={shareNative}
          disabled={!selected}
          className="border border-black px-3 py-2 text-sm disabled:opacity-40"
        >
          Compartir
        </button>

        <button
          onClick={shareWhatsApp}
          disabled={!selected}
          className="border border-black px-3 py-2 text-sm disabled:opacity-40"
        >
          WhatsApp
        </button>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section className="border-t border-black pt-4 mt-8">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold">Última publicación</div>
          <a
            href="https://instagram.com/thewod_go"
            target="_blank"
            rel="noreferrer"
            className="text-xs underline"
          >
            @thewod_go
          </a>
        </div>

        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="afterInteractive"
        />

        <div className="border border-black">
          <iframe
            src="https://lightwidget.com/widgets/129ef531e45a51f1a7680c851f1a92e6.html"
            scrolling="no"
            allowTransparency
            className="lightwidget-widget"
            style={{
              width: "100%",
              height: 520,
              border: 0,
              overflow: "hidden",
              display: "block",
            }}
            title="Instagram @thewod_go"
          />
        </div>
      </section>

      {/* ================= PRIVACIDAD ================= */}
      <section className="border-t border-black pt-2 mt-8 text-xs text-gray-600">
        Privacidad: no mostramos correo ni teléfono. Solo tu{" "}
        <strong>número de kit</strong>.
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="flex justify-between items-center text-xs text-gray-600 mt-6">
        <div>© {new Date().getFullYear()} WOD</div>
        <a
          href="https://instagram.com/thewod_go"
          target="_blank"
          rel="noreferrer"
        >
          Instagram @thewod_go
        </a>
      </footer>
    </main>
  );
}