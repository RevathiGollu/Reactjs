import React from 'react';

function ReviewForm({ data, onPrev }) {
  return (
    <div>
      <h2>Step 3: Review</h2>
      <div>
        <h3>Address:</h3>
        <p>{data.address}</p>
        <h3>Payment:</h3>
        <p>{data.payment}</p>
      </div>
      <button onClick={onPrev}>Back</button>
      <button onClick={() => alert('Checkout Complete!')}>Submit</button>
    </div>
  );
}

export default ReviewForm;
