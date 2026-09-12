import React from 'react';

export default function Hero() {
  return (
    <section id="shop" className="relative bg-zinc-950 text-white py-28 px-4 text-center overflow-hidden border-b border-zinc-800">
      {/* Dark Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-lime-400 font-extrabold text-xs uppercase tracking-widest mb-4 inline-block">
          PREMIUM PERFORMANCE SUPPLEMENTS
        </span>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
          FUEL YOUR <br />
          NEXT SESSION.
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
          Lab-tested, FSSAI compliant, and made for athletes who don't compromise.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#protein"
            className="bg-lime-400 hover:bg-lime-300 text-black font-extrabold px-8 py-3.5 text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
          >
            SHOP ALL SUPPLEMENTS →
          </a>
          <a
            href="#our-story"
            className="bg-transparent hover:bg-zinc-900 border border-zinc-800 text-white font-extrabold px-8 py-3.5 text-xs uppercase tracking-wider transition"
          >
            VERIFY A BATCH
          </a>
        </div>
      </div>
    </section>
  );
}