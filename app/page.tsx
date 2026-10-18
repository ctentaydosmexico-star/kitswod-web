"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
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
  equipo: string;
  categoria: string;
  status?: string;
  atletas: AtletaEquipo[];
};

const theme = {
  background: "#000000",
  surface: "#111111",
  surfaceAlt: "#1A1A1A",
  red: "#F4DF00",
  redDark: "#D6C100",
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

    const isKitNumber = /^\d+$/.test(normalizedQuery);
    if (!isKitNumber && normalizedQuery.length < EVENTO.minimoBusqueda) {
      return [];
    }

    if (isKitNumber) {
      return participantes.filter((participante) => String(participante.num) === normalizedQuery);
    }

    return participantes.filter((participante) => {
      const searchableText = normalizeText(
        [
          participante.num,
          participante.equipo,
          participante.categoria,
          ...participante.atletas.flatMap((atleta) => [
            atleta.nombre,
            atleta.genero,
            atleta.talla,
          ]),
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
    !/^\d+$/.test(normalizedQuery) &&
    !kitFromUrl;

  const showEmptyMessage =
    (normalizedQuery.length >= EVENTO.minimoBusqueda || /^\d+$/.test(normalizedQuery)) &&
    results.length === 0 &&
    !kitFromUrl;

  return (
    <main style={styles.page}>
      <section className="coming-soon-hero" aria-labelledby="coming-soon-title">
        <div className="coming-soon-logo-panel">
          <Image
            src={EVENTO.logo}
            alt="Logo de COLISSEUM ARENA 2026"
            width={1024}
            height={1024}
            priority
            className="coming-soon-logo"
          />
        </div>
        <div className="coming-soon-content">
          <h1 id="coming-soon-title" className="coming-soon-title">
            {EVENTO.nombre}
          </h1>
          <p className="coming-soon-event">CONSULTA TU KIT</p>
        </div>
      </section>

      <header className="event-header" style={styles.header}>
        <div className="coming-soon-logo-panel event-header-logo" style={styles.eventLogoWrap}>
          <Image
            src={EVENTO.logo}
            alt={EVENTO.nombre}
            width={1024}
            height={1024}
            priority
            className="coming-soon-logo"
          />
        </div>

        <div className="event-header-content" style={styles.headerContent}>
          <div style={styles.eventTag}>ENTREGA DE KITS</div>

          <h2 className="event-header-title" style={styles.title}>{EVENTO.nombre}</h2>

          <div style={styles.subtitle}>
            Consulta de equipos y atletas
          </div>
        </div>

        <img
          src="/wod-logo.png"
          alt="WOD"
          className="event-header-wod"
          style={styles.wodLogo}
        />
      </header>

      <section style={styles.searchSection}>
        <label style={styles.searchLabel} htmlFor="athlete-search">
          BUSCAR EQUIPO O ATLETA
        </label>

        <input
          id="athlete-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Atleta, equipo, número de kit o categoría"
          style={styles.input}
          autoComplete="off"
        />

        <div style={styles.searchHint}>
          Escribe al menos {EVENTO.minimoBusqueda} letras o tu número de kit.
        </div>
      </section>

      {showMinimumMessage && (
        <section style={styles.messageSection}>
          <div style={styles.messageCard}>
            <div style={styles.messageTitle}>
              Escribe al menos {EVENTO.minimoBusqueda} letras
            </div>

            <div style={styles.messageText}>
              Puedes buscar por atleta, equipo, número de kit o categoría.
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
          const esEquipo = participante.atletas.length > 1;

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
                    {esEquipo ? participante.equipo : participante.atletas[0]?.nombre || participante.equipo}
                  </h2>

                  <div style={styles.category}>
                    {participante.categoria || "Sin categoría"}
                  </div>
                </div>
              </div>

              <div style={styles.divider} />

              <div className="athlete-details-grid" style={styles.detailsGrid}>
                {participante.atletas.map((atleta, index) => (
                  <div key={`${participante.num}-${index}`} style={styles.detailCard}>
                    <div style={styles.detailLabel}>
                      {esEquipo ? `ATLETA ${index + 1}` : "ATLETA"}
                    </div>
                    <div style={styles.detailValue}>{atleta.nombre}</div>
                    <div style={styles.athleteMeta}>
                      <span>{atleta.genero}</span>
                      <span style={styles.sizeValue}>TALLA {atleta.talla}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.deliveryNotice}>
                <div style={styles.deliveryTitle}>
                  REVISA TU INFORMACIÓN
                </div>

                <div style={styles.deliveryText}>
                  Confirma nombre, categoría y talla antes de recibir tu kit.
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section style={styles.responsivaSection}>
        <div className="responsiva-card" style={styles.responsivaCard}>
          <div style={styles.responsivaIcon}>!</div>

          <div style={styles.responsivaContent}>
            <div style={styles.responsivaTitle}>
              Responsiva obligatoria
            </div>

            <div style={styles.responsivaText}>
              {EVENTO.responsiva
                ? "Descarga, revisa y presenta la responsiva correspondiente."
                : "La responsiva estará disponible próximamente."}
            </div>
          </div>

          {EVENTO.responsiva ? (
            <a
              href={EVENTO.responsiva}
              target="_blank"
              rel="noopener noreferrer"
              className="responsiva-button"
              style={styles.responsivaButton}
            >
              DESCARGAR
            </a>
          ) : null}
        </div>
      </section>

      <section style={styles.instagramSection}>
        <div className="instagram-card" style={styles.instagramCard}>
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
    color: theme.background,
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: "0.12em",
  },

  number: {
    color: theme.background,
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

  athleteMeta: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 12,
    color: theme.muted,
    fontSize: 13,
    fontWeight: 700,
  },

  sizeValue: {
    color: theme.red,
    fontSize: 20,
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
    color: theme.background,
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
    color: theme.background,
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
