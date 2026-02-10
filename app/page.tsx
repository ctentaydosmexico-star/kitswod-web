"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
  email?: string;     // SOLO PARA BÚSQUEDA
  telefono?: string;  // SOLO PARA BÚSQUEDA
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

const normalizePhone = (v: string) => v.replace(/\D/g, "");
const normalizeEmail = (v: string) => v.toLowerCase().trim();

export default function Page() {
  const [query, setQuery] = useState("");

  /* =========================
     AGRUPAR POR KIT / EQUIPO
     ========================= */
  const teams = useMemo(() => {
    const map = new Map<string, Team>();

    participantes.forEach((p: Participante) => {
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

  /* =========================
     BUSCADOR
     ========================= */
  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];

    const qText = normalizeText(q);
    const qPhone = normalizePhone(q);
    const qEmail = normalizeEmail(q);
    const textReady = qText.length >= 3;

    return teams.filter((team) => {
      const teamName = normalizeText(team.equipo || "");

      return team.miembros.some((p) => {
        const name = normalizeText(p.nombre || "");
        const phone = normalizePhone(p.telefono || "");
        const email = normalizeEmail(p.email || "");

        return (
          email === qEmail ||
          phone === qPhone ||
          (textReady && name.includes(qText)) ||
          (textReady && teamName.includes(qText))
        );
      });
    });
  }, [query, teams]);

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <Image
            src="/logo-evento.png"
            alt="Evento"
            width={72}
            height={72}
            priority
          />
          <h1 style={styles.title}>Búsqueda de Kits</h1>
        </div>

        <Image
          src="/wod-logo.png"
          alt="WOD"
          width={80}
          height={36}
          priority
        />
      </header>

      {/* SEARCH */}
      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre, EQUIPO, email o teléfono"
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
            {/* Logos en tarjeta */}
            <div style={styles.cardLogos}>
              <Image
                src="/logo-evento.png"
                alt="Evento"
                width={72}
                height={72}
              />
              <Image
                src="/wod-logo.png"
                alt="WOD"
                width={64}
                height={28}
              />
            </div>

            {/* KIT */}
            <div style={styles.kit}>{team.kit}</div>

            <div style={styles.cardBody}>
              <h2 style={styles.teamName}>{team.equipo}</h2>
              <div style={styles.meta}>
                {team.categoria && <span>{team.categoria}</span>}
                {team.box && <span> · {team.box}</span>}
              </div>

              {/* INTEGRANTES */}
              <div style={styles.members}>
                {team.miembros.map((p, i) => (
                  <div key={i} style={styles.memberRow}>
                    <div>
                      <div style={styles.memberName}>
                        {p.athPos ? `Integrante ${p.athPos}: ` : ""}
                        {p.nombre}
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
    padding: 24,
    maxWidth: 1100,
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    margin: 0,
  },
  searchWrap: {
    marginBottom: 18,
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
    position: "relative",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.04)",
  },
  cardLogos: {
    position: "absolute",
    top: 14,
    right: 14,
    display: "flex",
    gap: 10,
  },
  kit: {
    position: "absolute",
    top: 14,
    left: 14,
    fontSize: 56,
    fontWeight: 900,
  },
  cardBody: {
    paddingLeft: 140,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
  },
  meta: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 12,
  },
  members: {
    display: "grid",
    gap: 10,
  },
  memberRow: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 14,
    padding: "10px 12px",
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