"use client";

import { useMemo, useState } from "react";
import { participantes as participantesRaw } from "./data/participantes";

type Team = {
  key: string;
  kit: string;
  equipo: string;
  box?: string;
  categoria?: string;
  miembros: any[]; // data real
};

const normalizeText = (v: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export default function Page() {
  const [query, setQuery] = useState("");

  // ✅ Blindaje total: el dataset manda, no el tipo
  const participantes = participantesRaw as any[];

  const teams = useMemo(() => {
    const map = new Map<string, Team>();

    participantes.forEach((p) => {
      const kit = String(p?.num ?? "").trim();
      if (!kit) return;

      // 👇 aquí está el fix: leer "EQUIPO" sin que TS se queje
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
      team.miembros.sort((a, b) => (Number(a?.athPos) || 0) - (Number(b?.athPos) || 0));
    });

    return Array.from(map.values());
  }, [participantes]);

  const results = useMemo(() => {
    const q = normalizeText(query);
    if (!q || q.length < 3) return [];

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
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src="/logo-evento.png" alt="Evento" style={styles.logoEvento} />
          <h1 style={styles.title}>Búsqueda de Kits</h1>
        </div>

        <img src="/wod-logo.png" alt="WOD" style={styles.logoWodHeader} />
      </header>

      {/* SEARCH */}
      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre o equipo (mín. 3 letras)"
          style={styles.input}
        />
        <div style={styles.hint}>Puedes buscar por integrante o por nombre del equipo.</div>
      </section>

      {/* RESULTS */}
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
                      <div style={styles.memberSub}>Género: {p?.genero || "—"}</div>
                    </div>

                    <span style={styles.badge}>Talla: {p?.talla || "—"}</span>
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

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#000",
    color: "#fff",
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
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    gap: 12,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 800,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  logoEvento: {
    width: 64,
    height: 64,
    objectFit: "contain",
    flex: "0 0 auto",
  },
  logoWodHeader: {
    width: 96,
    height: 36,
    objectFit: "contain",
    flex: "0 0 auto",
  },
  searchWrap: {
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: 16,
    outline: "none",
  },
  hint: {
    marginTop: 6,
    fontSize: 12,
    opacity: 0.7,
  },
  results: {
    display: "grid",
    gap: 16,
  },
  card: {
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 18,
    padding: 16,
    background: "rgba(255,255,255,0.04)",
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
    flex: "0 0 auto",
  },
  kit: {
    fontSize: 44,
    fontWeight: 900,
    lineHeight: 1,
    flex: "0 0 auto",
  },

  // ✅ MÁS GRANDE (lo que pediste)
  cardLogoEvento: {
    width: 80,
    height: 80,
    objectFit: "contain",
    flex: "0 0 auto",
  },

  cardLogoWod: {
    width: 86,
    height: 32,
    objectFit: "contain",
    flex: "0 0 auto",
  },
  teamName: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 4,
    wordBreak: "break-word",
  },
  meta: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 10,
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
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 14,
    padding: 10,
    background: "rgba(0,0,0,0.4)",
  },
  memberName: {
    fontWeight: 800,
    fontSize: 15,
  },
  memberSub: {
    fontSize: 12,
    opacity: 0.75,
  },
  badge: {
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 999,
    padding: "6px 12px",
    fontWeight: 800,
    fontSize: 13,
    whiteSpace: "nowrap",
    flex: "0 0 auto",
  },
};