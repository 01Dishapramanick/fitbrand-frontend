// src/CreatinePage.jsx
import React, { useState } from 'react';

export default function CreatinePage() {
  const [activeTab, setActiveTab] = useState('monohydrate');
  const [servings, setServings] = useState(50);
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setTimeout(() => setActiveBtn(null), 300);
  };

  const creatineData = {
    monohydrate: {
      id: 'creatine-monohydrate',
      title: 'CREATINE MONOHYDRATE',
      badge: 'GOLD STANDARD • 200 MESH',
      price: '$29.99',
      rating: '4.9 ★ (1,240+ reviews)',
      description:
        '100% pure micronized creatine monohydrate. Instantized for quick dissolution, promoting raw ATP strength, muscle cell voluminization, and power output.',
      specs: [
        { label: 'PURITY', value: '99.9%' },
        { label: 'SERVING', value: '5g / Scoop' },
        { label: 'SOLUBILITY', value: 'Micronized' },
      ],
      image:
        'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1000&q=85',
    },
    hcl: {
      id: 'creatine-hcl',
      title: 'CREATINE HCL ELITE',
      badge: 'ULTRA SOLUBLE • ZERO BLOAT',
      price: '$34.99',
      rating: '4.8 ★ (850+ reviews)',
      description:
        'Hydrochloride bound creatine designed for maximum bio-availability. Requires zero loading phase and leaves no stomach discomfort or water retention.',
      specs: [
        { label: 'PURITY', value: '99.5%' },
        { label: 'SERVING', value: '2g / Scoop' },
        { label: 'SOLUBILITY', value: 'Instant' },
      ],
      image:
        'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1000&q=85',
    },
  };

  const currentProduct = creatineData[activeTab];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans antialiased pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-[#181818] py-14 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-2">
              ATP REGEN & CELL HYDRATION
            </p>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              CREATINE VAULT
            </h1>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Select between our 200-mesh ultra-pure Monohydrate or stomach-friendly Creatine HCL formula.
          </p>
        </div>
      </section>

      {/* 2. TAB SWITCHER CONTROL */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="inline-flex p-1.5 bg-[#181818] border border-zinc-800 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('monohydrate')}
            className={`px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'monohydrate'
                ? 'bg-[#D4F932] text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            01. Monohydrate
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hcl')}
            className={`px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'hcl'
                ? 'bg-[#D4F932] text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            02. Creatine HCL
          </button>
        </div>
      </section>

      {/* 3. FEATURED LAYOUT (NOT A GRID) */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-[#181818] border border-zinc-800 grid lg:grid-cols-12 gap-0 overflow-hidden">
          
          {/* LEFT: IMAGE HERO DISPLAY */}
          <div className="lg:col-span-7 bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-800 relative min-h-[380px] sm:min-h-[480px] flex items-center justify-center p-8 overflow-hidden group">
            <span className="absolute top-4 left-4 bg-[#111111] text-[#D4F932] text-[10px] font-mono tracking-widest px-3 py-1.5 border border-zinc-800 uppercase">
              {currentProduct.badge}
            </span>
            <img
              key={currentProduct.id}
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* RIGHT: DETAILS & ACTIONS */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#181818]">
            <div>
              <div className="text-xs text-zinc-400 font-mono mb-2">
                {currentProduct.rating}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                {currentProduct.title}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
                {currentProduct.description}
              </p>

              {/* SPECIFICATION PILLS */}
              <div className="grid grid-cols-3 gap-3 mb-8 border-y border-zinc-800 py-4">
                {currentProduct.specs.map((spec, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">
                      {spec.label}
                    </p>
                    <p className="text-xs font-black text-white mt-1">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* SERVING SIZE SELECTOR */}
              <div className="mb-8">
                <p className="text-[11px] font-mono text-zinc-400 uppercase mb-3">
                  SELECT CONTAINER SIZE:
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setServings(50)}
                    className={`flex-1 py-2.5 text-xs font-bold border transition ${
                      servings === 50
                        ? 'border-[#D4F932] text-[#D4F932] bg-[#D4F932]/10'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                    }`}
                  >
                    250G (50 SERVINGS)
                  </button>
                  <button
                    type="button"
                    onClick={() => setServings(100)}
                    className={`flex-1 py-2.5 text-xs font-bold border transition ${
                      servings === 100
                        ? 'border-[#D4F932] text-[#D4F932] bg-[#D4F932]/10'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                    }`}
                  >
                    500G (100 SERVINGS)
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION & PRICING */}
            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase">TOTAL PRICE</p>
                <span className="text-3xl font-black text-white tracking-tight">
                  {servings === 100 ? '$49.99' : currentProduct.price}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleBtnClick(currentProduct.id)}
                className={`text-xs font-black uppercase tracking-wider px-8 py-4 transition-all duration-200 ${
                  activeBtn === currentProduct.id
                    ? 'bg-[#D4F932] text-black scale-95'
                    : 'bg-zinc-200 text-black hover:bg-[#D4F932]'
                }`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON BAR BELOW */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#181818] border border-zinc-800 p-6 flex gap-4 items-start">
            <span className="text-[#D4F932] text-xl font-bold">✓</span>
            <div>
              <h4 className="text-xs font-bold uppercase text-white">WHEN TO TAKE MONOHYDRATE</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Best for high-volume bodybuilding, muscle hydration, and daily saturation. Takes 5-7 days of consistent use.
              </p>
            </div>
          </div>
          <div className="bg-[#181818] border border-zinc-800 p-6 flex gap-4 items-start">
            <span className="text-[#D4F932] text-xl font-bold">✓</span>
            <div>
              <h4 className="text-xs font-bold uppercase text-white">WHEN TO TAKE HCL</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Best for cutting cycles, athletes prone to bloating, or those wanting quick absorption right before workouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}