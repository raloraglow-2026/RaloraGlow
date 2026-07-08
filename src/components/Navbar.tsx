"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" as const, delay: 2.3 }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled
            ? "bg-white/92 backdrop-blur-2xl shadow-[0_2px_24px_rgba(0,0,0,0.05)] border-b border-[#C9A86A]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* ── Logo ── */}
            <motion.button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-0 focus:outline-none flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              aria-label="RALORA GLOW home"
            >
              {/* Black pill bg to match logo design */}
              <div className="relative h-10 w-[120px] md:h-12 md:w-[140px] rounded-xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.png"
                  alt="RALORA GLOW"
                  fill
                  className="object-contain p-1.5"
                  priority
                />
              </div>
            </motion.button>

            {/* ── Desktop Nav ── */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link font-body text-[11px] tracking-[0.18em] text-[#111111]/60 hover:text-[#C9A86A] transition-colors duration-300 uppercase whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I%27m%20interested%20in%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
                    "_blank"
                  )
                }
                className="btn-luxury ml-2 px-5 py-2.5 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.22em] uppercase font-body rounded-full hover:shadow-[0_6px_22px_rgba(201,168,106,0.38)] transition-all duration-300 whitespace-nowrap"
              >
                Order Now
              </button>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              className="xl:hidden p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} className="text-[#111111]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} className="text-[#111111]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="fixed top-16 md:top-[72px] left-0 right-0 z-[9980] bg-white/96 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] xl:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-xs tracking-[0.22em] uppercase text-[#111111]/60 hover:text-[#C9A86A] transition-colors py-2.5 border-b border-[#F4F4F4] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                onClick={() => {
                  setMenuOpen(false);
                  window.open(
                    "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I%27m%20interested%20in%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
                    "_blank"
                  );
                }}
                className="mt-4 w-full py-3.5 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.25em] uppercase font-body rounded-full"
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
