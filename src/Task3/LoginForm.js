import React, { useState } from 'react';

const LoginForm = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    
    
    setError('');
    console.log('Form submitted with:', { username, password });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username" 
          />
        </div>

        
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
          />
        </div>

      
        {error && <p style={{ color: 'red' }}>{error}</p>}

      
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
