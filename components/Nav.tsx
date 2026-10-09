"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/writing", "Writing"],
  ["/testimonials", "Testimonials"],
  ["/about", "About"],
];

export default function Nav() {
  const path = usePathname();
  const base = path === "/" ? "/" : "/" + path.split("/")[1];
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);
  function toggleTheme() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  }
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo mono" aria-label="Primo home">
          <svg
            className="eagle"
            viewBox="0 0 48 32"
            width="34"
            height="23"
            aria-hidden="true"
          >
            <g className="eagle-wings">
              {/* left wing */}
              <path d="M24 14C18 8 10 6 2 8l3 3-3 2 4 2-2 3c8-1 15 0 20 3z" />
              {/* right wing */}
              <path d="M24 14c6-6 14-8 22-6l-3 3 3 2-4 2 2 3c-8-1-15 0-20 3z" />
            </g>
            {/* body + tail */}
            <path d="M24 9c2 0 3 2 3 4v7l-2 6-1 2-1-2-2-6v-7c0-2 1-4 3-4z" />
            {/* head + beak */}
            <circle cx="24" cy="8" r="2.6" />
            <path className="eagle-beak" d="M22.8 9.6L24 12.6l1.2-3z" />
          </svg>
          <span>
            Primo<span className="logo-dot">.</span>
          </span>
        </Link>
        <nav className={open ? "links open" : "links"}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={base === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="tools">
          <button
            className="icon"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
          >
            {dark ? "☀" : "☾"}
          </button>
          <button
            className="icon menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
