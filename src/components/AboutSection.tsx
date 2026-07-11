"use client";
import { Leaf, Shield, Heart, Sparkles, Users, Award } from "lucide-react";

const values = [
  { icon: <Leaf size={20} />,     title: "100% Natural",  desc: "Pure natural formulations" },
  { icon: <Heart size={20} />,    title: "Handmade",      desc: "Crafted with care" },
  { icon: <Shield size={20} />,   title: "Cruelty Free",  desc: "Never tested on animals" },
  { icon: <Sparkles size={20} />, title: "Eco Friendly",  desc: "Sustainable packaging" },
  { icon: <Users size={20} />,    title: "Unisex",        desc: "For men and women" },
  { icon: <Award size={20} />,    title: "Face & Body",   desc: "Complete skincare" },
];

const stats = [
  { num: "100%", label: "Natural" },
  { num: "Unisex", label: "For All" },
  { num: "Handmade", label: "Each Batch" },
];

export default function AboutSection() {
  return (
    <section id="about" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="wrap">

        {/* Editorial grid */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-20 items-start mb-16">

          {/* Left — narrative */}
          <div>
            <span className="eyebrow mb-8 inline-flex">The RALORA GLOW Story</span>
            <h2 className="h2 mb-8">
              Where Nature<br />Meets <span className="gold-text italic">Elegance</span>
            </h2>
            <span className="gold-rule-short mb-8 block" />
            <p className="body-lg mb-5 max-w-[45ch]">
              A 100% natural scrub powder for face and body that gently exfoliates and detoxifies.
            </p>
            <p className="body-lg mb-10 max-w-[45ch]">
              Handmade in India with care — for radiant, healthy skin.
            </p>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-[#111111]/5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="stat-num text-[#C9A86A]">{s.num}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#111111]/30 uppercase mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-[12px] text-[#111111]/25 mt-4">Trusted by customers across Andhra Pradesh</p>
          </div>

          {/* Right — value cards 2x3 grid */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="group p-8 rounded-2xl bg-white border border-[#111111]/5 hover:border-[#C9A86A]/20 hover:shadow-[0_12px_48px_rgba(201,168,106,0.08)] transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A86A]/8 to-[#C9A86A]/15 flex items-center justify-center mb-5 group-hover:from-[#C9A86A]/15 group-hover:to-[#C9A86A]/25 transition-all duration-400">
                    <span className="text-[#C9A86A]">{val.icon}</span>
                  </div>
                  <p className="font-heading text-[18px] text-[#111111] mb-1.5">{val.title}</p>
                  <p className="font-body text-[12px] text-[#111111]/38 leading-[1.75]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote card — ivory */}
        <div className="rounded-3xl bg-[#F8F5EF] px-10 py-12 md:px-20 md:py-14 text-center border border-[#C9A86A]/8">
          <span className="font-heading text-[72px] md:text-[96px] text-[#C9A86A]/12 leading-none select-none block mb-2">&ldquo;</span>
          <p className="font-heading text-[22px] md:text-[30px] text-[#111111]/55 italic leading-[1.5] max-w-xl mx-auto -mt-6">
            Pure by Nature. Made for You.
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto mt-8 mb-4" />
          <p className="font-body text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase">— The RALORA GLOW Philosophy</p>
        </div>
      </div>
    </section>
  );
}
