"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:24 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.09, duration:0.6, ease:"easeOut" as const } }
});

const steps = [
  { n:"01", title:"Measure",    sub:"2–3 teaspoons",           desc:"Scoop 2–3 teaspoons of the scrub into a small bowl or your palm." },
  { n:"02", title:"Mix",         sub:"Create a smooth paste",   desc:"Add rose water or plain water and mix to form a smooth, creamy paste." },
  { n:"03", title:"Apply",       sub:"On damp skin",            desc:"Apply the paste evenly onto damp skin before massaging." },
  { n:"04", title:"Massage",     sub:"2–3 minutes",             desc:"Gently massage in slow circular motions for 2–3 minutes, focusing on target areas." },
  { n:"05", title:"Rest",        sub:"3–5 minutes optional",    desc:"Leave on for 3–5 minutes to allow the natural ingredients to work on your skin." },
  { n:"06", title:"Rinse",       sub:"Rinse thoroughly",        desc:"Rinse off completely with cool or lukewarm water until clean." },
  { n:"07", title:"Moisturize",  sub:"Seal in softness",        desc:"Pat dry and apply your favourite body moisturizer to lock in hydration." },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="howtouse" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">The Ritual</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            How To<br /><span className="gold-text italic">Use</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
          <motion.p variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="body-lg mt-5 max-w-md mx-auto text-center">
            Seven simple steps to turn your skincare into a luxury self-care ritual.
          </motion.p>
        </div>

        {/* Steps — numbered like reference process */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((s,i)=>(
            <motion.div key={s.n} variants={up(i)} initial="hidden" animate={v?"show":"hidden"}
              className={s.n==="07" ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="h-full card-white p-6 hover:border-[#C9A86A]/22 hover:shadow-[0_12px_40px_rgba(201,168,106,0.09)] transition-all duration-400 flex flex-col">
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="font-body text-[10px] font-semibold text-white tracking-wider">{s.n}</span>
                  </div>
                  <span className="font-heading text-3xl text-[#C9A86A]/8">{s.n}</span>
                </div>
                <span className="gold-rule-short mb-4 block" />
                <h3 className="font-heading text-[17px] text-[#111111] mb-1.5">{s.title}</h3>
                <p className="font-body text-[9px] tracking-[0.22em] text-[#C9A86A] uppercase mb-3">{s.sub}</p>
                <p className="body-sm flex-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick reference row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {[["📅","Frequency","2–3 times per week"],["⏱","Massage","2–3 minutes"],["🧴","After Use","Body moisturizer"]].map(([ic,lb,vl])=>(
            <div key={lb} className="card-ivory p-5 flex items-center gap-4">
              <span className="text-xl flex-shrink-0">{ic}</span>
              <div>
                <p className="font-body text-[9px] tracking-[0.28em] text-[#C9A86A] uppercase">{lb}</p>
                <p className="font-heading text-sm text-[#111111] mt-0.5">{vl}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Patch test */}
        <motion.div variants={up(8)} initial="hidden" animate={v?"show":"hidden"}
          className="card-ivory p-6 flex items-start gap-4"
        >
          <div className="w-9 h-9 rounded-full bg-[#FFF8EC] border border-[#C9A86A]/15 flex items-center justify-center flex-shrink-0 text-base">⚠️</div>
          <div>
            <p className="font-heading text-[15px] text-[#111111] mb-1.5">Patch Test Recommended</p>
            <p className="body-sm">Apply a small amount to your inner arm and wait 24 hours before first full use. Discontinue if irritation occurs. For external use only. Keep away from eyes and children.</p>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
