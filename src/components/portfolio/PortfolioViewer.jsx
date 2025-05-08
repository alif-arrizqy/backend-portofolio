import { useState } from 'react';
import JSONNode from './JSONNode';
import DevModeToggle from './DevModeToggle';
import SearchBar from '../ui/SearchBar';
import { useLiveUpdate } from '../../hooks/useLiveUpdate';

const PortfolioViewer = ({ initialData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [devMode, setDevMode] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const data = useLiveUpdate(initialData);
  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
      })
      .catch(err => console.error('Failed to copy: ', err));
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Portfolio Data</h2>
        <DevModeToggle isActive={devMode} onToggle={() => setDevMode(!devMode)} />
      </div>
      
      <SearchBar 
        value={searchQuery} 
        onChange={handleSearchChange} 
        placeholder="Cari properti..." 
      />
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        {devMode && (
          <div className="flex justify-end mb-2">
            <button
              onClick={copyToClipboard}
              className={`px-3 py-1 text-sm rounded ${
                copySuccess 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              } transition-colors`}
            >
              {copySuccess ? 'Copied!' : 'Copy JSON'}
            </button>
          </div>
        )}
        {devMode ? (
          // Raw JSON mode
          <pre className="whitespace-pre-wrap text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          // Interactive JSON viewer
          <div className="overflow-auto">
            <JSONNode data={data} searchQuery={searchQuery} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioViewer;