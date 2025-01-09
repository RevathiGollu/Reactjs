import React, { useReducer } from 'react';
import { themeReducer } from './ThemeReducer';
import { TOGGLE_THEME } from './ThemeReducer';
import ThemeContext from './ThemeContext';

const initialState = {
  theme: 'light', // initial theme state
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
