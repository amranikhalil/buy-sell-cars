// src/components/SubscribeForm.js
import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    userType: 'client', // Default to 'client'
    active: 'active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,    
    }));
  };
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {	 	  
      const response = await axios.post('http://localhost:3002/user/subscribe', formData);
      console.log('Form submitted:', response.data);
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <Header />
        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-14 mb-16">
            <h2 className="text-2xl font-bold mb-8">Subscribe Form</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="surname" className="block text-sm font-medium text-gray-600">
                Surname
                </label>
                <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="userType" className="block text-sm font-medium text-gray-600">
                User Type
                </label>
                <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                >
                <option value="client">Client</option>
                <option value="seller">Seller</option>
                </select>
            </div>
            <input type="hidden" name="active" value="active" />
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                Subscribe
            </button>
        </form>
        <Footer />
    </div>
    
  );
};

export default SubscribeForm;
