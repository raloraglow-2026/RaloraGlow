"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const up = (i: number) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } },
});

const reviews = [
  { name: "Priya S.", loc: "Mumbai", review: "After two weeks, my skin feels incredibly soft. The packaging is beautiful and it genuinely feels luxurious. Absolutely love this product." },
  { name: "Arjun M.", loc: "Bangalore", review: "I was skeptical at first but this scrub is fantastic — gentle, effective, and the fragrance is subtle. My skin looks visibly healthier." },
  { name: "Kavya R.", loc: "Hyderabad", review: "This has become my Sunday ritual. Leaves my skin feeling like I stepped out of a spa. Love that it's for everyone." },
  { name: "Rohan K.", loc: "Delhi", review: "Beautifully packaged and premium quality. My tan from a beach trip has visibly improved. Already ordered again." },
  { name: "Nisha P.", loc: "Chennai", review: "RALORA GLOW is everything a luxury skincare brand should be. Works beautifully. My skin feels soft for days." },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);

  const prev = () => { setDir(-1); setCur(c => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setDir(1); setCur(c => (c + 1) % reviews.length); };

  const slide = {
    enter: (d: number) => ({ opacity: 0, x: d * 30 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: (d: number) => ({ opacity: 0, x: -d * 30, transition: { duration: 0.2 } }),
  };

  return (
    <section id="testimonials" className="sec bg-white relative overflow-hidden">
      <div className="gold-rule absolute top-0 inset-x-0" />

      <div ref={ref} className="wrap">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={up(0)} initial="hidden" animate={v ? "show" : "hidden"} className="eyebrow mb-7 inline-flex">Testimonials</motion.span>
          <motion.h2 variants={up(1)} initial="hidden" animate={v ? "show" : "hidden"} className="h2 mb-5">
            What Customers<br /><span className="gold-text italic">Are Saying</span>
          </motion.h2>
          <motion.span variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="gold-rule-short mx-auto block mb-6" />
          <motion.div variants={up(3)} initial="hidden" animate={v ? "show" : "hidden"} className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A] text-lg">★</span>)}
            <span className="font-body text-xs text-[#111111]/30 ml-2 tracking-wider">5.0 Rated</span>
          </motion.div>
        </div>

        {/* Review card */}
        <motion.div variants={up(2)} initial="hidden" animate={v ? "show" : "hidden"} className="max-w-2xl mx-auto">
          <div className="bg-[#FDFBF7] rounded-3xl p-8 md:p-12 border border-[#111111]/5 relative">
            {/* Decorative quote */}
            <span className="absolute top-6 left-8 font-heading text-[80px] text-[#C9A86A]/8 leading-none select-none">"</span>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#C9A86A]">★</span>)}
              </div>

              {/* Review text */}
              <div className="min-h-[80px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.p
                    key={cur}
                    custom={dir}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="font-heading text-[20px] md:text-[24px] text-[#111111]/65 italic leading-[1.55]"
                  >
                    "{reviews[cur].review}"
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="gold-rule my-8" />

              {/* Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`a-${cur}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-heading text-[16px] text-[#111111]">{reviews[cur].name}</p>
                    <p className="font-body text-xs text-[#111111]/35 tracking-wider">{reviews[cur].loc}, India</p>
                  </div>
                  <span className="px-3 py-1 rounded-full border border-[#C9A86A]/20 font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">Verified</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-250">
              <ChevronLeft size={15} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                  className={`rounded-full transition-all duration-250 ${i === cur ? "w-5 h-2 bg-[#C9A86A]" : "w-2 h-2 bg-[#111111]/10"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-250">
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="gold-rule absolute bottom-0 inset-x-0" />
    </section>
  );
}
