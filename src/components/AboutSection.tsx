"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const pillars = [
  {
    icon: "🌿",
    title: "Our Story",
    text: "Born from a passion for thoughtful self-care, RALORA GLOW was created to bring premium skincare within reach of everyone — without compromise.",
  },
  {
    icon: "✦",
    title: "Our Mission",
    text: "To craft luxurious skincare rituals using nature's finest ingredients, formulated for every skin type, every gender, every lifestyle.",
  },
  {
    icon: "◎",
    title: "Our Vision",
    text: "To redefine modern skincare — where natural meets luxury, and self-care becomes an art form accessible to all.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#FCFBF8] overflow-hidden">
      {/* Background ornament */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#EFE8DD]/40 translate-x-1/2 blur-3xl" />
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#F8F5EF]/60 blur-2xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            Where Nature Meets
            <br />
            <span className="italic gold-gradient-text">Luxury</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
        </div>

        {/* Main editorial layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: Large editorial text */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#111111]/80 leading-[1.4] mb-8 italic">
              "Luxury is not about excess. It is about the quiet joy of using something perfectly made."
            </p>
            <div className="h-[1px] w-12 bg-[#C9A86A] mb-8" />
            <p className="font-body text-sm md:text-base text-[#111111]/50 leading-relaxed mb-6">
              At RALORA GLOW, we believe that premium skincare should not be a privilege. We set out to create formulas that are as thoughtful in their ingredients as they are refined in their experience.
            </p>
            <p className="font-body text-sm md:text-base text-[#111111]/50 leading-relaxed">
              Every product is a carefully considered blend of nature's most effective botanicals, designed to deliver visible results while feeling like a daily ritual of indulgence.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="font-heading text-3xl md:text-4xl gold-gradient-text">100%</p>
                <p className="font-body text-xs tracking-widest text-[#111111]/40 uppercase mt-1">Natural Focus</p>
              </div>
              <div className="w-[1px] h-10 bg-[#C9A86A]/20" />
              <div>
                <p className="font-heading text-3xl md:text-4xl gold-gradient-text">Unisex</p>
                <p className="font-body text-xs tracking-widest text-[#111111]/40 uppercase mt-1">For Everyone</p>
              </div>
              <div className="w-[1px] h-10 bg-[#C9A86A]/20" />
              <div>
                <p className="font-heading text-3xl md:text-4xl gold-gradient-text">Premium</p>
                <p className="font-body text-xs tracking-widest text-[#111111]/40 uppercase mt-1">Formula</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual collage */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Tall image left */}
              <div className="col-span-1 row-span-2">
                <div className="h-72 md:h-[380px] rounded-2xl overflow-hidden img-zoom luxury-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-[#EFE8DD] via-[#F8F5EF] to-[#FCFBF8] flex items-center justify-center relative">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4B97E] to-[#C9A86A] mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">🌿</span>
                      </div>
                      <p className="font-heading text-sm tracking-wider text-[#111111]/60">Natural</p>
                      <p className="font-heading text-lg gold-gradient-text">Botanicals</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/30 to-transparent" />
                  </div>
                </div>
              </div>
              {/* Two stacked right */}
              <div className="space-y-4">
                <div className="h-32 md:h-44 rounded-2xl overflow-hidden img-zoom luxury-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl">✨</span>
                      <p className="font-heading text-xs tracking-widest text-[#C9A86A] mt-2 uppercase">Premium</p>
                    </div>
                  </div>
                </div>
                <div className="h-32 md:h-44 rounded-2xl overflow-hidden img-zoom luxury-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-[#EFE8DD] to-[#F8F5EF] flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl">🕊️</span>
                      <p className="font-heading text-xs tracking-widest text-[#C9A86A] mt-2 uppercase">Pure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-2xl p-4 luxury-shadow border border-[#C9A86A]/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A86A]">Featured Product</p>
                  <p className="font-heading text-base text-[#111111] mt-0.5">SPCL Tan Removal Body Scrub</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4B97E] to-[#C9A86A] flex items-center justify-center shadow-md">
                  <span className="text-white text-xs">RG</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <div className="p-8 bg-white rounded-2xl border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_20px_60px_rgba(201,168,106,0.08)] transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">{p.icon}</span>
                </div>
                <div className="h-[1px] w-8 bg-[#C9A86A]/40 mb-5" />
                <h3 className="font-heading text-xl text-[#111111] mb-3 tracking-wide">{p.title}</h3>
                <p className="font-body text-sm text-[#111111]/50 leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
