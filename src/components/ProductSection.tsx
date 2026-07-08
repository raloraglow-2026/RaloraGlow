"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const up = {
  hidden: { opacity:0, y:28 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.11, duration:0.65, ease:"easeOut" as const } }),
};

const benefits = [
  "Helps gently exfoliate dead skin cells",
  "Helps improve the appearance of tanning",
  "Leaves skin feeling soft and refreshed",
  "Supports healthy-looking radiant skin",
  "Suitable for all skin types",
  "Designed for men and women",
];

const details = [
  ["Net Weight", "200g"],
  ["For", "Men & Women"],
  ["Skin Type", "All Types"],
  ["Shelf Life", "18 Months"],
  ["Storage", "Cool, dry place"],
  ["Origin", "Handcrafted in India"],
];

export default function ProductSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="product" className="relative section bg-white overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-[#EFE8DD]/10 translate-x-1/2 translate-y-1/2 blur-[120px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Featured Product</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.p   custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-sub text-center mx-auto">
            A handcrafted exfoliating scrub with carefully selected natural ingredients. Gentle on skin, real results.
          </motion.p>
        </div>

        {/* Main */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-18 items-center mb-12">

          {/* Jar visual */}
          <motion.div custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="relative">
            <div className="pointer-events-none absolute inset-8 rounded-3xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] blur-3xl opacity-40" />
            <div className="relative z-10 bg-gradient-to-br from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] rounded-3xl p-10 md:p-14 border border-[#C9A86A]/10 card-shadow">
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y:[0,-8,0] }} transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut" as const }}
                  className="relative"
                >
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_18px_60px_rgba(201,168,106,0.16)] border border-[#C9A86A]/12 flex items-center justify-center">
                    <div className="text-center px-5">
                      <p className="font-body text-[7px] tracking-[0.45em] text-[#C9A86A] uppercase">RALORA</p>
                      <p className="font-body text-[6px] tracking-[0.38em] text-[#C9A86A] uppercase">GLOW</p>
                      <div className="w-9 h-[0.5px] bg-[#C9A86A]/30 mx-auto my-2" />
                      <p className="font-heading text-[9px] tracking-widest text-[#111111]/48 uppercase">SPCL</p>
                      <p className="font-heading text-[7px] text-[#111111]/35 mt-0.5">Tan Care Body Scrub</p>
                      <p className="font-body text-[7px] text-[#111111]/22 mt-1.5">200g</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-44 md:w-52 h-9 rounded-t-full bg-gradient-to-r from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow-lg" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-26 h-3 rounded-t-full bg-white/20" />
                </motion.div>
              </div>
              <div className="flex justify-center flex-wrap gap-2">
                {["Natural Formula","Unisex","Handcrafted","Gentle"].map(b=>(
                  <span key={b} className="px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A86A]/14 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase shadow-sm">{b}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="flex flex-col">
            <span className="self-start mb-5 px-3.5 py-1.5 rounded-full bg-[#F8F5EF] border border-[#C9A86A]/16 font-body text-[9px] tracking-[0.28em] text-[#C9A86A] uppercase inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A86A]" /> Premium Handcrafted
            </span>
            <h3 className="font-heading text-2xl md:text-3xl text-[#111111] leading-[1.15] mb-3">Premium<br /><span className="italic text-[#C9A86A]">Glow Ritual</span></h3>
            <div className="h-[1px] w-8 bg-gradient-to-r from-[#C9A86A] to-transparent mb-5" />
            <p className="font-body text-sm text-[#111111]/46 leading-[1.8] mb-6">
              Gently exfoliates. Improves appearance. Leaves skin soft and radiant. For all skin types.
            </p>

            {/* Benefits list */}
            <div className="space-y-2 mb-8">
              {benefits.slice(0, 4).map((b,i)=>(
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-[6px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <p className="font-body text-xs md:text-sm text-[#111111]/50">{b}</p>
                </div>
              ))}
            </div>

            <button
              onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-shine inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.2em] uppercase font-body hover:shadow-[0_10px_32px_rgba(201,168,106,0.35)] transition-all duration-300"
            >
              <MessageCircle size={13} /> Order Now
            </button>
            <p className="mt-2.5 font-body text-[9px] tracking-wider text-[#111111]/22 uppercase">✓ Fast Response · ✓ Premium Packaging</p>
          </motion.div>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Product details */}
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="md:col-span-2 bg-[#FCFBF8] rounded-lg p-5 md:p-6 border border-[#F0EDE8]">
            <p className="font-heading text-[14px] md:text-[15px] text-[#111111] mb-3">Product Details</p>
            <div className="h-[1px] bg-[#F0EDE8] mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {details.map(([k,v2])=>(
                <div key={k}>
                  <p className="font-body text-[8px] tracking-[0.25em] text-[#C9A86A] uppercase mb-0.5">{k}</p>
                  <p className="font-heading text-[13px] text-[#111111]/70">{v2}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Storage */}
          <motion.div custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] rounded-lg p-5 md:p-6 border border-[#C9A86A]/10">
            <p className="font-heading text-[14px] md:text-[15px] text-[#111111] mb-3">Storage</p>
            <div className="h-[1px] bg-[#C9A86A]/12 mb-3.5" />
            <ul className="space-y-1.5">
              {["Cool, dry place","Keep lid closed","Use dry spoon","Avoid water"].map((s,i)=>(
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <span className="font-body text-[11px] text-[#111111]/48">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Patch test */}
        <motion.div custom={4} variants={up} initial="hidden" animate={v?"show":"hidden"} className="mt-4 flex items-start gap-3 bg-white rounded-lg p-4 border border-[#F0EDE8]">
          <div className="w-8 h-8 rounded-full bg-[#C9A86A]/8 border border-[#C9A86A]/12 flex items-center justify-center flex-shrink-0 text-sm mt-0.5">⚠️</div>
          <div>
            <p className="font-heading text-[13px] text-[#111111] mb-0.5">Patch Test Recommended</p>
            <p className="font-body text-[11px] text-[#111111]/45 leading-[1.7]">Test on inner arm 24h before first use. Discontinue if irritation occurs. External use only. Keep away from eyes.</p>
          </div>
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
