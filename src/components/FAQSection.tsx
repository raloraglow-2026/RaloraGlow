"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow mb-8 inline-flex">Questions</span>
          <h2 className="h2 mb-5">
            Frequently<br /><span className="gold-text italic">Asked</span>
          </h2>
          <span className="gold-rule-short mx-auto block" />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-400 ${
                open === i
                  ? "border-[#C9A86A]/20 bg-white shadow-[0_8px_32px_rgba(201,168,106,0.06)]"
                  : "border-[#111111]/5 bg-white hover:border-[#C9A86A]/10"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-8 py-8 text-left focus:outline-none"
              >
                <span className={`font-heading text-[18px] md:text-[20px] transition-colors duration-300 leading-snug ${open === i ? "text-[#111111]" : "text-[#111111]/50"}`}>
                  {f.q}
                </span>
                <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
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
                    <div className="px-8 pb-8">
                      <span className="gold-rule-short mb-4 block" />
                      <p className="font-body text-[14px] text-[#111111]/45 leading-[2.0]">{f.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Small WhatsApp CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank")}
            className="btn-outline-gold"
          >
            <MessageCircle size={14} /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
