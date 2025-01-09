
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ComponentThatMightError from './ComponentThatMightError.js';

function Error() {
  return (
    <div className="App">
      <h1>React Error Boundary Example</h1>

      
      <ErrorBoundary>
        <ComponentThatMightError />
      </ErrorBoundary>
    </div>
  );
}

export default Error;
