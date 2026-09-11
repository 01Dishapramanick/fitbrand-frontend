const goals = [
  { icon: '💪', title: 'Muscle & Strength', blurb: 'Protein & performance' },
  { icon: '⚡', title: 'Energy & Performance', blurb: 'Fuel your workouts' },
  { icon: '🔄', title: 'Recovery', blurb: 'Recover & rebuild' },
  { icon: '🌱', title: 'Daily Wellness', blurb: 'Everyday nutrition' },
]

export default function ShopByGoal() {
  return (
    <section className="bg-[var(--color-card)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm tracking-[0.25em] text-[var(--color-flare)] font-bold">FIND YOUR FIT</p>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black mt-3 text-[var(--color-ink)]">
              SHOP BY GOAL
            </h2>
          </div>
          <button className="mt-5 md:mt-0 text-sm font-bold border-b-2 border-[var(--color-ink)] pb-1 w-fit text-[var(--color-ink)]">
            View All →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {goals.map((g) => (
            <div
              key={g.title}
              className="group bg-[var(--color-warm-white)] rounded-3xl p-7 h-[250px] flex flex-col justify-between hover:bg-[var(--color-flare)] hover:text-white transition duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl">{g.icon}</span>
                <span className="text-2xl opacity-50 group-hover:opacity-100">↗</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black">
                  {g.title}
                </h3>
                <p className="text-sm mt-2 opacity-60">{g.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
