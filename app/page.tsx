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
    <main className="min-h-screen bg-black text-zinc-100 font-sans">
      <div className="max-w-3xl mx-auto p-4">
        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between border-b border-zinc-700 pb-3 mb-5">
          <div className="flex items-center gap-3">
            <img
              src="/wod-logo.png"
              alt="WOD"
              style={{ height: 42, width: "auto", display: "block" }}
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">KITS WOD</div>
              <div className="text-xs text-zinc-400">LGNDS LATAM 2025</div>
            </div>
          </div>

          <div className="text-xs text-zinc-400">
            Total atletas: <span className="text-zinc-100 font-semibold">{total}</span>
          </div>
        </header>

        {/* ================= BUSCADOR ================= */}
        <section className="mb-6">
          <h1 className="text-lg font-semibold mb-1">Encuentra tu número de kit</h1>

          <p className="text-sm text-zinc-400 mb-3">
            Busca por <span className="font-semibold text-zinc-200">nombre</span>,{" "}
            <span className="font-semibold text-zinc-200">box</span>,{" "}
            <span className="font-semibold text-zinc-200">correo</span> o{" "}
            <span className="font-semibold text-zinc-200">teléfono</span> (últimos 4).
          </p>

          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setSelected(null);
            }}
            placeholder="Ej. KB / BOX / gmail / 2732"
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-400"
          />

          <div className="text-xs text-zinc-500 mt-2">
            Tip: para teléfono usa mínimo los <span className="text-zinc-200 font-semibold">últimos 4</span>.
          </div>
        </section>

        {/* ================= RESULTADOS ================= */}
        {results.length > 0 && (
          <section className="rounded-md border border-zinc-700 overflow-hidden mb-6">
            {results.map((p: any) => (
              <button
                key={p.num}
                onClick={() => setSelected(p)}
                className="w-full text-left px-3 py-2 border-b border-zinc-800 hover:bg-zinc-900 text-sm"
              >
                <span className="font-semibold text-zinc-100">{p.num}</span>{" "}
                <span className="text-zinc-300">— {p.nombre_box}</span>
              </button>
            ))}
          </section>
        )}

        {/* ================= TARJETA ================= */}
        <section className="mb-6">
          <h2 className="text-md font-semibold mb-2">Tu tarjeta</h2>

          <div className="rounded-md border border-zinc-700 bg-zinc-950 p-4">
            {selected ? (
              <>
                <div className="flex justify-between items-start mb-3">
                  <img
                    src="/wod-logo.png"
                    alt="WOD"
                    style={{ height: 42, width: "auto" }}
                  />

                  <div className="text-right text-xs text-zinc-300">
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
                    <div className="font-semibold mt-1 text-zinc-100">LGNDS LATAM</div>
                    <div className="text-zinc-400">2025</div>
                  </div>
                </div>

                <div className="text-5xl font-bold mb-2 tracking-tight">
                  {selected.num}
                </div>

                <div className="text-sm font-semibold mb-1 text-zinc-100">
                  {selected.nombre_box}
                </div>

                <div className="text-xs text-zinc-400 mb-3">
                  {selected.categoria} · Talla {selected.talla}
                </div>

                <div className="text-xs text-zinc-400">
                  kitswod.mx · <span className="text-zinc-100">@thewod_go</span>
                </div>
              </>
            ) : (
              <div className="text-sm text-zinc-500">Selecciona un atleta</div>
            )}
          </div>
        </section>

        {/* ================= BOTONES ================= */}
        <section className="flex gap-2 mb-8">
          <button
            onClick={shareNative}
            disabled={!selected}
            className="rounded-md border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-900 disabled:opacity-40"
          >
            Compartir
          </button>

          <button
            onClick={shareWhatsApp}
            disabled={!selected}
            className="rounded-md border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-900 disabled:opacity-40"
          >
            WhatsApp
          </button>
        </section>

        {/* ================= INSTAGRAM ================= */}
        <section className="border-t border-zinc-800 pt-4 mt-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">Última publicación</div>
            <a
              href="https://instagram.com/thewod_go"
              target="_blank"
              rel="noreferrer"
              className="text-xs underline text-zinc-300 hover:text-zinc-100"
            >
              @thewod_go
            </a>
          </div>

          <Script
            src="https://cdn.lightwidget.com/widgets/lightwidget.js"
            strategy="afterInteractive"
          />

          <div className="rounded-md border border-zinc-700 overflow-hidden bg-zinc-950">
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

          <div className="text-xs text-zinc-500 mt-2">
            Si acabas de publicar, puede tardar un poquito en reflejarse (cache del widget).
          </div>
        </section>

        {/* ================= PRIVACIDAD ================= */}
        <section className="border-t border-zinc-800 pt-3 mt-8 text-xs text-zinc-500">
          Privacidad: no mostramos correo ni teléfono. Solo tu{" "}
          <span className="text-zinc-100 font-semibold">número de kit</span>.
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="flex justify-between items-center text-xs text-zinc-500 mt-6">
          <div>© {new Date().getFullYear()} WOD</div>
          <a
            href="https://instagram.com/thewod_go"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-100"
          >
            Instagram @thewod_go
          </a>
        </footer>
      </div>
    </main>
  );
}