// src/BundlesPage.jsx
import React, { useState } from 'react';

export default function BundlesPage() {
  const [activeTab, setActiveTab] = useState('bulking');
  const [activeBtn, setActiveBtn] = useState(false);

  const handleBtnClick = () => {
    setActiveBtn(true);
    setTimeout(() => setActiveBtn(false), 300);
  };

  const bundleData = {
    bulking: {
      id: 'mass-bulking-stack',
      goalTag: 'GOAL: MAXIMUM HYPERTROPHY & HEAVY LIFTING',
      title: 'MASS HYPERTROPHY STACK',
      tagline: 'Engineered for powerlifting, heavy compound sets, and maximum weight gain.',
      price: '$89.99',
      originalPrice: '$109.98',
      savings: 'SAVE 18%',
      exercise: 'Heavy Bench Press & Deadlifts',
      items: [
        { name: '1x Whey Isolate Pro (2.2 lbs)', desc: '25g fast-absorbing grass-fed protein' },
        { name: '1x Micronized Creatine (250g)', desc: '5g pure ATP power output boost' },
        { name: '1x Stainless Shaker Bottle (750ml)', desc: 'Leak-proof double-wall insulation' },
      ],
      // Image featuring heavy barbell bench / squat heavy training
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
    },
    endurance: {
      id: 'endurance-stamina-stack',
      goalTag: 'GOAL: AGILITY, CARDIO & ATHLETIC STAMINA',
      title: 'CROSS-TRAIN ENDURANCE STACK',
      tagline: 'Designed for HIIT, sprinting, functional fitness, and rapid intra-workout recovery.',
      price: '$79.99',
      originalPrice: '$94.98',
      savings: 'SAVE 15%',
      exercise: 'Kettlebell Swings & Sprinting',
      items: [
        { name: '1x Plant Protein Matrix (2 lbs)', desc: 'Clean organic amino acid blend' },
        { name: '1x Creatine HCL Elite (200g)', desc: 'Zero-water retention muscle endurance' },
        { name: '1x Electrolyte Hydra-Paks (15-pack)', desc: 'Rapid hydration rebalance' },
      ],
      // Image featuring kettlebell / functional athletic training
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85',
    },
    cutting: {
      id: 'shred-lean-stack',
      goalTag: 'GOAL: LEAN DEFINITION & FAT LOSS',
      title: 'SHRED & DEFINITION STACK',
      tagline: 'Tailored for calorie-deficit phases to retain hard-earned muscle while stripping fat.',
      price: '$99.99',
      originalPrice: '$124.97',
      savings: 'SAVE 20%',
      exercise: 'Bodyweight Calisthenics & Pull-ups',
      items: [
        { name: '2x Whey Isolate Pro (2.2 lbs)', desc: 'High protein, zero fat & carbs' },
        { name: '1x Creatine HCL Elite (200g)', desc: 'Stomach-friendly muscle retention' },
        { name: '1x FITBRAND Gym Towel', desc: 'Microfiber sweat-wicking gear' },
      ],
      // Image featuring bodyweight / pull-up calisthenics training
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    },
  };

  const currentBundle = bundleData[activeTab];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans antialiased pb-20">
      
      {/* 1. HEADER */}
      <section className="bg-[#181818] py-14 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-2">
            TARGETED TRAINING COMBOS
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            PERFORMANCE STACKS
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mt-3 font-normal leading-relaxed">
            Select your primary training discipline below to unlock tailored supplement stacks with built-in savings.
          </p>
        </div>
      </section>

      {/* 2. EXERCISE CATEGORY TABS (3 SEPARATE GOALS) */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          <button
            type="button"
            onClick={() => setActiveTab('bulking')}
            className={`p-5 text-left border transition-all ${
              activeTab === 'bulking'
                ? 'bg-[#181818] border-[#D4F932]'
                : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">01 / HEAVY LIFTING</span>
            <h3 className={`text-sm font-black uppercase ${activeTab === 'bulking' ? 'text-[#D4F932]' : 'text-white'}`}>
              Bulking & Mass Stack
            </h3>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('endurance')}
            className={`p-5 text-left border transition-all ${
              activeTab === 'endurance'
                ? 'bg-[#181818] border-[#D4F932]'
                : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">02 / HIIT & CARDIO</span>
            <h3 className={`text-sm font-black uppercase ${activeTab === 'endurance' ? 'text-[#D4F932]' : 'text-white'}`}>
              Endurance & Stamina
            </h3>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cutting')}
            className={`p-5 text-left border transition-all ${
              activeTab === 'cutting'
                ? 'bg-[#181818] border-[#D4F932]'
                : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">03 / CALISTHENICS & LEAN</span>
            <h3 className={`text-sm font-black uppercase ${activeTab === 'cutting' ? 'text-[#D4F932]' : 'text-white'}`}>
              Shred & Definition
            </h3>
          </button>

        </div>
      </section>

      {/* 3. DYNAMIC HERO STACK SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-[#181818] border border-zinc-800 grid lg:grid-cols-12 overflow-hidden">
          
          {/* EXERCISE ACTION IMAGE */}
          <div className="lg:col-span-6 bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-800 relative min-h-[360px] lg:min-h-[500px] group">
            <span className="absolute top-4 left-4 z-10 bg-black text-[#D4F932] text-[10px] font-mono tracking-widest px-3 py-1.5 border border-zinc-800 uppercase">
              {currentBundle.savings}
            </span>
            <span className="absolute bottom-4 left-4 z-10 bg-[#111111]/90 text-zinc-300 text-[11px] font-mono px-3 py-1.5 border border-zinc-800">
              🏋️ EXERCISE FOCUS: {currentBundle.exercise}
            </span>
            <img
              key={currentBundle.id}
              src={currentBundle.image}
              alt={currentBundle.title}
              className="w-full h-full object-cover grayscale opacity-85 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* STACK BREAKDOWN & INCLUDED ITEMS */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-[#D4F932] font-mono tracking-widest uppercase mb-2">
                {currentBundle.goalTag}
              </p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
                {currentBundle.title}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
                {currentBundle.tagline}
              </p>

              {/* WHAT'S INSIDE THE BUNDLE LIST */}
              <div className="mb-8">
                <p className="text-[11px] font-mono text-zinc-500 uppercase mb-4 tracking-wider">
                  BUNDLE INCLUSIONS ({currentBundle.items.length} PRODUCTS):
                </p>
                <div className="space-y-3">
                  {currentBundle.items.map((item, idx) => (
                    <div key={idx} className="bg-[#111111] p-3.5 border border-zinc-800 flex items-start gap-3">
                      <span className="text-[#D4F932] font-mono text-xs font-bold mt-0.5">✓</span>
                      <div>
                        <p className="text-xs font-bold text-white uppercase">{item.name}</p>
                        <p className="text-[11px] text-zinc-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PRICING & CTA */}
            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase">COMBO PRICE</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white tracking-tight">
                    {currentBundle.price}
                  </span>
                  <span className="text-xs text-zinc-500 line-through font-bold">
                    {currentBundle.originalPrice}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBtnClick}
                className={`text-xs font-black uppercase tracking-wider px-8 py-4 transition-all duration-200 ${
                  activeBtn
                    ? 'bg-[#D4F932] text-black scale-95'
                    : 'bg-zinc-200 text-black hover:bg-[#D4F932]'
                }`}
              >
                ADD STACK TO CART
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}