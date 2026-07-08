"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "◈",
    title: "Gentle Exfoliation",
    desc: "Softly buffs away dead skin cells to reveal a smoother, more refined skin surface.",
  },
  {
    icon: "🌿",
    title: "Natural Formula",
    desc: "Made with carefully selected natural ingredients — no harsh bleaching agents, no artificial chemicals.",
  },
  {
    icon: "♾",
    title: "Spa Experience",
    desc: "Transform your daily routine into a luxurious at-home spa ritual with every use.",
  },
  {
    icon: "◎",
    title: "Smooth Skin Feel",
    desc: "Leaves skin feeling extraordinarily silky and touchably smooth after every application.",
  },
  {
    icon: "✦",
    title: "Premium Handcrafted",
    desc: "Every batch is carefully handcrafted with attention to detail for consistent premium quality.",
  },
  {
    icon: "✿",
    title: "Luxury Self Care",
    desc: "Elevate your self-care routine with a product that performs as beautifully as it looks.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: "easeOut" as const },
  }),
};

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-[#FCFBF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#EFE8DD]/25 -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-60 h-60 rounded-full bg-[#EFE8DD]/20 translate-x-1/2 blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            What You Gain
          </motion.p>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-[54px] text-[#111111] leading-[1.1]"
          >
            Product
            <br />
            <span className="italic gold-gradient-text">Benefits</span>
          </motion.h2>
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-sm text-[#111111]/45 mt-5 leading-[1.8]"
          >
            Thoughtfully crafted to deliver visible, lasting results with every use.
          </motion.p>
        </div>

        {/* ── Benefits grid — fixed equal height ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <div className="bg-white rounded-2xl p-7 border border-[#F0EDE8] hover:border-[#C9A86A]/22 hover:shadow-[0_16px_48px_rgba(201,168,106,0.09)] transition-all duration-400 h-full flex flex-col">
                {/* Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center text-xl text-[#C9A86A] border border-[#C9A86A]/10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    {b.icon}
                  </div>
                  <div className="w-[1px] h-8 bg-[#C9A86A]/15 mt-2" />
                </div>

                {/* Animated divider */}
                <div className="h-[1px] w-7 bg-[#C9A86A]/40 mb-4 group-hover:w-full transition-all duration-500" />

                <h3 className="font-heading text-[18px] text-[#111111] mb-2.5 leading-snug">{b.title}</h3>
                <p className="font-body text-xs text-[#111111]/50 leading-[1.75] flex-1">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Result strip ── */}
        <motion.div
          custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10"
        >
          <div className="bg-[#111111] rounded-2xl px-8 py-12 md:px-14 md:py-14 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C9A86A 1px, transparent 0)`,
              backgroundSize: '28px 28px',
            }} />
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C9A86A]/6 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="font-body text-[9px] tracking-[0.5em] text-[#C9A86A]/70 uppercase mb-5">The Result</p>
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white italic leading-[1.35]">
                "Skin that feels renewed,
                <br />
                <span className="text-[#D4B97E]">radiant and effortlessly smooth."</span>
              </h3>
              <div className="mx-auto mt-7 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C9A86A]/50 to-transparent" />
              <div className="mt-8 flex justify-center gap-10 md:gap-16 flex-wrap">
                {[
                  { val: "Exfoliated",  label: "Smooth Surface" },
                  { val: "Refreshed",   label: "Radiant Glow"   },
                  { val: "Nourished",   label: "Soft & Hydrated" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="font-heading text-lg md:text-xl text-[#D4B97E]">{s.val}</p>
                    <p className="font-body text-[9px] tracking-[0.28em] text-white/25 uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
