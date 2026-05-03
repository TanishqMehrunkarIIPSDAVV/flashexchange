import { useTheme } from "../ThemeProvider";

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 2.8 15.5 5v4.2c0 3.4-2.2 6.4-5.5 7.8-3.3-1.4-5.5-4.4-5.5-7.8V5L10 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m7.8 10.1 1.4 1.4 3-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 2.8 11.5 7l4.2 1.5-4.2 1.5L10 14.2 8.5 10 4.3 8.5 8.5 7 10 2.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function LoginIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M8 4.5H4.8A1.8 1.8 0 0 0 3 6.3v7.4a1.8 1.8 0 0 0 1.8 1.8H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m11 6.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ThemeGlyph({ isDark, className = "h-4 w-4" }) {
  return isDark ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10.5 3a6.8 6.8 0 1 0 6.5 9.1A7 7 0 0 1 10.5 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 3.2V2m0 16v-1.2M4.1 5.1 3.2 4.2m13.6 13.6-.9-.9M16.8 10H18M2 10h1.2m11.7 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Navbar({ open, setOpen }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="site-nav sticky top-0 z-50 w-full border-b px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-[999px] border border-white/10 px-4 py-3 shadow-[0_18px_50px_rgba(2,6,23,0.16)] sm:px-5">
        <div className="flex items-center gap-3 text-left">
          <div className="nav-logo-mark flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white">
            <ShieldIcon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-300/70">
              Dsell.store
            </p>
            <h1 className="brand-title text-sm font-semibold tracking-tight sm:text-base md:text-lg">
              Secure Storefront
            </h1>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {['Merchants', 'Create Store', 'About'].map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="nav-toggle rounded-full px-4 py-2 text-sm font-medium transition hover:scale-[1.02]"
          >
            <span className="inline-flex items-center gap-2">
              <ThemeGlyph isDark={isDark} className="h-4 w-4" />
              {isDark ? "Dark" : "Light"}
            </span>
          </button>

          <button
            type="button"
            className="hidden rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(99,102,241,0.85))] px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(34,211,238,0.18)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            <span className="inline-flex items-center gap-2">
              <LoginIcon className="h-4 w-4" />
              Login with Discord
            </span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-line ${open ? 'rotate-top' : ''}`} />
            <span className={`hamburger-line ${open ? 'fade' : ''}`} />
            <span className={`hamburger-line ${open ? 'rotate-bottom' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-4 flex max-w-5xl flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 md:hidden">
          {['Merchants', 'Create Store', 'About'].map((item) => (
            <a key={item} href="#" className="nav-link text-left text-base">
              {item}
            </a>
          ))}

          <button
            type="button"
            className="rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(99,102,241,0.85))] px-4 py-2 text-sm font-medium text-white"
          >
            <span className="inline-flex items-center gap-2">
              <LoginIcon className="h-4 w-4" />
              Login with Discord
            </span>
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
