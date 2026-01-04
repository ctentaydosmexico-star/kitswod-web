"use client";

import { useMemo, useState } from "react";
import { PARTICIPANTES } from "./data/participantes";

export default function Home() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const v = q.toLowerCase();
    return PARTICIPANTES.filter(
      (p) =>
        p.nombre.toLowerCase().includes(v) ||
        p.box.toLowerCase().includes(v) ||
        p.correo.toLowerCase().includes(v) ||
        p.telefono.includes(v)
    );
  }, [q]);

  return (
    <main style={{ padding: 40, maxWidth: 720, margin: "0 auto" }}>
      <h1>KITS WOD – Christmas Challenge 🎄</h1>

      <input
        placeholder="Busca por nombre, box, correo o teléfono"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          fontSize: 18,
          marginTop: 16,
        }}
      />

      <div style={{ marginTop: 24 }}>
        {q && results.length === 0 && (
          <p>No se encontraron resultados.</p>
        )}

        {results.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <strong>{p.nombre}</strong>
            <div>{p.box}</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>
              Kit: {p.kit}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}