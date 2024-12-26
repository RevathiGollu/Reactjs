import React, { useState, useEffect } from 'react';

// UserForm Component for fetching and posting data
const UserForm = () => {
  // State variables for form data, loading, and API responses
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching existing users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  // Handling form submission for posting new user data
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the form from reloading the page
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)  // Sending form data as JSON
      });

      const newUser = await response.json();
      setUsers([...users, newUser]);  // Adding the newly created user to the state
      setUserData({ name: '', email: '' });  // Resetting the form after successful submission
    } catch (err) {
      setError(err);
    }
  };

  // Handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Rendering the component
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
