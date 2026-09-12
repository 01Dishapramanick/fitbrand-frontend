import React from 'react';

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6">
              Built by Athletes, Proven in the Lab
            </h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              FitBrand was founded to eliminate proprietary blends, hidden fillers, and fake claims in sports nutrition. Every batch is third-party tested and crafted with 100% transparent dosages.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Whether you are training for competition or optimizing daily wellness, our clean formulas ensure your body gets exactly what it needs to perform.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-center">
              <div>
                <p className="text-2xl font-black text-emerald-400">100%</p>
                <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Transparent Labels</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">0g</p>
                <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Added Sugars</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">3rd Party</p>
                <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Lab Tested</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-emerald-500/20 to-slate-800 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-8">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="FitBrand Training"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}