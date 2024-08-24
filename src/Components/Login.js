import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../AuthContext';



const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isloggedin, setIsloggedin] = useState(false);
  const { user, loginUser, logoutUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
		if (email === "admin@gmail.com" && password === "admin") {
			navigate("/Admin");
			return;
		}
    
        try {
      const response = await axios.post('http://localhost:3002/user/Login', { email, password });
      const data = response.data;
	  
      if (data.success) {
        setLoginStatus("Login successful");
        console.log(data);
        loginUser(data);
        navigate('/');
      } else {
        setLoginStatus(data.message || "Server error");
      }
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 403) {
          setLoginStatus("Your account is blocked");
        } else if (err.response.status === 401) {
          setLoginStatus("Incorrect password");
        } else if (err.response.status === 404) {
          setLoginStatus("No record exists with this email");
        } else {
          setLoginStatus("Server error");
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.error(err.request);
        setLoginStatus("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error(err.message);
        setLoginStatus("Error setting up the request");
      }
    }
  };

  return (
    <div > 
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
          {loginStatus && <p>{loginStatus}</p>}
          <p className="mt-8">
            If you don't have an accout please <Link to="/Subscribe" className="text-blue-500 hover:underline"> Subscribe here </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
