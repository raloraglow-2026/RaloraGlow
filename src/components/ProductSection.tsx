"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Check, Star } from "lucide-react";
import Image from "next/image";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const benefits = [
  "Gently exfoliates dead skin",
  "Visibly reduces tan appearance",
  "Smooths rough, uneven texture",
  "Leaves skin refreshed & luminous",
  "Supports healthy radiance over time",
  "Perfect for all skin types",
];

export default function ProductSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="product" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Our Signature</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center">
            A luxury exfoliant for radiant, silky skin.
          </motion.p>
        </div>

        {/* Main product showcase */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">

          {/* Left: Premium product card */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="bg-gradient-to-b from-[#FDFBF7] to-[#F8F5EF] rounded-[2rem] p-10 md:p-14 border border-[#C9A86A]/10 shadow-[0_24px_80px_rgba(201,168,106,0.12)] flex flex-col items-center text-center relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]" style={{ background: "radial-gradient(circle at top right, #C9A86A, transparent)" }} />

              {/* Product image */}
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-[1.5rem] overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.14)] mb-10 ring-1 ring-[#C9A86A]/10">
                <Image src="/logo.png" alt="RALORA GLOW SPCL Tan Care Body Scrub" fill className="object-cover" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-[#C9A86A] fill-[#C9A86A]" />)}
                <span className="font-body text-[11px] text-[#111111]/35 ml-2">5.0 Rating</span>
              </div>

              <p className="font-heading text-[24px] md:text-[28px] text-[#111111] mb-1">SPCL Tan Care</p>
              <p className="font-body text-[13px] text-[#111111]/40 mb-6 tracking-wide">Premium Body Scrub · 200g</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                {["Natural", "Handcrafted", "Unisex", "Cruelty-Free"].map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full border border-[#C9A86A]/20 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase bg-white/60">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <button onClick={wa} className="btn-gold w-full justify-center !py-4 !text-[11px]">
                <MessageCircle size={15} /> Order on WhatsApp
              </button>
              <p className="font-body text-[10px] text-[#111111]/30 mt-3 tracking-wider">Free premium packaging · Fast dispatch</p>
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <h3 className="h3 mb-3">The Promise</h3>
            <span className="gold-rule-short mb-8 block" />

            <div className="space-y-5 mb-12">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-[#C9A86A]/20">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[14px] text-[#111111]/60 leading-[1.7] group-hover:text-[#111111]/75 transition-colors">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Details strip */}
        <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-8 bg-[#FDFBF7] rounded-2xl border border-[#111111]/4">
            {[
              ["200g", "Net Weight"],
              ["All Skin Types", "Compatibility"],
              ["18 Months", "Shelf Life"],
              ["India", "Handcrafted In"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="font-heading text-[20px] text-[#111111]/80">{val}</p>
                <p className="font-body text-[9px] tracking-[0.25em] text-[#C9A86A] uppercase mt-1.5">{lbl}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
