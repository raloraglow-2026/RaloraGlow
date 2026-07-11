"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const } },
});

const faqs = [
  { q: "How do I use this scrub?", a: "Mix the powder with curd/milk or body wash + water to form a paste, then apply and massage gently." },
  { q: "How often should I use it?", a: "2–3 times per week. Sensitive skin — once a week." },
  { q: "Is it for face or body?", a: "Both! It's suitable for face and body use." },
  { q: "How should I store it?", a: "Keep in a cool, dry place. Always use a dry spoon." },
  { q: "Should I do a patch test?", a: "Yes — apply on a small area and wait 24 hours before first full use." },
  { q: "When should I avoid using it?", a: "Avoid on active pimples, cuts, sunburned skin, or right after waxing." },
  { q: "Who can use this scrub?", a: "Everyone — men and women, all skin types." },
  { q: "How do I place an order?", a: "Message us on WhatsApp — we respond within minutes." },
];

export default function FAQSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sec bg-[#FDFBF7] relative overflow-hidden">

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Questions</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Frequently<br /><span className="gold-text italic">Asked</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block" />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} variants={up(i + 2)} initial="hidden" animate={v ? "show" : "hidden"}>
              <div className={`rounded-2xl border overflow-hidden transition-all duration-400 ${
                open === i
                  ? "border-[#C9A86A]/20 bg-white shadow-[0_8px_32px_rgba(201,168,106,0.06)]"
                  : "border-[#111111]/5 bg-white hover:border-[#C9A86A]/10"
              }`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-7 text-left focus:outline-none"
                >
                  <span className={`font-heading text-[17px] md:text-[18px] transition-colors duration-300 leading-snug ${open === i ? "text-[#111111]" : "text-[#111111]/50"}`}>
                    {f.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] text-white" : "bg-[#F8F5EF] text-[#111111]/25"
                  }`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" as const }}
                    >
                      <div className="px-7 pb-7">
                        <span className="gold-rule-short mb-4 block" />
                        <p className="font-body text-[13px] text-[#111111]/45 leading-[1.9]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small WhatsApp CTA */}
        <motion.div variants={up(10)} initial="hidden" animate={v ? "show" : "hidden"} className="mt-14 text-center">
          <button
            onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank")}
            className="btn-outline-gold"
          >
            <MessageCircle size={14} /> Chat on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
