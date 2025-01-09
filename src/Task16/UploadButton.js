// src/components/UploadButton.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadButton;
