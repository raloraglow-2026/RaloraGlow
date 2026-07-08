"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Measure",
    subtitle: "Take 2–3 teaspoons",
    desc: "Scoop 2–3 teaspoons of RALORA GLOW SPCL Tan Care Body Scrub into a small bowl or your palm.",
    icon: "🥄",
  },
  {
    number: "02",
    title: "Mix",
    subtitle: "Create a smooth paste",
    desc: "Mix with rose water or plain water to form a smooth, creamy paste ready for application.",
    icon: "💧",
  },
  {
    number: "03",
    title: "Apply",
    subtitle: "On damp skin",
    desc: "Apply the paste evenly onto damp skin. For best results, ensure your skin is lightly moistened before use.",
    icon: "🤲",
  },
  {
    number: "04",
    title: "Massage",
    subtitle: "Circular motions for 2–3 minutes",
    desc: "Gently massage in slow, circular motions for 2–3 minutes. Focus on areas prone to dryness or tanning.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Rest",
    subtitle: "Leave on for 3–5 minutes",
    desc: "Optionally, leave the scrub on your skin for 3–5 minutes to allow the natural ingredients to work gently.",
    icon: "⏱",
  },
  {
    number: "06",
    title: "Rinse",
    subtitle: "Rinse thoroughly",
    desc: "Rinse off completely with cool or lukewarm water until your skin is clean and residue-free.",
    icon: "🚿",
  },
  {
    number: "07",
    title: "Moisturize",
    subtitle: "Seal in the benefits",
    desc: "Pat dry gently and follow with your favourite body moisturizer to lock in softness and hydration.",
    icon: "🧴",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: "easeOut" as const },
  }),
};

export default function HowToUseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EFE8DD]/15 translate-x-1/2 translate-y-1/2 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            The Ritual
          </motion.p>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#111111] leading-[1.1]"
          >
            How To
            <br />
            <span className="italic gold-gradient-text">Use</span>
          </motion.h2>
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-sm md:text-[15px] text-[#111111]/45 mt-6 leading-[1.8]"
          >
            Seven simple steps to turn your skincare into a luxury self-care ritual.
          </motion.p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className={`group relative ${step.number === "07" ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="h-full bg-[#FCFBF8] rounded-2xl p-6 border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_16px_50px_rgba(201,168,106,0.08)] transition-all duration-400">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-sm shadow-[#C9A86A]/20 flex-shrink-0">
                    <span className="font-body text-[10px] font-semibold text-white tracking-wider">{step.number}</span>
                  </div>
                  <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">{step.icon}</span>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/20 to-transparent mb-4" />

                <h3 className="font-heading text-[17px] text-[#111111] mb-1">{step.title}</h3>
                <p className="font-body text-[9px] tracking-[0.25em] text-[#C9A86A] uppercase mb-3">{step.subtitle}</p>
                <p className="font-body text-xs text-[#111111]/50 leading-[1.75]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Quick Reference ── */}
        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { icon: "📅", label: "Frequency", value: "2–3 times per week" },
            { icon: "⏱", label: "Massage Duration", value: "2–3 minutes" },
            { icon: "🧴", label: "Follow With", value: "Body moisturizer" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-[#FCFBF8] rounded-2xl border border-[#F4F4F4]">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">{item.label}</p>
                <p className="font-heading text-[13px] text-[#111111] mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Patch Test ── */}
        <motion.div
          custom={9} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-5 flex items-start gap-4 p-5 bg-[#F8F5EF] rounded-2xl border border-[#C9A86A]/12"
        >
          <div className="w-8 h-8 rounded-full bg-[#C9A86A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-sm">⚠️</span>
          </div>
          <div>
            <p className="font-heading text-sm text-[#111111] mb-1">Patch Test Recommended</p>
            <p className="font-body text-xs text-[#111111]/45 leading-relaxed">
              Apply a small amount to your inner arm and wait 24 hours before first full use. 
              Discontinue if any irritation occurs. For external use only. Keep away from eyes. 
              Keep out of reach of children.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
