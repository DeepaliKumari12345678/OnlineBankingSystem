import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';

import TransactionDetails from './component/TransactionDetails';
import UserPage from './component/UserPage';
import ForgotPassword from './component/ForgotPassword';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import CreateAccount from './component/CreateAccount';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction/:transactionId" element={<TransactionDetails />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/create-account" element={<CreateAccount/>} />
      </Routes>
    </Router>
  );
};

export default App;
