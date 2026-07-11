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
    <footer className="bg-[#111111] relative">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[14px] text-white/80 tracking-[0.08em]">RALORA</span>
                <span className="font-body text-[8px] tracking-[0.35em] text-[#C9A86A] uppercase mt-[2px]">GLOW</span>
              </div>
            </div>
            <p className="font-body text-[13px] text-white/30 leading-[1.75] max-w-[240px] mb-6">
              Handcrafted with natural ingredients for a premium self-care experience.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: "https://wa.me/917416751547", icon: <MessageCircle size={13} />, color: "#25D366" },
                { href: "https://instagram.com/raloraglow", icon: <Camera size={13} />, color: "#E1306C" },
                { href: "mailto:hello@raloraglow.com", icon: <Mail size={13} />, color: "#C9A86A" },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
                  style={{ ["--hover-bg" as string]: s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mb-5">Navigation</p>
            <ul className="space-y-2">
              {nav.map(l => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)} className="font-body text-[13px] text-white/30 hover:text-[#C9A86A] transition-colors text-left">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mb-5">Policies</p>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map(p => (
                <li key={p}><span className="font-body text-[13px] text-white/30">{p}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] text-[#C9A86A] uppercase mb-5">Contact</p>
            <a href="tel:+917416751547" className="font-body text-[13px] text-white/30 hover:text-[#C9A86A] transition-colors block mb-2">+91 7416751547</a>
            <a href="mailto:hello@raloraglow.com" className="font-body text-[13px] text-white/30 hover:text-[#C9A86A] transition-colors block">hello@raloraglow.com</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[11px] text-white/18">© {new Date().getFullYear()} RALORA GLOW. All rights reserved.</p>
          <p className="font-body text-[11px] text-white/18">Handcrafted with care in India</p>
        </div>
      </div>
    </footer>
  );
}
