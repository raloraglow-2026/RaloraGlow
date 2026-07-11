"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const up = (i:number) => ({
  hidden:{ opacity:0, y:22 },
  show:  { opacity:1, y:0, transition:{ delay:i*0.07, duration:0.55, ease:"easeOut" as const } }
});

const faqs = [
  { q:"How often should I use it?",          a:"Use 2–3 times per week for best results. For sensitive skin, start with once a week and gradually increase." },
  { q:"Who can use this scrub?",             a:"The SPCL Tan Care Body Scrub is designed for everyone — men and women of all skin types." },
  { q:"How do I use it properly?",           a:"Mix 2–3 teaspoons with rose water or plain water to form a paste. Apply on damp skin, massage in circular motions for 2–3 minutes, then rinse thoroughly." },
  { q:"How should I store it?",              a:"Store in a cool, dry place. Keep the lid tightly closed and always use a dry spoon. Avoid introducing water into the jar." },
  { q:"How long does one jar last?",         a:"With regular use 2–3 times per week, one jar typically lasts 4–6 weeks depending on amount used per session." },
  { q:"Is it suitable for sensitive skin?",  a:"A patch test is always recommended. Apply a small amount to your inner arm and wait 24 hours before full use." },
  { q:"Does it permanently remove tan?",     a:"RALORA GLOW makes no claims of permanent tan removal. With consistent use it helps improve the appearance of tanning and leaves skin looking healthier and more radiant." },
  { q:"How do I place an order?",            a:"Message us on WhatsApp at +91 7416751547. We'll confirm your order and dispatch it with premium packaging." },
];

export default function FAQSection() {
  const ref = useRef(null);
  const v   = useInView(ref, { once:true, margin:"-80px" });
  const [open, setOpen] = useState<number|null>(0);

  return (
    <section id="faq" className="sec bg-[#F8F5EF] relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v?"show":"hidden"} className="eyebrow mb-6 inline-flex">Got Questions?</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v?"show":"hidden"} className="h2">
            Frequently Asked<br /><span className="gold-text italic">Questions</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v?"show":"hidden"} className="gold-rule-short mx-auto mt-6 block" />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f,i)=>(
            <motion.div key={i} variants={up(i+2)} initial="hidden" animate={v?"show":"hidden"}>
              <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                open===i
                  ? "border-[#C9A86A]/25 bg-white shadow-[0_8px_32px_rgba(201,168,106,0.08)]"
                  : "border-[#e8e0d8] bg-white hover:border-[#C9A86A]/15"
              }`}>
                <button
                  onClick={()=>setOpen(open===i?null:i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <span className={`flex-shrink-0 font-body text-xs tracking-widest mt-0.5 transition-colors ${open===i?"text-[#C9A86A]":"text-[#111111]/22"}`}>
                      {String(i+1).padStart(2,"0")}
                    </span>
                    <span className={`font-heading text-[16px] md:text-[17px] transition-colors leading-snug ${open===i?"text-[#111111]":"text-[#111111]/60"}`}>
                      {f.q}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    open===i ? "bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] text-white shadow-sm" : "bg-[#F4F4F4] text-[#111111]/30"
                  }`}>
                    {open===i ? <Minus size={13}/> : <Plus size={13}/>}
                  </div>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div
                      initial={{ height:0, opacity:0 }}
                      animate={{ height:"auto", opacity:1 }}
                      exit={{ height:0, opacity:0 }}
                      transition={{ duration:0.35, ease:"easeInOut" as const }}
                    >
                      <div className="px-6 pb-6 pl-[56px]">
                        <span className="gold-rule-short mb-4 block" />
                        <p className="body-sm leading-[1.85]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={up(10)} initial="hidden" animate={v?"show":"hidden"}
          className="mt-12 max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl border border-[#e8e0d8]"
        >
          <p className="font-heading text-xl text-[#111111] mb-2">Still have questions?</p>
          <p className="body-sm mb-6">We're here to help. Message us on WhatsApp for a quick personal response.</p>
          <button
            onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20have%20a%20question.", "_blank")}
            className="btn-gold"
          >
            💬 Chat on WhatsApp
          </button>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
