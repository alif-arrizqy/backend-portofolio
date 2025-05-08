import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Cek preferensi sistem atau pengaturan tersimpan
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs === 'dark';
      }
      
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return true;
      }
    }
    
    return false; // default light
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Simpan preferensi tema di localStorage
    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  
  return [darkMode, setDarkMode];
};
