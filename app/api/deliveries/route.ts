import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kitTeam = searchParams.get("kitTeam");

  if (!kitTeam) {
    return NextResponse.json({ error: "kitTeam requerido" }, { status: 400 });
  }

  const rows = await sql`
    SELECT * FROM deliveries WHERE kit_team = ${Number(kitTeam)}
  `;

  if (rows.length === 0) {
    return NextResponse.json({ status: "PENDIENTE" });
  }

  return NextResponse.json(rows[0]);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { kitTeam, teamId, receivedBy } = body;

  if (!kitTeam || !teamId || !receivedBy) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  await sql`
    INSERT INTO deliveries (kit_team, team_id, status, received_by, received_at)
    VALUES (${kitTeam}, ${teamId}, 'ENTREGADO', ${receivedBy}, NOW())
    ON CONFLICT (kit_team)
    DO UPDATE SET
      status = 'ENTREGADO',
      received_by = ${receivedBy},
      received_at = NOW();
  `;

  return NextResponse.json({ ok: true });
}
