"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Check } from "lucide-react";
import Image from "next/image";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const benefits = [
  "Helps gently exfoliate dead skin cells",
  "Helps improve the appearance of tanning with regular use",
  "Helps smooth rough, uneven skin texture",
  "Leaves skin feeling soft, smooth and refreshed",
  "Supports healthy-looking, naturally radiant skin",
  "Suitable for all skin types — men and women",
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
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-7 inline-flex">Featured Product</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-6" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center">
            A handcrafted exfoliating body scrub made with natural ingredients. Gently removes dead skin, improves the appearance of tanning, and leaves skin feeling refreshed and smooth.
          </motion.p>
        </div>

        {/* Two-col: visual + details */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-14">

          {/* Left: Product card — 2/5 */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="lg:col-span-2">
            <div className="bg-[#FDFBF7] rounded-3xl p-10 md:p-12 border border-[#C9A86A]/10 shadow-[0_16px_64px_rgba(201,168,106,0.10)] flex flex-col items-center text-center">
              {/* Logo as product image */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] mb-8">
                <Image src="/logo.png" alt="RALORA GLOW SPCL Tan Care Body Scrub" fill className="object-cover" />
              </div>
              <p className="font-heading text-xl text-[#111111] mb-1">SPCL Tan Care</p>
              <p className="font-body text-sm text-[#111111]/40 mb-5">Body Scrub · 200g</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["Natural", "Handcrafted", "Unisex"].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full border border-[#C9A86A]/20 font-body text-[10px] tracking-[0.18em] text-[#C9A86A] uppercase">{t}</span>
                ))}
              </div>
              <button onClick={wa} className="btn-gold w-full justify-center">
                <MessageCircle size={14} /> Order Now
              </button>
            </div>
          </motion.div>

          {/* Right: Benefits + details — 3/5 */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="lg:col-span-3">
            <h3 className="h3 mb-6">What It Does</h3>
            <span className="gold-rule-short mb-7 block" />

            <div className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A86A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#C9A86A]" />
                  </div>
                  <p className="body-lg">{b}</p>
                </div>
              ))}
            </div>

            {/* Quick details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-6 bg-[#FDFBF7] rounded-2xl border border-[#111111]/5">
              {[
                ["200g", "Net Weight"],
                ["All Types", "Skin Type"],
                ["18 Months", "Shelf Life"],
                ["India", "Made In"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="font-heading text-lg text-[#111111]/80">{val}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#111111]/35 uppercase mt-1">{lbl}</p>
                </div>
              ))}
            </div>

            {/* Storage + Patch */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#111111]/5">
                <p className="font-heading text-sm text-[#111111] mb-3">Storage</p>
                <p className="body-sm">Keep in a cool, dry place. Use a dry spoon. Keep lid tightly closed. Avoid introducing water.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#FFF8EC] border border-[#C9A86A]/12">
                <p className="font-heading text-sm text-[#111111] mb-3">Patch Test</p>
                <p className="body-sm">Apply to inner arm 24 hours before first use. Discontinue if irritation occurs. External use only.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
