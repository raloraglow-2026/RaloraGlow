"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Shield, Heart, Sparkles, Users, Award } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const values = [
  { icon: <Leaf size={20} />,     title: "Natural",     desc: "Pure botanicals, zero chemicals" },
  { icon: <Shield size={20} />,   title: "Gentle",      desc: "Safe for every skin type" },
  { icon: <Heart size={20} />,    title: "Artisan",     desc: "Small-batch crafted with care" },
  { icon: <Sparkles size={20} />, title: "Luxury",      desc: "Premium formula and finish" },
  { icon: <Users size={20} />,    title: "Universal",   desc: "Designed for all, loved by all" },
  { icon: <Award size={20} />,    title: "Transparent", desc: "Honest claims, real results" },
];

const stats = [
  { num: "Premium", label: "Quality" },
  { num: "200g", label: "Per Jar" },
  { num: "100%", label: "Handcrafted" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="sec bg-[#FDFBF7] relative overflow-hidden">

      <div ref={ref} className="wrap">

        {/* Editorial grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start mb-28">

          {/* Left — narrative */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"}>
            <span className="eyebrow mb-8 inline-flex">The RALORA GLOW Story</span>
            <h2 className="h2 mb-7">
              Where Nature<br />Meets <span className="gold-text italic">Elegance</span>
            </h2>
            <span className="gold-rule-short mb-8 block" />
            <p className="body-lg mb-5 max-w-[45ch]">
              Premium skincare that is accessible, honest, and beautifully crafted.
            </p>
            <p className="body-lg mb-10 max-w-[45ch]">
              Handcrafted in India with time-tested natural formulations.
            </p>

            {/* Stats */}
            <div className="flex gap-10 pt-7 border-t border-[#111111]/5">
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={up(i + 2)} initial="hidden" animate={v ? "show" : "hidden"}>
                  <p className="stat-num text-[#C9A86A]">{s.num}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#111111]/30 uppercase mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — value cards 2x3 grid */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="group p-7 rounded-2xl bg-white border border-[#111111]/5 hover:border-[#C9A86A]/20 hover:shadow-[0_12px_48px_rgba(201,168,106,0.08)] transition-all duration-400"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A86A]/8 to-[#C9A86A]/15 flex items-center justify-center mb-4 group-hover:from-[#C9A86A]/15 group-hover:to-[#C9A86A]/25 transition-all duration-400">
                    <span className="text-[#C9A86A]">{val.icon}</span>
                  </div>
                  <p className="font-heading text-[17px] text-[#111111] mb-1.5">{val.title}</p>
                  <p className="font-body text-[12px] text-[#111111]/38 leading-[1.75]">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote card — ivory, NOT dark */}
        <motion.div
          variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"}
          className="rounded-3xl bg-[#F8F5EF] px-8 py-14 md:px-16 md:py-18 text-center border border-[#C9A86A]/8"
        >
          <span className="font-heading text-[56px] md:text-[72px] text-[#C9A86A]/12 leading-none select-none block mb-2">&ldquo;</span>
          <p className="font-heading text-[20px] md:text-[26px] text-[#111111]/55 italic leading-[1.5] max-w-xl mx-auto -mt-6">
            Luxury is not about price — it is about intention.
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto mt-8 mb-4" />
          <p className="font-body text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase">— The RALORA GLOW Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
