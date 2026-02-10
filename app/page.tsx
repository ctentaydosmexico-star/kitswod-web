"use client";

import { useMemo, useState } from "react";
import { participantes } from "./data/participantes";

type Participante = {
  num: string | number;
  nombre?: string;
  EQUIPO?: string;
  equipo?: string;
  box?: string;
  categoria?: string;
  talla?: string;
  genero?: string;
  athPos?: number;
};

type Team = {
  key: string;
  kit: string;
  equipo: string;
  box?: string;
  categoria?: string;
  miembros: Participante[];
};

const normalizeText = (v: string) =>
  v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export default function Page() {
  const [query, setQuery] = useState("");

  const teams = useMemo(() => {
    const map = new Map<string, Team>();

    participantes.forEach((p) => {
      const kit = String(p.num ?? "").trim();
      if (!kit) return;

      if (!map.has(kit)) {
        map.set(kit, {
          key: kit,
          kit,
          equipo: (p.EQUIPO || p.equipo || "").trim(),
          box: p.box,
          categoria: p.categoria,
          miembros: [],
        });
      }

      map.get(kit)!.miembros.push(p);
    });

    map.forEach((team) => {
      team.miembros.sort((a, b) => (a.athPos || 0) - (b.athPos || 0));
    });

    return Array.from(map.values());
  }, []);

  const results = useMemo(() => {
    const q = normalizeText(query);
    if (!q || q.length < 3) return [];

    return teams.filter(
      (team) =>
        normalizeText(team.equipo).includes(q) ||
        team.miembros.some((m) =>
          normalizeText(m.nombre || "").includes(q)
        )
    );
  }, [query, teams]);

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img
            src="/logo-evento.png"
            alt="Evento"
            style={styles.logoEvento}
          />
          <h1 style={styles.title}>Búsqueda de Kits</h1>
        </div>

        <img
          src="/wod-logo.png"
          alt="WOD"
          style={styles.logoWodHeader}
        />
      </header>

      {/* SEARCH */}
      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre o equipo (mín. 3 letras)"
          style={styles.input}
        />
        <div style={styles.hint}>
          Puedes buscar por integrante o por nombre del equipo.
        </div>
      </section>

      {/* RESULTS */}
      <section style={styles.results}>
        {results.map((team) => (
          <article key={team.key} style={styles.card}>
            {/* TOP */}
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

            {/* BODY */}
            <div>
              <h2 style={styles.teamName}>{team.equipo}</h2>
              <div style={styles.meta}>
                {team.categoria}
                {team.box && ` · ${team.box}`}
              </div>

              <div style={styles.members}>
                {team.miembros.map((p, i) => (
                  <div key={i} style={styles.memberRow}>
                    <div>
                      <div style={styles.memberName}>
                        {`Integrante ${p.athPos}: ${p.nombre}`}
                      </div>
                      <div style={styles.memberSub}>
                        Género: {p.genero || "—"}
                      </div>
                    </div>
                    <span style={styles.badge}>
                      Talla: {p.talla || "—"}
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

/* =========================
   STYLES
   ========================= */
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
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 800,
    margin: 0,
  },
  logoEvento: {
    width: 64,
    height: 64,
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
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: 16,
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
  },
  cardLogoEvento: {
    width: 54,
    height: 54,
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
  },
};