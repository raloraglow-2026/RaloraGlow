"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, MapPin, Phone, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#FCFBF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A86A 1px, transparent 0)`,
        backgroundSize: '50px 50px',
      }} />
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#EFE8DD]/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full bg-[#EFE8DD]/20 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            Ready to
            <br />
            <span className="italic gold-gradient-text">Glow?</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-sm md:text-base text-[#111111]/50 max-w-md mx-auto mt-6 leading-relaxed"
          >
            Order your SPCL Tan Removal Body Scrub today. We respond promptly on WhatsApp.
          </motion.p>
        </div>

        {/* Contact layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: CTA card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* WhatsApp primary card */}
            <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-3xl p-8 md:p-10 overflow-hidden relative mb-6">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #C9A86A 1px, transparent 0)`,
                backgroundSize: '25px 25px',
              }} />
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#C9A86A]/5 translate-x-1/3 -translate-y-1/3" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Order via</p>
                    <p className="font-heading text-lg text-white">WhatsApp</p>
                  </div>
                </div>
                
                <p className="font-heading text-2xl md:text-3xl text-white leading-tight mb-2">
                  Start your<br />
                  <span className="italic text-[#D4B97E]">Glow Journey</span>
                </p>
                <p className="font-body text-sm text-white/40 mb-8">
                  Message us on WhatsApp to place your order. We'll confirm and dispatch swiftly.
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <Phone size={14} className="text-[#C9A86A]" />
                  <a
                    href="tel:+917416751547"
                    className="font-heading text-xl text-white hover:text-[#D4B97E] transition-colors"
                  >
                    +91 7416751547
                  </a>
                </div>

                <button
                  onClick={openWhatsApp}
                  className="btn-luxury w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#25D366] to-[#1ebd5b] text-white text-sm tracking-[0.15em] uppercase font-body rounded-2xl hover:shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </button>
                
                <p className="mt-4 text-center font-body text-[9px] tracking-[0.2em] text-white/20 uppercase">
                  Fast response · Premium packaging · Secure delivery
                </p>
              </div>
            </div>

            {/* Contact chips */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com/raloraglow"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_10px_30px_rgba(201,168,106,0.08)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center flex-shrink-0">
                  <Camera size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Follow Us</p>
                  <p className="font-body text-xs text-[#111111]/60">Instagram</p>
                </div>
              </a>
              <a
                href="mailto:hello@raloraglow.com"
                className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#F4F4F4] hover:border-[#C9A86A]/20 hover:shadow-[0_10px_30px_rgba(201,168,106,0.08)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Email Us</p>
                  <p className="font-body text-xs text-[#111111]/60">hello@raloraglow.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Brand statement + info */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#F4F4F4] luxury-shadow mb-6">
              <p className="font-body text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mb-4">The RALORA GLOW Promise</p>
              <h3 className="font-heading text-2xl md:text-3xl text-[#111111] leading-tight mb-6">
                Every order is handled with the same care we put into every formula.
              </h3>
              <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/20 to-transparent mb-8" />
              
              <div className="space-y-5">
                {[
                  { icon: "📦", title: "Premium Packaging", desc: "Your order arrives beautifully packaged, ready to gift or enjoy." },
                  { icon: "⚡", title: "Fast Response", desc: "We respond to WhatsApp messages promptly — usually within minutes." },
                  { icon: "🛡️", title: "Quality Guarantee", desc: "Each product meets our premium quality standards before dispatch." },
                  { icon: "🌿", title: "Natural Formula", desc: "Only thoughtfully selected, skin-friendly ingredients in every jar." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] flex items-center justify-center flex-shrink-0 border border-[#C9A86A]/10">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-heading text-sm text-[#111111] mb-0.5">{item.title}</p>
                      <p className="font-body text-xs text-[#111111]/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="p-5 bg-gradient-to-r from-[#F8F5EF] to-[#EFE8DD] rounded-2xl border border-[#C9A86A]/15 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["PS", "AM", "KR"].map((init, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] border-2 border-white flex items-center justify-center">
                    <span className="font-body text-[7px] text-white">{init}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-[#C9A86A] text-xs">★</span>)}
                </div>
                <p className="font-body text-xs text-[#111111]/60">Loved by customers across India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
