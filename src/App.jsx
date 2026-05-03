import { useState } from "react";
import { useTheme } from "./ThemeProvider";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="site-nav w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 transition-colors duration-300">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div
            className="nav-logo-mark w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white"
          >
            D
          </div>

          <h1
            className="text-lg font-semibold tracking-tight 
      brand-title neon-text"
          >
            Dsell-store
          </h1>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "Products", "Categories", "Contact"].map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="nav-toggle px-3 py-2 rounded-lg text-sm hover:scale-105 transition"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* DISCORD LOGIN */}
          <button
            className="nav-discord hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition"
          >
            🎮 Login with Discord
          </button>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`hamburger-line ${open ? "rotate-top" : ""}`}
            ></span>
            <span className={`hamburger-line ${open ? "fade" : ""}`}></span>
            <span
              className={`hamburger-line ${open ? "rotate-bottom" : ""}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="site-nav mobile-nav md:hidden flex flex-col items-center gap-6 py-6">
          {["Home", "Products", "Categories", "Contact"].map((item) => (
            <a key={item} href="#" className="nav-link text-lg">
              {item}
            </a>
          ))}

          <button className="nav-discord flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition">
            🎮 Login with Discord
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="flex flex-col items-center justify-center py-24 gap-6">
        <h2 className="hero-title text-gray-800 dark:text-gray-200">
          Welcome to{" "}
          <span className="brand-accent neon-text">
            Dsell-store
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-center">
          Build your store with a glowing modern UI ✨
        </p>
      </section>
    </>
  );
}

export default App;
