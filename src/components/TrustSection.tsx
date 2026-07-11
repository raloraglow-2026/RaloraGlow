"use client";
import { Leaf, Heart, Users, MapPin, Recycle } from "lucide-react";

const badges = [
  { icon: <Leaf size={28} />,    label: "100% Natural" },
  { icon: <Heart size={28} />,   label: "Cruelty-Free" },
  { icon: <Users size={28} />,   label: "Unisex" },
  { icon: <MapPin size={28} />,  label: "Made in India" },
  { icon: <Recycle size={28} />, label: "Eco-Friendly" },
];

export default function TrustSection() {
  return (
    <section className="sec bg-white relative overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow mb-8 inline-flex">Trust</span>
          <h2 className="h2 mb-5">
            What We<br /><span className="gold-text italic">Stand For</span>
          </h2>
          <span className="gold-rule-short mx-auto block" />
        </div>

        {/* Badges row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 max-w-3xl mx-auto">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center text-center">
              <div className="text-[#C9A86A] mb-3">{badge.icon}</div>
              <p className="font-body text-[12px] tracking-[0.15em] uppercase text-[#111111]/40 mt-1">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
