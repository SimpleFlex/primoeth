import Link from "next/link";
import { site } from "@/data/site";
import Scene from "@/components/Scene";
import RotatingWord from "@/components/RotatingWord";
import { Sec, Marquee, Stats, Services, WhyMe, Process, WorkGrid, PostGrid, TestGrid, About, Cta } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="mono ok"><i className="dot" />Finalized — available for hire</span>
          <h1>I turn Web3 projects into <RotatingWord words={site.words} /></h1>
          <p className="lead mut">{site.intro}</p>
          <div className="roles">{site.roles.map((r) => <span key={r} className="role mono">{r}</span>)}</div>
          <div className="btns">
            <Link href="/work" className="btn primary">See my work</Link>
            <Link href="/about" className="btn ghost">About me</Link>
          </div>
        </div>
        <Scene />
      </section>
      <Marquee />
      <Stats />
      <Services />
      <WhyMe />
      <Sec eyebrow="PROOF OF WORK" title="Selected work" sub="Real projects, real outcomes.">
        <WorkGrid limit={3} />
        <Link href="/work" className="mono">All work →</Link>
      </Sec>
      <Process />
      <Sec eyebrow="WRITING" title="Notes on community & growth" sub="Threads and articles on what works in Web3."><PostGrid /></Sec>
      <Sec eyebrow="TESTIMONIALS" title="Kind words"><TestGrid /></Sec>
      <About />
      <Cta />
    </>
  );
}
