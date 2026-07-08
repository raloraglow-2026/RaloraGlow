"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    desc: "Crafted with thoughtfully sourced botanical extracts and nature-derived actives for skin that cares.",
  },
  {
    icon: "✦",
    title: "Luxury Quality",
    desc: "Premium-grade formulations that deliver visible results and an elevated sensory experience.",
  },
  {
    icon: "🕊️",
    title: "Gentle Formula",
    desc: "Thoughtfully formulated to be gentle on all skin types while remaining powerful in action.",
  },
  {
    icon: "🤲",
    title: "Handcrafted",
    desc: "Each batch is carefully produced with attention to detail, ensuring consistent premium quality.",
  },
  {
    icon: "◎",
    title: "Modern Skincare",
    desc: "Where science meets nature — formulated with a modern approach to effective skincare rituals.",
  },
  {
    icon: "📦",
    title: "Premium Packaging",
    desc: "Beautifully packaged to protect the formula and elevate your self-care space.",
  },
  {
    icon: "💎",
    title: "Skin Friendly",
    desc: "Free from harmful additives. Designed to work harmoniously with your skin's natural balance.",
  },
  {
    icon: "✨",
    title: "Luxury Experience",
    desc: "From the first touch to the final rinse — every moment is designed to feel like a spa ritual.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-24 md:py-36 bg-[#FCFBF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A86A 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

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
            Why RALORA GLOW
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            The RALORA
            <br />
            <span className="italic gold-gradient-text">Difference</span>
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
            className="font-body text-sm md:text-base text-[#111111]/50 max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Every element of RALORA GLOW is considered and intentional — from formula to finish.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-7 border border-[#F4F4F4] hover:border-[#C9A86A]/25 hover:shadow-[0_20px_50px_rgba(201,168,106,0.10)] transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5EF]/0 to-[#EFE8DD]/0 group-hover:from-[#F8F5EF]/50 group-hover:to-[#EFE8DD]/30 transition-all duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="mb-5 w-12 h-12 rounded-xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-400 border border-[#C9A86A]/10">
                    <span className="text-2xl">{f.icon}</span>
                  </div>
                  
                  <div className="h-[1px] w-6 bg-[#C9A86A]/40 mb-4 group-hover:w-full transition-all duration-500" />
                  
                  <h3 className="font-heading text-lg text-[#111111] mb-2 tracking-wide">{f.title}</h3>
                  <p className="font-body text-xs text-[#111111]/50 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-gradient-to-r from-[#111111] to-[#222222] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          {/* Background ornament */}
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#C9A86A]/5 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute left-20 bottom-0 w-40 h-40 rounded-full bg-[#C9A86A]/5 translate-y-1/2" />
          
          <div className="relative z-10">
            <p className="font-body text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase mb-2">Premium · Natural · Luxury</p>
            <h3 className="font-heading text-2xl md:text-3xl text-white leading-tight">
              Experience the RALORA GLOW<br />
              <span className="italic text-[#D4B97E]">difference today.</span>
            </h3>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'd%20like%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
                  "_blank"
                )
              }
              className="btn-luxury flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[11px] tracking-[0.22em] uppercase font-body rounded-full hover:shadow-[0_15px_40px_rgba(201,168,106,0.3)] transition-all duration-300"
            >
              Order Now on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
