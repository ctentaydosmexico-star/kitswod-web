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

  // Imagen tipo “tarjeta” lista para IG (1080x1350)
  return new ImageResponse(
    (
      <div
        style={{
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
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: 1 }}>
              WOD
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>KITS WOD</div>
            <div style={{ fontSize: 20, color: "#444" }}>
              Christmas Challenge 2025
            </div>
          </div>

          <div style={{ textAlign: "right", fontSize: 22 }}>
            <div style={{ fontWeight: 800 }}>CHRISTMAS CHALLENGE</div>
            <div style={{ marginTop: 6 }}>2025</div>
          </div>
        </div>

        {/* Big number */}
        <div style={{ marginTop: 64, fontSize: 220, fontWeight: 900, lineHeight: 1 }}>
          {num}
        </div>

        {/* Name */}
        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 800 }}>
          {nombreBox}
        </div>

        {/* Meta */}
        <div style={{ marginTop: 14, fontSize: 24, color: "#444" }}>
          {categoria} · Talla {talla}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#333",
          }}
        >
          <div>kitswod.mx · @thewod_go</div>
          <div style={{ fontWeight: 700 }}>© {new Date().getFullYear()} WOD</div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1350,
    }
  );
}
