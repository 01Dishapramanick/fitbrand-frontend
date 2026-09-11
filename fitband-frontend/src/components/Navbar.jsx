const links = ['Home', 'Shop', 'Categories', 'About']

export default function Navbar() {
  return (
    <nav className="bg-[var(--color-card)] border-b border-[var(--color-line)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-black text-[var(--color-ink)]">
          FIT<span className="text-[var(--color-flare)]">BRAND</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-flare)] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <button aria-label="Search" className="text-[var(--color-ink)] hover:text-[var(--color-flare)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button aria-label="Cart" className="relative text-[var(--color-ink)] hover:text-[var(--color-flare)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.5 12.5h11l2-8h-14.5" />
            </svg>
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--color-flare)] text-[10px] text-white flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
