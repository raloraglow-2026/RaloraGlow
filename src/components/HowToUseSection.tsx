"use client";
import { AlertTriangle, Droplets, Sun, CloudRain, Flower2 } from "lucide-react";

const method1Steps = [
  "Take 2-3 tablespoons of scrub powder",
  "Mix with rose water or plain water to form a paste",
  "Apply evenly to face and body",
  "Massage gently in circular motions for 3-5 minutes",
  "Leave on for 2-3 minutes",
  "Rinse thoroughly with water and pat dry",
];

const method2Steps = [
  "Take 2-3 tablespoons of scrub powder",
  "Mix with your body wash and a little water",
  "Apply to slightly wet skin",
  "Scrub gently for 3-5 minutes",
  "Rinse thoroughly and moisturize immediately",
];

const frequency = [
  { type: "Normal Skin", freq: "2-3x / week", icon: <Sun size={18} /> },
  { type: "Oily Skin", freq: "2-3x / week", icon: <Droplets size={18} /> },
  { type: "Dry Skin", freq: "1-2x / week", icon: <CloudRain size={18} /> },
  { type: "Sensitive Skin", freq: "Once / week", icon: <Flower2 size={18} /> },
];

export default function HowToUseSection() {
  return (
    <section id="howtouse" className="sec bg-[#FDFBF7] relative overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="eyebrow mb-8 inline-flex">The Ritual</span>
          <h2 className="h2 mb-5">
            How To<br /><span className="gold-text italic">Use</span>
          </h2>
          <span className="gold-rule-short mx-auto block mb-7" />
          <p className="body-lg mx-auto text-center max-w-md">
            Two simple methods for glowing skin.
          </p>
        </div>

        {/* Two methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Method 1 */}
          <div className="bg-white rounded-3xl p-10 md:p-12 border border-[#C9A86A]/8 h-full">
            <p className="font-heading text-[20px] text-[#111111] mb-1">Method 1</p>
            <p className="font-body text-[12px] text-[#C9A86A] tracking-[0.15em] uppercase mb-8">With Rose Water or Water</p>
            <div className="space-y-7">
              {method1Steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#3D5A40] flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-[14px] text-white">{i + 1}</span>
                  </div>
                  <p className="font-body text-[14px] text-[#111111]/50 leading-[1.8] pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-white rounded-3xl p-10 md:p-12 border border-[#C9A86A]/8 h-full">
            <p className="font-heading text-[20px] text-[#111111] mb-1">Method 2</p>
            <p className="font-body text-[12px] text-[#C9A86A] tracking-[0.15em] uppercase mb-8">With Body Wash</p>
            <div className="space-y-7">
              {method2Steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#3D5A40] flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-[14px] text-white">{i + 1}</span>
                  </div>
                  <p className="font-body text-[14px] text-[#111111]/50 leading-[1.8] pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patch test warning card */}
        <div className="bg-[#FFF8EC] border border-[#C9A86A]/15 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <AlertTriangle size={20} className="text-[#C9A86A] flex-shrink-0 mt-0.5" />
          <p className="font-body text-[14px] text-[#111111]/55 leading-[1.8]">
            Perform a patch test on a small area 24 hours before first use. Discontinue if irritation occurs.
          </p>
        </div>

        {/* Frequency grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {frequency.map((f) => (
            <div key={f.type} className="bg-white rounded-2xl p-7 border border-[#111111]/4 text-center">
              <div className="text-[#C9A86A] flex justify-center mb-3">{f.icon}</div>
              <p className="font-heading text-[16px] text-[#111111]/75 mb-1">{f.freq}</p>
              <p className="font-body text-[10px] tracking-[0.15em] text-[#C9A86A] uppercase">{f.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
