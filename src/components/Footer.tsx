"use client";
import Image from "next/image";
import { MessageCircle, Camera, Mail } from "lucide-react";

const quickLinks = [
  { label:"Home",         href:"#home" },
  { label:"About",        href:"#about" },
  { label:"Product",      href:"#product" },
  { label:"Benefits",     href:"#benefits" },
  { label:"How To Use",   href:"#howtouse" },
  { label:"Testimonials", href:"#testimonials" },
  { label:"FAQ",          href:"#faq" },
  { label:"Contact",      href:"#contact" },
];
const policies = [
  { label:"Privacy Policy",   href:"#" },
  { label:"Terms of Service", href:"#" },
  { label:"Shipping Policy",  href:"#" },
  { label:"Refund Policy",    href:"#" },
];

export default function Footer() {
  const go = (href:string) => { if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior:"smooth" }); };

  return (
    <footer className="bg-white border-t border-[#F4F4F4]">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
      <div className="container-xl">
        <div className="py-14 md:py-18 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={()=>go("#home")} className="mb-5 block focus:outline-none" aria-label="Home">
              <div className="relative h-8 w-[100px] rounded-lg overflow-hidden bg-[#0d0d0d]">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-contain p-1" />
              </div>
            </button>
            <p className="font-heading text-base text-[#111111]/60 italic mb-2">Luxury skincare for every body.</p>
            <p className="font-body text-xs md:text-sm text-[#111111]/35 leading-[1.7] max-w-xs mb-5">
              Handcrafted with natural ingredients for premium self-care.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/917416751547" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/22 bg-[#25D366]/8 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
                <MessageCircle size={14}/>
              </a>
              <a href="https://instagram.com/raloraglow" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#E1306C]/22 bg-[#E1306C]/8 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <Camera size={14}/>
              </a>
              <a href="mailto:hello@raloraglow.com" aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#C9A86A]/22 bg-[#C9A86A]/8 flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-all duration-300">
                <Mail size={14}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l=>(
                <li key={l.label}><button onClick={()=>go(l.href)} className="font-body text-[13px] text-[#111111]/42 hover:text-[#C9A86A] transition-colors duration-200 text-left">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Policies + Contact */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-5">Policies</h4>
            <ul className="space-y-2.5 mb-7">
              {policies.map(l=>(
                <li key={l.label}><button onClick={()=>go(l.href)} className="font-body text-[13px] text-[#111111]/42 hover:text-[#C9A86A] transition-colors duration-200 text-left">{l.label}</button></li>
              ))}
            </ul>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-4">Contact</h4>
            <a href="https://wa.me/917416751547" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-[#111111]/42 hover:text-[#C9A86A] transition-colors block mb-1.5">+91 7416751547</a>
            <a href="mailto:hello@raloraglow.com" className="font-body text-[13px] text-[#111111]/42 hover:text-[#C9A86A] transition-colors block">hello@raloraglow.com</a>
          </div>
        </div>

        <div className="border-t border-[#F4F4F4] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-[#111111]/25 tracking-wider">© {new Date().getFullYear()} RALORA GLOW. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A86A]/45" />
            <p className="font-body text-[11px] text-[#111111]/25 tracking-wider">Handcrafted with care in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
