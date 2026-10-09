import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import Slot from "@/components/Slot";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <section className="sec article rv">
      <Link href="/writing" className="mono small">← All writing</Link>
      <span className="mono meta">{p.tag.toUpperCase()} · {p.read} read</span>
      <h2>{p.title}</h2>
      <Slot src={p.cover} h={340} label="Add cover image" />
      {p.body.map((t, i) => <p key={i}>{t}</p>)}
    </section>
  );
}
