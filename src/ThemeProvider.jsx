import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

function getInitialTheme() {
  // Check localStorage first
  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
  }
  // Check system preference
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
}

// Apply theme synchronously before React renders
function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function ThemeProvider({ children }) {
  const initialTheme = getInitialTheme();
  const [isDark, setIsDark] = useState(initialTheme);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Also apply immediately to avoid flash
  useEffect(() => {
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
