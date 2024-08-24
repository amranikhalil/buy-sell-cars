import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle  } from 'react-feather';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

import Sidebar from './Sidebar';

const Blocked = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    receiveUsers();
  }, []);

  useEffect(() => {
    console.log(users)
  }, [users]);
  const receiveUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3002/user/get-notactive-users'); 
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3002/user/unblock?id=${userId}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: 'unblocked' } : user
        )&&
        prevUsers.filter((user)=>user._id!==userId)
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
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Blocked Accounts</h2>

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users?.map((user) => (
            <div
              key={user._id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-lg"> Name : {user.name}</p>
              <p className="text-lg"> Surname : {user.surname}</p>
              <p className="text-lg"> Email : <br />{user.email}</p>
              <p className="text-lg"> User Type : {user.userType}</p>
              <div className="mt-4">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    handleUnblockUser(user._id);
                  }}
                >
                  <PlusCircle  size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <Link to="/Account" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">
          Active Accounts
        </Link>
      </div>
    </div>
  );
};

export default Blocked;
