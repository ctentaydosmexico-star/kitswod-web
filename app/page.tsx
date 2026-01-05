"use client";

import { useMemo, useState } from "react";
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

  function cardUrlAbsolute(download = false) {
    if (!selected) return "";
    const rel = `/api/card?num=${encodeURIComponent(String(selected.num))}${
      download ? "&download=1" : ""
    }`;
    return `${location.origin}${rel}`;
  }

  function openImage() {
    if (!selected) return;
    window.open(cardUrlAbsolute(false), "_blank", "noopener,noreferrer");
  }

  async function share() {
    if (!selected) return;
    const url = cardUrlAbsolute(false);
    try {
      if (navigator.share) {
        await navigator.share({
          title: "KITS WOD",
          text: `Mi número de kit es ${selected.num} 💪🎄`,
          url,
        });
        return;
      }
    } catch {
      // si cancela, no pasa nada
    }
    // fallback
    openImage();
  }

  function whatsapp() {
    if (!selected) return;
    const text = `Mi número de kit para el Christmas Challenge 2025 es ${selected.num} 💪🎄\n\n${location.origin}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-4 text-black font-sans">
      {/* HEADER */}
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

      {/* BUSCADOR */}
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

      {/* RESULTADOS */}
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

      {/* TARJETA */}
      <section className="mb-6">
        <h2 className="text-md font-semibold mb-2">Tu tarjeta</h2>
        <p className="text-sm text-gray-600 mb-3">
          Selecciona un resultado para ver tu tarjeta.
        </p>

        <div className="border border-black p-4 bg-white">
          {selected ? (
            <>
              <div className="flex justify-between items-start mb-3">
                <img src="/wod-logo.png" alt="WOD" style={{ height: 20, width: "auto" }} />
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

        {/* BOTONES (sin “download” porque iPhone lo ignora) */}
        <div className="flex flex-wrap gap-2 mt-3">
          <button
            onClick={openImage}
            disabled={!selected}
            className={`border border-black px-3 py-2 text-xs hover:bg-black hover:text-white ${
              selected ? "" : "opacity-40 cursor-not-allowed"
            }`}
          >
            Abrir imagen
          </button>

          <button
            onClick={share}
            disabled={!selected}
            className={`border border-black px-3 py-2 text-xs hover:bg-black hover:text-white ${
              selected ? "" : "opacity-40 cursor-not-allowed"
            }`}
          >
            Compartir
          </button>

          <button
            onClick={whatsapp}
            disabled={!selected}
            className={`border border-black px-3 py-2 text-xs hover:bg-black hover:text-white ${
              selected ? "" : "opacity-40 cursor-not-allowed"
            }`}
          >
            WhatsApp
          </button>

          {/* opcional: link que intenta “descarga” en desktop */}
          {selected && (
            <a
              href={`/api/card?num=${encodeURIComponent(String(selected.num))}&download=1`}
              className="border border-black px-3 py-2 text-xs hover:bg-black hover:text-white"
            >
              Descargar (solo compu)
            </a>
          )}
        </div>

        <div className="text-xs text-gray-600 mt-2">
          iPhone: toca <strong>Abrir imagen</strong> → mantén presionada la imagen →
          <strong> “Guardar en Fotos”</strong>. (Así sí funciona siempre.)
        </div>
      </section>

      {/* PRIVACIDAD */}
      <section className="border-t border-black pt-2 mb-6 text-xs text-gray-600">
        Privacidad: no mostramos correo ni teléfono. Solo tu <strong>número de kit</strong>.
      </section>

      {/* FOOTER */}
      <footer className="flex justify-between items-center text-xs text-gray-600">
        <div>© {new Date().getFullYear()} WOD</div>
        <a href="https://instagram.com/thewod_go" target="_blank" rel="noreferrer">
          Instagram @thewod_go
        </a>
      </footer>
    </main>
  );
}