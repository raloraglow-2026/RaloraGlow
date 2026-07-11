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
  { icon: <Leaf size={22} />,     title: "100% Natural",      desc: "Carefully sourced botanical ingredients — free from harsh chemicals and synthetic agents." },
  { icon: <Shield size={22} />,   title: "Derma-Gentle",      desc: "Formulated for every skin type — delivers visible results without irritation." },
  { icon: <Heart size={22} />,    title: "Artisan Crafted",   desc: "Small-batch production ensures uncompromising quality in every single jar." },
  { icon: <Sparkles size={22} />, title: "Luxury Grade",      desc: "From formulation to packaging — a premium experience at every touchpoint." },
  { icon: <Users size={22} />,    title: "Universal",         desc: "One exceptional product designed for all — men, women, every skin tone." },
  { icon: <Award size={22} />,    title: "Transparent",       desc: "No false promises. Real ingredients, honest claims, genuine results over time." },
];

const stats = [
  { num: "6", label: "Natural Ingredients" },
  { num: "200g", label: "Per Jar" },
  { num: "100%", label: "Handcrafted" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Editorial intro */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start mb-24">

          {/* Left — brand narrative */}
          <motion.div variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"}>
            <span className="eyebrow mb-8 inline-flex">The RALORA GLOW Story</span>
            <h2 className="h2 mb-7">
              Where Nature<br />Meets <span className="gold-text italic">Elegance</span>
            </h2>
            <span className="gold-rule-short mb-8 block" />
            <p className="body-lg mb-6">
              RALORA GLOW was founded on an uncompromising principle — that truly premium skincare should be accessible, honest, and beautifully crafted. Not gatekept. Not overpriced. Simply exceptional.
            </p>
            <p className="body-lg mb-6">
              Our signature SPCL Tan Care Body Scrub is handcrafted in India using six time-tested natural ingredients — Masoor Dal, Besan, Rice Flour, Multani Mitti, Coffee, and Turmeric. Zero harsh bleaching agents. Zero artificial whitening chemicals.
            </p>
            <p className="body-lg mb-8">
              Every jar carries the care we would give our own skin. That is the RALORA GLOW promise — nothing less.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-6 border-t border-[#111111]/6">
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={up(i + 2)} initial="hidden" animate={v ? "show" : "hidden"}>
                  <p className="stat-num text-[#C9A86A]">{s.num}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#111111]/35 uppercase mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — value cards grid */}
          <motion.div variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="group p-6 rounded-2xl bg-white border border-[#111111]/4 hover:border-[#C9A86A]/25 hover:shadow-[0_12px_48px_rgba(201,168,106,0.10)] transition-all duration-400"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A86A]/8 to-[#C9A86A]/15 flex items-center justify-center mb-4 group-hover:from-[#C9A86A]/15 group-hover:to-[#C9A86A]/25 transition-all duration-400">
                    <span className="text-[#C9A86A]">{val.icon}</span>
                  </div>
                  <p className="font-heading text-[17px] text-[#111111] mb-2">{val.title}</p>
                  <p className="font-body text-[12px] text-[#111111]/40 leading-[1.75]">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote banner — editorial luxury */}
        <motion.div
          variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"}
          className="rounded-3xl bg-[#0f0f0f] px-8 py-16 md:px-20 md:py-20 text-center relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize: "32px 32px" }} />
          {/* Gold glow accent */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #C9A86A, transparent)" }} />

          <div className="relative z-10">
            <span className="font-heading text-[60px] md:text-[80px] text-[#C9A86A]/10 leading-none select-none block mb-4">&ldquo;</span>
            <p className="font-heading text-[22px] md:text-[30px] text-white/80 italic leading-[1.5] max-w-2xl mx-auto -mt-8">
              Luxury is not about price — it is about intention. Every ingredient chosen with purpose, every jar crafted with devotion.
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto mt-10 mb-5" />
            <p className="font-body text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase">— The RALORA GLOW Philosophy</p>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
