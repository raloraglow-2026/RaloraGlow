"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    emoji: "🥜",
    name: "Walnut Shell Powder",
    origin: "Natural",
    benefit: "Gentle physical exfoliant that helps buff away dead skin cells, leaving skin feeling smooth.",
    color: "from-[#F8F5EF] to-[#EFE8DD]",
  },
  {
    emoji: "☕",
    name: "Coffee Grounds",
    origin: "Natural",
    benefit: "Rich in antioxidants, helps energize the skin and supports a refreshed, awakened complexion.",
    color: "from-[#FCFBF8] to-[#F4F0E8]",
  },
  {
    emoji: "🌿",
    name: "Aloe Vera Gel",
    origin: "Botanical",
    benefit: "Deeply hydrating and soothing, helps calm the skin after exfoliation.",
    color: "from-[#F0F8F0] to-[#EFE8DD]",
  },
  {
    emoji: "🪵",
    name: "Sandalwood Extract",
    origin: "Botanical",
    benefit: "Known for its skin-brightening properties, leaves skin looking luminous and refined.",
    color: "from-[#F8F5EF] to-[#FCFBF8]",
  },
  {
    emoji: "🫒",
    name: "Coconut Oil",
    origin: "Natural",
    benefit: "Rich moisturizing oil that helps lock in hydration for soft, nourished skin.",
    color: "from-[#FCFBF8] to-[#F8F5EF]",
  },
  {
    emoji: "🌟",
    name: "Vitamin E",
    origin: "Antioxidant",
    benefit: "Powerful antioxidant that helps protect skin and supports a healthy, youthful appearance.",
    color: "from-[#FFF8F0] to-[#EFE8DD]",
  },
  {
    emoji: "💛",
    name: "Turmeric Extract",
    origin: "Herbal",
    benefit: "Renowned for its brightening properties, helps support an even, radiant skin tone.",
    color: "from-[#FFFBF0] to-[#F8F5EF]",
  },
  {
    emoji: "🌸",
    name: "Rose Water",
    origin: "Floral",
    benefit: "Helps tone and refresh the skin, leaving a delicate, pleasant fragrance.",
    color: "from-[#FDF0F5] to-[#F8F5EF]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function IngredientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ingredients" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#EFE8DD]/30 translate-x-1/3 -translate-y-1/3 blur-3xl" />

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
            Nature's Finest
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            Key Natural
            <br />
            <span className="italic gold-gradient-text">Ingredients</span>
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
            Each ingredient is thoughtfully selected for its skin-loving properties and natural efficacy.
          </motion.p>
        </div>

        {/* Ingredients grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <div className={`h-full rounded-2xl p-6 bg-gradient-to-br ${ing.color} border border-[#C9A86A]/10 hover:border-[#C9A86A]/30 hover:shadow-[0_20px_50px_rgba(201,168,106,0.12)] transition-all duration-500`}>
                {/* Emoji */}
                <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-[#C9A86A]/10">
                  <span className="text-2xl">{ing.emoji}</span>
                </div>

                {/* Origin badge */}
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
                  <span className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">{ing.origin}</span>
                </div>

                <h3 className="font-heading text-base text-[#111111] leading-tight mb-3">{ing.name}</h3>
                <div className="h-[0.5px] bg-[#C9A86A]/20 mb-3" />
                <p className="font-body text-xs text-[#111111]/50 leading-relaxed">{ing.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F8F5EF] rounded-full border border-[#C9A86A]/15">
            <span className="font-body text-xs text-[#111111]/50">All ingredients are carefully selected for skin compatibility</span>
            <span className="text-[#C9A86A]">·</span>
            <span className="font-body text-xs text-[#C9A86A]">Patch test recommended</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
