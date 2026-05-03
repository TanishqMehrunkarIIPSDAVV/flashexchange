import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'theme-v2';

function getInitialTheme() {
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

  useEffect(() => {
    applyTheme(isDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    }
  }, [isDark]);

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
