import React from 'react';
import DataFetcher from './DataFetcher';
import ErrorBoundary from './ErrorBoundary';

console.log(DataFetcher);
console.log(ErrorBoundary);

function Api() {
  return (
    <ErrorBoundary>
      <h1>API Data Fetch with Retry</h1>
      <DataFetcher />
      </ErrorBoundary>
  );
}

export default Api;
