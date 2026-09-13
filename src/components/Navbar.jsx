// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

  // Trigger search when user presses Enter
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/protein?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#111111] text-gray-400 text-[11px] font-mono tracking-widest uppercase py-2.5 px-4 text-center border-b border-gray-800">
        DOCTOR TESTED &nbsp;•&nbsp; LAB TESTED &nbsp;•&nbsp; FSSAI LICENSED &nbsp;•&nbsp; FREE SHIPPING ABOVE ₹999
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#181818] border-b border-gray-800 sticky top-0 z-50 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo & Navigation */}
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-black tracking-tighter uppercase text-white hover:text-gray-300 transition">
              <span className="w-3.5 h-3.5 bg-[#D4F932] inline-block"></span>
              FITBRAND
            </Link>

            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-gray-300">
              <Link to="/" className="hover:text-white transition-colors duration-200">Shop</Link>
              <Link to="/protein" className="hover:text-white transition-colors duration-200">Protein</Link>
              <Link to="/creatine" className="hover:text-white transition-colors duration-200">Creatine</Link>
              <Link to="/bundles" className="hover:text-white transition-colors duration-200">Bundles</Link>
              <Link to="/our-story" className="hover:text-white transition-colors duration-200">Our Story</Link>
            </div>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-4 sm:gap-5">
            
            {/* Working Search Form */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <form 
                  onSubmit={handleSearchSubmit} 
                  className="flex items-center bg-[#111111] border border-gray-700 overflow-hidden transition-all duration-300 w-44 sm:w-60"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search supplements..."
                    autoFocus
                    className="bg-transparent text-xs text-white px-3 py-1.5 outline-none w-full placeholder-gray-500 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="px-2.5 text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    ✕
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 text-gray-300 hover:text-[#D4F932] transition-colors relative group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="p-1.5 text-gray-300 hover:text-[#D4F932] transition-colors relative group flex items-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4F932] rounded-full ring-2 ring-[#181818]" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#111111] border border-gray-800 shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-800">
                    <p className="text-xs font-bold text-white uppercase">Athlete Account</p>
                    <p className="text-[10px] text-gray-400 font-mono">VERIFIED MEMBER</p>
                  </div>
                  <Link to="/orders" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-xs text-gray-300 hover:bg-[#181818] hover:text-[#D4F932] uppercase font-mono">My Orders</Link>
                  <Link to="/settings" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-xs text-gray-300 hover:bg-[#181818] hover:text-[#D4F932] uppercase font-mono">Settings</Link>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-gray-300 hover:text-[#D4F932] transition-colors relative group flex items-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              <span className="absolute -top-1.5 -right-2 bg-[#D4F932] text-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-[#181818]">
                {totalItems}
              </span>
            </button>

            {/* Shop Now Button */}
            <Link
              to="/protein"
              className="hidden sm:block text-xs font-bold tracking-wider uppercase px-5 py-2.5 bg-gray-200 text-black hover:bg-[#D4F932] transition-all duration-200 ml-2"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}