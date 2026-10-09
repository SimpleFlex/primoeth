"use client";
import { useEffect, useState } from "react";

export default function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setOut(true);
      setTimeout(() => { setI((x) => (x + 1) % words.length); setOut(false); }, 350);
    }, 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return <em className={"rot" + (out ? " out" : "")}>{words[i]}</em>;
}
