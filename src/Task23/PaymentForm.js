import React, { useState } from 'react';

function PaymentForm({ data, onNext, onPrev, onDataChange }) {
  const [payment, setPayment] = useState(data || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDataChange({ payment });
    onNext();
  };

  return (
    <div>
      <h2>Step 2: Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>Payment Info:</label>
        <input
          type="text"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        />
        <button type="button" onClick={onPrev}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PaymentForm;
