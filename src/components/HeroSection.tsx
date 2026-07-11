"use client";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";

// Stagger children animation
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 2.5 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// Floating particles - fixed positions
const dots = [
  { x: 8,  y: 20, size: 3, delay: 0,   dur: 7 },
  { x: 15, y: 75, size: 2, delay: 1.5, dur: 6 },
  { x: 30, y: 10, size: 2.5, delay: 0.8, dur: 8 },
  { x: 50, y: 85, size: 2, delay: 2,   dur: 7.5 },
  { x: 70, y: 25, size: 3, delay: 0.4, dur: 6.5 },
  { x: 85, y: 60, size: 2, delay: 1.2, dur: 7 },
  { x: 92, y: 15, size: 2.5, delay: 2.5, dur: 8.5 },
  { x: 40, y: 50, size: 1.5, delay: 1.8, dur: 9 },
];

export default function HeroSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-[-200px] right-[-100px] w-[750px] h-[750px] rounded-full bg-[#F8F0E3]/50 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#F8F0E3]/35 blur-[130px]" />

      {/* Animated gold dots */}
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-[#C9A86A]"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" as const }}
        />
      ))}

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen py-28 lg:py-0">

          {/* ── Left: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Logo mark - mobile */}
            <motion.div variants={item} className="mb-6 lg:hidden">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)]">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A86A]/20 bg-[#C9A86A]/5">
                <span className="w-1 h-1 rounded-full bg-[#C9A86A] animate-pulse" />
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A86A]">Premium Skincare</span>
              </span>
            </motion.div>

            {/* Animated headline — each line reveals */}
            <motion.h1 variants={item} className="font-heading text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[86px] leading-[0.95] tracking-[-0.02em] text-[#111111] mb-5">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" as const }}
              >
                Luxury
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" as const }}
              >
                Skincare
              </motion.span>
              <motion.span
                className="block gold-text italic"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.0, duration: 0.8, ease: "easeOut" as const }}
              >
                For Every Body
              </motion.span>
            </motion.h1>

            {/* Animated divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" as const }}
              className="h-[1.5px] bg-gradient-to-r from-[#C9A86A] to-transparent mb-6"
            />

            {/* Subtitle with fade */}
            <motion.p variants={item} className="font-body text-[14px] md:text-[15px] text-[#111111]/42 leading-[1.85] max-w-[400px] mb-8">
              Handcrafted natural formulations for radiant skin.
            </motion.p>

            {/* CTAs — slide up */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-dark"
              >
                Discover the Scrub <ArrowDown size={12} />
              </button>
              <button onClick={wa} className="btn-outline-gold">
                <MessageCircle size={12} /> Order Now
              </button>
            </motion.div>

            {/* Trust - fade in */}
            <motion.div variants={item} className="flex items-center gap-5 flex-wrap">
              {["Natural", "Handcrafted", "Unisex"].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#C9A86A]/60" />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111]/30">{t}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Product card (animated) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1.2, ease: "easeOut" as const }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow ring behind card */}
              <motion.div
                className="pointer-events-none absolute inset-[-30px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(201,168,106,0.08), transparent 70%)" }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              />

              {/* Rotating ring */}
              <motion.div
                className="pointer-events-none absolute inset-[-20px] rounded-full border border-dashed border-[#C9A86A]/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
              />

              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE5] rounded-[1.8rem] p-8 sm:p-10 lg:p-12 border border-[#C9A86A]/12 shadow-[0_24px_80px_rgba(201,168,106,0.12)] w-[260px] sm:w-[300px] lg:w-[340px]">

                  {/* Shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-[1.8rem] overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(105deg, transparent 40%, rgba(201,168,106,0.06) 50%, transparent 60%)" }}
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" as const }}
                    />
                  </motion.div>

                  {/* Product image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.14)] ring-1 ring-[#C9A86A]/12">
                      <Image src="/logo.png" alt="SPCL Tan Care Body Scrub" fill className="object-cover" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center relative z-10">
                    <p className="font-heading text-[18px] sm:text-[20px] lg:text-[22px] text-[#111111] mb-0.5">SPCL Tan Care</p>
                    <p className="font-body text-[11px] text-[#111111]/38 tracking-wide mb-4">Body Scrub · 200g</p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-[#C9A86A] text-xs">★</span>)}
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {["Natural", "Luxury", "Unisex"].map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-full border border-[#C9A86A]/15 font-body text-[8px] tracking-[0.18em] text-[#C9A86A] uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.8, duration: 0.4, type: "spring" }}
                  className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#C9A86A]/10"
                >
                  <p className="font-body text-[8px] text-[#C9A86A] tracking-wider">★★★★★</p>
                  <p className="font-heading text-[10px] text-[#111111]/60">Premium</p>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.1, duration: 0.4, type: "spring" }}
                  className="absolute -bottom-2 -left-3 bg-white rounded-xl px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#C9A86A]/10"
                >
                  <p className="font-body text-[8px] text-[#111111]/30 tracking-wider uppercase">Crafted</p>
                  <p className="font-heading text-[10px] text-[#C9A86A]">With Care</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[8px] tracking-[0.35em] text-[#111111]/20 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-[1px] h-6 bg-gradient-to-b from-[#C9A86A]/40 to-transparent"
        />
      </motion.div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
