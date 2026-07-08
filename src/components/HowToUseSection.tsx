"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Prepare Your Skin",
    subtitle: "Wet skin thoroughly",
    desc: "Step into your shower and ensure your skin is completely wet. Warm water helps open pores for a deeper, more effective exfoliation experience.",
    icon: "💧",
    tip: "Use warm water for best results",
  },
  {
    number: "02",
    title: "Apply & Massage",
    subtitle: "Circular motions for 2–3 minutes",
    desc: "Take a generous amount of the SPCL Tan Removal Body Scrub and massage gently across your body using slow, circular motions. Focus on areas prone to dryness.",
    icon: "🤲",
    tip: "Be gentle on sensitive areas",
  },
  {
    number: "03",
    title: "Rinse & Reveal",
    subtitle: "Rinse thoroughly and moisturize",
    desc: "Rinse off completely with cool or lukewarm water to seal in the benefits. Pat dry gently and follow with your favorite body moisturizer for lasting softness.",
    icon: "✨",
    tip: "Follow with moisturizer for best results",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function HowToUseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EFE8DD]/20 translate-x-1/2 translate-y-1/3 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            The Ritual
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            How To
            <br />
            <span className="italic gold-gradient-text">Use</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-sm md:text-base text-[#111111]/50 max-w-md mx-auto mt-6 leading-relaxed"
          >
            Three simple steps to transform your skin care routine into a luxury ritual.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-[1px] bg-gradient-to-b from-[#C9A86A]/20 via-[#C9A86A]/40 to-[#C9A86A]/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
                  i % 2 === 0 ? "" : "lg:direction-reverse"
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="bg-[#FCFBF8] rounded-2xl p-8 border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_20px_60px_rgba(201,168,106,0.08)] transition-all duration-500">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-lg shadow-[#C9A86A]/20">
                        <span className="font-body text-xs font-semibold text-white tracking-wider">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl text-[#111111]">{step.title}</h3>
                        <p className="font-body text-xs tracking-widest text-[#C9A86A] uppercase mt-1">{step.subtitle}</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/20 to-transparent mb-5" />
                    <p className="font-body text-sm text-[#111111]/55 leading-relaxed mb-5">{step.desc}</p>
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-[#C9A86A]/15">
                      <span className="text-[#C9A86A] text-xs">💡</span>
                      <p className="font-body text-xs text-[#C9A86A] tracking-wide">{step.tip}</p>
                    </div>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} flex items-center justify-center`}>
                  {/* Center dot on timeline */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] shadow-[0_0_20px_rgba(201,168,106,0.4)] z-10" />
                  
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(201,168,106,0.15)] border border-[#C9A86A]/10">
                    <span className="text-5xl mb-3">{step.icon}</span>
                    <span className="font-heading text-4xl text-[#C9A86A]/20">{step.number}</span>
                    <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mt-1">{step.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frequency recommendation */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid sm:grid-cols-3 gap-5"
        >
          {[
            { label: "Frequency", value: "2–3 times per week", icon: "📅" },
            { label: "Duration", value: "2–3 minutes massage", icon: "⏱" },
            { label: "Follow With", value: "Body moisturizer", icon: "🧴" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-[#FCFBF8] rounded-2xl border border-[#F4F4F4]">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">{item.label}</p>
                <p className="font-heading text-sm text-[#111111] mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Patch test notice */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-6 p-5 bg-[#F8F5EF] rounded-2xl border border-[#C9A86A]/15 flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A86A]/10 flex items-center justify-center">
            <span className="text-sm">⚠️</span>
          </div>
          <div>
            <p className="font-heading text-sm text-[#111111] mb-1">Patch Test Recommended</p>
            <p className="font-body text-xs text-[#111111]/50 leading-relaxed">
              Before first use, apply a small amount to your inner arm and wait 24 hours. If no irritation occurs, you're ready to enjoy the full ritual. Discontinue use if any irritation develops.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
