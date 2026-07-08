"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = {
  hidden: { opacity:0, y:24 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.08, duration:0.6, ease:"easeOut" as const } }),
};

const cards = [
  { icon:"🌿", title:"Natural Ingredients",  desc:"Made with carefully selected natural ingredients. No harsh bleaching agents. No artificial whitening chemicals." },
  { icon:"✦",  title:"Luxury Quality",        desc:"Premium-grade handcrafted formulation that delivers a refined, elevated skincare experience." },
  { icon:"🕊️", title:"Gentle Formula",        desc:"Thoughtfully crafted to be gentle on all skin types while being effective with regular use." },
  { icon:"🤲", title:"Handcrafted",           desc:"Every batch is carefully made with attention to quality and consistency." },
  { icon:"💎", title:"Skin Friendly",         desc:"Free from harmful additives. Works in harmony with your skin's natural balance." },
  { icon:"📦", title:"Premium Packaging",    desc:"Beautifully packaged to protect the formula and elevate your daily self-care space." },
  { icon:"◎",  title:"Unisex Design",         desc:"Designed for men and women alike. One premium product for everyone." },
  { icon:"✨", title:"Spa-Like Experience",   desc:"Every use transforms your routine into a luxurious, indulgent self-care ritual." },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="why" className="relative section bg-[#FCFBF8] overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Why RALORA GLOW</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">The RALORA<br /><span className="gold-text italic">Difference</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.p   custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-sub text-center mx-auto">
            Every element of RALORA GLOW is intentional — from formula to finish.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c,i)=>(
            <motion.div key={c.title} custom={i} variants={up} initial="hidden" animate={v?"show":"hidden"} className="group">
              <div className="h-full bg-white rounded-2xl p-6 border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_14px_40px_rgba(201,168,106,0.08)] transition-all duration-400 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center border border-[#C9A86A]/10 mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <span className="text-xl">{c.icon}</span>
                </div>
                <div className="h-[1px] w-6 bg-[#C9A86A]/35 mb-3 group-hover:w-full transition-all duration-500" />
                <h3 className="font-heading text-[16px] text-[#111111] mb-2">{c.title}</h3>
                <p className="font-body text-xs text-[#111111]/48 leading-[1.75] flex-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div custom={9} variants={up} initial="hidden" animate={v?"show":"hidden"} className="mt-10 rounded-2xl bg-[#111111] px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="pointer-events-none absolute right-0 top-0 w-52 h-52 rounded-full bg-[#C9A86A]/5 translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <p className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-2">Premium · Natural · Luxury</p>
            <h3 className="font-heading text-2xl md:text-3xl text-white leading-[1.2]">
              Experience the RALORA GLOW<br /><span className="italic text-[#D4B97E]">difference today.</span>
            </h3>
          </div>
          <button
            onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
            className="btn-shine relative z-10 flex-shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[10px] tracking-[0.22em] uppercase font-body hover:shadow-[0_10px_30px_rgba(201,168,106,0.3)] transition-all duration-300"
          >
            Order on WhatsApp
          </button>
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
