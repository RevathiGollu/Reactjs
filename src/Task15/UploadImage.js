// src/components/UploadImage.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle the file change
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async () => {
    if (!image) {
      alert('Please choose an image to upload');
      return;
    }

    setLoading(true);
    
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary preset
    formData.append('cloud_name', 'dp6vzljt7'); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dp6vzljt7/image/upload', formData);
      setUrl(response.data.secure_url); // Get the optimized URL from Cloudinary response
      setLoading(false);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Image to Cloudinary</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
      {url && (
        <div>
          <h3>Optimized Image URL:</h3>
          <img src={url} alt="Uploaded" width="300" />
          <p>{url}</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
