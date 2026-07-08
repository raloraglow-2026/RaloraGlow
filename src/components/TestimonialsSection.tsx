"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name:"Priya Sharma",  loc:"Mumbai",    init:"PS", review:"After two weeks of regular use my skin feels incredibly soft. The packaging is beautiful and it feels genuinely luxurious. Love this product!" },
  { name:"Arjun Mehta",   loc:"Bangalore", init:"AM", review:"I was skeptical but this scrub is fantastic — gentle, effective, and the fragrance is subtle. My skin looks visibly healthier after regular use." },
  { name:"Kavya Reddy",   loc:"Hyderabad", init:"KR", review:"This has become my Sunday ritual. Leaves my skin feeling like I just stepped out of a spa. Love that it's designed for everyone." },
  { name:"Rohan Kapoor",  loc:"Delhi",     init:"RK", review:"Beautifully packaged and premium quality. My tan from my beach trip has visibly improved. Ordered again already. Highly recommended!" },
  { name:"Nisha Patel",   loc:"Chennai",   init:"NP", review:"RALORA GLOW is everything a luxury skincare brand should be. Works beautifully and makes my skin feel soft for days. Ordering process was quick." },
];

const up = {
  hidden: { opacity:0, y:24 },
  show: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.12, duration:0.65, ease:"easeOut" as const } }),
};

export default function TestimonialsSection() {
  const ref    = useRef(null);
  const v      = useInView(ref, { once:true, margin:"-80px" });
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);

  const prev = () => { setDir(-1); setCur(c=>(c-1+reviews.length)%reviews.length); };
  const next = () => { setDir(1);  setCur(c=>(c+1)%reviews.length); };

  const slide = {
    enter: (d:number) => ({ opacity:0, x:d*40 }),
    center: { opacity:1, x:0, transition:{ duration:0.45, ease:"easeOut" as const } },
    exit:   (d:number) => ({ opacity:0, x:-d*40, transition:{ duration:0.28 } }),
  };

  return (
    <section id="testimonials" className="relative section bg-[#FCFBF8] overflow-hidden">
      <div className="gold-line absolute top-0 inset-x-0" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#EFE8DD]/25 translate-x-1/2 blur-[80px]" />

      <div ref={ref} className="container-xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span custom={0} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-label">Real Stories</motion.span>
          <motion.h2  custom={1} variants={up} initial="hidden" animate={v?"show":"hidden"} className="section-title">What Our<br /><span className="gold-text italic">Customers Say</span></motion.h2>
          <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="gold-line w-12 mx-auto mt-6" />
          <motion.div custom={3} variants={up} initial="hidden" animate={v?"show":"hidden"} className="flex items-center justify-center gap-1 mt-5">
            {[1,2,3,4,5].map(s=><span key={s} className="text-[#C9A86A] text-lg">★</span>)}
            <span className="font-body text-xs text-[#111111]/35 ml-2 tracking-wider">5.0 / 5.0</span>
          </motion.div>
        </div>

        {/* Featured review */}
        <motion.div custom={2} variants={up} initial="hidden" animate={v?"show":"hidden"} className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#F0EDE8] card-shadow relative overflow-hidden">
            <div className="absolute top-4 left-6 font-heading text-5xl text-[#C9A86A]/8 leading-none select-none">"</div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-5">{[1,2,3,4,5].map(s=><span key={s} className="text-[#C9A86A] text-sm">★</span>)}</div>

              {/* Review text */}
              <div className="min-h-[60px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.p
                    key={cur} custom={dir} variants={slide} initial="enter" animate="center" exit="exit"
                    className="font-heading text-base md:text-lg text-[#111111]/65 italic leading-[1.6]"
                  >
                    "{reviews[cur].review}"
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="gold-line my-5" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`a-${cur}`}
                  initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
                  transition={{ duration:0.3 }}
                  className="flex items-center justify-between flex-wrap gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center shadow-sm">
                      <span className="font-body text-xs font-semibold text-white">{reviews[cur].init}</span>
                    </div>
                    <div>
                      <p className="font-heading text-sm text-[#111111]">{reviews[cur].name}</p>
                      <p className="font-body text-[9px] text-[#111111]/35 tracking-wider">{reviews[cur].loc}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#F8F5EF] rounded-full border border-[#C9A86A]/12 font-body text-[8px] tracking-[0.2em] text-[#C9A86A] uppercase">✓ Verified</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-5">
            <button onClick={prev} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-[#F0EDE8] flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-all duration-250 shadow-sm"><ChevronLeft size={13}/></button>
            <div className="flex gap-1 md:gap-1.5">
              {reviews.map((_,i)=>(
                <button key={i} onClick={()=>{setDir(i>cur?1:-1);setCur(i);}}
                  className={`rounded-full transition-all duration-250 ${i===cur?"w-4 h-1.5 bg-[#C9A86A]":"w-1.5 h-1.5 bg-[#C9A86A]/22"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-[#F0EDE8] flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-all duration-250 shadow-sm"><ChevronRight size={13}/></button>
          </div>
        </motion.div>

        {/* Mini cards */}
        <motion.div custom={4} variants={up} initial="hidden" animate={v?"show":"hidden"} className="grid sm:grid-cols-3 gap-4">
          {reviews.slice(0,3).map((r,i)=>(
            <div
              key={r.name}
              onClick={()=>{setDir(i>cur?1:-1);setCur(i);}}
              className={`cursor-pointer p-5 rounded-2xl border transition-all duration-250 ${cur===i?"border-[#C9A86A]/25 bg-white card-shadow":"border-[#F0EDE8] bg-white hover:border-[#C9A86A]/14"}`}
            >
              <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(s=><span key={s} className="text-[#C9A86A] text-xs">★</span>)}</div>
              <p className="font-body text-xs text-[#111111]/55 leading-[1.7] line-clamp-3 italic">"{r.review}"</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A86A] to-[#D4B97E] flex items-center justify-center">
                  <span className="font-body text-[7px] text-white">{r.init}</span>
                </div>
                <p className="font-body text-[10px] text-[#111111]/45">{r.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="gold-line absolute bottom-0 inset-x-0" />
    </section>
  );
}
