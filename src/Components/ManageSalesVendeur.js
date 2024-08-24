// SalesManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit } from 'react-feather';
import Sidebar from './SidebarVendeur';

const SalesManagementVendeur = () => {
  const [sales, setSales] = useState([]);
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const storedId = storedUser?.userId;
  
  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/sales/sales-PerSalesmen?id=${storedId}`);
      setSales(response.data);
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  };


  return (
    <div className="flex h-screen bg-gray-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-grow p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Sales Management</h2>

        {/* Sales table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white border rounded-lg shadow-lg border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4">Car Model</th>
                <th className="px-6 py-4">Client Name</th>                
                <th className="px-6 py-4">Purchase Date</th>                
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {sales.map((sale) => (
                <tr key={sale._id} className="border-t hover:bg-gray-50">                  
                  <td className="px-6 py-4">{sale.idVoiture.Brand} {sale.idVoiture.Model}</td>
                  <td className="px-6 py-4">{sale.idClient.name}</td>                  
                  <td className="px-6 py-4">{new Date(sale.purchaseDate).toLocaleDateString()}</td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesManagementVendeur;
