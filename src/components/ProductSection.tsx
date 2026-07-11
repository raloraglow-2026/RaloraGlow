"use client";
import { MessageCircle, Check, Star } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Visible reduction in appearance of tan",
  "Naturally radiant-looking skin",
  "Smoother, softer skin texture",
  "Brighter-looking complexion",
  "Gentle exfoliation for healthy skin",
  "Leaves skin feeling refreshed",
  "Suitable for face and body",
  "Helps remove dead skin buildup",
];

export default function ProductSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank");

  return (
    <section id="product" className="sec bg-white relative overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="eyebrow mb-8 inline-flex">Our Signature</span>
          <h2 className="h2 mb-5">
            SPCL Tan Care<br /><span className="gold-text italic">Body Scrub</span>
          </h2>
          <span className="gold-rule-short mx-auto block mb-7" />
          <p className="body-lg mx-auto text-center">
            A natural detox scrub powder for face and body.
          </p>
        </div>

        {/* 2-col showcase */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Product card */}
          <div>
            <div className="bg-[#FDFBF7] rounded-3xl p-12 md:p-16 border border-[#C9A86A]/8 flex flex-col items-center text-center">

              {/* Product image */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.12)] mb-8 ring-1 ring-[#C9A86A]/10">
                <Image src="/logo.png" alt="RALORA GLOW SPCL Tan Care Body Scrub" fill className="object-cover" />
              </div>

              {/* Name */}
              <p className="font-heading text-[28px] md:text-[32px] text-[#111111] mb-1">SPCL Tan Care</p>
              <p className="font-body text-[13px] text-[#111111]/35 mb-5 tracking-wide">Body Scrub · 200g</p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-[#C9A86A] fill-[#C9A86A]" />)}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {["Natural", "Handcrafted", "Unisex", "Face & Body"].map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full border border-[#C9A86A]/15 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <button onClick={wa} className="btn-primary w-full justify-center">
                <MessageCircle size={15} /> Order on WhatsApp
              </button>
            </div>
          </div>

          {/* Right: Benefits */}
          <div>
            <h3 className="h3 mb-3">The Promise</h3>
            <span className="gold-rule-short mb-10 block" />

            <div className="space-y-7 mb-14">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-7 h-7 rounded-full bg-[#3D5A40] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[15px] text-[#111111]/55 leading-[1.8] group-hover:text-[#111111]/70 transition-colors">{b}</p>
                </div>
              ))}
            </div>

            {/* Details strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 bg-[#FDFBF7] rounded-2xl border border-[#111111]/4">
              {[
                ["200g", "Net Weight"],
                ["All Skin Types", "Compatibility"],
                ["3 Months", "Best Before"],
                ["India", "Crafted In"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="font-heading text-[20px] text-[#111111]/75">{val}</p>
                  <p className="font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase mt-1.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
