import React from 'react';
import { Code, FileText } from 'lucide-react';

const DevModeToggle = ({ isActive, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className={`p-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
          : 'hover:bg-gray-200 dark:hover:bg-gray-800'
      }`}
      aria-label="Toggle developer mode"
    >
      {isActive ? 
        <FileText className="w-5 h-5" /> : 
        <Code className="w-5 h-5" />
      }
      <span className="ml-2 text-sm hidden md:inline">
        {isActive ? 'Pretty View' : 'Developer Mode'}
      </span>
    </button>
  );
};

export default DevModeToggle;