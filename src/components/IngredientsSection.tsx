"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    emoji: "🫘",
    name: "Masoor Dal",
    tag: "Natural",
    color: "from-[#FDF5F0] to-[#F8F0EA]",
  },
  {
    emoji: "🌾",
    name: "Besan",
    tag: "Natural",
    color: "from-[#FFFBF0] to-[#F8F5EF]",
  },
  {
    emoji: "🌾",
    name: "Rice Flour",
    tag: "Natural",
    color: "from-[#F8F5EF] to-[#FCFBF8]",
  },
  {
    emoji: "🪨",
    name: "Multani Mitti",
    tag: "Natural",
    color: "from-[#F5F2EC] to-[#EFE8DD]",
  },
  {
    emoji: "☕",
    name: "Coffee Powder",
    tag: "Natural",
    color: "from-[#FDF8F2] to-[#F4EEE4]",
  },
  {
    emoji: "💛",
    name: "Fired Turmeric",
    tag: "Herbal",
    color: "from-[#FFFBF0] to-[#F8F5EF]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function IngredientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ingredients" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#EFE8DD]/25 translate-x-1/3 -translate-y-1/3 blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            What's Inside
          </motion.p>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#111111] leading-[1.1]"
          >
            Natural
            <br />
            <span className="italic gold-gradient-text">Ingredients</span>
          </motion.h2>
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-sm md:text-[15px] text-[#111111]/45 mt-6 leading-[1.8]"
          >
            Every ingredient is carefully chosen for its gentle, skin-loving properties.
            No harsh chemicals. No artificial whitening agents.
          </motion.p>
        </div>

        {/* ── Ingredients — clean name cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <div className={`rounded-2xl p-5 bg-gradient-to-br ${ing.color} border border-[#C9A86A]/10 hover:border-[#C9A86A]/28 hover:shadow-[0_16px_40px_rgba(201,168,106,0.10)] transition-all duration-400 flex flex-col items-center text-center`}>
                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-4 shadow-sm border border-[#C9A86A]/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{ing.emoji}</span>
                </div>
                <span className="font-body text-[8px] tracking-[0.28em] text-[#C9A86A] uppercase mb-2">{ing.tag}</span>
                <h3 className="font-heading text-[13px] text-[#111111]/80 leading-snug">{ing.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Clean declaration strip ── */}
        <motion.div
          custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {[
            { icon: "✓", text: "No Harsh Bleaching Agents" },
            { icon: "✓", text: "No Artificial Whitening Chemicals" },
            { icon: "✓", text: "Carefully Selected Naturals" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C9A86A]/10 flex items-center justify-center text-[#C9A86A] text-xs font-semibold flex-shrink-0">
                {item.icon}
              </span>
              <span className="font-body text-xs text-[#111111]/45 tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
