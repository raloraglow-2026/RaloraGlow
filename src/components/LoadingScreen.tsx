"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" as const } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-[#C9A86A]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" as const }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="flex flex-col items-center"
          >
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] mb-7">
              <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" priority />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-heading text-[22px] tracking-[0.3em] text-[#111111]">RALORA <span className="gold-text italic">GLOW</span></p>
              <p className="font-body text-[10px] tracking-[0.35em] text-[#111111]/30 uppercase mt-2">Luxury Skincare</p>
            </motion.div>
          </motion.div>

          {/* Dots */}
          <div className="absolute bottom-14 flex gap-1.5">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-[#C9A86A]"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" as const }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
