"use client";
import { Leaf, Sparkles, Shield, Heart, Users, Award } from "lucide-react";

const cards = [
  { icon: <Leaf size={24} />,     title: "Handmade in Small Batches", desc: "Crafted with care and attention" },
  { icon: <Sparkles size={24} />, title: "100% Natural",              desc: "No synthetic chemicals" },
  { icon: <Shield size={24} />,   title: "No Harsh Chemicals",        desc: "Gentle on all skin types" },
  { icon: <Heart size={24} />,    title: "Cruelty-Free",              desc: "Never tested on animals" },
  { icon: <Users size={24} />,    title: "Unisex Formula",            desc: "For men and women" },
  { icon: <Award size={24} />,    title: "Face & Body",               desc: "Complete skincare solution" },
];

export default function WhyChooseSection() {
  return (
    <section className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow mb-8 inline-flex">Why Us</span>
          <h2 className="h2 mb-5">
            Why Choose<br /><span className="gold-text italic">RALORA GLOW</span>
          </h2>
          <span className="gold-rule-short mx-auto block" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 border border-[#111111]/5 hover:border-[#3D5A40]/20 hover:shadow-[0_12px_48px_rgba(61,90,64,0.06)] transition-all duration-300"
            >
              <div className="text-[#C9A86A] mb-5">{card.icon}</div>
              <p className="font-heading text-[18px] text-[#111111] mb-2">{card.title}</p>
              <p className="body-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
