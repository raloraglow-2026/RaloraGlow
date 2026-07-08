"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = {
  hidden: { opacity:0, y:24 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.08, duration:0.6, ease:"easeOut" as const } }),
};

const steps = [
  { n:"01", icon:"🥄", title:"Measure",   sub:"2–3 teaspoons",          desc:"Scoop 2–3 teaspoons of the scrub into a small bowl or your palm." },
  { n:"02", icon:"💧", title:"Mix",        sub:"Create a smooth paste",  desc:"Mix with rose water or plain water to form a smooth, creamy paste." },
  { n:"03", icon:"🤲", title:"Apply",      sub:"On damp skin",           desc:"Apply the paste evenly onto damp skin before use." },
  { n:"04", icon:"✦",  title:"Massage",    sub:"2–3 minutes",            desc:"Gently massage in circular motions for 2–3 minutes." },
  { n:"05", icon:"⏱",  title:"Rest",       sub:"3–5 minutes (optional)", desc:"Leave on for 3–5 minutes to let the natural ingredients work." },
  { n:"06", icon:"🚿", title:"Rinse",      sub:"Rinse thoroughly",       desc:"Rinse off completely with cool or lukewarm water." },
  { n:"07", icon:"🧴", title:"Moisturize", sub:"Seal in softness",       desc:"Pat dry and apply your favourite moisturizer to lock in hydration." },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="howtouse" className="relative section bg-white overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#EFE8DD]/12 translate-x-1/2 translate-y-1/2 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">The Ritual</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">How To<br /><span className="gold-text italic">Use</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.p   custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-sub text-center mx-auto">Seven simple steps to turn your skincare into a luxury ritual.</motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6">
          {steps.slice(0, 6).map((s,i)=>(
            <motion.div
              key={s.n} custom={i} variants={up} initial="hidden" animate={v?"show":"hidden"}
            >
              <div className="h-full bg-[#FCFBF8] rounded-xl p-5 md:p-6 border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_10px_32px_rgba(201,168,106,0.08)] transition-all duration-400 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="font-body text-[9px] font-semibold text-white">{s.n}</span>
                  </div>
                  <span className="text-lg opacity-50">{s.icon}</span>
                </div>
                <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/22 to-transparent mb-2.5" />
                <h3 className="font-heading text-[15px] text-[#111111] mb-0.5">{s.title}</h3>
                <p className="font-body text-[8px] tracking-[0.2em] text-[#C9A86A] uppercase mb-2">{s.sub}</p>
                <p className="font-body text-xs text-[#111111]/48 leading-[1.6] flex-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick info */}
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {[["📅","Frequency","2–3x/week"],["⏱","Massage","2–3 min"],["🧴","After Use","Moisturize"]].map(([ic,lb,vl])=>(
            <div key={lb} className="flex items-center gap-2.5 p-3.5 bg-[#FCFBF8] rounded-lg border border-[#F0EDE8]">
              <span className="text-base flex-shrink-0">{ic}</span>
              <div>
                <p className="font-body text-[8px] tracking-[0.25em] text-[#C9A86A] uppercase">{lb}</p>
                <p className="font-heading text-[12px] text-[#111111] mt-0.5">{vl}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Patch test */}
        <motion.div custom={8} variants={up} initial="hidden" animate={v?"show":"hidden"} className="flex items-start gap-3 bg-[#F8F5EF] rounded-lg p-4 border border-[#C9A86A]/10">
          <div className="w-7 h-7 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/12 flex items-center justify-center flex-shrink-0 text-xs">⚠️</div>
          <div>
            <p className="font-heading text-[13px] text-[#111111] mb-0.5">Patch Test Recommended</p>
            <p className="font-body text-xs text-[#111111]/45 leading-[1.8]">Apply a small amount to your inner arm and wait 24 hours before first full use. Discontinue if irritation occurs. For external use only.</p>
          </div>
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
