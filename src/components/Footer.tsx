"use client";
import { motion } from "framer-motion";
import { Camera, MessageCircle, Mail } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Product", href: "#product" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white border-t border-[#F4F4F4]">
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer */}
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F8F5EF] to-[#EFE8DD] border border-[#C9A86A]/30 flex items-center justify-center shadow-sm">
                <span className="font-heading text-sm font-semibold gold-gradient-text tracking-wider">RG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg tracking-[0.15em] text-[#111111]">RALORA</span>
                <span className="font-body text-[10px] tracking-[0.35em] text-[#C9A86A] uppercase">GLOW</span>
              </div>
            </div>
            
            <p className="font-heading text-xl text-[#111111]/70 italic mb-4 leading-relaxed">
              Luxury skincare for every body.
            </p>
            <p className="font-body text-sm text-[#111111]/40 leading-relaxed max-w-sm mb-8">
              Crafted with thoughtfully selected natural ingredients to create a premium self-care experience for men and women.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917416751547"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://instagram.com/raloraglow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E1306C]/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#dc2743] border border-[#E1306C]/20 flex items-center justify-center text-[#E1306C] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
              <a
                href="mailto:hello@raloraglow.com"
                className="w-10 h-10 rounded-full bg-[#C9A86A]/10 hover:bg-[#C9A86A] border border-[#C9A86A]/20 flex items-center justify-center text-[#C9A86A] hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-[10px] tracking-[0.35em] text-[#C9A86A] uppercase mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="font-body text-sm text-[#111111]/50 hover:text-[#C9A86A] transition-colors duration-200 tracking-wide text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F4F4F4] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#111111]/30 tracking-wider">
            © {new Date().getFullYear()} RALORA GLOW. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            <p className="font-body text-xs text-[#111111]/30 tracking-wider">
              Crafted with care in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
