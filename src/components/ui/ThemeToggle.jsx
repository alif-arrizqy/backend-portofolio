import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useTheme();
  
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? 
        <Sun className="w-5 h-5" /> : 
        <Moon className="w-5 h-5" />
      }
    </button>
  );
};

export default ThemeToggle;