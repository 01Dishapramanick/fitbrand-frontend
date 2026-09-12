import React from 'react';
import { useCart } from './CartContext'; // Updated relative path

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => {
    // Strips out non-numeric characters EXCEPT digits and decimals (handles commas & currency symbols)
    const cleanedPrice = String(item.price).replace(/,/g, '').replace(/[^0-9.]/g, '');
    const priceNum = parseFloat(cleanedPrice) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-zinc-900 text-white h-full shadow-2xl flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <h2 className="text-xl font-black uppercase tracking-wider">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-white font-bold text-lg"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-center py-8 text-sm">Your cart is currently empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-zinc-950 p-3 rounded border border-zinc-800">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                  <p className="text-lime-400 font-mono text-xs">{item.price}</p>
                  
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-zinc-800 hover:bg-zinc-700 px-2 py-0.5 text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-zinc-800 hover:bg-zinc-700 px-2 py-0.5 text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-400 text-xs font-bold"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-zinc-800 space-y-4">
            <div className="flex justify-between text-sm font-extrabold uppercase">
              <span>Total</span>
              <span className="text-lime-400">₹{total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-black py-3 uppercase tracking-wider text-xs transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}