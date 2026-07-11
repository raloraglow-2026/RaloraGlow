"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:24 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.08, duration:0.6, ease:"easeOut" as const } }
});

const cards = [
  { icon:"🌿", title:"Natural Ingredients",  desc:"Carefully selected natural ingredients. No harsh bleaching agents. No artificial whitening chemicals." },
  { icon:"✦",  title:"Luxury Quality",        desc:"Premium-grade handcrafted formulation that delivers a refined, elevated skincare experience." },
  { icon:"🕊️", title:"Gentle Formula",        desc:"Crafted to be gentle on all skin types while delivering effective results with regular use." },
  { icon:"🤲", title:"Handcrafted",           desc:"Every batch is carefully made with attention to quality and consistency." },
  { icon:"💎", title:"Skin Friendly",         desc:"Free from harmful additives — designed to work in harmony with your skin's natural balance." },
  { icon:"📦", title:"Premium Packaging",    desc:"Beautifully packaged to protect the formula and elevate your self-care space." },
  { icon:"◎",  title:"Unisex Design",         desc:"One premium product designed for men and women alike." },
  { icon:"✨", title:"Spa-Like Experience",   desc:"Every use transforms your routine into a luxurious, indulgent self-care ritual." },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="why" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">Why RALORA GLOW</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            The RALORA<br /><span className="gold-text italic">Difference</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
          <motion.p variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="body-lg mt-5 max-w-lg mx-auto text-center">
            Every element of RALORA GLOW is intentional — from formula to finish.
          </motion.p>
        </div>

        {/* 4-col card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((c,i)=>(
            <motion.div key={c.title} variants={up(i)} initial="hidden" animate={v?"show":"hidden"} className="group">
              <div className="h-full card-white p-6 hover:border-[#C9A86A]/22 hover:shadow-[0_12px_40px_rgba(201,168,106,0.09)] transition-all duration-400 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#F8F5EF] flex items-center justify-center text-xl border border-[#C9A86A]/10 mb-5 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">{c.icon}</div>
                <span className="gold-rule-short mb-4 block group-hover:w-full transition-all duration-500" />
                <h3 className="font-heading text-[17px] text-[#111111] mb-2">{c.title}</h3>
                <p className="body-sm flex-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dark CTA banner — like reference */}
        <motion.div variants={up(9)} initial="hidden" animate={v?"show":"hidden"}
          className="bg-[#0f0f0f] rounded-2xl overflow-hidden relative"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage:"radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize:"28px 28px" }} />
          <div className="pointer-events-none absolute right-0 top-0 w-64 h-64 rounded-full opacity-8"
            style={{ background:"radial-gradient(circle,#C9A86A,transparent)" }} />
          <div className="relative z-10 px-8 py-12 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="eyebrow-dark mb-4 inline-flex">Premium · Natural · Luxury</span>
              <h3 className="h2-white">
                Experience the RALORA GLOW<br />
                <span className="gold-text-light italic">difference today.</span>
              </h3>
            </div>
            <button
              onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
              className="btn-gold flex-shrink-0"
            >
              Order on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
