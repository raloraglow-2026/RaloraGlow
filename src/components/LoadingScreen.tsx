"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" as const } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Gold progress line */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A86A] via-[#E8D5A3] to-[#C9A86A]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" as const }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            className="flex flex-col items-center"
          >
            {/* Outer glow ring */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-7 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-[#C9A86A]/15"
                animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-[#C9A86A]/10"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
              />
              {/* Logo on black bg */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#0a0a0a] overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                <Image
                  src="/logo.png"
                  alt="RALORA GLOW"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-heading text-2xl md:text-3xl tracking-[0.45em] text-[#111111] uppercase"
            >
              RALORA <span className="gold-gradient-text italic">GLOW</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.38em] text-[#111111]/35 uppercase mt-2"
            >
              Luxury Skincare
            </motion.p>
          </motion.div>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-14 flex gap-2"
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
