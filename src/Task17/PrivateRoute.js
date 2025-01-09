import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate for redirect in v6
import { useAuth } from '../Context1.js/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" />}  // Render Element or Redirect
    />
  );
};

export default PrivateRoute;
