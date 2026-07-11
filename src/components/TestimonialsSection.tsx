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
  { name: "Lakshmi V.", loc: "Visakhapatnam", review: "This powder scrub is amazing! My skin feels so smooth after just one use on face and body." },
  { name: "Ravi K.", loc: "Visakhapatnam", review: "Love mixing it with curd — the paste is gentle and my skin looks brighter every week." },
  { name: "Divya P.", loc: "Vijayawada", review: "Finally a scrub I can use on both face and body. The powder format stays fresh longer too." },
  { name: "Suresh M.", loc: "Visakhapatnam", review: "Great natural powder scrub. I mix with body wash and it works perfectly for my skin." },
  { name: "Anjali R.", loc: "Rajahmundry", review: "So gentle on my sensitive skin. I use it once a week and the results are visible." },
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

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-8 inline-flex">Real Stories</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            What Customers<br /><span className="gold-text italic">Are Saying</span>
          </motion.h2>
          <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="flex items-center justify-center gap-1.5 mt-4">
            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A] text-lg">★</span>)}
          </motion.div>
        </div>

        {/* Single large review card */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto">
          <div className="bg-[#FDFBF7] rounded-3xl p-12 md:p-16 border border-[#C9A86A]/6 relative overflow-hidden">

            {/* Review text */}
            <div className="min-h-[80px] mb-8">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.p
                  key={cur}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="font-heading text-[22px] md:text-[24px] text-[#111111]/55 italic leading-[1.6]"
                >
                  &ldquo;{reviews[cur].review}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Gold rule */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A86A] to-transparent mb-7" />

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`a-${cur}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-heading text-[18px] text-[#111111] mb-1">{reviews[cur].name}</p>
                <p className="font-body text-[12px] text-[#111111]/35 tracking-wider">{reviews[cur].loc}, Andhra Pradesh</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots + arrows */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300">
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
            <button onClick={next} className="w-10 h-10 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300">
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
