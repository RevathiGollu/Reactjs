
import React from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const welcomeMessage = queryParams.get('message') || 'Welcome!';

  return (
    <div>
      <h1>Home Page</h1>
      <p>{welcomeMessage}</p>
    </div>
  );
}

export default HomePage;
