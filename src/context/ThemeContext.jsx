import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // debug log to verify theme changes
    // eslint-disable-next-line no-console
    console.log('[ThemeContext] theme set to', isDark ? 'dark' : 'light');
    // Development-only visual fallback: set inline body background/color so toggling
    // is visible even if Tailwind styles aren't being applied for some reason.
    try {
      if (process.env.NODE_ENV === 'development') {
        if (isDark) {
          document.body.style.backgroundColor = '#0f172a'; // slate-900
          document.body.style.color = '#e6eef8';
        } else {
          document.body.style.backgroundColor = '#ffffff';
          document.body.style.color = '#0f172a';
        }
      }
    } catch (e) {
      // ignore if DOM not writable
    }
  }, [isDark]);

  const toggleTheme = () => {
    // eslint-disable-next-line no-console
    console.log('[ThemeContext] toggleTheme called. previous:', isDark);
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};