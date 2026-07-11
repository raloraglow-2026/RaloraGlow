"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* Ambient glow (CSS only) */}
      <div className="pointer-events-none absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-[#F8F0E3]/40 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] w-[450px] h-[450px] rounded-full bg-[#F8F0E3]/30 blur-[130px]" />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen pt-28 pb-16 lg:py-0">

          {/* Left: Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Logo mark - mobile only */}
            <div className="mb-6 lg:hidden">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)]">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
              </div>
            </div>

            {/* Eyebrow pill */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A86A]/20 bg-[#C9A86A]/4">
                <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A86A]">Premium Skincare</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[52px] sm:text-[64px] md:text-[80px] lg:text-[92px] xl:text-[96px] leading-[0.95] tracking-[-0.02em] text-[#111111] mb-5">
              <span className="block">Luxury</span>
              <span className="block">Skincare</span>
              <span className="block gold-text italic">For Every Body</span>
            </h1>

            {/* Tagline */}
            <p className="font-heading text-[20px] md:text-[24px] gold-text italic mb-6">
              Reveal Your Natural Glow, Gently.
            </p>

            {/* Subtitle */}
            <p className="font-body text-[15px] md:text-[17px] text-[#111111]/40 leading-[2.0] max-w-[400px] mb-10">
              Pure by Nature. Made for You.
            </p>

            {/* CTA - centered */}
            <div className="flex justify-center lg:justify-start w-full mb-14">
              <button
                onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Discover the Scrub <ArrowDown size={12} />
              </button>
            </div>

            {/* Trust dots */}
            <div className="flex items-center gap-6 flex-wrap">
              {["Natural", "Handcrafted", "Unisex"].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#C9A86A]/50" />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111]/30">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Static product card (desktop only) */}
          <div className="hidden lg:flex items-center justify-center order-1 lg:order-2">
            <div className="bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE5] rounded-3xl p-10 lg:p-14 border border-[#C9A86A]/10 shadow-[0_24px_80px_rgba(201,168,106,0.10)] w-[320px] lg:w-[370px]">

              {/* Logo image */}
              <div className="flex justify-center mb-7">
                <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-[#C9A86A]/10">
                  <Image src="/logo.png" alt="SPCL Tan Care Body Scrub" fill className="object-cover" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="font-heading text-[22px] lg:text-[26px] text-[#111111] mb-1">SPCL Tan Care</p>
                <p className="font-body text-[11px] text-[#111111]/35 tracking-wide mb-4">Body Scrub · 200g</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-[#C9A86A] text-xs">★</span>)}
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Natural", "Luxury", "Unisex"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full border border-[#C9A86A]/15 font-body text-[8px] tracking-[0.18em] text-[#C9A86A] uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
