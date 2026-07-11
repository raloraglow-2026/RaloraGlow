"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Product",      href: "#product" },
  { label: "How To Use",   href: "#howtouse" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-2xl shadow-[0_1px_16px_rgba(0,0,0,0.03)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[68px] md:h-[80px]">

          {/* Logo */}
          <button onClick={() => go("#home")} aria-label="RALORA GLOW" className="focus:outline-none flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(201,168,106,0.12)] group-hover:shadow-[0_6px_24px_rgba(201,168,106,0.20)] transition-shadow duration-400">
                <Image src="/logo.png" alt="RALORA GLOW" fill sizes="52px" className="object-cover" priority />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[16px] lg:text-[18px] text-[#111111] tracking-[0.06em] font-medium">RALORA</span>
                <span className="font-body text-[9px] lg:text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase mt-[2px] font-medium">GLOW</span>
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[11px] tracking-[0.22em] uppercase text-[#111111]/45 hover:text-[#C9A86A] transition-colors duration-300 font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-primary ml-3 !py-[10px] !px-6 !text-[9px]"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu btn */}
          <button className="lg:hidden p-2 focus:outline-none" onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X size={22} className="text-[#111111]" /> : <Menu size={22} className="text-[#111111]" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[68px] md:top-[80px] bottom-0 z-[800] bg-white lg:hidden overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-10 flex flex-col min-h-full">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-left py-5 border-b border-[#111111]/5 last:border-0 font-body text-[12px] tracking-[0.2em] uppercase text-[#111111]/50 hover:text-[#C9A86A] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank"); }}
              className="btn-primary mt-10 justify-center"
            >
              Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
