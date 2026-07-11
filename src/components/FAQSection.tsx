"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const } },
});

const faqs = [
  { q: "How often should I use it?", a: "Use 2–3 times per week for best results. For sensitive skin, start with once a week and gradually increase as your skin adjusts." },
  { q: "Who can use this scrub?", a: "The SPCL Tan Care Body Scrub is designed for everyone — men and women of all skin types. It is universally formulated to be gentle yet effective." },
  { q: "How do I use it properly?", a: "Mix 2–3 teaspoons with rose water or plain water to form a smooth paste. Apply on damp skin, massage gently in circular motions for 2–3 minutes, then rinse thoroughly with cool water." },
  { q: "How should I store it?", a: "Store in a cool, dry place away from direct sunlight. Keep the lid tightly closed and always use a dry spoon. Avoid introducing water into the jar to maintain freshness." },
  { q: "How long does one jar last?", a: "With regular use of 2–3 times per week, one 200g jar typically lasts 4–6 weeks depending on the amount used per session." },
  { q: "Is it suitable for sensitive skin?", a: "A patch test is always recommended. Apply a small amount to your inner arm and wait 24 hours before full use. Our natural formula is designed to be gentle on all skin types." },
  { q: "Does it permanently remove tan?", a: "RALORA GLOW makes no claims of permanent tan removal. With consistent use, it helps improve the appearance of tanning and leaves skin looking visibly healthier and more radiant." },
  { q: "How do I place an order?", a: "Simply message us on WhatsApp at +91 7416751547. We will confirm your order, process it swiftly, and dispatch with premium packaging." },
];

export default function FAQSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Questions</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Frequently<br /><span className="gold-text italic">Asked</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block" />
        </div>

        {/* Premium accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} variants={up(i + 2)} initial="hidden" animate={v ? "show" : "hidden"}>
              <div className={`rounded-2xl border overflow-hidden transition-all duration-400 ${
                open === i
                  ? "border-[#C9A86A]/20 bg-white shadow-[0_12px_40px_rgba(201,168,106,0.08)]"
                  : "border-[#111111]/5 bg-white hover:border-[#C9A86A]/12 hover:shadow-[0_4px_20px_rgba(201,168,106,0.04)]"
              }`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-5 min-w-0">
                    <span className={`flex-shrink-0 font-body text-[11px] tracking-[0.2em] mt-0.5 transition-colors duration-300 ${open === i ? "text-[#C9A86A]" : "text-[#111111]/18"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-heading text-[17px] md:text-[18px] transition-colors duration-300 leading-snug ${open === i ? "text-[#111111]" : "text-[#111111]/55"}`}>
                      {f.q}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] text-white shadow-[0_4px_12px_rgba(201,168,106,0.25)]" : "bg-[#F8F5EF] text-[#111111]/25"
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
                      <div className="px-7 pb-7 pl-[68px]">
                        <span className="gold-rule-short mb-4 block" />
                        <p className="font-body text-[13px] text-[#111111]/50 leading-[1.9]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={up(10)} initial="hidden" animate={v ? "show" : "hidden"}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <div className="p-8 md:p-10 bg-white rounded-2xl border border-[#C9A86A]/10 shadow-[0_8px_32px_rgba(201,168,106,0.05)]">
            <p className="font-heading text-[22px] text-[#111111] mb-2">Still have questions?</p>
            <p className="font-body text-[13px] text-[#111111]/40 mb-7">We are here to help. Reach out on WhatsApp for a quick, personal response.</p>
            <button
              onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20have%20a%20question.", "_blank")}
              className="btn-gold"
            >
              <span>💬</span> Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
