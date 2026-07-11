"use client";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute top-[-200px] right-[-150px] w-[700px] h-[700px] rounded-full bg-[#F8F0E3]/60 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#F8F0E3]/40 blur-[120px]" />

      <div className="wrap w-full relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-20 md:pt-40 md:pb-28">

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" as const }}
            className="mb-10"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
              <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.9, ease: "easeOut" as const }}
            className="font-heading text-[52px] sm:text-[68px] md:text-[82px] lg:text-[96px] leading-[0.95] tracking-[-0.02em] text-[#111111] mb-6"
          >
            Luxury Skincare
            <br />
            <span className="gold-text italic">For Every Body</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.0, duration: 0.5 }}
            className="w-16 h-[1px] bg-[#C9A86A] mb-7"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.7 }}
            className="font-body text-[15px] md:text-[17px] text-[#111111]/45 leading-[1.8] max-w-[520px] mb-10"
          >
            Handcrafted with carefully selected natural ingredients.
            A premium self-care ritual designed for men and women.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
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

          {/* Trust badges — simple text, no emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.7 }}
            className="flex items-center gap-6 md:gap-10 flex-wrap justify-center"
          >
            {["Natural Ingredients", "Handcrafted Formula", "Unisex Design"].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#111111]/35">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
