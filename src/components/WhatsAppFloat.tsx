"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      // Show tooltip after a bit
      setTimeout(() => !dismissed && setTooltipOpen(true), 1000);
      setTimeout(() => setTooltipOpen(false), 5000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917416751547?text=Hello%20RALORA%20GLOW!%20I'm%20interested%20in%20the%20SPCL%20Tan%20Care%20Body%20Scrub.",
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-20 right-6 z-[9960] flex flex-col items-end gap-2">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-[#C9A86A]/15 p-3 pr-8 max-w-[220px]"
              >
                <button
                  onClick={() => { setTooltipOpen(false); setDismissed(true); }}
                  className="absolute top-2 right-2 text-[#111111]/30 hover:text-[#111111]/60 transition-colors"
                >
                  <X size={10} />
                </button>
                <p className="font-body text-[10px] text-[#C9A86A] tracking-widest uppercase mb-1">Order Now</p>
                <p className="font-heading text-xs text-[#111111]">
                  Chat with us on WhatsApp!
                </p>
                <p className="font-body text-[10px] text-[#111111]/40 mt-0.5">Quick response guaranteed</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={openWhatsApp}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 focus:outline-none relative"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircle size={24} className="text-white relative z-10" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
