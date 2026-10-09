import Link from "next/link";
import { site } from "@/data/site";
import { works } from "@/data/work";
import { posts } from "@/data/posts";
import { testimonials } from "@/data/testimonials";
import Slot from "./Slot";

export function Sec({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="sec rv">
      <span className="mono eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p className="sub mut">{sub}</p>}
      {children}
    </section>
  );
}
export function Chips({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((s) => (
        <span key={s} className="chip mono">
          {s}
        </span>
      ))}
    </div>
  );
}
export function Marquee() {
  const w = [...site.ticker, ...site.ticker];
  return (
    <div className="marq">
      <div className="track">
        {w.map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </div>
    </div>
  );
}
export function Stats() {
  return (
    <div className="stats rv">
      {site.stats.map((s) => (
        <div key={s.label} className="stat">
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
export function Services() {
  return (
    <Sec
      eyebrow="WHAT I DO"
      title="One person, the whole growth loop."
      sub="Most Web3 teams need community, content and product to work together. I cover all three."
    >
      <div className="grid">
        {site.services.map((s) => (
          <div key={s.n} className="card">
            <span className="mono num">{s.n}</span>
            <h3>{s.t}</h3>
            <p className="mut">{s.d}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}
export function WhyMe() {
  return (
    <Sec
      eyebrow="WHY ME"
      title="Not your usual portfolio."
      sub="Most Web3 profiles list what they can do. This one is built to show it."
    >
      <div className="why">
        {site.why.map((w) => (
          <div key={w.t}>
            <h3>{w.t}</h3>
            <p>{w.d}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}
export function Process() {
  return (
    <Sec eyebrow="HOW I WORK" title="A simple loop that compounds.">
      <div className="proc">
        {site.process.map((p) => (
          <div key={p.n} className="step">
            <b>{p.n}</b>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}
export function WorkGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid">
      {works.slice(0, limit).map((w, i) => (
        <div key={i} className="card case">
          <Slot src={w.image} h={230} label="Add project image" />
          <div className="body">
            <span className="mono num">
              0{i + 1} · {w.role}
            </span>
            <h3>{w.title}</h3>
            <Chips items={w.tags} />
            <div className="res">{w.result}</div>
            {w.url && (
              <a
                href={w.url}
                target="_blank"
                rel="noreferrer"
                className="mono small"
              >
                View case study →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export function PostGrid() {
  return (
    <div className="grid">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/writing/${p.slug}`}
          className="card post"
          style={{ color: "inherit" }}
        >
          <Slot src={p.cover} h={190} label="Add cover image" />
          <span className="mono meta">
            {p.tag.toUpperCase()} · {p.read} read
          </span>
          <h3>{p.title}</h3>
          <p className="mut">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}
export function TestGrid() {
  return (
    <div className="grid">
      {testimonials.map((t, i) => {
        const ini = t.name
          .replace(/[^A-Za-z ]/g, "")
          .split(" ")
          .filter(Boolean)
          .map((w) => w[0])
          .join("")
          .slice(0, 2);
        return (
          <figure key={i} className="card quote">
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <div className="avatar">
                <Slot src={t.image} h={60} label={ini || "+"} />
              </div>
              <span>
                <b>{t.name}</b>
                <br />
                <span className="mut small">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
export function About() {
  return (
    <Sec eyebrow="ABOUT" title="Hi, I’m PRIMO.ETH.">
      <div className="about">
        <div>
          <Slot src={site.photo} h={520} label="Add your photo" />
        </div>
        <div>
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Chips items={site.skills} />
        </div>
      </div>
    </Sec>
  );
}
export function Cta() {
  return (
    <section className="cta rv">
      <div>
        <h2>Let’s grow something.</h2>
        <p>Tell me what you are building. I reply fast.</p>
      </div>
      <a href={`mailto:${site.email}`} className="btn light">
        Send a message →
      </a>
    </section>
  );
}
