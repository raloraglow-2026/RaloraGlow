"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const up = {
  hidden: { opacity:0, y:22 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.07, duration:0.55, ease:"easeOut" as const } }),
};

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
  const ref  = useRef(null);
  const v    = useInView(ref, { once:true, margin:"-80px" });
  const [open, setOpen] = useState<number|null>(0);

  return (
    <section id="faq" className="relative section bg-white overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#EFE8DD]/12 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Got Questions?</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">Frequently Asked<br /><span className="gold-text italic">Questions</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-2.5">
          {faqs.map((f,i)=>(
            <motion.div key={i} custom={i+2} variants={up} initial="hidden" animate={v?"show":"hidden"}>
              <div className={`rounded-xl border overflow-hidden transition-all duration-300 ${open===i?"border-[#C9A86A]/22 bg-[#FCFBF8] shadow-[0_6px_24px_rgba(201,168,106,0.06)]":"border-[#F0EDE8] bg-white hover:border-[#C9A86A]/14"}`}>
                <button
                  onClick={()=>setOpen(open===i?null:i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-body text-xs tracking-widest transition-colors duration-250 ${open===i?"text-[#C9A86A]":"text-[#111111]/25"}`}>{String(i+1).padStart(2,"0")}</span>
                    <span className={`font-heading text-sm md:text-base transition-colors duration-250 ${open===i?"text-[#111111]":"text-[#111111]/60"}`}>{f.q}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-250 ${open===i?"bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] text-white shadow-sm":"bg-[#F4F4F4] text-[#111111]/35"}`}>
                    {open===i ? <Minus size={12}/> : <Plus size={12}/>}
                  </div>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div
                      initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }}
                      transition={{ duration:0.3, ease:"easeInOut" as const }}
                    >
                      <div className="px-5 pb-4 pl-12 md:pl-[52px]">
                        <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/18 to-transparent mb-3" />
                        <p className="font-body text-xs md:text-sm text-[#111111]/50 leading-[1.7]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div custom={11} variants={up} initial="hidden" animate={v?"show":"hidden"} className="mt-8 max-w-2xl mx-auto text-center p-6 bg-[#F8F5EF] rounded-xl border border-[#C9A86A]/12">
          <p className="font-heading text-base md:text-lg text-[#111111] mb-1">Still have questions?</p>
          <p className="font-body text-xs md:text-sm text-[#111111]/45 mb-4">We're here to help. Message us on WhatsApp.</p>
          <button
            onClick={()=>window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20have%20a%20question.", "_blank")}
            className="btn-shine inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-[9px] tracking-[0.2em] uppercase font-body hover:shadow-[0_6px_20px_rgba(201,168,106,0.3)] transition-all duration-300"
          >
            💬 Chat Now
          </button>
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
