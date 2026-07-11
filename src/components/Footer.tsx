"use client";
import Image from "next/image";
import { MessageCircle, Camera, Mail } from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "How To Use", href: "#howtouse" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0a] relative">
      {/* Gold line at top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Main grid */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-14">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-7">
              <div className="relative w-[48px] h-[48px] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(201,168,106,0.12)]">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[18px] text-white/80 tracking-[0.06em] font-medium">RALORA</span>
                <span className="font-body text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mt-[2px]">GLOW</span>
              </div>
            </div>
            <p className="font-body text-[14px] text-white/25 leading-[1.9] max-w-[240px] mb-8">
              Premium handcrafted skincare — where nature meets luxurious self-care.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order%20the%20SPCL%20Tan%20Care%20Body%20Scrub.", icon: <MessageCircle size={13} />, hoverBg: "hover:bg-[#25D366] hover:border-[#25D366]" },
                { href: "https://instagram.com/raloraglow", icon: <Camera size={13} />, hoverBg: "hover:bg-[#E1306C] hover:border-[#E1306C]" },
                { href: "mailto:hello@raloraglow.com", icon: <Mail size={13} />, hoverBg: "hover:bg-[#C9A86A] hover:border-[#C9A86A]" },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300 ${s.hoverBg}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mb-7">Navigation</p>
            <ul className="space-y-3.5">
              {nav.map(l => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)} className="font-body text-[14px] text-white/25 hover:text-[#C9A86A] transition-colors duration-300 text-left">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Policies */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mb-7">Legal</p>
            <ul className="space-y-3.5">
              {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map(p => (
                <li key={p}><span className="font-body text-[14px] text-white/25 hover:text-white/45 transition-colors cursor-pointer">{p}</span></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-[#C9A86A] uppercase mb-7">Reach Us</p>
            <div className="space-y-4">
              <a href="tel:+917416751547" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A86A]/30 transition-colors">
                  <MessageCircle size={12} className="text-[#C9A86A]" />
                </div>
                <span className="font-body text-[13px] text-white/25 group-hover:text-[#C9A86A] transition-colors">+91 7416 751 547</span>
              </a>
              <a href="mailto:hello@raloraglow.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A86A]/30 transition-colors">
                  <Mail size={12} className="text-[#C9A86A]" />
                </div>
                <span className="font-body text-[13px] text-white/25 group-hover:text-[#C9A86A] transition-colors">hello@raloraglow.com</span>
              </a>
              <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A86A]/30 transition-colors">
                  <Camera size={12} className="text-[#C9A86A]" />
                </div>
                <span className="font-body text-[13px] text-white/25 group-hover:text-[#C9A86A] transition-colors">@raloraglow</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-white/15 tracking-wider">&copy; {new Date().getFullYear()} RALORA GLOW. All rights reserved.</p>
          <p className="font-body text-[11px] text-white/15 tracking-wider">Handcrafted with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
