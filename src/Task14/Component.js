
import React, { Suspense, useState } from 'react';


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

    
      <Suspense fallback={<div>Loading...</div>}>
        <LazyExpensiveComponent />
      </Suspense>
    </div>
  );
};

export default Component;
