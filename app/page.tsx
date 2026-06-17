"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { PARTICIPANTES as participantesRaw } from "./data/participantes";

type Participante = {
  num: number | string;
  nombre: string;
  equipo?: string;
  box?: string;
  categoria?: string;
  talla?: string;
  genero?: string;
};

const theme = {
  bg: "#000000",
  primary: "#FF00D8",
  secondary: "#00D9F5",
  surface: "#111111",
  surfaceAlt: "#1A1A1A",
  borderSoft: "#2B2B2B",
  text: "#FFFFFF",
  muted: "#BDBDBD",
  noticeBg: "#1A1A1A",
};

const normalizeText = (v: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function InnerPage() {
  const [query, setQuery] = useState("");
  const participantes = participantesRaw as Participante[];

  const searchParams = useSearchParams();
  const kitFromUrl = searchParams.get("kit");

  const results = useMemo(() => {
    if (kitFromUrl) {
      return participantes.filter(
        (p) => String(p?.num ?? "").trim() === kitFromUrl
      );
    }

    const q = normalizeText(query);
    if (!q) return [];

    return participantes.filter((p) => {
      const num = String(p?.num ?? "").trim();
      const nombre = normalizeText(p?.nombre || "");
      const equipo = normalizeText(p?.equipo || "");
      const box = normalizeText(p?.box || "");
      const categoria = normalizeText(p?.categoria || "");

      return (
        num.includes(q) ||
        nombre.includes(q) ||
        equipo.includes(q) ||
        box.includes(q) ||
        categoria.includes(q)
      );
    });
  }, [query, participantes, kitFromUrl]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <img src="/logo-evento.png" alt="Cobras" style={styles.logoEvento} />

        <div style={styles.headerText}>
          <h1 style={styles.title}>COBRAS ANIVERSARIO 2026</h1>
          <div style={styles.subtitle}>
            Busca por número de kit, atleta o box
          </div>
        </div>

        <img src="/wod-logo.png" alt="WOD" style={styles.logoWodHeader} />
      </header>

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
          placeholder="Número de kit, atleta o box"
          style={styles.input}
        />

        <div style={styles.hint}>
          Puedes buscar por número de kit, nombre de atleta o box.
        </div>
      </section>

      <section style={styles.results}>
        {results.map((item) => {
          const atletas = String(item?.nombre || "")
            .split("/")
            .map((s) => s.trim())
            .filter(Boolean);

          const tallas = String(item?.talla || "")
            .split("/")
            .map((s) => s.trim())
            .filter(Boolean);

          return (
            <article key={String(item.num)} style={styles.card}>
              <div style={styles.cardTop}>
                <div style={styles.kitWrap}>
                  <div style={styles.kitLabel}>KIT</div>
                  <div style={styles.kit}>{item.num}</div>
                </div>

                <div style={styles.cardTopRight}>
                  <img
                    src="/logo-evento.png"
                    alt="Cobras"
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
                <h2 style={styles.teamName}>
                  {item?.equipo?.trim() ? item.equipo : "Individual"}
                </h2>

                <div style={styles.meta}>
                  {item?.categoria || ""}
                  {item?.box ? ` · ${item.box}` : ""}
                </div>

                <div style={styles.members}>
                  {atletas.length > 0 ? (
                    atletas.map((nombreAtleta, i) => (
                      <div key={i} style={styles.memberRow}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={styles.memberName}>
                            {atletas.length > 1
                              ? `Atleta ${i + 1}: `
                              : "Atleta: "}
                            {nombreAtleta}
                          </div>

                          <div style={styles.memberSub}>
                            {item?.genero || "—"}
                          </div>
                        </div>

                        <span style={styles.badge}>
                          Talla: {tallas[i] || tallas[0] || "—"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div style={styles.memberRow}>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={styles.memberName}>Atleta: —</div>
                        <div style={styles.memberSub}>
                          {item?.genero || "—"}
                        </div>
                      </div>

                      <span style={styles.badge}>
                        Talla: {item?.talla || "—"}
                      </span>
                    </div>
                  )}
                </div>

                <div style={styles.notice}>
                  <div style={styles.noticeTitle}>⚠ IMPORTANTE</div>

                  <div style={styles.noticeText}>
                    Para recoger el kit es obligatorio llevar la carta responsiva
                    llena y firmada.
                  </div>

                  <div style={styles.noticeTextStrong}>
                    Sin este documento no se podrá entregar el kit.
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {query.trim().length > 0 && results.length === 0 && (
        <section style={styles.emptySection}>
          <div style={styles.emptyCard}>
            <div style={styles.emptyTitle}>No encontramos resultados</div>
            <div style={styles.emptyText}>
              Revisa la ortografía o intenta con el número de kit.
            </div>
          </div>
        </section>
      )}

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
    color: theme.text,
    minHeight: "100vh",
    padding: 16,
    maxWidth: 1100,
    margin: "0 auto",
    fontFamily: "system-ui, sans-serif",
  },

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    border: `1px solid ${theme.primary}`,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    background: theme.surface,
    textAlign: "center",
  },

  headerText: {
    width: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: 900,
    margin: 0,
    color: theme.text,
    lineHeight: 1.05,
  },

  subtitle: {
    fontSize: 15,
    color: theme.secondary,
    marginTop: 8,
  },

  logoEvento: {
    width: 230,
    maxWidth: "78vw",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  logoWodHeader: {
    width: 95,
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  responsivaSection: {
    marginBottom: 16,
  },

  responsivaCard: {
    border: `1px solid ${theme.borderSoft}`,
    borderRadius: 20,
    padding: 18,
    background: theme.surface,
    textAlign: "center",
  },

  responsivaTitle: {
    fontSize: 17,
    fontWeight: 900,
    marginBottom: 8,
    color: theme.primary,
  },

  responsivaText: {
    fontSize: 14,
    marginBottom: 12,
    color: theme.text,
  },

  responsivaButton: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: 999,
    border: `1px solid ${theme.primary}`,
    background: "linear-gradient(90deg,#FF00D8,#00D9F5)",
    color: "#FFFFFF",
    fontWeight: 900,
    textDecoration: "none",
    fontSize: 15,
  },

  responsivaHint: {
    marginTop: 10,
    fontSize: 12,
    color: theme.muted,
  },

  searchWrap: {
    marginBottom: 16,
  },

  input: {
    width: "100%",
    padding: 14,
    borderRadius: 16,
    background: theme.surface,
    border: `1px solid ${theme.primary}`,
    color: theme.text,
    fontSize: 16,
    outline: "none",
  },

  hint: {
    marginTop: 8,
    fontSize: 12,
    color: theme.muted,
  },

  results: {
    display: "grid",
    gap: 16,
  },

  card: {
    border: `1px solid ${theme.borderSoft}`,
    borderRadius: 22,
    padding: 16,
    background: theme.surface,
    boxShadow: "0 10px 30px rgba(255,0,216,0.16)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
    flexWrap: "wrap",
  },

  kitWrap: {
    minWidth: 0,
  },

  kitLabel: {
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.18em",
    color: theme.secondary,
    marginBottom: 4,
  },

  cardTopRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8,
    flexShrink: 0,
  },

  kit: {
    fontSize: 54,
    fontWeight: 900,
    color: theme.primary,
    lineHeight: 1,
  },

  cardLogoEvento: {
    width: 75,
    maxWidth: "18vw",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  cardLogoWod: {
    width: 55,
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  teamName: {
    fontSize: 20,
    fontWeight: 900,
    color: theme.text,
    margin: "0 0 6px 0",
  },

  meta: {
    fontSize: 13,
    marginBottom: 12,
    color: theme.muted,
  },

  members: {
    display: "grid",
    gap: 10,
  },

  memberRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: 12,
    border: `1px solid ${theme.borderSoft}`,
    borderRadius: 16,
    background: theme.surfaceAlt,
    flexWrap: "wrap",
  },

  memberName: {
    fontWeight: 800,
    color: theme.text,
    wordBreak: "break-word",
  },

  memberSub: {
    fontSize: 12,
    color: theme.secondary,
    marginTop: 2,
  },

  badge: {
    border: `1px solid ${theme.primary}`,
    borderRadius: 999,
    padding: "7px 12px",
    fontWeight: 800,
    color: theme.primary,
    whiteSpace: "nowrap",
    background: "rgba(255,0,216,0.10)",
  },

  notice: {
    marginTop: 14,
    padding: 14,
    border: `1px solid ${theme.primary}`,
    borderRadius: 16,
    background: theme.noticeBg,
  },

  noticeTitle: {
    fontWeight: 900,
    color: theme.primary,
    marginBottom: 4,
  },

  noticeText: {
    fontSize: 13,
    color: theme.text,
  },

  noticeTextStrong: {
    fontWeight: 900,
    color: theme.text,
    marginTop: 4,
  },

  emptySection: {
    marginTop: 8,
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
    fontWeight: 900,
    color: theme.text,
    marginBottom: 4,
  },

  emptyText: {
    fontSize: 13,
    color: theme.muted,
  },

  instagramSection: {
    marginTop: 24,
    paddingBottom: 16,
  },

  instagramCard: {
    padding: 20,
    borderRadius: 20,
    background: theme.surface,
    textAlign: "center",
    border: `1px solid ${theme.borderSoft}`,
  },

  instagramTitle: {
    fontSize: 16,
    fontWeight: 900,
    color: theme.text,
    marginBottom: 12,
  },

  instagramButton: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: 999,
    background: "linear-gradient(90deg,#FF00D8,#00D9F5)",
    color: "#FFFFFF",
    fontWeight: 900,
    textDecoration: "none",
  },

  instagramHint: {
    marginTop: 10,
    fontSize: 12,
    color: theme.muted,
  },
};