// AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div style={{display: 'grid', gridTemplateColumns: '250px auto'}}>
	<Sidebar />  
      </div>
      <div className="flex-grow p-8 ml-64">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
