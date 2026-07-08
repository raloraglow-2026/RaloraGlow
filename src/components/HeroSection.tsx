"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 5,
}));

export default function HeroSection() {
  const scrollToProduct = () => {
    document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" });
  };
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FCFBF8] to-[#F8F5EF]"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#EFE8DD]/30 translate-x-1/3 -translate-y-1/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#EFE8DD]/20 -translate-x-1/3 translate-y-1/3 blur-[100px] pointer-events-none" />

      {/* Floating gold particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, #D4B97E, #C9A86A)`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" as const }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-36 lg:py-0">

          {/* ── Left: Content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="inline-flex self-start mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#C9A86A]/25 rounded-full shadow-sm backdrop-blur-sm">
                <Sparkles size={11} className="text-[#C9A86A]" />
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A86A]">
                  Premium · Natural · Luxury
                </span>
                <Sparkles size={11} className="text-[#C9A86A]" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.9, ease: "easeOut" as const }}
              className="font-heading text-6xl sm:text-7xl md:text-8xl leading-[1.02] tracking-tight text-[#111111]"
            >
              <span className="block">RALORA</span>
              <span className="block gold-gradient-text italic">GLOW</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 3.0, duration: 0.6 }}
              className="origin-left mt-7 mb-6 h-[1px] w-20 bg-gradient-to-r from-[#C9A86A] to-transparent"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.7 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl text-[#111111]/55 italic leading-relaxed mb-4"
            >
              Luxury skincare for every body.
            </motion.p>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3, duration: 0.7 }}
              className="font-body text-sm md:text-[15px] text-[#111111]/45 leading-[1.8] max-w-md mb-10"
            >
              Handcrafted with thoughtfully selected natural ingredients to create a
              premium self-care experience for men and women.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={scrollToProduct}
                className="btn-luxury group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#111111] text-white text-[11px] tracking-[0.22em] uppercase font-body rounded-full hover:bg-[#1a1a1a] hover:shadow-[0_12px_35px_rgba(17,17,17,0.18)] transition-all duration-300"
              >
                Explore Product
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-luxury group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-[#C9A86A] text-[#C9A86A] text-[11px] tracking-[0.22em] uppercase font-body rounded-full hover:bg-[#C9A86A] hover:text-white hover:shadow-[0_12px_35px_rgba(201,168,106,0.28)] transition-all duration-300"
              >
                <MessageCircle size={13} />
                WhatsApp Us
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.7 }}
              className="mt-12 flex items-center gap-5 flex-wrap"
            >
              {[
                { label: "Natural", sub: "Ingredients", icon: "🌿" },
                { label: "Handcrafted", sub: "Formula", icon: "✦" },
                { label: "Unisex", sub: "Design", icon: "◎" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#C9A86A] text-xs leading-none">{item.icon}</span>
                  <div>
                    <p className="font-body text-[10px] tracking-widest text-[#111111]/50 uppercase leading-tight">{item.label}</p>
                    <p className="font-body text-[9px] tracking-widest text-[#111111]/25 uppercase leading-tight">{item.sub}</p>
                  </div>
                  {i < 2 && <div className="w-[1px] h-7 bg-[#C9A86A]/15 ml-3" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Product Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 1, ease: "easeOut" as const }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full border border-[#C9A86A]/8" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" as const }}
                className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-dashed border-[#C9A86A]/8"
              />
            </div>

            {/* Product jar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative z-10"
            >
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96">
                {/* Card bg */}
                <div className="w-full h-full rounded-3xl bg-gradient-to-b from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] border border-[#C9A86A]/10 luxury-shadow overflow-hidden flex flex-col items-center justify-center gap-5 p-6">

                  {/* Jar */}
                  <div className="relative">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_20px_60px_rgba(201,168,106,0.2)] border border-[#C9A86A]/15 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="font-body text-[7px] md:text-[8px] tracking-[0.4em] text-[#C9A86A] uppercase leading-tight">RALORA</p>
                        <p className="font-body text-[6px] md:text-[7px] tracking-[0.3em] text-[#C9A86A] uppercase leading-tight">GLOW</p>
                        <div className="w-8 h-[0.5px] bg-[#C9A86A]/40 mx-auto my-1.5" />
                        <p className="font-heading text-[8px] md:text-[9px] tracking-wide text-[#111111]/55 uppercase leading-tight">SPCL</p>
                        <p className="font-heading text-[6px] md:text-[7px] text-[#111111]/40 leading-tight mt-0.5">Tan Care</p>
                        <p className="font-heading text-[6px] md:text-[7px] text-[#111111]/40 leading-tight">Body Scrub</p>
                      </div>
                    </div>
                    {/* Lid */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 md:w-36 h-8 rounded-t-full bg-gradient-to-br from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow-md" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-2.5 rounded-t-full bg-white/25" />
                  </div>

                  {/* Tag row */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {["Natural", "Luxury", "Unisex"].map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white/70 rounded-full border border-[#C9A86A]/15 font-body text-[8px] tracking-[0.2em] text-[#C9A86A] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.7, duration: 0.4 }}
                  className="absolute -right-5 md:-right-8 top-6 bg-white rounded-2xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.09)] border border-[#C9A86A]/10"
                >
                  <p className="font-body text-[8px] text-[#C9A86A] tracking-wider">★★★★★</p>
                  <p className="font-heading text-[11px] text-[#111111]/65 mt-0.5">Premium</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.0, duration: 0.4 }}
                  className="absolute -left-5 md:-left-8 bottom-14 bg-white rounded-2xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.09)] border border-[#C9A86A]/10"
                >
                  <p className="font-body text-[8px] text-[#111111]/35 tracking-wider uppercase">Crafted</p>
                  <p className="font-heading text-[11px] text-[#C9A86A] mt-0.5">With Care</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.35em] text-[#111111]/25 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#C9A86A]/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
