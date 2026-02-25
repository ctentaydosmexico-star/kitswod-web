"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { PARTICIPANTES as participantesRaw } from "./data/participantes";

type Team = {
  key: string;
  kit: string;
  equipo: string;
  box?: string;
  categoria?: string;
  miembros: any[];
};

const normalizeText = (v: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export default function Page() {
  const [query, setQuery] = useState("");
  const participantes = participantesRaw as any[];

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

      map.get(kit)!.miembros.push(p);
    });

    map.forEach((team) => {
      team.miembros.sort(
        (a, b) => (Number(a?.athPos) || 0) - (Number(b?.athPos) || 0)
      );
    });

    return Array.from(map.values());
  }, [participantes]);

  const results = useMemo(() => {
    const q = normalizeText(query);

    // 🔥 mínimo 4 letras
    if (!q || q.length < 4) return [];

    return teams.filter((team) => {
      const teamName = normalizeText(team.equipo);
      return (
        teamName.includes(q) ||
        team.miembros.some((m) => normalizeText(m?.nombre || "").includes(q))
      );
    });
  }, [query, teams]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src="/logo-evento.png" alt="Evento" style={styles.logoEvento} />
          <h1 style={styles.title}>Búsqueda de Kits</h1>
        </div>

        <img src="/wod-logo.png" alt="WOD" style={styles.logoWodHeader} />
      </header>

      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre o equipo (mín. 4 letras)"
          style={styles.input}
        />
        <div style={styles.hint}>
          Puedes buscar por integrante o por nombre del equipo.
        </div>

        {query.length > 0 && query.length < 4 && (
          <div style={styles.warning}>
            Escribe al menos 4 letras para buscar.
          </div>
        )}
      </section>

      <section style={styles.results}>
        {results.map((team) => (
          <article key={team.key} style={styles.card}>
            <div style={styles.cardTop}>
              <div style={styles.kit}>{team.kit}</div>

              <div style={styles.cardTopRight}>
                <img
                  src="/logo-evento.png"
                  alt="Evento"
                  style={styles.cardLogoEvento}
                />
                <img
                  src="/wod-logo.png"
                  alt="WOD"
                  style={styles.cardLogoWod}
                />
              </div>
            </div>

            <div>
              <h2 style={styles.teamName}>{team.equipo}</h2>
              <div style={styles.meta}>
                {team.categoria || ""}
                {team.box ? ` · ${team.box}` : ""}
              </div>

              <div style={styles.members}>
                {team.miembros.map((p, i) => (
                  <div key={i} style={styles.memberRow}>
                    <div style={{ minWidth: 0 }}>
                      <div style={styles.memberName}>
                        {p?.athPos ? `Integrante ${p.athPos}: ` : "Integrante: "}
                        {p?.nombre || "—"}
                      </div>
                      <div style={styles.memberSub}>
                        Género: {p?.genero || "—"}
                      </div>
                    </div>

                    <span style={styles.badge}>
                      Talla: {p?.talla || "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    background: "#FCFAE1",
    color: "#665249",
    minHeight: "100vh",
    padding: 16,
    maxWidth: 1100,
    margin: "0 auto",
    fontFamily: "system-ui",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #665249",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    gap: 12,
    background: "#FFFFFF",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
  },

  // 🔥 50% más grande (64 → 96)
  logoEvento: {
    width: 96,
    height: 96,
    objectFit: "contain",
  },

  logoWodHeader: {
    width: 96,
    height: 36,
    objectFit: "contain",
  },

  searchWrap: {
    marginBottom: 16,
  },

  input: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    background: "#FFFFFF",
    border: "1px solid #665249",
    color: "#665249",
    fontSize: 16,
    outline: "none",
  },

  hint: {
    marginTop: 6,
    fontSize: 12,
    opacity: 0.8,
  },

  warning: {
    marginTop: 6,
    fontSize: 12,
    color: "#665249",
    fontWeight: 600,
  },

  results: {
    display: "grid",
    gap: 16,
  },

  card: {
    border: "1px solid #665249",
    borderRadius: 18,
    padding: 16,
    background: "#FFFFFF",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 12,
  },

  cardTopRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 6,
  },

  kit: {
    fontSize: 44,
    fontWeight: 900,
    lineHeight: 1,
    color: "#665249",
  },

  cardLogoEvento: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },

  cardLogoWod: {
    width: 86,
    height: 32,
    objectFit: "contain",
  },

  teamName: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 4,
  },

  meta: {
    fontSize: 13,
    marginBottom: 10,
    opacity: 0.9,
  },

  members: {
    display: "grid",
    gap: 10,
  },

  memberRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    border: "1px solid #E8E3D1",
    borderRadius: 14,
    padding: 10,
    background: "#FAF8E8",
  },

  memberName: {
    fontWeight: 800,
    fontSize: 15,
  },

  memberSub: {
    fontSize: 12,
    opacity: 0.8,
  },

  badge: {
    border: "1px solid #665249",
    borderRadius: 999,
    padding: "6px 12px",
    fontWeight: 800,
    fontSize: 13,
    whiteSpace: "nowrap",
    color: "#665249",
    background: "#FFFFFF",
  },
};