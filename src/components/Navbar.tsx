"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6, ease: "easeOut" as const }}
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-400 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[60px] md:h-[68px]">

          {/* Logo */}
          <button onClick={() => go("#home")} aria-label="RALORA GLOW" className="focus:outline-none flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-[10px] overflow-hidden">
                <Image src="/logo.png" alt="RALORA GLOW" fill sizes="40px" className="object-cover" priority />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading text-[15px] text-[#111111] tracking-[0.08em]">RALORA</span>
                <span className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mt-[2px]">GLOW</span>
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[11px] tracking-[0.14em] uppercase text-[#111111]/50 hover:text-[#C9A86A] transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-gold ml-2 !py-2.5 !px-5 !text-[10px]"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu btn */}
          <button className="lg:hidden p-1 focus:outline-none" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} className="text-[#111111]" /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} className="text-[#111111]" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] md:top-[68px] z-[800] bg-white/98 backdrop-blur-xl border-b border-[#111111]/5 shadow-lg lg:hidden"
          >
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-5 flex flex-col">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => go(l.href)}
                  className="text-left py-3 border-b border-[#111111]/5 last:border-0 font-body text-[12px] tracking-[0.18em] uppercase text-[#111111]/50 hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank"); }}
                className="btn-gold mt-5 justify-center"
              >
                Order on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
