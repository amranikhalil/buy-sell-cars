// SidebarVendeur.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Truck, DollarSign, BarChart2 } from 'react-feather';

function SidebarVendeur() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">

      <div className="py-6 text-center">
        <h1 className="text-2xl font-bold">Vendeur Dashboard</h1>

        <div className="bg-white h-1 mx-4 my-2"></div>
      </div>


      <ul className="space-y-2 pl-2.5">
        <li className="mb-2">
          <Link to="/" className="flex items-center text-white hover:bg-gray-800 py-2 px-4 rounded">
            <Home size={20} className="mr-2" />
            Home
          </Link>
        </li>
        
        <li className="mb-2">
          <Link to="/CarsVendeur" className="flex items-center text-white hover:bg-gray-800 py-2 px-4 rounded">
            <Truck size={20} className="mr-2" />
            Manage Cars
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/SalesVendeur" className="flex items-center text-white hover:bg-gray-800 py-2 px-4 rounded">
            <DollarSign size={20} className="mr-2" />
            Sales
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Predict" className="flex items-center text-white hover:bg-gray-800 py-2 px-4 rounded">
            <BarChart2 size={20} className="mr-2" />
            Prices Estimation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarVendeur;
