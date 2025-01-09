import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Get dynamic ID parameter
  const location = useLocation(); // Access passed state
  const userName = location.state?.name || 'Unknown User';

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
      <p>User Name: {userName}</p>
    </div>
  );
}

export default UserProfile;
