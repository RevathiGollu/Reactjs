import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      style={{
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        textAlign: 'center',
      }}
    >
      <span>{theme === 'light' ? 'Turn Off Lights' : 'Turn On Lights'}</span>
    </div>
  );
};

export default ThemeToggler;
