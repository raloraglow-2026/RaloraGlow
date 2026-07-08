"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Shield, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const productInfo = [
  {
    icon: <Sparkles size={16} className="text-[#C9A86A]" />,
    title: "Benefits",
    items: [
      "Helps exfoliate dead skin cells",
      "Helps improve the appearance of tanning",
      "Leaves skin feeling soft & refreshed",
      "Supports healthy-looking radiant skin",
      "Suitable for men and women",
      "Gentle enough for regular use",
    ],
  },
  {
    icon: <Shield size={16} className="text-[#C9A86A]" />,
    title: "Product Details",
    items: [
      "Net Weight: 200g",
      "For: Men & Women",
      "Skin Type: All Skin Types",
      "Shelf Life: 18 Months",
      "Storage: Cool, dry place",
      "Handcrafted in India",
    ],
  },
];

export default function ProductSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'd%20like%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section id="product" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EFE8DD]/15 translate-x-1/2 translate-y-1/2 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            Featured Product
          </motion.p>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#111111] leading-[1.1]"
          >
            SPCL Tan Care
            <br />
            <span className="italic gold-gradient-text">Body Scrub</span>
          </motion.h2>
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-body text-sm md:text-[15px] text-[#111111]/45 mt-6 leading-[1.8]"
          >
            A handcrafted exfoliating scrub made with carefully selected natural ingredients. 
            Gentle on skin, powerful in results.
          </motion.p>
        </div>

        {/* ── Main Showcase ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">

          {/* Product Visual */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] blur-2xl opacity-50 pointer-events-none" />
            <div className="relative z-10 bg-gradient-to-br from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] rounded-3xl p-10 md:p-14 border border-[#C9A86A]/10 luxury-shadow">

              {/* Jar */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
                  className="relative"
                >
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_24px_70px_rgba(201,168,106,0.18)] border border-[#C9A86A]/12 flex items-center justify-center">
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-[#FCFBF8] to-[#F8F5EF] shadow-inner flex flex-col items-center justify-center gap-0.5 px-4">
                      <p className="font-body text-[8px] tracking-[0.4em] text-[#C9A86A] uppercase">RALORA</p>
                      <p className="font-body text-[7px] tracking-[0.3em] text-[#C9A86A] uppercase">GLOW</p>
                      <div className="w-10 h-[0.5px] bg-[#C9A86A]/40 my-1.5" />
                      <p className="font-heading text-[9px] tracking-wider text-[#111111]/55 uppercase">SPCL</p>
                      <p className="font-heading text-[7px] text-[#111111]/40 mt-0.5">Tan Care</p>
                      <p className="font-heading text-[7px] text-[#111111]/40">Body Scrub</p>
                      <p className="font-body text-[7px] text-[#111111]/25 mt-1.5">200g</p>
                    </div>
                  </div>
                  {/* Lid */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-44 md:w-52 h-9 rounded-t-full bg-gradient-to-br from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow-md" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-28 h-3 rounded-t-full bg-white/25" />
                </motion.div>
              </div>

              {/* Badges */}
              <div className="flex justify-center flex-wrap gap-2">
                {["Natural Formula", "Unisex", "Handcrafted", "Gentle Exfoliation"].map((b) => (
                  <span key={b} className="px-3.5 py-1.5 bg-white rounded-full border border-[#C9A86A]/18 shadow-sm font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">
                    {b}
                  </span>
                ))}
              </div>

              {/* Natural ingredients strip — just names, clean */}
              <div className="mt-7 p-4 bg-white/60 rounded-2xl border border-[#C9A86A]/10">
                <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase text-center mb-3">Natural Ingredients</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Masoor Dal", "Besan", "Rice Flour", "Multani Mitti", "Coffee", "Turmeric"].map((n) => (
                    <span key={n} className="font-body text-[9px] tracking-wide text-[#111111]/50 px-2.5 py-1 bg-[#F8F5EF] rounded-full border border-[#C9A86A]/10">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <span className="inline-flex items-center gap-2 self-start mb-6 px-3 py-1.5 bg-[#F8F5EF] border border-[#C9A86A]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              <span className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Premium Handcrafted</span>
            </span>

            <h3 className="font-heading text-3xl md:text-4xl text-[#111111] leading-tight mb-4">
              The Ultimate<br />
              <span className="italic text-[#C9A86A]">Glow Ritual</span>
            </h3>
            <div className="h-[1px] w-12 bg-[#C9A86A] mb-7" />

            <p className="font-body text-sm md:text-[15px] text-[#111111]/50 leading-[1.85] mb-5">
              The SPCL Tan Care Body Scrub is a premium handcrafted exfoliating treatment designed
              to gently buff away dead skin cells while nourishing your skin with carefully selected
              natural ingredients.
            </p>
            <p className="font-body text-sm md:text-[15px] text-[#111111]/50 leading-[1.85] mb-8">
              Suitable for all skin types, for both men and women — it leaves skin feeling
              velvety soft, refreshed, and visibly more radiant with every use.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-9">
              {[
                "Helps exfoliate dead skin cells for smoother texture",
                "Helps improve the appearance of tanning with regular use",
                "Leaves skin feeling soft, smooth and refreshed",
                "Supports healthy-looking, naturally radiant skin",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <p className="font-body text-sm text-[#111111]/55 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>

            <button
              onClick={openWhatsApp}
              className="btn-luxury self-start flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[11px] tracking-[0.22em] uppercase font-body rounded-full hover:shadow-[0_14px_40px_rgba(201,168,106,0.38)] transition-all duration-300"
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </button>

            <p className="mt-4 font-body text-[10px] tracking-wider text-[#111111]/25 uppercase">
              ✓ Secure &nbsp;·&nbsp; ✓ Fast Response &nbsp;·&nbsp; ✓ Premium Packaging
            </p>
          </motion.div>
        </div>

        {/* ── Info Cards ── */}
        <div className="grid md:grid-cols-2 gap-5">
          {productInfo.map((info, i) => (
            <motion.div
              key={info.title}
              custom={i + 2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="bg-[#FCFBF8] rounded-2xl p-7 border border-[#F4F4F4] hover:border-[#C9A86A]/18 hover:shadow-[0_16px_50px_rgba(201,168,106,0.07)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center border border-[#C9A86A]/12 flex-shrink-0">
                  {info.icon}
                </div>
                <h4 className="font-heading text-[17px] text-[#111111]">{info.title}</h4>
              </div>
              <div className="h-[1px] bg-[#F0EDE8] mb-5" />
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {info.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                    <span className="font-body text-xs text-[#111111]/50 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Storage & Patch Test ── */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-5 grid sm:grid-cols-2 gap-5"
        >
          {/* Storage */}
          <div className="bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] rounded-2xl p-6 border border-[#C9A86A]/10">
            <p className="font-heading text-base text-[#111111] mb-3">Storage</p>
            <div className="h-[1px] bg-[#C9A86A]/15 mb-4" />
            <ul className="space-y-2">
              {[
                "Store in a cool, dry place",
                "Keep the container tightly closed",
                "Use a dry spoon to scoop",
                "Avoid introducing water into the container",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <span className="font-body text-xs text-[#111111]/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patch test */}
          <div className="bg-white rounded-2xl p-6 border border-[#F4F4F4] flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#C9A86A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-base">⚠️</span>
            </div>
            <div>
              <p className="font-heading text-base text-[#111111] mb-2">Patch Test Recommended</p>
              <p className="font-body text-xs text-[#111111]/45 leading-relaxed">
                Apply a small amount to your inner arm 24 hours before first use. Discontinue if irritation occurs. 
                For external use only. Keep away from eyes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
