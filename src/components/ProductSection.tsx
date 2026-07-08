"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Shield, Leaf, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const productInfo = [
  {
    icon: <Leaf size={18} className="text-[#C9A86A]" />,
    title: "Key Ingredients",
    items: ["Walnut Shell Powder", "Coffee Grounds", "Sandalwood Extract", "Aloe Vera Gel", "Vitamin E", "Coconut Oil", "Turmeric Extract"],
  },
  {
    icon: <Sparkles size={18} className="text-[#C9A86A]" />,
    title: "Benefits",
    items: [
      "Helps gently exfoliate dead skin cells",
      "Helps improve the appearance of tanning",
      "Leaves skin feeling soft and refreshed",
      "Supports healthy-looking radiant skin",
      "Suitable for all skin types",
      "Gentle enough for regular use",
    ],
  },
  {
    icon: <Shield size={18} className="text-[#C9A86A]" />,
    title: "Details",
    items: ["Net Weight: 200g", "Skin Type: All Skin Types", "For: Men & Women", "Shelf Life: 18 Months", "Storage: Cool, dry place", "Made with care in India"],
  },
];

export default function ProductSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'd%20like%20to%20order%20the%20SPCL%20Tan%20Removal%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section id="product" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EFE8DD]/20 translate-x-1/3 translate-y-1/3 blur-3xl" />

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
            Featured Product
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            SPCL Tan Removal
            <br />
            <span className="italic gold-gradient-text">Body Scrub</span>
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
            A luxurious body scrub that helps exfoliate and refresh your skin, revealing a naturally radiant, smooth complexion.
          </motion.p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          
          {/* Product visual */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] blur-2xl opacity-60" />
            
            <div className="relative z-10 bg-gradient-to-br from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] rounded-3xl p-10 md:p-16 border border-[#C9A86A]/10 luxury-shadow">
              {/* Product jar hero */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
                  className="relative"
                >
                  {/* Outer ring */}
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_30px_80px_rgba(201,168,106,0.2)] border border-[#C9A86A]/15 flex items-center justify-center">
                    {/* Inner jar */}
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-[#FCFBF8] to-[#F8F5EF] shadow-inner flex flex-col items-center justify-center gap-1 p-4">
                      <p className="font-body text-[8px] tracking-[0.4em] text-[#C9A86A] uppercase">Ralora</p>
                      <p className="font-body text-[7px] tracking-[0.3em] text-[#C9A86A] uppercase">Glow</p>
                      <div className="w-12 h-[0.5px] bg-[#C9A86A]/50 my-1" />
                      <p className="font-heading text-[9px] tracking-wider text-[#111111]/60 uppercase">SPCL</p>
                      <p className="font-heading text-[7px] tracking-wide text-[#111111]/50">Tan Removal</p>
                      <p className="font-heading text-[7px] tracking-wide text-[#111111]/50">Body Scrub</p>
                      <p className="font-body text-[7px] text-[#111111]/30 mt-1">200g</p>
                    </div>
                  </div>
                  {/* Gold lid */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 md:w-44 h-10 rounded-t-full bg-gradient-to-br from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow-lg" />
                  {/* Lid highlight */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 md:w-24 h-3 rounded-t-full bg-white/30" />
                </motion.div>
              </div>

              {/* Product badges */}
              <div className="flex justify-center flex-wrap gap-3">
                {["Natural Formula", "Unisex", "Premium Quality", "Gentle Exfoliation"].map((badge) => (
                  <div key={badge} className="px-4 py-1.5 bg-white rounded-full border border-[#C9A86A]/20 shadow-sm">
                    <p className="font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">{badge}</p>
                  </div>
                ))}
              </div>

              {/* Ingredients preview */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { emoji: "🥜", label: "Walnut Shell" },
                  { emoji: "☕", label: "Coffee" },
                  { emoji: "🌿", label: "Aloe Vera" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 bg-white/70 rounded-xl border border-[#C9A86A]/10">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="font-body text-[8px] tracking-wider text-[#111111]/50 uppercase mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product description */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EF] border border-[#C9A86A]/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                <span className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Limited Premium Edition</span>
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl text-[#111111] leading-tight mb-4">
              The Ultimate<br />
              <span className="italic text-[#C9A86A]">Glow Ritual</span>
            </h3>
            <div className="h-[1px] w-12 bg-[#C9A86A] mb-6" />
            
            <p className="font-body text-sm md:text-base text-[#111111]/60 leading-relaxed mb-6">
              The SPCL Tan Removal Body Scrub is a premium exfoliating treatment designed to gently buff away dead skin cells while nourishing your skin with nature's finest ingredients.
            </p>
            <p className="font-body text-sm md:text-base text-[#111111]/60 leading-relaxed mb-8">
              Suitable for all skin types and genders, this luxurious scrub leaves your skin feeling velvety soft, refreshed, and visibly more radiant with every use.
            </p>

            {/* Quick features */}
            <div className="space-y-3 mb-8">
              {[
                "Helps exfoliate dead skin cells for a smoother texture",
                "Helps improve the appearance of tanning",
                "Leaves skin feeling soft, fresh and refreshed",
                "Supports healthy-looking, naturally radiant skin",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <p className="font-body text-sm text-[#111111]/60">{feat}</p>
                </div>
              ))}
            </div>

            <button
              onClick={openWhatsApp}
              className="btn-luxury group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-xs tracking-[0.2em] uppercase font-body rounded-full hover:shadow-[0_15px_40px_rgba(201,168,106,0.4)] transition-all duration-300"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </button>
            
            <p className="mt-4 font-body text-[10px] tracking-wider text-[#111111]/30 uppercase">
              ✓ Secure · ✓ Fast Response · ✓ Premium Packaging
            </p>
          </motion.div>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {productInfo.map((info, i) => (
            <motion.div
              key={info.title}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-[#FCFBF8] rounded-2xl p-7 border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_20px_60px_rgba(201,168,106,0.08)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center border border-[#C9A86A]/15">
                  {info.icon}
                </div>
                <h4 className="font-heading text-lg text-[#111111]">{info.title}</h4>
              </div>
              <div className="h-[1px] bg-[#F4F4F4] mb-5" />
              <ul className="space-y-2.5">
                {info.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                    <span className="font-body text-xs text-[#111111]/55 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Directions card */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-6 bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] rounded-2xl p-8 border border-[#C9A86A]/10"
        >
          <h4 className="font-heading text-xl text-[#111111] mb-2">Directions for Use</h4>
          <p className="font-body text-xs tracking-wider text-[#C9A86A] uppercase mb-5">Apply on clean, damp skin</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { step: "01", text: "Wet your body thoroughly before use." },
              { step: "02", text: "Massage gently in circular motions for 2–3 minutes." },
              { step: "03", text: "Rinse thoroughly and follow with your favorite moisturizer." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="font-heading text-3xl text-[#C9A86A]/20">{s.step}</span>
                <p className="font-body text-sm text-[#111111]/60 leading-relaxed pt-1">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-white/60 rounded-xl border border-[#C9A86A]/10">
            <p className="font-body text-xs text-[#111111]/50 leading-relaxed">
              ⚠️ <strong>Patch test recommended.</strong> Apply a small amount on your inner arm 24 hours before first use. Discontinue if irritation occurs. For external use only. Keep out of reach of children. Avoid direct contact with eyes.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
