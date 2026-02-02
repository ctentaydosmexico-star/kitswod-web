cd ~/kits-app

cat > app/api/card/route.ts <<'EOF'
import React from "react";
import { ImageResponse } from "next/og";
import { PARTICIPANTES } from "../../data/participantes";

export const runtime = "edge";

function safeText(v: any) {
  return String(v ?? "").trim();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const numStr = searchParams.get("num") ?? "";
  const num = Number(numStr);

  if (!Number.isFinite(num)) {
    return new Response("Missing or invalid ?num=", { status: 400 });
  }

  const p = (PARTICIPANTES as any[]).find((x) => Number(x?.num) === num);

  if (!p) {
    return new Response("Not found", { status: 404 });
  }

  const nombreBox = safeText(p.nombre_box);
  const categoria = safeText(p.categoria);
  const talla = safeText(p.talla);

  const rootStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    padding: 64,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    color: "#000",
    border: "6px solid #000",
    boxSizing: "border-box",
  };

  const headerRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  const leftHeaderStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  };

  const wodStyle: React.CSSProperties = {
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: 1,
  };

  const kitsStyle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 700,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 20,
    color: "#444",
  };

  const rightHeaderStyle: React.CSSProperties = {
    textAlign: "right",
    fontSize: 22,
  };

  const bigNumStyle: React.CSSProperties = {
    marginTop: 64,
    fontSize: 220,
    fontWeight: 900,
    lineHeight: 1,
  };

  const nameStyle: React.CSSProperties = {
    marginTop: 18,
    fontSize: 34,
    fontWeight: 800,
  };

  const metaStyle: React.CSSProperties = {
    marginTop: 14,
    fontSize: 24,
    color: "#444",
  };

  const footerStyle: React.CSSProperties = {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    fontSize: 22,
    color: "#333",
  };

  const year = new Date().getFullYear();

  const el = React.createElement(
    "div",
    { style: rootStyle },

    // Header
    React.createElement(
      "div",
      { style: headerRowStyle },
      React.createElement(
        "div",
        { style: leftHeaderStyle },
        React.createElement("div", { style: wodStyle }, "WOD"),
        React.createElement("div", { style: kitsStyle }, "KITS WOD"),
        React.createElement("div", { style: subtitleStyle }, "Christmas Challenge 2025")
      ),
      React.createElement(
        "div",
        { style: rightHeaderStyle },
        React.createElement("div", { style: { fontWeight: 800 as any } }, "CHRISTMAS CHALLENGE"),
        React.createElement("div", { style: { marginTop: 6 } }, "2025")
      )
    ),

    // Big number
    React.createElement("div", { style: bigNumStyle }, String(num)),

    // Name
    React.createElement("div", { style: nameStyle }, nombreBox),

    // Meta
    React.createElement(
      "div",
      { style: metaStyle },
      `${categoria} · Talla ${talla}`
    ),

    // Footer
    React.createElement(
      "div",
      { style: footerStyle },
      React.createElement("div", null, "kitswod.mx · @thewod_go"),
      React.createElement("div", { style: { fontWeight: 700 as any } }, `© ${year} WOD`)
    )
  );

  return new ImageResponse(el, { width: 1080, height: 1350 });
}
EOF 
