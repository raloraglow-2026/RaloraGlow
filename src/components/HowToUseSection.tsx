"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const } },
});

const steps = [
  { title: "Measure",    sub: "Take 2–3 teaspoons of scrub into a bowl or your palm." },
  { title: "Mix",         sub: "Add rose water or plain water to create a smooth paste." },
  { title: "Apply",       sub: "Apply paste evenly onto clean, damp skin." },
  { title: "Massage",     sub: "Gently massage in circular motions for 2–3 minutes." },
  { title: "Rest",        sub: "Leave on for 3–5 minutes (optional) for deeper effect." },
  { title: "Rinse",       sub: "Rinse thoroughly with cool or lukewarm water." },
  { title: "Moisturize",  sub: "Pat dry and apply your favourite body moisturizer." },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="howtouse" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-7 inline-flex">How To Use</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            The Glow<br /><span className="gold-text italic">Ritual</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-6" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mx-auto text-center max-w-md">
            Seven simple steps. Use 2–3 times per week for best results.
          </motion.p>
        </div>

        {/* Steps — clean numbered list */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-3xl mx-auto mb-10">
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-6 border-b border-[#111111]/5 last:border-0"
              >
                {/* Number */}
                <div className="w-9 h-9 rounded-full bg-[#C9A86A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-body text-[11px] font-semibold text-white">{i + 1}</span>
                </div>
                {/* Content */}
                <div>
                  <p className="font-heading text-[18px] text-[#111111] mb-1">{s.title}</p>
                  <p className="body-sm">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick info bar */}
        <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4 mb-6">
          {[
            ["Frequency", "2–3 times per week"],
            ["Massage Time", "2–3 minutes"],
            ["Follow With", "Body moisturizer"],
          ].map(([lbl, val]) => (
            <div key={lbl} className="text-center p-4 bg-white rounded-xl border border-[#111111]/5">
              <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase mb-1">{lbl}</p>
              <p className="font-heading text-[15px] text-[#111111]">{val}</p>
            </div>
          ))}
        </motion.div>

        {/* Patch test */}
        <motion.div variants={up(4)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-3xl mx-auto p-5 bg-[#FFF8EC] rounded-xl border border-[#C9A86A]/12 text-center">
          <p className="font-heading text-sm text-[#111111] mb-1">Patch Test Recommended</p>
          <p className="body-sm">Apply to inner arm 24 hours before first use. Discontinue if irritation occurs.</p>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
