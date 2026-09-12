import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import CartDrawer from './CartDrawer';
import Navbar from './components/Navbar';

import HomePage from './components/HomePage';
import ProteinPage from './ProteinPage';
import CreatinePage from './CreatinePage';
import BundlesPage from './BundlesPage';
import OurStoryPage from './OurstoryPage';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-zinc-950 text-white font-sans">
        <Navbar />
        <CartDrawer />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/protein" element={<ProteinPage />} />
          <Route path="/creatine" element={<CreatinePage />} />
          <Route path="/bundles" element={<BundlesPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}