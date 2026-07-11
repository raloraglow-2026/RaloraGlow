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
  "Detoxifies and refreshes skin",
  "Suitable for face and body",
  "Leaves skin smooth and radiant",
  "For all skin types",
  "100% natural formulation",
];

export default function ProductSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="product" className="sec bg-white relative overflow-hidden">

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Our Signature</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center">
            A natural detox scrub powder for face and body.
          </motion.p>
        </div>

        {/* 2-col showcase */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Product card */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="bg-[#FDFBF7] rounded-3xl p-12 md:p-16 border border-[#C9A86A]/8 flex flex-col items-center text-center">

              {/* Product image */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.12)] mb-8 ring-1 ring-[#C9A86A]/10">
                <Image src="/logo.png" alt="RALORA GLOW SPCL Tan Care Body Scrub" fill className="object-cover" />
              </div>

              {/* Name */}
              <p className="font-heading text-[28px] md:text-[32px] text-[#111111] mb-1">SPCL Tan Care</p>
              <p className="font-body text-[13px] text-[#111111]/35 mb-5 tracking-wide">Body Scrub · 200g</p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-[#C9A86A] fill-[#C9A86A]" />)}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {["Natural", "Handcrafted", "Unisex", "Face & Body"].map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full border border-[#C9A86A]/15 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <button onClick={wa} className="btn-gold w-full justify-center !py-4 !text-[10px]">
                <MessageCircle size={15} /> Order on WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <h3 className="h3 mb-3">The Promise</h3>
            <span className="gold-rule-short mb-10 block" />

            <div className="space-y-7 mb-14">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-[#C9A86A]/20">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[15px] text-[#111111]/55 leading-[1.8] group-hover:text-[#111111]/70 transition-colors">{b}</p>
                </div>
              ))}
            </div>

            {/* Details strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 bg-[#FDFBF7] rounded-2xl border border-[#111111]/4">
              {[
                ["200g", "Net Weight"],
                ["All Skin Types", "Compatibility"],
                ["18 Months", "Shelf Life"],
                ["India", "Crafted In"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="font-heading text-[20px] text-[#111111]/75">{val}</p>
                  <p className="font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase mt-1.5">{lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
