const features = [
  { icon: '🚚', title: 'Fast Delivery', blurb: 'Get your fitness essentials delivered quickly and safely.' },
  { icon: '🛡️', title: 'Quality Assured', blurb: 'Carefully selected nutrition products for your goals.' },
  { icon: '💪', title: 'Goal Focused', blurb: 'Discover products designed around your fitness journey.' },
  { icon: '🔒', title: 'Secure Shopping', blurb: 'Enjoy a simple and secure shopping experience.' },
]

export default function WhyFitbrand() {
  return (
    <section className="bg-[var(--color-card)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm tracking-[0.25em] text-[var(--color-flare)] font-bold">WHY FITBRAND</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black mt-3 text-[var(--color-ink)]">
            BUILT FOR YOUR JOURNEY
          </h2>
          <p className="text-[var(--color-muted)] mt-5 leading-relaxed">
            Everything you need to support your fitness, performance and everyday wellness — all in
            one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-[var(--color-warm-white)] rounded-3xl p-7 hover:bg-[var(--color-ink)] hover:text-white transition duration-300"
            >
              <div className="text-5xl mb-8">{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black">
                {f.title}
              </h3>
              <p className="text-[var(--color-muted)] group-hover:text-white/70 text-sm mt-3">
                {f.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
