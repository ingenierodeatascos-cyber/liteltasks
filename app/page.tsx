import Link from "next/link";

import { AppShell } from "@/lib/ui/app-shell";

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero">
        <p className="eyebrow">LiteTasks MVP</p>
        <h1 className="title">Base tècnica preparada per començar el producte.</h1>
        <p className="lead">
          Aquesta pantalla confirma que l&apos;aplicació arrenca amb Next.js, React i TypeScript,
          amb estructura inicial per a autenticació i tasques sense avançar encara funcionalitat
          fora de l&apos;abast del sprint.
        </p>
        <div className="linkRow">
          <Link className="buttonLink" href="/login">
            Login
          </Link>
          <Link className="buttonLink secondary" href="/register">
            Register
          </Link>
          <Link className="buttonLink secondary" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
