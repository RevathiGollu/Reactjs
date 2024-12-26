import React from 'react';
import styles from './ButtonModule.module.css';  // Import CSS Module as an object

const ButtonModule = ({ label, onClick }) => {
    return (
        <button className={styles.buttonModule} onClick={onClick}>
            {label}
        </button>
    );
};

export default ButtonModule;
