"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";
import { PARTICIPANTES } from "./data/participantes";

type P = {
  id?: number;
  nombre: string;
  correo?: string;
  telefono?: string;
  box?: string;
  kit?: string | number;
  talla?: string;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement>(null);

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

  // 🔥 AUTO-SELECCIONAR SI SOLO HAY 1 RESULTADO
  useEffect(() => {
    if (filtered.length === 1) {
      const p = filtered[0];
      const key = p.correo || `${p.nombre}-${p.id ?? ""}`;
      setSelectedKey(key);
    }
  }, [filtered]);

  // 🔥 AUTO-ABRIR SELECT
  useEffect(() => {
    if (query && filtered.length > 1 && selectRef.current) {
      selectRef.current.size = Math.min(filtered.length + 1, 6);
      selectRef.current.focus();
    } else if (selectRef.current) {
      selectRef.current.size = 1;
    }
  }, [query, filtered]);

  const selected: P | undefined = useMemo(() => {
    if (!selectedKey) return undefined;
    return (PARTICIPANTES as P[]).find((p) => {
      const key = p.correo || `${p.nombre}-${p.id ?? ""}`;
      return key === selectedKey;
    });
  }, [selectedKey]);

  // 🔥 ENTER = seleccionar primer resultado
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filtered.length > 0) {
      const p = filtered[0];
      const key = p.correo || `${p.nombre}-${p.id ?? ""}`;
      setSelectedKey(key);
    }
  };

  const shareText = useMemo(() => {
    if (!selected) return "";
    return `KITS WOD — Zero to Hero 2026
${selected.nombre}
Kit: ${selected.kit ?? "—"}
Talla: ${selected.talla ?? "—"}`;
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
        <div className="flex items-center gap-4">
          <Image src="/wod-logo.png" alt="WOD" width={95} height={45} priority />
          <div>
            <p className="text-sm font-semibold">KITS WOD</p>
            <p className="text-xs opacity-60">Zero to Hero 2026</p>
          </div>
        </div>

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

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedKey("");
          }}
          onKeyDown={onKeyDown}
          placeholder="Ej. Carlos / gmail / 2732"
          className="w-full mb-3 px-4 py-3 rounded bg-black border border-white/20 outline-none"
        />

        <select
          ref={selectRef}
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

        {/* TARJETA */}
        <div className="mt-6 border border-white/20 rounded p-5 min-h-[150px] relative">
          {!selected ? (
            <p className="opacity-50">Selecciona un atleta</p>
          ) : (
            <>
              {/* KIT GRANDE */}
              <div className="absolute top-4 left-4">
                <p className="text-[56px] font-extrabold leading-none">
                  {selected.kit ?? "—"}
                </p>
                <p className="text-xs opacity-60 -mt-1">KIT</p>
              </div>

              <div className="pl-24">
                <p className="text-xl font-semibold">{selected.nombre}</p>
                <p className="mt-2">
                  Talla: <b>{selected.talla ?? "—"}</b>
                </p>
              </div>
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
    </main>
  );
}