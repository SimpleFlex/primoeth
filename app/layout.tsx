import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Web3 Growth, Community & Code`,
  description: site.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body>
        <div className="bg1" /><div className="bg2" />
        <Nav />
        <main className="wrap">{children}</main>
        <a href={`mailto:${site.email}`} className="fab">Hire me ↗</a>
        <footer className="wrap foot mono small mut">
          <span>© {new Date().getFullYear()} {site.name} · Web3 growth, community &amp; code</span>
          <span>{site.socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{ marginLeft: 16 }}>{s.label}</a>)}</span>
        </footer>
        <Effects />
      </body>
    </html>
  );
}
