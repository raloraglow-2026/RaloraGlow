"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const reviews = [
  { name: "Lakshmi V.", loc: "Visakhapatnam", review: "Nothing felt this luxurious before. After two weeks, my tan lightened noticeably. Skin feels like silk." },
  { name: "Ravi K.", loc: "Visakhapatnam", review: "So gentle yet effective — my tan has visibly reduced. The packaging is premium and it smells earthy and natural." },
  { name: "Divya P.", loc: "Vijayawada", review: "My elbows and knees look so much more even-toned now. Love the natural formulation." },
  { name: "Suresh M.", loc: "Visakhapatnam", review: "After a month of regular use, even my colleagues noticed the difference. Skin feels cleaner and brighter." },
  { name: "Anjali R.", loc: "Rajahmundry", review: "Doesn't irritate my sensitive skin at all. The results are gradual but genuinely real. Premium quality." },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);

  const prev = () => { setDir(-1); setCur(c => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setDir(1); setCur(c => (c + 1) % reviews.length); };

  const slide = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
    exit: (d: number) => ({ opacity: 0, x: -d * 40, transition: { duration: 0.2 } }),
  };

  return (
    <section id="testimonials" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Real Stories</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            Loved Across<br /><span className="gold-text italic">Andhra Pradesh</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-6" />
          <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="flex items-center justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A] text-lg">★</span>)}
            <span className="font-body text-[11px] text-[#111111]/30 ml-2.5 tracking-wider">5.0 from verified customers</span>
          </motion.div>
        </div>

        {/* Review card */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-[#FDFBF7] to-white rounded-[2rem] p-9 md:p-14 border border-[#C9A86A]/8 shadow-[0_16px_60px_rgba(201,168,106,0.06)] relative overflow-hidden">
            {/* Decorative quote mark */}
            <span className="absolute top-8 left-9 md:left-14 font-heading text-[100px] text-[#C9A86A]/6 leading-none select-none">&ldquo;</span>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A] text-[15px]">★</span>)}
              </div>

              {/* Review text */}
              <div className="min-h-[100px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.p
                    key={cur}
                    custom={dir}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="font-heading text-[19px] md:text-[23px] text-[#111111]/60 italic leading-[1.6]"
                  >
                    &ldquo;{reviews[cur].review}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A86A] to-transparent my-8" />

              {/* Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`a-${cur}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-sm">
                      <span className="font-body text-[11px] text-white font-medium">{reviews[cur].name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-heading text-[17px] text-[#111111]">{reviews[cur].name}</p>
                      <p className="font-body text-[11px] text-[#111111]/35 tracking-wider">{reviews[cur].loc}, Andhra Pradesh</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full border border-[#C9A86A]/20 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase bg-[#C9A86A]/4">Verified</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] hover:shadow-[0_4px_16px_rgba(201,168,106,0.25)] transition-all duration-300">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                  className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E]" : "w-2 h-2 bg-[#111111]/10 hover:bg-[#C9A86A]/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] hover:shadow-[0_4px_16px_rgba(201,168,106,0.25)] transition-all duration-300">
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
