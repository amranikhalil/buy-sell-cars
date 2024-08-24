// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login"; // Import the Login component
import AdminDashboard from "./Components/AdminDashboard";
import VendeurDashboard from "./Components/VendeurDashboard";
import AccountManagement from "./Components/AccountManagement";
import BlockedUsers from "./Components/Blocked";
import ManageStudents from "./Components/ManageStudents";
import ManageCars from "./Components/ManageCars";
import ManageCarsVendeur from "./Components/ManageCarsVendeur";
import SalesManagement from "./Components/ManageSales";
import SalesManagementVendeur from "./Components/ManageSalesVendeur";
import SubscribeForm from "./Components/Subscribe";
import Boutique from "./Components/Boutique";
import Panier from "./Components/Panier";
import Error from "./Components/error";
import PredictionForm from "./Components/PredictForm";
function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Vendeur" element={<VendeurDashboard />} />
        <Route path="/Account" element={<AccountManagement />} />
        <Route path="/blocked-users" element={<BlockedUsers />} />
        <Route path="/Students" element={<ManageStudents />} />
        <Route path="/Cars" element={<ManageCars />} />
        <Route path="/CarsVendeur" element={<ManageCarsVendeur />} />
        <Route path="/Sales" element={<SalesManagement />} />
        <Route path="/SalesVendeur" element={<SalesManagementVendeur />} />
        <Route path="/Subscribe" element={<SubscribeForm />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Predict" element={<PredictionForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    
  );
}

export default App;
