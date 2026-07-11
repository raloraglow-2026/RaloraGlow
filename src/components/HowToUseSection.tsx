"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const steps = [
  { title: "Measure",    desc: "Take 2–3 teaspoons of scrub into a clean bowl." },
  { title: "Prepare",    desc: "Mix with rose water or plain water to form a smooth, luxurious paste." },
  { title: "Apply",      desc: "Spread evenly onto clean, damp skin with gentle strokes." },
  { title: "Massage",    desc: "Work in soft circular motions for 2–3 minutes — let the botanicals do their work." },
  { title: "Rest",       desc: "Leave on for 3–5 minutes for deeper nourishment (optional)." },
  { title: "Rinse",      desc: "Wash away with cool or lukewarm water to reveal refreshed skin." },
  { title: "Moisturize", desc: "Pat dry gently and seal with your favourite body moisturizer." },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="howtouse" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">The Ritual</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Your Glow<br /><span className="gold-text italic">Ritual</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center max-w-lg">
            Seven mindful steps to luminous skin. Use 2–3 times per week for best results.
          </motion.p>
        </div>

        {/* Steps — elegant numbered list with gold accents */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto mb-14">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-6 py-7 border-b border-[#C9A86A]/8 last:border-0 group"
            >
              {/* Gold numbered circle */}
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-[0_4px_16px_rgba(201,168,106,0.20)] group-hover:shadow-[0_6px_24px_rgba(201,168,106,0.30)] transition-shadow duration-400">
                  <span className="font-heading text-[16px] text-white font-medium">{i + 1}</span>
                </div>
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-11 left-1/2 -translate-x-1/2 w-[1px] h-7 bg-gradient-to-b from-[#C9A86A]/20 to-transparent" />
                )}
              </div>
              {/* Content */}
              <div className="pt-1.5">
                <p className="font-heading text-[20px] text-[#111111] mb-1.5 group-hover:text-[#111111] transition-colors">{s.title}</p>
                <p className="font-body text-[13px] text-[#111111]/45 leading-[1.75]">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick reference strip */}
        <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            ["Frequency", "2–3 times per week"],
            ["Duration", "2–3 minute massage"],
            ["Follow With", "Body moisturizer"],
          ].map(([lbl, val]) => (
            <div key={lbl} className="text-center p-5 bg-white rounded-2xl border border-[#C9A86A]/8 shadow-[0_4px_20px_rgba(201,168,106,0.04)]">
              <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mb-2">{lbl}</p>
              <p className="font-heading text-[16px] text-[#111111]">{val}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
