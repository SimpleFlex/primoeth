import { site } from "@/data/site";

const faces: [string, string][] = [
  ["translateZ(43px)", "SOL"], ["rotateY(90deg) translateZ(43px)", "WEB3"], ["rotateY(180deg) translateZ(43px)", "GROW"],
  ["rotateY(-90deg) translateZ(43px)", "COMM"], ["rotateX(90deg) translateZ(43px)", "TX"], ["rotateX(-90deg) translateZ(43px)", "DEV"],
];

// The 3D hero: swaying glass slabs + spinning cube (pure CSS, no libraries)
export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="blob" />
      <div className="stack">
        <div className="floor" />
        {site.slabs.map((n, i) => (
          <div key={n} className={`slab s${i}`} style={{ transform: `translateZ(${i * 80}px)` }}><span>#{i + 1}</span><b>{n}</b></div>
        ))}
      </div>
      <div className="cube">
        {faces.map(([t, l]) => <div key={l} className="face" style={{ transform: t }}>{l}</div>)}
      </div>
    </div>
  );
}
