"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:28 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.12, duration:0.65, ease:"easeOut" as const } }
});

export default function AboutSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="about" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* ── Top two-col editorial ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-28">

          {/* Left */}
          <motion.div variants={up(0)} initial="hidden" animate={v?"show":"hidden"}>
            <span className="eyebrow mb-6 inline-flex">Our Story</span>
            <h2 className="h2 mb-6">
              Where Nature<br />Meets <span className="gold-text italic">Luxury</span>
            </h2>
            <span className="gold-rule-short mb-8 block" />
            <p className="body-lg mb-5">
              At RALORA GLOW, every product begins with a simple belief: premium skincare should feel thoughtful, honest, and beautifully crafted.
            </p>
            <p className="body-lg mb-10">
              Our SPCL Tan Care Body Scrub is handcrafted with a blend of natural ingredients — no harsh chemicals, no artificial whitening agents. Just genuine care for your skin.
            </p>

            {/* Stats row */}
            <div className="flex items-stretch gap-8 flex-wrap">
              {[
                ["Natural","Focus"],
                ["Unisex","For Everyone"],
                ["Handcrafted","Each Batch"],
              ].map(([val,lbl],i) => (
                <div key={i} className="flex items-center gap-7">
                  <div>
                    <p className="font-heading text-2xl gold-text leading-tight">{val}</p>
                    <p className="font-body text-[9px] tracking-[0.28em] uppercase text-[#111111]/35 mt-1">{lbl}</p>
                  </div>
                  {i<2 && <div className="w-[1px] h-8 bg-[#C9A86A]/15" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual collage */}
          <motion.div variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Tall left */}
              <div className="row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#EFE8DD] via-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center min-h-[300px] border border-[#C9A86A]/10">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🌿</span>
                  </div>
                  <p className="font-heading text-base text-[#111111]/55 tracking-wide">Natural</p>
                  <p className="font-heading text-xl gold-text italic mt-1">Botanicals</p>
                </div>
              </div>
              {/* Top right */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center min-h-[140px] border border-[#C9A86A]/10">
                <div className="text-center p-5">
                  <span className="text-3xl">✨</span>
                  <p className="font-body text-[10px] tracking-[0.3em] text-[#C9A86A] uppercase mt-2">Premium</p>
                </div>
              </div>
              {/* Bottom right */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#EFE8DD] to-[#F8F5EF] flex items-center justify-center min-h-[140px] border border-[#C9A86A]/10">
                <div className="text-center p-5">
                  <span className="text-3xl">🤲</span>
                  <p className="font-body text-[10px] tracking-[0.3em] text-[#C9A86A] uppercase mt-2">Handcrafted</p>
                </div>
              </div>
            </div>
            {/* Product badge */}
            <div className="mt-4 bg-white rounded-2xl p-4 border border-[#C9A86A]/12 shadow-[0_4px_24px_rgba(201,168,106,0.10)] flex items-center justify-between">
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Featured Product</p>
                <p className="font-heading text-sm text-[#111111] mt-0.5">SPCL Tan Care Body Scrub</p>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s=><span key={s} className="text-[#C9A86A] text-xs">★</span>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Quote banner ── */}
        <motion.div variants={up(2)} initial="hidden" animate={v?"show":"hidden"}
          className="bg-[#0f0f0f] rounded-2xl px-8 py-12 md:px-16 md:py-14 mb-20 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage:"radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize:"28px 28px" }} />
          <div className="pointer-events-none absolute right-0 top-0 w-48 h-48 rounded-full opacity-10"
            style={{ background:"radial-gradient(circle,#C9A86A,transparent)" }} />
          <div className="relative z-10 text-center">
            <p className="font-heading text-[70px] leading-none text-[#C9A86A]/10 select-none absolute top-4 left-8">"</p>
            <p className="font-heading text-2xl md:text-3xl text-white italic leading-[1.45] relative z-10">
              "Luxury is not about excess — it is about the quiet joy of using something perfectly made."
            </p>
            <div className="gold-rule w-16 mx-auto mt-8" />
          </div>
        </motion.div>

        {/* ── Three pillars ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n:"01", title:"Our Story",   body:"Born from a passion for genuine self-care, RALORA GLOW was created to make premium skincare accessible to everyone — without compromise." },
            { n:"02", title:"Our Mission", body:"To craft luxurious skincare experiences using carefully selected natural ingredients, designed for every skin type and every lifestyle." },
            { n:"03", title:"Our Vision",  body:"To build a trusted premium skincare brand that stands for quality, honesty, and timeless elegance." },
          ].map((p,i) => (
            <motion.div key={p.n} variants={up(i+3)} initial="hidden" animate={v?"show":"hidden"}>
              <div className="h-full card-white p-8 hover:border-[#C9A86A]/20 hover:shadow-[0_12px_40px_rgba(201,168,106,0.08)] transition-all duration-400">
                <p className="font-heading text-5xl text-[#C9A86A]/10 leading-none mb-4">{p.n}</p>
                <span className="gold-rule-short mb-5 block" />
                <h3 className="font-heading text-xl text-[#111111] mb-3">{p.title}</h3>
                <p className="body-sm">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
