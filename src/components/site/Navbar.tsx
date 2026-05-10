import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logo} alt="Vicomoge" className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 rounded-full object-cover ring-1 ring-[--gold]/40" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-sm sm:text-base text-gold-shimmer">Vicomoge</div>
            <div className="truncate text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[--gold]/70">Interior Designers</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-[--gold]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[--gold] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="lg:hidden text-[--gold]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden mt-3 mx-5 rounded-md p-5 animate-fade-up border border-[--gold]/30 bg-[#0B0B0B] shadow-2xl">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-white/85 hover:text-[--gold]"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
