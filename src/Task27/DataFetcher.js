import React, { useEffect, useState } from 'react';
import { fetchData } from './apiService';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(0);

  
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchData('https://jsonplaceholder.typicode.com/posts');
      setData(result);
    } catch (err) {
      setError('Failed to load data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    loadData();
  }, [retry]);

  
  const handleRetry = () => {
    setRetry((prev) => prev + 1); 
  };


  if (isLoading) return <p>Loading data...</p>;

  
  if (error)
    return (
      <div>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );

  
  return (
    <div>
      <h2>Data Loaded Successfully</h2>
      <ul>
        {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default DataFetcher;
