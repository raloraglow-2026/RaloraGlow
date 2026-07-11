"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Camera, Mail, Phone } from "lucide-react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:24 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.11, duration:0.65, ease:"easeOut" as const } }
});

export default function ContactSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });
  const wa  = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="contact" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">Get In Touch</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            Ready To<br /><span className="gold-text italic">Glow?</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
          <motion.p variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="body-lg mt-5 max-w-md mx-auto text-center">
            Order your SPCL Tan Care Body Scrub today. We respond quickly on WhatsApp.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT — WhatsApp CTA */}
          <motion.div variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="space-y-5">
            {/* Dark card */}
            <div className="bg-[#0f0f0f] rounded-2xl p-8 md:p-10 overflow-hidden relative">
              <div className="pointer-events-none absolute right-0 top-0 w-48 h-48 rounded-full opacity-8"
                style={{ background:"radial-gradient(circle,#C9A86A,transparent)" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20 flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase">Order via</p>
                    <p className="font-heading text-xl text-white">WhatsApp</p>
                  </div>
                </div>
                <h3 className="font-heading text-3xl text-white leading-[1.2] mb-2">
                  Start your<br /><span className="gold-text-light italic">Glow Journey</span>
                </h3>
                <p className="body-dark-lg max-w-sm mb-7">Message us to place your order. We respond quickly and pack with care.</p>
                <a href="tel:+917416751547" className="flex items-center gap-3 mb-7 group">
                  <Phone size={14} className="text-[#C9A86A]" />
                  <span className="font-heading text-xl text-white group-hover:text-[#D4B97E] transition-colors">+91 7416751547</span>
                </a>
                <button onClick={wa}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#25D366] text-white font-body text-sm tracking-[0.14em] uppercase hover:shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-all duration-300"
                >
                  <MessageCircle size={17}/> Order on WhatsApp
                </button>
              </div>
            </div>

            {/* Social row */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer"
                className="card-white p-4 flex items-center gap-3 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_24px_rgba(201,168,106,0.08)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f09433] to-[#dc2743] flex items-center justify-center flex-shrink-0">
                  <Camera size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Follow</p>
                  <p className="font-body text-xs text-[#111111]/55">Instagram</p>
                </div>
              </a>
              <a href="mailto:hello@raloraglow.com"
                className="card-white p-4 flex items-center gap-3 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_24px_rgba(201,168,106,0.08)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-widest text-[#C9A86A] uppercase">Email</p>
                  <p className="font-body text-xs text-[#111111]/55">Write to us</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Brand promise */}
          <motion.div variants={up(3)} initial="hidden" animate={v?"show":"hidden"} className="space-y-5">
            <div className="card-white p-8 md:p-10">
              <span className="eyebrow mb-5 inline-flex">The RALORA GLOW Promise</span>
              <h3 className="h3 mb-5">Every order handled with the same care we put into every formula.</h3>
              <span className="gold-rule-short mb-8 block" />
              <div className="space-y-6">
                {[
                  ["📦","Premium Packaging",  "Your order arrives beautifully packaged, ready to gift or enjoy."],
                  ["⚡","Fast Response",       "We reply on WhatsApp usually within minutes."],
                  ["🛡️","Quality Guaranteed", "Every product meets our quality standard before dispatch."],
                  ["🌿","Natural Formula",     "Only carefully selected, skin-friendly natural ingredients."],
                ].map(([ic,ti,de])=>(
                  <div key={ti as string} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] border border-[#C9A86A]/10 flex items-center justify-center flex-shrink-0 text-lg">{ic}</div>
                    <div>
                      <p className="font-heading text-[15px] text-[#111111] mb-1">{ti}</p>
                      <p className="body-sm">{de}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="card-ivory p-5 flex items-center gap-4">
              <div className="flex -space-x-2 flex-shrink-0">
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

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
