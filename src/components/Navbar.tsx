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
            ? "bg-white/98 backdrop-blur-2xl shadow-[0_1px_16px_rgba(0,0,0,0.03)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[60px] lg:h-[72px]">

          {/* Logo */}
          <button onClick={() => go("#home")} aria-label="RALORA GLOW" className="focus:outline-none flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative w-[44px] h-[44px] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(201,168,106,0.12)] group-hover:shadow-[0_6px_24px_rgba(201,168,106,0.20)] transition-shadow duration-400">
                <Image src="/logo.png" alt="RALORA GLOW" fill sizes="44px" className="object-cover" priority />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[17px] lg:text-[18px] text-[#111111] tracking-[0.06em] font-medium">RALORA</span>
                <span className="font-body text-[8px] lg:text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mt-[2px] font-medium">GLOW</span>
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[10px] tracking-[0.18em] uppercase text-[#111111]/45 hover:text-[#C9A86A] transition-colors duration-300 font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank")}
              className="btn-gold ml-3 !py-[10px] !px-6 !text-[9px]"
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed inset-x-0 top-[60px] z-[800] bg-white/99 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] lg:hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8 flex flex-col">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left py-4 border-b border-[#111111]/4 last:border-0 font-body text-[11px] tracking-[0.2em] uppercase text-[#111111]/45 hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank"); }}
                className="btn-gold mt-8 justify-center"
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
