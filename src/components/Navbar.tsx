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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.7, ease: "easeOut" as const }}
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "bg-white/97 backdrop-blur-2xl shadow-[0_1px_20px_rgba(0,0,0,0.04)] border-b border-[#C9A86A]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px] md:h-[76px]">

          {/* Logo — Premium sizing */}
          <button onClick={() => go("#home")} aria-label="RALORA GLOW" className="focus:outline-none flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(201,168,106,0.15)] group-hover:shadow-[0_6px_28px_rgba(201,168,106,0.25)] transition-shadow duration-400">
                <Image src="/logo.png" alt="RALORA GLOW" fill sizes="56px" className="object-cover" priority />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[18px] md:text-[20px] text-[#111111] tracking-[0.06em] font-medium">RALORA</span>
                <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase mt-[3px] font-medium">GLOW</span>
              </div>
            </div>
          </button>

          {/* Desktop links — refined spacing */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[10.5px] tracking-[0.16em] uppercase text-[#111111]/45 hover:text-[#C9A86A] transition-colors duration-300 font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank")}
              className="btn-gold ml-3 !py-3 !px-7 !text-[9.5px]"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu btn */}
          <button className="lg:hidden p-2 focus:outline-none" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} className="text-[#111111]" /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} className="text-[#111111]" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer — premium feel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] md:top-[76px] z-[800] bg-white/99 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:hidden"
          >
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-6 flex flex-col">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left py-3.5 border-b border-[#111111]/4 last:border-0 font-body text-[12px] tracking-[0.2em] uppercase text-[#111111]/50 hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank"); }}
                className="btn-gold mt-6 justify-center"
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
