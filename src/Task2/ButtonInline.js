import React from 'react';
import './ButtonInline.css';  // Import inline styles if any

const ButtonInline = ({ label, onClick }) => {
    return (
        <button className="button-inline" onClick={onClick}>
            {label}
        </button>
    );
};

export default ButtonInline;
