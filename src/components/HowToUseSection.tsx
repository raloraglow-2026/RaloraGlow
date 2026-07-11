"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const steps = [
  { title: "Measure",    desc: "Take 2–3 teaspoons into a bowl." },
  { title: "Prepare",    desc: "Mix with rose water to form paste." },
  { title: "Apply",      desc: "Spread evenly on clean, damp skin." },
  { title: "Massage",    desc: "Gentle circles for 2–3 minutes." },
  { title: "Rest",       desc: "Leave on for 3–5 minutes." },
  { title: "Rinse",      desc: "Wash off with cool water." },
  { title: "Moisturize", desc: "Pat dry and apply your moisturizer." },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="howtouse" className="sec bg-[#FDFBF7] relative overflow-hidden">

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">The Ritual</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Your Glow<br /><span className="gold-text italic">Ritual</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center max-w-md">
            Seven steps to luminous, radiant skin.
          </motion.p>
        </div>

        {/* Steps — minimal numbered list */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 py-8 ${i < steps.length - 1 ? "border-b border-[#111111]/4" : ""}`}
            >
              {/* Gold circle number */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-[0_4px_16px_rgba(201,168,106,0.20)]">
                  <span className="font-heading text-[17px] text-white font-medium">{i + 1}</span>
                </div>
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-[#C9A86A]/20 to-transparent" />
                )}
              </div>
              {/* Content */}
              <div className="pt-2">
                <p className="font-heading text-[20px] text-[#111111] mb-1.5">{s.title}</p>
                <p className="font-body text-[13px] text-[#111111]/40 leading-[1.8]">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
