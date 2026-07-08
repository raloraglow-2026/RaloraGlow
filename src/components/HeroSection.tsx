"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const particles = [
  { id:0, x:10, y:15, s:2.0, d:0.0, dur:6.5 },
  { id:1, x:25, y:70, s:1.4, d:1.2, dur:7.2 },
  { id:2, x:42, y:30, s:2.6, d:0.5, dur:5.8 },
  { id:3, x:60, y:85, s:1.2, d:2.0, dur:8.0 },
  { id:4, x:78, y:18, s:2.2, d:0.3, dur:6.0 },
  { id:5, x:90, y:55, s:1.8, d:1.7, dur:7.5 },
  { id:6, x:5,  y:60, s:1.6, d:2.4, dur:5.5 },
  { id:7, x:55, y:5,  s:1.0, d:0.8, dur:9.0 },
  { id:8, x:93, y:40, s:2.0, d:3.0, dur:6.8 },
  { id:9, x:32, y:92, s:1.4, d:1.4, dur:7.0 },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#FCFBF8] to-[#F8F5EF]">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EFE8DD]/25 translate-x-1/3 -translate-y-1/3 blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EFE8DD]/20 -translate-x-1/3 translate-y-1/3 blur-[100px]" />
      </div>

      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute rounded-full"
          style={{ left:`${p.x}%`, top:`${p.y}%`, width:`${p.s}px`, height:`${p.s}px`, background:"radial-gradient(circle,#D4B97E,#C9A86A)" }}
          animate={{ y:[0,-18,0], opacity:[0.12,0.45,0.12] }}
          transition={{ duration:p.dur, delay:p.d, repeat:Infinity, ease:"easeInOut" as const }}
        />
      ))}

      <div className="container-xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">

          {/* ── LEFT ── */}
          <div className="flex flex-col order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:2.5, duration:0.6 }}
              className="self-start mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-[#C9A86A]/22 backdrop-blur-sm shadow-sm">
                <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A86A]">Premium · Natural · Luxury</span>
                <span className="w-1 h-1 rounded-full bg-[#C9A86A]" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:2.7, duration:0.9, ease:"easeOut" as const }}
              className="font-heading text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] leading-[1.0] tracking-tight text-[#111111]"
            >
              <span className="block">RALORA</span>
              <span className="block gold-text italic">GLOW</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }}
              transition={{ delay:3.0, duration:0.6 }}
              className="origin-left mt-5 mb-4 h-[1px] w-14 bg-gradient-to-r from-[#C9A86A] to-transparent"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:3.1, duration:0.7 }}
              className="font-heading text-lg md:text-xl text-[#111111]/50 italic mb-3"
            >
              Luxury skincare for every body.
            </motion.p>

            {/* Sub */}
            <motion.p
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:3.3, duration:0.7 }}
              className="font-body text-sm md:text-base text-[#111111]/42 leading-[1.85] max-w-sm mb-8"
            >
              Handcrafted with natural ingredients for premium self-care — for men and women.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:3.5, duration:0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior:"smooth" })}
                className="btn-shine inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-[10px] tracking-[0.18em] uppercase font-body hover:bg-[#1c1c1c] hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300"
              >
                Explore Product <ArrowRight size={12} />
              </button>
              <button
                onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
                className="btn-shine inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-full border border-[#C9A86A] text-[#C9A86A] text-[10px] tracking-[0.18em] uppercase font-body hover:bg-[#C9A86A] hover:text-white hover:shadow-[0_10px_28px_rgba(201,168,106,0.28)] transition-all duration-300"
              >
                <MessageCircle size={12} /> WhatsApp Us
              </button>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay:3.9, duration:0.7 }}
              className="mt-8 flex items-center gap-3 flex-wrap"
            >
              {[["🌿","Natural"],["✦","Handcrafted"],["◎","Unisex"]].map(([icon,label],i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-[#C9A86A] text-xs">{icon}</span>
                  <span className="font-body text-[9px] tracking-[0.18em] uppercase text-[#111111]/40">{label}</span>
                  {i<2 && <div className="w-[1px] h-5 bg-[#C9A86A]/15 ml-1.5" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Product visual ── */}
          <motion.div
            initial={{ opacity:0, scale:0.93 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:2.7, duration:1, ease:"easeOut" as const }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Rings */}
            <div className="pointer-events-none absolute flex items-center justify-center inset-0">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-[#C9A86A]/8" />
            </div>
            <div className="pointer-events-none absolute flex items-center justify-center inset-0">
              <motion.div
                animate={{ rotate:360 }} transition={{ duration:32, repeat:Infinity, ease:"linear" as const }}
                className="w-[270px] h-[270px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-[#C9A86A]/8"
              />
            </div>

            {/* Jar card */}
            <motion.div
              animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" as const }}
              className="relative z-10 w-60 h-76 sm:w-68 sm:h-88 md:w-[280px] md:h-[360px]"
            >
              <div className="w-full h-full rounded-3xl bg-gradient-to-b from-[#F8F5EF] via-[#FCFBF8] to-[#EFE8DD] border border-[#C9A86A]/10 card-shadow flex flex-col items-center justify-center gap-5 p-6 overflow-hidden">

                {/* Jar */}
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-[0_16px_50px_rgba(201,168,106,0.16)] border border-[#C9A86A]/12 flex items-center justify-center">
                    <div className="text-center px-3">
                      <p className="font-body text-[7px] tracking-[0.45em] text-[#C9A86A] uppercase">RALORA</p>
                      <p className="font-body text-[6px] tracking-[0.35em] text-[#C9A86A] uppercase">GLOW</p>
                      <div className="w-8 h-[0.5px] bg-[#C9A86A]/35 mx-auto my-1.5" />
                      <p className="font-heading text-[8px] tracking-widest text-[#111111]/48 uppercase">SPCL</p>
                      <p className="font-heading text-[6px] text-[#111111]/35 mt-0.5">Tan Care</p>
                      <p className="font-heading text-[6px] text-[#111111]/35">Body Scrub</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 md:w-40 h-7 rounded-t-full bg-gradient-to-r from-[#E8D5A3] via-[#D4B97E] to-[#C9A86A] shadow" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-2 rounded-t-full bg-white/22" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Natural","Luxury","Unisex"].map(t=>(
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/70 border border-[#C9A86A]/12 font-body text-[8px] tracking-[0.2em] text-[#C9A86A] uppercase">{t}</span>
                  ))}
                </div>
              </div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }}
                transition={{ delay:3.7, duration:0.4 }}
                className="absolute -right-5 md:-right-8 top-8 bg-white rounded-2xl px-3 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.08)] border border-[#C9A86A]/10"
              >
                <p className="font-body text-[8px] text-[#C9A86A]">★★★★★</p>
                <p className="font-heading text-[11px] text-[#111111]/60 mt-0.5">Premium</p>
              </motion.div>
              <motion.div
                initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }}
                transition={{ delay:4.0, duration:0.4 }}
                className="absolute -left-5 md:-left-8 bottom-12 bg-white rounded-2xl px-3 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.08)] border border-[#C9A86A]/10"
              >
                <p className="font-body text-[8px] text-[#111111]/32 uppercase tracking-wider">Made with</p>
                <p className="font-heading text-[11px] text-[#C9A86A] mt-0.5">Natural Care</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:4.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.35em] text-[#111111]/22 uppercase">Scroll</span>
          <motion.div
            animate={{ y:[0,7,0] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" as const }}
            className="w-[1px] h-7 bg-gradient-to-b from-[#C9A86A]/45 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
