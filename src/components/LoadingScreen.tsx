"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" as const } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Progress line */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A86A] via-[#E8D5A3] to-[#C9A86A]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: "easeInOut" as const }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            className="flex flex-col items-center"
          >
            {/* ── Logo circle with glow rings ── */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer pulse ring */}
              <motion.div
                className="absolute w-[148px] h-[148px] md:w-[172px] md:h-[172px] rounded-full border border-[#C9A86A]/18"
                animate={{ scale: [1, 1.07, 1], opacity: [0.18, 0.45, 0.18] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" as const }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-[#C9A86A]/10"
                animate={{ scale: [1, 1.04, 1], opacity: [0.25, 0.55, 0.25] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.4 }}
              />
              {/* Logo — square with rounded corners on its natural black bg */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.20)] flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="RALORA GLOW"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Brand name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="font-heading text-[22px] md:text-[26px] tracking-[0.5em] text-[#111111] uppercase"
            >
              RALORA&nbsp;<span className="gold-text italic">GLOW</span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.38em] text-[#111111]/32 uppercase mt-2"
            >
              Luxury Skincare
            </motion.p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.22, ease: "easeInOut" as const }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
