"use client";
import { ArrowDown, Leaf, Hand, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute top-[-180px] right-[-80px] w-[650px] h-[650px] rounded-full bg-[#F8F0E3]/35 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#F8F0E3]/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#F8F0E3]/15 blur-[100px] -translate-x-1/2" />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center min-h-screen justify-center py-28 lg:py-0">

          {/* Logo mark */}
          <div className="mb-10">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] ring-1 ring-[#C9A86A]/10">
              <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A86A]/15 bg-white/80">
              <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[#C9A86A]">Premium Skincare</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-[48px] sm:text-[60px] md:text-[76px] lg:text-[92px] xl:text-[104px] leading-[0.93] tracking-[-0.02em] text-[#111111] mb-7">
            Luxury Skincare
            <br />
            <span className="gold-text italic">For Every Body</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-[18px] sm:text-[20px] md:text-[24px] gold-text italic mb-5">
            Reveal Your Natural Glow, Gently.
          </p>

          {/* Gold rule */}
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mb-6" />

          {/* Subtitle */}
          <p className="font-body text-[15px] md:text-[17px] text-[#111111]/38 leading-[1.9] max-w-[440px] mb-12">
            A premium natural scrub powder for face & body — handcrafted for men and women.
          </p>

          {/* Primary CTA — stands alone as focal point */}
          <button
            onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Discover the Scrub <ArrowDown size={13} />
          </button>

          {/* ════════ TRUST BADGES — separate premium strip ════════ */}
          <div className="mt-14 sm:mt-16 md:mt-[72px] w-full max-w-[640px]">

            {/* Badges row */}
            <div className="flex items-center justify-center gap-6 sm:gap-0">

              {/* Badge 1: Natural */}
              <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A86A]/6 flex items-center justify-center mb-3 border border-[#C9A86A]/10">
                  <Leaf size={20} className="text-[#C9A86A]" />
                </div>
                <p className="font-body text-[13px] sm:text-[14px] font-medium text-[#111111]/60 mb-0.5">Natural Formula</p>
                <p className="font-body text-[11px] sm:text-[12px] text-[#111111]/30">Carefully Selected</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#C9A86A]/25 to-transparent flex-shrink-0" />

              {/* Badge 2: Handcrafted */}
              <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A86A]/6 flex items-center justify-center mb-3 border border-[#C9A86A]/10">
                  <Hand size={20} className="text-[#C9A86A]" />
                </div>
                <p className="font-body text-[13px] sm:text-[14px] font-medium text-[#111111]/60 mb-0.5">Handcrafted</p>
                <p className="font-body text-[11px] sm:text-[12px] text-[#111111]/30">Made in India</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#C9A86A]/25 to-transparent flex-shrink-0" />

              {/* Badge 3: Unisex */}
              <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A86A]/6 flex items-center justify-center mb-3 border border-[#C9A86A]/10">
                  <Users size={20} className="text-[#C9A86A]" />
                </div>
                <p className="font-body text-[13px] sm:text-[14px] font-medium text-[#111111]/60 mb-0.5">Unisex</p>
                <p className="font-body text-[11px] sm:text-[12px] text-[#111111]/30">For Face & Body</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/30 to-transparent" />
    </section>
  );
}
