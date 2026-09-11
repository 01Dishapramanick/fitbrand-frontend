import React, { useState } from 'react';

function App() {
  const [selectedFlavor, setSelectedFlavor] = useState('Chocolate Fudge');
  const [activeBtn, setActiveBtn] = useState(null);

  // Helper function to manage brief click color transitions
  const handleBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setTimeout(() => setActiveBtn(null), 300);
  };

  const flavors = [
    { id: 'Chocolate Fudge', label: 'Chocolate Fudge' },
    { id: 'Vanilla Ice Cream', label: 'Vanilla Ice Cream' },
    { id: 'Strawberry Burst', label: 'Strawberry Burst' },
    { id: 'Mango Cream', label: 'Mango Cream' },
    { id: 'Unflavoured', label: 'Unflavoured' },
    { id: 'Cookies & Cream', label: 'Cookies & Cream' },
  ];

  const qualityPoints = [
    {
      title: 'FSSAI License & Compliance',
      description: 'Manufactured in FSSAI-approved facilities (Lic. No. 10019022000977) strictly adhering to food safety standards.'
    },
    {
      title: 'Heavy Metal Testing',
      description: 'Every batch tested for arsenic, lead, cadmium, and mercury at NABL-accredited labs.'
    },
    {
      title: 'Microbial Safety',
      description: 'Tested for E. coli, Salmonella, Staphylococcus, and total plate count.'
    },
    {
      title: 'Banned Substance Screening',
      description: 'WADA-compliant screening for 200+ prohibited substances.'
    },
    {
      title: 'Declared vs. Actual Protein',
      description: 'Third-party verified that you get exactly what the label says.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111111] font-sans antialiased">

      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#111111] text-[#D4F932] text-[11px] font-mono tracking-widest uppercase py-2 px-4 text-center border-b border-gray-800">
        DOCTOR TESTED &nbsp;•&nbsp; LAB TESTED &nbsp;•&nbsp; FSSAI LICENSED &nbsp;•&nbsp; FREE SHIPPING ABOVE ₹999
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#F4F3EF] border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2 text-xl font-black tracking-tighter uppercase">
              <span className="w-4 h-4 bg-[#111111] inline-block"></span>
              FITBRAND
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-gray-700">
              <a href="#" className="hover:text-black transition">Shop</a>
              <a href="#" className="hover:text-black transition">Protein</a>
              <a href="#" className="hover:text-black transition">Creatine</a>
              <a href="#" className="hover:text-black transition">Bundles</a>
              <a href="#" className="hover:text-black transition">Our Story</a>
            </div>
          </div>

          {/* Action Icons & CTA */}
          <div className="flex items-center gap-6">
            <button type="button" className="text-gray-700 hover:text-black text-sm">🔍</button>
            <button type="button" className="text-gray-700 hover:text-black text-sm">👤</button>
            <button type="button" className="relative text-gray-700 hover:text-black text-sm">
              🛍️
              <span className="absolute -top-2 -right-2 bg-[#D4F932] text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button
              type="button"
              onClick={() => handleBtnClick('nav-cta')}
              className={`hidden sm:block text-xs font-bold tracking-wider uppercase px-5 py-2.5 transition-all duration-200 ${
                activeBtn === 'nav-cta'
                  ? 'bg-[#FF5722] text-white scale-95'
                  : 'bg-[#111111] text-white hover:bg-black'
              }`}
            >
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION (UPDATED FROM FIGMA DESIGN) ================= */}
      <section className="bg-[#111111] text-white py-24 md:py-32 border-b border-gray-800 text-center relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-[#D4F932] text-xs font-mono tracking-[0.25em] font-bold uppercase mb-4">
            PREMIUM PERFORMANCE SUPPLEMENTS
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tight uppercase mb-6">
            FUEL YOUR<br />NEXT SESSION.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-medium leading-relaxed mb-10">
            Lab-tested, FSSAI compliant, and made for athletes who don't compromise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleBtnClick('hero-all-supps')}
              className={`text-xs font-black tracking-wider uppercase px-8 py-4 flex items-center gap-2 transition-all duration-200 ${
                activeBtn === 'hero-all-supps'
                  ? 'bg-[#FF5722] text-white scale-95'
                  : 'bg-[#D4F932] text-black hover:bg-[#c0e822]'
              }`}
            >
              SHOP ALL SUPPLEMENTS <span>→</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleBtnClick('hero-verify-batch')}
              className={`border text-xs font-black tracking-wider uppercase px-8 py-4 transition-all duration-200 ${
                activeBtn === 'hero-verify-batch'
                  ? 'bg-[#FF5722] text-white border-[#FF5722] scale-95'
                  : 'border-gray-700 text-white bg-transparent hover:border-white'
              }`}
            >
              VERIFY A BATCH
            </button>
          </div>
        </div>
      </section>

      {/* ================= FLAVOR SELECTOR SECTION ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Options */}
            <div>
              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                PICK YOUR FLAVOR
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6">
                FIND YOUR<br />FAVOURITE.
              </h2>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
                Every flavor is crafted to taste great without compromising on nutrition. No artificial junk — just clean, delicious protein.
              </p>

              {/* Flavor Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
                {flavors.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFlavor(item.id)}
                    type="button"
                    className={`border text-xs py-3 px-3 text-center transition-all duration-200 ${
                      selectedFlavor === item.id
                        ? 'bg-[#D4F932] text-black font-extrabold border-[#D4F932] shadow-md scale-105'
                        : 'bg-[#1A1A1A] text-gray-300 border-gray-800 hover:border-gray-500 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#261A13] p-8 border border-amber-950/40">
              <div className="aspect-[4/3] bg-[#E8DDD3] mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=85"
                  alt="Whey Protein Powder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#181818] p-5 flex items-center justify-between border border-gray-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedFlavor}</h3>
                  <p className="text-xs text-gray-400 mt-1">Premium Whey Protein Isolate • 1kg</p>
                  <p className="text-lg font-black text-white mt-2">₹2,999</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleBtnClick('add-cart')}
                  className={`text-xs font-black tracking-wider uppercase px-6 py-3 transition-all duration-200 ${
                    activeBtn === 'add-cart'
                      ? 'bg-[#FF5722] text-white scale-95'
                      : 'bg-[#D4F932] text-black hover:bg-[#c0e822]'
                  }`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= QUALITY & FSSAI PROMISE SECTION ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image */}
            <div className="relative">
              <div className="bg-gray-900 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl border border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85"
                  alt="Lab Testing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#D4F932]/40 text-[#D4F932] px-3 py-1.5 rounded-full text-[11px] font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4F932] animate-pulse"></span>
                  FSSAI LICENSED & LAB TESTED
                </div>
              </div>
            </div>

            {/* Right List */}
            <div>
              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                OUR PROMISE
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6 leading-none">
                TESTED BEFORE<br />IT REACHES YOU.
              </h2>

              <div className="space-y-5 mb-8 max-w-lg">
                {qualityPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#D4F932] text-black flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleBtnClick('promise-verify')}
                  className={`text-xs font-black tracking-wider uppercase px-7 py-3.5 transition-all duration-200 ${
                    activeBtn === 'promise-verify'
                      ? 'bg-[#FF5722] text-white scale-95'
                      : 'bg-[#D4F932] text-black hover:bg-[#c0e822]'
                  }`}
                >
                  VERIFY YOUR BATCH
                </button>
                
                <button
                  type="button"
                  onClick={() => handleBtnClick('promise-learn')}
                  className={`border text-xs font-bold tracking-wider uppercase px-7 py-3.5 transition-all duration-200 ${
                    activeBtn === 'promise-learn'
                      ? 'bg-white text-black border-white scale-95'
                      : 'border-gray-700 text-white hover:border-white'
                  }`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SUBSCRIBE & SAVE SECTION ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                SUBSCRIBE & SAVE
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6">
                NEVER<br />RUN OUT.
              </h2>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
                Your supplements, delivered exactly when you need them. Set your schedule, save on every order.
              </p>

              {/* Perks List */}
              <div className="space-y-6 mb-8 max-w-md">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#1E1E1E] border border-gray-800 p-2 text-[#D4F932] text-xs font-bold">%</div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">10% OFF EVERY ORDER</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Exclusive subscriber pricing on every delivery</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#1E1E1E] border border-gray-800 p-2 text-[#D4F932] text-xs font-bold">🔄</div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">AUTO DELIVERY</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Monthly, bi-monthly or custom schedule</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#1E1E1E] border border-gray-800 p-2 text-[#D4F932] text-xs font-bold">✕</div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">CANCEL ANYTIME</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Zero commitment. Pause or cancel with one click</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleBtnClick('sub-start')}
                className={`text-xs font-black tracking-wider uppercase px-8 py-4 transition-all duration-200 ${
                  activeBtn === 'sub-start'
                    ? 'bg-[#FF5722] text-white scale-95'
                    : 'bg-[#D4F932] text-black hover:bg-[#c0e822]'
                }`}
              >
                START SUBSCRIPTION
              </button>
            </div>

            {/* Right Banner Image */}
            <div className="relative">
              <div className="bg-black aspect-[4/3] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"
                  alt="Gym Workout"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-7xl md:text-8xl font-black text-[#D4F932] tracking-tighter">10%</span>
                  <span className="text-xl font-black tracking-widest uppercase text-white mt-1">ALWAYS OFF</span>
                  <span className="text-xs font-mono text-gray-300 mt-1">for subscribers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= NUTRITION FACTS SECTION ================= */}
      <section className="bg-[#F4F3EF] py-20 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column */}
            <div>
              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-3">
                TRANSPARENCY FIRST
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6 leading-tight">
                KNOW WHAT<br />YOU'RE TAKING.
              </h2>
              <p className="text-gray-600 text-sm max-w-md leading-relaxed mb-8">
                We list every ingredient with exact amounts. No proprietary blends, no hidden fillers, no surprises.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-4 bg-white border border-gray-300 p-4">
                  <div className="bg-[#111111] text-[#D4F932] font-black text-xs px-2 py-1 tracking-wider">DOCTOR</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-black">DOCTOR TESTED</div>
                    <div className="text-[10px] font-mono text-gray-500">MEDICAL GRADE</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 bg-white border border-gray-300 p-4">
                  <div className="bg-[#111111] text-[#D4F932] font-black text-xs px-2 py-1 tracking-wider">FSSAI</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-black">FSSAI LICENSED</div>
                    <div className="text-[10px] font-mono text-gray-500">LIC. 10019022000977</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Nutrition Label */}
            <div className="bg-white border-2 border-black p-6 font-sans text-black shadow-lg max-w-md ml-auto w-full">
              <h3 className="text-2xl font-black uppercase tracking-tight pb-2 border-b-4 border-black">
                Supplement Facts
              </h3>

              <div className="flex justify-between text-xs font-bold py-1 border-b border-black">
                <span>Serving Size</span>
                <span>33g (1 scoop)</span>
              </div>
              <div className="flex justify-between text-xs font-bold py-1 border-b-4 border-black">
                <span>Servings Per Container</span>
                <span>30</span>
              </div>

              <div className="text-[10px] font-bold text-right py-1 border-b border-black text-gray-600">
                % Daily Value
              </div>

              <div className="flex justify-between text-xs font-bold py-1 border-b border-gray-200">
                <span>Calories</span>
                <span>130</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200">
                <span><strong>Total Fat</strong> 2g</span>
                <span>3%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200 pl-3 text-gray-700">
                <span>Saturated Fat 0.5g</span>
                <span>3%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200">
                <span><strong>Total Carbohydrate</strong> 3g</span>
                <span>1%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200 pl-3 text-gray-700">
                <span>Dietary Fiber 0g</span>
                <span>0%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200 pl-3 text-gray-700">
                <span>Total Sugars 1g</span>
                <span></span>
              </div>
              <div className="flex justify-between text-xs font-black py-1.5 border-b border-black bg-[#D4F932]/30 px-1">
                <span>Protein 25g</span>
                <span>50%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-gray-200">
                <span>Sodium 160mg</span>
                <span>7%</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b-4 border-black">
                <span>Calcium 150mg</span>
                <span>12%</span>
              </div>

              <p className="text-[9px] text-gray-600 mt-3 uppercase leading-normal">
                <strong>INGREDIENTS:</strong> Whey Protein Isolate, Sunflower Lecithin, Natural Flavours, Cocoa Powder, Xanthan Gum, Sucralose.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REVIEWS / PROOF SECTION ================= */}
      <section className="bg-[#F4F3EF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono tracking-widest text-gray-500 uppercase mb-2">
            REAL PEOPLE.
          </p>
          <h2 className="text-center text-4xl sm:text-5xl font-black tracking-tight uppercase mb-12">
            REAL PROGRESS.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Review 1 */}
            <div className="relative bg-black text-white p-8 aspect-[16/10] flex flex-col justify-between overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85"
                alt="Arjun Mehta"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div className="relative z-10">
                <span className="bg-[#D4F932] text-black text-[10px] font-black uppercase px-2 py-1 inline-block mb-3">
                  +8KG MUSCLE IN 6 MONTHS
                </span>
                <p className="text-sm font-medium leading-relaxed max-w-md">
                  "I've tried every whey on the market. FITBRAND is the only one that actually matches what's on the label — verified it myself."
                </p>
              </div>
              <div className="relative z-10 border-t border-gray-700/60 pt-3 mt-4">
                <h4 className="text-sm font-bold">Arjun Mehta</h4>
                <p className="text-xs text-gray-400">Competitive Powerlifter, Mumbai</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="relative bg-black text-white p-8 aspect-[16/10] flex flex-col justify-between overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=85"
                alt="Priya Sharma"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div className="relative z-10">
                <span className="bg-[#D4F932] text-black text-[10px] font-black uppercase px-2 py-1 inline-block mb-3">
                  PR'D EVERY LIFT THIS QUARTER
                </span>
                <p className="text-sm font-medium leading-relaxed max-w-md">
                  "The COA transparency sold me. I know exactly what I'm putting into my body. The chocolate flavor actually tastes incredible."
                </p>
              </div>
              <div className="relative z-10 border-t border-gray-700/60 pt-3 mt-4">
                <h4 className="text-sm font-bold">Priya Sharma</h4>
                <p className="text-xs text-gray-400">CrossFit Athlete, Bengaluru</p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-white border border-gray-300 grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200 text-center py-6">
            <div className="p-4">
              <div className="text-2xl font-black">50,000+</div>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Happy Customers</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-black">4.9 / 5</div>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Average Rating</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-black">98%</div>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Would Recommend</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-black">2,847</div>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Verified Reviews</div>
            </div>
            <div className="p-4 col-span-2 md:col-span-1">
              <div className="text-2xl font-black">12+</div>
              <div className="text-[11px] font-medium text-gray-500 mt-1">Lab Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER (UPDATED FROM FIGMA DESIGN) ================= */}
      <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
            {/* Brand Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 font-black text-white uppercase text-base mb-4">
                <span className="w-4 h-4 bg-[#D4F932] inline-block"></span> FITBRAND
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Premium performance supplements. Independently tested. Built for serious athletes.
              </p>
              <div className="text-[10px] font-mono text-gray-500">
                FSSAI LIC. 10019022000977
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">SHOP</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition">Protein</a></li>
                <li><a href="#" className="hover:text-white transition">Creatine</a></li>
                <li><a href="#" className="hover:text-white transition">Pre-Workout</a></li>
                <li><a href="#" className="hover:text-white transition">Bundles</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">HELP</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              </ul>
            </div>

            {/* Trust Column */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">TRUST</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition">Verify Batch</a></li>
                <li><a href="#" className="hover:text-white transition">FSSAI License</a></li>
                <li><a href="#" className="hover:text-white transition">Certificate of Analysis</a></li>
                <li><a href="#" className="hover:text-white transition">Lab Partners</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">LEGAL</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-gray-500">
            © 2026 FITBRAND Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;