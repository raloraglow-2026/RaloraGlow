"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Product",      href: "#product" },
  { label: "Benefits",     href: "#benefits" },
  { label: "How To Use",   href: "#howtouse" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

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
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.7, ease: "easeOut" as const }}
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "bg-white/94 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-xl flex items-center justify-between h-16 md:h-[70px]">

          {/* Logo */}
          <button onClick={() => go("#home")} aria-label="Home" className="focus:outline-none flex-shrink-0">
            <div className="relative h-9 w-[110px] md:h-11 md:w-[130px] rounded-lg overflow-hidden bg-[#0d0d0d]">
              <Image src="/logo.png" alt="RALORA GLOW" fill className="object-contain p-1.5" priority />
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[11px] tracking-[0.16em] uppercase text-[#111111]/55 hover:text-[#C9A86A] transition-colors duration-250"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-shine ml-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.22em] uppercase font-body hover:shadow-[0_6px_24px_rgba(201,168,106,0.35)] transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-1.5 focus:outline-none" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.div>
                : <motion.div key="m"  initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.div>
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
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 md:top-[70px] z-[800] bg-white/97 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-xl lg:hidden"
          >
            <div className="container-xl py-6 flex flex-col gap-0.5">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left py-2.5 border-b border-[#F4F4F4] last:border-0 font-body text-xs tracking-[0.2em] uppercase text-[#111111]/55 hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank"); }}
                className="mt-4 py-3.5 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.24em] uppercase font-body text-center"
              >
                Order on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
