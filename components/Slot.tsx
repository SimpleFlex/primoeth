// Image slot: shows your picture if "src" is set, otherwise a striped placeholder.
export default function Slot({
  src,
  h,
  label,
}: {
  src?: string;
  h: number;
  label: string;
}) {
  return (
    <div
      className={"slot" + (src ? " has" : "")}
      style={{ height: h, ...(src ? { backgroundImage: `url(${src})` } : {}) }}
    >
      {!src && <span className="mono">+ {label}</span>}
    </div>
  );
}
