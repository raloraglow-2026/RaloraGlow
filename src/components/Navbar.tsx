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
            ? "bg-white/95 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">

          {/* ── Logo ── */}
          <button
            onClick={() => go("#home")}
            aria-label="RALORA GLOW"
            className="focus:outline-none flex-shrink-0 group"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <Image
                src="/logo.png"
                alt="RALORA GLOW"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link font-body text-[10px] tracking-[0.16em] uppercase text-[#111111]/52 hover:text-[#C9A86A] transition-colors duration-300 whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-shine ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[9px] tracking-[0.2em] uppercase font-body hover:shadow-[0_6px_22px_rgba(201,168,106,0.38)] transition-all duration-300 whitespace-nowrap"
            >
              Order Now
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden p-1.5 focus:outline-none"
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} className="text-[#111111]" /></motion.div>
                : <motion.div key="m" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} className="text-[#111111]" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 md:top-[72px] z-[800] bg-white/97 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 }}
                  onClick={() => go(l.href)}
                  className="text-left py-3 border-b border-[#F4F4F4] last:border-0 font-body text-xs tracking-[0.2em] uppercase text-[#111111]/50 hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                onClick={() => { setOpen(false); window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank"); }}
                className="mt-5 py-3.5 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.22em] uppercase font-body text-center"
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
