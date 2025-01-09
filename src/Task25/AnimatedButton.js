import React from 'react';
import { motion } from 'framer-motion';

function AnimatedButton({ onClick }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        backgroundColor: '#3498db',
        color: '#fff',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: '#2980b9',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#4caf50',
        color: '#fff',
      }}
      onClick={onClick}
    >
      Open Modal
    </motion.button>
  );
}

export default AnimatedButton;
