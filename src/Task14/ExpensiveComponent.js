// src/components/ExpensiveComponent.js
import React from 'react';

// ExpensiveComponent is wrapped with React.memo() to avoid unnecessary re-renders.
const ExpensiveComponent = () => {
  console.log("ExpensiveComponent rendered!");

  return (
    <div>
      <h2>This is an expensive component that is lazy-loaded.</h2>
      <p>It might take some time to load.</p>
    </div>
  );
};

export default React.memo(ExpensiveComponent);  // Wrapping with React.memo()
