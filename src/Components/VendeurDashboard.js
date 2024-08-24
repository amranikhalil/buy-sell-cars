// VendeurDashboard.js
import React from 'react';
import Sidebar from './SidebarVendeur';
import AvatarPlaceholder from './AvatarPlaceholder'; // Import the AvatarPlaceholder component

const VendeurDashboard = () => {
	const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedName = storedUser?.name;
  return (
    <div className="flex">
      <div style={{display: 'grid', gridTemplateColumns: '250px auto'}}>
        <Sidebar />
      </div>

      <div className="flex-grow p-8 ml-64">
      {storedUser ? (
        <h1 className="text-3xl font-bold mb4">Bienvenue au dashboard Vendeur, {storedName}!</h1>
      ) : (
        <p>Please log in</p>
      )}        
      </div>
    </div>
  );
};

export default VendeurDashboard;
