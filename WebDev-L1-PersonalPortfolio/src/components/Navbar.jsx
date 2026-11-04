import { useState } from "react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold">
          {profile.brand}
          <span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-full font-semibold transition"
        >
          Let's Talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-3xl leading-none text-slate-300 hover:text-cyan-400"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-6 py-4 flex flex-col gap-4 text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
