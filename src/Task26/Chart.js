
import React from 'react';
import SalesChart from './SalesChart';
import SalesMap from './SalesMap';

console.log(SalesChart);
console.log(SalesMap);

function Chart() {
  return (
    <div>
      <h1>Sales Dashboard</h1>
      <SalesChart />
    <SalesMap />
    </div>
  );
}

export default Chart;
