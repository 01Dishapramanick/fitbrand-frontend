// src/ProteinPage.jsx
import React, { useState } from 'react';
import { useCart } from './CartContext'; // Adjust path as needed

export default function ProteinPage() {
  const [activeTab, setActiveTab] = useState('powders');
  const [activeBtn, setActiveBtn] = useState(null);

  // Consume addToCart from your Context
  const { addToCart } = useCart();

  const handleBtnClick = (product) => {
    addToCart(product); // Adds item & opens cart drawer automatically!
    setActiveBtn(product.id);
    setTimeout(() => setActiveBtn(null), 300);
  };

  const proteinProducts = [
    {
      id: 'whey-isolate',
      category: 'powders',
      title: 'WHEY ISOLATE PRO',
      flavor: 'Double Dark Chocolate',
      work: 'Rapid post-workout muscle synthesis & hyper-recovery with minimal fat.',
      price: '$49.99',
      badge: '25G PROTEIN • 0g SUGAR',
      specs: [
        { label: 'PROTEIN', value: '25g' },
        { label: 'BCAAs', value: '5.7g' },
        { label: 'DIGESTION', value: 'Instant' },
      ],
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'plant-matrix',
      category: 'powders',
      title: 'PLANT PROTEIN MATRIX',
      flavor: 'French Vanilla Bean',
      work: 'Organic pea & brown rice blend for lactose-free, smooth daily digestion.',
      price: '$44.99',
      badge: '100% VEGAN • ORGANIC',
      specs: [
        { label: 'PROTEIN', value: '24g' },
        { label: 'EAAs', value: '4.8g' },
        { label: 'SOURCE', value: 'Pea/Rice' },
      ],
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'micellar-casein',
      category: 'powders',
      title: 'NIGHTTIME CASEIN PRO',
      flavor: 'Salted Caramel Crunch',
      work: 'Sustained 7-hour amino acid release to prevent nighttime muscle breakdown.',
      price: '$52.99',
      badge: 'SLOW RELEASE • OVERNIGHT',
      specs: [
        { label: 'PROTEIN', value: '26g' },
        { label: 'RELEASE', value: '7-8 Hours' },
        { label: 'CALCIUM', value: '50% DV' },
      ],
      image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw0122e18e/hi-res/350259_ON_100_WGS_GF_FRENCH_VAN_CREME_2LB_Front.jpg?sw=1500&sh=1500&sm=fit',
    },
    {
      id: 'bar-peanut-butter',
      category: 'bars',
      title: 'CRUNCH BAR: PEANUT FUDGE',
      flavor: 'Roasted Peanut & Cocoa',
      work: 'High-calorie energy fueling bar for long workouts and heavy endurance sets.',
      price: '$3.49',
      badge: '20G PROTEIN • HIGH ENERGY',
      specs: [
        { label: 'PROTEIN', value: '20g' },
        { label: 'FIBER', value: '10g' },
        { label: 'CARBS', value: '18g' },
      ],
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'bar-almond-crunch',
      category: 'bars',
      title: 'LEAN BAR: ALMOND COOKIE DOUGH',
      flavor: 'Almond & Vanilla Chunk',
      work: 'Keto-friendly, low-net-carb snack designed to crush sweet cravings on a cut.',
      price: '$3.29',
      badge: 'LOW NET CARBS • KETO',
      specs: [
        { label: 'PROTEIN', value: '21g' },
        { label: 'NET CARBS', value: '3g' },
        { label: 'SUGAR', value: '1g' },
      ],
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'bar-berry-bliss',
      category: 'bars',
      title: 'ACTIVE BAR: BERRY YOGURT DIPPED',
      flavor: 'Wild Berry & Greek Yogurt',
      work: 'Fast-digesting carbohydrate + protein ratio for rapid mid-workout stamina boost.',
      price: '$3.49',
      badge: 'REAL FRUIT • FAST AMINOS',
      specs: [
        { label: 'PROTEIN', value: '18g' },
        { label: 'REAL FRUIT', value: '100%' },
        { label: 'CALORIES', value: '210' },
      ],
      image: 'https://media.post.rvohealth.io/wp-content/uploads/2022/04/homemade-protein-bar-732x549-thumbnail-732x549.jpg',
    },
  ];

  const filteredProducts = proteinProducts.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans antialiased pb-20">
      
      {/* HEADER SECTION */}
      <section className="bg-[#181818] py-14 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#D4F932] text-xs font-mono tracking-widest uppercase mb-2">
              BIO-AVAILABLE MUSCLE REPAIR
            </p>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              PROTEIN & BARS
            </h1>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Ultra-pure isolate powders and functional protein bars engineered for specific muscle recovery goals.
          </p>
        </div>
      </section>

      {/* TAB CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="inline-flex p-1.5 bg-[#181818] border border-zinc-800 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('powders')}
            className={`px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'powders' ? 'bg-[#D4F932] text-black shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            01. Powders (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bars')}
            className={`px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'bars' ? 'bg-[#D4F932] text-black shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            02. Protein Bars (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'all' ? 'bg-[#D4F932] text-black shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            View All (6)
          </button>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#181818] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 relative group"
            >
              <div>
                <span className="absolute top-4 left-4 z-10 bg-[#111111] text-[#D4F932] text-[10px] font-mono tracking-widest px-2.5 py-1 border border-zinc-800 uppercase">
                  {product.badge}
                </span>

                <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative mt-6 flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-[#D4F932] uppercase font-bold">
                    FLAVOR: {product.flavor}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-white mb-2">
                  {product.title}
                </h3>

                <div className="bg-[#111111] p-3 border border-zinc-800/80 mb-6">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase mb-0.5">TARGET FUNCTION:</p>
                  <p className="text-xs text-zinc-300 leading-normal">{product.work}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-y border-zinc-800 py-3 mb-4">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase">{spec.label}</p>
                      <p className="text-xs font-black text-white mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800 mt-2">
                <span className="text-xl font-black text-white tracking-tight">
                  {product.price}
                </span>

                <button
                  type="button"
                  onClick={() => handleBtnClick(product)}
                  className={`text-xs font-black uppercase tracking-wider px-5 py-3 transition-all duration-200 ${
                    activeBtn === product.id
                      ? 'bg-[#D4F932] text-black scale-95'
                      : 'bg-zinc-200 text-black hover:bg-[#D4F932]'
                  }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}