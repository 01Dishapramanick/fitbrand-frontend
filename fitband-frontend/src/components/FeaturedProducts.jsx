const products = [
  {
    badge: 'BEST SELLER',
    badgeStyle: 'flare',
    meta: 'Chocolate Fudge · 1kg',
    name: 'Premium Whey Protein Isolate',
    rating: 5,
    reviews: 2847,
    price: '₹2,999',
    originalPrice: '₹3,499',
  },
  {
    badge: 'LAB TESTED',
    badgeStyle: 'dark',
    meta: 'Unflavoured · 300g',
    name: 'Creatine Monohydrate 300g',
    rating: 5,
    reviews: 1923,
    price: '₹999',
    originalPrice: '₹1,299',
  },
  {
    badge: 'NEW',
    badgeStyle: 'dark',
    meta: 'Green Apple · 250g',
    name: 'Pre-Workout Extreme Formula',
    rating: 4,
    reviews: 741,
    price: '₹1,799',
    originalPrice: '₹2,199',
  },
]

function Stars({ rating }) {
  return (
    <span className="text-sm" style={{ color: 'var(--color-flare)' }}>
      {'★'.repeat(rating)}
      <span style={{ color: 'var(--color-line)' }}>{'★'.repeat(5 - rating)}</span>
    </span>
  )
}

export default function FeaturedProducts() {
  return (
    <section className="bg-[var(--color-warm-white)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm tracking-[0.25em] text-[var(--color-muted)] font-bold">OUR PRODUCTS</p>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl font-black mt-3 text-[var(--color-ink)] leading-tight"
            >
              YOUR DAILY
              <br />
              PERFORMANCE STACK
            </h2>
          </div>
          <button className="mt-5 md:mt-0 text-sm font-bold border-b-2 border-[var(--color-ink)] pb-1 w-fit text-[var(--color-ink)]">
            View All Products →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-[var(--color-card)] rounded-2xl overflow-hidden border border-[var(--color-line)]">
              <div className="relative aspect-[4/3] bg-[var(--color-warm-white)] flex items-center justify-center">
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-md ${
                    p.badgeStyle === 'flare' ? 'bg-[var(--color-flare)] text-white' : 'bg-[var(--color-ink)] text-white'
                  }`}
                >
                  {p.badge}
                </span>
                <span className="text-xs text-[var(--color-muted)]">product photo goes here</span>
              </div>

              <div className="p-5">
                <p className="text-xs text-[var(--color-muted)]">{p.meta}</p>
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-lg font-bold mt-1 text-[var(--color-ink)]"
                >
                  {p.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <Stars rating={p.rating} />
                  <span className="text-xs text-[var(--color-muted)]">({p.reviews.toLocaleString()})</span>
                </div>

                <div className="flex items-baseline gap-2 mt-3">
                  <span
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-xl font-black text-[var(--color-ink)]"
                  >
                    {p.price}
                  </span>
                  <span className="text-sm text-[var(--color-muted)] line-through">{p.originalPrice}</span>
                </div>

                <button className="w-full mt-4 bg-[var(--color-ink)] text-white text-sm font-bold py-3 rounded-lg hover:bg-[var(--color-flare)] transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
