"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "◈",
    title: "Gentle Exfoliation",
    desc: "Softly buffs away dull, dead skin cells to reveal a smoother, more refined skin surface.",
    stat: "Deep",
    statLabel: "Cleanse",
  },
  {
    icon: "✦",
    title: "Natural Ingredients",
    desc: "A thoughtfully blended formula of nature-derived actives that work with your skin, not against it.",
    stat: "100%",
    statLabel: "Natural Focus",
  },
  {
    icon: "♾",
    title: "Spa Experience",
    desc: "Indulge in a luxurious at-home spa ritual that transforms your daily shower into a self-care ceremony.",
    stat: "Daily",
    statLabel: "Ritual",
  },
  {
    icon: "◎",
    title: "Smooth Skin Feel",
    desc: "Leaves your skin feeling extraordinarily silky, velvety-soft and touchably smooth after every use.",
    stat: "Velvety",
    statLabel: "Smooth",
  },
  {
    icon: "▣",
    title: "Premium Formula",
    desc: "Carefully developed premium blend that delivers visible improvements with consistent use.",
    stat: "Premium",
    statLabel: "Quality",
  },
  {
    icon: "✿",
    title: "Luxury Self Care",
    desc: "Elevate your self-care routine with a product that feels as beautiful as it performs.",
    stat: "Elevated",
    statLabel: "Ritual",
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

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-36 bg-[#FCFBF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#EFE8DD]/30 -translate-x-1/2 blur-3xl" />

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
            What You Gain
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            Product
            <br />
            <span className="italic gold-gradient-text">Benefits</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-8 border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_25px_60px_rgba(201,168,106,0.10)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-bl from-[#F8F5EF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center text-2xl text-[#C9A86A] group-hover:scale-110 transition-transform duration-400 border border-[#C9A86A]/10 shadow-sm">
                      {b.icon}
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-xl md:text-2xl gold-gradient-text">{b.stat}</p>
                      <p className="font-body text-[9px] tracking-widest text-[#111111]/30 uppercase">{b.statLabel}</p>
                    </div>
                  </div>

                  <div className="h-[1px] w-8 bg-gradient-to-r from-[#C9A86A] to-transparent mb-5 group-hover:w-full transition-all duration-500" />
                  
                  <h3 className="font-heading text-xl text-[#111111] mb-3">{b.title}</h3>
                  <p className="font-body text-sm text-[#111111]/50 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual break */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] rounded-3xl p-1">
            <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-[22px] px-8 py-12 md:px-16 md:py-14 overflow-hidden relative">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #C9A86A 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }} />
              
              <div className="relative z-10 text-center">
                <p className="font-body text-[10px] tracking-[0.5em] text-[#C9A86A] uppercase mb-4">The Result</p>
                <h3 className="font-heading text-3xl md:text-4xl text-white italic mb-4">
                  "Skin that feels renewed,<br />
                  <span className="text-[#D4B97E]">radiant and effortlessly smooth."</span>
                </h3>
                <div className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
                <div className="mt-8 flex justify-center gap-8 md:gap-16 flex-wrap">
                  {[
                    { val: "Exfoliated", label: "Smooth Surface" },
                    { val: "Refreshed", label: "Radiant Glow" },
                    { val: "Nourished", label: "Deep Hydration" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="font-heading text-xl md:text-2xl text-[#D4B97E]">{s.val}</p>
                      <p className="font-body text-[9px] tracking-[0.25em] text-white/30 uppercase mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
