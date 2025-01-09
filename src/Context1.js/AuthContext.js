// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if there's a JWT token in localStorage and set user accordingly
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode the token (you can use libraries like jwt-decode)
      const decodedUser = JSON.parse(atob(token.split('.')[1]));
      setUser(decodedUser);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedUser = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get user info
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
