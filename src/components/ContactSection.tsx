"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Camera, Mail, Phone } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

export default function ContactSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank");

  return (
    <section id="contact" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Get In Touch</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Ready To<br /><span className="gold-text italic">Glow?</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block" />
        </div>

        {/* Minimal CTA card */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-lg mx-auto">
          <div className="bg-[#0f0f0f] rounded-[2rem] p-9 md:p-12 overflow-hidden relative text-center">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 opacity-[0.06]"
              style={{ background: "radial-gradient(circle, #C9A86A, transparent)" }} />

            <div className="relative z-10">
              {/* WhatsApp icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.25)] mx-auto mb-8">
                <MessageCircle size={24} className="text-white" />
              </div>

              <h3 className="font-heading text-[28px] md:text-[34px] text-white leading-[1.15] mb-3">
                Begin Your<br /><span className="gold-text-light italic">Glow Journey</span>
              </h3>
              <p className="font-body text-[13px] text-white/40 mb-8">
                One message away from radiant skin.
              </p>

              {/* Phone number */}
              <a href="tel:+917416751547" className="flex items-center justify-center gap-3 mb-8 group">
                <Phone size={15} className="text-[#C9A86A]" />
                <span className="font-heading text-[22px] text-white group-hover:text-[#D4B97E] transition-colors">+91 7416 751 547</span>
              </a>

              {/* Big CTA button */}
              <button onClick={wa}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#25D366] text-white font-body text-[12px] tracking-[0.18em] uppercase font-medium hover:shadow-[0_12px_36px_rgba(37,211,102,0.30)] transition-all duration-300"
              >
                <MessageCircle size={18} /> Order on WhatsApp
              </button>
            </div>
          </div>

          {/* Social row */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer"
              className="card-white p-5 flex items-center gap-3.5 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_28px_rgba(201,168,106,0.08)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] to-[#dc2743] flex items-center justify-center flex-shrink-0">
                <Camera size={15} className="text-white" />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] text-[#C9A86A] uppercase">Follow us</p>
                <p className="font-body text-[13px] text-[#111111]/55 mt-0.5">Instagram</p>
              </div>
            </a>
            <a href="mailto:hello@raloraglow.com"
              className="card-white p-5 flex items-center gap-3.5 hover:border-[#C9A86A]/20 hover:shadow-[0_8px_28px_rgba(201,168,106,0.08)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center flex-shrink-0">
                <Mail size={15} className="text-white" />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] text-[#C9A86A] uppercase">Write to us</p>
                <p className="font-body text-[13px] text-[#111111]/55 mt-0.5">Email</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
