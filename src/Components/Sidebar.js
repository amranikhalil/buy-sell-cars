// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Truck, DollarSign, BarChart2, Menu } from 'react-feather';

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-blue-900 text-white fixed left-0 top-0">

      <div className="py-6 text-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <div className="bg-white h-1 mx-4 my-2"></div>
      </div>


      <ul className="space-y-2 pl-2.5">
        <li className="mb-2">
          <Link to="/" className="flex items-center text-white hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
            <Home size={20} className="mr-2" />
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Account" className="flex items-center text-white hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
            <Users size={20} className="mr-2" />
            Manage Account
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Cars" className="flex items-center text-white hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
            <Truck size={20} className="mr-2" />
            Manage Cars
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Sales" className="flex items-center text-white hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
            <DollarSign size={20} className="mr-2" />
            Sales
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Predict" className="flex items-center text-white hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
            <BarChart2 size={20} className="mr-2" />
            Prices Estimation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
