"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Lakshmi V.", loc: "Visakhapatnam", review: "This powder scrub is amazing! My skin feels so smooth after just one use on face and body." },
  { name: "Ravi K.", loc: "Visakhapatnam", review: "Love mixing it with curd — the paste is gentle and my skin looks brighter every week." },
  { name: "Divya P.", loc: "Vijayawada", review: "Finally a scrub I can use on both face and body. The powder format stays fresh longer too." },
  { name: "Suresh M.", loc: "Visakhapatnam", review: "Great natural powder scrub. I mix with body wash and it works perfectly for my skin." },
  { name: "Anjali R.", loc: "Rajahmundry", review: "So gentle on my sensitive skin. I use it once a week and the results are visible." },
];

export default function TestimonialsSection() {
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
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="eyebrow mb-8 inline-flex">Real Stories</span>
          <h2 className="h2 mb-5">
            What Customers<br /><span className="gold-text italic">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A] text-lg">★</span>)}
          </div>
        </div>

        {/* Single large review card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#FDFBF7] rounded-3xl p-14 md:p-14 border border-[#C9A86A]/6 relative overflow-hidden">

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
                  className="font-heading text-[24px] md:text-[28px] text-[#111111]/55 italic leading-[1.6]"
                >
                  &ldquo;{reviews[cur].review}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Gold rule */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A86A] to-transparent mb-9" />

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`a-${cur}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-heading text-[20px] text-[#111111] mb-1">{reviews[cur].name}</p>
                <p className="font-body text-[13px] text-[#111111]/35 tracking-wider">{reviews[cur].loc}, Andhra Pradesh</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots + arrows */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button onClick={prev} className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                  className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2 bg-gradient-to-r from-[#C9A86A] to-[#D4B97E]" : "w-2 h-2 bg-[#111111]/10 hover:bg-[#C9A86A]/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300">
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="font-body text-[11px] text-[#111111]/25 text-center mt-6">Verified customers from Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}
