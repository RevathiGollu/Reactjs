// App.js
import React from 'react';
import Dropdown from './Dropdown';

function Url() {
  const apiUrl =' https://jsonplaceholder.typicode.com/posts';

  return (
    <div>
      <h1>Reusable Dropdown Component</h1>
      <Dropdown url={apiUrl} />
    </div>
  );
}

export default Url;
