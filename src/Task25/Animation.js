import React, { useState } from 'react';
import Modal from './Modal';
import AnimatedButton from './AnimatedButton';

function Animation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Framer Motion Modal & Button Animation</h1>
      <AnimatedButton onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Animation;
