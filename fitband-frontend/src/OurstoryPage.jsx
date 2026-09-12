// src/OurStoryPage.jsx
import React, { useState } from 'react';

export default function OurStoryPage() {
  const [activeTab, setActiveTab] = useState('purity');

  // Interactive Brand Story Pillars
  const storyPillars = {
    purity: {
      id: 'purity',
      tag: '01 / LABORATORY TRANSPARENCY',
      title: 'Formulated in Certified NABL Labs',
      description:
        'Every single batch undergoes 3rd-party HPLC testing to ensure exact protein purity, zero amino spiking, and heavy metal screening. What’s on the label is strictly what’s in the tub.',
      badge: '100% LABEL ACCURACY',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      stat: '99.8%',
      statLabel: 'Batch Consistency Rate',
    },
    performance: {
      id: 'performance',
      tag: '02 / ATHLETIC PERFORMANCE',
      title: 'Engineered for Elite Athletes',
      description:
        'Designed specifically for powerlifters, runners, and high-intensity hybrid athletes who demand clean fuel without gastric distress, bloating, or artificial fillers.',
      badge: 'WADA COMPLIANT FORMULAS',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
      stat: '50k+',
      statLabel: 'Active Competitive Athletes',
    },
    sourcing: {
      id: 'sourcing',
      tag: '03 / RAW INGREDIENT ORIGINS',
      title: 'Grass-Fed & Clean Sourcing',
      description:
        'We source our whey exclusively from pasture-raised, grass-fed dairy farms in Ireland, combined with non-GMO plant extracts for clean digestion and maximum bio-availability.',
      badge: 'PASTURE RAISED DAIRY',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=85',
      stat: '0 Fillers',
      statLabel: 'Zero Artificial Additives',
    },
  };

  const currentPillar = storyPillars[activeTab];

  // Customer Transformation & Verified Improvement Ratings
  const reviews = [
    {
      id: 1,
      name: 'Rohan Sharma',
      role: 'Powerlifter (83kg Category)',
      rating: '5.0 ★',
      metric: '+18% Squat PR in 8 Weeks',
      text: 'Switched to FITBRAND Whey + Creatine stack. The solubility is effortless, but more importantly: zero bloating or stomach heavy feeling during heavy sets.',
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      name: 'Aisha Patel',
      role: 'CrossFit Athlete & Coach',
      rating: '5.0 ★',
      metric: '30 Min Faster Recovery Time',
      text: 'Label transparency is critical for my clients. Having batch lab certificates accessible gives complete confidence for competition testing.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Marathon Runner',
      rating: '4.9 ★',
      metric: 'Zero Gastric Distress',
      text: 'Most proteins ruin my stomach before long runs. The Plant Protein Matrix digested smoothly during 20km training runs.',
      // UPDATED PHOTO FOR VIKRAM SINGH
      image: 'https://images.unsplash.com/photo-1549476464-37392f717541?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans antialiased pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#181818] py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-2">
              THE FITBRAND ORIGIN STORY
            </p>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              BUILT ON TRUTH.
            </h1>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Founded to eliminate hidden proprietary blends, low-grade fillers, and false marketing claims in sports nutrition.
          </p>
        </div>
      </section>

      {/* 2. STORY PILLARS TAB NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.keys(storyPillars).map((key) => {
            const pillar = storyPillars[key];
            const isActive = activeTab === key;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`p-5 text-left border transition-all ${
                  isActive
                    ? 'bg-[#181818] border-[#D4F932]'
                    : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                  {pillar.tag}
                </span>
                <h3 className={`text-sm font-black uppercase ${isActive ? 'text-[#D4F932]' : 'text-white'}`}>
                  {pillar.title}
                </h3>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DYNAMIC PILLAR DISPLAY */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-[#181818] border border-zinc-800 grid lg:grid-cols-12 overflow-hidden">
          
          <div className="lg:col-span-7 bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-800 relative min-h-[360px] lg:min-h-[480px] group overflow-hidden">
            <span className="absolute top-4 left-4 z-10 bg-black text-[#D4F932] text-[10px] font-mono tracking-widest px-3 py-1.5 border border-zinc-800 uppercase">
              {currentPillar.badge}
            </span>
            <img
              key={currentPillar.id}
              src={currentPillar.image}
              alt={currentPillar.title}
              className="w-full h-full object-cover grayscale opacity-85 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-[#D4F932] font-mono tracking-widest uppercase mb-2">
                {currentPillar.tag}
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                {currentPillar.title}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
                {currentPillar.description}
              </p>
            </div>

            <div className="bg-[#111111] p-6 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-3xl font-black text-[#D4F932] tracking-tight block">
                  {currentPillar.stat}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono uppercase">
                  {currentPillar.statLabel}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase">VERIFIED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VERIFIED IMPROVEMENT RATINGS & ATHLETE TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-2">
              REAL RESULTS & ATHLETE METRICS
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              PROVEN PERFORMANCE GAINS
            </h2>
          </div>
          <p className="text-zinc-400 text-xs font-mono uppercase">
            98.4% REPEAT SATISFACTION RATE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#181818] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition duration-200"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-700 overflow-hidden shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white uppercase">{review.name}</h4>
                    <p className="text-[11px] text-zinc-400">{review.role}</p>
                    <span className="inline-block text-[#D4F932] text-xs font-bold mt-0.5">
                      {review.rating}
                    </span>
                  </div>
                </div>

                <div className="bg-[#111111] px-3.5 py-2 border border-zinc-800 mb-4 inline-block">
                  <span className="text-[11px] font-mono text-[#D4F932] font-bold uppercase">
                    📈 {review.metric}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase">
                <span>Verified Buyer</span>
                <span>Batch #2026-B</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}