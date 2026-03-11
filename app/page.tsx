"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { participantes as participantesRaw } from "./data/participantes";

type Team = {
  key: string;
  kit: string;
  equipo: string;
  box?: string;
  categoria?: string;
  miembros: any[];
};

const theme = {
  bg: "#E4E2DD",
  primary: "#DF0423",
  secondary: "#096788",
  surface: "#FFFFFF",
  surfaceAlt: "#F4F4F4",
  borderSoft: "#CFCBC5",
};

const normalizeText = (v: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function InnerPage() {
  const [query, setQuery] = useState("");
  const participantes = participantesRaw as any[];

  const searchParams = useSearchParams();
  const kitFromUrl = searchParams.get("kit");

  const teams = useMemo(() => {
    const map = new Map<string, Team>();

    participantes.forEach((p) => {
      const kit = String(p?.num ?? "").trim();
      if (!kit) return;

      const equipoNombre = String(p?.["EQUIPO"] ?? p?.equipo ?? "").trim();

      if (!map.has(kit)) {
        map.set(kit, {
          key: kit,
          kit,
          equipo: equipoNombre,
          box: p?.box,
          categoria: p?.categoria,
          miembros: [],
        });
      }

      map.get(kit)?.miembros.push(p);
    });

    return Array.from(map.values());
  }, [participantes]);

  const filteredTeams = useMemo(() => {
    const q = normalizeText(query || kitFromUrl || "");
    if (!q) return teams;

    return teams.filter((team) => {
      if (normalizeText(team.kit).includes(q)) return true;
      if (normalizeText(team.equipo).includes(q)) return true;

      return team.miembros.some((m) =>
        normalizeText(m.nombre).includes(q)
      );
    });
  }, [teams, query, kitFromUrl]);

  return (
    <main
      style={{
        background: theme.bg,
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 20,
            color: theme.primary,
          }}
        >
          Búsqueda de Kits
        </h1>

        <input
          type="text"
          placeholder="Buscar por kit, equipo o atleta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            border: `1px solid ${theme.borderSoft}`,
            marginBottom: 20,
          }}
        />

        {filteredTeams.map((team) => (
          <div
            key={team.key}
            style={{
              background: theme.surface,
              borderRadius: 10,
              padding: 20,
              marginBottom: 16,
              border: `1px solid ${theme.borderSoft}`,
            }}
          >
            <h2
              style={{
                margin: 0,
                color: theme.secondary,
              }}
            >
              Kit {team.kit}
            </h2>

            {team.equipo && (
              <p style={{ margin: "6px 0" }}>
                <strong>Equipo:</strong> {team.equipo}
              </p>
            )}

            {team.box && (
              <p style={{ margin: "6px 0" }}>
                <strong>Box:</strong> {team.box}
              </p>
            )}

            {team.categoria && (
              <p style={{ margin: "6px 0" }}>
                <strong>Categoría:</strong> {team.categoria}
              </p>
            )}

            <div style={{ marginTop: 10 }}>
              {team.miembros.map((m: any, i: number) => (
                <div
                  key={i}
                  style={{
                    background: theme.surfaceAlt,
                    padding: 10,
                    borderRadius: 6,
                    marginBottom: 6,
                  }}
                >
                  {m.nombre} — {m.genero} — Talla {m.talla}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <InnerPage />
    </Suspense>
  );
}