import React from 'react';

export default function Hero() {
  return (
    <section id="shop" className="relative bg-slate-950 text-white py-24 overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest py-1 px-3 rounded-full mb-4">
          Doctor-Formulated Performance
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Unleash Peak Power with <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
            Clean Science
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
          Pure, lab-verified formulas engineered specifically to increase explosive power, accelerate recovery, and support lean muscle growth.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#protein"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20"
          >
            Explore Supplements
          </a>
          <a
            href="#our-story"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold px-6 py-3 rounded-xl border border-slate-800 transition duration-200"
          >
            Learn Our Story
          </a>
        </div>
      </div>
    </section>
  );
}