"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { PARTICIPANTES as participantesRaw } from "./data/participantes";

type AtletaEquipo = {
  nombre: string;
  talla: string;
  genero: string;
  email?: string;
  telefono?: string;
};

type EquipoParticipante = {
  num: number | string;
  numCategoria: number | string;
  equipo: string;
  box: string;
  categoria: string;
  status?: string;
  atletas: AtletaEquipo[];
};

const theme = {
  bg: "#020711",
  navy: "#061426",
  navy2: "#0A1A30",
  surface: "#071527",
  surfaceAlt: "#102138",
  cream: "#EDE6C9",
  creamSoft: "#CFC5A3",
  creamMuted: "#AFA789",
  border: "rgba(237, 230, 201, 0.62)",
  borderSoft: "rgba(237, 230, 201, 0.28)",
  text: "#F8F3DE",
  muted: "#CFC7A8",
  darkText: "#061426",
  danger: "#EDE6C9",
};

const normalizeText = (v: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function InnerPage() {
  const [query, setQuery] = useState("");
  const participantes = participantesRaw as EquipoParticipante[];

  const searchParams = useSearchParams();
  const kitFromUrl = searchParams.get("kit");

  const results = useMemo(() => {
    if (kitFromUrl) {
      return participantes.filter(
        (p) => String(p?.num ?? "").trim() === kitFromUrl
      );
    }

    const q = normalizeText(query);
    if (q.length < 4) return [];

    return participantes.filter((p) => {
      const equipo = normalizeText(p?.equipo || "");
      const categoria = normalizeText(p?.categoria || "");

      return equipo.includes(q) || categoria.includes(q);
    });
  }, [query, participantes, kitFromUrl]);

  const showMinMessage =
    query.trim().length > 0 && normalizeText(query).length < 4 && !kitFromUrl;

  const showEmptyMessage =
    normalizeText(query).length >= 4 && results.length === 0 && !kitFromUrl;

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerLogoSlot}>
          <img
            src="/logo-evento.png"
            alt="The Last WOD"
            style={styles.logoEvento}
          />
        </div>

        <div style={styles.headerText}>
          <h1 style={styles.title}>THE LAST WOD</h1>
          <div style={styles.subtitle}>Entrega de kits por equipo</div>
        </div>

        <img src="/wod-logo.png" alt="WOD" style={styles.logoWodHeader} />
      </header>

      <section style={styles.searchWrap}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre de equipo o categoría"
          style={styles.input}
        />

        <div style={styles.hint}>
          Busca por nombre de equipo o categoría. Escribe al menos 4 letras.
        </div>
      </section>

      {showMinMessage && (
        <section style={styles.emptySection}>
          <div style={styles.emptyCard}>
            <div style={styles.emptyTitle}>Escribe al menos 4 letras</div>
            <div style={styles.emptyText}>
              Así evitamos mostrar demasiados resultados.
            </div>
          </div>
        </section>
      )}

      {showEmptyMessage && (
        <section style={styles.emptySection}>
          <div style={styles.emptyCard}>
            <div style={styles.emptyTitle}>No encontramos resultados</div>
            <div style={styles.emptyText}>
              Revisa la ortografía o intenta con otra categoría.
            </div>
          </div>
        </section>
      )}

      <section style={styles.results}>
        {results.map((item) => (
          <article key={String(item.num)} style={styles.card}>
            <div style={styles.cardTop}>
              <div style={styles.kitWrap}>
                <div style={styles.kitLabel}>KIT</div>
                <div style={styles.kit}>{item.num}</div>
              </div>

              <div style={styles.cardInfo}>
                <h2 style={styles.teamName}>{item.equipo || "Equipo"}</h2>

                <div style={styles.categoryPill}>
                  {item.categoria || "Sin categoría"}
                </div>

                {item.box ? (
                  <div style={styles.box}>⌖ {item.box}</div>
                ) : null}
              </div>

              <div style={styles.chevron}>⌄</div>
            </div>

            <div style={styles.divider} />

            <div style={styles.members}>
              {item.atletas.map((atleta, i) => (
                <div key={i} style={styles.memberBlock}>
                  <div style={styles.memberLabel}>ATLETA {i + 1}</div>
                  <div style={styles.memberName}>{atleta.nombre || "—"}</div>
                  <div style={styles.memberSub}>
                    {atleta.genero || "—"} · Talla {atleta.talla || "—"}
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.kitTotal}>
              <span style={styles.kitIcon}>□</span>
              Entregar {item.atletas.length} kits
            </div>
          </article>
        ))}
      </section>

      <section style={styles.responsivaSection}>
        <div style={styles.responsivaCard}>
          <div style={styles.responsivaIcon}>▤</div>

          <div style={styles.responsivaBody}>
            <div style={styles.responsivaTitle}>Carta responsiva</div>

            <div style={styles.responsivaText}>
              Para la entrega de kit es obligatorio presentar la responsiva
              impresa y firmada.
            </div>

            <div style={styles.responsivaHint}>
              Descárgala, imprímela, fírmala y llévala el día de la entrega.
            </div>
          </div>

          <a
            href="/RESPONSIVA-THE-LAST-WOD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.responsivaButton}
          >
            Descargar responsiva
          </a>
        </div>
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
            @thewod_go
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
    background: `radial-gradient(circle at top, ${theme.navy2} 0%, ${theme.bg} 44%, #000000 100%)`,
    color: theme.text,
    minHeight: "100vh",
    padding: 14,
    maxWidth: 760,
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  header: {
    display: "grid",
    gridTemplateColumns: "90px 1fr 86px",
    alignItems: "center",
    gap: 12,
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    background: `linear-gradient(180deg, rgba(7,21,39,0.98), rgba(2,7,17,0.98))`,
    boxShadow: "0 18px 38px rgba(0,0,0,0.28)",
  },

  headerLogoSlot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },

  logoEvento: {
    width: 74,
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  headerText: {
    textAlign: "center",
    minWidth: 0,
  },

  title: {
    fontSize: 30,
    fontWeight: 950,
    margin: 0,
    color: theme.cream,
    lineHeight: 1,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  subtitle: {
    fontSize: 13,
    color: theme.cream,
    marginTop: 8,
    fontWeight: 850,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  logoWodHeader: {
    width: 76,
    height: "auto",
    objectFit: "contain",
    display: "block",
    justifySelf: "end",
  },

  searchWrap: {
    marginBottom: 14,
  },

  input: {
    width: "100%",
    padding: "18px 18px",
    borderRadius: 16,
    background: `linear-gradient(180deg, rgba(7,21,39,0.96), rgba(6,20,38,0.96))`,
    border: `1px solid ${theme.borderSoft}`,
    color: theme.text,
    fontSize: 17,
    outline: "none",
    boxSizing: "border-box",
  },

  hint: {
    marginTop: 12,
    fontSize: 14,
    color: theme.cream,
    lineHeight: 1.35,
  },

  results: {
    display: "grid",
    gap: 16,
  },

  card: {
    border: `1px solid ${theme.borderSoft}`,
    borderRadius: 18,
    padding: 16,
    background: `linear-gradient(180deg, rgba(7,21,39,0.98), rgba(3,12,24,0.98))`,
    boxShadow: "0 18px 38px rgba(0,0,0,0.28)",
  },

  cardTop: {
    display: "grid",
    gridTemplateColumns: "92px 1fr 28px",
    alignItems: "start",
    gap: 14,
  },

  kitWrap: {
    minWidth: 0,
  },

  kitLabel: {
    fontSize: 13,
    fontWeight: 950,
    color: theme.cream,
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  kit: {
    fontSize: 62,
    fontWeight: 950,
    color: theme.cream,
    lineHeight: 0.9,
    letterSpacing: "-0.05em",
  },

  cardInfo: {
    minWidth: 0,
  },

  teamName: {
    fontSize: 24,
    fontWeight: 950,
    color: theme.cream,
    margin: "0 0 8px 0",
    textTransform: "uppercase",
    lineHeight: 1.05,
    wordBreak: "break-word",
    letterSpacing: "0.03em",
  },

  categoryPill: {
    display: "inline-block",
    border: `1px solid ${theme.cream}`,
    color: theme.cream,
    borderRadius: 10,
    padding: "4px 10px",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  box: {
    fontSize: 14,
    color: theme.cream,
    fontWeight: 700,
    lineHeight: 1.3,
  },

  chevron: {
    color: theme.cream,
    fontSize: 34,
    lineHeight: 1,
    fontWeight: 900,
    textAlign: "right",
  },

  divider: {
    height: 1,
    background: theme.borderSoft,
    margin: "14px 0",
  },

  members: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
  },

  memberBlock: {
    minWidth: 0,
    padding: "0 8px",
    borderRight: `1px solid ${theme.borderSoft}`,
    textAlign: "center",
  },

  memberLabel: {
    fontSize: 12,
    color: theme.cream,
    fontWeight: 950,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginBottom: 6,
  },

  memberName: {
    fontSize: 16,
    fontWeight: 850,
    color: theme.text,
    lineHeight: 1.18,
    wordBreak: "break-word",
  },

  memberSub: {
    fontSize: 13,
    color: theme.cream,
    marginTop: 5,
    fontWeight: 650,
    lineHeight: 1.2,
  },

  kitTotal: {
    marginTop: 16,
    padding: "12px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.10)",
    border: `1px solid ${theme.borderSoft}`,
    color: theme.cream,
    fontWeight: 900,
    textAlign: "center",
    fontSize: 17,
  },

  kitIcon: {
    display: "inline-block",
    marginRight: 8,
    fontWeight: 950,
  },

  emptySection: {
    marginTop: 8,
    marginBottom: 14,
  },

  emptyCard: {
    padding: 18,
    borderRadius: 18,
    background: theme.surface,
    border: `1px solid ${theme.borderSoft}`,
    textAlign: "center",
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: 950,
    color: theme.cream,
    marginBottom: 4,
  },

  emptyText: {
    fontSize: 13,
    color: theme.muted,
  },

  responsivaSection: {
    marginTop: 18,
    marginBottom: 14,
  },

  responsivaCard: {
    display: "grid",
    gridTemplateColumns: "52px 1fr 190px",
    alignItems: "center",
    gap: 14,
    border: `1px solid ${theme.borderSoft}`,
    borderRadius: 18,
    padding: 16,
    background: `linear-gradient(180deg, rgba(7,21,39,0.98), rgba(3,12,24,0.98))`,
  },

  responsivaIcon: {
    fontSize: 44,
    color: theme.cream,
    lineHeight: 1,
    textAlign: "center",
  },

  responsivaBody: {
    minWidth: 0,
  },

  responsivaTitle: {
    fontSize: 22,
    fontWeight: 950,
    marginBottom: 6,
    color: theme.cream,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  },

  responsivaText: {
    fontSize: 14,
    marginBottom: 8,
    color: theme.text,
    lineHeight: 1.35,
  },

  responsivaHint: {
    fontSize: 13,
    color: theme.cream,
    lineHeight: 1.35,
  },

  responsivaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 62,
    padding: "12px 16px",
    borderRadius: 14,
    border: `1px solid ${theme.cream}`,
    background: `linear-gradient(180deg, ${theme.cream}, ${theme.creamSoft})`,
    color: theme.darkText,
    fontWeight: 950,
    textDecoration: "none",
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase",
    boxSizing: "border-box",
  },

  instagramSection: {
    marginTop: 16,
    paddingBottom: 18,
  },

  instagramCard: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 14,
    background: `linear-gradient(180deg, rgba(7,21,39,0.98), rgba(3,12,24,0.98))`,
    border: `1px solid ${theme.borderSoft}`,
  },

  instagramTitle: {
    fontSize: 13,
    fontWeight: 950,
    color: theme.cream,
    textTransform: "uppercase",
  },

  instagramButton: {
    color: theme.cream,
    fontWeight: 850,
    textDecoration: "none",
    fontSize: 14,
    borderLeft: `1px solid ${theme.borderSoft}`,
    borderRight: `1px solid ${theme.borderSoft}`,
    padding: "0 16px",
  },

  instagramHint: {
    fontSize: 13,
    color: theme.cream,
    fontWeight: 700,
    textAlign: "right",
  },
};
