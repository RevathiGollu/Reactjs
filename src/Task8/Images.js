import React, { useState } from 'react';

function Images() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  
  const styles = {
    container: {
      textAlign: 'center',
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '50px auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      marginBottom: '20px',
    },
    imagePreview: {
      width: '200px',
      height: '200px',
      margin: '10px auto',
      border: '2px dashed #ddd',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f9fafc',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    placeholder: {
      color: '#aaa',
    },
    input: {
      margin: '15px 0',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Upload Profile Picture</h2>
      <div style={styles.imagePreview}>
        {preview ? (
          <img src={preview} alt="Profile Preview" style={styles.image} />
        ) : (
          <span style={styles.placeholder}>Image Preview</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={styles.input}
      />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => alert('Image uploaded successfully!')}
      >
        Upload
      </button>
    </div>
  );
}

export default Images;
