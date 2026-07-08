"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = {
  hidden: { opacity:0, y:24 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.09, duration:0.6, ease:"easeOut" as const } }),
};

const cards = [
  { icon:"◈", title:"Gentle Exfoliation",    desc:"Softly buffs away dead skin cells to reveal smoother, more refined skin." },
  { icon:"🌿", title:"Natural Formula",       desc:"Made with carefully selected natural ingredients. No harsh chemicals." },
  { icon:"♾",  title:"Spa-Like Feel",         desc:"Transforms your daily shower into a luxurious self-care ritual." },
  { icon:"◎",  title:"Smooth Skin",           desc:"Leaves skin feeling silky soft and touchably smooth after every use." },
  { icon:"✦",  title:"Handcrafted Quality",   desc:"Every batch is carefully crafted for consistent, premium results." },
  { icon:"✿",  title:"Radiant Glow",          desc:"Supports healthy-looking, naturally radiant skin with regular use." },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="benefits" className="relative section bg-[#FCFBF8] overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#EFE8DD]/22 -translate-x-1/2 -translate-y-1/2 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">What You Gain</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">Product<br /><span className="gold-text italic">Benefits</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.p   custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-sub text-center mx-auto">Thoughtfully crafted to deliver visible, lasting results with every use.</motion.p>
        </div>

        {/* Cards — equal height grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c,i)=>(
            <motion.div key={c.title} custom={i} variants={up} initial="hidden" animate={v?"show":"hidden"} className="group">
              <div className="h-full bg-white rounded-2xl p-7 border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_14px_40px_rgba(201,168,106,0.08)] transition-all duration-400 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center text-xl text-[#C9A86A] border border-[#C9A86A]/10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    {c.icon}
                  </div>
                </div>
                <div className="h-[1px] w-7 bg-[#C9A86A]/35 mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="font-heading text-[18px] text-[#111111] mb-2">{c.title}</h3>
                <p className="font-body text-xs text-[#111111]/48 leading-[1.78] flex-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result strip */}
        <motion.div custom={7} variants={up} initial="hidden" animate={v?"show":"hidden"} className="mt-10 bg-[#111111] rounded-2xl px-8 py-12 md:px-14 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage:"radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize:"28px 28px" }} />
          <div className="relative z-10 text-center">
            <p className="font-body text-[9px] tracking-[0.48em] text-[#C9A86A]/65 uppercase mb-5">The Result</p>
            <h3 className="font-heading text-2xl md:text-3xl text-white italic leading-[1.4]">
              "Skin that feels renewed,<br /><span className="text-[#D4B97E]">radiant and effortlessly smooth."</span>
            </h3>
            <div className="gold-line w-12 mx-auto mt-7" />
            <div className="mt-8 flex justify-center gap-10 md:gap-16 flex-wrap">
              {[["Exfoliated","Smooth Surface"],["Refreshed","Radiant Glow"],["Nourished","Soft & Hydrated"]].map(([a,b],i)=>(
                <div key={i} className="text-center">
                  <p className="font-heading text-lg text-[#D4B97E]">{a}</p>
                  <p className="font-body text-[9px] tracking-[0.26em] text-white/25 uppercase mt-1">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
