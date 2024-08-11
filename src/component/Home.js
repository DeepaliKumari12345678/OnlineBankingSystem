import React from 'react';
import './Home.css'; // Make sure to import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="https://st4.depositphotos.com/20523700/25321/v/450/depositphotos_253216228-stock-illustration-vector-internet-banking-icon.jpg" alt="Bank Logo" className="logo" />
        <h1>Welcome to DJ Bank</h1>
      </header>
      
      <nav className="home-nav">
        <ul>
          <li><a href="/create-account">CreateAccount</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>

      <div className="home-content">
        <h2>Your trusted partner in banking</h2>
        <p>Manage your finances with ease and security. Explore our services to find out more.</p>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 DJ Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;