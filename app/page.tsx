"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Script from "next/script";
import { PARTICIPANTES } from "./data/participantes";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<any>(null);

  const filtered = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return PARTICIPANTES.filter((p: any) =>
      p.nombre.toLowerCase().includes(q) ||
      p.correo.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-6">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-4">
          {/* LOGO EVENTO */}
          <Image
            src="/logo-evento.png"
            alt="Zero to Hero"
            width={90}
            height={90}
            priority
          />

          {/* TEXTO EVENTO */}
          <div>
            <p className="text-sm opacity-70">KITS WOD</p>
            <p className="text-xs opacity-50">LGNDS LATAM 2025</p>
          </div>
        </div>

        <p className="text-sm opacity-70">
          Total atletas: {PARTICIPANTES.length}
        </p>
      </header>

      {/* BUSCADOR */}
      <section className="max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold mb-2">
          Encuentra tu número de kit
        </h1>
        <p className="opacity-70 mb-4">
          Busca por nombre o correo.
        </p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej. Juan / gmail"
          className="w-full mb-4 px-4 py-3 rounded bg-black border border-white/20 outline-none"
        />

        {/* RESULTADOS */}
        <select
          className="w-full px-4 py-3 rounded bg-black border border-white/20"
          onChange={(e) =>
            setSelected(
              filtered.find((p) => p.correo === e.target.value)
            )
          }
        >
          <option>Selecciona un atleta</option>
          {filtered.map((p: any) => (
            <option key={p.correo} value={p.correo}>
              {p.nombre}
            </option>
          ))}
        </select>

        {/* TARJETA */}
        {selected && (
          <div className="mt-6 p-4 border border-white/20 rounded">
            <p className="opacity-70 text-sm">Tu tarjeta</p>
            <p className="text-lg font-semibold">{selected.nombre}</p>
          </div>
        )}
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="mb-4 opacity-70">Última publicación</h2>

        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="lazyOnload"
        />

        <iframe
          src="https://lightwidget.com/widgets/XXXXXXXX.html"
          scrolling="no"
          allowTransparency={true}
          className="w-full border border-white/20 rounded"
          style={{ height: 420 }}
        ></iframe>

        <p className="text-xs opacity-50 mt-2">
          Si acabas de publicar, puede tardar un poco en reflejarse.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-xs opacity-50 flex justify-between">
        <p>© 2026 WOD</p>
        <p>@thewod_go</p>
      </footer>
    </main>
  );
}