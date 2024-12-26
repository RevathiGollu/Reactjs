import React, { useState } from 'react';

const LoginForm = () => {
  // State to hold form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State to handle validation errors
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    
    // If validation passes, clear the error and submit form
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

        {/* Password input */}
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

        {/* Error message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
