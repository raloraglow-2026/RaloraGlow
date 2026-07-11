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
  { icon: <Leaf size={20} />,     title: "Natural",      desc: "Carefully selected natural ingredients — no harsh chemicals, no artificial whitening." },
  { icon: <Shield size={20} />,   title: "Gentle",       desc: "Formulated to be kind to all skin types while delivering visible results." },
  { icon: <Heart size={20} />,    title: "Handcrafted",  desc: "Every batch made with attention to detail, quality, and consistency." },
  { icon: <Sparkles size={20} />, title: "Premium",      desc: "A luxury self-care experience from the formula to the packaging." },
  { icon: <Users size={20} />,    title: "For Everyone", desc: "Designed for men and women — one premium product for all." },
  { icon: <Award size={20} />,    title: "Honest",       desc: "No exaggerated claims. Real ingredients, real care, real results over time." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Two-column editorial */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">

          {/* Left — story */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"}>
            <span className="eyebrow mb-8 inline-flex">About RALORA GLOW</span>
            <h2 className="h2 mb-7">
              Where Nature<br />Meets <span className="gold-text italic">Luxury</span>
            </h2>
            <span className="gold-rule-short mb-8 block" />
            <p className="body-lg mb-6">
              RALORA GLOW was born from a simple belief — premium skincare should be thoughtful, honest, and beautifully crafted. Not exclusive. Not overpriced. Just genuinely good.
            </p>
            <p className="body-lg mb-6">
              Our SPCL Tan Care Body Scrub is handcrafted in India with a blend of natural ingredients — Masoor Dal, Besan, Rice Flour, Multani Mitti, Coffee, and Turmeric. No harsh bleaching agents. No artificial whitening chemicals.
            </p>
            <p className="body-lg">
              Every jar is made with the same care we'd give our own skin. That's the RALORA GLOW promise.
            </p>
          </motion.div>

          {/* Right — brand values */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v2, i) => (
                <div
                  key={v2.title}
                  className="p-5 rounded-2xl bg-white border border-[#111111]/5 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_32px_rgba(201,168,106,0.08)] transition-all duration-300"
                >
                  <div className="text-[#C9A86A] mb-3">{v2.icon}</div>
                  <p className="font-heading text-[16px] text-[#111111] mb-1.5">{v2.title}</p>
                  <p className="font-body text-[12px] text-[#111111]/42 leading-[1.7]">{v2.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote banner */}
        <motion.div
          variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"}
          className="rounded-2xl bg-[#111111] px-8 py-14 md:px-16 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10">
            <p className="font-heading text-[22px] md:text-[28px] text-white/80 italic leading-[1.5] max-w-2xl mx-auto">
              "Premium skincare should not be a privilege. It should be a daily joy — thoughtfully made, honestly presented, beautifully experienced."
            </p>
            <div className="gold-rule w-12 mx-auto mt-8 mb-4" />
            <p className="font-body text-[11px] tracking-[0.3em] text-[#C9A86A] uppercase">— RALORA GLOW</p>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
