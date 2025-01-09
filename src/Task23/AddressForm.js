import React, { useState } from 'react';

function AddressForm({ data, onNext, onDataChange }) {
  const [address, setAddress] = useState(data || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDataChange({ address });
    onNext();
  };

  return (
    <div>
      <h2>Step 1: Address</h2>
      <form onSubmit={handleSubmit}>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default AddressForm;
