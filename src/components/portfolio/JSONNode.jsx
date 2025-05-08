import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const JSONNode = ({ data, path = "", depth = 0, searchQuery }) => {
  const [isOpen, setIsOpen] = useState(depth < 1);
  const isObject = data !== null && typeof data === 'object';
  
  // Fungsi untuk memeriksa apakah node cocok dengan query pencarian
  const matchesSearch = (key, value, query) => {
    if (!query) return false;
    query = query.toLowerCase();
    const keyMatches = key.toLowerCase().includes(query);
    const valueMatches = typeof value === 'string' && value.toLowerCase().includes(query);
    return keyMatches || valueMatches;
  };
  
  // Highlight jika key atau value cocok dengan pencarian
  const isHighlighted = path && searchQuery && matchesSearch(path.split('.').pop() || "", data, searchQuery);
  
  // Jika data adalah array atau objek
  if (isObject) {
    const items = Array.isArray(data) ? 
      Object.entries(data).map(([key, value]) => [key, value]) : 
      Object.entries(data);
    
    return (
      <div className={`ml-4 ${isHighlighted ? 'bg-yellow-100 dark:bg-yellow-800' : ''}`}>
        <div 
          className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 
            <ChevronDown className="text-gray-500 w-4 h-4" /> : 
            <ChevronRight className="text-gray-500 w-4 h-4" />
          }
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {path.split('.').pop() || "root"}
          </span>
          <span className="text-gray-600 dark:text-gray-400 ml-1">
            {Array.isArray(data) ? `[${data.length}]` : "{...}"}
          </span>
        </div>
        
        {isOpen && (
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-2">
            {items.map(([key, value], index) => (
              <JSONNode 
                key={`${path}.${key}-${index}`} 
                data={value} 
                path={`${path}${path ? '.' : ''}${key}`} 
                depth={depth + 1}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // Untuk nilai primitif (string, number, boolean, null)
  return (
    <div className={`ml-4 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 px-1 ${isHighlighted ? 'bg-yellow-100 dark:bg-yellow-800' : ''}`}>
      <span className="text-blue-600 dark:text-blue-400 font-medium">
        {path.split('.').pop()}
      </span>
      <span className="ml-1 text-gray-800 dark:text-gray-300">:</span>
      <span className={`ml-1 ${
        typeof data === 'string' ? 'text-green-600 dark:text-green-400' : 
        typeof data === 'number' ? 'text-purple-600 dark:text-purple-400' : 
        typeof data === 'boolean' ? 'text-red-600 dark:text-red-400' : 
        'text-gray-600 dark:text-gray-400'
      }`}>
        {
          data === null ? "null" :
          typeof data === 'string' ? `"${data}"` :
          String(data)
        }
      </span>
    </div>
  );
};

export default JSONNode;