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
    const controller = new AbortController(); // To cancel the fetch request on unmount
    const signal = controller.signal; // Use the signal to abort the request

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
        const result = await response.json();
        setData(result); // Set fetched data to state
        setLoading(false); // Data fetched, set loading to false
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch request was aborted'); // Handle abort error
        } else {
          setError(err); // Handle any other errors
        }
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); // Call the fetch function

    // Cleanup function that runs on component unmount
    return () => {
      controller.abort(); // Abort the fetch request
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

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
