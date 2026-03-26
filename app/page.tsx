"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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

const theme = {
  bg: "#E4E2DD",
  primary: "#E39161",
  secondary: "#7B4441",
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
    if (kitFromUrl) {
      return teams.filter((t) => t.kit === kitFromUrl);
    }

    const q = normalizeText(query);

    if (!q || q.length < 4) return [];

    return teams.filter((team) => {
      const teamName = normalizeText(team.equipo);
      return (
        teamName.includes(q) ||
        team.miembros.some((m) => normalizeText(m?.nombre || "").includes(q))
      );
    });
  }, [query, teams, kitFromUrl]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src="/logo-evento.png" alt="Evento" style={styles.logoEvento} />
          <h1 style={styles.title}>Búsqueda de Kits</h1>
        </div>

        <img src="/wod-logo.png" alt="WOD" style={styles.logoWodHeader} />
      </header>

      {/* 🔥 BLOQUE RESPONSIVA */}
      <section style={styles.responsivaSection}>
        <div style={styles.responsivaCard}>
          <div style={styles.responsivaTitle}>Carta responsiva</div>
          <div style={styles.responsivaText}>
            Para la entrega de kit es obligatorio presentar la responsiva
            impresa y firmada.
          </div>

          <a
            href="/RESPONSIVA2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.responsivaButton}
          >
            Descargar responsiva
          </a>

          <div style={styles.responsivaHint}>
            Descárgala, imprímela, fírmala y llévala el día de la entrega.
          </div>
        </div>
      </section>

      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre o equipo (mín. 4 letras)"
          style={styles.input}
        />
        <div style={styles.hint}>
          Puedes buscar por atleta o por nombre del equipo.
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
                        {p?.athPos ? `Atleta ${p.athPos}: ` : "Atleta: "}
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

              <div style={styles.notice}>
                <div style={styles.noticeTitle}>⚠ IMPORTANTE</div>
                <div style={styles.noticeText}>
                  Para recoger el kit es obligatorio llevar la carta responsiva
                  llena y firmada por todos los integrantes del equipo.
                </div>
                <div style={styles.noticeTextStrong}>
                  Sin este documento no se podrá entregar el kit.
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section style={styles.instagramSection}>
        <div style={styles.instagramCard}>
          <div style={styles.instagramTitle}>Síguenos en Instagram</div>

          <a
            href="https://www.instagram.com/thewod_go"
            target="_blank"
            rel="noreferrer"
            style={styles.instagramButton}
          >
            Seguir @thewod_go
          </a>

          <div style={styles.instagramHint}>Always Ready to Lift®</div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 16 }}>Cargando…</div>}>
      <InnerPage />
    </Suspense>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    background: theme.bg,
    color: theme.secondary,
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
    border: `2px solid ${theme.primary}`,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    background: theme.surface,
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
    color: theme.primary,
  },

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

  responsivaSection: {
    marginBottom: 16,
  },

  responsivaCard: {
    border: `2px solid ${theme.primary}`,
    borderRadius: 18,
    padding: 16,
    background: theme.surface,
    textAlign: "center",
  },

  responsivaTitle: {
    fontSize: 16,
    fontWeight: 900,
    marginBottom: 8,
    color: theme.primary,
  },

  responsivaText: {
    fontSize: 14,
    marginBottom: 12,
  },

  responsivaButton: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: 999,
    border: `2px solid ${theme.primary}`,
    background: theme.primary,
    color: "#FFFFFF",
    fontWeight: 900,
    textDecoration: "none",
    fontSize: 16,
  },

  responsivaHint: {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.8,
  },

  searchWrap: {
    marginBottom: 16,
  },

  input: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    background: theme.surface,
    border: `2px solid ${theme.secondary}`,
    color: theme.secondary,
    fontSize: 16,
  },

  hint: {
    marginTop: 6,
    fontSize: 12,
    opacity: 0.8,
  },

  warning: {
    marginTop: 6,
    fontSize: 12,
    color: theme.primary,
    fontWeight: 700,
  },

  results: {
    display: "grid",
    gap: 16,
  },

  card: {
    border: `2px solid ${theme.secondary}`,
    borderRadius: 18,
    padding: 16,
    background: theme.surface,
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
    fontSize: 52,
    fontWeight: 900,
    color: theme.primary,
  },

  cardLogoEvento: {
    width: 80,
    height: 80,
  },

  cardLogoWod: {
    width: 86,
    height: 32,
  },

  teamName: {
    fontSize: 18,
    fontWeight: 800,
  },

  meta: {
    fontSize: 13,
    marginBottom: 10,
  },

  members: {
    display: "grid",
    gap: 10,
  },

  memberRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    border: `1px solid ${theme.secondary}`,
    borderRadius: 14,
    background: theme.surfaceAlt,
  },

  memberName: {
    fontWeight: 800,
  },

  memberSub: {
    fontSize: 12,
  },

  badge: {
    border: `2px solid ${theme.secondary}`,
    borderRadius: 999,
    padding: "6px 12px",
    fontWeight: 800,
  },

  notice: {
    marginTop: 12,
    padding: 12,
    border: `2px solid ${theme.primary}`,
    borderRadius: 14,
    background: "#FFF3F4",
  },

  noticeTitle: {
    fontWeight: 900,
  },

  noticeText: {
    fontSize: 13,
  },

  noticeTextStrong: {
    fontWeight: 900,
  },

  instagramSection: {
    marginTop: 24,
  },

  instagramCard: {
    padding: 20,
    borderRadius: 18,
    background: theme.surface,
    textAlign: "center",
  },

  instagramButton: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: 999,
    background: theme.primary,
    color: "#FFFFFF",
    fontWeight: 900,
  },
};