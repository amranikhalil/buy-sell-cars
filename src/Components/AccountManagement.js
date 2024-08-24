import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XCircle } from 'react-feather';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';

const ManageAccounts = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate =useNavigate()
  useEffect(() => {
    receiveUsers();
  }, []);

  const receiveUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3002/user/get-active-users'); // Adjust the API route to fetch active users
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlockUser = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3002/user/block?id=${userId}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: 'blocked' } : user
        )&&
        prevUsers.filter(user=>user._id!==userId)
      );
      
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <Sidebar />
      </div>
      <div className="ml-6 w-3/4 p-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Manage Accounts</h2>

        <div className="flex mb-4 ">
          {/* Search bar */}
          <div className="mb-4 w-3/4 mt-4">
            <input
              type="text"
              placeholder="Search accounts..."
              className="border rounded py-2 px-3 w-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link to="/blocked-users" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-6">
          Blocked Users
        </Link>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users?.map((user) => (
            <div
              key={user._id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-lg"> Name : {user.name}</p>
              <p className="text-lg"> Surname : {user.surname}</p>
              <p className="text-lg"> Email : <br /> {user.email}</p>
              <p className="text-lg"> User Type : {user.userType}</p>
              <div className="mt-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => {
                    handleBlockUser(user._id);
                  }}
                >
                  <XCircle size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default ManageAccounts;
