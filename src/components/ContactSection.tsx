"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Camera, Mail, Phone } from "lucide-react";

const up = {
  hidden: { opacity:0, y:24 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.11, duration:0.65, ease:"easeOut" as const } }),
};

export default function ContactSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="contact" className="relative section bg-[#FCFBF8] overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#EFE8DD]/25 translate-x-1/2 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Get In Touch</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">Ready To<br /><span className="gold-text italic">Glow?</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.p   custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-sub text-center mx-auto">
            Order your SPCL Tan Care Body Scrub today. We respond quickly on WhatsApp.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT — WhatsApp CTA */}
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="space-y-4">

            {/* Main dark card */}
            <div className="bg-[#111111] rounded-2xl p-8 overflow-hidden relative">
              <div className="pointer-events-none absolute right-0 top-0 w-44 h-44 rounded-full bg-[#C9A86A]/5 translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md shadow-[#25D366]/25 flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Order via</p>
                    <p className="font-heading text-lg text-white">WhatsApp</p>
                  </div>
                </div>
                <p className="font-heading text-2xl text-white leading-[1.3] mb-2">
                  Start your<br /><span className="italic text-[#D4B97E]">Glow Journey</span>
                </p>
                <p className="font-body text-sm text-white/38 mb-6">Message us to place your order. We respond quickly and pack with care.</p>
                <a href="tel:+917416751547" className="flex items-center gap-2 mb-6">
                  <Phone size={14} className="text-[#C9A86A]" />
                  <span className="font-heading text-xl text-white hover:text-[#D4B97E] transition-colors">+91 7416751547</span>
                </a>
                <button
                  onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
                  className="btn-shine w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#25D366] text-white text-sm tracking-[0.14em] uppercase font-body hover:shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-all duration-300"
                >
                  <MessageCircle size={17}/> Order on WhatsApp
                </button>
              </div>
            </div>

            {/* Social chips */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_8px_24px_rgba(201,168,106,0.07)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f09433] to-[#dc2743] flex items-center justify-center flex-shrink-0">
                  <Camera size={15} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Follow</p>
                  <p className="font-body text-xs text-[#111111]/55">Instagram</p>
                </div>
              </a>
              <a href="mailto:hello@raloraglow.com"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#F0EDE8] hover:border-[#C9A86A]/18 hover:shadow-[0_8px_24px_rgba(201,168,106,0.07)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Email</p>
                  <p className="font-body text-xs text-[#111111]/55">Write to us</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Brand promise */}
          <motion.div custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="space-y-4">
            <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8] card-shadow">
              <p className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-4">The RALORA GLOW Promise</p>
              <h3 className="font-heading text-2xl text-[#111111] leading-[1.3] mb-5">
                Every order handled with the same care we put into every formula.
              </h3>
              <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/18 to-transparent mb-7" />
              <div className="space-y-5">
                {[
                  ["📦","Premium Packaging",  "Your order arrives beautifully packaged."],
                  ["⚡","Fast Response",       "We reply on WhatsApp usually within minutes."],
                  ["🛡️","Quality Guaranteed", "Every product meets our quality standard before dispatch."],
                  ["🌿","Natural Formula",     "Only carefully selected, skin-friendly natural ingredients."],
                ].map(([ic,ti,de])=>(
                  <div key={ti} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#F8F5EF] flex items-center justify-center flex-shrink-0 border border-[#C9A86A]/10 text-base">{ic}</div>
                    <div>
                      <p className="font-heading text-[14px] text-[#111111] mb-0.5">{ti}</p>
                      <p className="font-body text-xs text-[#111111]/45 leading-relaxed">{de}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F8F5EF] to-[#EFE8DD] rounded-2xl border border-[#C9A86A]/12">
              <div className="flex -space-x-2">
                {["PS","AM","KR"].map((init,i)=>(
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] border-2 border-white flex items-center justify-center">
                    <span className="font-body text-[7px] text-white">{init}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="text-[#C9A86A] text-xs">★</span>)}</div>
                <p className="font-body text-xs text-[#111111]/48 mt-0.5">Loved by customers across India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
