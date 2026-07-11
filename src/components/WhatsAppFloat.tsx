"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={() => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", "_blank")}
          className="fixed bottom-6 right-6 z-[990] w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:scale-110 transition-all duration-300 focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
