"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    initials: "PS",
    rating: 5,
    review:
      "I've tried many body scrubs but RALORA GLOW's SPCL Tan Removal Scrub is genuinely special. After just two weeks, my skin feels incredibly soft and I can already see an improvement in my tan lines. The packaging is beautiful and it feels so luxurious!",
    tag: "Verified Customer",
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore, India",
    initials: "AM",
    rating: 5,
    review:
      "As a man who spends a lot of time outdoors, I was skeptical about using a body scrub. But this one is fantastic — gentle, effective, and the fragrance is subtle and sophisticated. My skin looks noticeably healthier after using it regularly.",
    tag: "Verified Customer",
  },
  {
    name: "Kavya Reddy",
    location: "Hyderabad, India",
    initials: "KR",
    rating: 5,
    review:
      "The SPCL scrub has become my Sunday ritual. It leaves my skin feeling like I just stepped out of a spa. The exfoliation is thorough but gentle enough for regular use. I love that it's designed for everyone — finally a unisex luxury product!",
    tag: "Verified Customer",
  },
  {
    name: "Rohan Kapoor",
    location: "Delhi, India",
    initials: "RK",
    rating: 5,
    review:
      "I ordered through WhatsApp and received it beautifully packaged. The scrub itself is premium quality — you can tell a lot of thought went into the formula. My tan from the beach holiday has visibly improved. Highly recommended!",
    tag: "Verified Customer",
  },
  {
    name: "Nisha Patel",
    location: "Chennai, India",
    initials: "NP",
    rating: 5,
    review:
      "RALORA GLOW is everything a luxury skincare brand should be. The scrub smells divine, works beautifully, and makes my skin feel soft for days. The ordering process through WhatsApp was quick and the service was impeccable.",
    tag: "Verified Customer",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 50 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 50, transition: { duration: 0.3 } }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-[#FCFBF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#EFE8DD]/30 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 rounded-full bg-[#EFE8DD]/20 -translate-x-1/2 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-[10px] tracking-[0.45em] text-[#C9A86A] uppercase mb-4"
          >
            Real Stories
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight"
          >
            What Our
            <br />
            <span className="italic gold-gradient-text">Customers Say</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
          />
          {/* Stars */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-1 mt-6"
          >
            {[1,2,3,4,5].map((s) => (
              <span key={s} className="text-[#C9A86A] text-lg">★</span>
            ))}
            <span className="font-body text-xs text-[#111111]/40 ml-2 tracking-wider">5.0 / 5.0</span>
          </motion.div>
        </div>

        {/* Main featured testimonial */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="glass-card rounded-3xl p-10 md:p-14 shadow-[0_30px_80px_rgba(201,168,106,0.1)] relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-8 left-8 font-heading text-8xl text-[#C9A86A]/10 leading-none select-none">"</div>
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-8">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-[#C9A86A]">★</span>
                ))}
              </div>

              {/* Review text with animation */}
              <div className="min-h-[100px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="font-heading text-lg md:text-xl text-[#111111]/70 leading-relaxed italic"
                  >
                    "{testimonials[current].review}"
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent my-8" />

              {/* Author with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-md">
                      <span className="font-body text-xs font-semibold text-white tracking-wider">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading text-base text-[#111111]">{testimonials[current].name}</p>
                      <p className="font-body text-xs text-[#111111]/40 tracking-wider">{testimonials[current].location}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-[#F8F5EF] rounded-full border border-[#C9A86A]/15">
                    <p className="font-body text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase">✓ {testimonials[current].tag}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#C9A86A]/20 flex items-center justify-center hover:bg-[#C9A86A] hover:border-[#C9A86A] hover:text-white text-[#C9A86A] transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-[#C9A86A]"
                      : "w-2 h-2 bg-[#C9A86A]/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#C9A86A]/20 flex items-center justify-center hover:bg-[#C9A86A] hover:border-[#C9A86A] hover:text-white text-[#C9A86A] transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Mini testimonial cards */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-5"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                current === i
                  ? "border-[#C9A86A]/30 bg-white shadow-[0_10px_40px_rgba(201,168,106,0.1)]"
                  : "border-[#F4F4F4] bg-white hover:border-[#C9A86A]/15 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-[#C9A86A] text-xs">★</span>
                ))}
              </div>
              <p className="font-body text-xs text-[#111111]/60 leading-relaxed line-clamp-3 italic">"{t.review}"</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center">
                  <span className="font-body text-[7px] text-white">{t.initials}</span>
                </div>
                <p className="font-body text-[10px] text-[#111111]/50">{t.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
    </section>
  );
}
