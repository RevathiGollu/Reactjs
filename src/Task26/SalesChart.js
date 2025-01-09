
import React from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const barData = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
  { name: 'Apr', sales: 700 },
  { name: 'May', sales: 600 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Furniture', value: 300 },
  { name: 'Clothing', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function SalesChart() {
  return (
    <div>
      <h2>Sales Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Sales Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
