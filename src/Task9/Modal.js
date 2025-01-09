import React from 'react';


const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-content">{children}</div>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  ); 
};

export default Modal;
