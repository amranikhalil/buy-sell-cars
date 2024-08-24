// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} XYZ car shop</p>
        <p className="mt-2">
          Address: 123 car shop St, City, State 12345
        </p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@xyzcarshop.com</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
