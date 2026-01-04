"use client";

import { useMemo, useState } from "react";
import { PARTICIPANTES } from "./data/participantes";

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

function splitNombreBox(nombre_box: string) {
  // Formato típico: "NOMBRE — BOX"
  const parts = (nombre_box || "").split("—").map((p) => p.trim());
  if (parts.length >= 2) {
    return { nombre: parts[0], box: parts.slice(1).join(" — ") };
  }
  return { nombre: nombre_box || "", box: "" };
}

export default function Home() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim();
    if (!query) return [];

    const qText = normalize(query);
    const qDigits = digitsOnly(query);

    return (PARTICIPANTES as any[])
      .filter((p) => {
        const nombreBox = String(p.nombre_box ?? "");
        const email = String(p.email ?? "");
        const tel = String(p.telefono ?? "");
        const num = String(p.num ?? "");

        const hayNombreBox = normalize(nombreBox);
        const hayEmail = normalize(email);
        const hayTelDigits = digitsOnly(tel);

        // Búsqueda por texto (nombre/box)
        if (hayNombreBox.includes(qText)) return true;

        // Búsqueda por email
        if (qText && hayEmail.includes(qText)) return true;

        // Búsqueda por número de kit
        if (qDigits.length >= 1 && digitsOnly(num).includes(qDigits)) return true;

        // Búsqueda por teléfono (mínimo 4 dígitos para evitar falsos positivos)
        if (qDigits.length >= 4 && hayTelDigits.includes(qDigits)) return true;

        return false;
      })
      .slice(0, 30);
  }, [q]);

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 6 }}>KITS WOD – Christmas Challenge 🎄</h1>
      <p style={{ color: "#666", marginBottom: 14 }}>
        Busca por <strong>nombre</strong>, <strong>box</strong>, <strong>correo</strong> o{" "}
        <strong>teléfono</strong>. (No mostramos correo ni teléfono)
      </p>

      <input
        placeholder="Ej: Regina / THE CROSSBOX / gmail / 0241 / 24"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{
          width: "100%",
          padding: 14,
          fontSize: 18,
          borderRadius: 14,
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      {q.trim() === "" ? (
        <div style={{ marginTop: 18, color: "#666" }}>Escribe para encontrar tu número de kit.</div>
      ) : results.length === 0 ? (
        <div style={{ marginTop: 18, color: "#c00" }}>
          No encontramos resultados. Prueba con tu apellido, tu box, tu correo o los últimos 4 dígitos de tu teléfono.
        </div>
      ) : (
        <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
          {results.map((p: any, idx: number) => {
            const { nombre, box } = splitNombreBox(String(p.nombre_box ?? ""));
            return (
              <div
                key={`${p.num}-${idx}`}
                style={{
                  border: "1px solid #e6e6e6",
                  borderRadius: 18,
                  padding: 16,
                  background: "#fff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 14, color: "#666" }}>Tu número de kit</div>
                  <div style={{ fontSize: 14, color: "#666" }}>
                    {(p.categoria ?? "—") + " · " + (p.talla ?? "—")}
                  </div>
                </div>

                <div style={{ fontSize: 56, fontWeight: 900, marginTop: 6 }}>{p.num}</div>

                <div style={{ marginTop: 10, fontSize: 18, fontWeight: 800 }}>{nombre}</div>

                {box ? (
                  <div style={{ marginTop: 4, color: "#444" }}>{box}</div>
                ) : (
                  <div style={{ marginTop: 4, color: "#444" }}>{p.genero ?? "—"}</div>
                )}

                {/* Importante: NO mostramos email ni teléfono */}
              </div>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: 18, fontSize: 12, color: "#777" }}>Mostrando hasta 30 resultados.</div>
    </main>
  );
}