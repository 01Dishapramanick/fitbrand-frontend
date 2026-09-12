import React from 'react';

export default function ProductSection({ id, title, subtitle, products }) {
  return (
    <section id={id} className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">{title}</h2>
          <p className="text-slate-400 mt-2">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="h-48 bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-slate-500 font-bold">
                  {product.tag || 'Product Image'}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{product.description}</p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-emerald-400">{product.price}</span>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}