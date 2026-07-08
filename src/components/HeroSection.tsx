"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 5,
}));

export default function HeroSection() {
  const scrollToProduct = () => {
    document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" });
  };
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Removal%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FCFBF8] to-[#F8F5EF]"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A86A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Floating gold particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, #D4B97E, #C9A86A)`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      ))}

      {/* Soft gold circles - background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#EFE8DD]/50 to-transparent translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#EFE8DD]/40 to-transparent -translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32 lg:py-0">

          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Pre-headline badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 self-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F5EF] border border-[#C9A86A]/30 rounded-full">
                <Sparkles size={12} className="text-[#C9A86A]" />
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A86A]">
                  Premium · Natural · Luxury
                </span>
                <Sparkles size={12} className="text-[#C9A86A]" />
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.9, ease: "easeOut" as const }}
            >
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[#111111]">
                <span className="block">RALORA</span>
                <span className="block gold-gradient-text italic">GLOW</span>
              </h1>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 3.1, duration: 0.6 }}
              className="origin-left my-6 h-[1px] w-24 bg-gradient-to-r from-[#C9A86A] to-transparent"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.7 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl text-[#111111]/60 italic leading-relaxed mb-4"
            >
              Luxury skincare for every body.
            </motion.p>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.7 }}
              className="font-body text-sm md:text-base text-[#111111]/50 leading-relaxed max-w-md mb-10"
            >
              Crafted with thoughtfully selected natural ingredients to create a
              premium self-care experience for men and women.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProduct}
                className="btn-luxury group flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white text-xs tracking-[0.2em] uppercase font-body rounded-full hover:bg-[#222222] hover:shadow-[0_15px_40px_rgba(17,17,17,0.2)] transition-all duration-400"
              >
                Explore Product
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-luxury group flex items-center justify-center gap-3 px-8 py-4 bg-white border border-[#C9A86A] text-[#C9A86A] text-xs tracking-[0.2em] uppercase font-body rounded-full hover:bg-[#C9A86A] hover:text-white hover:shadow-[0_15px_40px_rgba(201,168,106,0.3)] transition-all duration-400"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              {[
                { label: "Natural\nIngredients", icon: "🌿" },
                { label: "Premium\nFormula", icon: "✦" },
                { label: "Unisex\nDesign", icon: "◎" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#C9A86A] text-sm">{item.icon}</span>
                  <span className="font-body text-[10px] tracking-widest text-[#111111]/40 uppercase whitespace-pre-line leading-tight">
                    {item.label}
                  </span>
                  {i < 2 && <div className="w-[1px] h-6 bg-[#C9A86A]/20 ml-4" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 1, ease: "easeOut" as const }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-full border border-[#C9A86A]/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full border border-dashed border-[#C9A86A]/10"
              />
            </div>

            {/* Product image container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative z-10 w-56 h-72 md:w-72 md:h-96 lg:w-80 lg:h-[440px]"
            >
              {/* Product visual */}
              <div className="w-full h-full rounded-3xl overflow-hidden luxury-shadow relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EFE8DD] via-[#F8F5EF] to-[#EFE8DD]" />
                
                {/* Product jar mockup */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Jar body */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#FCFBF8] to-[#EFE8DD] shadow-2xl border border-[#C9A86A]/20 flex items-center justify-center">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white to-[#F8F5EF] shadow-inner flex items-center justify-center">
                        <div className="text-center">
                          <p className="font-heading text-[8px] md:text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase mb-1">SPCL</p>
                          <p className="font-heading text-[6px] md:text-[7px] tracking-wider text-[#111111]/50 uppercase">Tan Removal</p>
                          <p className="font-heading text-[6px] md:text-[7px] tracking-wider text-[#111111]/50 uppercase">Body Scrub</p>
                          <div className="w-8 h-[1px] bg-[#C9A86A]/40 mx-auto my-1" />
                          <p className="font-heading text-[8px] tracking-[0.2em] gold-gradient-text uppercase font-medium">RALORA</p>
                        </div>
                      </div>
                    </div>
                    {/* Lid */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 md:w-36 h-8 rounded-t-full bg-gradient-to-br from-[#D4B97E] to-[#C9A86A] shadow-lg" />
                  </div>

                  {/* Label tags */}
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="px-4 py-1.5 bg-white/80 rounded-full border border-[#C9A86A]/20 backdrop-blur-sm">
                      <p className="font-body text-[9px] tracking-[0.25em] text-[#C9A86A] uppercase">Premium Formula</p>
                    </div>
                    <div className="flex gap-2">
                      {["🌿 Natural", "✨ Luxury", "👤 Unisex"].map((tag, i) => (
                        <div key={i} className="px-2 py-1 bg-[#C9A86A]/10 rounded-full">
                          <p className="font-body text-[7px] text-[#C9A86A] tracking-wide">{tag}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.8, duration: 0.5 }}
                className="absolute -right-4 md:-right-8 top-8 bg-white rounded-2xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#C9A86A]/10"
              >
                <p className="font-body text-[8px] tracking-widest text-[#C9A86A] uppercase">★★★★★</p>
                <p className="font-heading text-xs text-[#111111]/70">Premium</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.1, duration: 0.5 }}
                className="absolute -left-4 md:-left-8 bottom-16 bg-white rounded-2xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#C9A86A]/10"
              >
                <p className="font-body text-[8px] tracking-widest text-[#111111]/40 uppercase">Crafted</p>
                <p className="font-heading text-xs text-[#C9A86A]">With Care</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.3em] text-[#111111]/30 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-[1px] h-10 bg-gradient-to-b from-[#C9A86A]/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
