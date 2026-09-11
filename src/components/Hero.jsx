export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm tracking-[0.25em] text-[var(--color-flare)] font-bold mb-5">
              NUTRITION FOR YOUR GOALS
            </p>

            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-[var(--color-ink)]"
            >
              FUEL YOUR
              <br />
              <span className="text-[var(--color-flare)]">BEST SELF.</span>
            </h2>

            <p className="mt-7 text-[var(--color-muted)] text-base md:text-lg max-w-xl leading-relaxed">
              Premium sports nutrition and wellness products designed to help you perform better,
              recover faster and feel stronger.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[var(--color-flare)] text-white px-7 py-4 rounded-full font-bold hover:bg-[var(--color-ink)] transition-colors">
                Shop Now →
              </button>
              <button className="border border-[var(--color-ink)] text-[var(--color-ink)] px-7 py-4 rounded-full font-bold hover:bg-[var(--color-ink)] hover:text-white transition-colors">
                Explore Products
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="bg-[var(--color-flare)] rounded-[2rem] h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="text-center text-white">
                <div className="text-[110px] md:text-[140px]">🥤</div>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl md:text-3xl font-black mt-4">
                  TRAIN. PERFORM. RECOVER.
                </h3>
                <p className="mt-3 text-white/80">Built for your fitness journey.</p>
              </div>
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-5 -left-3 md:-left-6 bg-[var(--color-card)] rounded-2xl shadow-lg px-5 py-4">
              <p className="text-xs text-[var(--color-muted)]">TRUSTED BY</p>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-[var(--color-ink)]">
                10K+ FITNESS LOVERS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
