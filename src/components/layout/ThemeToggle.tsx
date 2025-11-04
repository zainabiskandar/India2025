import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  isScrolled: boolean;
}

export function ThemeToggle({ isScrolled }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
      style={{
        backgroundColor: isScrolled
          ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'var(--subtle)'
          : 'rgba(255, 255, 255, 0.2)',
        color: isScrolled
          ? 'var(--text)'
          : 'rgba(255, 255, 255, 0.9)',
        textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.5)'
      }}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
