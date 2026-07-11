"use client";
import { MessageCircle, Camera, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const wa = () => window.open("https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order.", "_blank");

  return (
    <section id="contact" className="sec bg-white relative overflow-hidden">
      <div className="wrap">

        {/* Centered layout */}
        <div className="max-w-lg mx-auto text-center">
          <span className="eyebrow mb-8 inline-flex">Get In Touch</span>
          <h2 className="h2 mb-5">
            Ready To <span className="gold-text italic">Glow?</span>
          </h2>
          <span className="gold-rule-short mx-auto block mb-7" />
          <p className="body-lg mb-10">
            One message away from radiant skin.
          </p>

          {/* Big WhatsApp button */}
          <button onClick={wa} className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={16} /> Order on WhatsApp
          </button>

          {/* Phone */}
          <div className="mt-7">
            <a href="tel:+917416751547" className="inline-flex items-center gap-2 group">
              <Phone size={14} className="text-[#C9A86A]" />
              <span className="font-heading text-[18px] text-[#111111]/60 group-hover:text-[#C9A86A] transition-colors">+91 7416 751 547</span>
            </a>
          </div>

          {/* Social icons row */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <a
              href="https://wa.me/917416751547?text=Hi%20RALORA%20GLOW!%20I%20want%20to%20order."
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://instagram.com/raloraglow"
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300"
            >
              <Camera size={16} />
            </a>
            <a
              href="mailto:hello@raloraglow.com"
              className="w-11 h-11 rounded-full border border-[#111111]/8 flex items-center justify-center text-[#111111]/40 hover:bg-[#C9A86A] hover:text-white hover:border-[#C9A86A] transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
