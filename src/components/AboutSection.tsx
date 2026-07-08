"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const up = {
  hidden: { opacity:0, y:28 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.12, duration:0.65, ease:"easeOut" as const } }),
};

const pillars = [
  { num:"01", title:"Our Story",   text:"Born from a passion for genuine self-care, RALORA GLOW was created to make premium skincare accessible to everyone — without compromise." },
  { num:"02", title:"Our Mission", text:"To craft luxurious skincare experiences using carefully selected natural ingredients, designed for every skin type and every lifestyle." },
  { num:"03", title:"Our Vision",  text:"To build a trusted premium skincare brand that stands for quality, honesty, and timeless elegance." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="about" className="relative section bg-[#FCFBF8] overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute top-1/2 right-0 w-72 h-72 rounded-full bg-[#EFE8DD]/30 translate-x-1/2 -translate-y-1/2 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Our Story</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">
            Where Nature Meets<br /><span className="gold-text italic">Luxury</span>
          </motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
        </div>

        {/* Editorial two-col */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">

          {/* Left */}
          <motion.div custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"}>
            <p className="font-heading text-xl md:text-2xl text-[#111111]/70 italic leading-[1.5] mb-5">
              "Luxury is the quiet joy of something perfectly made."
            </p>
            <div className="h-[1px] w-8 bg-[#C9A86A] mb-5" />
            <p className="font-body text-sm text-[#111111]/48 leading-[1.8] mb-4">
              Natural ingredients, zero compromise. Premium care for every skin type.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 flex-wrap">
              {[["Natural","Focus"],["Unisex","For All"],["Handcrafted","Every Batch"]].map(([v1,v2],i)=>(
                <div key={i} className="flex items-center gap-4">
                  <div>
                    <p className="font-heading text-lg md:text-xl gold-text">{v1}</p>
                    <p className="font-body text-[8px] tracking-widest text-[#111111]/35 uppercase mt-0.5">{v2}</p>
                  </div>
                  {i<2 && <div className="w-[1px] h-6 bg-[#C9A86A]/15" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual tiles */}
          <motion.div custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 rounded-2xl bg-gradient-to-br from-[#EFE8DD] to-[#F8F5EF] flex items-center justify-center card-shadow min-h-[280px]">
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4B97E] to-[#C9A86A] mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-white text-xl">🌿</span>
                  </div>
                  <p className="font-heading text-sm text-[#111111]/55 tracking-wide">Natural</p>
                  <p className="font-heading text-base gold-text italic">Ingredients</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] flex items-center justify-center card-shadow min-h-[130px]">
                <div className="text-center p-4">
                  <span className="text-2xl">✨</span>
                  <p className="font-heading text-xs tracking-widest text-[#C9A86A] mt-2 uppercase">Premium</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#EFE8DD] to-[#F8F5EF] flex items-center justify-center card-shadow min-h-[130px]">
                <div className="text-center p-4">
                  <span className="text-2xl">🤲</span>
                  <p className="font-heading text-xs tracking-widest text-[#C9A86A] mt-2 uppercase">Handcrafted</p>
                </div>
              </div>
            </div>

            {/* Bottom label */}
            <div className="mt-4 bg-white rounded-2xl p-4 card-shadow border border-[#C9A86A]/10 flex items-center justify-between">
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Featured Product</p>
                <p className="font-heading text-sm text-[#111111] mt-0.5">SPCL Tan Care Body Scrub</p>
              </div>
              <div className="relative w-10 h-10 rounded-full bg-[#0d0d0d] overflow-hidden flex-shrink-0 border border-[#C9A86A]/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">RG</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p,i)=>(
            <motion.div key={p.num} custom={i+2} variants={up} initial="hidden" animate={v?"show":"hidden"}>
              <div className="h-full bg-white rounded-2xl p-7 border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_14px_40px_rgba(201,168,106,0.08)] transition-all duration-400">
                <p className="font-heading text-4xl text-[#C9A86A]/12 mb-3">{p.num}</p>
                <div className="h-[1px] w-7 bg-[#C9A86A]/35 mb-4" />
                <h3 className="font-heading text-lg text-[#111111] mb-2">{p.title}</h3>
                <p className="font-body text-xs text-[#111111]/48 leading-[1.8]">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
