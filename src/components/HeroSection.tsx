"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-[#0f0f0f]">

      {/* Background — gradient instead of photo, feels like the reference */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510] via-[#0f0f0f] to-[#0a0a0a]" />
        {/* Subtle gold glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #C9A86A 0%, transparent 70%)" }} />
        {/* Bottom left glow */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C9A86A 0%, transparent 70%)" }} />
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize:"200px" }} />
      </div>

      {/* Product jar — floating right */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.6, duration: 1.2, ease: "easeOut" as const }}
        className="absolute right-[4%] md:right-[8%] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
      >
        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" as const }}
          className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-dashed border-[#C9A86A]/12"
        />
        <div className="absolute w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full border border-[#C9A86A]/8" />

        {/* Jar card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
          className="relative w-52 h-64 lg:w-64 lg:h-80"
        >
          <div className="w-full h-full rounded-3xl bg-gradient-to-b from-[#2a2218] to-[#1a1510] border border-[#C9A86A]/15 shadow-[0_40px_120px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-4 p-6">
            {/* Jar */}
            <div className="relative">
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#2e2416] to-[#1e1a12] border border-[#C9A86A]/20 flex items-center justify-center shadow-[inset_0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="text-center px-3">
                  <p className="font-body text-[7px] tracking-[0.45em] text-[#C9A86A] uppercase">RALORA</p>
                  <p className="font-body text-[6px] tracking-[0.35em] text-[#C9A86A] uppercase">GLOW</p>
                  <div className="w-8 h-[0.5px] bg-[#C9A86A]/40 mx-auto my-1.5" />
                  <p className="font-heading text-[9px] tracking-widest text-white/50 uppercase">SPCL</p>
                  <p className="font-heading text-[7px] text-white/35 mt-0.5">Tan Care</p>
                  <p className="font-heading text-[7px] text-white/35">Body Scrub</p>
                </div>
              </div>
              {/* Lid */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 lg:w-36 h-8 rounded-t-full bg-gradient-to-r from-[#a07830] via-[#C9A86A] to-[#D4B97E] shadow-lg" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 lg:w-18 h-2.5 rounded-t-full bg-white/15" />
            </div>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Natural","Luxury","Unisex"].map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full border border-[#C9A86A]/20 font-body text-[8px] tracking-[0.2em] text-[#C9A86A]/80 uppercase bg-[#C9A86A]/5">{t}</span>
              ))}
            </div>
          </div>

          {/* Floating chips */}
          <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ delay:3.6, duration:0.4 }}
            className="absolute -right-6 top-6 bg-[#1a1510] border border-[#C9A86A]/20 rounded-2xl px-3 py-2 shadow-xl">
            <p className="font-body text-[8px] text-[#C9A86A]">★★★★★</p>
            <p className="font-heading text-[11px] text-white/70 mt-0.5">Premium</p>
          </motion.div>
          <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ delay:3.9, duration:0.4 }}
            className="absolute -left-6 bottom-12 bg-[#1a1510] border border-[#C9A86A]/20 rounded-2xl px-3 py-2 shadow-xl">
            <p className="font-body text-[8px] text-white/30 uppercase tracking-wider">Crafted</p>
            <p className="font-heading text-[11px] text-[#C9A86A] mt-0.5">With Care</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content — bottom aligned like reference */}
      <div className="relative z-10 w-full pb-16 md:pb-20 pt-32">
        <div className="wrap">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:2.4, duration:0.6 }}
              className="mb-7"
            >
              <span className="eyebrow-dark">India, Est. 2024</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:2.6, duration:0.9, ease:"easeOut" as const }}
              className="h2-white mb-6"
            >
              Premium Skincare<br />
              For <span className="gold-text-light italic">Every Body</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:2.9, duration:0.7 }}
              className="body-dark-lg max-w-md mb-10"
            >
              Handcrafted with carefully selected natural ingredients for a luxurious self-care experience — for men and women.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:3.2, duration:0.6 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <button
                onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior:"smooth" })}
                className="btn-gold"
              >
                Explore Product <ArrowRight size={13} />
              </button>
              <button onClick={wa} className="btn-white-outline">
                <MessageCircle size={13} /> Order on WhatsApp
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay:3.5, duration:0.7 }}
              className="flex items-center gap-8 flex-wrap border-t border-white/8 pt-8"
            >
              {[
                ["Natural","Ingredients"],
                ["Handcrafted","Formula"],
                ["Unisex","Design"],
              ].map(([n,l], i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <p className="font-heading text-xl text-white/90">{n}</p>
                    <p className="font-body text-[10px] tracking-[0.2em] text-white/28 uppercase mt-0.5">{l}</p>
                  </div>
                  {i < 2 && <div className="w-[1px] h-7 bg-white/10" />}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:4 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y:[0,6,0] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" as const }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A86A]/50 to-transparent"
        />
        <span className="font-body text-[9px] tracking-[0.35em] text-white/20 uppercase rotate-90 origin-center translate-x-3">Scroll</span>
      </motion.div>
    </section>
  );
}
