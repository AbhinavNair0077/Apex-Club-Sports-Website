import { useEffect } from 'react';
import { useUIStore } from '../store/uiStore';

export const useTheme = () => {
  const { isDarkMode, toggleTheme } = useUIStore();

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#0B1220';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };
};
