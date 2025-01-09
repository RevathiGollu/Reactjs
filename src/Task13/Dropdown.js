// Dropdown.js
import React from 'react';
import useFetchOptions from './useFetchOptions'; // Importing the custom hook

const Dropdown = ({ url }) => {
  const { options, loading, error } = useFetchOptions(url);

  if (loading) {
    return <div>Loading options...</div>;
  }

  if (error) {
    return <div>Error fetching options: {error}</div>;
  }

  return (
    <select>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title} {/* Assuming each option has an 'id' and 'name' */}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
