import React from 'react';
import { useCart } from './CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  const links = [
    { name: 'SHOP', href: '#shop' },
    { name: 'PROTEIN', href: '#protein' },
    { name: 'CREATINE', href: '#creatine' },
    { name: 'BUNDLES', href: '#bundles' },
    { name: 'OUR STORY', href: '#our-story' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-[10px] sm:text-xs font-bold tracking-widest text-center py-2 text-lime-400 uppercase border-b border-zinc-800">
        DOCTOR TESTED &nbsp;•&nbsp; LAB TESTED &nbsp;•&nbsp; FSSAI LICENSED &nbsp;•&nbsp; FREE SHIPPING ABOVE ₹999
      </div>

      {/* Main Nav */}
      <nav className="bg-white text-black px-4 sm:px-8 py-4 flex items-center justify-between border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1">
            <span className="bg-black text-white px-1.5 py-0.5 rounded-sm">■</span> FITBRAND
          </a>

          <div className="hidden lg:flex space-x-6 text-xs font-extrabold tracking-wider">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-lime-600 transition">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <button className="text-gray-700 hover:text-black">🔍</button>
          <button className="text-gray-700 hover:text-black">👤</button>
          
          <button onClick={() => setIsCartOpen(true)} className="relative p-1">
            🛍️
            <span className="absolute -top-1 -right-2 bg-lime-400 text-black text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center">
              {totalItems || 0}
            </span>
          </button>

          <a href="#shop" className="hidden sm:inline-block bg-black text-white text-xs font-extrabold px-5 py-2.5 hover:bg-zinc-800 transition uppercase tracking-wider">
            SHOP NOW
          </a>
        </div>
      </nav>
    </header>
  );
}