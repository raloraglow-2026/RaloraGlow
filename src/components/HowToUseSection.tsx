"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const method1 = [
  "Mix 2-3 tbsp powder with curd or milk",
  "Apply paste to face and body",
  "Massage in circular motions for 3-5 min",
  "Rinse thoroughly, pat dry, moisturize",
];

const method2 = [
  "Mix 2-3 tbsp powder with body wash + water",
  "Apply to slightly wet skin",
  "Scrub gently for 3-5 min, leave 3-5 min",
  "Rinse thoroughly, moisturize immediately",
];

const frequency = [
  { type: "Normal Skin", freq: "2-3x / week" },
  { type: "Oily Skin", freq: "2-3x / week" },
  { type: "Dry Skin", freq: "1-2x / week" },
  { type: "Sensitive Skin", freq: "Once / week" },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="howtouse" className="sec bg-[#FDFBF7] relative overflow-hidden">

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">The Ritual</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            How To<br /><span className="gold-text italic">Use</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center max-w-md">
            Two simple methods for glowing skin.
          </motion.p>
        </div>

        {/* Two methods — 2 col desktop, stacked mobile */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* Method 1 */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="bg-white rounded-3xl p-10 md:p-12 border border-[#C9A86A]/8 h-full">
              <p className="font-heading text-[20px] text-[#111111] mb-1">Method 1</p>
              <p className="font-body text-[12px] text-[#C9A86A] tracking-[0.15em] uppercase mb-8">With Curd or Milk</p>
              <div className="space-y-8">
                {method1.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#C9A86A]/20">
                      <span className="font-heading text-[15px] text-white">{i + 1}</span>
                    </div>
                    <p className="font-body text-[14px] text-[#111111]/50 leading-[1.8] pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Method 2 */}
          <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="bg-white rounded-3xl p-10 md:p-12 border border-[#C9A86A]/8 h-full">
              <p className="font-heading text-[20px] text-[#111111] mb-1">Method 2</p>
              <p className="font-body text-[12px] text-[#C9A86A] tracking-[0.15em] uppercase mb-8">With Body Wash</p>
              <div className="space-y-8">
                {method2.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#C9A86A]/20">
                      <span className="font-heading text-[15px] text-white">{i + 1}</span>
                    </div>
                    <p className="font-body text-[14px] text-[#111111]/50 leading-[1.8] pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Frequency grid */}
        <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {frequency.map((f) => (
              <div key={f.type} className="bg-white rounded-2xl p-7 border border-[#111111]/4 text-center">
                <p className="font-heading text-[16px] text-[#111111]/75 mb-1">{f.freq}</p>
                <p className="font-body text-[10px] tracking-[0.15em] text-[#C9A86A] uppercase">{f.type}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
