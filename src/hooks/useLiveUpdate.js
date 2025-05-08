import { useState, useEffect } from 'react';

export const useLiveUpdate = (initialData) => {
  const [data, setData] = useState({
    ...initialData,
    last_updated_at: new Date().toISOString()
  });
  
  useEffect(() => {
    const updateTimestamp = () => {
      setData(prevData => ({
        ...prevData,
        last_updated_at: new Date().toISOString()
      }));
    };
    
    // Update timestamp setiap menit
    const interval = setInterval(updateTimestamp, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  return data;
};