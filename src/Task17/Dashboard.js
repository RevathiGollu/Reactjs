import React from 'react';
import { useAuth } from '../Context1.js/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>This is the protected dashboard page.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
