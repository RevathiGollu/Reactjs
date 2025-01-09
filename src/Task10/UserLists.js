import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserLists() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  const handleUserClick = (id, name) => {
    
    navigate(`/user/${id}`, { state: { name } });
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id, user.name)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserLists;
