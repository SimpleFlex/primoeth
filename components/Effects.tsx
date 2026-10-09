"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Effects() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const c = (e.target as HTMLElement).closest?.(".card") as HTMLElement | null;
      if (c) { const b = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - b.left + "px"); c.style.setProperty("--my", e.clientY - b.top + "px"); }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
  return null;
}
