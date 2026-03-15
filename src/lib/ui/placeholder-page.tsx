import Link from "next/link";

import { AppShell } from "@/lib/ui/app-shell";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  children,
}: PlaceholderPageProps) {
  return (
    <AppShell>
      <section className="hero stack">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="title">{title}</h1>
          <p className="lead">{description}</p>
        </div>

        {children}

        <div className="linkRow">
          <Link className="buttonLink secondary" href="/">
            Tornar a l&apos;inici
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
