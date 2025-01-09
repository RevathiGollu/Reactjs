import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import UserLists from './UserLists';
import UserProfile from './UserProfile';

function Rout() {
  return (
    <Router>
      <div>
        <h1>User Management</h1>
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rout;
