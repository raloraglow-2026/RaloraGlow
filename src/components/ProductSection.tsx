"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Shield, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.65, ease: "easeOut" as const },
  }),
};

const infoCards = [
  {
    icon: <Sparkles size={15} className="text-[#C9A86A]" />,
    title: "Benefits",
    items: [
      "Helps exfoliate dead skin cells",
      "Improves appearance of tanning",
      "Leaves skin soft & refreshed",
      "Supports healthy-looking skin",
      "Suitable for men & women",
      "Gentle for regular use",
    ],
  },
  {
    icon: <Shield size={15} className="text-[#C9A86A]" />,
    title: "Product Details",
    items: [
      "Net Weight: 200g",
      "For: Men & Women",
      "Skin Type: All Types",
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
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I%27d%20like%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section id="product" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EFE8DD]/12 translate-x-1/2 translate-y-1/2 blur-[120px] pointer-events-none" />

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
            className="font-heading text-4xl md:text-5xl lg:text-[54px] text-[#111111] leading-[1.1]"
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
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">

          {/* ── Product Visual ── */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Soft glow behind */}
            <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] blur-3xl opacity-40 pointer-events-none" />

            <div className="relative z-10 bg-gradient-to-br from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] rounded-3xl p-10 md:p-14 border border-[#C9A86A]/10 shadow-[0_20px_60px_rgba(201,168,106,0.10)]">

              {/* Floating jar */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const }}
                  className="relative"
                >
                  {/* Outer circle */}
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_20px_70px_rgba(201,168,106,0.18)] border border-[#C9A86A]/12 flex items-center justify-center">
                    {/* Inner label */}
                    <div className="w-38 h-38 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center gap-0.5 px-5">
                      <p className="font-body text-[8px] tracking-[0.45em] text-[#C9A86A] uppercase">RALORA</p>
                      <p className="font-body text-[7px] tracking-[0.35em] text-[#C9A86A] uppercase">GLOW</p>
                      <div className="w-10 h-[0.5px] bg-[#C9A86A]/35 my-2" />
                      <p className="font-heading text-[10px] tracking-widest text-[#111111]/50 uppercase">SPCL</p>
                      <p className="font-heading text-[8px] text-[#111111]/38 mt-0.5">Tan Care</p>
                      <p className="font-heading text-[8px] text-[#111111]/38">Body Scrub</p>
                      <p className="font-body text-[7px] text-[#111111]/22 mt-2">200g</p>
                    </div>
                  </div>
                  {/* Gold lid */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 md:w-56 h-10 rounded-t-full bg-gradient-to-r from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow-lg" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 md:w-32 h-3 rounded-t-full bg-white/20" />
                </motion.div>
              </div>

              {/* Quality badges */}
              <div className="flex justify-center flex-wrap gap-2">
                {["Natural", "Unisex", "Handcrafted", "Gentle"].map((b) => (
                  <span
                    key={b}
                    className="px-4 py-1.5 bg-white/80 rounded-full border border-[#C9A86A]/15 shadow-sm font-body text-[9px] tracking-[0.22em] text-[#C9A86A] uppercase"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Description ── */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <span className="inline-flex items-center gap-2 self-start mb-6 px-3.5 py-1.5 bg-[#F8F5EF] border border-[#C9A86A]/18 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              <span className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Premium Handcrafted</span>
            </span>

            <h3 className="font-heading text-3xl md:text-4xl text-[#111111] leading-[1.2] mb-4">
              The Ultimate<br />
              <span className="italic text-[#C9A86A]">Glow Ritual</span>
            </h3>
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#C9A86A] to-transparent mb-7" />

            <p className="font-body text-sm md:text-[15px] text-[#111111]/48 leading-[1.88] mb-5">
              The SPCL Tan Care Body Scrub is a premium handcrafted exfoliating treatment
              formulated with carefully selected natural ingredients to gently buff away
              dead skin cells and reveal smoother-looking skin.
            </p>
            <p className="font-body text-sm md:text-[15px] text-[#111111]/48 leading-[1.88] mb-9">
              Designed for all skin types — for men and women — it leaves skin feeling
              velvety soft, refreshed, and naturally radiant with every use.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-10">
              {[
                "Helps gently exfoliate dead skin cells",
                "Helps improve the appearance of tanning with regular use",
                "Leaves skin feeling soft, smooth and refreshed",
                "Supports healthy-looking, naturally radiant skin",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <p className="font-body text-sm text-[#111111]/52 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>

            <button
              onClick={openWhatsApp}
              className="btn-luxury self-start inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[11px] tracking-[0.22em] uppercase font-body rounded-full hover:shadow-[0_12px_38px_rgba(201,168,106,0.36)] transition-all duration-300"
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </button>

            <p className="mt-4 font-body text-[10px] tracking-wider text-[#111111]/22 uppercase">
              ✓ Secure &nbsp;·&nbsp; ✓ Fast Response &nbsp;·&nbsp; ✓ Premium Packaging
            </p>
          </motion.div>
        </div>

        {/* ── Info Cards ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i + 2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="bg-[#FCFBF8] rounded-2xl p-7 border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_14px_48px_rgba(201,168,106,0.07)] transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center border border-[#C9A86A]/12 flex-shrink-0">
                  {card.icon}
                </div>
                <h4 className="font-heading text-[17px] text-[#111111]">{card.title}</h4>
              </div>
              <div className="h-[1px] bg-[#F0EDE8] mb-5" />
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                    <span className="font-body text-xs text-[#111111]/48 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Storage + Patch Test ── */}
        <div className="grid sm:grid-cols-2 gap-5">
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] rounded-2xl p-6 border border-[#C9A86A]/10"
          >
            <p className="font-heading text-[15px] text-[#111111] mb-4">Storage</p>
            <div className="h-[1px] bg-[#C9A86A]/12 mb-4" />
            <ul className="space-y-2">
              {[
                "Store in a cool, dry place",
                "Keep the container tightly closed",
                "Use a dry spoon only",
                "Avoid introducing water into jar",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <span className="font-body text-xs text-[#111111]/48">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-6 border border-[#F0EDE8] flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-full bg-[#C9A86A]/8 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#C9A86A]/12">
              <span className="text-base">⚠️</span>
            </div>
            <div>
              <p className="font-heading text-[15px] text-[#111111] mb-2">Patch Test Recommended</p>
              <p className="font-body text-xs text-[#111111]/45 leading-[1.8]">
                Apply a small amount to your inner arm 24 hours before first full use.
                Discontinue if irritation occurs. For external use only. Keep away from eyes
                and out of reach of children.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
