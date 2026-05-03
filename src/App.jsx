import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">React Vite</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
          >
            {isDark ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      <section id="center" className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="hero mb-8">
          <img src={heroImg} className="base w-40 h-44 mb-4" alt="" />
          <img src={reactLogo} className="framework absolute w-20 h-20" alt="React logo" />
          <img src={viteLogo} className="vite absolute w-20 h-20" alt="Vite logo" />
        </div>
        <div className="mb-8">
          <h1 className="text-5xl lg:text-3xl font-bold mb-4">Get started</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Edit <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-300"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks border-y border-gray-200 dark:border-gray-700 my-8"></div>

      <section id="next-steps" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
        <div id="docs" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg className="icon w-8 h-8 mb-4 mx-auto text-purple-600 dark:text-purple-400" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Your questions, answered</p>
          <ul className="space-y-2">
            <li>
              <a href="https://vite.dev/" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline">
                <img className="logo w-5 h-5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline">
                <img className="button-icon w-5 h-5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg className="icon w-8 h-8 mb-4 mx-auto text-purple-600 dark:text-purple-400" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Connect with us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Join the Vite community</p>
          <ul className="grid grid-cols-2 gap-2">
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm">
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm">
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm">
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm">
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks border-t border-gray-200 dark:border-gray-700 my-8"></div>
      <section id="spacer" className="flex-1"></section>
    </>
  )
}

export default App
