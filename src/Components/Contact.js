// src/components/Contact.js

import React from "react";
import Header from "./Header";
import HeaderClient from "./HeaderClient";
import HeaderVendeur from "./HeaderVendeur";



const Contact = () => {
	const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedName = storedUser?.name;
	const storedUserType = storedUser?.userType || "visiteur";
	
	
  return (

    <div className="bg-gray-100 min-h-screen">
      {storedUserType === "client" ? <HeaderClient /> : (storedUserType === "seller" ? <HeaderVendeur /> : <Header />)}
      <div className="container mx-auto p-8 pt-8">
        <h1 className="text-3xl font-semibold mb-4" >Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or need assistance? Reach out to us below.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p>123 Car Shop St.</p>
            <p>City, State 12345</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: info@xyzcarshop.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
