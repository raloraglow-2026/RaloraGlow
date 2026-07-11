"use client";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* Ambient blurs */}
      <div className="pointer-events-none absolute top-[-200px] right-[-100px] w-[750px] h-[750px] rounded-full bg-[#F8F0E3]/50 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#F8F0E3]/35 blur-[130px]" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28 lg:py-0">

          {/* Left — Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">

            {/* Logo on mobile, hidden on desktop (shown on right instead) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.7, ease: "easeOut" as const }}
              className="mb-8 lg:hidden"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.9, ease: "easeOut" as const }}
              className="font-heading text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[90px] leading-[0.95] tracking-[-0.02em] text-[#111111] mb-6"
            >
              Luxury<br />Skincare
              <br />
              <span className="gold-text italic">For Every Body</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.9, duration: 0.5 }}
              className="origin-left w-14 h-[1px] bg-[#C9A86A] mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.7 }}
              className="font-body text-[14px] md:text-[16px] text-[#111111]/45 leading-[1.85] max-w-[420px] mb-9"
            >
              Handcrafted with carefully selected natural ingredients.
              A premium self-care ritual designed for men and women.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button
                onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-dark"
              >
                Discover the Scrub <ArrowDown size={13} />
              </button>
              <button onClick={wa} className="btn-outline-gold">
                <MessageCircle size={13} /> Order on WhatsApp
              </button>
            </motion.div>

            {/* Trust dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.7 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {["Natural Ingredients", "Handcrafted", "Unisex"].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                  <span className="font-body text-[11px] tracking-[0.18em] uppercase text-[#111111]/35">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Product visual (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 1, ease: "easeOut" as const }}
            className="hidden lg:flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="pointer-events-none absolute inset-[-40px] rounded-full bg-[#C9A86A]/5 blur-[60px]" />

              {/* Main product card */}
              <div className="relative bg-gradient-to-b from-[#FDFBF7] to-[#F8F0E3] rounded-[2rem] p-12 border border-[#C9A86A]/10 shadow-[0_32px_100px_rgba(201,168,106,0.14)] w-[380px]">

                {/* Logo/product image */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
                  >
                    <div className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.15)] ring-1 ring-[#C9A86A]/12">
                      <Image src="/logo.png" alt="SPCL Tan Care Body Scrub" fill className="object-cover" />
                    </div>
                  </motion.div>
                </div>

                {/* Product info */}
                <div className="text-center">
                  <p className="font-heading text-[22px] text-[#111111] mb-1">SPCL Tan Care</p>
                  <p className="font-body text-[12px] text-[#111111]/40 tracking-wide mb-4">Body Scrub · 200g</p>
                  <div className="flex justify-center gap-1.5 mb-5">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className="text-[#C9A86A] text-sm">★</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Natural", "Luxury", "Unisex"].map(t => (
                      <span key={t} className="px-3 py-1 rounded-full border border-[#C9A86A]/18 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
