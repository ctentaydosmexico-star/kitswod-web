"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Script from "next/script";
import { PARTICIPANTES } from "./data/participantes";

type P = {
  id?: number;
  nombre: string;
  correo?: string;
  telefono?: string;
  box?: string;
  kit?: string | number;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState<string>("");

  const total = PARTICIPANTES.length;

  const filtered: P[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const digits = q.replace(/\D/g, "");
    const last4 = digits.slice(-4);

    return (PARTICIPANTES as P[]).filter((p) => {
      const nombre = (p.nombre || "").toLowerCase();
      const correo = (p.correo || "").toLowerCase();
      const box = (p.box || "").toLowerCase();
      const tel = (p.telefono || "").replace(/\D/g, "");
      const telLast4 = tel.slice(-4);

      if (nombre.includes(q)) return true;
      if (correo.includes(q)) return true;
      if (box.includes(q)) return true;
      if (last4.length === 4 && telLast4 === last4) return true;

      return false;
    });
  }, [query]);

  const selected: P | undefined = useMemo(() => {
    if (!selectedKey) return undefined;
    return (PARTICIPANTES as P[]).find((p) => {
      const key = p.correo || `${p.nombre}-${p.id ?? ""}`;
      return key === selectedKey;
    });
  }, [selectedKey]);

  const shareText = useMemo(() => {
    if (!selected) return "";
    return `KITS WOD — Zero to Hero 2026\n${selected.nombre}\nKit: ${
      selected.kit ?? "—"
    }`;
  }, [selected]);

  const onShare = async () => {
    if (!selected) return;
    try {
      // @ts-ignore
      if (navigator.share) {
        // @ts-ignore
        await navigator.share({ text: shareText });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert("Copiado ✅");
      }
    } catch {}
  };

  const onWhatsApp = () => {
    if (!selected) return;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-6">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        {/* IZQUIERDA: LOGO WOD */}
        <div className="flex items-center gap-4">
          <Image
            src="/wod-logo.png"
            alt="WOD"
            width={95}
            height={45}
            priority
          />
          <div>
            <p className="text-sm font-semibold">KITS WOD</p>
            <p className="text-xs opacity-60">Zero to Hero 2026</p>
          </div>
        </div>

        {/* DERECHA: TOTAL + LOGO EVENTO */}
        <div className="flex items-center gap-4">
          <p className="text-sm opacity-70">Total atletas: {total}</p>
          <Image
            src="/logo-evento.png"
            alt="Zero to Hero"
            width={70}
            height={70}
            priority
          />
        </div>
      </header>

      {/* BUSCADOR */}
      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">
          Encuentra tu número de kit
        </h1>
        <p className="opacity-70 mb-4">
          Busca por nombre, box, correo o teléfono (últimos 4).
        </p>

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedKey("");
          }}
          placeholder="Ej. KB / BOX / gmail / 2732"
          className="w-full mb-2 px-4 py-3 rounded bg-black border border-white/20 outline-none"
        />

        <p className="text-xs opacity-60 mb-6">
          Tip: para teléfono usa mínimo los <b>últimos 4</b>.
        </p>

        <h2 className="text-lg font-semibold mb-3">Tu tarjeta</h2>

        <select
          className="w-full px-4 py-3 rounded bg-black border border-white/20"
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
        >
          <option value="">Selecciona un atleta</option>
          {filtered.map((p) => {
            const key = p.correo || `${p.nombre}-${p.id ?? ""}`;
            return (
              <option key={key} value={key}>
                {p.nombre}
              </option>
            );
          })}
        </select>

        <div className="mt-6 border border-white/20 rounded p-5 min-h-[110px]">
          {!selected ? (
            <p className="opacity-50">Selecciona un atleta</p>
          ) : (
            <>
              <p className="text-xs opacity-60 mb-1">Tu tarjeta</p>
              <p className="text-lg font-semibold">{selected.nombre}</p>
              <p className="text-sm opacity-70">
                Kit: <b>{selected.kit ?? "—"}</b>
              </p>
            </>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={onShare}
            disabled={!selected}
            className="px-5 py-3 rounded border border-white/20 disabled:opacity-40"
          >
            Compartir
          </button>
          <button
            onClick={onWhatsApp}
            disabled={!selected}
            className="px-5 py-3 rounded border border-white/20 disabled:opacity-40"
          >
            WhatsApp
          </button>
        </div>
      </section>

      {/* ÚLTIMA PUBLICACIÓN */}
      <section className="max-w-5xl mx-auto mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="opacity-70">Última publicación</h2>
          <p className="opacity-60">@thewod_go</p>
        </div>

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

      <footer className="mt-16 text-xs opacity-50 flex justify-between">
        <p>© 2026 WOD</p>
        <p>@thewod_go</p>
      </footer>
    </main>
  );
}