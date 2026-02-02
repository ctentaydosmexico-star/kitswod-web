import Image from "next/image";
import { PARTICIPANTES } from "./data/participantes";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <header style={{ padding: "24px", textAlign: "center" }}>
        <Image
          src="/logo-evento.png"
          alt="Logo Evento"
          width={220}
          height={220}
          priority
        />
      </header>

      <section style={{ maxWidth: 600, margin: "0 auto", padding: "16px" }}>
        <h1 style={{ textAlign: "center" }}>Encuentra tu kit</h1>
        <p style={{ textAlign: "center", opacity: 0.7 }}>
          Busca por correo o nombre
        </p>
      </section>
    </main>
  );
}