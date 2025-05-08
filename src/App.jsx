import { useState } from 'react';
import Layout from './components/layout/Layout';
import PortfolioViewer from './components/portfolio/PortfolioViewer';
import { portfolioData } from './data/portfolioData';

function App() {
  const [data] = useState(portfolioData);
  
  return (
    <Layout name={data.name} lastUpdated={data.last_updated_at}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{data.location}</p>
        </div>
        
        <PortfolioViewer initialData={data} />
      </div>
    </Layout>
  );
}

export default App;