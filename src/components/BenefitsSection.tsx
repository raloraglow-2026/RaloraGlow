"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:24 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.09, duration:0.6, ease:"easeOut" as const } }
});

const cards = [
  { num:"01", title:"Gentle Exfoliation",  desc:"Softly buffs away dead skin cells to reveal a smoother, more refined skin surface." },
  { num:"02", title:"Natural Formula",      desc:"Made with carefully selected natural ingredients. No harsh bleaching agents or artificial chemicals." },
  { num:"03", title:"Spa-Like Feel",        desc:"Transforms your daily shower into a luxurious, indulgent self-care ritual." },
  { num:"04", title:"Smooth Skin",          desc:"Leaves skin feeling silky soft and touchably smooth after every application." },
  { num:"05", title:"Handcrafted Quality", desc:"Every batch carefully crafted for consistent, premium results you can feel." },
  { num:"06", title:"Radiant Glow",         desc:"Supports healthy-looking, naturally radiant skin with regular use." },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="benefits" className="sec bg-[#F8F5EF] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">What You Gain</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            Product<br /><span className="gold-text italic">Benefits</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
          <motion.p variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="body-lg mt-5 max-w-md mx-auto text-center">
            Thoughtfully crafted to deliver visible, lasting results with every use.
          </motion.p>
        </div>

        {/* Numbered cards — like reference service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {cards.map((c,i)=>(
            <motion.div key={c.num} variants={up(i)} initial="hidden" animate={v?"show":"hidden"} className="group">
              <div className="h-full bg-white rounded-2xl p-7 border border-[#e8e0d8] hover:border-[#C9A86A]/22 hover:shadow-[0_14px_48px_rgba(201,168,106,0.10)] transition-all duration-400 flex flex-col">
                {/* Number */}
                <div className="flex items-start justify-between mb-5">
                  <span className="font-heading text-5xl text-[#C9A86A]/12 leading-none">{c.num}</span>
                </div>
                <span className="gold-rule-short mb-5 block group-hover:w-full transition-all duration-500" />
                <h3 className="font-heading text-xl text-[#111111] mb-2.5">{c.title}</h3>
                <p className="body-sm flex-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dark result banner */}
        <motion.div variants={up(7)} initial="hidden" animate={v?"show":"hidden"}
          className="bg-[#0f0f0f] rounded-2xl px-8 py-14 md:px-14 overflow-hidden relative"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage:"radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize:"28px 28px" }} />
          <div className="relative z-10 text-center">
            <span className="eyebrow-dark mb-6 inline-flex">The Result</span>
            <p className="font-heading text-2xl md:text-4xl text-white italic leading-[1.4] mb-8">
              "Skin that feels renewed,<br /><span className="gold-text-light">radiant and effortlessly smooth."</span>
            </p>
            <div className="gold-rule w-14 mx-auto mb-10" />
            <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
              {[["Exfoliated","Smooth Surface"],["Refreshed","Radiant Glow"],["Nourished","Soft & Hydrated"]].map(([a,b])=>(
                <div key={a} className="text-center">
                  <p className="font-heading text-xl text-[#D4B97E]">{a}</p>
                  <p className="font-body text-[9px] tracking-[0.28em] text-white/25 uppercase mt-1">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
