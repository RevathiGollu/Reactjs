// useFetchOptions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchOptions = (url) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setOptions(response.data);  // Assuming the API returns an array of options
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { options, loading, error };
};

export default useFetchOptions;
