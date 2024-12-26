import React,{useState,useEffect} from "react";
const UserList = () => {
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                 throw new error ("failed to fetch") ;  
                }
                const data = await response.json();
            
        // Add a random 'isActive' property for demonstration
        const updatedData = data.map(user => ({
          ...user,
          isActive: Math.random() > 0.5 // Randomly assign active/inactive status
        }));
        setUsers(updatedData);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }

        };
        fetchUsers();
    } ,
  []);
  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id} style={{ margin: '10px 0', listStyle: 'none' }}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Status:</strong>{' '}
              {user.isActive ? (
                <span style={{ color: 'green' }}>Active ✅</span>
              ) : (
                <span style={{ color: 'red' }}>Inactive ❌</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
export default UserList;