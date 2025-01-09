
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    
    const queryParams = new URLSearchParams(location.search);
    const redirectTo = queryParams.get('redirect') || '/home';
    
    
    navigate(redirectTo);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
