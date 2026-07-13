"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";

import { PARTICIPANTES as participantesRaw } from "./data/participantes";
import { EVENTO } from "./config/evento";

type AtletaEquipo = {
  nombre: string;
  talla: string;
  genero: string;
  email?: string;
  telefono?: string;
};

type Participante = {
  num: number | string;
  numCategoria: number | string;
  equipo: string;
  box: string;
  categoria: string;
  status?: string;
  atletas: AtletaEquipo[];
};

const theme = {
  background: "#000000",
  surface: "#111111",
  surfaceAlt: "#1A1A1A",
  red: "#E10600",
  redDark: "#A80000",
  white: "#FFFFFF",
  muted: "#BDBDBD",
  border: "#333333",
};

const normalizeText = (value: string) =>
  (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function InnerPage() {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();

  const participantes = participantesRaw as Participante[];
  const kitFromUrl = searchParams.get("kit");

  const results = useMemo(() => {
    if (kitFromUrl) {
      return participantes.filter(
        (participante) =>
          String(participante.num ?? "").trim() === kitFromUrl.trim()
      );
    }

    const normalizedQuery = normalizeText(query);

    if (normalizedQuery.length < EVENTO.minimoBusqueda) {
      return [];
    }

    return participantes.filter((participante) => {
      const atleta = participante.atletas?.[0];

      const searchableText = normalizeText(
        [
          participante.num,
          participante.numCategoria,
          participante.equipo,
          participante.box,
          participante.categoria,
          atleta?.nombre,
          atleta?.genero,
          atleta?.talla,
        ]
          .filter(Boolean)
          .join(" ")
      );

      return searchableText.includes(normalizedQuery);
    });
  }, [query, participantes, kitFromUrl]);

  const normalizedQuery = normalizeText(query);

  const showMinimumMessage =
    normalizedQuery.length > 0 &&
    normalizedQuery.length < EVENTO.minimoBusqueda &&
    !kitFromUrl;

  const showEmptyMessage =
    normalizedQuery.length >= EVENTO.minimoBusqueda &&
    results.length === 0 &&
    !kitFromUrl;

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.eventLogoWrap}>
          <img
            src={EVENTO.logo}
            alt={EVENTO.nombre}
            style={styles.eventLogo}
          />
        </div>

        <div style={styles.headerContent}>
          <div style={styles.eventTag}>ENTREGA DE KITS</div>

          <h1 style={styles.title}>{EVENTO.nombre}</h1>

          <div style={styles.subtitle}>
            Consulta individual de atletas
          </div>
        </div>

        <img
          src="/wod-logo.png"
          alt="WOD"
          style={styles.wodLogo}
        />
      </header>

      <section style={styles.searchSection}>
        <label style={styles.searchLabel} htmlFor="athlete-search">
          BUSCAR ATLETA
        </label>

        <input
          id="athlete-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Nombre, número, box o categoría"
          style={styles.input}
          autoComplete="off"
        />

        <div style={styles.searchHint}>
          Escribe al menos {EVENTO.minimoBusqueda} letras.
        </div>
      </section>

      {showMinimumMessage && (
        <section style={styles.messageSection}>
          <div style={styles.messageCard}>
            <div style={styles.messageTitle}>
              Escribe al menos {EVENTO.minimoBusqueda} letras
            </div>

            <div style={styles.messageText}>
              Puedes buscar por nombre, número, box o categoría.
            </div>
          </div>
        </section>
      )}

      {showEmptyMessage && (
        <section style={styles.messageSection}>
          <div style={styles.messageCard}>
            <div style={styles.messageTitle}>
              No encontramos resultados
            </div>

            <div style={styles.messageText}>
              Revisa la ortografía o intenta con otro dato.
            </div>
          </div>
        </section>
      )}

      <section style={styles.results}>
        {results.map((participante) => {
          const atleta = participante.atletas?.[0];

          return (
            <article
              key={String(participante.num)}
              style={styles.card}
            >
              <div style={styles.cardTop}>
                <div style={styles.numberBlock}>
                  <div style={styles.numberLabel}>KIT</div>
                  <div style={styles.number}>
                    {participante.num}
                  </div>
                </div>

                <div style={styles.cardMain}>
                  <h2 style={styles.athleteName}>
                    {atleta?.nombre || participante.equipo || "Atleta"}
                  </h2>

                  <div style={styles.category}>
                    {participante.categoria || "Sin categoría"}
                  </div>

                  {participante.box ? (
                    <div style={styles.box}>
                      {participante.box}
                    </div>
                  ) : null}
                </div>
              </div>

              <div style={styles.divider} />

              <div style={styles.detailsGrid}>
                <div style={styles.detailCard}>
                  <div style={styles.detailLabel}>GÉNERO</div>
                  <div style={styles.detailValue}>
                    {atleta?.genero || "—"}
                  </div>
                </div>

                <div style={styles.detailCard}>
                  <div style={styles.detailLabel}>TALLA</div>
                  <div style={styles.sizeValue}>
                    {atleta?.talla || "—"}
                  </div>
                </div>

                <div style={styles.detailCard}>
                  <div style={styles.detailLabel}>
                    NÚMERO DE CATEGORÍA
                  </div>
                  <div style={styles.detailValue}>
                    {participante.numCategoria || "—"}
                  </div>
                </div>
              </div>

              <div style={styles.deliveryNotice}>
                <div style={styles.deliveryTitle}>
                  REVISA TU INFORMACIÓN
                </div>

                <div style={styles.deliveryText}>
                  Confirma nombre, categoría, género y talla antes de recibir
                  tu kit.
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section style={styles.responsivaSection}>
        <div style={styles.responsivaCard}>
          <div style={styles.responsivaIcon}>!</div>

          <div style={styles.responsivaContent}>
            <div style={styles.responsivaTitle}>
              Responsiva obligatoria
            </div>

            <div style={styles.responsivaText}>
              Descarga, revisa y presenta la responsiva correspondiente.
            </div>
          </div>

          <a
            href={EVENTO.responsiva}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.responsivaButton}
          >
            DESCARGAR
          </a>
        </div>
      </section>

      <section style={styles.instagramSection}>
        <div style={styles.instagramCard}>
          <div>
            <div style={styles.instagramTitle}>
              ORGANIZACIÓN DE KITS
            </div>

            <div style={styles.instagramText}>
              Síguenos para conocer avisos y actualizaciones.
            </div>
          </div>

          <a
            href={EVENTO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.instagramButton}
          >
            {EVENTO.instagramTexto}
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <img
          src="/wod-logo.png"
          alt="WOD"
          style={styles.footerLogo}
        />

        <div style={styles.footerText}>
          SISTEMA DE ENTREGA DE KITS WOD
        </div>
      </footer>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={styles.loading}>Cargando...</div>}>
      <InnerPage />
    </Suspense>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: theme.background,
    color: theme.white,
    padding: "18px",
    fontFamily:
      "Arial, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  header: {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto 18px",
    display: "grid",
    gridTemplateColumns: "90px 1fr 80px",
    alignItems: "center",
    gap: 16,
    padding: 18,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderTop: `5px solid ${theme.red}`,
    borderRadius: 16,
    boxSizing: "border-box",
  },

  eventLogoWrap: {
    width: 82,
    height: 82,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.white,
    borderRadius: 12,
    overflow: "hidden",
    padding: 6,
    boxSizing: "border-box",
  },

  eventLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  headerContent: {
    minWidth: 0,
  },

  eventTag: {
    color: theme.red,
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: "0.16em",
    marginBottom: 6,
  },

  title: {
    margin: 0,
    color: theme.white,
    fontSize: "clamp(24px, 5vw, 42px)",
    lineHeight: 1,
    fontWeight: 950,
    textTransform: "uppercase",
  },

  subtitle: {
    marginTop: 8,
    color: theme.muted,
    fontSize: 14,
    fontWeight: 700,
  },

  wodLogo: {
    width: 72,
    maxHeight: 72,
    objectFit: "contain",
    justifySelf: "end",
  },

  searchSection: {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    padding: 18,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: 16,
    boxSizing: "border-box",
  },

  searchLabel: {
    display: "block",
    marginBottom: 8,
    color: theme.red,
    fontWeight: 950,
    fontSize: 13,
    letterSpacing: "0.1em",
  },

  input: {
    width: "100%",
    minHeight: 56,
    padding: "0 16px",
    borderRadius: 12,
    border: `2px solid ${theme.border}`,
    background: theme.background,
    color: theme.white,
    fontSize: 17,
    outline: "none",
    boxSizing: "border-box",
  },

  searchHint: {
    marginTop: 9,
    color: theme.muted,
    fontSize: 13,
  },

  messageSection: {
    width: "100%",
    maxWidth: 980,
    margin: "16px auto 0",
  },

  messageCard: {
    padding: 20,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderLeft: `5px solid ${theme.red}`,
    borderRadius: 14,
  },

  messageTitle: {
    color: theme.white,
    fontSize: 18,
    fontWeight: 950,
    textTransform: "uppercase",
  },

  messageText: {
    marginTop: 6,
    color: theme.muted,
    fontSize: 14,
  },

  results: {
    width: "100%",
    maxWidth: 980,
    margin: "16px auto 0",
    display: "grid",
    gap: 16,
  },

  card: {
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    overflow: "hidden",
  },

  cardTop: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: 18,
    padding: 18,
    alignItems: "center",
  },

  numberBlock: {
    minHeight: 105,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.red,
    borderRadius: 14,
  },

  numberLabel: {
    color: theme.white,
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: "0.12em",
  },

  number: {
    color: theme.white,
    fontSize: 44,
    lineHeight: 1,
    fontWeight: 950,
    marginTop: 4,
  },

  cardMain: {
    minWidth: 0,
  },

  athleteName: {
    margin: 0,
    color: theme.white,
    fontSize: "clamp(22px, 5vw, 34px)",
    lineHeight: 1.05,
    fontWeight: 950,
    textTransform: "uppercase",
    overflowWrap: "anywhere",
  },

  category: {
    display: "inline-flex",
    marginTop: 12,
    padding: "7px 10px",
    background: theme.white,
    color: theme.background,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 950,
    textTransform: "uppercase",
  },

  box: {
    marginTop: 10,
    color: theme.muted,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  divider: {
    height: 1,
    background: theme.border,
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 10,
    padding: 18,
  },

  detailCard: {
    padding: 14,
    background: theme.surfaceAlt,
    border: `1px solid ${theme.border}`,
    borderRadius: 12,
  },

  detailLabel: {
    color: theme.muted,
    fontSize: 11,
    fontWeight: 950,
    letterSpacing: "0.08em",
    marginBottom: 5,
  },

  detailValue: {
    color: theme.white,
    fontSize: 18,
    fontWeight: 900,
  },

  sizeValue: {
    color: theme.red,
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 950,
  },

  deliveryNotice: {
    padding: 16,
    background: theme.background,
    borderTop: `1px solid ${theme.border}`,
  },

  deliveryTitle: {
    color: theme.red,
    fontSize: 13,
    fontWeight: 950,
    letterSpacing: "0.08em",
  },

  deliveryText: {
    marginTop: 5,
    color: theme.muted,
    fontSize: 13,
    lineHeight: 1.4,
  },

  responsivaSection: {
    width: "100%",
    maxWidth: 980,
    margin: "16px auto 0",
  },

  responsivaCard: {
    display: "grid",
    gridTemplateColumns: "64px 1fr auto",
    alignItems: "center",
    gap: 16,
    padding: 18,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: 16,
  },

  responsivaIcon: {
    width: 54,
    height: 54,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.red,
    color: theme.white,
    borderRadius: "50%",
    fontSize: 28,
    fontWeight: 950,
  },

  responsivaContent: {
    minWidth: 0,
  },

  responsivaTitle: {
    color: theme.white,
    fontSize: 19,
    fontWeight: 950,
    textTransform: "uppercase",
  },

  responsivaText: {
    marginTop: 5,
    color: theme.muted,
    fontSize: 13,
    lineHeight: 1.4,
  },

  responsivaButton: {
    minHeight: 48,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 18px",
    background: theme.red,
    color: theme.white,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 950,
    textDecoration: "none",
  },

  instagramSection: {
    width: "100%",
    maxWidth: 980,
    margin: "16px auto 0",
  },

  instagramCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: 18,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: 16,
  },

  instagramTitle: {
    color: theme.white,
    fontSize: 14,
    fontWeight: 950,
  },

  instagramText: {
    marginTop: 4,
    color: theme.muted,
    fontSize: 13,
  },

  instagramButton: {
    color: theme.red,
    fontWeight: 950,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  footer: {
    width: "100%",
    maxWidth: 980,
    margin: "18px auto 0",
    padding: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    borderTop: `1px solid ${theme.border}`,
  },

  footerLogo: {
    width: 46,
    height: 46,
    objectFit: "contain",
  },

  footerText: {
    color: theme.muted,
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.08em",
  },

  loading: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.background,
    color: theme.white,
    fontSize: 18,
    fontWeight: 900,
  },
};