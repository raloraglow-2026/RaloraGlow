"use client";
import Image from "next/image";
import { MessageCircle, Camera, Mail } from "lucide-react";

const nav = [
  { label:"Home",         href:"#home" },
  { label:"About",        href:"#about" },
  { label:"Product",      href:"#product" },
  { label:"How To Use",   href:"#howtouse" },
  { label:"Testimonials", href:"#testimonials" },
  { label:"FAQ",          href:"#faq" },
  { label:"Contact",      href:"#contact" },
];
const policies = ["Privacy Policy","Terms of Service","Shipping Policy","Refund Policy"];

export default function Footer() {
  const go = (href:string) => { if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({behavior:"smooth"}); };

  return (
    <footer className="bg-[#0f0f0f] relative overflow-hidden">
      {/* Gold line top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />

      {/* Subtle bg texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage:"radial-gradient(circle at 2px 2px,#C9A86A 1px,transparent 0)", backgroundSize:"32px 32px" }} />

      <div className="wrap relative z-10">
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={()=>go("#home")} className="block mb-6 focus:outline-none" aria-label="Home">
              <div className="relative w-[50px] h-[50px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-cover" />
              </div>
            </button>
            <p className="font-heading text-lg text-white/60 italic mb-3">Luxury skincare for every body.</p>
            <p className="font-body text-sm text-white/30 leading-[1.8] max-w-xs mb-8">
              Handcrafted with carefully selected natural ingredients for a premium self-care experience — for men and women.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a href="https://wa.me/917416751547" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/25 flex items-center justify-center text-[#25D366]/70 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300">
                <MessageCircle size={14}/>
              </a>
              <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-white/40 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300">
                <Camera size={14}/>
              </a>
              <a href="mailto:hello@raloraglow.com" aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#C9A86A]/25 flex items-center justify-center text-[#C9A86A]/70 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300">
                <Mail size={14}/>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {nav.map(l=>(
                <li key={l.label}><button onClick={()=>go(l.href)} className="font-body text-[13px] text-white/35 hover:text-[#C9A86A] transition-colors duration-200 text-left">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Policies + Contact */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-5">Policies</h4>
            <ul className="space-y-2.5 mb-8">
              {policies.map(p=>(
                <li key={p}><span className="font-body text-[13px] text-white/35">{p}</span></li>
              ))}
            </ul>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-4">Contact</h4>
            <a href="tel:+917416751547" className="font-body text-[13px] text-white/35 hover:text-[#C9A86A] transition-colors block mb-1.5">+91 7416751547</a>
            <a href="mailto:hello@raloraglow.com" className="font-body text-[13px] text-white/35 hover:text-[#C9A86A] transition-colors block">hello@raloraglow.com</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-white/20 tracking-wider">© {new Date().getFullYear()} RALORA GLOW. All rights reserved.</p>
          <p className="font-body text-[11px] text-white/20 tracking-wider">Handcrafted with care in India</p>
        </div>
      </div>
    </footer>
  );
}
