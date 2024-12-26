import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  // State for storing the fetched data
  const [data, setData] = useState(null);
  // State for managing loading status
  const [loading, setLoading] = useState(true);
  // State for managing error
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize the fetch operation
    const controller = new AbortController(); 
    const signal = controller.signal; 

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
        const result = await response.json();
        setData(result); 
        setLoading(false); 
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch request was aborted'); 
        } else {
          setError(err); 
        }
        setLoading(false); 
      }
    };

    fetchData(); // Call the fetch function

    
    return () => {
      controller.abort(); 
    };
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
