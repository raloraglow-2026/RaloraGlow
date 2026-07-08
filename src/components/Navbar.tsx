"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 2.4 }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-[#C9A86A]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 focus:outline-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] border border-[#C9A86A]/30 flex items-center justify-center">
                  <span className="font-heading text-sm font-semibold gold-gradient-text tracking-wider">
                    RG
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base md:text-lg tracking-[0.15em] text-[#111111] font-medium">
                  RALORA
                </span>
                <span className="font-body text-[10px] tracking-[0.35em] text-[#C9A86A] uppercase">
                  GLOW
                </span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link font-body text-sm tracking-widest text-[#111111]/70 hover:text-[#C9A86A] transition-colors duration-300 uppercase"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() =>
                  window.open("https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Removal%20Body%20Scrub.", "_blank")
                }
                className="btn-luxury ml-4 px-5 py-2.5 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-xs tracking-[0.2em] uppercase font-body rounded-full hover:shadow-[0_8px_25px_rgba(201,168,106,0.4)] transition-all duration-300"
              >
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} className="text-[#111111]" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} className="text-[#111111]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="fixed top-16 left-0 right-0 z-[9980] bg-white/95 backdrop-blur-2xl border-b border-[#C9A86A]/10 shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-sm tracking-[0.2em] uppercase text-[#111111]/70 hover:text-[#C9A86A] transition-colors py-2 border-b border-[#F4F4F4]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => {
                  setMenuOpen(false);
                  window.open("https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Removal%20Body%20Scrub.", "_blank");
                }}
                className="mt-2 w-full py-3 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-xs tracking-[0.25em] uppercase font-body rounded-full"
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
