import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Context1.js/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';

const Protect = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default Protect;
