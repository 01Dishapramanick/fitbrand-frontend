import React, { useState } from "react";

export default function HomePage() {
  const [selectedFlavor, setSelectedFlavor] = useState("Chocolate Fudge");
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (btnId) => {
    setActiveBtn(btnId);

    setTimeout(() => {
      setActiveBtn(null);
    }, 300);
  };

  const flavors = [
    { id: "Chocolate Fudge", label: "Chocolate Fudge" },
    { id: "Vanilla Ice Cream", label: "Vanilla Ice Cream" },
    { id: "Strawberry Burst", label: "Strawberry Burst" },
    { id: "Mango Cream", label: "Mango Cream" },
    { id: "Unflavoured", label: "Unflavoured" },
    { id: "Cookies & Cream", label: "Cookies & Cream" },
  ];

  const qualityPoints = [
    {
      title: "FSSAI License & Compliance",
      description:
        "Manufactured in FSSAI-approved facilities (Lic. No. 10019022000977) strictly adhering to food safety standards.",
    },
    {
      title: "Heavy Metal Testing",
      description:
        "Every batch tested for arsenic, lead, cadmium, and mercury at NABL-accredited labs.",
    },
    {
      title: "Microbial Safety",
      description:
        "Tested for E. coli, Salmonella, Staphylococcus, and total plate count.",
    },
    {
      title: "Banned Substance Screening",
      description:
        "WADA-compliant screening for 200+ prohibited substances.",
    },
    {
      title: "Declared vs. Actual Protein",
      description:
        "Third-party verified that you get exactly what the label says.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111111] font-sans antialiased">

      {/* ================= HERO ================= */}
      <section className="bg-[#111111] text-white py-24 md:py-32 border-b border-gray-800 text-center relative overflow-hidden">

        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">

          <p className="text-[#D4F932] text-xs font-mono tracking-[0.25em] font-bold uppercase mb-4">
            PREMIUM PERFORMANCE SUPPLEMENTS
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tight uppercase mb-6">
            BUILT FOR YOUR
            <br />
            NEXT LEVEL.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-medium leading-relaxed mb-10">
            Lab-tested, FSSAI compliant, and made for athletes who don't
            compromise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <button
              type="button"
              onClick={() => handleBtnClick("hero-all-supps")}
              className={`text-xs font-black tracking-wider uppercase px-8 py-4 transition-all ${
                activeBtn === "hero-all-supps"
                  ? "bg-[#FF5722] text-white scale-95"
                  : "bg-[#D4F932] text-black hover:bg-white"
              }`}
            >
              SHOP ALL SUPPLEMENTS →
            </button>

            <button
              type="button"
              onClick={() => handleBtnClick("hero-verify-batch")}
              className={`border text-xs font-black tracking-wider uppercase px-8 py-4 transition-all ${
                activeBtn === "hero-verify-batch"
                  ? "bg-[#FF5722] text-white border-[#FF5722]"
                  : "border-gray-700 text-white hover:border-white"
              }`}
            >
              VERIFY A BATCH
            </button>
          </div>
        </div>
      </section>

      {/* ================= FLAVOR SELECTOR ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                PICK YOUR FLAVOR
              </p>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6">
                FIND YOUR
                <br />
                FAVOURITE.
              </h2>

              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
                Every flavor is crafted to taste great without compromising
                on nutrition.
              </p>

              {/* FLAVOR BUTTONS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">

                {flavors.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedFlavor(item.id)}
                    className={`border text-xs py-3 px-3 transition-all ${
                      selectedFlavor === item.id
                        ? "bg-[#D4F932] text-black font-extrabold border-[#D4F932] scale-105"
                        : "bg-[#1A1A1A] text-gray-300 border-gray-800 hover:border-gray-500"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT CARD */}
            <div className="bg-[#261A13] p-8 border border-amber-950/40">

              <div className="aspect-[4/3] bg-[#E8DDD3] mb-6 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=85"
                  alt="Whey Protein Powder"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="bg-[#181818] p-5 flex items-center justify-between border border-gray-800 gap-4">

                <div>
                  <h3 className="text-xl font-bold">
                    {selectedFlavor}
                  </h3>

                  <p className="text-xs text-gray-400 mt-1">
                    Premium Whey Protein Isolate • 1kg
                  </p>

                  <p className="text-lg font-black mt-2">
                    ₹2,999
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleBtnClick("add-cart")}
                  className={`text-xs font-black uppercase px-6 py-3 whitespace-nowrap transition-all ${
                    activeBtn === "add-cart"
                      ? "bg-[#FF5722] text-white scale-95"
                      : "bg-[#D4F932] text-black hover:bg-white"
                  }`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LAB IMAGE */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800">

              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85"
                alt="Laboratory testing"
                className="w-full h-full object-cover"
              />

            </div>

            {/* QUALITY CONTENT */}
            <div>

              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                OUR PROMISE
              </p>

              <h2 className="text-4xl sm:text-5xl font-black uppercase mb-6">
                TESTED BEFORE
                <br />
                IT REACHES YOU.
              </h2>

              <div className="space-y-5 mb-8">

                {qualityPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >

                    <div className="w-5 h-5 min-w-5 rounded-full bg-[#D4F932] text-black flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase">
                        {item.title}
                      </h3>

                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

              <button
                type="button"
                onClick={() => handleBtnClick("promise-verify")}
                className={`text-xs font-black uppercase px-7 py-3.5 transition-all ${
                  activeBtn === "promise-verify"
                    ? "bg-[#FF5722] text-white scale-95"
                    : "bg-[#D4F932] text-black hover:bg-white"
                }`}
              >
                VERIFY YOUR BATCH
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SUBSCRIBE ================= */}
      <section className="bg-[#111111] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* SUBSCRIPTION CONTENT */}
            <div>

              <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-3">
                SUBSCRIBE & SAVE
              </p>

              <h2 className="text-4xl sm:text-5xl font-black uppercase mb-6">
                NEVER
                <br />
                RUN OUT.
              </h2>

              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
                Your supplements, delivered exactly when you need them.
              </p>

              <div className="space-y-6 mb-8">

                <div>
                  <h4 className="text-xs font-bold">
                    10% OFF EVERY ORDER
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    Exclusive subscriber pricing
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold">
                    AUTO DELIVERY
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    Monthly, bi-monthly or custom schedule
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold">
                    CANCEL ANYTIME
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    Pause or cancel with one click
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() => handleBtnClick("sub-start")}
                className={`text-xs font-black uppercase px-8 py-4 transition-all ${
                  activeBtn === "sub-start"
                    ? "bg-[#FF5722] text-white scale-95"
                    : "bg-[#D4F932] text-black hover:bg-white"
                }`}
              >
                START SUBSCRIPTION
              </button>

            </div>

            {/* SUBSCRIPTION IMAGE */}
            <div className="aspect-[4/3] overflow-hidden relative">

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"
                alt="Gym workout"
                className="w-full h-full object-cover grayscale opacity-80"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">

                <span className="text-7xl font-black text-[#D4F932]">
                  10%
                </span>

                <span className="text-xl font-black text-white">
                  ALWAYS OFF
                </span>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NUTRITION ================= */}
      <section className="bg-[#F4F3EF] py-20 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* TEXT */}
            <div>

              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-3">
                TRANSPARENCY FIRST
              </p>

              <h2 className="text-4xl sm:text-5xl font-black uppercase mb-6">
                KNOW WHAT
                <br />
                YOU'RE TAKING.
              </h2>

              <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                We list every ingredient with exact amounts. No proprietary
                blends, no hidden fillers, no surprises.
              </p>

            </div>

            {/* SUPPLEMENT FACTS CARD */}
            <div className="bg-white border-2 border-black p-6 text-black max-w-md ml-auto w-full">

              <h3 className="text-2xl font-black uppercase pb-2 border-b-4 border-black">
                Supplement Facts
              </h3>

              <div className="flex justify-between text-xs font-bold py-2 border-b">
                <span>Serving Size</span>
                <span>33g (1 scoop)</span>
              </div>

              <div className="flex justify-between text-xs font-bold py-2 border-b-4 border-black">
                <span>Servings Per Container</span>
                <span>30</span>
              </div>

              <div className="flex justify-between text-xs py-2 border-b">
                <span>Calories</span>
                <span>130</span>
              </div>

              <div className="flex justify-between text-xs font-bold py-2 bg-[#D4F932]/30">
                <span>Protein 25g</span>
                <span>50%</span>
              </div>

              <p className="text-[9px] text-gray-600 mt-3 uppercase leading-relaxed">
                <strong>INGREDIENTS:</strong> Whey Protein Isolate, Sunflower
                Lecithin, Natural Flavours, Cocoa Powder, Xanthan Gum,
                Sucralose.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="bg-[#F4F3EF] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-xs font-mono text-gray-500 uppercase">
            REAL PEOPLE.
          </p>

          <h2 className="text-center text-4xl sm:text-5xl font-black uppercase mb-12">
            REAL PROGRESS.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* REVIEW 1 */}
            <div className="bg-black text-white p-8">

              <div className="text-[#D4F932] text-sm mb-5">
                ★★★★★
              </div>

              <p className="text-sm leading-relaxed">
                "I've tried every whey on the market. FITBRAND is the only one
                that actually matches what's on the label."
              </p>

              <h4 className="text-sm font-bold mt-8">
                Arjun Mehta
              </h4>

              <p className="text-xs text-gray-400">
                Competitive Powerlifter, Mumbai
              </p>

            </div>

            {/* REVIEW 2 */}
            <div className="bg-black text-white p-8">

              <div className="text-[#D4F932] text-sm mb-5">
                ★★★★★
              </div>

              <p className="text-sm leading-relaxed">
                "The COA transparency sold me. I know exactly what I'm putting
                into my body."
              </p>

              <h4 className="text-sm font-bold mt-8">
                Priya Sharma
              </h4>

              <p className="text-xs text-gray-400">
                CrossFit Athlete, Bengaluru
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* BRAND */}
            <div>

              <div className="font-black uppercase mb-4 flex items-center">

                <span className="w-4 h-4 bg-[#D4F932] inline-block mr-2"></span>

                FITBRAND

              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                Premium performance supplements. Independently tested.
              </p>

            </div>

            {/* SHOP */}
            <div>

              <h4 className="text-xs font-bold mb-4">
                SHOP
              </h4>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Protein
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Creatine
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Bundles
                </p>
              </div>

            </div>

            {/* HELP */}
            <div>

              <h4 className="text-xs font-bold mb-4">
                HELP
              </h4>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Contact Us
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Shipping Policy
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  FAQs
                </p>
              </div>

            </div>

            {/* TRUST */}
            <div>

              <h4 className="text-xs font-bold mb-4">
                TRUST
              </h4>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Verify Batch
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  FSSAI License
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Lab Partners
                </p>
              </div>

            </div>

            {/* LEGAL */}
            <div>

              <h4 className="text-xs font-bold mb-4">
                LEGAL
              </h4>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Privacy Policy
                </p>

                <p className="text-xs text-gray-400 hover:text-white cursor-pointer">
                  Terms of Service
                </p>
              </div>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            © 2026 FITBRAND Inc. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}