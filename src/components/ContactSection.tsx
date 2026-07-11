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

      <div ref={ref} className="wrap">

        {/* Centered layout */}
        <div className="max-w-lg mx-auto text-center">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Get In Touch</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Ready To <span className="gold-text italic">Glow?</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-7" />
          <motion.p variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="body-lg mb-10">
            One message away from radiant skin.
          </motion.p>

          {/* Big WhatsApp button */}
          <motion.div variants={up(4)} initial="hidden" animate={v ? "show" : "hidden"}>
            <button onClick={wa} className="btn-gold w-full sm:w-auto justify-center !py-5 !px-12 !text-[11px]">
              <MessageCircle size={16} /> Order on WhatsApp
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div variants={up(5)} initial="hidden" animate={v ? "show" : "hidden"} className="mt-7">
            <a href="tel:+917416751547" className="inline-flex items-center gap-2 group">
              <Phone size={14} className="text-[#C9A86A]" />
              <span className="font-heading text-[20px] text-[#111111]/60 group-hover:text-[#C9A86A] transition-colors">+91 7416 751 547</span>
            </a>
          </motion.div>

          {/* Social icons row */}
          <motion.div variants={up(6)} initial="hidden" animate={v ? "show" : "hidden"} className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub."
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://instagram.com/raloraglow"
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300"
            >
              <Camera size={16} />
            </a>
            <a
              href="mailto:hello@raloraglow.com"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
