
import React, { Suspense, useState } from 'react';

// Lazy loading ExpensiveComponent
const LazyExpensiveComponent = React.lazy(() => import('./ExpensiveComponent'));

const Component = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Lazy Loading and React.memo Example</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Increment</button>

      {/* Suspense to handle loading state while the component is being fetched */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyExpensiveComponent />
      </Suspense>
    </div>
  );
};

export default Component;
