"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-[990] w-10 h-10 rounded-full bg-white border border-[#111111]/8 text-[#111111]/50 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#C9A86A] hover:text-[#C9A86A] transition-all duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          <ChevronUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
