"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How often should I use the SPCL Tan Removal Body Scrub?",
    a: "We recommend using the scrub 2–3 times per week for optimal results. Consistent use helps reveal smoother, more radiant skin. For sensitive skin, start with once a week and gradually increase as your skin adjusts.",
  },
  {
    q: "Who can use RALORA GLOW's body scrub?",
    a: "The SPCL Tan Removal Body Scrub is designed for everyone — men and women of all ages and skin types. The formula is gentle enough for most users while being effective for the entire body.",
  },
  {
    q: "How should I store the product?",
    a: "Store the scrub in a cool, dry place away from direct sunlight and excessive heat. Ensure the lid is firmly closed after each use to maintain freshness. Avoid contact with water inside the jar.",
  },
  {
    q: "How long does one jar last?",
    a: "With regular use of 2–3 times per week, one 200g jar typically lasts approximately 4–6 weeks. This may vary depending on the amount applied per use.",
  },
  {
    q: "Is it suitable for sensitive skin?",
    a: "We always recommend performing a patch test before first use, especially for sensitive skin. Apply a small amount to your inner arm and wait 24 hours. If no reaction occurs, the product should be safe for your use. Discontinue immediately if irritation develops.",
  },
  {
    q: "How do I order RALORA GLOW products?",
    a: "You can order directly through WhatsApp by messaging us at +91 7416751547. Our team will guide you through the ordering process, answer any questions, and ensure your order is handled with care.",
  },
  {
    q: "What makes RALORA GLOW different from other scrubs?",
    a: "RALORA GLOW combines premium natural ingredients with a luxury formula crafted for both men and women. We focus on the complete self-care experience — from the quality of the formula to the premium packaging and attentive customer service.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#EFE8DD]/15 blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            Frequently Asked
            <br />
            <span className="italic gold-gradient-text">Questions</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <div
                className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                  openIndex === i
                    ? "border-[#C9A86A]/25 bg-[#FCFBF8] shadow-[0_10px_40px_rgba(201,168,106,0.08)]"
                    : "border-[#F4F4F4] bg-white hover:border-[#C9A86A]/15"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 mt-0.5 font-body text-xs tracking-widest transition-colors duration-300 ${
                        openIndex === i ? "text-[#C9A86A]" : "text-[#111111]/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-base md:text-lg transition-colors duration-300 ${
                        openIndex === i ? "text-[#111111]" : "text-[#111111]/70"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] text-white shadow-md shadow-[#C9A86A]/20"
                        : "bg-[#F4F4F4] text-[#111111]/40"
                    }`}
                  >
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                    >
                      <div className="px-6 pb-6 pl-14">
                        <div className="h-[1px] bg-gradient-to-r from-[#C9A86A]/20 to-transparent mb-4" />
                        <p className="font-body text-sm text-[#111111]/55 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center p-8 bg-[#F8F5EF] rounded-2xl border border-[#C9A86A]/15"
        >
          <p className="font-heading text-xl text-[#111111] mb-2">Still have questions?</p>
          <p className="font-body text-sm text-[#111111]/50 mb-6">We're here to help. Reach out to us on WhatsApp for a personal response.</p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I%20have%20a%20question.",
                "_blank"
              )
            }
            className="btn-luxury inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E] text-white text-xs tracking-[0.2em] uppercase font-body rounded-full hover:shadow-[0_10px_30px_rgba(201,168,106,0.35)] transition-all duration-300"
          >
            💬 Chat on WhatsApp
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
