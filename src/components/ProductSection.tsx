"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:28 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.11, duration:0.65, ease:"easeOut" as const } }
});

const benefits = [
  "Helps gently exfoliate dead skin cells",
  "Helps improve the appearance of tanning with regular use",
  "Leaves skin feeling soft, smooth and refreshed",
  "Supports healthy-looking, naturally radiant skin",
  "Suitable for all skin types",
  "Designed for men and women",
];

export default function ProductSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });
  const wa  = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="product" className="sec bg-[#F8F5EF] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">Featured Product</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
          <motion.p variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="body-lg mt-5 max-w-lg mx-auto text-center">
            A handcrafted exfoliating scrub with carefully selected natural ingredients. Gentle on skin, real results.
          </motion.p>
        </div>

        {/* Main two-col */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">

          {/* Product visual */}
          <motion.div variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="relative order-2 lg:order-1">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-[#C9A86A]/8 blur-3xl" />
            <div className="relative z-10 bg-white rounded-3xl p-10 md:p-14 border border-[#C9A86A]/12 shadow-[0_20px_80px_rgba(201,168,106,0.12)] flex flex-col items-center">

              {/* Floating jar */}
              <motion.div
                animate={{ y:[0,-10,0] }}
                transition={{ duration:5, repeat:Infinity, ease:"easeInOut" as const }}
                className="relative mb-8"
              >
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#F8F5EF] to-white shadow-[0_20px_70px_rgba(201,168,106,0.18)] border border-[#C9A86A]/15 flex items-center justify-center">
                  <div className="text-center px-5">
                    <p className="font-body text-[7px] tracking-[0.45em] text-[#C9A86A] uppercase">RALORA</p>
                    <p className="font-body text-[6px] tracking-[0.38em] text-[#C9A86A] uppercase">GLOW</p>
                    <div className="w-9 h-[0.5px] bg-[#C9A86A]/35 mx-auto my-2" />
                    <p className="font-heading text-[9px] tracking-widest text-[#111111]/50 uppercase">SPCL</p>
                    <p className="font-heading text-[8px] text-[#111111]/38 mt-0.5">Tan Care Body Scrub</p>
                    <p className="font-body text-[7px] text-[#111111]/22 mt-2">200g</p>
                  </div>
                </div>
                {/* Lid */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-44 md:w-52 h-9 rounded-t-full bg-gradient-to-r from-[#a07830] via-[#C9A86A] to-[#D4B97E] shadow-xl" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-3 rounded-t-full bg-white/20" />
              </motion.div>

              {/* Quality tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {["Natural Formula","Unisex","Handcrafted","Gentle Exfoliation"].map(b=>(
                  <span key={b} className="px-4 py-1.5 rounded-full bg-[#F8F5EF] border border-[#C9A86A]/15 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">{b}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="order-1 lg:order-2">
            <span className="eyebrow mb-6 inline-flex">Premium Handcrafted</span>
            <h3 className="h3 mb-4 text-[#111111]">The Ultimate<br /><span className="gold-text italic">Glow Ritual</span></h3>
            <span className="gold-rule-short mb-6 block" />
            <p className="body-lg mb-8">
              The SPCL Tan Care Body Scrub is a premium handcrafted formula that gently exfoliates dead skin cells, helps improve the appearance of tanning with regular use, and leaves your skin feeling soft, smooth and radiant. Designed for all skin types — for men and women.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((b,i)=>(
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-[7px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                  <p className="body-sm">{b}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={wa} className="btn-gold">
                <MessageCircle size={14} /> Order on WhatsApp
              </button>
              <button onClick={()=>document.querySelector("#howtouse")?.scrollIntoView({behavior:"smooth"})} className="btn-outline-gold">
                How To Use <ArrowRight size={13} />
              </button>
            </div>
            <p className="font-body text-[10px] tracking-wider text-[#111111]/22 uppercase mt-4">✓ Secure · ✓ Fast Response · ✓ Premium Packaging</p>
          </motion.div>
        </div>

        {/* ── Detail cards row ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon:"📦", title:"Net Weight",    val:"200g" },
            { icon:"👤", title:"Suitable For",  val:"Men & Women" },
            { icon:"🌿", title:"Formula",        val:"Natural" },
            { icon:"🏭", title:"Origin",         val:"Handcrafted in India" },
          ].map((d,i)=>(
            <motion.div key={d.title} variants={up(i+2)} initial="hidden" animate={v?"show":"hidden"}>
              <div className="card-white p-6 flex items-start gap-4 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_30px_rgba(201,168,106,0.08)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] flex items-center justify-center text-lg border border-[#C9A86A]/10 flex-shrink-0">{d.icon}</div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.28em] text-[#C9A86A] uppercase mb-1">{d.title}</p>
                  <p className="font-heading text-base text-[#111111]/80">{d.val}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Storage + Patch test ── */}
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <motion.div variants={up(6)} initial="hidden" animate={v?"show":"hidden"}>
            <div className="card-white p-7 hover:border-[#C9A86A]/15 transition-all duration-300 h-full">
              <p className="font-heading text-lg text-[#111111] mb-4">Storage</p>
              <span className="gold-rule-short mb-5 block" />
              <ul className="space-y-2.5">
                {["Store in a cool, dry place","Keep the lid tightly closed","Always use a dry spoon","Avoid introducing water into jar"].map((s,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-[7px] w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                    <span className="body-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div variants={up(7)} initial="hidden" animate={v?"show":"hidden"}>
            <div className="card-white p-7 hover:border-[#C9A86A]/15 transition-all duration-300 h-full flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EC] border border-[#C9A86A]/15 flex items-center justify-center text-lg flex-shrink-0 mt-0.5">⚠️</div>
              <div>
                <p className="font-heading text-lg text-[#111111] mb-3">Patch Test Recommended</p>
                <p className="body-sm leading-[1.85]">Apply a small amount to your inner arm 24 hours before first full use. Discontinue if irritation occurs. For external use only. Keep away from eyes and children.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
