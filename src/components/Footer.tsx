"use client";
import Image from "next/image";
import { Camera, MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Product",      href: "#product" },
  { label: "Benefits",     href: "#benefits" },
  { label: "How To Use",   href: "#howtouse" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

const policies = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping Policy",  href: "#" },
  { label: "Refund Policy",    href: "#" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white">
      {/* Gold divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* ── Brand col ── */}
          <div className="lg:col-span-2">
            {/* Logo on black bg */}
            <button
              onClick={() => handleNav("#home")}
              className="mb-7 block focus:outline-none"
              aria-label="RALORA GLOW home"
            >
              <div className="relative h-11 w-[130px] rounded-xl overflow-hidden bg-[#0a0a0a] shadow-sm">
                <Image src="/logo.png" alt="RALORA GLOW" fill className="object-contain p-1.5" />
              </div>
            </button>

            <p className="font-heading text-lg text-[#111111]/65 italic mb-4 leading-relaxed">
              Luxury skincare for every body.
            </p>
            <p className="font-body text-sm text-[#111111]/38 leading-[1.8] max-w-xs mb-8">
              Handcrafted with carefully selected natural ingredients for a premium
              self-care experience — for men and women.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917416751547"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/25 bg-[#25D366]/8 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="https://instagram.com/raloraglow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#E1306C]/25 bg-[#E1306C]/8 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300"
              >
                <Camera size={15} />
              </a>
              <a
                href="mailto:hello@raloraglow.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#C9A86A]/25 bg-[#C9A86A]/8 flex items-center justify-center text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-all duration-300"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="font-body text-[13px] text-[#111111]/45 hover:text-[#C9A86A] transition-colors duration-200 tracking-wide text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Policies ── */}
          <div>
            <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-6">Policies</h4>
            <ul className="space-y-2.5">
              {policies.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="font-body text-[13px] text-[#111111]/45 hover:text-[#C9A86A] transition-colors duration-200 tracking-wide text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact quick */}
            <div className="mt-8 pt-6 border-t border-[#F4F4F4]">
              <h4 className="font-body text-[9px] tracking-[0.38em] text-[#C9A86A] uppercase mb-4">Contact</h4>
              <a
                href="https://wa.me/917416751547"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-[#111111]/45 hover:text-[#C9A86A] transition-colors block mb-1"
              >
                +91 7416751547
              </a>
              <a
                href="mailto:hello@raloraglow.com"
                className="font-body text-[13px] text-[#111111]/45 hover:text-[#C9A86A] transition-colors block"
              >
                hello@raloraglow.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F4F4F4] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-[#111111]/28 tracking-wider">
            © {new Date().getFullYear()} RALORA GLOW. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A86A]/50" />
            <p className="font-body text-[11px] text-[#111111]/28 tracking-wider">
              Handcrafted with care in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
